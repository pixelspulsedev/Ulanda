import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Import data for static path generation
import { treatments } from './src/data/pageContents/treatments/treatments.js'
import { conditions } from './src/data/pageContents/conditions/conditions.js'
import { individualConditions } from './src/data/pageContents/conditions/individualConditions.js'
import { programmes } from './src/data/pageContents/programmes/programmes.js'
import { blogs } from './src/data/pageContents/blogs/blogs.js'

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
    '/about/our-story',
    '/about/our-philosophy',
    '/about/manifesto',
    '/about/our-founder',
    '/privacy-policy',
    '/terms-of-use',
    '/disclaimer',
  ];

  // Treatment category pages: /treatments/refresh, /treatments/renew, etc.
  const treatmentCategories = Object.keys(treatments);
  treatmentCategories.forEach(category => {
    paths.push(`/treatments/${category}`);
    
    // Subcategory pages: /treatments/refresh/signature-facials
    const subCategories = treatments[category]?.subCategories || {};
    Object.keys(subCategories).forEach(subCategory => {
      paths.push(`/treatments/${category}/${subCategory}`);
      
      // Individual treatment pages: /treatments/refresh/signature-facials/dermaplaning
      const treatmentList = subCategories[subCategory]?.treatments || {};
      Object.keys(treatmentList).forEach(treatment => {
        paths.push(`/treatments/${category}/${subCategory}/${treatment}`);
      });
    });
  });

  // Radiate pathways pages (programmes redirect to pathways)
  paths.push('/treatments/radiate/pathways');
  programmes.forEach(programme => {
    paths.push(`/treatments/radiate/pathways/${programme.id}`);
  });

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

  // Individual condition pages (fallback to catch any /conditions/:id route)
  individualConditions.forEach(condition => {
    paths.push(`/conditions/${condition.id}`);
  });

  // Blog pages
  blogs.forEach(blog => {
    paths.push(`/blogs/${blog.id}`);
  });

  // Remove duplicates
  return [...new Set(paths)];
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    dirStyle: 'nested',
    formatting: 'none',
    includedRoutes(paths, routes) {
      // Return all our generated paths
      return generateStaticPaths();
    },
  },
})
