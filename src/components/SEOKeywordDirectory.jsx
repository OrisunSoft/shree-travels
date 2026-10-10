import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBus,
  FaSearchLocation,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaLayerGroup,
  FaShuttleVan,
  FaRoute
} from 'react-icons/fa';

export const MULTI_CITY_LOCAL_SEO_GROUPS = [
  {
    category: "Bus On Rent (Mumbai • Shirdi • Nashik • Lonavala)",
    badge: "From ₹28/km",
    links: [
      { label: "Bus On Rent in Mumbai", path: "/rent/mumbai/bus" },
      { label: "Bus On Rent in Shirdi", path: "/rent/shirdi/bus" },
      { label: "Bus On Rent in Nashik", path: "/rent/nashik/bus" },
      { label: "Bus On Rent in Lonavala", path: "/rent/lonavala/bus" },
      { label: "Bus On Rent in Pune", path: "/bus-on-rent-in-pune" }
    ]
  },
  {
    category: "Force Urbania On Rent (Luxury AC)",
    badge: "Flat ₹32/km",
    links: [
      { label: "Urbania On Rent in Mumbai", path: "/rent/mumbai/force-urbania" },
      { label: "Urbania On Rent in Shirdi", path: "/rent/shirdi/force-urbania" },
      { label: "Urbania On Rent in Nashik", path: "/rent/nashik/force-urbania" },
      { label: "Urbania On Rent in Lonavala", path: "/rent/lonavala/force-urbania" },
      { label: "Urbania On Rent in Pune", path: "/urbania-on-rent-in-pune" }
    ]
  },
  {
    category: "Tempo Traveller On Rent (13–26 Seater)",
    badge: "From ₹22/km",
    links: [
      { label: "Tempo Traveller On Rent in Mumbai", path: "/rent/mumbai/tempo-traveller" },
      { label: "Tempo Traveller On Rent in Shirdi", path: "/rent/shirdi/tempo-traveller" },
      { label: "Tempo Traveller On Rent in Nashik", path: "/rent/nashik/tempo-traveller" },
      { label: "Tempo Traveller On Rent in Lonavala", path: "/rent/lonavala/tempo-traveller" },
      { label: "Tempo Traveller On Rent in Pune", path: "/tempo-traveller-on-rent-in-pune" }
    ]
  },
  {
    category: "Mini Bus On Rent (13–25 Seater)",
    badge: "AC & Non-AC",
    links: [
      { label: "Mini Bus On Rent in Mumbai", path: "/rent/mumbai/mini-bus" },
      { label: "Mini Bus On Rent in Shirdi", path: "/rent/shirdi/mini-bus" },
      { label: "Mini Bus On Rent in Nashik", path: "/rent/nashik/mini-bus" },
      { label: "Mini Bus On Rent in Lonavala", path: "/rent/lonavala/mini-bus" },
      { label: "Mini Bus On Rent in Pune", path: "/mini-bus-on-rent-in-pune" }
    ]
  }
];

export const FOOTER_KEYWORD_COLUMNS = [
  // Column 1 (Core Pune Urbania, Tempo Traveller & Seater Keywords)
  [
    { label: "Urbania On Rent in Pune", path: "/urbania-on-rent-in-pune" },
    { label: "13 Seater Urbania on Rent in Pune", path: "/13-seater-urbania-on-rent-pune" },
    { label: "17 Seater Urbania on Rent in Pune", path: "/17-seater-urbania-on-rent-pune" },
    { label: "Force Urbania On Rent in Pune", path: "/force-urbania-on-rent-in-pune" },
    { label: "Urbania Hire in Pune", path: "/urbania-hire-in-pune" },
    { label: "Luxury Force Urbania On Rent in Pune", path: "/luxury-force-urbania-on-rent-in-pune" },
    { label: "Force Urbania Luxury Mini Bus On Rent", path: "/force-urbania-luxury-mini-bus-on-rent" },
    { label: "Tempo Traveller On Rent in Pune", path: "/tempo-traveller-on-rent-in-pune" },
    { label: "13 Seater Tempo Traveller On Rent in Pune", path: "/13-seater-tempo-traveller-on-rent-in-pune" },
    { label: "17 Seater Tempo Traveller On Rent in Pune", path: "/17-seater-tempo-traveller-on-rent-in-pune" },
    { label: "25 Seater Tempo Traveller on Rent in Pune", path: "/25-seater-tempo-traveller-on-rent-in-pune" },
    { label: "26 Seater Tempo Traveller On Rent in Pune", path: "/26-seater-tempo-traveller-on-rent-in-pune" },
    { label: "Luxury Tempo Traveller On Rent in Pune", path: "/luxury-tempo-traveller-on-rent-in-pune" },
    { label: "Tempo Traveller Hire in Pune", path: "/tempo-traveller-hire-in-pune" },
    { label: "Tempo Traveller On Rent Pune", path: "/tempo-traveller-on-rent-pune" },
    { label: "13 Seater Tempo Traveller on Rent", path: "/13-seater-tempo-traveller-on-rent" },
    { label: "17 Seater Tempo Traveller on Rent", path: "/17-seater-tempo-traveller-on-rent" },
    { label: "26 Seater Tempo Traveller On Rent", path: "/26-seater-tempo-traveller-on-rent" },
    { label: "Pune to Mahabaleshwar Tempo Traveller", path: "/pune-to-mahabaleshwar-tempo-traveller" },
    { label: "Pune to Outstation Tempo Traveller", path: "/pune-to-outstation-tempo-traveller" },
    { label: "Pune to Shirdi Tempo Traveller", path: "/pune-to-shirdi-tempo-traveller" },
    { label: "Tempo Traveller on Rent in Pimpri Chinchwad", path: "/tempo-traveller-on-rent-in-pimpri-chinchwad" },
    { label: "Force Urbania On Rent for Ashtavinayak Darshan", path: "/force-urbania-on-rent-for-ashtavinayak-darshan" },
    { label: "Pune to Mahabaleshwar Urbania On Rent", path: "/pune-to-mahabaleshwar-urbania-on-rent" },
    { label: "Pune to Mumbai Urbania on Rent", path: "/pune-to-mumbai-urbania-on-rent" },
    { label: "Pune to Ujjain Urbania on Rent", path: "/pune-to-ujjain-urbania-on-rent" },
    { label: "Tata Winger On Rent in Pune", path: "/tata-winger-on-rent-in-pune" },
    { label: "Pune to Mumbai Cab", path: "/pune-to-mumbai-cab" },
    { label: "Pune Airport Cab", path: "/pune-airport-cab" },
    { label: "Outstation Cab Service Pune", path: "/outstation-cab-service-pune" },
    { label: "Car Rental in Pune", path: "/car-rental-in-pune" }
  ],

  // Column 2 (Bus Capacities, Local Pune Areas, Corporate & Weddings)
  [
    { label: "Bus On Rent in Pune", path: "/bus-on-rent-in-pune" },
    { label: "Mini Bus On Rent in Pune", path: "/mini-bus-on-rent-in-pune" },
    { label: "Mini Bus On Rent Pune", path: "/mini-bus-on-rent-pune" },
    { label: "17 Seater Bus on Rent Pune", path: "/17-seater-bus-on-rent-pune" },
    { label: "20 Seater Bus On Rent in Pune", path: "/20-seater-bus-on-rent-in-pune-city" },
    { label: "25 Seater Bus On Rent in Pune", path: "/25-seater-bus-on-rent-in-pune" },
    { label: "30 Seater Bus On Rent in Pune", path: "/30-seater-bus-on-rent-in-pune" },
    { label: "32 Seater Bus On Rent in Pune", path: "/32-seater-bus-on-rent-in-pune" },
    { label: "32 Seater Bus Rent in Pune", path: "/32-seater-bus-rent-in-pune" },
    { label: "35 Seater Bus On Rent in Pune", path: "/35-seater-bus-on-rent-in-pune" },
    { label: "35 Seater Bus Rent in Pune", path: "/35-seater-bus-rent-in-pune" },
    { label: "40 Seater bus on rent in pune", path: "/40-seater-bus-on-rent-in-pune" },
    { label: "45 Seater Bus Rent in Pune", path: "/45-seater-bus-rent-in-pune" },
    { label: "50 Seater Bus On Rent in Pune", path: "/50-seater-bus-on-rent-in-pune" },
    { label: "50 Seater Bus Rent in Pune", path: "/50-seater-bus-rent-in-pune" },
    { label: "14 17 20 25 Seater Bus on in Pune", path: "/14-17-20-25-seater-bus-on-in-pune" },
    { label: "32,35,40,45,50 Seater Bus on Rent in Pune", path: "/32-35-40-45-50-seater-bus-on-rent-in-pune" },
    { label: "Volvo Bus On Rent in Pune", path: "/volvo-bus-on-rent-in-pune" },
    { label: "Volvo Bus Hire in Pune", path: "/volvo-bus-hire-in-pune" },
    { label: "Luxury Bus Rental in Pune", path: "/luxury-bus-rental-in-pune" },
    { label: "Non Ac Bus Rental Service in Pune", path: "/non-ac-bus-rental-service-in-pune" },
    { label: "Pune Local Bus on Rent", path: "/pune-local-bus-on-rent" },
    { label: "Bus On Rent in Kharadi Pune", path: "/bus-on-rent-in-kharadi-pune" },
    { label: "Bus on Rent in Hinjewadi", path: "/bus-on-rent-in-hinjewadi" },
    { label: "Bus On Rent in Pimpri Chinchwad", path: "/bus-on-rent-in-pimpri-chinchwad" },
    { label: "Bus Hire in Pimpri Chinchwad", path: "/bus-hire-in-pimpri-chinchwad" },
    { label: "Bus on Rent in Hadapsar", path: "/bus-on-rent-in-hadapsar" },
    { label: "Bus Hire Near me Pune", path: "/bus-hire-near-me-pune" },
    { label: "Bus Hire in Pune", path: "/bus-hire-in-pune" },
    { label: "Pune Bus Hire", path: "/pune-bus-hire" },
    { label: "Pune Bus Hire Rental Service", path: "/pune-bus-hire-rental-service" }
  ],

  // Column 3 (Multi-City Mumbai/Shirdi/Nashik/Lonavala + Tours, Weddings & Corporate)
  [
    { label: "Bus on Rent in Mumbai", path: "/rent/mumbai/bus" },
    { label: "Bus on Rent in Shirdi", path: "/rent/shirdi/bus" },
    { label: "Bus on Rent in Nashik", path: "/rent/nashik/bus" },
    { label: "Bus on Rent in Lonavala", path: "/rent/lonavala/bus" },
    { label: "Urbania On Rent in Mumbai", path: "/urbania-on-rent-in-mumbai" },
    { label: "Urbania on Rent in Shirdi", path: "/urbania-on-rent-in-shirdi" },
    { label: "Force Urbania on Rent in Nashik", path: "/force-urbania-on-rent-in-nashik" },
    { label: "Urbania Rent in Lonavala", path: "/urbania-rent-in-lonavala" },
    { label: "Tempo Traveller on Rent in Mumbai", path: "/rent/mumbai/tempo-traveller" },
    { label: "Tempo Traveller on Rent in Shirdi", path: "/rent/shirdi/tempo-traveller" },
    { label: "Tempo Traveller on Rent in Nashik", path: "/rent/nashik/tempo-traveller" },
    { label: "Tempo Traveller on Rent in Lonavala", path: "/tempo-traveller-on-rent-in-lonavala" },
    { label: "Mini Bus on Rent in Mumbai", path: "/rent/mumbai/mini-bus" },
    { label: "Mini Bus on Rent in Shirdi", path: "/rent/shirdi/mini-bus" },
    { label: "Mini Bus on Rent in Nashik", path: "/rent/nashik/mini-bus" },
    { label: "Mini Bus on Rent in Lonavala", path: "/mini-bus-on-rent-in-lonavala" },
    { label: "Bus Hire For Wedding in Pune", path: "/bus-hire-for-wedding-in-pune" },
    { label: "Bus booking for wedding in Pune", path: "/bus-booking-for-wedding-in-pune" },
    { label: "Bus Booking for Marriage function in Pune", path: "/bus-booking-for-marriage-function-in-pune" },
    { label: "Buses For Corporate Events in Pune", path: "/buses-for-corporate-events-in-pune" },
    { label: "Bus Rental for Corporate Events", path: "/bus-rental-for-corporate-events" },
    { label: "Bus Service for Corporate Pune", path: "/bus-service-for-corporate-pune" },
    { label: "Corporate Travels in Pune", path: "/corporate-travels-in-pune" },
    { label: "Monthly Bus Hire Service in Pune", path: "/monthly-bus-hire-service-in-pune" },
    { label: "Bus Hire for School Trips in Pune", path: "/bus-hire-for-school-trips-in-pune" },
    { label: "Bus Rentals For School Trips in Pune", path: "/bus-rentals-for-school-trips-in-pune" },
    { label: "Purandar Airport Bus Hire Services Pune", path: "/purandar-airport-bus-hire-services-pune" },
    { label: "Pune to 5 Jyotirlinga Darshan Bus Hire", path: "/pune-to-5-jyotirlinga-darshan-bus-hire" },
    { label: "Pune to Ashtavinayak Bus Hire", path: "/bus-hire-for-pune-to-ashtavinayak" },
    { label: "Pune Sade Teen Shakti Peeth Bus on Rent", path: "/pune-sade-teen-shakti-peeth-bus-on-rent" },
    { label: "Explore All India Bus Hire Services From Pune", path: "/explore-all-india-bus-hire-services-from-pune" }
  ]
];

const CATEGORY_TABS = [
  { id: 'all', label: 'All Popular Searches (93)', icon: <FaLayerGroup className="me-1" /> },
  { id: 'col-0', label: 'Urbania, Tempo Traveller & Cabs', icon: <FaShuttleVan className="me-1" /> },
  { id: 'col-1', label: '17–50 Seater Buses & Pune Hubs', icon: <FaBus className="me-1" /> },
  { id: 'col-2', label: 'Multi-City, Weddings & Corporate', icon: <FaRoute className="me-1" /> }
];

const SEOKeywordDirectory = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId !== 'all') {
      setIsExpanded(true);
    }
  };

  return (
    <section className="seo-keyword-directory text-white mt-4">
      {/* 1. Sleek Multi-City Localized Fleet Hub Cards */}
      <div className="seo-hub-header d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3 pb-2">
        <div className="d-flex align-items-center gap-2">
          <span className="seo-hub-icon-badge">
            <FaMapMarkerAlt />
          </span>
          <div>
            <h6 className="text-uppercase fw-bold mb-0" style={{ letterSpacing: '0.6px', fontSize: '0.82rem', color: '#ff9933' }}>
              Multi-City Regional Fleet Hubs
            </h6>
            <span className="text-secondary" style={{ fontSize: '0.74rem' }}>
              Direct Dispatch Across Pune • Mumbai • Shirdi • Nashik • Lonavala
            </span>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-2">
          <span className="seo-rate-pill">
            Force Urbania <strong>@ ₹32/km</strong>
          </span>
          <span className="seo-rate-pill">
            Tempo Traveller <strong>@ ₹22/km</strong>
          </span>
        </div>
      </div>

      <div className="row g-2 mb-4">
        {MULTI_CITY_LOCAL_SEO_GROUPS.map((group, gIdx) => (
          <div className="col-lg-3 col-sm-6" key={gIdx}>
            <div className="seo-city-card h-100">
              <div className="d-flex align-items-center justify-content-between mb-2 pb-1 border-bottom border-secondary border-opacity-25">
                <span className="fw-bold" style={{ color: '#f8fafc', fontSize: '0.78rem' }}>
                  {group.category}
                </span>
                <span className="seo-mini-badge">{group.badge}</span>
              </div>
              <div className="d-flex flex-wrap gap-1">
                {group.links.map((lk, lIdx) => (
                  <Link
                    key={lIdx}
                    to={lk.path}
                    className="seo-city-chip"
                  >
                    <span className="seo-chip-dot" aria-hidden="true" />
                    {lk.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Interactive Tabbed & Expandable Keyword Tag Cloud (100% Links Always in DOM for SEO) */}
      <div className="seo-cloud-panel">
        <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-2 mb-3">
          <div className="d-flex align-items-center gap-2">
            <span className="seo-hub-icon-badge">
              <FaSearchLocation />
            </span>
            <div>
              <h6 className="text-uppercase fw-bold mb-0 text-white" style={{ letterSpacing: '0.5px', fontSize: '0.8rem' }}>
                Quick-Access Fleet &amp; Route Directory
              </h6>
              <span className="text-secondary" style={{ fontSize: '0.73rem' }}>
                Click any vehicle capacity or route tag to view dedicated rates &amp; photos
              </span>
            </div>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="seo-filter-tabs d-flex flex-wrap gap-1" role="tablist" aria-label="SEO Keyword Categories">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`seo-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Keyword Tag Cloud Container (All 93 links remain in the DOM at all times for search engines) */}
        <div className={`seo-tag-cloud-viewport ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}>
          {FOOTER_KEYWORD_COLUMNS.map((col, colIndex) => {
            const isTabVisible = activeTab === 'all' || activeTab === `col-${colIndex}`;
            return (
              <div
                key={colIndex}
                className={`seo-tag-group ${isTabVisible ? 'd-flex' : 'seo-tab-hidden'}`}
              >
                {col.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    to={item.path}
                    className="seo-keyword-chip"
                  >
                    <span className="seo-chip-dot" aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            );
          })}
        </div>

        {/* Sleek Expand / Collapse Toggle Bar */}
        <div className="text-center mt-2 pt-1">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="seo-expand-btn"
          >
            {isExpanded ? (
              <>
                <span>Show Compact Directory View</span>
                <FaChevronUp size={11} className="ms-2" />
              </>
            ) : (
              <>
                <span>Explore All 93+ Vehicle Capacities &amp; Outstation Routes</span>
                <FaChevronDown size={11} className="ms-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SEOKeywordDirectory;

