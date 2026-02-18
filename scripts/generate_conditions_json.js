const fs = require('fs');
const path = require('path');

try {
    const filePath = path.join(__dirname, '../src/data/pageContents/conditions/individualConditions.js');
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove exports
    // content = content.replace(/export\s+const\s+individualConditions/, 'var individualConditions');
    // Using a more robust replacement in case of spaces or surrounding context
    content = content.replace(/export\s+const\s+individualConditions\s*=\s*/, 'var individualConditions = ');
    
    // Remove the last export line to avoid syntax errors in eval
    content = content.replace(/export\s+const\s+getIndividualCondition\s*=.*/g, '');

    // Eval the content
    eval(content);

    const targetIds = [
      'stress-cortisol-skin-imbalance',
      'poor-sleep-skin-ageing',
      'pelvic-intimate-regeneration',
      'inflammation-driven-ageing',
      'gut-skin-imbalance',
      'fatigue-low-energy-affecting-skin'
    ];

    const results = individualConditions
        .filter(c => targetIds.includes(c.id))
        .map(c => {
             const n = JSON.parse(JSON.stringify(c));
             // Schema adjustments
             if (n.science) {
                 n.science.title = "Common triggers and drivers";
                 n.science.highlight = "";
             }
             
             // Select only schema fields
             return {
                 id: n.id,
                 seo: n.seo,
                 hero: n.hero,
                 science: n.science,
                 treatmentModel: n.treatmentModel,
                 whyChoose: n.whyChoose,
                 relatedTreatments: n.relatedTreatments,
                 faq: n.faq,
                 cta: n.cta
             };
        });

    // Ensure order matches request
    const ordered = targetIds.map(id => results.find(r => r.id === id)).filter(Boolean);

    console.log(JSON.stringify(ordered, null, 2));

} catch (err) {
    console.error(err);
}
