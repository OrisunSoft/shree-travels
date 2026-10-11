import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const dropdownRef = useRef(null);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => {
    setIsOpen(false);
    setDropdownOpen({});
  };
  
  const toggleDropdown = (name) => {
    setDropdownOpen(prev => {
      const next = {
        ...prev,
        [name]: !prev[name]
      };
      if (name === 'vehicles' && dropdownRef.current) {
        dropdownRef.current.scrollLeft = 0;
        dropdownRef.current.scrollTop = 0;
      }
      return next;
    });
  };

  useEffect(() => {
    if (dropdownOpen.vehicles && dropdownRef.current) {
      dropdownRef.current.scrollLeft = 0;
      dropdownRef.current.scrollTop = 0;
    }
  }, [dropdownOpen.vehicles]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light glass-nav shadow-sm sticky-top">
      <style>{`
        /* Premium Frosted Glass Effect */
        .glass-nav {
          background: rgba(255, 255, 255, 0.96) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 119, 0, 0.12);
        }

        /* Desktop Mega Menu Dropdown */
        .navbar-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          background-color: #ffffff;
          border: 1px solid rgba(255, 119, 0, 0.18);
          border-radius: 1rem;
          box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.05);
          z-index: 1050;
          overflow: hidden;
        }
        
        .navbar-dropdown.show { 
          display: block; 
          animation: menuPopIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes menuPopIn {
          from {
            opacity: 0;
            transform: translate(-50%, 8px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        
        .dropdown-header {
          font-weight: 800;
          color: #ff7700;
          font-size: 0.79rem;
          text-transform: uppercase;
          padding: 0 0 0.35rem 0;
          margin-bottom: 0.35rem;
          letter-spacing: 0.4px;
          border-bottom: 2px solid #fff5ec;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .navbar-dropdown .dropdown-item {
          padding: 0.28rem 0.5rem;
          color: #475569;
          text-decoration: none;
          display: block;
          transition: all 0.15s ease;
          border-radius: 0.35rem;
          font-size: 0.83rem;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.35;
        }
        
        .navbar-dropdown .dropdown-item:hover {
          background-color: #fff7ed;
          color: #ea580c;
          padding-left: 0.7rem;
        }
        
        .nav-item-with-dropdown { position: relative; }
        .nav-link-dropdown {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          cursor: pointer;
        }
        
        .dropdown-toggle-icon {
          font-size: 0.7rem;
          transition: transform 0.3s ease;
        }
        .dropdown-toggle-icon.open { transform: rotate(180deg); }

        /* Desktop Navigation Styling - Responsive across 992px to 1440px+ */
        @media (min-width: 992px) {
          .glass-nav {
            position: sticky;
          }
          .glass-nav > .container-xl {
            position: relative !important;
          }
          .collapse.navbar-collapse {
            position: static !important;
          }
          .navbar-nav {
            position: static !important;
          }
          .nav-item-with-dropdown {
            position: static !important;
          }
          .navbar-dropdown {
            left: 50% !important;
            right: auto !important;
            transform: translate(-50%, 0) !important;
            width: min(920px, calc(100vw - 32px)) !important;
            max-width: 920px !important;
            margin: 0 !important;
            max-height: none !important;
            overflow: hidden !important;
            overflow-x: hidden !important;
            overflow-y: visible !important;
            padding: 1.25rem 1.6rem !important;
            box-sizing: border-box !important;
          }
          .mega-menu-grid {
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 1.4rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .mega-menu-col {
            min-width: 0 !important;
            overflow: hidden !important;
            box-sizing: border-box !important;
          }
          .nav-link-custom {
            font-size: clamp(0.82rem, 0.88vw, 0.92rem);
            padding-left: clamp(0.35rem, 0.5vw, 0.7rem) !important;
            padding-right: clamp(0.35rem, 0.5vw, 0.7rem) !important;
            white-space: nowrap;
            font-weight: 600;
            color: #334155 !important;
            transition: color 0.2s ease;
          }
          .nav-link-custom:hover, .nav-link-custom.active {
            color: #ff7700 !important;
          }
          .desktop-whatsapp-icon-btn {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          .desktop-whatsapp-icon-btn:hover {
            transform: scale(1.08);
            box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4) !important;
          }
        }

        /* Mobile Specific UI Styles & Scrolling */
        @media (max-width: 991px) {
          .navbar-collapse {
            max-height: calc(100vh - 78px);
            overflow-y: auto;
            overflow-x: hidden;
            padding: 0.75rem 0.5rem 2rem 0.5rem;
            -webkit-overflow-scrolling: touch;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 12px 30px rgba(0,0,0,0.08);
            margin-top: 0.65rem;
            border: 1px solid #e2e8f0;
          }

          .mobile-nav-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem 1rem;
            font-size: 0.95rem;
            font-weight: 600;
            color: #1e293b;
            text-decoration: none;
            border-bottom: 1px solid #f1f5f9;
            border-radius: 8px;
            transition: all 0.2s ease;
          }
          .mobile-nav-link:hover, .mobile-nav-link:active, .mobile-nav-link.active {
            background-color: #fff7ed;
            color: #ff7700 !important;
          }

          .mobile-submenu-box {
            background-color: #f8fafc;
            border-radius: 10px;
            padding: 0.4rem;
            margin: 0.35rem 0.5rem 0.65rem 0.5rem;
            border: 1px solid #e2e8f0;
          }

          .mobile-submenu-item {
            display: flex;
            align-items: center;
            padding: 0.55rem 0.75rem;
            font-size: 0.88rem;
            color: #475569;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            transition: all 0.15s ease;
          }
          .mobile-submenu-item:hover, .mobile-submenu-item:active {
            background-color: #ffffff;
            color: #ff7700;
            padding-left: 1rem;
          }
          
          .collapse.show {
            animation: slideDown 0.25s ease-out;
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }

        /* Social Pill (Mobile Header) */
        .mobile-social-pill {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: #ffffff;
          padding: 0.35rem 0.65rem;
          border-radius: 50px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
        }
        @media (max-width: 420px) {
          .mobile-social-pill {
            gap: 0.45rem;
            padding: 0.25rem 0.5rem;
          }
        }
        .social-link i { transition: transform 0.2s ease; }
        .social-link:active i { transform: scale(1.2); }
        .insta-gradient {
          background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Header WhatsApp Button (Only WhatsApp Logo, NO text) */
        .header-whatsapp-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #25D366;
          color: #ffffff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.35);
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }
        .header-whatsapp-icon-btn:hover {
          transform: scale(1.08);
          background-color: #20ba59;
          color: #ffffff;
        }
        .header-whatsapp-icon-btn:active {
          transform: scale(0.96);
        }

        /* Hamburger Button */
        .custom-toggler {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .custom-toggler:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(255, 119, 0, 0.2);
        }
      `}</style>
      
      <div className="container-xl align-items-center py-1 py-lg-0">
        
        {/* DESKTOP LOGO - Hidden on Mobile */}
        <Link className="navbar-brand d-none d-lg-flex align-items-center me-3" to="/" onClick={closeNavbar}>
          <img src="/img/Logo/shree.png" alt="Shree Travels Logo" style={{ maxHeight: '68px' }} />
        </Link>

        {/* MOBILE HEADER - Logo, Socials, WhatsApp Enquiry Logo & Hamburger */}
        <div className="d-flex justify-content-between align-items-center w-100 d-lg-none">
          <Link className="navbar-brand m-0" to="/" onClick={closeNavbar}>
            <img src="/img/Logo/shree.png" alt="Shree Travels Logo" style={{ maxHeight: '52px' }} />
          </Link>
          
          <div className="d-flex align-items-center gap-1 gap-sm-2">
            {/* Social Icons Pill (FB, Instagram, Google) */}
            <div className="mobile-social-pill d-flex">
              <a href="https://www.facebook.com/profile.php?id=100063648079773" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook fs-6" style={{ color: '#1877F2' }}></i>
              </a>
              <a href="https://www.instagram.com/shreetravelspune10/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram fs-6 insta-gradient"></i>
              </a>
              <a href="https://share.google/p6WieDC55DgKtuLN6" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Google Business">
                <i className="fab fa-google fs-6" style={{ color: '#EA4335' }}></i>
              </a>
            </div>

            {/* WhatsApp Enquiry Button - ONLY WhatsApp logo, NO text */}
            <button 
              type="button" 
              className="header-whatsapp-icon-btn open-enquiry-popup-btn"
              data-mode="enquiry"
              aria-label="Instant Trip Enquiry"
              title="Instant Trip Enquiry"
            >
              <i className="fab fa-whatsapp fs-5"></i>
            </button>
            
            {/* Hamburger Toggle Button */}
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

        {/* Navigation Links (Responsive Desktop & Mobile) */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          
          {/* ============================================================== */}
          {/* DESKTOP NAVIGATION BAR (>= 992px) */}
          {/* ============================================================== */}
          <ul className="navbar-nav ms-auto fw-semibold align-items-lg-center mt-3 mt-lg-0 d-none d-lg-flex">
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/" onClick={closeNavbar}>Home</NavLink>
            </li>
            
            {/* Mega Vehicles & Rates Dropdown */}
            <li className="nav-item-with-dropdown nav-item">
              <span 
                className="nav-link nav-link-custom nav-link-dropdown"
                onClick={() => toggleDropdown('vehicles')}
                role="button"
                aria-expanded={dropdownOpen.vehicles}
              >
                Vehicles &amp; Rates
                <span className={`dropdown-toggle-icon ${dropdownOpen.vehicles ? 'open' : ''} d-inline-flex align-items-center`}>
                  <FaChevronDown size={10} />
                </span>
              </span>
              
              {/* HORIZONTAL MEGA MENU */}
              <div ref={dropdownRef} className={`navbar-dropdown ${dropdownOpen.vehicles ? 'show' : ''}`}>
                <div className="mega-menu-grid">
                  
                  {/* Column 1: Mini Bus, Standard Bus & Volvo Bus */}
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

                    <h6 className="dropdown-header mt-3">Volvo Bus (₹80–90/km)</h6>
                    <Link to="/rent/pune/volvo-bus" className="dropdown-item" onClick={closeNavbar}>Volvo Bus in Pune</Link>
                    <Link to="/rent/mumbai/volvo-bus" className="dropdown-item" onClick={closeNavbar}>Volvo Bus in Mumbai</Link>
                    <Link to="/rent/nashik/volvo-bus" className="dropdown-item" onClick={closeNavbar}>Volvo Bus in Nashik &amp; Shirdi</Link>
                  </div>

                  {/* Column 2: Force Urbania, Tempo Traveller & Tata Winger */}
                  <div className="mega-menu-col">
                    <h6 className="dropdown-header">Force Urbania (₹32/km)</h6>
                    <Link to="/rent/pune/force-urbania" className="dropdown-item" onClick={closeNavbar}>Urbania in Pune</Link>
                    <Link to="/rent/mumbai/force-urbania" className="dropdown-item" onClick={closeNavbar}>Urbania in Mumbai</Link>
                    <Link to="/rent/shirdi/force-urbania" className="dropdown-item" onClick={closeNavbar}>Urbania for Shirdi</Link>
                    <Link to="/rent/lonavala/force-urbania" className="dropdown-item" onClick={closeNavbar}>Urbania for Lonavala</Link>
                    <Link to="/rent/nashik/force-urbania" className="dropdown-item" onClick={closeNavbar}>Urbania for Nashik</Link>

                    <h6 className="dropdown-header mt-3">Tempo Traveller (₹22–28/km)</h6>
                    <Link to="/rent/pune/tempo-traveller" className="dropdown-item" onClick={closeNavbar}>Traveller in Pune</Link>
                    <Link to="/rent/mumbai/tempo-traveller" className="dropdown-item" onClick={closeNavbar}>Traveller in Mumbai</Link>
                    <Link to="/rent/shirdi/tempo-traveller" className="dropdown-item" onClick={closeNavbar}>Traveller for Shirdi</Link>
                    <Link to="/rent/lonavala/tempo-traveller" className="dropdown-item" onClick={closeNavbar}>Traveller for Lonavala</Link>
                    <Link to="/rent/nashik/tempo-traveller" className="dropdown-item" onClick={closeNavbar}>Traveller for Nashik</Link>

                    <h6 className="dropdown-header mt-3">Tata Winger (₹20–25/km)</h6>
                    <Link to="/rent/pune/tata-winger" className="dropdown-item" onClick={closeNavbar}>Tata Winger in Pune</Link>
                    <Link to="/rent/mumbai/tata-winger" className="dropdown-item" onClick={closeNavbar}>Tata Winger in Mumbai</Link>
                    <Link to="/rent/lonavala/tata-winger" className="dropdown-item" onClick={closeNavbar}>Tata Winger in Lonavala &amp; Shirdi</Link>
                  </div>

                  {/* Column 3: Outstation Tour Packages & Pricing */}
                  <div className="mega-menu-col bg-light rounded-4 p-3 border d-flex flex-column justify-content-between">
                    <div>
                      <h6 className="dropdown-header mb-2">Popular Tour Packages</h6>
                      <Link to="/packages" className="dropdown-item bg-white shadow-sm mb-2 fw-bold border" style={{ color: '#ff7700' }} onClick={closeNavbar}>
                        <i className="fas fa-tag me-2 text-warning"></i>All Vehicle Tariff &amp; Packages
                      </Link>
                      <Link to="/pune-to-mahabaleshwar-bus-hire" className="dropdown-item" onClick={closeNavbar}>Pune to Mahabaleshwar</Link>
                      <Link to="/pune-to-lonavala-bus-hire" className="dropdown-item" onClick={closeNavbar}>Pune to Lonavala</Link>
                      <Link to="/pune-to-goa-bus-hire" className="dropdown-item" onClick={closeNavbar}>Pune to Goa Tour</Link>
                      <Link to="/pune-to-konkan-darshan" className="dropdown-item" onClick={closeNavbar}>Pune to Konkan Darshan</Link>
                      <Link to="/pune-to-mumbai-darshan" className="dropdown-item" onClick={closeNavbar}>Pune to Mumbai Darshan</Link>
                      <Link to="/ashtavinayak-darshan-bus-hire-pune" className="dropdown-item" onClick={closeNavbar}>Ashtavinayak Darshan</Link>
                      <Link to="/bhimashankar-5-jyotirlinga-darshan-pune" className="dropdown-item" onClick={closeNavbar}>Bhimashankar &amp; 5 Jyotirlinga</Link>
                      <Link to="/sade-teen-shakti-peeth-darshan-pune" className="dropdown-item" onClick={closeNavbar}>Sade Teen Shakti Peeth</Link>
                    </div>

                    <div className="mt-2 p-2 rounded-3 text-center bg-white border shadow-sm">
                      <div className="small fw-bold text-dark d-flex align-items-center justify-content-center gap-1">
                        <i className="fas fa-shield-alt text-success"></i> Verified Fleet &amp; Clean AC
                      </div>
                      <div className="text-muted" style={{ fontSize: '0.72rem' }}>Pune &amp; Mumbai Headquarters • 24/7 Helpline</div>
                    </div>
                  </div>

                </div>
              </div>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/packages" onClick={closeNavbar}>Packages</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/service" onClick={closeNavbar}>Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/our-fleet" onClick={closeNavbar}>Our Fleet</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/our-network" onClick={closeNavbar}>Network</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/gallery" onClick={closeNavbar}>Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/blog" onClick={closeNavbar}>Blogs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/about-us" onClick={closeNavbar}>About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/contact" onClick={closeNavbar}>Contact</NavLink>
            </li>

            {/* Desktop WhatsApp Enquiry Button - ONLY WhatsApp Logo, NO text */}
            <li className="nav-item ms-lg-1">
              <button 
                type="button" 
                className="header-whatsapp-icon-btn desktop-whatsapp-icon-btn open-enquiry-popup-btn" 
                data-mode="enquiry"
                aria-label="Instant Trip Enquiry"
                title="Instant Trip Enquiry"
              >
                <i className="fab fa-whatsapp fs-5"></i>
              </button>
            </li>
          </ul>

          {/* ============================================================== */}
          {/* MOBILE NAVIGATION MENU (< 992px) - Clean, Proper Mobile Options */}
          {/* ============================================================== */}
          <div className="d-lg-none w-100">
            <div className="d-flex flex-column gap-1">
              
              {/* 1. Home */}
              <div className="mobile-nav-item">
                <NavLink className="mobile-nav-link" to="/" onClick={closeNavbar}>
                  <span><i className="fas fa-home me-2 text-warning"></i> Home</span>
                  <i className="fas fa-chevron-right text-muted small"></i>
                </NavLink>
              </div>

              {/* 2. Vehicles & Rates (Accordion) - Full Keyword Directory for Mobile */}
              <div className="mobile-nav-item">
                <div 
                  className="mobile-nav-link mobile-dropdown-header"
                  onClick={() => toggleDropdown('mobileVehicles')}
                  role="button"
                >
                  <span><i className="fas fa-bus-alt me-2 text-warning"></i> Vehicles &amp; Rates</span>
                  <span className={`dropdown-toggle-icon ${dropdownOpen.mobileVehicles ? 'open' : ''}`}>
                    <FaChevronDown size={11} />
                  </span>
                </div>
                
                {dropdownOpen.mobileVehicles && (
                  <div className="mobile-submenu-box">
                    {/* View All Tariff Card Link */}
                    <Link to="/packages" className="mobile-submenu-item fw-bold shadow-sm mb-2" style={{ backgroundColor: '#fff5ec', color: '#ff7700' }} onClick={closeNavbar}>
                      <i className="fas fa-tag me-2"></i> All Vehicle Tariff &amp; Packages
                    </Link>

                    {/* Force Urbania */}
                    <div className="px-2 pt-2 pb-1 small fw-bold text-uppercase border-bottom" style={{ color: '#ff7700', fontSize: '0.78rem', letterSpacing: '0.5px' }}>
                      <i className="fas fa-shuttle-van me-1 text-primary"></i> Force Urbania (Starting at ₹32/km)
                    </div>
                    <Link to="/rent/pune/force-urbania" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Urbania in Pune</Link>
                    <Link to="/rent/mumbai/force-urbania" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Urbania in Mumbai</Link>
                    <Link to="/rent/shirdi/force-urbania" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Urbania for Shirdi</Link>
                    <Link to="/rent/lonavala/force-urbania" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Urbania for Lonavala</Link>
                    <Link to="/rent/nashik/force-urbania" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Urbania for Nashik</Link>

                    {/* Tempo Traveller */}
                    <div className="px-2 pt-3 pb-1 small fw-bold text-uppercase border-bottom" style={{ color: '#ff7700', fontSize: '0.78rem', letterSpacing: '0.5px' }}>
                      <i className="fas fa-van-shuttle me-1 text-success"></i> Tempo Traveller (Starting at ₹22–28/km)
                    </div>
                    <Link to="/rent/pune/tempo-traveller" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Traveller in Pune</Link>
                    <Link to="/rent/mumbai/tempo-traveller" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Traveller in Mumbai</Link>
                    <Link to="/rent/shirdi/tempo-traveller" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Traveller for Shirdi</Link>
                    <Link to="/rent/lonavala/tempo-traveller" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Traveller for Lonavala</Link>
                    <Link to="/rent/nashik/tempo-traveller" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Traveller for Nashik</Link>

                    {/* Mini Bus on Rent */}
                    <div className="px-2 pt-3 pb-1 small fw-bold text-uppercase border-bottom" style={{ color: '#ff7700', fontSize: '0.78rem', letterSpacing: '0.5px' }}>
                      <i className="fas fa-bus-alt me-1 text-warning"></i> Mini Bus on Rent (Starting at ₹22–38/km)
                    </div>
                    <Link to="/rent/pune/mini-bus" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Mini Bus in Pune</Link>
                    <Link to="/rent/mumbai/mini-bus" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Mini Bus in Mumbai</Link>
                    <Link to="/rent/shirdi/mini-bus" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Mini Bus for Shirdi</Link>
                    <Link to="/rent/lonavala/mini-bus" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Mini Bus for Lonavala</Link>
                    <Link to="/rent/nashik/mini-bus" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Mini Bus for Nashik</Link>

                    {/* Standard Bus on Rent */}
                    <div className="px-2 pt-3 pb-1 small fw-bold text-uppercase border-bottom" style={{ color: '#ff7700', fontSize: '0.78rem', letterSpacing: '0.5px' }}>
                      <i className="fas fa-bus me-1 text-danger"></i> Bus on Rent (30–50 Seater)
                    </div>
                    <Link to="/rent/pune/bus" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Bus Rental in Pune</Link>
                    <Link to="/rent/mumbai/bus" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Bus Rental in Mumbai</Link>
                    <Link to="/rent/shirdi/bus" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Bus for Shirdi</Link>
                    <Link to="/rent/lonavala/bus" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Bus for Lonavala</Link>
                    <Link to="/rent/nashik/bus" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Bus for Nashik</Link>

                    {/* Volvo & Luxury Coaches */}
                    <div className="px-2 pt-3 pb-1 small fw-bold text-uppercase border-bottom" style={{ color: '#ff7700', fontSize: '0.78rem', letterSpacing: '0.5px' }}>
                      <i className="fas fa-bus me-1 text-info"></i> Volvo Bus (Starting at ₹80–90/km)
                    </div>
                    <Link to="/rent/pune/volvo-bus" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Volvo Bus in Pune</Link>
                    <Link to="/rent/mumbai/volvo-bus" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Volvo Bus in Mumbai</Link>
                    <Link to="/rent/nashik/volvo-bus" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Volvo Bus in Nashik &amp; Shirdi</Link>

                    {/* Tata Winger */}
                    <div className="px-2 pt-3 pb-1 small fw-bold text-uppercase border-bottom" style={{ color: '#ff7700', fontSize: '0.78rem', letterSpacing: '0.5px' }}>
                      <i className="fas fa-car-side me-1 text-secondary"></i> Tata Winger (Starting at ₹20–25/km)
                    </div>
                    <Link to="/rent/pune/tata-winger" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Tata Winger in Pune</Link>
                    <Link to="/rent/mumbai/tata-winger" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Tata Winger in Mumbai</Link>
                    <Link to="/rent/lonavala/tata-winger" className="mobile-submenu-item ps-3" onClick={closeNavbar}>Tata Winger in Lonavala &amp; Shirdi</Link>
                  </div>
                )}
              </div>

              {/* 3. Tour Packages (Accordion) */}
              <div className="mobile-nav-item">
                <div 
                  className="mobile-nav-link mobile-dropdown-header"
                  onClick={() => toggleDropdown('mobileTours')}
                  role="button"
                >
                  <span><i className="fas fa-map-marked-alt me-2 text-warning"></i> Tour Packages</span>
                  <span className={`dropdown-toggle-icon ${dropdownOpen.mobileTours ? 'open' : ''}`}>
                    <FaChevronDown size={11} />
                  </span>
                </div>
                
                {dropdownOpen.mobileTours && (
                  <div className="mobile-submenu-box">
                    <Link to="/pune-to-mahabaleshwar-bus-hire" className="mobile-submenu-item" onClick={closeNavbar}>
                      <i className="fas fa-mountain me-2 text-success"></i> Pune to Mahabaleshwar
                    </Link>
                    <Link to="/pune-to-lonavala-bus-hire" className="mobile-submenu-item" onClick={closeNavbar}>
                      <i className="fas fa-cloud-sun me-2 text-primary"></i> Pune to Lonavala &amp; Khandala
                    </Link>
                    <Link to="/pune-to-goa-bus-hire" className="mobile-submenu-item" onClick={closeNavbar}>
                      <i className="fas fa-umbrella-beach me-2 text-warning"></i> Pune to Goa Beach Tour
                    </Link>
                    <Link to="/pune-to-konkan-darshan" className="mobile-submenu-item" onClick={closeNavbar}>
                      <i className="fas fa-water me-2 text-info"></i> Pune to Konkan Darshan
                    </Link>
                    <Link to="/ashtavinayak-darshan-bus-hire-pune" className="mobile-submenu-item" onClick={closeNavbar}>
                      <i className="fas fa-om me-2 text-danger"></i> Ashtavinayak Darshan (8 Temples)
                    </Link>
                    <Link to="/bhimashankar-5-jyotirlinga-darshan-pune" className="mobile-submenu-item" onClick={closeNavbar}>
                      <i className="fas fa-pray me-2 text-danger"></i> Bhimashankar &amp; 5 Jyotirlinga
                    </Link>
                    <Link to="/sade-teen-shakti-peeth-darshan-pune" className="mobile-submenu-item" onClick={closeNavbar}>
                      <i className="fas fa-place-of-worship me-2 text-danger"></i> Sade Teen Shakti Peeth
                    </Link>
                    <Link to="/pune-to-mumbai-darshan" className="mobile-submenu-item" onClick={closeNavbar}>
                      <i className="fas fa-city me-2 text-secondary"></i> Pune to Mumbai Darshan
                    </Link>
                  </div>
                )}
              </div>

              {/* 4. Packages (Tariff & Pricing) */}
              <div className="mobile-nav-item">
                <NavLink className="mobile-nav-link" to="/packages" onClick={closeNavbar}>
                  <span><i className="fas fa-tag me-2 text-warning"></i> Packages &amp; Rates</span>
                  <i className="fas fa-chevron-right text-muted small"></i>
                </NavLink>
              </div>

              {/* 5. Services */}
              <div className="mobile-nav-item">
                <NavLink className="mobile-nav-link" to="/service" onClick={closeNavbar}>
                  <span><i className="fas fa-cogs me-2 text-warning"></i> Services &amp; Cabs</span>
                  <i className="fas fa-chevron-right text-muted small"></i>
                </NavLink>
              </div>

              {/* 6. Our Fleet */}
              <div className="mobile-nav-item">
                <NavLink className="mobile-nav-link" to="/our-fleet" onClick={closeNavbar}>
                  <span><i className="fas fa-car me-2 text-warning"></i> Our Fleet</span>
                  <i className="fas fa-chevron-right text-muted small"></i>
                </NavLink>
              </div>

              {/* 7. Maharashtra Network */}
              <div className="mobile-nav-item">
                <NavLink className="mobile-nav-link" to="/our-network" onClick={closeNavbar}>
                  <span><i className="fas fa-network-wired me-2 text-warning"></i> Network</span>
                  <i className="fas fa-chevron-right text-muted small"></i>
                </NavLink>
              </div>

              {/* 8. Photo Gallery */}
              <div className="mobile-nav-item">
                <NavLink className="mobile-nav-link" to="/gallery" onClick={closeNavbar}>
                  <span><i className="fas fa-images me-2 text-warning"></i> Fleet Gallery</span>
                  <i className="fas fa-chevron-right text-muted small"></i>
                </NavLink>
              </div>

              {/* 9. Travel Blogs */}
              <div className="mobile-nav-item">
                <NavLink className="mobile-nav-link" to="/blog" onClick={closeNavbar}>
                  <span><i className="fas fa-newspaper me-2 text-warning"></i> Travel Blogs</span>
                  <i className="fas fa-chevron-right text-muted small"></i>
                </NavLink>
              </div>

              {/* 10. About Us */}
              <div className="mobile-nav-item">
                <NavLink className="mobile-nav-link" to="/about-us" onClick={closeNavbar}>
                  <span><i className="fas fa-info-circle me-2 text-warning"></i> About Us</span>
                  <i className="fas fa-chevron-right text-muted small"></i>
                </NavLink>
              </div>

              {/* 11. Contact */}
              <div className="mobile-nav-item">
                <NavLink className="mobile-nav-link" to="/contact" onClick={closeNavbar}>
                  <span><i className="fas fa-phone-alt me-2 text-warning"></i> Contact Us</span>
                  <i className="fas fa-chevron-right text-muted small"></i>
                </NavLink>
              </div>

            </div>

            {/* Quick Action Contact Bar at bottom of mobile drawer */}
            <div className="mt-3 pt-3 border-top">
              <div className="d-grid gap-2">
                <button 
                  type="button" 
                  className="btn text-white fw-bold py-2.5 rounded-pill shadow-sm d-flex align-items-center justify-content-center gap-2 open-enquiry-popup-btn" 
                  data-mode="enquiry"
                  style={{ backgroundColor: '#25D366', border: 'none' }}
                  onClick={closeNavbar}
                >
                  <i className="fab fa-whatsapp fs-5"></i>
                  <span>Quick Trip Enquiry</span>
                </button>
                <a 
                  href="tel:+917620411277" 
                  className="btn btn-outline-dark fw-bold py-2.5 rounded-pill shadow-sm d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="fas fa-phone-alt text-warning"></i>
                  <span>Call 24/7: +91 76204 11277</span>
                </a>
              </div>

              {/* Social Icons inside drawer */}
              <div className="text-center mt-3">
                <p className="small text-muted mb-2 fw-semibold">Connect with Shree Travels</p>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <a href="https://www.facebook.com/profile.php?id=100063648079773" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-light rounded-circle shadow-sm d-inline-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }} aria-label="Facebook">
                    <i className="fab fa-facebook-f text-primary fs-6"></i>
                  </a>
                  <a href="https://www.instagram.com/shreetravelspune10/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-light rounded-circle shadow-sm d-inline-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }} aria-label="Instagram">
                    <i className="fab fa-instagram insta-gradient fs-6"></i>
                  </a>
                  <a href="https://share.google/p6WieDC55DgKtuLN6" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-light rounded-circle shadow-sm d-inline-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }} aria-label="Google Business">
                    <i className="fab fa-google text-danger fs-6"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;