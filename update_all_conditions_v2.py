#!/usr/bin/env python3
"""
Update all condition images given by user.
Updates:
1. Main Conditions Hero in landing.js
2. Category Thumbnails in landing.js
3. Individual Condition Images in conditions.js (subConditions.items)
4. Individual Condition Images in individualConditions.js (hero)
"""

import re
import os

files_to_edit = {}

# -----------------
# 1. Main Conditions Hero
# -----------------
main_hero_url = "https://images.unsplash.com/photo-1581182800629-7d90925ad072?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpbiUyMGJlYXV0eXxlbnwwfDB8MHx8fDA%3D"
landing_file = "src/data/pageContents/conditions/landing.js"

with open(landing_file, 'r', encoding='utf-8') as f:
    landing_content = f.read()

# Update Hero
# Pattern: hero: { ... image: "...", placeholderUrl: "..."
hero_image_regex = r"(hero:\s*\{[^}]*image:\s*)\"[^\"]+\""
landing_content = re.sub(hero_image_regex, rf'\1"{main_hero_url}"', landing_content)
hero_placeholder_regex = r"(hero:\s*\{[^}]*placeholderUrl:\s*)\"[^\"]+\""
landing_content = re.sub(hero_placeholder_regex, rf'\1"{main_hero_url}"', landing_content)

# -----------------
# 2. Category Thumbnails
# -----------------
category_updates = {
    r"Pigmentation\s*&\s*',?\s*subtitle:\s*'Skin Tone": "https://plus.unsplash.com/premium_photo-1664203068366-f3387be92fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbiUyMHBpZ21lbnRhdGlvbnxlbnwwfDF8MHx8fDA%3D",
    r"Menopause\s*&\s*',?\s*subtitle:\s*'Hormone-Linked Changes": "https://images.unsplash.com/photo-1686485238490-368d939fb1b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVub3BhdXNlfGVufDB8MXwwfHx8MA%3D%3D",
    r"title:\s*'Eye Area Conditions": "https://plus.unsplash.com/premium_photo-1671656333809-0bc676535194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXllJTIwYXJlYXxlbnwwfDF8MHx8fDA%3D",
    r"title:\s*'Skin Texture\s*&\s*',?\s*subtitle:\s*'Quality": "https://images.unsplash.com/photo-1737978697863-5d65495b28ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2tpbiUyMHF1YWxpdHl8ZW58MHwxfDB8fHww",
    r"title:\s*'Hormonal Skin": "https://plus.unsplash.com/premium_photo-1734714167500-cc692038228c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2tpbiUyMHF1YWxpdHl8ZW58MHwxfDB8fHww",
    r"title:\s*'Body Skin\s*&\s*',?\s*subtitle:\s*'Structural": "https://plus.unsplash.com/premium_photo-1711611162431-c7087d8c213b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    r"title:\s*'Internal Wellness": "https://plus.unsplash.com/premium_photo-1726822826648-9a0d4893a2df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2tpbiUyMHF1YWxpdHl8ZW58MHwxfDB8fHww"
}

# Apply category updates in landing.js
# Searching for the block starting with title pattern, then finding image/placeholderUrl within that block
for title_pat, url in category_updates.items():
    # Find the start of the block
    block_start_match = re.search(title_pat, landing_content, re.IGNORECASE)
    if block_start_match:
        start_idx = block_start_match.start()
        # Look ahead for image: and placeholderUrl:
        # We need to limit the search scope to the next closing brace or next object? 
        # Easier: Find next "image:" and "placeholderUrl:" after the title match
        
        # Replace image
        img_match = re.search(r'image:\s*"([^"]+)"', landing_content[start_idx:])
        if img_match:
            full_match = img_match.group(0)
            orig_url = img_match.group(1)
            # Limit replacement to the first occurrence after title
            # Calculate absolute position
            abs_start = start_idx + img_match.start()
            abs_end = start_idx + img_match.end()
            if abs_start < (start_idx + 1000): # Safety check distance
                 landing_content = landing_content[:abs_start] + f'image: "{url}"' + landing_content[abs_end:]
        
        # Re-find block start as content changed length? No, length changes but relative order stays. 
        # But indices shift. Safer to do placeholder separately or careful calculation.
        # Let's create a new search for placeholder
        
        block_start_match = re.search(title_pat, landing_content, re.IGNORECASE)
        start_idx = block_start_match.start()
        
        # Replace placeholderUrl
        ph_match = re.search(r'placeholderUrl:\s*"([^"]+)"', landing_content[start_idx:])
        if ph_match:
             abs_start = start_idx + ph_match.start()
             abs_end = start_idx + ph_match.end()
             if abs_start < (start_idx + 1000):
                landing_content = landing_content[:abs_start] + f'placeholderUrl: "{url}"' + landing_content[abs_end:]

files_to_edit[landing_file] = landing_content


# -----------------
# 3 & 4. Individual Conditions (conditions.js and individualConditions.js)
# -----------------
conditions_file = "src/data/pageContents/conditions/conditions.js"
individual_file = "src/data/pageContents/conditions/individualConditions.js"

with open(conditions_file, 'r', encoding='utf-8') as f:
    conditions_content = f.read()
with open(individual_file, 'r', encoding='utf-8') as f:
    individual_content = f.read()

condition_map = {
    'hyperpigmentation': "https://images.unsplash.com/photo-1737978697863-5d65495b28ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2tpbiUyMHF1YWxpdHl8ZW58MHwxfDB8fHww",
    'melasma': "https://plus.unsplash.com/premium_photo-1664203068076-c95b2d3054a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVsYXNtYXxlbnwwfDF8MHx8fDA%3D",
    'post-inflammatory-hyperpigmentation': "https://plus.unsplash.com/premium_photo-1664203068366-f3387be92fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVsYXNtYXxlbnwwfDF8MHx8fDA%3D",
    'uneven-skin-tone': "https://images.unsplash.com/photo-1609542499975-4ca8bde933db?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    'dull-dehydrated-skin': "https://plus.unsplash.com/premium_photo-1677776518862-15fc946e5e66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVsbCUyMHNraW58ZW58MHwxfDB8fHww",
    'menopause-skin-decline': "https://images.unsplash.com/photo-1659531412263-bf2b9e1abf6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2tpbiUyMGRlY2xpbmV8ZW58MHwxfDB8fHww",
    'jowls': "https://www.aestheticsoftheroyalliverbuilding.co.uk/wp-content/uploads/2022/11/Jowls-Main-Image-1024x911.jpg.webp",
    'neck-crepiness': "https://plus.unsplash.com/premium_photo-1671718111719-52897ffd6f75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmVjayUyMGNyZXBpbmVzc3xlbnwwfDF8MHx8fDA%3D",
    'texture-decline': "https://images.unsplash.com/photo-1615997380705-504484cd99c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVjayUyMGNyZXBpbmVzc3xlbnwwfDF8MHx8fDA%3D",
    'dark-circles': "https://images.unsplash.com/photo-1612888295565-ef89a91e0afb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFyayUyMGV5ZSUyMGNpcmNsZXN8ZW58MHwxfDB8fHww",
    'under-eye-hollows': "https://images.unsplash.com/photo-1617396481812-a0839db4463d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5kZXIlMjBleWUlMjBob2xsb3dzfGVufDB8MXwwfHx8MA%3D%3D",
    'crepey-under-eye': "https://plus.unsplash.com/premium_photo-1711609635953-728d3ca1ac09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JlcGV5JTIwdW5kZXIlMjBleWUlMjBza2lufGVufDB8MXwwfHx8MA%3D%3D",
    'under-eye-pigmentation': "https://images.unsplash.com/photo-1636820531452-d63abb2d4008?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyZXBleSUyMHVuZGVyJTIwZXllJTIwc2tpbnxlbnwwfDF8MHx8fDA%3D",
    'under-eye-puffiness': "https://images.unsplash.com/photo-1566592802482-e35d3ac43b67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyZXBleSUyMHVuZGVyJTIwZXllJTIwc2tpbnxlbnwwfDF8MHx8fDA%3D",
    'fine-lines-wrinkles': "https://plus.unsplash.com/premium_photo-1664203068248-456f24b39e02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmluZSUyMExpbmVzJTIwJTI2JTIwV3JpbmtsZXN8ZW58MHwxfDB8fHww",
    'uneven-texture': "https://plus.unsplash.com/premium_photo-1689298470390-7f58f3471f93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGVoeWRyYXRlZCUyMFNraW58ZW58MHwxfDB8fHww",
    'enlarged-pores': "https://plus.unsplash.com/premium_photo-1671717724550-fd7e92333291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW5sYXJnZWQlMjBwb3Jlc3xlbnwwfDF8MHx8fDA%3D",
    'hormonal-breakouts': "https://plus.unsplash.com/premium_photo-1683140815244-7441fd002195?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNuZXxlbnwwfDF8MHx8fDA%3D",
    'dryness-sensitivity': "https://plus.unsplash.com/premium_photo-1675869589440-8b3f38dc5fe2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJ5JTIwc2tpbnxlbnwwfDF8MHx8fDA%3D",
    'hormonal-pigmentation': "https://images.unsplash.com/photo-1575779977884-f1069c45cbf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ5JTIwc2tpbnxlbnwwfDF8MHx8fDA%3D",
    'loss-of-definition': "https://plus.unsplash.com/premium_photo-1682965699603-81ccb5965576?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZSUyMHNraW58ZW58MHwxfDB8fHww",
    'body-skin-laxity': "https://plus.unsplash.com/premium_photo-1753028375570-2fc611309aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qm9keSUyMFNraW4lMjBMYXhpdHl8ZW58MHwxfDB8fHww",
    'cellulite': "https://plus.unsplash.com/premium_photo-1661389208879-cef356e2497d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2VsbHVsaXRlJTIwdHJlYXRtZW50fGVufDB8MXwwfHx8MA%3D%3D",
    'stretch-marks': "https://images.unsplash.com/photo-1606572733585-1c54ba3cf917?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyZXRjaCUyMG1hcmtzfGVufDB8MXwwfHx8MA%3D%3D",
    'post-weightloss-postpartum': "https://plus.unsplash.com/premium_photo-1746192629710-cdbc5ec17830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG9zdC1XZWlnaHQlMjBMb3NzfGVufDB8MXwwfHx8MA%3D%3D",
    'fatigue-low-energy': "https://images.unsplash.com/photo-1561539207-46fec82a333c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmF0aWd1ZSUyMCUyNiUyMExvdyUyMEVuZXJneXxlbnwwfDF8MHx8fDA%3D",
    'low-immunity': "https://www.drtatiana.co.uk/wp-content/smush-webp/2019/03/low-immunity-548x794.jpg.webp",
    'slow-metabolism': "https://plus.unsplash.com/premium_photo-1664884164827-4ba4247f3bdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xvdyUyMG1ldGFib2xpc218ZW58MHwxfDB8fHww",
    'stress-inflammation': "https://plus.unsplash.com/premium_photo-1728915175711-c7bf6c398396?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    'nutrient-deficiency-skin': "https://images.unsplash.com/photo-1732993486279-9d0f3b91adb2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}

# Update conditions.js (thumbnails)
# pattern: link: '/conditions/category/condition-id' ... placeholderUrl: "..."
for cid, url in condition_map.items():
    # Updating BOTH placeholderUrl AND image
    
    # conditions.js
    # Find block with link ending in cid
    # We look for the link property, then look backwards for image and placeholderUrl?
    # Or just generic replace of anything matching ID in link?
    # Structure:
    # {
    #   ...
    #   image: "...",
    #   placeholderUrl: "...",
    #   link: '.../cid'
    # }
    
    # We can rely on the link being close
    # Regex lookahead/behind is risky with varying JSON structure.
    # Better: Identify the block containing the link.
    
    # Find all start indices of items
    
    # Simplified approach: Replace placeholderUrl where the following link matches
    # This assumes link comes after placeholderUrl (which is typical in this file)
    # Check file structure above: image, placeholderUrl, link is the order.
    
    # Regex: (image:\s*"[^"]+",\s*placeholderUrl:\s*"[^"]+",\s*link:\s*'/conditions/[^/]+/{cid}')
    # Note: Javascript object keys might not be quoted, values are strings.
    # File content shows: image: "...", placeholderUrl: "...", link: '...'
    
    pattern = rf'(image:\s*"[^"]+"\s*,\s*placeholderUrl:\s*"[^"]+"\s*,\s*link:\s*\'/conditions/[^/]+/{cid}\')'
    replacement = f'image: "{url}",\n          placeholderUrl: "{url}",\n          link: \'/conditions/category/{cid}\'' 
    # capturing the category part for replacement is key
    
    regex = rf'image:\s*"[^"]+"\s*,\s*placeholderUrl:\s*"[^"]+"\s*,\s*link:\s*\'/conditions/([^/]+)/{cid}\''
    
    def replace_subcondition(match):
        category = match.group(1)
        return f'image: "{url}",\n          placeholderUrl: "{url}",\n          link: \'/conditions/{category}/{cid}\''
        
    conditions_content = re.sub(regex, replace_subcondition, conditions_content)

files_to_edit[conditions_file] = conditions_content


# Update individualConditions.js (heroes)
for cid, url in condition_map.items():
    # Update placeholderUrl matches for ID
    # Pattern: id: 'cid' ... hero: { ... image: "...", placeholderUrl: "..."
    
    # 1. Image
    img_pattern = rf"(id:\s*'{cid}'.*?hero:\s*\{{.*?image:\s*)\"[^\"]+\""
    individual_content = re.sub(img_pattern, rf'\1"{url}"', individual_content, count=1, flags=re.DOTALL)
    
    # 2. PlaceholderUrl (if exists in hero)
    ph_pattern = rf"(id:\s*'{cid}'.*?hero:\s*\{{.*?placeholderUrl:\s*)\"[^\"]+\""
    individual_content = re.sub(ph_pattern, rf'\1"{url}"', individual_content, count=1, flags=re.DOTALL)

files_to_edit[individual_file] = individual_content

# Write all updates
for fpath, fcontent in files_to_edit.items():
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(fcontent)

print(f"✓ Processed updates for {len(condition_map)} conditions and category pages.")
print(f"✓ Updated files:\n" + "\n".join(files_to_edit.keys()))

