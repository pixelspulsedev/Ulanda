/**
 * ULANDA Authority Journal — QA Link Validation Script
 * ═══════════════════════════════════════════════════════
 * 
 * Validates:
 * 1. All journal article cross-links reference valid condition/treatment/signature slugs
 * 2. Bidirectional linking — condition/treatment/signature pages can find their journal articles
 * 3. SEO metadata completeness (title, description, canonical, image)
 * 4. Content structure integrity (non-empty sections, valid content types)
 * 5. No orphan journal articles (every article has at least one cross-link)
 * 
 * Usage: node scripts/validate-journal-links.js
 * Output: Console report + CSV file at scripts/journal-validation-report.csv
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ─── Data Imports ───────────────────────────────────────────────
import { journalArticles, getJournalsForCondition, getJournalsForTreatment, getJournalsForSignature } from '../src/data/pageContents/journal/journalArticles.js';
import { individualConditions } from '../src/data/pageContents/conditions/individualConditions.js';
import { conditions } from '../src/data/pageContents/conditions/conditions.js';
import { signaturePathways } from '../src/data/pageContents/signature/signatureData.js';
import { getAllTreatmentCategories } from '../src/data/pageContents/treatments/drafts/treatments_restructured_draft.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── Colour helpers (ANSI) ──────────────────────────────────────
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const BOLD = '\x1b[1m';
const RESET = '\x1b[0m';

// ─── Build valid slug registries ────────────────────────────────

/** Collect all known individual-condition slugs */
function getValidConditionSlugs() {
  const slugs = new Set();
  // From individualConditions array
  individualConditions.forEach(c => {
    if (c.id) slugs.add(c.id);
  });
  // From conditions (category groups) — some journal articles may reference category-level IDs
  conditions.forEach(c => {
    if (c.id) slugs.add(c.id);
    // Also collect individual conditions nested inside category.conditions
    if (c.conditions) {
      c.conditions.forEach(sub => {
        if (sub.id) slugs.add(sub.id);
      });
    }
  });
  return slugs;
}

/** Collect all known treatment slugs (from restructured draft categories) */
function getValidTreatmentSlugs() {
  const slugs = new Set();
  const categories = getAllTreatmentCategories();
  Object.entries(categories).forEach(([catKey, category]) => {
    slugs.add(catKey);
    if (category.treatments) {
      Object.keys(category.treatments).forEach(treatmentKey => {
        slugs.add(treatmentKey);
      });
    }
  });
  return slugs;
}

/** Collect all known signature pathway slugs */
function getValidSignatureSlugs() {
  const slugs = new Set();
  signaturePathways.forEach(sp => {
    if (sp.id) slugs.add(sp.id);
  });
  return slugs;
}

// ─── Validation functions ───────────────────────────────────────

const issues = [];
let passCount = 0;

function pass(msg) {
  passCount++;
  console.log(`  ${GREEN}✓${RESET} ${msg}`);
}

function warn(articleId, field, msg) {
  issues.push({ articleId, field, severity: 'WARN', message: msg });
  console.log(`  ${YELLOW}⚠${RESET} [${articleId}] ${field}: ${msg}`);
}

function fail(articleId, field, msg) {
  issues.push({ articleId, field, severity: 'FAIL', message: msg });
  console.log(`  ${RED}✗${RESET} [${articleId}] ${field}: ${msg}`);
}

function validateSEO(article) {
  const { id, seo, image, title, author, date, readTime } = article;

  if (!seo) return fail(id, 'seo', 'Missing SEO object');
  if (!seo.title) fail(id, 'seo.title', 'Missing SEO title');
  else if (seo.title.length > 70) warn(id, 'seo.title', `Title too long (${seo.title.length} chars, recommended ≤ 60)`);
  else pass(`[${id}] seo.title OK`);

  if (!seo.description) fail(id, 'seo.description', 'Missing meta description');
  else if (seo.description.length > 160) warn(id, 'seo.description', `Description too long (${seo.description.length} chars, recommended ≤ 155)`);
  else pass(`[${id}] seo.description OK`);

  if (!seo.canonical) fail(id, 'seo.canonical', 'Missing canonical URL');
  else if (!seo.canonical.startsWith('https://www.ulanda.co.uk/journal/')) fail(id, 'seo.canonical', `Canonical not under /journal/: ${seo.canonical}`);
  else pass(`[${id}] seo.canonical OK`);

  if (!image) warn(id, 'image', 'Missing hero image path');
  else pass(`[${id}] image OK`);

  if (!title) fail(id, 'title', 'Missing title');
  if (!author) warn(id, 'author', 'Missing author');
  if (!date) fail(id, 'date', 'Missing publication date');
  if (!readTime) warn(id, 'readTime', 'Missing read time');
}

function validateCrossLinks(article, conditionSlugs, treatmentSlugs, signatureSlugs) {
  const { id, relatedConditions, relatedTreatments, relatedSignatures } = article;

  // Must have at least one cross-link
  const totalLinks = (relatedConditions?.length || 0) + (relatedTreatments?.length || 0) + (relatedSignatures?.length || 0);
  if (totalLinks === 0) {
    fail(id, 'crossLinks', 'Orphan article — no relatedConditions, relatedTreatments or relatedSignatures');
    return;
  }

  // Validate condition slugs
  (relatedConditions || []).forEach(slug => {
    if (conditionSlugs.has(slug)) {
      pass(`[${id}] condition "${slug}" exists`);
    } else {
      warn(id, 'relatedConditions', `Condition slug "${slug}" not found in conditions or individualConditions data`);
    }
  });

  // Validate treatment slugs
  (relatedTreatments || []).forEach(slug => {
    if (treatmentSlugs.has(slug)) {
      pass(`[${id}] treatment "${slug}" exists`);
    } else {
      warn(id, 'relatedTreatments', `Treatment slug "${slug}" not found in treatments data`);
    }
  });

  // Validate signature slugs
  (relatedSignatures || []).forEach(slug => {
    if (signatureSlugs.has(slug)) {
      pass(`[${id}] signature "${slug}" exists`);
    } else {
      warn(id, 'relatedSignatures', `Signature slug "${slug}" not found in signaturePathways data`);
    }
  });
}

function validateBidirectional(article) {
  const { id, relatedConditions, relatedTreatments, relatedSignatures } = article;

  // For each linked condition, verify getJournalsForCondition returns this article
  (relatedConditions || []).forEach(slug => {
    const backlinks = getJournalsForCondition(slug);
    if (backlinks.some(j => j.id === id)) {
      pass(`[${id}] ↔ condition "${slug}" bidirectional OK`);
    } else {
      fail(id, 'bidirectional', `getJournalsForCondition("${slug}") does not return this article`);
    }
  });

  (relatedTreatments || []).forEach(slug => {
    const backlinks = getJournalsForTreatment(slug);
    if (backlinks.some(j => j.id === id)) {
      pass(`[${id}] ↔ treatment "${slug}" bidirectional OK`);
    } else {
      fail(id, 'bidirectional', `getJournalsForTreatment("${slug}") does not return this article`);
    }
  });

  (relatedSignatures || []).forEach(slug => {
    const backlinks = getJournalsForSignature(slug);
    if (backlinks.some(j => j.id === id)) {
      pass(`[${id}] ↔ signature "${slug}" bidirectional OK`);
    } else {
      fail(id, 'bidirectional', `getJournalsForSignature("${slug}") does not return this article`);
    }
  });
}

function validateContent(article) {
  const { id, content } = article;

  if (!content || !Array.isArray(content) || content.length === 0) {
    fail(id, 'content', 'Missing or empty content array');
    return;
  }

  let hasReferences = false;
  let sectionCount = 0;

  content.forEach((block, idx) => {
    if (!block.type) {
      warn(id, `content[${idx}]`, 'Content block missing type');
      return;
    }
    if (block.type === 'section') sectionCount++;
    if (block.type === 'references') hasReferences = true;
  });

  if (sectionCount < 2) warn(id, 'content', `Only ${sectionCount} section(s) — consider adding more depth`);
  else pass(`[${id}] ${sectionCount} content sections`);

  if (!hasReferences) warn(id, 'content', 'No references section — clinical articles should cite sources');
  else pass(`[${id}] has references`);
}

// ─── Image file check ───────────────────────────────────────────

function validateImageFiles(articles) {
  const imgDir = path.resolve(__dirname, '..', 'public', 'assets', 'img', 'journal');
  const dirExists = fs.existsSync(imgDir);

  if (!dirExists) {
    warn('GLOBAL', 'images', 'Journal image directory does not exist: public/assets/img/journal/');
    return;
  }

  const files = fs.readdirSync(imgDir);
  articles.forEach(article => {
    if (!article.image) return;
    const filename = path.basename(article.image);
    if (files.includes(filename)) {
      pass(`[${article.id}] image file "${filename}" found`);
    } else {
      warn(article.id, 'image', `Image file "${filename}" not found in public/assets/img/journal/`);
    }
  });
}

// ─── Sitemap check ──────────────────────────────────────────────

function validateSitemap(articles) {
  const sitemapPath = path.resolve(__dirname, '..', 'public', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    warn('GLOBAL', 'sitemap', 'sitemap.xml not found — run build first to generate');
    return;
  }

  const sitemap = fs.readFileSync(sitemapPath, 'utf-8');

  if (sitemap.includes('/journal')) {
    pass('sitemap.xml contains /journal landing URL');
  } else {
    fail('GLOBAL', 'sitemap', '/journal not found in sitemap.xml');
  }

  articles.forEach(article => {
    const url = `/journal/${article.id}`;
    if (sitemap.includes(url)) {
      pass(`[${article.id}] found in sitemap.xml`);
    } else {
      warn(article.id, 'sitemap', `${url} not found in sitemap.xml — rebuild sitemap`);
    }
  });
}

// ─── CSV Report ─────────────────────────────────────────────────

function writeCSV(issues) {
  const csvPath = path.resolve(__dirname, 'journal-validation-report.csv');
  const header = 'Severity,Article ID,Field,Message\n';
  const rows = issues.map(i =>
    `${i.severity},"${i.articleId}","${i.field}","${i.message.replace(/"/g, '""')}"`
  ).join('\n');
  fs.writeFileSync(csvPath, header + rows, 'utf-8');
  console.log(`\n${CYAN}CSV report written to: scripts/journal-validation-report.csv${RESET}`);
}

// ─── Main ───────────────────────────────────────────────────────

function main() {
  console.log(`\n${BOLD}${CYAN}═══════════════════════════════════════════════════════════${RESET}`);
  console.log(`${BOLD}${CYAN}  ULANDA Authority Journal — QA Link Validation${RESET}`);
  console.log(`${BOLD}${CYAN}═══════════════════════════════════════════════════════════${RESET}\n`);

  const published = journalArticles.filter(a => a.status === 'published');
  console.log(`${BOLD}Found ${published.length} published journal article(s)${RESET}\n`);

  if (published.length === 0) {
    console.log(`${YELLOW}No published articles to validate.${RESET}`);
    return;
  }

  // Build registries
  const conditionSlugs = getValidConditionSlugs();
  const treatmentSlugs = getValidTreatmentSlugs();
  const signatureSlugs = getValidSignatureSlugs();

  console.log(`Registry: ${conditionSlugs.size} condition slugs, ${treatmentSlugs.size} treatment slugs, ${signatureSlugs.size} signature slugs\n`);

  // ── 1. SEO Metadata ──
  console.log(`${BOLD}▸ SEO Metadata Validation${RESET}`);
  published.forEach(article => validateSEO(article));

  // ── 2. Cross-Link Slug Validation ──
  console.log(`\n${BOLD}▸ Cross-Link Slug Validation${RESET}`);
  published.forEach(article => validateCrossLinks(article, conditionSlugs, treatmentSlugs, signatureSlugs));

  // ── 3. Bidirectional Link Verification ──
  console.log(`\n${BOLD}▸ Bidirectional Link Verification${RESET}`);
  published.forEach(article => validateBidirectional(article));

  // ── 4. Content Structure ──
  console.log(`\n${BOLD}▸ Content Structure Validation${RESET}`);
  published.forEach(article => validateContent(article));

  // ── 5. Image Files ──
  console.log(`\n${BOLD}▸ Image File Validation${RESET}`);
  validateImageFiles(published);

  // ── 6. Sitemap Inclusion ──
  console.log(`\n${BOLD}▸ Sitemap Inclusion Check${RESET}`);
  validateSitemap(published);

  // ── Summary ──
  const fails = issues.filter(i => i.severity === 'FAIL');
  const warns = issues.filter(i => i.severity === 'WARN');

  console.log(`\n${BOLD}${CYAN}═══════════════════════════════════════════════════════════${RESET}`);
  console.log(`${BOLD}  Summary${RESET}`);
  console.log(`${BOLD}${CYAN}═══════════════════════════════════════════════════════════${RESET}`);
  console.log(`  ${GREEN}✓ ${passCount} passed${RESET}`);
  console.log(`  ${YELLOW}⚠ ${warns.length} warning(s)${RESET}`);
  console.log(`  ${RED}✗ ${fails.length} failure(s)${RESET}`);
  console.log();

  if (fails.length > 0) {
    console.log(`${RED}${BOLD}FAILURES:${RESET}`);
    fails.forEach(f => console.log(`  ${RED}✗${RESET} [${f.articleId}] ${f.field}: ${f.message}`));
    console.log();
  }

  if (issues.length > 0) {
    writeCSV(issues);
  } else {
    console.log(`${GREEN}${BOLD}All checks passed! No issues found.${RESET}\n`);
  }

  // Exit code for CI
  process.exit(fails.length > 0 ? 1 : 0);
}

main();
