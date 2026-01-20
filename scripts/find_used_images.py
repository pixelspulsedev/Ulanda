
import os
import re

def is_commented(line):
    stripped = line.strip()
    if stripped.startswith('//'):
        return True
    if stripped.startswith('/*') and stripped.endswith('*/'):
        return True
    if stripped.startswith('{/*') and stripped.endswith('*/}'):
        return True
    return False

def find_images(root_dir):
    image_pattern = re.compile(r'["\']([^"\']+\.(?:png|jpg|jpeg|webp|svg|gif))["\']')
    
    found_images = set()

    for subdir, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(('.js', '.jsx', '.ts', '.tsx', '.json')):
                filepath = os.path.join(subdir, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        lines = f.readlines()
                        in_multiline_comment = False
                        for line in lines:
                            stripped = line.strip()
                            
                            # Simple multiline comment detection
                            if '/*' in stripped and '*/' not in stripped:
                                in_multiline_comment = True
                                continue
                            if '*/' in stripped and in_multiline_comment:
                                in_multiline_comment = False
                                continue
                            if in_multiline_comment:
                                continue

                            if is_commented(line):
                                continue
                            
                            matches = image_pattern.findall(line)
                            for match in matches:
                                if not match.startswith('http'): # Keep relative paths mostly
                                    found_images.add(match)
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")

    return sorted(list(found_images))

if __name__ == "__main__":
    # Assuming script is run from project root, identifying absolute path to src
    root = os.path.join(os.getcwd(), "src")
    images = find_images(root)
    for img in images:
        print(img)
