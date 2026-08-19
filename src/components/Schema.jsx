import React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Site-wide LocalBusiness/MedicalBusiness Schema
 * Implements as per ULANDA SEO requirements - added once site-wide
 * Skipped on homepage where a merged JSON-LD block is used instead
 */
export const LocalBusinessSchema = () => {
  const { pathname } = useLocation();
  // Homepage has its own merged @graph schema — skip site-wide schema there
  if (pathname === '/') return null;
  // Location pages emit their own, richer node under the SAME @id. Emitting
  // both put two MedicalBusiness nodes with one @id but conflicting name,
  // addressRegion and addressCountry on every location page — an entity
  // conflict that undermines local ranking. One @id, one node per page.
  if (pathname.startsWith('/locations/')) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.ulanda.co.uk/#medicalbusiness",
    // Must match the location-page node and the Google Business Profile exactly.
    "name": "ULANDA Skin Clinic",
    "url": "https://www.ulanda.co.uk",
    "logo": "https://www.ulanda.co.uk/assets/img/ui/Logo.webp",
    "image": "https://www.ulanda.co.uk/assets/img/home/ulanda-homepage-hero-ware-sg12.webp",
    "telephone": "+44 7904 336031",
    "email": "info@ulanda.co.uk",
    "priceRange": "£££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Uphaven, 6 Hampden Hill",
      "addressLocality": "Ware",
      "postalCode": "SG12 7JT",
      "addressRegion": "Hertfordshire",
      // ISO 3166-1 alpha-2. "UK" is not a valid code; the correct one is GB.
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.8094",
      "longitude": "-0.0316"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Hertfordshire"
      },
      {
        "@type": "City",
        "name": "Ware"
      },
      {
        "@type": "City",
        "name": "Hertford"
      },
      {
        "@type": "City",
        "name": "Bishops Stortford"
      },
      {
        "@type": "City",
        "name": "Hoddesdon"
      },
      {
        "@type": "City",
        "name": "Broxbourne"
      }
    ],
    "medicalSpecialty": "https://schema.org/Dermatology",
    "knowsAbout": [
      "Aesthetic Medicine",
      "Skin Regeneration",
      "Regenerative Aesthetics",
      "Bio-remodelling",
      "Hormone-aware Skincare"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "10:30",
      "closes": "18:30"
    },
    "sameAs": [
      "https://www.instagram.com/ulandamedspa",
      "https://www.facebook.com/ulandamedspa"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * Article Schema for Authority Journal pages
 * Implements Article + MedicalWebPage structured data
 * @param {Object} article - Journal article data object
 */
export const ArticleSchema = ({ article }) => {
  if (!article) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.seo?.description || article.subtitle,
    "url": article.seo?.canonical || `https://www.ulanda.co.uk/journal/${article.id}`,
    "datePublished": article.date,
    "dateModified": article.dateModified || article.date,
    "author": {
      "@type": "Person",
      "name": article.author || "Helen Balogun",
      "jobTitle": article.authorCredential || "Advanced Nurse Practitioner",
      "worksFor": {
        "@type": "MedicalBusiness",
        "@id": "https://www.ulanda.co.uk/#medicalbusiness"
      }
    },
    "publisher": {
      "@type": "MedicalBusiness",
      "@id": "https://www.ulanda.co.uk/#medicalbusiness"
    },
    ...(article.image && {
      "image": `https://www.ulanda.co.uk${article.image}`
    }),
    "mainEntityOfPage": {
      "@type": "MedicalWebPage",
      "url": article.seo?.canonical || `https://www.ulanda.co.uk/journal/${article.id}`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * Service Schema for individual treatment pages
 * @param {Object} treatment - Treatment data object
 * @param {string} pathway - Pathway name (refresh, renew, restore, radiate)
 * @param {string} subcategory - Subcategory slug
 */
export const ServiceSchema = ({ treatment, pathway, subcategory }) => {
  if (!treatment) return null;

  const baseUrl = 'https://www.ulanda.co.uk';
  const treatmentUrl = `${baseUrl}/treatments/${pathway}/${subcategory}/${treatment.id}`;
  
  // Build price specification if available
  const priceSpec = treatment.booking?.price ? {
    "@type": "PriceSpecification",
    "price": treatment.booking.price,
    "priceCurrency": "GBP",
    "valueAddedTaxIncluded": true
  } : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": treatment.title + (treatment.highlight ? ` ${treatment.highlight}` : '') + (treatment.titleSuffix ? ` ${treatment.titleSuffix}` : ''),
    "description": treatment.seo?.description || treatment.description || '',
    "url": treatmentUrl,
    "provider": {
      "@type": "MedicalBusiness",
      "@id": "https://www.ulanda.co.uk/#medicalbusiness"
    },
    "areaServed": {
      "@type": "City",
      "name": "Ware, Hertfordshire"
    },
    "serviceType": `${pathway.charAt(0).toUpperCase() + pathway.slice(1)} Treatment`,
    ...(priceSpec && { "offers": priceSpec }),
    ...(treatment.booking?.duration && {
      "termsOfService": `Treatment duration: approximately ${treatment.booking.duration} minutes`
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * Breadcrumb Schema for navigation
 * @param {Array} items - Array of breadcrumb items with name and url
 */
export const BreadcrumbSchema = ({ items }) => {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.ulanda.co.uk${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default { LocalBusinessSchema, ArticleSchema, ServiceSchema, BreadcrumbSchema };

/**
 * FAQ Schema for frequently asked questions sections
 * @param {Array} faqs - Array of FAQ items with question and answer
 */
export const FAQSchema = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
