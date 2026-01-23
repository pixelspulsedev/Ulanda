# dump_structure.py
import re

file_path = "src/data/pageContents/treatments/treatments.js"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Naive parser to find structure
# Look for keys.
# This file is big, so we'll look for lines with "id": "..." or "title": "..."
# and try to infer nesting from indentation? No, JSON/JS object structure.

# Better: use regex to find "subCategories": { ... } blocks and "treatments": { ... } blocks
# and extract their keys.

lines = content.split('\n')
for i, line in enumerate(lines):
    line = line.strip()
    if line.startswith('"id":') or line.startswith('id:') or \
       line.startswith('"title":') or line.startswith('title:') or \
       'subCategories' in line or 'treatments' in line:
        print(f"{i+1}: {line}")
