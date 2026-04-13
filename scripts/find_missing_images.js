/**
 * Scans all published data sources for missing or broken local images.
 * Outputs a CSV: Type, ID/Title, URL, Image Context, Current Image, Issue, Desired Dimensions
 */

import { blogs } from '../src/data/pageContents/blogs/blogs.js';
import { treatments } from '../src/data/pageContents/treatments/treatments.js';
import { conditions } from '../src/data/pageContents/conditions/conditions.js';
import { individualConditions } from '../src/data/pageContents/conditions/individualConditions.js';
import { journalArticles } from '../src/data/pageContents/journal/journalArticles.js';
import { signaturePathways } from '../src/data/pageContents/signature/signatureData.js';
import { programmes } from '../src/data/pageContents/programmes/programmes.js';
import { pathways } from '../src/data/pageContents/pathways/pathways.js';
import { tools } from '../src/data/pageContents/tools/tools.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

const rows = [];

function isMissing(url) {
  if (!url || url.trim() === '') return 'Missing image';
  return null;
}

function localImageExists(url) {
  if (!url || url.startsWith('http')) return true; // skip external
  const filePath = path.join(publicDir, url);
  return fs.existsSync(filePath);
}

function addRow(type, id, pageUrl, imageContext, currentImage, issue, dimensions) {
  rows.push({
    type,
    id,
    pageUrl,
    imageContext,
    currentImage: currentImage || '',
    issue,
    dimensions
  });
}

function checkImage(type, id, pageUrl, imageContext, imageUrl, dimensions) {
  const issue = isMissing(imageUrl);
  if (issue) {
    addRow(type, id, pageUrl, imageContext, imageUrl, issue, dimensions);
    return;
  }
  if (!localImageExists(imageUrl)) {
    addRow(type, id, pageUrl, imageContext, imageUrl, 'Local file not found', dimensions);
  }
}

// ─── BLOGS (published only) ───
for (const blog of blogs) {
  if (blog.status && blog.status !== 'published') continue;
  const url = `/blog/${blog.slug || blog.id}`;
  const heroImg = blog.images?.[0] || blog.heroImage || null;
  checkImage('Blog', blog.id, url, 'Hero image', heroImg, '1200x630');

  if (blog.images && blog.images.length > 1) {
    for (let i = 1; i < blog.images.length; i++) {
      checkImage('Blog', blog.id, url, `Content image ${i}`, blog.images[i], '800x500');
    }
  }
}

// ─── JOURNAL ARTICLES (published only) ───
for (const article of journalArticles) {
  if (article.status && article.status !== 'published') continue;
  const url = `/journal/${article.id}`;
  checkImage('Journal', article.id, url, 'Hero image', article.image, '1200x630');
}

// ─── TREATMENTS (nested: category > subCategory > treatment) ───
for (const [catId, category] of Object.entries(treatments)) {
  const catUrl = `/treatments/${catId}`;
  checkImage('Treatment Category', catId, catUrl, 'Category image', category.image, '1200x630');

  if (category.subCategories) {
    for (const [subId, sub] of Object.entries(category.subCategories)) {
      const subUrl = `/treatments/${catId}/${subId}`;
      checkImage('Treatment SubCategory', `${catId}/${subId}`, subUrl, 'SubCategory image', sub.image, '800x500');

      if (sub.treatments) {
        for (const [treatId, treat] of Object.entries(sub.treatments)) {
          const treatUrl = `/treatments/${catId}/${subId}/${treatId}`;
          checkImage('Treatment', treatId, treatUrl, 'Treatment hero image', treat.image, '1200x630');

          // Check introduction image
          if (treat.introduction) {
            checkImage('Treatment', treatId, treatUrl, 'Introduction image', treat.introduction.image, '800x500');
          }

          // Check results images
          if (treat.results?.beforeAfter) {
            for (let i = 0; i < treat.results.beforeAfter.length; i++) {
              const ba = treat.results.beforeAfter[i];
              checkImage('Treatment', treatId, treatUrl, `Before/After before #${i+1}`, ba.before, '400x400');
              checkImage('Treatment', treatId, treatUrl, `Before/After after #${i+1}`, ba.after, '400x400');
            }
          }
        }
      }
    }
  }
}

// ─── CONDITIONS (parent categories) ───
for (const condition of conditions) {
  const url = `/conditions/${condition.id}`;
  checkImage('Condition', condition.id, url, 'Hero image', condition.hero?.image, '1200x630');

  // Check subcondition images
  if (condition.subConditions?.items) {
    for (const sub of condition.subConditions.items) {
      checkImage('Condition SubItem', condition.id, sub.link || url, 'SubCondition card image', sub.image, '600x400');
    }
  }
}

// ─── INDIVIDUAL CONDITIONS ───
for (const cond of individualConditions) {
  const url = `/conditions/${cond.id}`;
  checkImage('Individual Condition', cond.id, url, 'Hero image', cond.hero?.image, '1200x630');

  // Treatment model images
  if (cond.treatmentModel?.items) {
    for (const item of cond.treatmentModel.items) {
      checkImage('Individual Condition', cond.id, url, `Treatment model - ${item.title}`, item.image, '600x400');
    }
  }
}

// ─── SIGNATURE PATHWAYS ───
for (const sig of signaturePathways) {
  const url = `/signature/${sig.id}`;
  checkImage('Signature', sig.id, url, 'Hero image', sig.image, '1200x630');
}

// ─── PROGRAMMES ───
for (const prog of programmes) {
  const url = `/programmes/${prog.id}`;
  checkImage('Programme', prog.id, url, 'Hero image', prog.image, '1200x630');
  if (prog.summary) {
    checkImage('Programme', prog.id, url, 'Summary image', prog.summary.image, '800x500');
  }
}

// ─── PATHWAYS ───
for (const pw of pathways) {
  const url = `/pathways/${pw.id}`;
  checkImage('Pathway', pw.id, url, 'Hero image', pw.image, '1200x630');
}

// ─── TOOLS ───
for (const tool of tools) {
  const url = `/tools/${tool.id}`;
  // Tools may have images at various levels
  if (tool.image !== undefined) {
    checkImage('Tool', tool.id, url, 'Hero image', tool.image, '1200x630');
  }
  if (tool.heroImage !== undefined) {
    checkImage('Tool', tool.id, url, 'Hero image', tool.heroImage, '1200x630');
  }
}

// ─── OUTPUT CSV ───
function escapeCsv(val) {
  if (val == null) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

const header = 'Type,ID,Page URL,Image Context,Current Image,Issue,Desired Dimensions (WxH px)';
const csvRows = rows.map(r =>
  [r.type, r.id, r.pageUrl, r.imageContext, r.currentImage, r.issue, r.dimensions]
    .map(escapeCsv)
    .join(',')
);

const csv = [header, ...csvRows].join('\n');
const outPath = path.join(__dirname, '..', 'MISSING_IMAGES_REPORT.csv');
fs.writeFileSync(outPath, csv, 'utf-8');
console.log(`\nFound ${rows.length} items with missing or placeholder images.`);
console.log(`Report saved to: MISSING_IMAGES_REPORT.csv\n`);

// Print summary by type
const summary = {};
for (const r of rows) {
  const key = `${r.type} - ${r.issue}`;
  summary[key] = (summary[key] || 0) + 1;
}
console.log('Summary:');
for (const [key, count] of Object.entries(summary).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${key}: ${count}`);
}
