#!/bin/bash

# TODO: unhardcode paths.

set -e # fail if any command fails, -o errexit
set -o pipefail # fail if any command in a pipeline fails
set -u # fail if variable is not set, -o nounset

if [ "${DEBUG:-false}" = "true" ]; then
  set -x # print commands
fi

for file in "$@"; do
  hash=$(sha256sum "$file" | awk '{print $1}')
  jq -c --arg preAuthorizedCode "$hash" \
     '{credentials: ["OpenBadgeCredential"], grants: {"urn:ietf:params:oauth:grant-type:pre-authorized_code":{"pre-authorized_code":$preAuthorizedCode,"user_pin_required":false}}, credentialDataSupplierInput: .}' < "$file" | \

  offer_json=$(basename "$file" .json).offer.json
  offer_png=$(basename "$file" .json).offer.png
  
  curl -X POST https://agent.poc4.eduwallet.nl/edubadges/api/create-offer \
       --silent \
       -H "Content-Type: application/json" \
       -H "Authorization: Bearer ${AGENT_AUTHORIZATION_CODE}" \
       -d @- \
       -o "./offers/txt/${offer_json}"

  uri=$(jq '.uri' -r < "./offers/txt/${offer_json}")
  qrcode ${uri} > "./offers/img/${offer_png}"

  echo "<!-- managed_by_create_offer -->"
  echo "![${offer_png}](${offer_png})"
  echo "<!-- /managed_by_create_offer -->"
done
