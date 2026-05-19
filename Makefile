# Variables
JSON_FILES = $(wildcard _data/credentials/*.json)

.PHONY: test preview

preview:
	podman build -t pages -f Dockerfile.pages .
	podman run --rm -it -v "$(pwd):/site" -p 4000:4000 -p 35729:35729 pages serve --host 0.0.0.0
test:
	@./check_vc_credential_schemas.sh $(JSON_FILES)
