import re
import os

def process_treatments():
    file_path = r'c:\Users\USER\Ulanda\Ulanda\src\data\pageContents\treatments\treatments.js'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    stack = []
    
    # regexes
    # matches "key": {  or  key: {  or "key": [  or key: [
    key_open_re = re.compile(r'^\s*(?:"?)([\w-]+)(?:"?)\s*:\s*[\[\{]\s*$') 
    # matches { or [ (anonymous)
    anon_open_re = re.compile(r'^\s*[\[\{]\s*$')
    # matches }, or ],
    obj_close_re = re.compile(r'^\s*[\]\}],?\s*$')
    # matches "image": "..."
    image_re = re.compile(r'^(\s*(?:"?)image(?:"?)\s*:\s*)"([^"]+)"(,?.*)$')

    for line in lines:
        stripped = line.strip()
        
        # Check matching
        m_open = key_open_re.match(stripped)
        m_anon = anon_open_re.match(stripped)
        m_close = obj_close_re.match(stripped)
        m_img = image_re.match(line) # match original line to preserve indent

        if m_open:
            key = m_open.group(1)
            stack.append(key)
            new_lines.append(line)
        elif m_anon:
            stack.append("__ANON__")
            new_lines.append(line)
        elif m_close:
            if stack:
                stack.pop()
            new_lines.append(line)
        elif m_img:
            prefix = m_img.group(1)
            old_path = m_img.group(2)
            suffix = m_img.group(3)
            
            page = "treatments"
            name = "unknown"
            section = "main"
            
            # Analyze stack
            if len(stack) > 0:
                # Top level categories (refresh, renew, etc)
                # Note: If stack has __ANON__, we might be deep inside structure.
                # We need to filter out __ANON__ when looking for context or traverse up.
                
                # Filter stack for known keys to determine context
                valid_stack = [s for s in stack if s != "__ANON__"]
                
                if len(valid_stack) > 0 and valid_stack[0] in ['refresh', 'renew', 'restore', 'radiate']:
                    if len(valid_stack) == 1:
                         name = valid_stack[0]
                         section = "category-hero"
                    else:
                        # Check deeper
                        if 'subCategories' in valid_stack:
                            # Note: using valid_stack for logic
                            try:
                                idx_sub = valid_stack.index('subCategories')
                                if idx_sub + 1 < len(valid_stack):
                                    subcat_name = valid_stack[idx_sub+1]
                                    name = subcat_name
                                    section = "subcategory-thumb"
                                    
                                    if 'treatments' in valid_stack:
                                        idx_treat = valid_stack.index('treatments')
                                        if idx_treat + 1 < len(valid_stack):
                                            treat_name = valid_stack[idx_treat+1]
                                            name = treat_name
                                            section = "hero" # default for treatment root image
                                            
                                            # Check for specific sections inside treatment
                                            if 'introduction' in valid_stack:
                                                 section = "introduction"
                                            # Add other section logic if needed
                            except ValueError:
                                pass

            # Special case: If we failed to identify, stick with unknown or keep old path?
            # User wants new naming convention. "unknown" is bad. 
            # If name is still "unknown", maybe print line for debugging?
            # But we are overwriting file.
            
            new_path = f"/assets/img/{page}/{name}-{section}.webp"
            new_lines.append(f"{prefix}\"{new_path}\"{suffix}\n")
        else:
            new_lines.append(line)

    # Append Page Hero data if not present (simple check)
    has_page_data = any("export const treatmentsPageData" in l for l in lines)
    if not has_page_data:
        new_lines.append("\nexport const treatmentsPageData = {\n")
        new_lines.append("  hero: {\n")
        new_lines.append("    image: \"/assets/img/treatments/page-hero.webp\",\n")
        new_lines.append("    title: \"Regenerative Treatments\",\n")
        new_lines.append("    subtitle: \"A simple, intelligent way to understand your regenerative journey.\"\n")
        new_lines.append("  }\n")
        new_lines.append("};\n")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

    print(f"Processed {file_path}")

def process_conditions(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    current_condition_id = "unknown"
    stack = []
    
    # Regex
    id_re = re.compile(r'^\s*(?:"?)id(?:"?)\s*:\s*[\'"]([\w-]+)[\'"],?')
    key_open_re = re.compile(r'^\s*(?:"?)([\w-]+)(?:"?)\s*:\s*[\[\{]\s*$') 
    anon_open_re = re.compile(r'^\s*[\[\{]\s*$')
    obj_close_re = re.compile(r'^\s*[\]\}],?\s*$')
    image_re = re.compile(r'^(\s*(?:"?)image(?:"?)\s*:\s*)"([^"]+)"(,?.*)$')

    for line in lines:
        stripped = line.strip()
        
        m_id = id_re.match(stripped)
        m_open = key_open_re.match(stripped)
        m_anon = anon_open_re.match(stripped)
        m_close = obj_close_re.match(stripped)
        m_img = image_re.match(line)
        
        # Track main ID
        if m_id and not stack:
             current_condition_id = m_id.group(1)
        
        if m_open:
            key = m_open.group(1)
            stack.append(key)
            new_lines.append(line)
        elif m_anon:
            stack.append("__ANON__")
            new_lines.append(line)
        elif m_close:
            if stack:
                stack.pop()
            new_lines.append(line)
            
        elif m_img:
            prefix = m_img.group(1)
            old_path = m_img.group(2)
            suffix = m_img.group(3)
            
            page = "conditions"
            name = current_condition_id
            section = "hero"
            
            valid_stack = [s for s in stack if s != "__ANON__"]
            
            if 'subConditions' in valid_stack:
                section = "sub-condition-thumb" 
            elif 'introduction' in valid_stack:
                section = "introduction"
            
            new_path = f"/assets/img/{page}/{name}-{section}.webp"           
            new_lines.append(f"{prefix}\"{new_path}\"{suffix}\n")
        else:
            new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print(f"Processed {file_path}")

if __name__ == "__main__":
    process_treatments()
    process_conditions(r'c:\Users\USER\Ulanda\Ulanda\src\data\pageContents\conditions\conditions.js')
    process_conditions(r'c:\Users\USER\Ulanda\Ulanda\src\data\pageContents\conditions\individualConditions.js')
