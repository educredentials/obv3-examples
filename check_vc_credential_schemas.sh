#!/bin/sh

set -e
set -u

is_debug() {
  if [ "${DEBUG:-false}" = "true" ]; then
    return 0
  else
    return 1
  fi
}

assert_schema() {
  _schema=$1
  _credential=$2
  boon --assert-content $_schema $_credential
}

if is_debug; then
  set -x # print commands
fi

if [ $# -eq 0 ]; then
  echo "Check if a credential file(s) conform to the schemas defined in credentialSchema attribute."
  echo "Usage: $0 <credential> <credential> ..."
  exit 1
fi

for credential in $@; do
  for schema_name in $(jq -r ".credentialSchema[].id" < $credential | xargs basename -a); do
    schema="./schemas/$schema_name"

    if is_debug; then
      echo "Checking schema $schema"
    fi

    assert_schema $schema $credential
  done
done
