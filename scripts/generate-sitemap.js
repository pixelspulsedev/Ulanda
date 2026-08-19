import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { conditions } from '../src/data/pageContents/conditions/conditions.js';
import { individualConditions } from '../src/data/pageContents/conditions/individualConditions.js';
import { programmes } from '../src/data/pageContents/programmes/programmes.js';
import { treatments } from '../src/data/pageContents/treatments/treatments.js';
import { getAllTreatmentCategories } from '../src/data/pageContents/treatments/drafts/treatments_restructured_draft.js';
import { blogs, isPublishedBlog } from '../src/data/pageContents/blogs/blogs.js';
import { signaturePathways } from '../src/data/pageContents/signature/signatureData.js';
import { journalArticles } from '../src/data/pageContents/journal/journalArticles.js';
import { tools } from '../src/data/pageContents/tools/tools.js';
import { getConditionUrl } from '../src/data/crosslinks.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.ulanda.co.uk';
const LASTMOD = new Date().toISOString().split('T')[0];

const staticRoutes = [
  '',
  '/treatments',
  '/conditions',
  '/blogs',
  '/contact',
  '/book-consultation',
  '/help-and-support',
  '/clinical-system',
  '/downloads/skin-health',
  '/about/our-story',
  '/about/our-philosophy',
  '/about/manifesto',
  '/about/our-founder',
  '/treatments/advanced-skin-health-consultation',
  '/treatments/skin-barrier-renewal-protocol',
  '/treatments/medical-aesthetics-clinic',
  '/treatments/prescription-skincare',
  '/treatments/prescription-skincare/obagi-medical',
  '/privacy-policy',
  '/terms-of-use',
  '/disclaimer'
];

const generateSitemap = () => {
  const urls = [];

  // Add static routes
  staticRoutes.forEach(route => {
    urls.push(route);
  });

  // Add Conditions Master Pages
  conditions.forEach(condition => {
    // /conditions/:id
    urls.push(`/conditions/${condition.id}`);

    // Add Individual Condition Pages
    if (condition.subConditions && condition.subConditions.items) {
      condition.subConditions.items.forEach(item => {
        if (item.link) {
           urls.push(item.link);
        }
      });
    }
  });

  // Add Individual Conditions (Fallback for orphans)
  individualConditions.forEach(condition => {
    urls.push(getConditionUrl(condition.id));
  });

  // Signature Pages (Pathways redirected to /signature)
  urls.push('/signature');
  signaturePathways.forEach(sig => {
    urls.push(`/signature/${sig.id}`);
  });

  // Add Blog Pages (drafts excluded, matching /blogs and the SSG path list)
  blogs.filter(isPublishedBlog).forEach(blog => {
    urls.push(`/blogs/${blog.id}`);
  });

  // Add Treatment Pages (From Restructured Draft)
  const treatmentCategories = getAllTreatmentCategories();
  Object.keys(treatmentCategories).forEach(catKey => {
    const category = treatmentCategories[catKey];
    
    // Category Page
    // Only add if not hidden/gated (or explicitly included) ?
    // Assuming we want all category landing pages
    urls.push(`/treatments/${catKey}`);

    if (category.treatments) {
      Object.keys(category.treatments).forEach(treatmentKey => {
         // Treatment Detail Page
         urls.push(`/treatments/${catKey}/${treatmentKey}`);
      });
    }
  });

  // Add Tool (deep-dive technology) Pages
  tools.forEach(tool => {
    if (tool && tool.id) {
      urls.push(`/tools/${tool.id}`);
    }
  });

  // Add Authority Journal Pages
  urls.push('/journal');
  journalArticles
    .filter(a => a.status === 'published')
    .forEach(article => {
      urls.push(`/journal/${article.id}`);
    });

  // Add Location Pages
  const locationSlugs = [
    'aesthetic-clinic-hertfordshire',
    'aesthetic-clinic-hoddesdon',
    'aesthetic-clinic-hertford',
    'aesthetic-clinic-harlow',
    'aesthetic-clinic-cheshunt',
    'aesthetic-clinic-broxbourne',
    'aesthetic-clinic-bishops-stortford',
    'aesthetic-clinic-welwyn-garden-city',
    'aesthetic-clinic-stevenage',
    'aesthetic-clinic-sawbridgeworth',
    'aesthetic-clinic-ware',
    'aesthetic-clinic-stanstead-abbotts',
    'aesthetic-clinic-great-amwell',
    'aesthetic-clinic-buntingford',
  ];
  locationSlugs.forEach(slug => {
    urls.push(`/locations/${slug}`);
  });

  /*
  // Add Treatments Pages (Old Structure - Deprecated)
  Object.keys(treatments).forEach(catKey => {
    const category = treatments[catKey];
    // Category Page
    urls.push(`/treatments/${catKey}`);

    if (category.subCategories) {
      Object.keys(category.subCategories).forEach(subCatKey => {
         // Subcategory Page
         urls.push(`/treatments/${catKey}/${subCatKey}`);
         
         const subCategory = category.subCategories[subCatKey];
         if (subCategory.treatments) {
             Object.keys(subCategory.treatments).forEach(treatmentKey => {
                 // Treatment Detail Page
                 urls.push(`/treatments/${catKey}/${subCatKey}/${treatmentKey}`);
             });
         }
      });
    }
  });
  */

  const uniqueUrls = [...new Set(urls)];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${uniqueUrls.map(url => {
      const formattedUrl = url.startsWith('/') ? url : '/' + url;
      return `
  <url>
    <loc>${BASE_URL}${formattedUrl}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    }).join('')}
</urlset>`;

  const publicPath = path.resolve(__dirname, '../public/sitemap.xml');
  const distPath = path.resolve(__dirname, '../dist/sitemap.xml');

  fs.writeFileSync(publicPath, sitemap);
  console.log(`Sitemap generated at ${publicPath}`);

  if (fs.existsSync(path.resolve(__dirname, '../dist'))) {
      fs.writeFileSync(distPath, sitemap);
      console.log(`Sitemap generated at ${distPath}`);
  }
};

generateSitemap();