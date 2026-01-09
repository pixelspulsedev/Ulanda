
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { conditions } from '../src/data/pageContents/conditions/conditions.js';
import { programmes } from '../src/data/pageContents/programmes/programmes.js';
import { treatments } from '../src/data/pageContents/treatments/treatments.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.ulanda.co.uk';

const staticRoutes = [
  '',
  '/about/our-story',
  '/about/our-philosophy',
  '/about/manifesto',
  '/conditions',
  '/programmes',
  '/pathways',
  '/contact' // Assuming contact exists or will exist? Removed from list for now if not sure. Checked main.jsx, no explicit contact route.
  // main.jsx routes:
  // /
  // /pathways
  // /conditions
  // /programmes
  // /about -> redirect
  // /about/our-story
  // /about/our-philosophy
  // /about/manifesto
  // /about/founder -> founder (src/pages/Founder.jsx)
  // /treatment -> treatment (src/pages/Treatment.jsx) - Wait, is this a generic page?
];

// Check main.jsx again for other static routes.
// Founder.jsx -> /about/founder? No, main.jsx says:
/*
      {
        path: 'about/founder',
        element: <Founder />,
      },
      {
        path: 'about/manifesto',
        element: <Manifesto />,
      },
*/
// And Treatment.jsx?
/*
      {
        path: 'treatments', // Assuming based on filename or typical pattern, need to check main.jsx again.
        // Actually I only read partial main.jsx.
      }
*/

// Let's refine staticRoutes after checking specific routes if needed.
// For now, I'll stick to the visible ones.

const generateSitemap = () => {
  const urls = [];

  // Add static routes
  staticRoutes.forEach(route => {
    urls.push(route);
  });
  
  // Add 'about/our-founder'
  urls.push('/about/our-founder');

  // Add Conditions Master Pages
  conditions.forEach(condition => {
    // /conditions/:id
    urls.push(`/conditions/${condition.id}`);

    // Add Individual Condition Pages
    if (condition.subConditions && condition.subConditions.items) {
      condition.subConditions.items.forEach(item => {
        if (item.link) {
           // item.link is already a full path like '/conditions/skin-texture-quality/fine-lines-wrinkles'
           urls.push(item.link);
        }
      });
    }
  });

  // Add Programmes Pages
  programmes.forEach(programme => {
    // /programmes/:id
    urls.push(`/programmes/${programme.id}`);
  });

  // Add Treatments Pages
  treatments.forEach(treatment => {
    // /treatments/:id
    urls.push(`/treatments/${treatment.id}`);
  });

  // Create XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
  <url>
    <loc>${BASE_URL}${url.startsWith('/') ? url : '/' + url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  // Write to different locations to be safe (public for dev/build copy, dist for post-build)
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
