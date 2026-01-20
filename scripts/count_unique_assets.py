import os
import re

root_dir = './src'
unique_assets = set()
pattern = re.compile(r'[\"\'](/assets/img/[^\"\']+\.(?:webp|png|jpg|jpeg|svg|gif))[\"\']')

for subdir, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(('.js', '.jsx')):
            filepath = os.path.join(subdir, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    matches = pattern.findall(content)
                    for match in matches:
                        unique_assets.add(match)
            except Exception as e:
                pass

print('---BEGIN COUNT---')
print(len(unique_assets))
print('---END COUNT---')
print('---BEGIN LIST---')
for asset in sorted(unique_assets):
    print(asset)
print('---END LIST---')
