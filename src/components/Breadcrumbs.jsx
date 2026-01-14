import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to}>
              {isLast ? (
                <span className="font-medium text-primary cursor-default">
                  {formatSegment(value)}
                </span>
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
