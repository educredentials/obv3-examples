# Variables
JSON_FILES = $(wildcard _data/credentials/*.json)

.PHONY: test

preview:


test:
	@./check_vc_credential_schemas.sh $(JSON_FILES)
