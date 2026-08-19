// Promote the pre-rendered /404 route to dist/404.html.
//
// vite-react-ssg (dirStyle: 'nested') writes the route to dist/404/index.html,
// but Vercel looks for a 404.html at the output root when no route and no
// static file matches a request. Emitting it there lets unmatched URLs return
// a genuine 404 status instead of relying on an SPA catch-all rewrite, which
// would serve the homepage with a 200 and read to Google as a soft 404.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(__dirname, '..', 'dist');

const src = path.join(dist, '404', 'index.html');
const dest = path.join(dist, '404.html');

if (!fs.existsSync(src)) {
  console.error(
    `[emit-404] Expected ${path.relative(dist, src)} to exist.\n` +
    `[emit-404] Check that '/404' is still returned by generateStaticPaths() in vite.config.js.`
  );
  process.exit(1);
}

fs.copyFileSync(src, dest);
// The nested copy would be a duplicate, indexable 404 page at /404.
fs.rmSync(path.join(dist, '404'), { recursive: true, force: true });

console.log('[emit-404] Wrote dist/404.html');
