import re
import os

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

# Regex to find potential keys and image values
# Capture: 1=indentation, 2=key (optional), 3=image_path
# Examples: 
#   image: "/assets/img/..."
#   "someKey": "/assets/img/..."
line_regex = re.compile(r'^(\s*)(?:["\']?([\w\-]+)["\']?\s*:\s*)?["\'](/assets/img/[^"\']+)["\']')

output_lines = []
output_lines.append("# Website Image Asset Checklist")
output_lines.append("\nThis document lists all image paths referenced in the website's data files. Please ensure files exist at these locations in the `public/` folder.")

for file_info in files_to_scan:
    file_path = file_info["path"]
    category = file_info["category"]
    
    if not os.path.exists(file_path):
        continue
        
    output_lines.append(f"\n## {category}")
    output_lines.append(f"**Source File**: `{file_path}`")
    output_lines.append("\n| Context / usage | Required Path | Filename |")
    output_lines.append("|---|---|---|")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    # Stack to keep track of nested keys based on indentation
    # stack items: (indent_length, key_name)
    context_stack = []
    
    for line in lines:
        # 1. Update context stack based on indentation of the current line
        # Simple heuristic: find indentation of current line (ignoring pure whitespace/comments if possible)
        stripped = line.strip()
        if not stripped or stripped.startswith("//"):
            continue
            
        # Calc indentation:
        indent_match = re.search(r'^(\s*)', line)
        current_indent_len = len(indent_match.group(1)) if indent_match else 0
        
        # Pop from stack if current indent <= stack top indent
        while context_stack and context_stack[-1][0] >= current_indent_len:
            context_stack.pop()
            
        # Check if line defines a key (block start) or property
        # Regex to catch "key": { or key: {
        key_match = re.search(r'^(\s*)["\']?([\w\-]+)["\']?\s*:', line)
        if key_match:
            key_name = key_match.group(2)
            # Push new context
            context_stack.append((current_indent_len, key_name))
            
        # Check for image path match
        img_match = line_regex.search(line)
        if img_match:
            img_path = img_match.group(3)
            
            # Construct context string from stack
            # Filter out generic keys like 'image' if they are at the end, identifying the parent is more useful
            # e.g. dermaplaning > hero > image -> dermaplaning > hero
            
            breadcrumbs = [item[1] for item in context_stack]
            
            # If the last item is 'image', strictly strictly speaking it's redundant to display
            # But sometimes it might be 'accentImage' or 'icon'
            context_str = " > ".join(breadcrumbs)
            
            filename = os.path.basename(img_path)
            
            output_lines.append(f"| `{context_str}` | `{img_path}` | **{filename}** |")

with open("IMAGE_ASSETS_LIST.md", "w", encoding='utf-8') as out_f:
    out_f.write("\n".join(output_lines))
    
print("Created IMAGE_ASSETS_LIST.md")
