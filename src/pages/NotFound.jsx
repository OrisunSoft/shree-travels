import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist." 
        noindex={true} 
      />
      <div className="container py-5 text-center d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <h1 className="display-1 fw-bold text-muted mb-0">404</h1>
        <h2 className="h3 mb-4">Page Not Found</h2>
        <p className="text-muted mb-4 max-w-50 mx-auto">
          The link you clicked may be broken or the page may have been removed. Let's get you back on the road.
        </p>
        <Link to="/" className="btn btn-lg text-white fw-bold" style={{ backgroundColor: '#ff7700' }}>
          Return to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;