#!/usr/bin/env python3
"""Update all individual condition images - replace placeholderUrl then sync image to match."""
import re

file_path = "src/data/pageContents/conditions/individualConditions.js"

# Read the file
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Map of condition IDs to new image URLs
new_urls = {
    'hyperpigmentation': 'https://images.unsplash.com/photo-1737978697863-5d65495b28ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2tpbiUyMHF1YWxpdHl8ZW58MHwxfDB8fHww',
    'melasma': 'https://plus.unsplash.com/premium_photo-1664203068076-c95b2d3054a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVsYXNtYXxlbnwwfDF8MHx8fDA%3D',
    'post-inflammatory-hyperpigmentation': 'https://plus.unsplash.com/premium_photo-1664203068366-f3387be92fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVsYXNtYXxlbnwwfDF8MHx8fDA%3D',
    'uneven-skin-tone': 'https://images.unsplash.com/photo-1609542499975-4ca8bde933db?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'dull-dehydrated-skin': 'https://plus.unsplash.com/premium_photo-1677776518862-15fc946e5e66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVsbCUyMHNraW58ZW58MHwxfDB8fHww',
    'skin-decline': 'https://images.unsplash.com/photo-1659531412263-bf2b9e1abf6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2tpbiUyMGRlY2xpbmV8ZW58MHwxfDB8fHww',
    'jowls': 'https://www.aestheticsoftheroyalliverbuilding.co.uk/wp-content/uploads/2022/11/Jowls-Main-Image-1024x911.jpg.webp',
    'neck-crepiness': 'https://plus.unsplash.com/premium_photo-1671718111719-52897ffd6f75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmVjayUyMGNyZXBpbmVzc3xlbnwwfDF8MHx8fDA%3D',
    'skin-texture-decline': 'https://images.unsplash.com/photo-1615997380705-504484cd99c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVjayUyMGNyZXBpbmVzc3xlbnwwfDF8MHx8fDA%3D',
    'dark-circles': 'https://images.unsplash.com/photo-1612888295565-ef89a91e0afb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFyayUyMGV5ZSUyMGNpcmNsZXN8ZW58MHwxfDB8fHww',
    'under-eye-hollows': 'https://images.unsplash.com/photo-1617396481812-a0839db4463d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5kZXIlMjBleWUlMjBob2xsb3dzfGVufDB8MXwwfHx8MA%3D%3D',
    'crepey-under-eye': 'https://plus.unsplash.com/premium_photo-1711609635953-728d3ca1ac09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JlcGV5JTIwdW5kZXIlMjBleWUlMjBza2lufGVufDB8MXwwfHx8MA%3D%3D',
    'under-eye-pigmentation': 'https://images.unsplash.com/photo-1636820531452-d63abb2d4008?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyZXBleSUyMHVuZGVyJTIwZXllJTIwc2tpbnxlbnwwfDF8MHx8fDA%3D',
    'under-eye-puffiness': 'https://images.unsplash.com/photo-1566592802482-e35d3ac43b67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyZXBleSUyMHVuZGVyJTIwZXllJTIwc2tpbnxlbnwwfDF8MHx8fDA%3D',
    'fine-lines-wrinkles': 'https://plus.unsplash.com/premium_photo-1664203068248-456f24b39e02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmluZSUyMExpbmVzJTIwJTI2JTIwV3JpbmtsZXN8ZW58MHwxfDB8fHww',
    'uneven-texture': 'https://plus.unsplash.com/premium_photo-1689298470390-7f58f3471f93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGVoeWRyYXRlZCUyMFNraW58ZW58MHwxfDB8fHww',
    'enlarged-pores': 'https://plus.unsplash.com/premium_photo-1671717724550-fd7e92333291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW5sYXJnZWQlMjBwb3Jlc3xlbnwwfDF8MHx8fDA%3D',
    'hormonal-breakouts': 'https://plus.unsplash.com/premium_photo-1683140815244-7441fd002195?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNuZXxlbnwwfDF8MHx8fDA%3D',
    'dryness-sensitivity': 'https://plus.unsplash.com/premium_photo-1675869589440-8b3f38dc5fe2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJ5JTIwc2tpbnxlbnwwfDF8MHx8fDA%3D',
    'hormonal-pigmentation': 'https://images.unsplash.com/photo-1575779977884-f1069c45cbf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ5JTIwc2tpbnxlbnwwfDF8MHx8fDA%3D',
    'loss-of-definition': 'https://plus.unsplash.com/premium_photo-1682965699603-81ccb5965576?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZSUyMHNraW58ZW58MHwxfDB8fHww',
    'body-skin-laxity': 'https://plus.unsplash.com/premium_photo-1753028375570-2fc611309aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qm9keSUyMFNraW4lMjBMYXhpdHl8ZW58MHwxfDB8fHww',
    'cellulite': 'https://plus.unsplash.com/premium_photo-1661389208879-cef356e2497d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2VsbHVsaXRlJTIwdHJlYXRtZW50fGVufDB8MXwwfHx8MA%3D%3D',
    'stretch-marks': 'https://images.unsplash.com/photo-1606572733585-1c54ba3cf917?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyZXRjaCUyMG1hcmtzfGVufDB8MXwwfHx8MA%3D%3D',
    'post-weightloss-postpartum': 'https://plus.unsplash.com/premium_photo-1746192629710-cdbc5ec17830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG9zdC1XZWlnaHQlMjBMb3NzfGVufDB8MXwwfHx8MA%3D%3D',
    'fatigue-low-energy': 'https://images.unsplash.com/photo-1561539207-46fec82a333c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmF0aWd1ZSUyMCUyNiUyMExvdyUyMEVuZXJneXxlbnwwfDF8MHx8fDA%3D',
    'low-immunity': 'https://www.drtatiana.co.uk/wp-content/smush-webp/2019/03/low-immunity-548x794.jpg.webp',
    'slow-metabolism': 'https://plus.unsplash.com/premium_photo-1664884164827-4ba4247f3bdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xvdyUyMG1ldGFib2xpc218ZW58MHwxfDB8fHww',
    'stress-inflammation': 'https://plus.unsplash.com/premium_photo-1728915175711-c7bf6c398396?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'nutrient-deficiency-skin': 'https://images.unsplash.com/photo-1732993486279-9d0f3b91adb2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

# Step 1: Update placeholderUrls to new values
for condition_id, new_url in new_urls.items():
    # Find the condition block and update its placeholderUrl
    # Look for: id: 'condition-id' ... placeholderUrl: "old-url"
    pattern = rf"(id:\s*'{condition_id}'.*?placeholderUrl:\s*)\"[^\"]+\""
    replacement = rf'\1"{new_url}"'
    content = re.sub(pattern, replacement, content, count=1, flags=re.DOTALL)

# Step 2: Sync all image fields to match their placeholderUrl
pattern = r'(image:\s*)("[^"]+")(\s*,\s*placeholderUrl:\s*)("[^"]+")' 

def replace_func(match):
    prefix = match.group(1)
    old_image = match.group(2)
    middle = match.group(3)
    placeholder_url = match.group(4)
    
    if old_image != placeholder_url:
        return f'{prefix}{placeholder_url}{middle}{placeholder_url}'
    return match.group(0)

content = re.sub(pattern, replace_func, content)

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"✓ Updated placeholderUrls for {len(new_urls)} conditions")
print("✓ Synced all image fields to match their placeholderUrl values")
