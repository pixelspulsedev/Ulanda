#!/usr/bin/env python3
"""Sync individual condition hero images to match their thumbnail placeholderUrls from conditions.js"""
import re
import json

# Read conditions.js to extract all subcondition placeholderUrls
with open("src/data/pageContents/conditions/conditions.js", 'r', encoding='utf-8') as f:
    conditions_content = f.read()

# Read individualConditions.js
with open("src/data/pageContents/conditions/individualConditions.js", 'r', encoding='utf-8') as f:
    individual_content = f.read()

# Extract all subcondition items with their links and placeholderUrls
# Pattern: link: '/conditions/.../condition-id' and placeholderUrl: "url"
link_pattern = r"link:\s*'(/conditions/[^/]+/([^']+))'"
url_pattern = r"placeholderUrl:\s*\"([^\"]+)\""

# Find all items blocks in conditions.js
items_pattern = r'items:\s*\[(.*?)\]'
items_matches = re.finditer(items_pattern, conditions_content, re.DOTALL)

# Build mapping of condition-id -> placeholderUrl
condition_url_map = {}

for items_match in items_matches:
    items_block = items_match.group(1)
    # Split into individual item objects (rough split by closing brace)
    item_objects = re.split(r'\},\s*\{', items_block)
    
    for item_obj in item_objects:
        link_match = re.search(link_pattern, item_obj)
        url_match = re.search(url_pattern, item_obj)
        
        if link_match and url_match:
            full_link = link_match.group(1)
            condition_id = link_match.group(2)
            placeholder_url = url_match.group(1)
            condition_url_map[condition_id] = placeholder_url

print(f"Found {len(condition_url_map)} condition thumbnail URLs to sync")

# Now update individualConditions.js hero images to match
updated_count = 0

for condition_id, url in condition_url_map.items():
    # Pattern: id: 'condition-id' ... hero: { ... image: "old-url"
    pattern = rf"(id:\s*'{condition_id}'.*?hero:\s*\{{.*?image:\s*)\"[^\"]+\""
    replacement = rf'\1"{url}"'
    new_content = re.sub(pattern, replacement, individual_content, count=1, flags=re.DOTALL)
    
    if new_content != individual_content:
        updated_count += 1
        individual_content = new_content

# Write back
with open("src/data/pageContents/conditions/individualConditions.js", 'w', encoding='utf-8') as f:
    f.write(individual_content)

print(f"✓ Synced {updated_count} individual condition hero images to match their thumbnails")
print("\nCondition ID -> URL mapping:")
for cid, url in sorted(condition_url_map.items()):
    print(f"  {cid}: {url[:80]}...")
