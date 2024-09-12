#!/bin/bash

## Add opening comment to mark the start of managed content
echo "<!-- managed_by_embed -->"

# Iterate over each JSON file
for json_file in "$@"; do
  if [[ -f "$json_file" ]]; then
    # Extract the file name
    json_file_name=$(basename "$json_file")

    # Read the content of the JSON file
    json_file_content=$(cat "$json_file")


    # Print the templated html to the console
    echo "<details>"
    echo "<summary>$json_file_name</summary>"
    echo ""
    echo "\`\`\`json"
    echo "$json_file_content"
    echo "\`\`\`"
    echo ""
    echo "</details>"
  fi
done

# Add closing comment to mark the end of managed content
echo "<!-- /managed_by_embed -->"
