import os

file_path = r'c:\Users\USER\Ulanda-1\Ulanda\src\data\pageContents\conditions\individualConditions.js'
content_file_path = r'c:\Users\USER\AppData\Roaming\Code\User\workspaceStorage\1035f57a9d29c1c0cddd05883ab10000\GitHub.copilot-chat\chat-session-resources\dc953ded-aa13-4918-ad52-83a19cd7d436\call_MHxJbjVPUnU2NUJBU1hoR0V5N1c__vscode-1771413020881\content.txt'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the line with `];` near the end
end_index = -1
for i in range(len(lines) - 1, -1, -1):
    if '];' in lines[i]:
        end_index = i
        break

if end_index == -1:
    print("Could not find the end of the array (];)")
    exit(1)

# Read the new content
with open(content_file_path, 'r', encoding='utf-8') as f:
    new_content = f.read()

# Insert the new content before `];`
# Ensure comma separation
if lines[end_index-1].strip().endswith('},'): 
    # The previous object end already has a comma
    pass
else:
    # Add a comma if missing (though the file showed it had one)
    # But usually the last item in a JS array might lack a comma if not trailing-comma style
    # Based on read_file, it had a comma.
    pass

# We insert after the previous line, or simply replace `];` with `new_content + \n];`
# But we need to handle the comma separation from the previous item.
# The new content starts with `{...`.
# So we need to ensure there is a comma before it.
# The `read_file` showed `  },` before `];`. So there is a comma.

# Construct new lines
new_lines = lines[:end_index] + [new_content + '\n'] + lines[end_index:]

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Successfully appended new conditions.")
