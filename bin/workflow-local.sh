#!/usr/bin/env bash

# Load .env file
if [ -f .env ]; then
    while IFS= read -r line || [ -n "$line" ]; do
        export "${line?}"
    done < .env
fi

# Check if 'act' is NOT installed
if ! command -v act &> /dev/null
then
    echo "act is not installed. Exiting..."
    exit 1
fi

act -P ubuntu-latest=catthehacker/ubuntu:full-latest -s VERCEL_TOKEN="$TOKEN" \
  -s VERCEL_SCOPE_ID="$SCOPE" \
  -s VERCEL_WEBSITE_ID="$PROJECT_WEBSITE" \
  -s VERCEL_API_ID="$PROJECT_API"
