#!/usr/bin/env python3
"""Sync all image fields to match their placeholderUrl in individualConditions.js."""
import re

file_path = "src/data/pageContents/conditions/individualConditions.js"

# Read the file
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find image: followed by placeholderUrl:
pattern = r'(image:\s*)("[^"]+")(\s*,\s*placeholderUrl:\s*)("[^"]+")' 

def replace_func(match):
    prefix = match.group(1)  # "image: "
    old_image = match.group(2)  # old image URL
    middle = match.group(3)  # ",\n      placeholderUrl: "
    placeholder_url = match.group(4)  # placeholder URL
    
    # Only replace if they're different
    if old_image != placeholder_url:
        return f'{prefix}{placeholder_url}{middle}{placeholder_url}'
    return match.group(0)

# Apply the replacement
new_content = re.sub(pattern, replace_func, content)

# Count how many were changed
changes = content != new_content

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

if changes:
    print("✓ Synced all individualConditions image fields to match their placeholderUrl values")
else:
    print("✓ All image fields already match their placeholderUrl values")
