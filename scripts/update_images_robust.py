import re
import os

def process_file_indentation_based(file_path, mode='treatments'):
    print(f"Processing {file_path} with mode {mode}")
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    # context_stack maps indentation_level -> key_name
    # Assuming 2 spaces per indentation level.
    # Level 0 is root.
    context_map = {} 
    
    # Regex to find keys
    # key: { or key: [ or "key": ...
    key_start_re = re.compile(r'^(\s*)(?:["\']?)([\w-]+)(?:["\']?)\s*:\s*[\[\{]')
    # id property: id: 'value'
    id_prop_re = re.compile(r'^(\s*)(?:["\']?)id(?:["\']?)\s*:\s*["\']([\w-]+)["\']')
    # image property
    image_re = re.compile(r'^(\s*)(?:["\']?)image(?:["\']?)\s*:\s*"([^"]+)"(,?.*)$')
    # array item start: {
    anon_start_re = re.compile(r'^(\s*)[\[\{]')

    # We also need to track the "current condition ID" for the array-based files (conditions)
    # Since array items don't have a key in the parent object, we rely on the 'id' property inside the object.
    # We can store this in a special slot in context_map or separate variable.
    # But context_map is by indentation. 
    # For conditions:
    # Level 1: [ { ... } ] -> Item starts at level 1 (indent 2).
    # Inside level 1, there is a line `id: 'conditions-id'`. We should associate Level 1 with this ID.

    last_indent = -1

    for line_idx, line in enumerate(lines):
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        # Calc indent
        indent_str = line[:len(line) - len(line.lstrip())]
        indent_len = len(indent_str)
        # Round to nearest 2? Assume 2-space soft tabs.
        level = indent_len // 2
        
        # Clear deeper levels from map if we went back up
        # Actually strictly, if we are at level L, anything >= L in map is stale from previous branches, 
        # EXCEPT for the current line which establishes Level L.
        # But we need parents (0 to L-1).
        keys_to_remove = [k for k in context_map if k >= level]
        for k in keys_to_remove:
            del context_map[k]

        m_key = key_start_re.match(line)
        m_id = id_prop_re.match(line)
        m_img = image_re.match(line)
        
        # If line establishes a block with a key
        if m_key:
            key_name = m_key.group(2)
            context_map[level] = key_name
        
        # If line has an ID property, it names the CURRENT level context (if it's an object)
        if m_id:
            id_val = m_id.group(2)
            # This ID belongs to the object containing this property.
            # The object started at `level - 1` usually (the brace).
            # e.g.
            # { (level 1)
            #   id: 'foo' (level 2)
            # }
            # So we name context_map[level-1] = id_val
            # But wait, context_map[level-1] might be "__ANON__" or similar.
            # We override it.
            context_map[level - 1] = id_val

        # Check for image
        if m_img:
            prefix = m_img.group(1)
            old_path = m_img.group(2)
            suffix = m_img.group(3)
            
            # Construct name
            page = mode
            name = "unknown"
            section = "hero"
            
            # Helper to safely get from map
            def get_ctx(lvl): return context_map.get(lvl, "")

            if mode == 'treatments':
                # Expected structure:
                # Level 1: Category (refresh)
                # Level 2: subCategories
                # Level 3: SubCat ID (signature-facials)
                # Level 4: treatments
                # Level 5: Treatment ID (dermaplaning)
                # Level 6: Section (introduction) or Property (image)
                
                # Traverse map to find meaningful parts
                # 1. Category
                cat = ""
                # Iterate levels 0 to current
                path_keys = [context_map[k] for k in sorted(context_map.keys())]
                
                # Identify Treatment
                # Search for 'treatments' key, the next one is treatment name.
                treatment_name = ""
                subcategory_name = ""
                category_name = ""
                
                # Try simple specific lookups first (robust)
                if 'treatments' in path_keys:
                    idx = path_keys.index('treatments')
                    if idx + 1 < len(path_keys):
                        treatment_name = path_keys[idx+1]
                
                if 'subCategories' in path_keys:
                     idx = path_keys.index('subCategories')
                     if idx + 1 < len(path_keys):
                         subcategory_name = path_keys[idx+1]
                         
                # Category is usually the first meaningful key (refresh, etc)
                possible_cats = ['refresh', 'renew', 'restore', 'radiate']
                for k in path_keys:
                    if k in possible_cats:
                        category_name = k
                        break
                
                # Determine Name & Section based on what we found
                if treatment_name:
                    name = treatment_name
                    # Section is whatever follows treatment_name in path keys, if any.
                    # e.g. [..., 'dermaplaning', 'introduction']
                    # e.g. [..., 'dermaplaning'] -> current line is image, so section is main/hero.
                    
                    # Find index of treatment_name
                    # Note: path_keys might contain duplicates if nesting is weird, but unlikely here.
                    t_idx = len(path_keys) - 1 # Default to end
                    for i in range(len(path_keys) - 1, -1, -1):
                        if path_keys[i] == treatment_name:
                            t_idx = i
                            break
                    
                    if t_idx < len(path_keys) - 1:
                        # There is something after treatment name
                        section_key = path_keys[t_idx+1]
                        if section_key in ['introduction', 'idealFor', 'resultsTimeline', 'cta', 'ulandaConnection', 'detailedBenefits', 'scars', 'stretch-marks', 'highlightBox']:
                            section = section_key
                        else:
                            # It might be an anonymous block or random key
                            # Check if it looks like a section key
                            section = section_key
                    else:
                        section = "hero"

                elif subcategory_name:
                    name = subcategory_name
                    section = "subcategory-thumb"
                elif category_name:
                    name = category_name
                    section = "category-hero"
            
            elif mode == 'conditions':
                # Structure:
                # [ -> Level 0
                #   { -> Level 1 (ID comes from id prop)
                #     subConditions: { ... }
                # context_map[1] should hold the Condition ID if we parsed the 'id:' line previously.
                
                # Find the main condition ID. It's usually a topish level key that is NOT 'subConditions', 'hero', etc.
                # Actually, in our logic, `id:` updates `context_map[level-1]`.
                # If we are deep inside, we iterate keys.
                
                path_keys = [context_map[k] for k in sorted(context_map.keys())]
                
                cond_id = "unknown"
                # The condition ID is likely the first key in the stack that looks customized (or we captured it via ID regex).
                # In array root, context_map[0] or [1] should be the ID.
                # Since 'items' of root array don't have keys, they rely on ID parsing.
                # So context_map[1] should be 'age-and-regeneration' etc.
                if 1 in context_map:
                    cond_id = context_map[1]
                elif 0 in context_map and context_map[0] != 'conditions': # fallback
                    cond_id = context_map[0]
                    
                name = cond_id
                
                if 'subConditions' in path_keys:
                    section = "sub-condition-thumb"
                    # Ideally we want the item title or index, but we don't have titles easily.
                    # We can leave it as generic 'sub-condition-thumb', user will just have multiples.
                elif 'introduction' in path_keys:
                    section = "introduction"
                elif 'hero' in path_keys:
                    section = "hero"
                else:
                    section = "hero" # default
            
            # Construct new path
            # remove special chars from name/section to be safe
            name_clean = re.sub(r'[^\w-]', '', name)
            section_clean = re.sub(r'[^\w-]', '', section)
            
            new_path = f"/assets/img/{page}/{name_clean}-{section_clean}.webp"
            new_lines.append(f"{prefix}\"{new_path}\"{suffix}\n")
        else:
            new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print(f"Processed {file_path}")


if __name__ == '__main__':
    process_file_indentation_based(r'c:\Users\USER\Ulanda\Ulanda\src\data\pageContents\treatments\treatments.js', 'treatments')
    process_file_indentation_based(r'c:\Users\USER\Ulanda\Ulanda\src\data\pageContents\conditions\conditions.js', 'conditions')
    process_file_indentation_based(r'c:\Users\USER\Ulanda\Ulanda\src\data\pageContents\conditions\individualConditions.js', 'conditions')
