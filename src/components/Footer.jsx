import React from 'react';
import { Link } from 'react-router-dom';
import SEOKeywordDirectory from './SEOKeywordDirectory';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          
          {/* Column 1: Brand & About */}
          <div className="col-lg-4 col-md-6">
            <Link to="/">
              <img 
                src="/img/Logo/shree.png" 
                alt="Shree Travels Logo" 
                className="mb-3 footer-logo" 
              />
            </Link>
            <p className="footer-text pe-lg-4">
              Explore luxury Urbania and premium bus rentals in Pune. Your trusted travel partner for corporate events, family trips, and outstation tours across Maharashtra.
            </p>
            <div className="d-flex gap-2 mt-3">
              <a href="https://www.facebook.com/profile.php?id=100063648079773" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/shreetravelspune10/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/917875774499?text=Hello%20Shree%20Travels%2C%20I%20want%20to%20book%20a%20vehicle%20in%20Pune." target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp +91 78757 74499">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://share.google/p6WieDC55DgKtuLN6" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Google Business Profile">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-heading mb-4 fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about-us" className="footer-link">About Us</Link></li>
              <li className="mb-2"><Link to="/service" className="footer-link">Services &amp; Tours</Link></li>
              <li className="mb-2"><Link to="/our-fleet" className="footer-link">Our Fleet</Link></li>
              <li className="mb-2"><Link to="/packages" className="footer-link">Packages &amp; Rates</Link></li>
              <li className="mb-2"><Link to="/gallery" className="footer-link">Gallery</Link></li>
              <li className="mb-2"><Link to="/blog" className="footer-link">Travel Blogs</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="footer-heading mb-4 fw-bold">Popular Tours</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/pune-to-mahabaleshwar-bus-hire" className="footer-link">Pune to Mahabaleshwar</Link></li>
              <li className="mb-2"><Link to="/pune-to-lonavala-bus-hire" className="footer-link">Pune to Lonavala</Link></li>
              <li className="mb-2"><Link to="/pune-to-goa-bus-hire" className="footer-link">Pune to Goa &amp; Konkan</Link></li>
              <li className="mb-2"><Link to="/ashtavinayak-darshan-bus-hire-pune" className="footer-link">Ashtavinayak Darshan</Link></li>
              <li className="mb-2"><Link to="/bhimashankar-5-jyotirlinga-darshan-pune" className="footer-link">5 Jyotirlinga Darshan</Link></li>
              <li className="mb-2"><Link to="/sade-teen-shakti-peeth-darshan-pune" className="footer-link">Sade Teen Shakti Peeth</Link></li>
              <li className="mb-2"><Link to="/faqs" className="footer-link">FAQs</Link> | <Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-4 fw-bold">Get In Touch (24/7)</h5>
            <ul className="list-unstyled contact-info">
              <li className="mb-3 d-flex align-items-start contact-item">
                <i className="fas fa-phone-alt mt-1 me-3 contact-icon"></i>
                <div>
                  <a href="tel:+917620411277" className="d-block contact-link fw-semibold">+91 76204 11277</a>
                  <a href="tel:+917875774499" className="d-block contact-link fw-semibold">+91 78757 74499</a>
                  <a href="tel:+919860256019" className="d-block contact-link small">+91 98602 56019</a>
                  <a href="tel:+919145411005" className="d-block contact-link small">+91 91454 11005</a>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start contact-item">
                <i className="fab fa-whatsapp mt-1 me-3 contact-icon" style={{ color: '#25D366' }}></i>
                <div>
                  <a
                    href="https://wa.me/917875774499?text=Hello%20Shree%20Travels%2C%20I%20would%20like%20a%20quote%20for%20vehicle%20rental."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link fw-semibold"
                  >
                    WhatsApp: +91 78757 74499
                  </a>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start contact-item">
                <i className="fas fa-envelope mt-1 me-3 contact-icon"></i>
                <a href="mailto:shreetravelspune5@gmail.com" className="contact-link text-break">
                  shreetravelspune5@gmail.com
                </a>
              </li>
              <li className="d-flex align-items-start contact-item">
                <i className="fas fa-map-marker-alt mt-1 me-3 contact-icon"></i>
                <span>Office no 201, Dodke Palazzo, near mahatma society, Pramathesh Housing Society, Jijai Nagar, Kothrud, Pune, Maharashtra 411038</span>
              </li>
            </ul>
          </div>
        </div>

        {/* High-Authority SEO Search Queries & Travel Directory */}
        <SEOKeywordDirectory />

        {/* Divider & All Elements in One Single Horizontal Line */}
        <hr className="footer-divider mt-4 mb-4" />
        <div className="row">
          <div className="col-12 text-center">
            <small className="copyright-text d-flex flex-wrap align-items-center justify-content-center justify-content-md-between gap-3 text-center">
              <span>&copy; {new Date().getFullYear()} Shree Travels. All Rights Reserved.</span>
              <span>Premium Travel &amp; Urbania Rentals</span>
              <span className="d-inline-flex align-items-center gap-1">
                Developed by
                <a
                  href="https://orisunsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-flex align-items-center ms-1"
                >
                  <img
                    src="/img/orisunsoft.png"
                    alt="Orisunsoft Logo"
                    className="developer-logo"
                  />
                </a>
              </span>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;