#!/bin/bash

# TODO: unhardcode paths.

set -e # fail if any command fails, -o errexit
set -o pipefail # fail if any command in a pipeline fails
set -u # fail if variable is not set, -o nounset

_AGENT_CREATE_CREDENTIALS_URL="https://agent.poc9.eduwallet.nl/v0/credentials"
_AGENT_CREATE_OFFER_URL="https://agent.poc9.eduwallet.nl/v0/offers"


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

  offer_txt_file="./offers/txt/$(basename "$file" .json).offer.txt"
  offer_json_file="./offers/txt/$(basename "$file" .json).offer.json"
  offer_png_file="./offers/img/$(basename "$file" .json).offer.png"

  # Create the credential on the agent with a unique offerId
  jq -c --arg id "$hash" \
     '{offerId:$id, credentialConfigurationId:"openbadge_credential", expiresAt:"never", isSigned:false, credential:.}' < "$file" | \
  curl -X POST "${_AGENT_CREATE_CREDENTIALS_URL}" \
       --silent \
       -H "Content-Type: application/json" \
       -H "Authorization: Bearer ${AGENT_AUTHORIZATION_CODE}" \
       -d @- \
       > /dev/null # no output, the response is merely a report of success

  # Create the offer on the agent with the same offerId
  curl -X POST "${_AGENT_CREATE_OFFER_URL}" \
       --silent \
       -H "Content-Type: application/json" \
       -H "Authorization: Bearer ${AGENT_AUTHORIZATION_CODE}" \
       -d "{\"offerId\": \"$hash\", \"preAuthorizedCode\": \"$hash\" }" \
       -o "${offer_txt_file}"

  uri=$(<"${offer_txt_file}")
  qrcode ${uri} > "${offer_png_file}"

  # Build a json file with the offer details, a uri, and id.
  jq -n \
    --arg id "$hash" \
    --arg uri "$uri" \
    '{id: $id, uri: $uri}' > "${offer_json_file}"

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
