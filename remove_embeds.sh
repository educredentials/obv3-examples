#!/bin/bash

# Check if a README file is provided as an argument
if [[ -z "$1" ]]; then
  echo "Usage: $0 <README file>"
  exit 1
fi

README="$1"  # The README file passed as an argument

# Check if the README exists
if [[ ! -f "$README" ]]; then
  echo "README file not found: $README"
  exit 1
fi

# Remove everything between the managed comments, including the comments themselves
sed -i '/<!-- managed_by_embed -->/,/<!-- \/managed_by_embed -->/d' "$README"

echo "Managed content removed from $README."
