import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Import data for static path generation
import { treatmentCategories as newTreatmentCategories } from './src/data/pageContents/treatments/drafts/treatments_restructured_draft.js'
import { conditions } from './src/data/pageContents/conditions/conditions.js'
import { individualConditions } from './src/data/pageContents/conditions/individualConditions.js'
import { blogs } from './src/data/pageContents/blogs/blogs.js'
import { signaturePathways } from './src/data/pageContents/signature/signatureData.js'
import { journalArticles } from './src/data/pageContents/journal/journalArticles.js'
import { tools } from './src/data/pageContents/tools/tools.js'
import { getConditionUrl } from './src/data/crosslinks.js'

// Generate all static paths for SSG
function generateStaticPaths() {
  const paths = [
    '/',
    '/treatments',
    '/conditions',
    '/blogs',
    '/contact',
    '/book-consultation',
    '/help-and-support',
    '/downloads/skin-health',
    '/about/our-story',
    '/about/our-philosophy',
    '/about/manifesto',
    '/about/our-founder',
    '/privacy-policy',
    '/terms-of-use',
    '/disclaimer',
  ];

  // NOTE: legacy treatment paths (/treatments/refresh, /treatments/renew,
  // /treatments/restore, /treatments/radiate and their subcategories/treatments)
  // are intentionally NOT pre-rendered. Every legacy path is permanently
  // redirected in vercel.json to its canonical destination — emitting static
  // HTML for them creates duplicate-content signals and unnecessary build
  // bloat. The treatments.js export remains in use as the data source for
  // getOriginalTreatment() in the restructured category data only.

  // New treatment structure: /treatments/skin-renewal-regeneration, etc.
  Object.keys(newTreatmentCategories).forEach(categoryId => {
    paths.push(`/treatments/${categoryId}`);
    const categoryTreatments = newTreatmentCategories[categoryId]?.treatments || {};
    Object.keys(categoryTreatments).forEach(treatmentId => {
      paths.push(`/treatments/${categoryId}/${treatmentId}`);
    });
  });

  // Dedicated treatment pages
  paths.push('/treatments/advanced-skin-health-consultation');
  paths.push('/treatments/skin-barrier-renewal-protocol');
  paths.push('/treatments/prescription-skincare');
  paths.push('/treatments/prescription-skincare/obagi-medical');

  // Tool pages
  tools.forEach(tool => {
    paths.push(`/tools/${tool.id}`);
  });

  // Signature pathways (canonical)
  paths.push('/signature');
  signaturePathways.forEach(pathway => {
    paths.push(`/signature/${pathway.id}`);
  });

  // NOTE: legacy /treatments/radiate/pathways/* and /programmes/* paths are
  // permanently redirected to /signature/* in vercel.json — do not pre-render
  // them. The signaturePathways above are the canonical replacement.

  // Condition category pages: /conditions/age-and-regeneration
  conditions.forEach(condition => {
    paths.push(`/conditions/${condition.id}`);

    // Add individual condition links from subConditions.items
    if (condition.subConditions?.items) {
      condition.subConditions.items.forEach(subCondition => {
        if (subCondition.link) {
          paths.push(subCondition.link);
        }
      });
    }
  });

  // Pre-render every individualCondition at its canonical /conditions/:category/:id
  // URL (using getConditionUrl) so Google gets real HTML instead of an SPA shell.
  // Also emit the bare /conditions/:id form — ConditionDetail sets a canonical
  // <link> pointing back to the category-prefixed URL, so duplicates are handled.
  individualConditions.forEach(condition => {
    if (!condition?.id) return;
    paths.push(getConditionUrl(condition.id));
    paths.push(`/conditions/${condition.id}`);
  });

  // Blog pages
  blogs.forEach(blog => {
    paths.push(`/blogs/${blog.id}`);
  });

  // Location pages
  paths.push('/locations/aesthetic-clinic-hertfordshire');
  paths.push('/locations/aesthetic-clinic-hoddesdon');
  paths.push('/locations/aesthetic-clinic-hertford');
  paths.push('/locations/aesthetic-clinic-harlow');
  paths.push('/locations/aesthetic-clinic-cheshunt');
  paths.push('/locations/aesthetic-clinic-broxbourne');
  paths.push('/locations/aesthetic-clinic-bishops-stortford');
  paths.push('/locations/aesthetic-clinic-ware');
  paths.push('/locations/aesthetic-clinic-stanstead-abbotts');
  paths.push('/locations/aesthetic-clinic-great-amwell');
  paths.push('/locations/aesthetic-clinic-buntingford');
  paths.push('/locations/aesthetic-clinic-welwyn-garden-city');
  paths.push('/locations/aesthetic-clinic-stevenage');
  paths.push('/locations/aesthetic-clinic-sawbridgeworth');

  // Authority Journal pages
  paths.push('/journal');
  journalArticles
    .filter(a => a.status === 'published')
    .forEach(article => {
      paths.push(`/journal/${article.id}`);
    });

  // Remove duplicates
  return [...new Set(paths)];
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom')) return 'vendor-react';
          if (id.includes('node_modules/react-router-dom')) return 'vendor-react';
          if (id.includes('node_modules/react/')) return 'vendor-react';
          if (id.includes('node_modules/framer-motion')) return 'vendor-motion';
          if (id.includes('node_modules/lucide-react')) return 'vendor-icons';
        },
      },
    },
  },
  ssgOptions: {
    dirStyle: 'nested',
    formatting: 'none',
    includedRoutes(paths, routes) {
      // Return all our generated paths
      return generateStaticPaths();
    },
  },
})
