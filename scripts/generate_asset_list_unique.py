import re
import os
import csv
from collections import defaultdict

files_to_scan = [
    {
        "path": r"src/data/pageContents/home/home.js",
        "category": "Home Page"
    },
    {
        "path": r"src/data/pageContents/treatments/treatments.js",
        "category": "Treatments"
    },
    {
        "path": r"src/data/pageContents/conditions/conditions.js",
        "category": "Conditions (General)"
    },
    {
        "path": r"src/data/pageContents/conditions/landing.js",
        "category": "Conditions (Landing)"
    },
    {
        "path": r"src/data/pageContents/conditions/individualConditions.js",
        "category": "Conditions (Individual)"
    },
    {
        "path": r"src/data/pageContents/programmes/programmes.js",
        "category": "Programmes"
    },
    {
         "path": r"src/data/common.js",
         "category": "Common / Footer"
    }
]

line_regex = re.compile(r'^(\s*)(?:["\']?([\w\-]+)["\']?\s*:\s*)?["\'](/assets/img/[^"\']+)["\']')

# Data structure: directory -> { filename -> example_context }
assets_by_dir = defaultdict(dict)

for file_info in files_to_scan:
    file_path = file_info["path"]
    
    if not os.path.exists(file_path):
        continue

    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    context_stack = []
    
    for line in lines:
        stripped = line.strip()
        if not stripped or stripped.startswith("//"):
            continue
            
        indent_match = re.search(r'^(\s*)', line)
        current_indent_len = len(indent_match.group(1)) if indent_match else 0
        
        while context_stack and context_stack[-1][0] >= current_indent_len:
            context_stack.pop()
            
        key_match = re.search(r'^(\s*)["\']?([\w\-]+)["\']?\s*:', line)
        if key_match:
            key_name = key_match.group(2)
            context_stack.append((current_indent_len, key_name))
            
        img_match = line_regex.search(line)
        if img_match:
            img_path = img_match.group(3)
            
            # Directory processing
            # e.g. /assets/img/home/hero.webp -> dir: /assets/img/home, file: hero.webp
            directory = os.path.dirname(img_path)
            filename = os.path.basename(img_path)
            
            # Breadcrumbs for context (just save the first one encountered)
            if filename not in assets_by_dir[directory]:
                breadcrumbs = [item[1] for item in context_stack]
                
                # Create "Website Section" string
                # Remove generic structural keys and leaf keys
                ignore_keys = {
                    'image', 'src', 'accentImage', 'items', 'subCategories', 
                    'treatments', 'sections', 'points', 'content', 'bg'
                }
                
                # Also removing very generic keys if they appear at the end, but kept for now.
                
                cleaned_chain = [k for k in breadcrumbs if k not in ignore_keys]
                
                file_cat = file_info["category"]
                
                if not cleaned_chain:
                    location = file_cat
                else:
                    path_str = " > ".join(cleaned_chain)
                    # If the path looks like a root property (e.g. "hero"), prepend category
                    # If it starts with a known unique ID (like 'refresh'), maybe redundant but safe to keep category.
                    location = f"{file_cat} > {path_str}"

                # Short context for Usage column (e.g. hero > image)
                # Take last 2 from original breadcrumbs
                usage = " > ".join(breadcrumbs[-2:]) if len(breadcrumbs) >= 2 else " > ".join(breadcrumbs)
                
                assets_by_dir[directory][filename] = {
                    "location": location,
                    "usage": usage
                }

def get_spec(filename):
    lower = filename.lower()
    if 'hero' in lower:
        return "1920 x 1080 px (16:9)"
    elif 'thumb' in lower:
        return "800 x 600 px (4:3)"
    elif 'logo' in lower:
        return "Vector (SVG) or High-Res Transparent PNG"
    elif 'accent' in lower:
        return "Transparent Background (Decorative)"
    elif 'introduction' in lower or 'internalsupport' in lower or 'ulandaconnection' in lower or 'idealfor' in lower or 'treatmentareas' in lower:
        return "1200 x 800 px (3:2)"
    else:
        return "1200 x 800 px (Standard Web)"

output_lines = []
output_lines.append("# Website Image Asset Checklist (Unique Files)")
output_lines.append("\nThis document lists the unique image files required. They are grouped by the folder they should belong to.")

# Sort directories for clean output
sorted_dirs = sorted(assets_by_dir.keys())

total_images = 0

for directory in sorted_dirs:
    files_map = assets_by_dir[directory]
    sorted_files = sorted(files_map.keys())
    
    # Header for directory
    output_lines.append(f"\n### Folder: `{directory}/`")
    output_lines.append(f"| Filename | Website Section | Recommended Spec |")
    output_lines.append("|---|---|---|")
    
    for filename in sorted_files:
        info = files_map[filename]
        output_lines.append(f"| **{filename}** | {info['location']} | {get_spec(filename)} |")
        total_images += 1

# Generate CSV for Excel
try:
    with open("IMAGE_ASSETS_LIST.csv", "w", newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        # Header
        writer.writerow(["Folder", "Filename", "Website Section", "Recommended Spec"])
        
        for directory in sorted_dirs:
            files_map = assets_by_dir[directory]
            sorted_files = sorted(files_map.keys())
            
            for filename in sorted_files:
                info = files_map[filename]
                writer.writerow([directory, filename, info['location'], get_spec(filename)])
    print("Successfully wrote to IMAGE_ASSETS_LIST.csv")
except PermissionError:
    print("Warning: IMAGE_ASSETS_LIST.csv is locked. Writing to IMAGE_ASSETS_LIST_UPDATED.csv instead.")
    with open("IMAGE_ASSETS_LIST_UPDATED.csv", "w", newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        # Header
        writer.writerow(["Folder", "Filename", "Website Section", "Recommended Spec"])
        
        for directory in sorted_dirs:
            files_map = assets_by_dir[directory]
            sorted_files = sorted(files_map.keys())
            
            for filename in sorted_files:
                info = files_map[filename]
                writer.writerow([directory, filename, info['location'], get_spec(filename)])

print(f"Created IMAGE_ASSETS_LIST.md and IMAGE_ASSETS_LIST.csv with {total_images} unique images.")
