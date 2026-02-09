
import os

file_path = "src/data/pageContents/treatments/treatments.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Pattern to remove for led-light-therapy (appears twice)
broken_pattern = """            ],
            image: "https://images.unsplash.com/photo-1576671414121-aa0c81c869e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            placeholderUrl: "https://images.unsplash.com/photo-1576671414121-aa0c81c869e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "category": "Refresh","""

fixed_pattern = """            ],
            "category": "Refresh","""

if broken_pattern in content:
    print("Found broken pattern for led-light-therapy. Fixing...")
    content = content.replace(broken_pattern, fixed_pattern)
else:
    print("Pattern not found exactly as expected. Checking variations...")
    # Maybe whitespace differences?
    
# Check for other duplicates reported by user

# Write back
with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Done.")
