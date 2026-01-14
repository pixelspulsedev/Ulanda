import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let title = "Oops!";
  let message = "Sorry, an unexpected error has occurred.";

  if (error?.status === 404) {
    title = "404 - Page Not Found";
    message = "The page you are looking for does not exist.";
  }

  return (
    <div className="min-h-screen bg-base-100 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">{title}</h1>
          <p className="text-lg text-base-content/80 mb-2">{message}</p>
          
          {error?.statusText && (
            <p className="text-sm text-base-content/60 italic mb-8">
              <i>{error.statusText || error.message}</i>
            </p>
          )}

          <Link to="/" className="btn btn-primary text-white mt-4">
            Return Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
