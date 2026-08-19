import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Breadcrumbs are built from the URL, which assumes every intermediate segment
// is itself a page. Two are not:
//   /locations - 301s to the Hertfordshire hub, so linking it costs a redirect
//                hop on every location page.
//   /tools     - no such page exists, so linking it was a 404 on every tool page.
// `null` means "render as plain text instead of a link".
const SEGMENT_PATH_OVERRIDES = {
  '/locations': '/locations/aesthetic-clinic-hertfordshire',
  '/tools': null,
};

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Helper to format the segment text (e.g., "pigmentation-and-skin-tone" -> "Pigmentation & Skin Tone")
  const formatSegment = (segment) => {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace(' And ', ' & '); // Optional: make "and" an ampersand for cleaner look
  };

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) return null;

  return (
    <div className="text-sm breadcrumbs text-base-content/70 px-4 md:px-8 py-4 max-w-7xl mx-auto">
      <ul>
        <li>
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const path = `/${pathnames.slice(0, index + 1).join('/')}`;
          const hasOverride = Object.prototype.hasOwnProperty.call(SEGMENT_PATH_OVERRIDES, path);
          const to = hasOverride ? SEGMENT_PATH_OVERRIDES[path] : path;
          const isCurrent = index === pathnames.length - 1;

          return (
            <li key={path}>
              {isCurrent ? (
                <span className="font-medium text-primary cursor-default">
                  {formatSegment(value)}
                </span>
              ) : to === null ? (
                <span className="cursor-default">{formatSegment(value)}</span>
              ) : (
                <Link to={to} className="hover:text-primary transition-colors">
                  {formatSegment(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
