import re

file_path = 'src/data/pageContents/journal/journalArticles.js'
try:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find unique sequences starting with â
    found = re.findall(r'â[\u0080-\u00FF]+', content)
    from collections import Counter
    counts = Counter(found)
    
    print("Found potential mojibake sequences:")
    for k, v in counts.most_common(20):
        # We need to manually handle what is printed because encoding might be tricky
        # Just escape the string
        print(f"Sequence: {repr(k)} (Count: {v})")
        try:
            # Reverse engineer the mojibake.
            # â€¦ is E2 80 A6 interpreted as cp1252.
            # CP1252 0xE2 -> â
            # CP1252 0x80 -> €
            # CP1252 0xA6 -> ¦
            
            # So â€¦ should decode: "â€¦".encode('cp1252').decode('utf-8') -> …
            try:
                original = k.encode('cp1252').decode('utf-8')
                print(f"  -> Decodes to: {repr(original)}")
            except:
                # Some might be "windows-1252" specific like 80-9F range
                original = k.encode('windows-1252').decode('utf-8')
                print(f"  -> Decodes (win1252) to: {repr(original)}")
        except Exception as e:
            print(f"  -> Decoding failed: {e}")

except Exception as e:
    print(f"Error: {e}")
