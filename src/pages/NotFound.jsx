import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import KeywordLandingPage, { KEYWORD_PAGES_DATA } from './KeywordLandingPage';
import { FaBus, FaCar, FaPhoneAlt, FaWhatsapp, FaHome, FaMapMarkedAlt } from 'react-icons/fa';

const NotFound = () => {
  const location = useLocation();
  const rawPath = (location.pathname || '').replace(/^\/+/, '').replace(/\/+$/, '').toLowerCase();

  // 1. If path matches any known keyword landing page, render it directly
  if (KEYWORD_PAGES_DATA && KEYWORD_PAGES_DATA[rawPath]) {
    return <KeywordLandingPage keywordKey={rawPath} />;
  }

  // 2. Fallback smart matched navigation
  return (
    <>
      <SEO 
        title="Page Not Found | Shree Travels Pune" 
        description="The page you requested could not be found. Explore our Force Urbania, Tempo Traveller, Bus Rental, and Tour Packages." 
        noindex={true} 
      />
      <div className="container py-5 text-center">
        <div className="py-4 max-w-75 mx-auto">
          <span className="badge rounded-pill px-3 py-2 fw-bold text-white mb-3" style={{ backgroundColor: '#ff7700' }}>
            404 NOT FOUND • SMART ROUTE ASSISTANT
          </span>
          <h1 className="h2 fw-bold mb-3">Looking for Vehicle Rentals from Pune?</h1>
          <p className="text-muted mb-4 lead fs-6">
            The specific link you followed may have moved or been updated. You can easily book or explore all our verified fleet categories below:
          </p>

          <div className="row g-3 justify-content-center text-start mb-5">
            <div className="col-12 col-sm-6 col-md-3">
              <Link to="/urbania-on-rent-in-pune" className="card h-100 text-decoration-none shadow-sm border-0 p-3 hover-lift">
                <div className="d-flex align-items-center mb-2">
                  <FaBus className="text-primary me-2 fs-4" style={{ color: '#ff7700' }} />
                  <h6 className="fw-bold mb-0 text-dark">Force Urbania</h6>
                </div>
                <small className="text-muted">10, 13 &amp; 17 Seater Luxury Van @ flat ₹32/km</small>
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <Link to="/tempo-traveller-on-rent-in-pune" className="card h-100 text-decoration-none shadow-sm border-0 p-3 hover-lift">
                <div className="d-flex align-items-center mb-2">
                  <FaCar className="text-success me-2 fs-4" />
                  <h6 className="fw-bold mb-0 text-dark">Tempo Traveller</h6>
                </div>
                <small className="text-muted">13, 17, 20 &amp; 26 Seater AC/Non-AC from ₹22/km</small>
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <Link to="/bus-on-rent-in-pune" className="card h-100 text-decoration-none shadow-sm border-0 p-3 hover-lift">
                <div className="d-flex align-items-center mb-2">
                  <FaBus className="text-warning me-2 fs-4" />
                  <h6 className="fw-bold mb-0 text-dark">Bus Rental</h6>
                </div>
                <small className="text-muted">32, 35, 45 &amp; 50 Seater Pushback Coaches</small>
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <Link to="/packages" className="card h-100 text-decoration-none shadow-sm border-0 p-3 hover-lift">
                <div className="d-flex align-items-center mb-2">
                  <FaMapMarkedAlt className="text-info me-2 fs-4" />
                  <h6 className="fw-bold mb-0 text-dark">Tour Packages</h6>
                </div>
                <small className="text-muted">Mahabaleshwar, Shirdi, Ashtavinayak &amp; Goa</small>
              </Link>
            </div>
          </div>

          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
            <Link to="/" className="btn btn-outline-dark px-4 py-2 rounded-pill fw-bold">
              <FaHome className="me-2" /> Back to Home
            </Link>
            <a 
              href="https://wa.me/917875774499?text=Hello%20Shree%20Travels,%20I%20am%20looking%20for%20vehicle%20rental%20information." 
              className="btn btn-success px-4 py-2 rounded-pill fw-bold"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="me-2" /> Chat on WhatsApp
            </a>
            <a href="tel:+917620411277" className="btn text-white px-4 py-2 rounded-pill fw-bold" style={{ backgroundColor: '#ff7700' }}>
              <FaPhoneAlt className="me-2" /> Call 24/7 Desk
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;