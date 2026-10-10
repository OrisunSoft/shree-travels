import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => {
    setIsOpen(false);
    setDropdownOpen({});
  };
  
  const toggleDropdown = (name) => {
    setDropdownOpen(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light glass-nav shadow-sm sticky-top">
      <style>{`
        /* Premium Frosted Glass Effect */
        .glass-nav {
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 119, 0, 0.1);
        }

        /* Desktop Mega Menu Dropdown */
        .navbar-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          z-index: 1000;
          animation: fadeSlideUp 0.3s ease-out forwards;
        }
        
        .navbar-dropdown.show { 
          display: block; 
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translate(-50%, 15px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        
        .dropdown-header {
          font-weight: 800;
          color: #ff7700;
          font-size: 0.85rem;
          text-transform: uppercase;
          padding: 0 0 0.5rem 0;
          margin-bottom: 0.5rem;
          letter-spacing: 0.5px;
          border-bottom: 2px solid #fff5ec;
        }
        
        .navbar-dropdown .dropdown-item {
          padding: 0.4rem 0.5rem;
          color: #475569;
          text-decoration: none;
          display: block;
          transition: all 0.2s ease;
          border-radius: 0.25rem;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .navbar-dropdown .dropdown-item:hover {
          background-color: #fff5ec;
          color: #ff7700;
          padding-left: 0.85rem;
        }
        
        .nav-item-with-dropdown { position: relative; }
        .nav-link-dropdown {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          cursor: pointer;
        }
        
        .dropdown-toggle-icon {
          font-size: 0.7rem;
          transition: transform 0.3s ease;
        }
        .dropdown-toggle-icon.open { transform: rotate(180deg); }

        /* Custom Nav Link Sizing to prevent text wrapping */
        .nav-link-custom {
          font-size: 0.9rem;
          white-space: nowrap;
        }

        /* Desktop Specific Mega Menu Styles — Centered in Viewport */
        @media (min-width: 992px) {
          .glass-nav > .container-xl {
            position: relative;
          }
          .nav-item-with-dropdown {
            position: static;
          }
          .navbar-dropdown {
            width: min(880px, calc(100vw - 32px));
            max-width: calc(100vw - 32px);
            max-height: calc(100vh - 90px);
            overflow-y: auto;
            left: 50%;
            right: auto;
            transform: translate(-50%, 0);
            padding: 1.35rem 1.5rem;
          }
          .mega-menu-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        /* Mobile Specific UI Styles & Scrolling Fix */
        @media (max-width: 991px) {
          /* FIX: Makes the mobile menu scrollable independently of the page */
          .navbar-collapse {
            max-height: calc(100vh - 80px); /* Accounts for navbar header height */
            overflow-y: auto;
            overflow-x: hidden;
            padding-bottom: 1.5rem; /* Extra space at bottom for scrolling comfort */
            -webkit-overflow-scrolling: touch;
          }

          .navbar-dropdown {
            position: static;
            width: 100%;
            margin-top: 0.8rem;
            margin-bottom: 0.8rem;
            padding: 1.2rem;
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 0.75rem;
            box-shadow: 0 8px 20px rgba(0,0,0,0.06);
            animation: none;
            transform: none;
          }
          .mega-menu-grid {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .navbar-dropdown .dropdown-item { padding: 0.5rem 0 0.5rem 0.5rem; }
          .dropdown-header { padding-left: 0; border-bottom: 2px solid #fff5ec; }
          
          .collapse.show {
            animation: slideDown 0.3s ease-out;
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }

        /* Social Pill (Mobile Only) */
        .mobile-social-pill {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: #ffffff;
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.03);
        }
        .social-link i { transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .social-link:active i { transform: scale(1.3); }
        .insta-gradient {
          background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Hamburger Button */
        .custom-toggler {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.03);
          border-radius: 50%;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }
        .custom-toggler:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(255, 119, 0, 0.2);
        }
      `}</style>
      
      <div className="container-xl align-items-center py-1 py-lg-0">
        
        {/* DESKTOP LOGO - Hidden on Mobile */}
        <Link className="navbar-brand d-none d-lg-flex align-items-center me-3" to="/" onClick={closeNavbar}>
          <img src="/img/Logo/shree.png" alt="Shree Travels Logo" style={{ maxHeight: '70px' }} />
        </Link>

        {/* MOBILE HEADER - Logo, Socials & Hamburger (Hidden on Desktop) */}
        <div className="d-flex justify-content-between align-items-center w-100 d-lg-none">
          <Link className="navbar-brand m-0" to="/" onClick={closeNavbar}>
            <img src="/img/Logo/shree.png" alt="Shree Travels Logo" style={{ maxHeight: '60px' }} />
          </Link>
          
          <div className="d-flex align-items-center gap-2">
            <div className="mobile-social-pill">
              {/* Updated Facebook Link */}
              <a href="https://www.facebook.com/people/Amruta-travels/100063648079773/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-facebook fs-5" style={{ color: '#1877F2' }}></i>
              </a>
              {/* Updated Instagram Link */}
              <a href="https://www.instagram.com/shreetravelspune10/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram fs-5 insta-gradient"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter fs-5" style={{ color: '#1DA1F2' }}></i>
              </a>
            </div>
            
            <button 
              className="custom-toggler" 
              type="button" 
              onClick={toggleNavbar}
              aria-expanded={isOpen} 
              aria-label="Toggle navigation"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} fs-5`} style={{ color: '#ff7700' }}></i>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold align-items-lg-center mt-3 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link px-2 px-lg-2 nav-link-custom" to="/" onClick={closeNavbar}>Home</NavLink>
            </li>
            
            {/* Mega Vehicles & Rates Dropdown */}
            <li className="nav-item-with-dropdown nav-item">
              <span 
                className="nav-link px-2 px-lg-2 nav-link-custom nav-link-dropdown"
                onClick={() => toggleDropdown('vehicles')}
                role="button"
                aria-expanded={dropdownOpen.vehicles}
              >
                Vehicles & Rates
                <span className={`dropdown-toggle-icon ${dropdownOpen.vehicles ? 'open' : ''} d-inline-flex align-items-center`}>
                  <FaChevronDown size={10} />
                </span>
              </span>
              
              {/* HORIZONTAL MEGA MENU */}
              <div className={`navbar-dropdown ${dropdownOpen.vehicles ? 'show' : ''}`}>
                <div className="mega-menu-grid">
                  
                  {/* Column 1: Mini Bus & Standard Bus */}
                  <div className="mega-menu-col">
                    <h6 className="dropdown-header">Mini Bus on Rent (₹22–38/km)</h6>
                    <Link to="/rent/pune/mini-bus" className="dropdown-item" onClick={closeNavbar}>Mini Bus in Pune</Link>
                    <Link to="/rent/mumbai/mini-bus" className="dropdown-item" onClick={closeNavbar}>Mini Bus in Mumbai</Link>
                    <Link to="/rent/shirdi/mini-bus" className="dropdown-item" onClick={closeNavbar}>Mini Bus for Shirdi</Link>
                    <Link to="/rent/lonavala/mini-bus" className="dropdown-item" onClick={closeNavbar}>Mini Bus for Lonavala</Link>
                    <Link to="/rent/nashik/mini-bus" className="dropdown-item" onClick={closeNavbar}>Mini Bus for Nashik</Link>
                    
                    <h6 className="dropdown-header mt-3">Bus on Rent (30–50 Seater)</h6>
                    <Link to="/rent/pune/bus" className="dropdown-item" onClick={closeNavbar}>Bus Rental in Pune</Link>
                    <Link to="/rent/mumbai/bus" className="dropdown-item" onClick={closeNavbar}>Bus Rental in Mumbai</Link>
                    <Link to="/rent/shirdi/bus" className="dropdown-item" onClick={closeNavbar}>Bus for Shirdi</Link>
                    <Link to="/rent/lonavala/bus" className="dropdown-item" onClick={closeNavbar}>Bus for Lonavala</Link>
                    <Link to="/rent/nashik/bus" className="dropdown-item" onClick={closeNavbar}>Bus for Nashik</Link>

                    <h6 className="dropdown-header mt-3">Volvo Bus (@ ₹80–90/km)</h6>
                    <Link to="/rent/pune/volvo-bus" className="dropdown-item" onClick={closeNavbar}>Volvo Bus in Pune</Link>
                    <Link to="/rent/mumbai/volvo-bus" className="dropdown-item" onClick={closeNavbar}>Volvo Bus in Mumbai</Link>
                    <Link to="/rent/nashik/volvo-bus" className="dropdown-item" onClick={closeNavbar}>Volvo Bus in Nashik & Shirdi</Link>
                  </div>

                  {/* Column 2: Tempo Traveller, Urbania & Tata Winger */}
                  <div className="mega-menu-col">
                    <h6 className="dropdown-header">Tempo Traveller (₹22–28/km)</h6>
                    <Link to="/rent/pune/tempo-traveller" className="dropdown-item" onClick={closeNavbar}>Traveller in Pune</Link>
                    <Link to="/rent/mumbai/tempo-traveller" className="dropdown-item" onClick={closeNavbar}>Traveller in Mumbai</Link>
                    <Link to="/rent/shirdi/tempo-traveller" className="dropdown-item" onClick={closeNavbar}>Traveller for Shirdi</Link>
                    <Link to="/rent/lonavala/tempo-traveller" className="dropdown-item" onClick={closeNavbar}>Traveller for Lonavala</Link>
                    <Link to="/rent/nashik/tempo-traveller" className="dropdown-item" onClick={closeNavbar}>Traveller for Nashik</Link>
                    
                    <h6 className="dropdown-header mt-3">Force Urbania (@ ₹32/km)</h6>
                    <Link to="/rent/pune/force-urbania" className="dropdown-item" onClick={closeNavbar}>Urbania in Pune</Link>
                    <Link to="/rent/mumbai/force-urbania" className="dropdown-item" onClick={closeNavbar}>Urbania in Mumbai</Link>
                    <Link to="/rent/shirdi/force-urbania" className="dropdown-item" onClick={closeNavbar}>Urbania for Shirdi</Link>
                    <Link to="/rent/lonavala/force-urbania" className="dropdown-item" onClick={closeNavbar}>Urbania for Lonavala</Link>
                    <Link to="/rent/nashik/force-urbania" className="dropdown-item" onClick={closeNavbar}>Urbania for Nashik</Link>

                    <h6 className="dropdown-header mt-3">Tata Winger (@ ₹20–25/km)</h6>
                    <Link to="/rent/pune/tata-winger" className="dropdown-item" onClick={closeNavbar}>Tata Winger in Pune</Link>
                    <Link to="/rent/mumbai/tata-winger" className="dropdown-item" onClick={closeNavbar}>Tata Winger in Mumbai</Link>
                    <Link to="/rent/lonavala/tata-winger" className="dropdown-item" onClick={closeNavbar}>Tata Winger in Lonavala & Shirdi</Link>
                  </div>

                  {/* Column 3: Outstation Tour Packages & Pricing */}
                  <div className="mega-menu-col bg-light rounded-4 p-3 border">
                    <h6 className="dropdown-header mb-2">Popular Tour Packages</h6>
                    <Link to="/packages" className="dropdown-item bg-white shadow-sm mb-2 fw-bold" style={{ color: '#ff7700' }} onClick={closeNavbar}>
                      <i className="fas fa-tag me-2"></i>All Vehicle Tariff & Packages
                    </Link>
                    <Link to="/pune-to-mahabaleshwar-bus-hire" className="dropdown-item" onClick={closeNavbar}>Pune to Mahabaleshwar</Link>
                    <Link to="/pune-to-lonavala-bus-hire" className="dropdown-item" onClick={closeNavbar}>Pune to Lonavala</Link>
                    <Link to="/pune-to-goa-bus-hire" className="dropdown-item" onClick={closeNavbar}>Pune to Goa Tour</Link>
                    <Link to="/pune-to-konkan-darshan" className="dropdown-item" onClick={closeNavbar}>Pune to Konkan Darshan</Link>
                    <Link to="/pune-to-mumbai-darshan" className="dropdown-item" onClick={closeNavbar}>Pune to Mumbai Darshan</Link>
                    <Link to="/ashtavinayak-darshan-bus-hire-pune" className="dropdown-item" onClick={closeNavbar}>Ashtavinayak Darshan</Link>
                    <Link to="/bhimashankar-5-jyotirlinga-darshan-pune" className="dropdown-item" onClick={closeNavbar}>Bhimashankar & 5 Jyotirlinga</Link>
                    <Link to="/sade-teen-shakti-peeth-darshan-pune" className="dropdown-item" onClick={closeNavbar}>Sade Teen Shakti Peeth</Link>
                  </div>

                </div>
              </div>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link px-2 px-lg-2 nav-link-custom" to="/about-us" onClick={closeNavbar}>About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-2 px-lg-2 nav-link-custom" to="/service" onClick={closeNavbar}>Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-2 px-lg-2 nav-link-custom" to="/our-fleet" onClick={closeNavbar}>Our Fleet</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-2 px-lg-2 nav-link-custom" to="/packages" onClick={closeNavbar}>Packages</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-2 px-lg-2 nav-link-custom" to="/our-network" onClick={closeNavbar}>Network</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-2 px-lg-2 nav-link-custom" to="/gallery" onClick={closeNavbar}>Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-2 px-lg-2 nav-link-custom" to="/blog" onClick={closeNavbar}>Blogs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-2 px-lg-2 nav-link-custom" to="/contact" onClick={closeNavbar}>Contact</NavLink>
            </li>
          </ul>
          
          <Link 
            to="/book-taxi" 
            className="btn text-white ms-lg-2 px-3 py-1 fw-bold rounded-pill shadow-sm mt-3 mt-lg-0 w-100 text-center d-lg-inline-block" 
            style={{ backgroundColor: '#ff7700', borderColor: '#ff7700', transition: 'all 0.3s', whiteSpace: 'nowrap', width: 'auto' }} 
            onClick={closeNavbar}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;