# Variables
README = examples.md
JSON_FILES = $(wildcard *.json)

# Default target
.PHONY: all
all: embed

# Embed target
.PHONY: embed
embed: $(README) $(JSON_FILES)
	@echo "Embedding JSON files into $(README)..."
	@./remove_embeds.sh $(README)
	@./json_to_markdown.sh $(JSON_FILES) >> $(README)
	@echo "Embedding complete."

# Clean target to reset state (optional)
.PHONY: clean
clean:
	@./remove_embeds.sh $(README)

test:
	boon --assert-content schemas/ob_v3p0_achievementcredential_schema.json *.json
