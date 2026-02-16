
import re

file_path = 'src/data/pageContents/blogs/blogs.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We want to find block patterns that start { and contain id: "..." but NOT status:
# However, blocks are nested.
# Let's use a simpler heuristic:
# Find `  {\n    id: "..."` and replace with `  {\n    status: "published",\n    id: "..."`
# This assumes consistent formatting, which seems true for this file.

# Regex explanation:
# (?m)^(\s*)\{(\s*)\n\s*id:
# Capture indentation.
# Then check if status is present before or after?
# Actually, if I just target the lines:
#    {
#    id: "..."
# And inject status.

# Let's iterate lines.
lines = content.split('\n')
new_lines = []
modified_count = 0

for i in range(len(lines)):
    line = lines[i]
    # Check if line is `    id: "..."` or similar
    # And check passing context.
    
    # Heuristic:
    # If we see `    id: "..."` (4 spaces indent), look at previous line.
    # If previous line is `  {` (2 spaces indent) or just `{` with indentation.
    # Then checking if `status:` was already added?
    
    # Wait, the file format is:
    #   {
    #     status: "published",
    #     id: ...
    # OR
    #   {
    #     id: ...
    
    # So if we see `    id:`, we check if the PREVIOUS line contained `status:`.
    # If not, we insert `    status: "published",` before `    id:`.
    
    match_id = re.match(r'^(\s+)id:\s*["\']', line)
    if match_id:
        indent = match_id.group(1)
        # Check previous line
        prev_line = lines[i-1] if i > 0 else ""
        if "status:" not in prev_line and "{" in prev_line:
            # Check if this object already has status effectively?
            # What if status is AFTER id?
            # Scan forward?
            # Most entries have status as first key.
            # Let's assume standard order.
            
            # Let's also check if status is in the NEXT few lines?
            has_status_nearby = False
            for j in range(1, 5): # check next 4 lines
                if i + j < len(lines) and "status:" in lines[i+j]:
                    has_status_nearby = True
                    break
            
            if not has_status_nearby:
                # Insert status
                new_lines.append(f'{indent}status: "published",')
                modified_count += 1
                
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print(f"Fixed {modified_count} blogs.")
