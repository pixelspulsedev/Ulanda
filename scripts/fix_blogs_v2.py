
import re

file_path = 'src/data/pageContents/blogs/blogs.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.splitlines()
new_lines = []
modified_count = 0

for i, line in enumerate(lines):
    # Detect line starting with whitespace + id: "..." or id: '...'
    match_id = re.match(r'^(\s+)id:\s*["\']', line)
    
    should_insert = False
    
    if match_id:
        indent = match_id.group(1)
        # Check context
        # Scan backward for the start of the object `{`
        # and verify if status: exists.
        
        obj_start_idx = -1
        has_status = False
        
        # Scan back up to 20 lines to find `{`
        for j in range(1, 20):
            if i - j < 0: break
            prev = lines[i-j].strip()
            if 'status:' in prev:
                has_status = True
            if prev.endswith('{') or prev == '{':
                obj_start_idx = i - j
                break
        
        # Also scan forward a few lines (e.g. 5) just in case status is after id
        if not has_status:
            for j in range(1, 10):
                if i + j >= len(lines): break
                nxt = lines[i+j].strip()
                if 'status:' in nxt:
                    has_status = True
                    break
                    
        if not has_status:
            should_insert = True

    if should_insert:
        new_lines.append(f'{indent}status: "published",')
        modified_count += 1
        
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print(f"Fixed {modified_count} blogs.")
