
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '../src');
const uniqueImages = new Set();

// Recursive function to walk directories
function walkDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            walkDir(filePath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            const content = fs.readFileSync(filePath, 'utf-8');
            // Regex to match image strings
            const regex = /["']([^"']+\.(?:jpg|jpeg|png|webp|svg|gif)(?:[?][^"']*)?)["']/gi;
            let match;
            while ((match = regex.exec(content)) !== null) {
                const imgPath = match[1];
                if (imgPath.includes('/assets/') || imgPath.includes('http')) {
                    uniqueImages.add(imgPath);
                }
            }
        }
    });
}

walkDir(rootDir);

console.log(`Total Unique Images Found: ${uniqueImages.size}`);
const sortedImages = Array.from(uniqueImages).sort();
sortedImages.forEach(img => console.log(img));
