
import os
import re

# Regex to find image paths
# Matches strings starting with /assets/img, ./assets, or absolute URLs, or ending in image extensions
# We look for strings inside quotes
image_pattern = re.compile(r'[\"\']([^\"\']+\.(?:jpg|jpeg|png|webp|svg|gif)(?:[?][^\"\']*)?)[\"\']', re.IGNORECASE)

root_dir = 'src'
unique_images = set()

for subdir, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(('.js', '.jsx')):
            filepath = os.path.join(subdir, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    matches = image_pattern.findall(content)
                    for match in matches:
                        if '/assets/' in match or 'http' in match:
                             unique_images.add(match)
            except Exception as e:
                print(f'Error reading {filepath}: {e}')

print(f'Total Unique Images Found: {len(unique_images)}')
for img in sorted(unique_images):
    print(img)
