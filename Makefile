# Variables
README = examples.md
JSON_FILES = $(wildcard _credentials/*.json)

.PHONY: embed offers all clean test

# Default target
all: embed offers

embed: $(README) $(JSON_FILES)
	@echo "Embedding JSON files into $(README)..."
	@./remove_embeds.sh $(README)
	@./json_to_markdown.sh $(JSON_FILES) >> $(README)
	@echo "Embedding complete."

offers:
	@./create_offer.sh $(JSON_FILES) > _data/offers.json

# Clean target to reset state (optional)
.PHONY: clean
clean:
	@./remove_embeds.sh $(README)

test:
	@./check_vc_credential_schemas.sh $(JSON_FILES)
