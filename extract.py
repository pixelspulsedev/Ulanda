import re
with open('src/pages/locations/AestheticClinicWare.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'whitespace-pre-line\">\s*\{\"(.*?)\"\}\s*</div', text, re.DOTALL)
if m:
    with open('ware_temp.txt', 'w', encoding='utf-8') as fw:
        fw.write(m.group(1))
