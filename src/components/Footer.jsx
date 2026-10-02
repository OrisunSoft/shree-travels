import React from 'react';
import { Link } from 'react-router-dom';
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
              <a href="https://www.instagram.com/amrutatravel.in/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-heading mb-4 fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about-us" className="footer-link">About Us</Link></li>
              <li className="mb-2"><Link to="/service" className="footer-link">Services</Link></li>
              <li className="mb-2"><Link to="/our-fleet" className="footer-link">Our Fleet</Link></li>
              <li className="mb-2"><Link to="/packages" className="footer-link">Packages</Link></li>
              <li className="mb-2"><Link to="/gallery" className="footer-link">Gallery</Link></li>
              <li className="mb-2"><Link to="/blog" className="footer-link">Travel Blogs</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="footer-heading mb-4 fw-bold">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/faqs" className="footer-link">FAQs</Link></li>
              <li className="mb-2"><Link to="/terms-and-conditions" className="footer-link">Terms &amp; Conditions</Link></li>
              <li className="mb-2"><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li className="mb-2"><Link to="/careers" className="footer-link">Careers</Link></li>
              <li className="mb-2"><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-4 fw-bold">Get In Touch</h5>
            <ul className="list-unstyled contact-info">
              <li className="mb-3 d-flex align-items-start contact-item">
                <i className="fas fa-phone-alt mt-1 me-3 contact-icon"></i>
                <div>
                  <a href="tel:+917620411277" className="d-block contact-link fw-semibold">+91 7620411277</a>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start contact-item">
                <i className="fas fa-envelope mt-1 me-3 contact-icon"></i>
                <a href="mailto:shreetravelspune5@gmail.com" className="contact-link">
                  shreetravelspune5@gmail.com
                </a>
              </li>
              <li className="d-flex align-items-start contact-item">
                <i className="fas fa-map-marker-alt mt-1 me-3 contact-icon"></i>
                <span>Dodke Palazzo, Kothrud, Pune</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <hr className="footer-divider mt-5 mb-4" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <small className="copyright-text">&copy; {new Date().getFullYear()} Shree Travels. All Rights Reserved.</small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <small className="copyright-text">Premium Travel & Urbania Rentals</small>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="row mt-3">
          <div className="col-12 text-center">
            <small className="copyright-text">
              Developed by{' '}
              <a
                href="https://www.linkedin.com/in/atharv-jagtap-b9a526374/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-inline"
              >
                Atharv Jagtap
              </a>
              {' '}&amp;{' '}
              <a
                href="https://www.linkedin.com/in/dishank-dattatray-69174329b/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-inline"
              >
                Dishank
              </a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;