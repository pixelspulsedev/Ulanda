
import re

file_path = 'src/data/pageContents/blogs/blogs.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find blog objects.
# Look for `{` followed by `id:` or `status:` or `slug:`
# This is tricky with regex. 
# Instead, let's just insert status: "published", before `id:` if `id:` is the first key and status is missing in the preceding lines.
# But wait, objects start with `{`.
# If I see `{\n    id:`, I can check if `status:` is there.

# Actually, let's look for `id: "..."` and check if `status:` is present in the block.
# Since the file structure is consistent (`id:` is usually near the top).

# Let's use a simpler approach:
# 1. Split by `},` to get individual blog blocks approx.
# 2. Check each block for `status:`.
# 3. If missing, add it.
# 4. Join back.

# Re-reading file structure from previous tools...
# It looks like:
#   {
#     status: "published",
#     id: "...",
# OR
#   {
#     id: "...",
#     slug: "...",

def fix_blogs(content):
    # Split content by the start of a blog object.
    # They are inside `export const blogs = [`
    # Each object starts with `{` and ends with `},` (mostly).
    
    # Let's just do a regex replace.
    # Find `{\s+id:` and replace with `{\n    status: "published",\n    id:`
    # BUT only if `status:` is NOT already there.
    # Wait, regex lookbehind is hard.
    
    # Better: detailed parsing.
    lines = content.split('\n')
    new_lines = []
    
    in_blog_object = False
    blog_object_start_line = -1
    has_status = False
    
    # We assume standard formatting as seen in the file.
    for i, line in enumerate(lines):
        # detection of object start
        if line.strip() == '{':
            in_blog_object = True
            blog_object_start_line = len(new_lines) # index in new_lines
            has_status = False
            new_lines.append(line)
            continue
            
        if in_blog_object:
            if 'status:' in line:
                has_status = True
            
            # Check for end of object (this is fragile but might work for this specific file)
            # The file uses `  },` or `  }` at end of objects in array.
            if line.strip() == '},' or line.strip() == '}':
                # End of object. If no status, insert it at the start.
                if not has_status:
                    # Insert after the `{` line
                    # We need to find where we put the `{`.
                    # It was at `blog_object_start_line`.
                    # Let's insert it after that.
                    new_lines.insert(blog_object_start_line + 1, '    status: "published",')
                
                in_blog_object = False
        
        new_lines.append(line)
        
    return '\n'.join(new_lines)

# This logic is slightly flawed because `new_lines.insert` shifts indices.
# Let's try a different way.
# Iterate, build `buffer` for current object.
# If object ends, process buffer, then append to `final_output`.

final_output = []
buffer = []
in_object = False
brace_depth = 0

for line in content.split('\n'):
    stripped = line.strip()
    
    # extremely simple heuristic for this file
    if stripped == '{':
        if not in_object:
            in_object = True
            brace_depth = 1
            buffer.append(line)
            continue
    
    if in_object:
        buffer.append(line)
        if '{' in stripped and stripped != '{': 
             # nested object like `seo: {`
             brace_depth += stripped.count('{')
        
        brace_depth -= stripped.count('}')
        
        if brace_depth == 0:
            # End of object
            # Check buffer for status
            # Join buffer to string to check
            buf_str = "".join(buffer)
            if 'status:' not in buf_str and 'id:' in buf_str:
                # Missing status! Insert it after first line (which is `{`)
                buffer.insert(1, '    status: "published",')
                print(f"Fixed blog: {re.search(r'id: [\"\'](.*?)[\"\']', buf_str).group(1) if re.search(r'id: [\"\'](.*?)[\"\']', buf_str) else 'unknown'}")
            
            final_output.extend(buffer)
            buffer = []
            in_object = False
    else:
        final_output.append(line)

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(final_output))
