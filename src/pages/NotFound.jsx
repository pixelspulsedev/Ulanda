import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found | Ulanda</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="hero min-h-[70vh] bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-9xl font-sans text-primary opacity-20">404</h1>
            <h2 className="text-4xl font-sans text-base-content - relative z-10">
              Page Not Found
            </h2>
            <p className="py-6 text-lg font-sans font-light text-base-content/80">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="btn btn-primary text-white px-8">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
