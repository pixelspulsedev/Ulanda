const fs = require('fs');
const path = require('path');

// We are running from the root of the workspace hopefully, but let's be safe.
// Assuming script is run from workspace root: node scripts/fix_encoding_v2.js
const filePath = 'src/data/pageContents/journal/journalArticles.js';

try {
    let text = fs.readFileSync(filePath, 'utf8');
    
    // Replacement dictionary for specific observed artifacts
    const replacements = [
        // Arrow
        { search: 'â†’', replace: '→' },
        
        // Double Horizontal Line (E2 95 90) -> â • [90]
        { search: 'â•\u0090', replace: '═' },
        
        // Double Vertical Line (E2 95 91) -> â • [91]
        { search: 'â•\u0091', replace: '║' },

        // Box Top Right Double (E2 95 97) -> â • [97]
        { search: 'â•\u0097', replace: '╗' },

        // Box Top Left Double (E2 95 94) -> â • [94]
        { search: 'â•\u0094', replace: '╔' },

        // Box Bottom Right Double (E2 95 9D) -> â • [9D]
        { search: 'â•\u009d', replace: '╝' },
        
        // Box Bottom Left Double (E2 95 9A) -> â • [9A]
        { search: 'â•\u009a', replace: '╚' },

        // Light Horizontal (E2 94 80) -> â ” € (Wait. 80 is €, 94 is ”)
        // Actually earlier grep showed 'â”€'.
        // E2 94 80.
        // E2 -> â.
        // 94 -> ”.
        // 80 -> €.
        // Wait, 0x80 in CP1252 is €. 0x94 is ”.
        // So 'â”€' might be E2 94 80.
        { search: 'â”€', replace: '─' },
        
        // Ellipsis (E2 80 A6) -> â € ¦
        { search: 'â€¦', replace: '…' },

    ];

    let newText = text;
    let count = 0;

    replacements.forEach(r => {
        if (newText.includes(r.search)) {
            console.log(`Replacing ${r.search} with ${r.replace}`);
            // Use split/join for global replacement
            newText = newText.split(r.search).join(r.replace);
            count += 1;
        }
    });

    if (count > 0) {
        console.log(`Made ${count} types of replacements.`);
        fs.writeFileSync(filePath, newText, 'utf8');
    } else {
        console.log("No matching artifacts found.");
    }

} catch (e) {
    console.error(e);
}
