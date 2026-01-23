#!/usr/bin/env python3
"""Update all condition images with the provided URLs."""

file_path = "src/data/pageContents/conditions/conditions.js"

# Read the file
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define all replacements
replacements = [
    # Main Conditions category image (if it exists - this would be at the top level)
    # Note: The file structure shows individual condition categories, not a parent "Conditions" category
    
    # Pigmentation and skin tone - subcategory thumbnail
    ('id: \'pigmentation-and-skin-tone\'', 'PIGMENTATION_MARKER'),
    
    # Menopause & Hormone-Linked Changes - subcategory thumbnail
    ('id: \'menopause-hormone-skin-changes\'', 'MENOPAUSE_MARKER'),
    
    # Eye area condition - subcategory thumbnail
    ('id: \'eye-area\'', 'EYE_MARKER'),
    
    # Skin texture and quality (age-and-regeneration) - subcategory thumbnail
    ('id: \'age-and-regeneration\'', 'AGE_MARKER'),
    
    # Hormonal skin condition - subcategory thumbnail
    ('id: \'hormonal-skin\'', 'HORMONAL_MARKER'),
    
    # Body skin and structural conditions - subcategory thumbnail
    ('id: \'body-skin-structural\'', 'BODY_MARKER'),
    
    # Internal wellness conditions - subcategory thumbnail
    ('id: \'internal-wellness\'', 'WELLNESS_MARKER'),
]

# First, add markers to find the sections
for old, marker in replacements:
    content = content.replace(old, f'{old} /* {marker} */')

# Now update the hero images for each category
updates = [
    # Age and regeneration (Skin texture and quality)
    ('/* AGE_MARKER */', 
     'image: "/assets/img/conditions/age-and-regeneration-hero.webp",\n      placeholderUrl: "https://images.pexels.com/photos/5067738/pexels-photo-5067738.jpeg?auto=compress&cs=tinysrgb&w=1200"',
     'image: "https://images.unsplash.com/photo-1737978697863-5d65495b28ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2tpbiUyMHF1YWxpdHl8ZW58MHwxfDB8fHww",\n      placeholderUrl: "https://images.unsplash.com/photo-1737978697863-5d65495b28ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2tpbiUyMHF1YWxpdHl8ZW58MHwxfDB8fHww"'),
    
    # Body skin structural
    ('/* BODY_MARKER */',
     'image: "/assets/img/conditions/body-skin-structural-hero.webp",\n      placeholderUrl: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200"',
     'image: "https://plus.unsplash.com/premium_photo-1711611162431-c7087d8c213b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",\n      placeholderUrl: "https://plus.unsplash.com/premium_photo-1711611162431-c7087d8c213b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"'),
    
    # Eye area
    ('/* EYE_MARKER */',
     'image: "/assets/img/conditions/eye-area-hero.webp",\n      placeholderUrl: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200"',
     'image: "https://plus.unsplash.com/premium_photo-1671656333809-0bc676535194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXllJTIwYXJlYXxlbnwwfDF8MHx8fDA%3D",\n      placeholderUrl: "https://plus.unsplash.com/premium_photo-1671656333809-0bc676535194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXllJTIwYXJlYXxlbnwwfDF8MHx8fDA%3D"'),
    
    # Menopause hormone skin changes
    ('/* MENOPAUSE_MARKER */',
     'image: "/assets/img/conditions/menopause-hormone-skin-changes-hero.webp",\n      placeholderUrl: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200"',
     'image: "https://images.unsplash.com/photo-1686485238490-368d939fb1b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVub3BhdXNlfGVufDB8MXwwfHx8MA%3D%3D",\n      placeholderUrl: "https://images.unsplash.com/photo-1686485238490-368d939fb1b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVub3BhdXNlfGVufDB8MXwwfHx8MA%3D%3D"'),
    
    # Pigmentation and skin tone
    ('/* PIGMENTATION_MARKER */',
     'image: "/assets/img/conditions/pigmentation-and-skin-tone-hero.webp",\n      placeholderUrl: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200"',
     'image: "https://plus.unsplash.com/premium_photo-1664203068366-f3387be92fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbiUyMHBpZ21lbnRhdGlvbnxlbnwwfDF8MHx8fDA%3D",\n      placeholderUrl: "https://plus.unsplash.com/premium_photo-1664203068366-f3387be92fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbiUyMHBpZ21lbnRhdGlvbnxlbnwwfDF8MHx8fDA%3D"'),
    
    # Internal wellness
    ('/* WELLNESS_MARKER */',
     'image: "/assets/img/conditions/internal-wellness-hero.webp",\n      placeholderUrl: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200"',
     'image: "https://plus.unsplash.com/premium_photo-1726822826648-9a0d4893a2df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2tpbiUyMHF1YWxpdHl8ZW58MHwxfDB8fHww",\n      placeholderUrl: "https://plus.unsplash.com/premium_photo-1726822826648-9a0d4893a2df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2tpbiUyMHF1YWxpdHl8ZW58MHwxfDB8fHww"'),
    
    # Hormonal skin
    ('/* HORMONAL_MARKER */',
     'image: "/assets/img/conditions/hormonal-skin-hero.webp",\n      placeholderUrl: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200"',
     'image: "https://plus.unsplash.com/premium_photo-1734714167500-cc692038228c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2tpbiUyMHF1YWxpdHl8ZW58MHwxfDB8fHww",\n      placeholderUrl: "https://plus.unsplash.com/premium_photo-1734714167500-cc692038228c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2tpbiUyMHF1YWxpdHl8ZW58MHwxfDB8fHww"'),
]

# Apply the hero image updates by searching for markers and the old pattern
for marker, old_pattern, new_pattern in updates:
    # Find sections with this marker
    if marker in content:
        # Search for the old pattern after the marker within a reasonable range
        marker_pos = content.find(marker)
        if marker_pos != -1:
            # Look ahead for the image pattern
            search_start = marker_pos
            search_end = marker_pos + 2000  # Look within next 2000 chars
            section = content[search_start:search_end]
            
            if old_pattern in section:
                content = content[:search_start] + section.replace(old_pattern, new_pattern, 1) + content[search_end:]

# Remove markers
content = content.replace(' /* AGE_MARKER */', '')
content = content.replace(' /* BODY_MARKER */', '')
content = content.replace(' /* EYE_MARKER */', '')
content = content.replace(' /* MENOPAUSE_MARKER */', '')
content = content.replace(' /* PIGMENTATION_MARKER */', '')
content = content.replace(' /* WELLNESS_MARKER */', '')
content = content.replace(' /* HORMONAL_MARKER */', '')

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Updated category hero images")
print("Now updating individual condition images...")
