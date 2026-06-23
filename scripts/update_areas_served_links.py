import os
import re

locations_dir = 'src/pages/locations'
link_map = {
    'Hertford': '/locations/aesthetic-clinic-hertford',
    'Broxbourne': '/locations/aesthetic-clinic-broxbourne',
    'Hoddesdon': '/locations/aesthetic-clinic-hoddesdon',
    "Bishop's Stortford": '/locations/aesthetic-clinic-bishops-stortford',
    'Harlow': '/locations/aesthetic-clinic-harlow',
    'Cheshunt': '/locations/aesthetic-clinic-cheshunt',
    'Sawbridgeworth': '/locations/aesthetic-clinic-sawbridgeworth',
    'Welwyn Garden City': '/locations/aesthetic-clinic-welwyn-garden-city',
    'Stevenage': '/locations/aesthetic-clinic-stevenage',
    'Ware': '/locations/aesthetic-clinic-ware',
    'Stanstead Abbotts': '/locations/aesthetic-clinic-stanstead-abbotts',
    'Great Amwell': '/locations/aesthetic-clinic-great-amwell',
    'Buntingford': '/locations/aesthetic-clinic-buntingford',
    'Hertfordshire': '/locations/aesthetic-clinic-hertfordshire'
}

new_locations = ['Ware', 'Stanstead Abbotts', 'Great Amwell', 'Buntingford']

for filename in os.listdir(locations_dir):
    if filename.endswith('.jsx'):
        filepath = os.path.join(locations_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Find areasServed array
        match = re.search(r'const areasServed = \[(.*?)\];', content, re.DOTALL)
        if match:
            original_array_content = match.group(1)
            
            # Parse existing items
            items = []
            item_matches = re.findall(r'\{\s*name:\s*[\'"](.*?)[\'"]\s*,\s*link:\s*(.*?)\s*\}', original_array_content)
            
            existing_names = [m[0] for m in item_matches]
            
            new_items = []
            # Update existing items' links if they are in link_map
            for name, link in item_matches:
                if name in link_map:
                    new_link = f"'{link_map[name]}'"
                    new_items.append(f"{{ name: '{name}', link: {new_link} }}")
                else:
                    new_items.append(f"{{ name: '{name}', link: {link} }}")
            
            # Add missing new_locations
            for loc in new_locations:
                if loc not in [item[0] for item in item_matches]:
                    new_items.append(f"{{ name: '{loc}', link: '{link_map[loc]}' }}")
            
            # Reconstruct array string
            new_array_content = '\n  ' + ',\n  '.join(new_items) + ',\n'
            new_content = content[:match.start(1)] + new_array_content + content[match.end(1):]
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
