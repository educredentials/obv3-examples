#!/bin/bash

# TODO: unhardcode paths.

set -e # fail if any command fails, -o errexit
set -o pipefail # fail if any command in a pipeline fails
set -u # fail if variable is not set, -o nounset

if [ "${DEBUG:-false}" = "true" ]; then
  set -x # print commands
fi

if [ -z "${AGENT_AUTHORIZATION_CODE}" ]; then
  echo "AGENT_AUTHORIZATION_CODE is not set"
  exit 1
fi

declare -a data=()

add_item() {
  local file="$1"
  local thumbnail="$2"
  local name="$3"
  local issuer="$4"
  local credential="$5"
  local offer_json="$6"
  local offer_png="$7"

  item=$(jq -n\
    --arg thumbnail "$thumbnail" \
    --arg name "$name" \
    --arg issuer "$issuer" \
    --arg credential "$credential" \
    --argjson offer_json "$offer_json" \
    --arg offer_png "$offer_png" \
    '{thumbnail: $thumbnail, name: $name, issuer: $issuer, credential: $credential, offer_json: $offer_json, offer_png: $offer_png}')
  data+=("$item")
}

for file in "$@"; do
  hash=$(sha256sum "$file" | awk '{print $1}')

  offer_thumbnail=$(jq -r '.credentialSubject.achievement.image.id' < "$file")
  offer_name=$(jq -r '.credentialSubject.achievement.name' < "$file")
  offer_issuer=$(jq -r '.issuer.name' < "$file")

  offer_json_file="./offers/txt/$(basename "$file" .json).offer.json"
  offer_png_file="./offers/img/$(basename "$file" .json).offer.png"

  jq -c --arg id "$hash" \
     '{credentials: ["OpenBadgeCredential"], grants: {"urn:ietf:params:oauth:grant-type:pre-authorized_code":{"pre-authorized_code":$id,"user_pin_required":false}}, credentialDataSupplierInput: { offerId:$id, credentialConfigurationId:"OpenBadgeCredential", credential:.}}' < "$file" | \

  curl -X POST https://agent.poc4.eduwallet.nl/edubadges/api/create-offer \
       --silent \
       -H "Content-Type: application/json" \
       -H "Authorization: Bearer ${AGENT_AUTHORIZATION_CODE}" \
       -d @- \
       -o "${offer_json_file}"

  uri=$(jq '.uri' -r < "${offer_json_file}")
  qrcode ${uri} > "${offer_png_file}"

  add_item \
    "$file" \
    "$offer_thumbnail" \
    "$offer_name" \
    "$offer_issuer" \
    "$file" \
    "$(cat $offer_json_file)" \
    "$offer_png_file"
done

echo "${data[@]}" | jq -s '.'
