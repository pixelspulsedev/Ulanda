import re

# Define placeholders by category
REFRESH_PLACEHOLDER = 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200'
RENEW_PLACEHOLDER = 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1200'
RESTORE_PLACEHOLDER = 'https://images.pexels.com/photos/5067738/pexels-photo-5067738.jpeg?auto=compress&cs=tinysrgb&w=1200'
RADIATE_PLACEHOLDER = 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1200'
EYE_PLACEHOLDER = 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1200'
BODY_PLACEHOLDER = 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1200'

def get_placeholder_for_path(image_path, current_category):
    """Determine the appropriate placeholder URL based on image path and category context."""
    path_lower = image_path.lower()
    
    # Eye-specific
    if any(x in path_lower for x in ['eye', 'lumi-eyes', 'tear', 'under-eye']):
        return EYE_PLACEHOLDER
    
    # Body-specific
    if any(x in path_lower for x in ['body-', 'tightening', 'contouring', 'shape-']):
        return BODY_PLACEHOLDER
    
    # Radiate treatments
    if any(x in path_lower for x in ['nad-', 'glutathione-', 'energy-iv', 'immunity-iv', 
                                       'longevity', 'weight-', 'b12-', 'vitamin-d', 
                                       'skin-glow-iv', 'medical-weight', 'womens-longevity',
                                       'programmes-subcategory', 'menopause-regeneration',
                                       'collagen-reset', 'hormone-smart', 'radiate-category']):
        return RADIATE_PLACEHOLDER
    
    # Restore treatments  
    if any(x in path_lower for x in ['biostimulator', 'thread', 'filler', 'collagen-therapy',
                                       'jawline', 'neck-lower', 'barrier', 'lymphatic', 
                                       'recovery', 'oxygen-facial', 'post-procedure',
                                       'restore-category', 'oxygen-healing', 'light-based-recovery',
                                       'skin-barrier', 'anti-wrinkle', 'dermal-filler',
                                       'structural-lifting']):
        return RESTORE_PLACEHOLDER
    
    # Renew treatments
    if any(x in path_lower for x in ['profhilo', 'hydrobooster', 'microneedling', 
                                       'polynucleotide', 'prp', 'nucleofill', 'plenhyage',
                                       'jalupro', 'seventy', 'lemon-bottle', 'injectables',
                                       'skin-boosters', 'renew-category']):
        return RENEW_PLACEHOLDER
    
    # Refresh treatments (facials, peels, etc.)
    if any(x in path_lower for x in ['dermaplaning', 'hydrafacial', 'enzyme', 'led-light',
                                       'peel', 'biorepeel', 'chemical-peel', 'refresh-',
                                       'signature-facials', 'light-based-subcategory', 
                                       'skin-resurfacing', 'vital-glow', 'facial']):
        return REFRESH_PLACEHOLDER
    
    # Fall back to category-based selection
    category_map = {
        'refresh': REFRESH_PLACEHOLDER,
        'renew': RENEW_PLACEHOLDER,
        'restore': RESTORE_PLACEHOLDER,
        'radiate': RADIATE_PLACEHOLDER
    }
    return category_map.get(current_category, REFRESH_PLACEHOLDER)


def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    result = []
    current_category = 'refresh'
    count = 0
    
    for i, line in enumerate(lines):
        result.append(line)
        
        # Track which main category we're in
        if '"refresh": {' in line:
            current_category = 'refresh'
        elif '"renew": {' in line:
            current_category = 'renew'
        elif '"restore": {' in line:
            current_category = 'restore'
        elif '"radiate": {' in line:
            current_category = 'radiate'
        
        # Check if this line contains an image field (with or without trailing comma)
        match = re.match(r'^(\s*)image:\s*"([^"]+)"(,?)\s*$', line)
        if match:
            indent = match.group(1)
            image_path = match.group(2)
            has_comma = match.group(3) == ','
            
            # Check if next line already has placeholderUrl
            if i + 1 < len(lines) and 'placeholderUrl' in lines[i + 1]:
                continue
            
            placeholder = get_placeholder_for_path(image_path, current_category)
            
            # If the image line doesn't have a comma, we need to add one and format correctly
            if not has_comma:
                # Replace the last line in result to add the comma
                result[-1] = f'{indent}image: "{image_path}",'
            
            result.append(f'{indent}placeholderUrl: "{placeholder}",')
            count += 1
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write('\n'.join(result))
    
    return count


if __name__ == '__main__':
    filepath = r'c:\Users\USER\Ulanda\Ulanda\src\data\pageContents\treatments\treatments.js'
    count = process_file(filepath)
    print(f'Added {count} placeholderUrl fields')
