import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStoredConsent, updateConsent } from '../lib/analytics';

/**
 * Lightweight UK-compliant cookie consent banner.
 * Default state on first visit: analytics + marketing DENIED until the
 * visitor explicitly accepts. Choice persisted in localStorage.
 */
export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const existing = getStoredConsent();
    if (!existing) setVisible(true);
    const onReopen = () => setVisible(true);
    window.addEventListener('ulanda:open-consent', onReopen);
    return () => window.removeEventListener('ulanda:open-consent', onReopen);
  }, []);

  const apply = (choice) => {
    updateConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 inset-x-0 z-[9999] p-4 md:p-6 bg-base-100/95 backdrop-blur border-t border-primary/10 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex-1 text-sm text-base-content/80 font-light leading-relaxed">
          <p>
            We use essential cookies to make this site work and, with your
            permission, analytics and marketing cookies to understand how
            visitors engage with ULANDA content and to improve our campaigns.
            Read our{' '}
            <Link to="/privacy-policy" className="text-primary underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>

          {showDetails && (
            <div className="mt-3 grid sm:grid-cols-2 gap-3 text-xs">
              <label className="flex items-start gap-2 cursor-not-allowed opacity-70">
                <input type="checkbox" checked readOnly className="mt-0.5" />
                <span>
                  <strong className="block">Essential</strong>
                  Required for the site to function. Always on.
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <span>
                  <strong className="block">Analytics</strong>
                  Google Analytics 4 — helps us understand which content builds trust.
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
                <span>
                  <strong className="block">Marketing</strong>
                  Meta Pixel + Google Ads — used to measure campaigns and retargeting.
                </span>
              </label>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 lg:justify-end shrink-0">
          <button
            type="button"
            onClick={() => setShowDetails((s) => !s)}
            className="btn btn-ghost btn-sm"
          >
            {showDetails ? 'Hide options' : 'Preferences'}
          </button>
          <button
            type="button"
            onClick={() => apply({ analytics: false, marketing: false })}
            className="btn btn-outline btn-sm"
          >
            Reject non-essential
          </button>
          {showDetails ? (
            <button
              type="button"
              onClick={() => apply({ analytics, marketing })}
              className="btn btn-primary btn-sm text-white"
            >
              Save preferences
            </button>
          ) : (
            <button
              type="button"
              onClick={() => apply({ analytics: true, marketing: true })}
              className="btn btn-primary btn-sm text-white"
            >
              Accept all
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
