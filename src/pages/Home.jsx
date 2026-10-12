import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBus,
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
  FaRoute,
  FaMapMarkerAlt,
  FaChevronRight,
  FaGoogle,
  FaStar,
  FaWhatsapp
} from 'react-icons/fa';
import SEO from '../components/SEO';
import CardSlider from '../components/CardSlider';

// Import the components you want to embed
import Gallery from './Gallery';
import OurNetwork from './OurNetwork';

// Updated to your newest Google Link
const GOOGLE_BUSINESS_PROFILE = "https://share.google/p6WieDC55DgKtuLN6";

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // 11.3 MB Hero Video streams strictly on desktop screens (>= 768px) to protect mobile speed and save mobile bandwidth
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setIsDesktop(true);
    }
  }, []);

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to book Tempo Traveller on rent in Pune with Shree Travels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book a 13, 17, 20, or 26-seater Tempo Traveller on rent in Pune by calling +91 7620411277 or WhatsApp +91 78757 74499. We offer Non-AC (₹22/km) and AC (₹25/km) 17-seater Tempo Travellers with transparent per-km billing."
        }
      },
      {
        "@type": "Question",
        "name": "What is the per km rate for Force Urbania on rent in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Force Urbania rental in Pune starts at ₹32/km for premium 10, 13, and 17-seater luxury AC vans (minimum 300 km/day), ideal for family vacations, corporate airport drops, and VIP tours."
        }
      },
      {
        "@type": "Question",
        "name": "What bus seating capacities are available for rent in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide 20, 25, 32, 35, 40, 45, and 50-seater luxury AC and Non-AC buses on rent in Pune starting from ₹28/km (20-seater) and ₹45/km (32-seater) up to ₹90/km for 45/49-seater Volvo AC coaches."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas in Pune do you provide vehicle pick-up service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide doorstep pick-up across all Pune and PCMC areas including Kothrud, Hinjewadi, Wakad, Baner, Kharadi, Hadapsar, Viman Nagar, Pune Airport, and Pimpri-Chinchwad."
        }
      }
    ]
  };

  const puneAreas = [
    { name: "Hinjewadi IT Park", path: "/vehicle-rental-hinjewadi" }, 
    { name: "Kharadi EON IT Park", path: "/vehicle-rental-kharadi" },
    { name: "Baner & Balewadi", path: "/vehicle-rental-baner" },
    { name: "Wakad & Hinjewadi Ph-2", path: "/vehicle-rental-wakad" },
    { name: "Kothrud (Head Office)", path: "/vehicle-rental-kothrud" },
    { name: "Hadapsar & Magarpatta", path: "/vehicle-rental-hadapsar" },
    { name: "Koregaon Park & Viman Nagar", path: "/vehicle-rental-koregaon-park" },
    { name: "Pimpri-Chinchwad (PCMC)", path: "/vehicle-rental-pimpri-chinchwad" },
    { name: "Pune Airport (Lohegaon)", path: "/pune-airport-cab" },
    { name: "Purandar Airport", path: "/purandar-airport-bus-hire-services-pune" },
    { name: "Pune to Mumbai Cab", path: "/pune-to-mumbai-cab" },
    { name: "Outstation Cab Pune", path: "/outstation-cab-service-pune" }
  ];

  const outstationRoutes = [
    { label: "Pune → Mahabaleshwar", path: "/pune-to-mahabaleshwar-bus-hire" },
    { label: "Pune → Lonavala Tour", path: "/pune-to-lonavala-bus-hire" },
    { label: "Pune → Goa Tour", path: "/pune-to-goa-bus-hire" },
    { label: "Pune → Konkan Darshan", path: "/pune-to-konkan-darshan" },
    { label: "Pune → Mumbai Darshan", path: "/pune-to-mumbai-darshan" },
    { label: "Ashtavinayak Darshan", path: "/ashtavinayak-darshan-bus-hire-pune" },
    { label: "Bhimashankar & 5 Jyotirlinga", path: "/bhimashankar-5-jyotirlinga-darshan-pune" },
    { label: "Sade Teen Shakti Peeth", path: "/sade-teen-shakti-peeth-darshan-pune" }
  ];

  // Generate array for 16 corporate logos
  const corporateLogos = Array.from({ length: 16 }, (_, i) => 
    `/img/corporat/Corporate Customer Logo on Website-${String(i + 1).padStart(2, '0')}.jpg`
  );

  // Cards for the Interactive Vehicles Slider
  const vehicleCards = [
    { title: "Tempo Traveller", desc: "13, 17, 20 & 26 Seater • Starting at ₹22/km", img: "/img/Keyword Based Image/Keyword Based Image-01.jpg", link: "/tempo-traveller-on-rent-in-pune", tag: "Most Popular" },
    { title: "Force Urbania", desc: "10, 13 & 17 Seater Luxury Van • Starting at ₹32/km", img: "/img/urbania/ub-1.jpeg", link: "/urbania-on-rent-in-pune", tag: "Ultra Luxury" },
    { title: "32 & 35 Seater Bus", desc: "2x2 Pushback AC & Non-AC • Starting at ₹45/km", img: "/img/Keyword Based Image/Keyword Based Image-11.jpg", link: "/32-seater-bus-on-rent-in-pune", tag: "Wedding Special" },
    { title: "Mini Bus & Tata Winger", desc: "9 to 25 Seater Mini Buses • Starting at ₹20/km", img: "/img/Keyword Based Image/Keyword Based Image-04.jpg", link: "/mini-bus-on-rent-pune", tag: "Best Value" },
    { title: "40 & 50 Seater Luxury Bus", desc: "Large Tourist & School Coach • Starting at ₹50/km", img: "/img/Keyword Based Image/Keyword Based Image-14.jpg", link: "/50-seater-bus-on-rent-in-pune", tag: "Large Group" },
    { title: "Volvo Multi-Axle Coach", desc: "45 & 49 Seater Air-Suspension • Starting at ₹80–90/km", img: "/img/Keyword Based Image/Keyword Based Image-42.jpg", link: "/volvo-bus-on-rent-in-pune", tag: "Corporate VIP" }
  ];

  const homeTourCards = [
    { title: "Pune to Mahabaleshwar", subtitle: "Pratapgad, Venna Lake & Mapro Garden", rate: "From ₹9,000", img: "/img/Keyword Based Image/Keyword Based Image-31.jpg", link: "/pune-to-mahabaleshwar-bus-hire" },
    { title: "Pune to Lonavala & Khandala", subtitle: "Bhushi Dam, Tiger Point & Karla Caves", rate: "From ₹7,200", img: "/img/Keyword Based Image/Keyword Based Image-26.jpg", link: "/pune-to-lonavala-bus-hire" },
    { title: "Pune to Konkan Darshan", subtitle: "Alibaug, Ganpatipule, Tarkarli & Malvan", rate: "Starting at ₹22/km", img: "/img/Keyword Based Image/Keyword Based Image-24.jpg", link: "/pune-to-konkan-darshan" },
    { title: "Pune to Goa Beach Tour", subtitle: "North & South Goa Coastal Package", rate: "Starting at ₹22/km", img: "/img/Keyword Based Image/Keyword Based Image-23.jpg", link: "/pune-to-goa-bus-hire" },
    { title: "Ashtavinayak Darshan", subtitle: "All 8 Swayambhu Ganpati Temples", rate: "From ₹14,400", img: "/img/Keyword Based Image/Keyword Based Image-29.jpg", link: "/ashtavinayak-darshan-bus-hire-pune" },
    { title: "Bhimashankar & 5 Jyotirlinga", subtitle: "Trimbakeshwar, Ellora, Parli & Aundha", rate: "From ₹7,200", img: "/img/Keyword Based Image/Keyword Based Image-63.jpg", link: "/bhimashankar-5-jyotirlinga-darshan-pune" },
    { title: "Sade Teen Shakti Peeth", subtitle: "Kolhapur, Tuljapur, Mahurgad & Vani", rate: "Starting at ₹22/km", img: "/img/Keyword Based Image/Keyword Based Image-25.jpg", link: "/sade-teen-shakti-peeth-darshan-pune" },
    { title: "Pune to Mumbai Darshan", subtitle: "Gateway of India, Sea Link & Siddhivinayak", rate: "From ₹9,000", img: "/img/Keyword Based Image/Keyword Based Image-27.jpg", link: "/pune-to-mumbai-darshan" },
    { title: "Pune to Sambhaji Nagar Tour", subtitle: "Ajanta & Ellora Caves, Grishneshwar & Daulatabad", rate: "Starting at ₹32/km", img: "/img/city-fleet/sambhaji-nagar.jpg", link: "/pune-to-sambhaji-nagar-tour" }
  ];

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100%' }}>
      <SEO 
        title="Shree Travels – Urbania on Rent in Pune | Tempo Traveller & Bus Rental"
        description="Shree Travels – Urbania on Rent in Pune (Starting at ₹32/km for 10, 13 & 17 Seater), Tempo Traveller on Rent in Pune (13 & 17 Seater Starting at ₹22/km), 32, 40 & 50 Seater Bus on Rent in Pune, Pune to Mumbai Cab & Pune Airport Cab."
        keywords="Urbania On Rent in Pune, 13 Seater Urbania on Rent in Pune, 17 Seater Urbania on Rent in Pune, Tempo Traveller On Rent in Pune, 13 Seater Tempo Traveller On Rent in Pune, 17 Seater Tempo Traveller On Rent in Pune, Bus On Rent in Pune, 32 Seater Bus On Rent in Pune, 40 Seater Bus On Rent in Pune, 50 Seater Bus On Rent in Pune, Pune to Mumbai Cab, Pune Airport Cab, Outstation Cab Service Pune"
        path="/"
        image="https://shreetravels.in/img/force-ub.jpg"
        schema={homeFaqSchema}
      />

      <style>
        {`
          .hero-video-container { position: relative; width: 100%; min-height: 68vh; overflow: hidden; background: radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 100%); }
          .hero-video { position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%; width: auto; height: auto; transform: translate(-50%, -50%); object-fit: cover; z-index: 0; }
          .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.58) 100%); z-index: 1; }
          .hero-content { position: relative; z-index: 2; height: 100%; }
          .text-shadow-custom { text-shadow: 0 2px 12px rgba(0, 0, 0, 0.75); }
          .btn-hover-animate { transition: all 0.25s ease; }
          .btn-hover-animate:hover { transform: translateY(-3px); }
          
          /* Corporate Logo Marquee - Structured Cards */
          .marquee-container { overflow: hidden; white-space: nowrap; width: 100%; background: #ffffff; padding: 1.5rem 0; position: relative; }
          .marquee-container::before, .marquee-container::after { content: ''; position: absolute; top: 0; width: 80px; height: 100%; z-index: 2; pointer-events: none; }
          .marquee-container::before { left: 0; background: linear-gradient(to right, white 0%, transparent 100%); }
          .marquee-container::after { right: 0; background: linear-gradient(to left, white 0%, transparent 100%); }
          .marquee-track { display: flex; width: max-content; align-items: center; animation: marquee 35s linear infinite; }
          .marquee-logo-box { display: inline-flex; flex: 0 0 auto; min-width: 165px; height: 82px; align-items: center; justify-content: center; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 0.65rem 1.25rem; margin: 0 0.75rem; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05); }
          .marquee-track img { height: 54px; width: auto; max-width: 150px !important; object-fit: contain; display: block; filter: grayscale(0%) opacity(100%); transition: filter 0.3s ease, transform 0.3s ease; cursor: pointer; }
          .marquee-track img:hover, .marquee-track img:active { filter: grayscale(100%) opacity(65%); transform: scale(0.96); }
          
          /* Uniform Grid Card Hover Effects (For Vehicles) */
          .grid-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .grid-card:hover { transform: translateY(-5px); box-shadow: 0 14px 28px rgba(15, 23, 42, 0.12) !important; }
          .grid-card-img { transition: transform 0.5s ease; height: 210px; width: 100%; object-fit: cover; }
          .grid-card:hover .grid-card-img { transform: scale(1.05); }

          /* Comfort Section Photo Album Swipe (Book-like slide) */
          .album-container { display: flex; overflow-x: auto; gap: 1.2rem; padding: 0.5rem 1rem 1.5rem 1rem; scrollbar-width: none; scroll-snap-type: x mandatory; }
          .album-container::-webkit-scrollbar { display: none; }
          .album-card { flex: 0 0 84%; scroll-snap-align: center; transition: transform 0.3s ease; }
          .comfort-card img { transition: transform 0.5s ease; height: 300px; }
          .comfort-card:hover img { transform: scale(1.05); }

          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

          .accordion-button:not(.collapsed) { background-color: #fff3e6; color: #ff7700; box-shadow: none; }
          .accordion-button:focus { box-shadow: none; }

          @media (max-width: 767.98px) {
            .hero-video-container { min-height: 65vh; }
            .hero-content { padding-top: 2rem !important; padding-bottom: 2rem !important; }
            .hero-title-responsive { font-size: 1.65rem !important; line-height: 1.3 !important; }
            .hero-badge-responsive { font-size: 0.72rem !important; padding: 0.4rem 0.8rem !important; }
            .hero-lead-responsive { font-size: 0.95rem !important; line-height: 1.5 !important; margin-bottom: 1.25rem !important; }
            .hero-cta-btn { padding: 0.65rem 1.4rem !important; font-size: 0.95rem !important; }
          }

          @media (min-width: 768px) { 
            .hero-video-container { min-height: 82vh; }
            .album-container { justify-content: center; overflow-x: hidden; gap: 1.5rem; padding: 0.5rem 0; }
            .album-card { flex: 0 0 calc(25% - 1.2rem); }
          }
        `}
      </style>

      {/* 1. Hero Section */}
      <section className="hero-video-container d-flex align-items-center">
        {isDesktop && (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto" 
            className="hero-video"
          >
            <source src="/img/video.mp4" type="video/mp4" />
          </video>
        )}

        <div className="hero-overlay"></div>

        <div className="container hero-content py-5">
          <div className="row align-items-center">
            <div className="col-lg-10 text-center text-lg-start px-3">
              <span className="badge rounded-pill px-3 py-2 mb-2 mb-md-3 fw-bold shadow-sm hero-badge-responsive" style={{ backgroundColor: '#ff7700', color: '#ffffff', fontSize: '0.82rem' }}>
                <span className="d-none d-sm-inline">★ 4.9 RATED ON GOOGLE • KOTHRUD PUNE HEAD OFFICE • 24/7 DISPATCH</span>
                <span className="d-inline d-sm-none">★ 4.9 RATED • KOTHRUD PUNE • 24/7 DISPATCH</span>
              </span>
              <h1 className="display-5 fw-bold text-white mb-2 mb-md-3 text-shadow-custom hero-title-responsive">
                <span className="d-none d-md-inline">Shree Travels – <span style={{ color: '#ff7700' }}>Urbania on Rent in Pune</span> | Tempo Traveller &amp; Bus Rental</span>
                <span className="d-inline d-md-none">Shree Travels – <span style={{ color: '#ff7700' }}>Urbania &amp; Bus</span> on Rent in Pune</span>
              </h1>
              
              {/* Desktop Lead Text */}
              <p className="lead text-light mb-4 text-shadow-custom fw-semibold hero-lead-responsive d-none d-md-block" style={{ fontSize: '1.15rem', lineHeight: '1.65', maxWidth: '820px' }}>
                Book 10, 13 &amp; 17 Seater Luxury Force Urbania (Starting at ₹32/km), 13 &amp; 17 Seater Tempo Travellers (Starting at ₹22/km), 32, 40 &amp; 50 Seater AC/Non-AC Buses, and Pune to Mumbai / Airport Cabs across Pune, Mumbai, Shirdi, Nashik &amp; Lonavala.
              </p>

              {/* Mobile-Optimized Clean Feature Highlights */}
              <div className="d-md-none mb-3">
                <div className="d-flex flex-wrap gap-2 justify-content-center mb-2">
                  <span className="badge bg-dark bg-opacity-75 text-white border border-secondary px-2 py-1 rounded-pill small">
                    <i className="fas fa-check text-warning me-1"></i>Urbania Starting at ₹32/km
                  </span>
                  <span className="badge bg-dark bg-opacity-75 text-white border border-secondary px-2 py-1 rounded-pill small">
                    <i className="fas fa-check text-warning me-1"></i>Tempo Traveller Starting at ₹22/km
                  </span>
                  <span className="badge bg-dark bg-opacity-75 text-white border border-secondary px-2 py-1 rounded-pill small">
                    <i className="fas fa-check text-warning me-1"></i>Clean AC Fleet
                  </span>
                </div>
                <div className="text-light small text-shadow-custom text-center opacity-90">
                  Doorstep dispatch across Pune, PCMC &amp; outstation tours.
                </div>
              </div>

              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-2 gap-sm-3">
                <button
                  type="button"
                  className="btn fw-bold px-4 px-md-5 py-3 text-white shadow-lg rounded-pill btn-hover-animate hero-cta-btn d-inline-flex align-items-center justify-content-center open-enquiry-popup-btn"
                  data-mode="enquiry"
                  data-vehicle="17 Seater Force Urbania (Starting at ₹32/km)"
                  data-ac="AC"
                  data-place="Pune Local / Outstation"
                  style={{ backgroundColor: '#ff7700', border: 'none' }}
                >
                  <FaWhatsapp className="me-2" size={19} />
                  <span className="d-none d-sm-inline">Quick Trip Enquiry</span>
                  <span className="d-inline d-sm-none">Trip Enquiry</span>
                </button>
                <a href="tel:+917620411277" className="btn fw-bold px-4 px-md-5 py-3 shadow-lg rounded-pill btn-hover-animate hero-cta-btn d-inline-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: 'white', border: '2px solid white', backdropFilter: 'blur(6px)' }}>
                  <FaPhoneAlt className="me-2" />
                  <span className="d-none d-sm-inline">Call: +91 76204 11277</span>
                  <span className="d-inline d-sm-none">Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted By Section */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-2">
          <div className="text-center mb-3">
            <h2 className="fw-bold h3">Trusted by <span style={{ color: '#ff7700' }}>500+ Companies</span></h2>
            <p className="text-muted mb-0">Leading organizations trust Shree Travels for all their corporate travel requirements.</p>
          </div>
        </div>
        <div className="marquee-container bg-white">
          <div className="marquee-track">
            {corporateLogos.map((src, index) => (
              <div className="marquee-logo-box" key={`logo-set1-${index}`}>
                <img src={encodeURI(src)} width="140" height="54" alt={`Corporate Client ${index + 1}`} loading="lazy" decoding="async" />
              </div>
            ))}
            {corporateLogos.map((src, index) => (
              <div className="marquee-logo-box" key={`logo-set2-${index}`} aria-hidden="true">
                <img src={encodeURI(src)} width="140" height="54" alt="" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Experience Ultimate Comfort in Force Urbania Section (Interactive Card Slider) */}
      <section className="py-5 bg-light border-bottom">
        <div className="container py-2">
          <div className="text-center mb-4">
            <span className="badge rounded-pill px-3 py-2 mb-2 fw-bold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
              FORCE URBANIA STARTING AT ₹32/KM &amp; LUXURY RECLINER CABINS
            </span>
            <h2 className="fw-bold h3">
              Experience Ultimate Comfort in <span style={{ color: '#ff7700' }}>Force Urbania &amp; Luxury Fleet</span>
            </h2>
            <p className="text-muted small mb-0 mx-auto" style={{ maxWidth: '760px' }}>
              Book 10, 13 &amp; 17 Seater Luxury Force Urbania on Rent in Pune (Starting at ₹32/km), Maharaja Tempo Travellers, and Air-Suspension Coaches with individual recliners, ambient lighting &amp; LED entertainment.
            </p>
          </div>

          <CardSlider cardsPerView={4} interval={3600}>
            {[
              { num: 1, tag: 'Starting at ₹32/km', label: '13 & 17 Seater Force Urbania Leather Recliners', link: '/17-seater-urbania-on-rent-pune' },
              { num: 2, tag: 'Starting at ₹32/km', label: 'Smart LED TV, Surround Audio & Mood Lighting', link: '/13-seater-urbania-on-rent-pune' },
              { num: 3, tag: 'Urbania Safety & Space', label: '3-Point Seatbelts & Aircraft-Style Cabin Lockers', link: '/urbania-on-rent-in-pune' },
              { num: 4, tag: 'Maharaja Luxury Fleet', label: 'Individual AC Louvers, Cupholders & USB-C Ports', link: '/luxury-tempo-traveller-on-rent-in-pune' }
            ].map((item) => (
              <Link
                to={item.link}
                key={`comfort-${item.num}`}
                className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden comfort-card position-relative text-decoration-none"
              >
                <img
                  src={`/img/Keyword Based Image/comfort-${item.num}.jpeg`}
                  alt={item.label}
                  className="w-100 object-fit-cover"
                  style={{ height: '240px' }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: 'linear-gradient(to top, rgba(15, 23, 42, 0.94), transparent)' }}>
                  <span className="text-white fw-semibold small px-3 py-1 rounded-pill d-inline-flex align-items-center mb-1" style={{ backgroundColor: '#ff7700' }}>
                    <FaCheckCircle className="me-1" /> {item.tag}
                  </span>
                  <div className="text-white small fw-bold">{item.label}</div>
                </div>
              </Link>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* 4. Our Travel & Rental Vehicles Section (Interactive Card Slider) */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold h3">Our Travel &amp; <span style={{ color: '#ff7700' }}>Rental Vehicles</span></h2>
            <p className="text-muted mb-0">Slide through our deeply-maintained fleet designed for local and outstation journeys.</p>
          </div>

          <CardSlider cardsPerView={4} interval={4000}>
            {vehicleCards.map((card, index) => (
              <div className="card h-100 rounded-4 overflow-hidden bg-white shadow-sm border position-relative grid-card d-flex flex-column" key={`vehicle-card-${index}`}>
                <div className="position-relative overflow-hidden border-bottom">
                  <img src={card.img} alt={card.title} className="w-100 grid-card-img" loading="lazy" decoding="async" />
                  {card.img.includes('Keyword Based Image') && (
                    <div className="fleet-gallery-overlay-tag">
                      <FaMapMarkerAlt className="text-warning me-1 flex-shrink-0" size={10} />
                      <span className="text-truncate">{card.title.toUpperCase()} • PUNE FLEET</span>
                    </div>
                  )}
                </div>
                <div className="card-body p-3 p-md-4 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <h3 className="h6 fw-bold mb-1 mb-md-2 text-dark">{card.title}</h3>
                    <p className="text-muted small mb-3">{card.desc}</p>
                  </div>
                  <div className="d-flex gap-2 mt-auto">
                    <Link to={card.link} className="btn btn-outline-dark flex-grow-1 fw-semibold rounded-pill py-2 d-inline-flex align-items-center justify-content-center small text-nowrap">
                      Details <FaArrowRight className="ms-1" size={11} />
                    </Link>
                    <button
                      type="button"
                      className="btn fw-bold text-white rounded-pill px-3 py-2 small open-booking-popup-btn d-inline-flex align-items-center justify-content-center gap-1 text-nowrap"
                      data-vehicle={card.title}
                      data-ac="AC"
                      data-place="Pune Local / Outstation"
                      style={{ backgroundColor: '#ff7700' }}
                    >
                      <FaWhatsapp size={14} /> Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* 4A. Dedicated Vehicle & Seater Capacity Tariff Table + SEO Pages Hub */}
      <section className="py-5 bg-light border-bottom">
        <div className="container py-3">
          <div className="text-center mb-4">
            <span className="badge rounded-pill px-3 py-2 mb-2 fw-bold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
              DEDICATED VEHICLE &amp; SEATER PAGES • OFFICIAL PER-KM TARIFF
            </span>
            <h2 className="fw-bold h3">
              Pune Vehicle Rental Rates &amp; <span style={{ color: '#ff7700' }}>Dedicated Seater Pages</span>
            </h2>
            <p className="text-muted small mb-2 mx-auto" style={{ maxWidth: '820px' }}>
              Explore dedicated pages for every vehicle and seating capacity or click <strong>Book Now</strong> on any row to open our instant vehicle booking form.
            </p>
            <div className="d-md-none small fw-semibold" style={{ color: '#ff7700' }}>
              ← Swipe table horizontally to view all rates &amp; tap Book Now →
            </div>
          </div>

          <div className="table-responsive shadow-sm rounded-4 border bg-white">
            <table className="table table-hover align-middle mb-0">
              <thead style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                <tr>
                  <th className="py-3 px-3 border-0 text-white" style={{ backgroundColor: '#0f172a' }}>Vehicle &amp; Dedicated Page</th>
                  <th className="py-3 px-2 border-0 text-white" style={{ backgroundColor: '#0f172a' }}>Per KM Rate</th>
                  <th className="py-3 px-2 border-0 text-white" style={{ backgroundColor: '#0f172a' }}>Min 300 KM / Day</th>
                  <th className="py-3 px-2 border-0 text-white" style={{ backgroundColor: '#0f172a' }}>Seating / Category</th>
                  <th className="py-3 px-2 border-0 text-white" style={{ backgroundColor: '#0f172a' }}>Driver Allowance</th>
                  <th className="py-3 px-3 border-0 text-center text-white" style={{ backgroundColor: '#0f172a' }}>Instant Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Urbania on Rent in Pune', url: '/urbania-on-rent-in-pune', cap: '10, 13 & 17 Seater Luxury AC', rate: '₹32/km (Flat)', pkg: '₹9,600 (300 km)', bata: '₹600', veh: '13 Seater Force Urbania (@ ₹32/km)', ac: 'AC' },
                  { name: '13 Seater Urbania on Rent in Pune', url: '/13-seater-urbania-on-rent-pune', cap: '13+1 Seater Luxury AC Van', rate: '₹32/km (Flat)', pkg: '₹9,600 (300 km)', bata: '₹600', veh: '13 Seater Force Urbania (@ ₹32/km)', ac: 'AC' },
                  { name: '17 Seater Urbania on Rent in Pune', url: '/17-seater-urbania-on-rent-pune', cap: '17+1 Seater Luxury AC Van', rate: '₹32/km (Flat)', pkg: '₹9,600 (300 km)', bata: '₹600', veh: '17 Seater Force Urbania (@ ₹32/km)', ac: 'AC' },
                  { name: 'Tempo Traveller on Rent in Pune', url: '/tempo-traveller-on-rent-in-pune', cap: '13, 17, 20 & 26 Seater', rate: '₹22/km (Non-AC) / ₹25/km (AC)', pkg: '₹6,600 / ₹7,500', bata: '₹400–₹500', veh: '17 Seater Tempo Traveller (₹22-₹25/km)', ac: 'AC' },
                  { name: '13 Seater Tempo Traveller on Rent in Pune', url: '/13-seater-tempo-traveller-on-rent-in-pune', cap: '13+1 Pushback Seater', rate: '₹22/km (Non-AC) / ₹25/km (AC)', pkg: '₹6,600 / ₹7,500', bata: '₹400–₹500', veh: '13 Seater Tempo Traveller (₹22-₹25/km)', ac: 'AC' },
                  { name: '17 Seater Tempo Traveller on Rent in Pune', url: '/17-seater-tempo-traveller-on-rent-in-pune', cap: '17+1 Pushback Seater', rate: '₹22/km (Non-AC) / ₹25/km (AC)', pkg: '₹6,600 / ₹7,500', bata: '₹400–₹500', veh: '17 Seater Tempo Traveller (₹22-₹25/km)', ac: 'AC' },
                  { name: '20 Seater Tempo Traveller on Rent in Pune', url: '/tempo-traveller-on-rent-in-pune', cap: '20 Seater Pushback', rate: '₹25/km (Non-AC) / ₹28/km (AC)', pkg: '₹7,500 / ₹8,400', bata: '₹400–₹500', veh: '20 Seater Tempo Traveller (₹25-₹28/km)', ac: 'AC' },
                  { name: '26 Seater Tempo Traveller on Rent in Pune', url: '/tempo-traveller-on-rent-in-pune', cap: '26 Seater Pushback', rate: '₹32/km (Non-AC) / ₹37/km (AC)', pkg: '₹9,600 / ₹11,100', bata: '₹500', veh: '26 Seater Tempo Traveller (₹32-₹37/km)', ac: 'AC' },
                  { name: 'Bus on Rent in Pune', url: '/bus-on-rent-in-pune', cap: '20, 24, 30, 32, 35, 45, 49 & 53 Seater', rate: 'From ₹28/km to ₹80/km', pkg: 'From ₹8,400', bata: '₹400–₹1,000', veh: '32 Seater Bus (@ ₹35-₹50/km)', ac: 'AC' },
                  { name: '32 Seater Bus on Rent in Pune', url: '/32-seater-bus-on-rent-in-pune', cap: '32+2 Seater 2x2 Pushback', rate: '₹35/km (Non-AC) / ₹50/km (AC)', pkg: '₹10,500 / ₹15,000', bata: '₹400–₹1,000', veh: '32 Seater Bus (@ ₹35-₹50/km)', ac: 'AC' },
                  { name: '35 Seater Bus on Rent in Pune', url: '/bus-on-rent-in-pune', cap: '35 Seater (Benz / Executive)', rate: '₹38/km (Non-AC) / ₹50/km (AC)', pkg: '₹11,400 / ₹15,000', bata: '₹400–₹1,000', veh: '35 Seater Bus', ac: 'AC' },
                  { name: '45/49 Seater Bus on Rent in Pune', url: '/40-seater-bus-on-rent-in-pune', cap: '45 & 49 Seater Pushback', rate: '₹50/km (Non-AC)', pkg: '₹15,000 (300 km)', bata: '₹800', veh: '45 Seater Bus', ac: 'Non-AC' },
                  { name: '53 Seater Volvo / Benz Premium Bus', url: '/50-seater-bus-on-rent-in-pune', cap: '53 Seater Multi-Axle Luxury', rate: '₹80/km (Special Premium)', pkg: '₹24,000 (300 km)', bata: '₹1,000', veh: '53 Seater Volvo / Benz Special Bus', ac: 'AC' },
                  { name: 'Pune to Mumbai Cab', url: '/pune-to-mumbai-cab', cap: 'Dzire, Ertiga, Crysta & Urbania', rate: 'Fixed Mumbai Packages Available', pkg: 'Drop & Round Trip', bata: 'Included / As per chart', veh: '7 Seater Toyota Innova Crysta', ac: 'AC' },
                  { name: 'Pune Airport Cab', url: '/pune-airport-cab', cap: '4, 7, 13 & 17 Seater Airport Fleet', rate: 'Fixed Airport Transfer Fares', pkg: '24/7 Pick-up & Drop', bata: 'Included', veh: '7 Seater Toyota Innova Crysta', ac: 'AC' },
                  { name: 'Outstation Cab Service Pune', url: '/outstation-cab-service-pune', cap: '4 Seater Sedan & 7 Seater SUV', rate: 'From ₹12/km – ₹20/km', pkg: 'Min 300 KM/Day', bata: '₹350–₹400', veh: '7 Seater Toyota Innova Crysta', ac: 'AC' }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-2 py-md-3 px-2 px-md-3 fw-bold">
                      <Link to={row.url} className="text-decoration-none d-inline-flex align-items-center" style={{ color: '#0f172a' }}>
                        <FaChevronRight className="me-1 flex-shrink-0" style={{ color: '#ff7700' }} size={10} />
                        <span className="text-decoration-underline">{row.name}</span>
                      </Link>
                    </td>
                    <td className="py-2 py-md-3 px-2 fw-bold" style={{ color: '#ff7700' }}>{row.rate}</td>
                    <td className="py-2 py-md-3 px-2 fw-semibold text-dark">{row.pkg}</td>
                    <td className="py-2 py-md-3 px-2 text-muted small">{row.cap}</td>
                    <td className="py-2 py-md-3 px-2 text-muted small">{row.bata}</td>
                    <td className="py-2 py-md-3 px-2 px-md-3 text-center">
                      <button
                        type="button"
                        className="btn btn-sm fw-bold text-white rounded-pill px-3 py-1 open-booking-popup-btn"
                        data-vehicle={row.veh}
                        data-ac={row.ac}
                        data-place={row.name}
                        style={{ backgroundColor: '#ff7700' }}
                      >
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Important Fare Rules & Guidelines Notice */}
          <div className="mt-4 p-3 p-md-4 rounded-4 border shadow-sm" style={{ backgroundColor: '#fffdfa', borderColor: '#ffd8a8' }}>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2 pb-2 border-bottom">
              <span className="badge rounded-pill px-3 py-2 fw-bold text-white fs-6" style={{ backgroundColor: '#dc2626' }}>
                <i className="fas fa-exclamation-triangle me-2"></i>Toll, parking &amp; border tax charges are extra at actuals
              </span>
              <span className="text-muted small fw-semibold">
                Official Fare Card Rules (04/02/2026)
              </span>
            </div>

            {/* Desktop View */}
            <div className="d-none d-md-block row g-2 pt-1 text-dark small" style={{ lineHeight: '1.7' }}>
              <div className="col-md-6">
                <ul className="list-unstyled mb-0 d-flex flex-column gap-1">
                  <li><strong>• Toll, Parking &amp; Taxes:</strong> Fastag toll, parking, passenger tax, GST and permits paid by party.</li>
                  <li><strong>• Outstation Distance:</strong> Minimum daily outstation billing is 300 km (fixed packages apply for select routes).</li>
                  <li><strong>• Force Urbania:</strong> Charged at flat <strong>₹32/km</strong> for 10, 13 &amp; 17 Seater outstation.</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled mb-0 d-flex flex-column gap-1">
                  <li><strong>• Service Hours:</strong> 6:00 AM to 12:00 midnight. Extra hours incur additional charges.</li>
                  <li><strong>• Advance Booking:</strong> 50% advance payment required 2 days before trip.</li>
                  <li><strong>• Duty Calculation:</strong> Office-to-office time &amp; KM. Driver food ₹300 local / ₹400 outstation.</li>
                </ul>
              </div>
            </div>

            {/* Mobile View - Clean & Concise */}
            <div className="d-md-none pt-2 text-dark small">
              <div className="d-flex flex-column gap-1 mb-2">
                <div><strong>• Outstation:</strong> Min 300 km/day • Fastag tolls &amp; parking extra at actuals</div>
                <div><strong>• Force Urbania:</strong> Flat <strong>₹32/km</strong> outstation rate</div>
                <div><strong>• Timings &amp; Duty:</strong> 6:00 AM to 12:00 AM • Garage-to-garage calculation</div>
              </div>
              <details className="mt-2 text-muted" style={{ cursor: 'pointer' }}>
                <summary className="fw-semibold text-primary">View complete fare rules &amp; driver charges</summary>
                <div className="pt-2 ps-2 border-start border-2 border-warning mt-1 small">
                  <div>• Driver food charges ₹300/- local &amp; ₹400/- outstation duties.</div>
                  <div>• Service hours: 6:00 AM to 12:00 midnight. Extra hours incur extra charges.</div>
                  <div>• 50% advance required 2 days prior to departure.</div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* 4B. Popular Tour Packages & Outstation Sightseeing Slider */}
      <section className="py-5 border-bottom" style={{ backgroundColor: '#fffaf5' }}>
        <div className="container py-3">
          <div className="text-center mb-4">
            <span className="badge rounded-pill px-3 py-2 mb-2 fw-bold" style={{ backgroundColor: '#ff7700', color: '#fff' }}>
              POPULAR TOUR PACKAGES &amp; OUTSTATION
            </span>
            <h2 className="fw-bold h3">Signature <span style={{ color: '#ff7700' }}>Tour Packages from Pune</span></h2>
            <p className="text-muted mb-0">Explore local places to visit, itineraries, and official package fares for each destination.</p>
          </div>

          <CardSlider cardsPerView={4} interval={4200}>
            {homeTourCards.map((pkg, idx) => (
              <div className="card h-100 rounded-4 overflow-hidden bg-white shadow-sm border d-flex flex-column" key={`home-tour-${idx}`}>
                <div className="position-relative overflow-hidden">
                  <img src={pkg.img} alt={pkg.title} className="w-100 fleet-gallery-img" style={{ height: '200px', objectFit: 'cover' }} loading="lazy" decoding="async" />
                  {pkg.img.includes('Keyword Based Image') && (
                    <div className="fleet-gallery-overlay-tag">
                      <FaMapMarkerAlt className="text-warning me-1 flex-shrink-0" size={10} />
                      <span className="text-truncate">{pkg.title.toUpperCase()}</span>
                    </div>
                  )}
                </div>
                <div className="card-body p-3 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <h3 className="h6 fw-bold text-dark mb-0">{pkg.title}</h3>
                    <span className="badge px-2 py-1 rounded-pill small fw-bold" style={{ backgroundColor: '#fff3e6', color: '#ff7700', fontSize: '0.74rem' }}>
                      {pkg.rate}
                    </span>
                  </div>
                  <p className="text-muted small mb-3 flex-grow-1">{pkg.subtitle}</p>
                  <div className="d-flex gap-2 mt-auto">
                    <Link
                      to={pkg.link}
                      className="btn btn-sm btn-outline-dark rounded-pill fw-semibold flex-fill py-2 text-center small text-nowrap"
                    >
                      Guide
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm fw-bold text-white rounded-pill px-3 py-2 flex-fill open-booking-popup-btn d-inline-flex align-items-center justify-content-center gap-1 text-nowrap"
                      data-vehicle={pkg.title}
                      data-place={pkg.title}
                      style={{ backgroundColor: '#ff7700' }}
                    >
                      <FaWhatsapp size={14} /> Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* 5. Why Choose Us & Popular Outstation Routes (Balanced 2-Column Corporate Layout) */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row g-4 g-lg-5 align-items-stretch">
            {/* Why Choose Us */}
            <div className="col-lg-6 d-flex flex-column">
              <h2 className="fw-bold h3 mb-4">Why Choose <span style={{ color: '#ff7700' }}>Shree Travels?</span></h2>
              <ul className="list-unstyled text-dark mb-0 d-flex flex-column gap-3 flex-grow-1 justify-content-between">
                <li className="corporate-feature-card p-3 d-flex align-items-start">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0 mt-1" style={{ width: '36px', height: '36px', backgroundColor: '#fff3e6', color: '#ff7700' }}>
                    <FaCheckCircle size={18} />
                  </span>
                  <span style={{ lineHeight: '1.6' }}><strong>30+ Years of Experience:</strong> Decades of mastering Maharashtra's travel routes.</span>
                </li>
                <li className="corporate-feature-card p-3 d-flex align-items-start">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0 mt-1" style={{ width: '36px', height: '36px', backgroundColor: '#fff3e6', color: '#ff7700' }}>
                    <FaCheckCircle size={18} />
                  </span>
                  <span style={{ lineHeight: '1.6' }}><strong>Strictly Maintained Fleet:</strong> Routine servicing for zero breakdowns.</span>
                </li>
                <li className="corporate-feature-card p-3 d-flex align-items-start">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0 mt-1" style={{ width: '36px', height: '36px', backgroundColor: '#fff3e6', color: '#ff7700' }}>
                    <FaCheckCircle size={18} />
                  </span>
                  <span style={{ lineHeight: '1.6' }}><strong>Experienced Chauffeurs:</strong> Background-verified, polite, and hill-driving experts.</span>
                </li>
                <li className="corporate-feature-card p-3 d-flex align-items-start">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0 mt-1" style={{ width: '36px', height: '36px', backgroundColor: '#fff3e6', color: '#ff7700' }}>
                    <FaCheckCircle size={18} />
                  </span>
                  <span style={{ lineHeight: '1.6' }}><strong>Transparent Quotations:</strong> No hidden toll shockers or surprise driver allowances.</span>
                </li>
                <li className="corporate-feature-card p-3 d-flex align-items-start">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0 mt-1" style={{ width: '36px', height: '36px', backgroundColor: '#fff3e6', color: '#ff7700' }}>
                    <FaCheckCircle size={18} />
                  </span>
                  <span style={{ lineHeight: '1.6' }}><strong>24/7 Support:</strong> Always available for airport drops and emergency bookings.</span>
                </li>
              </ul>
            </div>

            {/* Popular Routes */}
            <div className="col-lg-6 d-flex flex-column">
              <h2 className="fw-bold h3 mb-4">Popular <span style={{ color: '#ff7700' }}>Outstation Routes</span></h2>
              <div className="bg-white p-4 rounded-4 border shadow-sm flex-grow-1 d-flex flex-column justify-content-center">
                <div className="row g-3">
                  {outstationRoutes.map((route, idx) => (
                    <div className="col-12 col-sm-6" key={idx}>
                      <Link to={route.path} className="route-grid-link h-100">
                        <span className="d-flex align-items-center text-truncate">
                          <FaRoute className="me-2 flex-shrink-0" style={{ color: '#ff7700' }} />
                          <span className="text-truncate">{route.label}</span>
                        </span>
                        <FaArrowRight className="ms-2 flex-shrink-0 text-muted" size={12} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Embedded External Components (Gallery & Network) */}
      <Gallery isEmbedded={true} />
      <OurNetwork isEmbedded={true} />

      {/* 7. Areas We Serve in Pune & Multi-City Local SEO Hub */}
      <section className="py-5 bg-white border-top">
        <div className="container py-4 text-center">
          <h2 className="fw-bold h3 mb-3">Areas We <span style={{ color: '#ff7700' }}>Serve in Pune</span></h2>
          <p className="text-muted mx-auto fs-6 fs-md-5 mb-4" style={{ lineHeight: '1.7', maxWidth: '850px' }}>
            We provide prompt vehicle dispatch, corporate commute solutions, and doorstep pick-up services across all major localities in the Pune metropolitan area. Click your area below to learn more about our local services.
          </p>
          <div className="row g-3 justify-content-center text-start mb-5 areas-we-serve-grid">
            {puneAreas.map((area, idx) => (
              <div className="col-6 col-md-3" key={idx}>
                <Link to={area.path} className="area-grid-card h-100">
                  <span className="d-flex align-items-center text-truncate">
                    <FaMapMarkerAlt className="me-2 flex-shrink-0 area-icon" style={{ color: '#ff7700' }} />
                    <span className="text-truncate">{area.name}</span>
                  </span>
                  <FaChevronRight className="ms-1 flex-shrink-0 text-muted area-icon" size={11} />
                </Link>
              </div>
            ))}
          </div>

          {/* Multi-City Local SEO Hub: Pune, Mumbai, Nashik, Lonavala, Shirdi across All Vehicle Types */}
          <div className="pt-4 border-top text-start">
            <div className="text-center mb-4">
              <span className="badge rounded-pill px-3 py-2 mb-2 fw-bold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
                LOCAL SEO DISPATCH NETWORK • 5 CITIES × 6 VEHICLE TYPES
              </span>
              <h2 className="fw-bold h3 mb-2">
                City-Wise Vehicle Rentals in <span style={{ color: '#ff7700' }}>Pune, Mumbai, Nashik, Lonavala &amp; Shirdi</span>
              </h2>
              <p className="text-muted small mx-auto mb-0" style={{ maxWidth: '780px' }}>
                Click any focus keyword below to open its dedicated local city &amp; vehicle page with verified rates, local sightseeing spots, and instant dispatch numbers.
              </p>
            </div>

            <CardSlider cardsPerView={3} interval={4400}>
              {[
                {
                  city: 'Pune',
                  slug: 'pune',
                  zones: 'Kothrud, Hinjewadi, Baner, Wakad, Kharadi, Hadapsar, Viman Nagar & PCMC',
                  links: [
                    { label: 'Force Urbania On Rent in Pune (@ ₹32/Km)', path: '/rent/pune/force-urbania' },
                    { label: 'Tempo Traveller Hire in Pune (13–26 Seater)', path: '/rent/pune/tempo-traveller' },
                    { label: 'Mini Bus On Rent in Pune (14–25 Seater)', path: '/rent/pune/mini-bus' },
                    { label: 'Luxury & Mini Bus Rental in Pune (32–50S)', path: '/rent/pune/bus' },
                    { label: 'Tata Winger On Rent in Pune (9–15 Seater)', path: '/rent/pune/tata-winger' },
                    { label: 'Volvo Bus On Rent in Pune (45–49 Seater)', path: '/rent/pune/volvo-bus' }
                  ]
                },
                {
                  city: 'Mumbai',
                  slug: 'mumbai',
                  zones: 'CSMIA Airport T1/T2, Andheri, BKC, Dadar, Borivali, Thane, Vashi & Navi Mumbai',
                  links: [
                    { label: 'Urbania On Rent in Mumbai (@ ₹32/Km)', path: '/rent/mumbai/force-urbania' },
                    { label: 'Tempo Traveller On Rent in Mumbai', path: '/rent/mumbai/tempo-traveller' },
                    { label: 'Mini Bus On Rent in Mumbai (17–25 Seater)', path: '/rent/mumbai/mini-bus' },
                    { label: 'Bus On Rent in Mumbai (32–50 Seater)', path: '/rent/mumbai/bus' },
                    { label: 'Tata Winger On Rent in Mumbai', path: '/rent/mumbai/tata-winger' },
                    { label: 'Volvo Bus On Rent in Mumbai', path: '/rent/mumbai/volvo-bus' }
                  ]
                },
                {
                  city: 'Nashik',
                  slug: 'nashik',
                  zones: 'Trimbakeshwar, Panchavati, Sula Vineyards, Vani Saptashrungi & Igatpuri',
                  links: [
                    { label: 'Force Urbania On Rent in Nashik (@ ₹32/Km)', path: '/rent/nashik/force-urbania' },
                    { label: 'Tempo Traveller On Rent in Nashik', path: '/rent/nashik/tempo-traveller' },
                    { label: 'Mini Bus On Rent in Nashik', path: '/rent/nashik/mini-bus' },
                    { label: 'Bus On Rent in Nashik (32–50 Seater)', path: '/rent/nashik/bus' },
                    { label: 'Tata Winger On Rent in Nashik', path: '/rent/nashik/tata-winger' },
                    { label: 'Volvo Bus On Rent in Nashik', path: '/rent/nashik/volvo-bus' }
                  ]
                },
                {
                  city: 'Lonavala',
                  slug: 'lonavala',
                  zones: 'Lonavala Station, Khandala, Tiger Point, Bhushi Dam, Karla Caves & Pawna Lake',
                  links: [
                    { label: 'Urbania Rent in Lonavala (@ ₹32/Km)', path: '/rent/lonavala/force-urbania' },
                    { label: 'Tempo Traveller On Rent in Lonavala', path: '/rent/lonavala/tempo-traveller' },
                    { label: 'Mini Bus On Rent in Lonavala', path: '/rent/lonavala/mini-bus' },
                    { label: 'Bus On Rent in Lonavala (32–50 Seater)', path: '/rent/lonavala/bus' },
                    { label: 'Tata Winger On Rent in Lonavala', path: '/rent/lonavala/tata-winger' },
                    { label: 'Volvo Bus On Rent in Lonavala', path: '/rent/lonavala/volvo-bus' }
                  ]
                },
                {
                  city: 'Shirdi',
                  slug: 'shirdi',
                  zones: 'Sai Baba Samadhi Mandir, Shirdi Airport, Sainagar Station & Shani Shingnapur',
                  links: [
                    { label: 'Force Urbania On Rent in Shirdi (@ ₹32/Km)', path: '/rent/shirdi/force-urbania' },
                    { label: 'Tempo Traveller On Rent in Shirdi', path: '/rent/shirdi/tempo-traveller' },
                    { label: 'Mini Bus On Rent in Shirdi', path: '/rent/shirdi/mini-bus' },
                    { label: 'Bus On Rent in Shirdi (32–50 Seater)', path: '/rent/shirdi/bus' },
                    { label: 'Tata Winger On Rent in Shirdi', path: '/rent/shirdi/tata-winger' },
                    { label: 'Volvo Bus On Rent in Shirdi', path: '/rent/shirdi/volvo-bus' }
                  ]
                }
              ].map((hub) => (
                <div className="card h-100 border-0 shadow-sm p-4" key={hub.slug}>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h3 className="h5 fw-bold text-dark mb-0">
                      <FaMapMarkerAlt className="me-2" style={{ color: '#ff7700' }} />
                      {hub.city} Fleet Hub
                    </h3>
                    <span className="badge rounded-pill px-3 py-1" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
                      24/7 Dispatch
                    </span>
                  </div>
                  <p className="text-muted small mb-3">{hub.zones}</p>
                  <ul className="list-unstyled mb-0 small border-top pt-3">
                    {hub.links.map((item, i) => (
                      <li key={i} className="mb-2">
                        <Link to={item.path} className="service-keyword-link text-dark">
                          <FaChevronRight className="me-2 flex-shrink-0" style={{ color: '#ff7700' }} size={11} />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardSlider>
          </div>
        </div>
      </section>

      {/* 8. Google Business Profile, E-E-A-T Trust Credentials & Verified Reviews */}
      <section className="py-5 bg-light border-top" id="google-reviews">
        <div className="container py-4">
          <div className="row align-items-center g-4 mb-5">
            <div className="col-lg-7">
              <span
                className="badge rounded-pill px-3 py-2 mb-3 d-inline-flex align-items-center fw-bold"
                style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}
              >
                <FaGoogle className="me-2" /> VERIFIED GOOGLE BUSINESS PROFILE &amp; E-E-A-T CREDENTIALS
              </span>

              <h2 className="fw-bold h3 mb-3">
                Shree Travels <span style={{ color: '#ff7700' }}>Google Reviews &amp; Verified Business Profile</span>
              </h2>

              <p className="text-muted fs-6 mb-3" style={{ lineHeight: '1.8' }}>
                Rated <strong>4.9★ across 348+ verified customer reviews</strong>, Shree Travels operates from our registered head office in Kothrud, Pune with All-India Tourist Permits, GST-compliant corporate billing, and GPS-monitored fleet dispatch across Pune, Mumbai, Shirdi, Nashik, and Lonavala.
              </p>

              <div className="row g-2 g-md-3 mb-4">
                <div className="col-12 col-md-6">
                  <div className="p-3 bg-white rounded-4 border h-100">
                    <div className="fw-bold text-dark small mb-1">Registered Head Office Address</div>
                    <p className="small text-muted mb-0">
                      Office no 201, Dodke Palazzo, near mahatma society, Pramathesh Housing Society, Jijai Nagar, Kothrud, Pune, Maharashtra 411038
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="p-3 bg-white rounded-4 border h-100">
                    <div className="fw-bold text-dark small mb-1">24/7 Direct Dispatch &amp; WhatsApp</div>
                    <p className="small text-muted mb-1">
                      <strong>Call:</strong> +91 76204 11277
                    </p>
                    <p className="small text-muted mb-0">
                      <strong>WhatsApp Booking:</strong> +91 78757 74499
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="p-3 bg-white rounded-4 border h-100">
                    <div className="fw-bold text-dark small mb-1">RTO Permits &amp; Corporate GST Billing</div>
                    <p className="small text-muted mb-0">
                      All-India Tourist Permit coaches, comprehensive passenger insurance, and 100% GST tax invoices for MNCs &amp; IT parks.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="p-3 bg-white rounded-4 border h-100">
                    <div className="fw-bold text-dark small mb-1">Verified Chauffeurs &amp; 30+ Yrs Legacy</div>
                    <p className="small text-muted mb-0">
                      Police-verified, uniformed commercial badge-holder drivers trained in Western Ghats &amp; Expressway safety.
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href={GOOGLE_BUSINESS_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn fw-bold px-4 py-3 rounded-pill text-white shadow-sm d-inline-flex align-items-center"
                  style={{ backgroundColor: '#ff7700' }}
                >
                  <FaGoogle className="me-2" />
                  View Google Reviews (4.9★)
                </a>

                <Link
                  to="/reviews"
                  className="btn btn-outline-dark fw-bold px-4 py-3 rounded-pill"
                >
                  Reviews &amp; Trust Credentials
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="p-4 rounded-4 shadow-sm border h-100"
                style={{ backgroundColor: '#ffffff' }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0"
                    style={{
                      width: '52px',
                      height: '52px',
                      backgroundColor: '#fff3e6',
                      color: '#ff7700'
                    }}
                  >
                    <FaGoogle size={22} />
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-1">Shree Travels – Kothrud, Pune</h3>
                    <p className="small text-muted mb-0">4.9 ★ (348+ Verified Google Reviews)</p>
                  </div>
                </div>

                <div className="border-top pt-3 d-flex flex-column gap-3">
                  <div className="p-3 rounded-3 bg-light border">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <span className="fw-bold small text-dark"> Kulkarni Family (Kothrud → Mahabaleshwar)</span>
                      <span className="text-warning small">★★★★★</span>
                    </div>
                    <p className="small text-muted mb-0">
                      "Booked a 17 Seater Force Urbania (@ ₹32/km) from Shree Travels Kothrud for our 3-day Mahabaleshwar family trip. Brand new cabin, super chill AC, and very polite driver."
                    </p>
                  </div>
                  <div className="p-3 rounded-3 bg-light border">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <span className="fw-bold small text-dark"> Deshmukh IT Team (Hinjewadi → Lonavala)</span>
                      <span className="text-warning small">★★★★★</span>
                    </div>
                    <p className="small text-muted mb-0">
                      "Hired a 32 Seater Luxury AC Bus and 17 Seater Tempo Traveller for our Hinjewadi corporate outing. Transparent per-km billing with proper GST invoice and on-time pickup."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-5 bg-white border-top">
        <div className="container py-4" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-5">
            <h2 className="fw-bold h3">Frequently Asked <span style={{ color: '#ff7700' }}>Questions</span></h2>
            <p className="text-muted mb-0">Everything you need to know about renting a Force Urbania, Tempo Traveller, Bus, or Cab in Pune.</p>
          </div>
          
          <div className="accordion" id="homeFaq">
            <div className="accordion-item border rounded-4 shadow-sm mb-3 overflow-hidden">
              <h3 className="accordion-header">
                <button className="accordion-button fw-bold py-3 px-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  What is the per km rate for Force Urbania and Tempo Traveller on rent in Pune?
                </button>
              </h3>
              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#homeFaq">
                <div className="accordion-body text-muted px-4 pb-4">
                  Force Urbania luxury AC vans (10, 13 &amp; 17 seater) start at <strong>₹32/km</strong> (minimum 300 km/day). Our 13-seater Tempo Traveller starts at ₹20/km (Non-AC) &amp; ₹24/km (AC), while 17-seater Tempo Traveller starts at ₹22/km (Non-AC) &amp; ₹25/km (AC).
                </div>
              </div>
            </div>
            
            <div className="accordion-item border rounded-4 shadow-sm mb-3 overflow-hidden">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed fw-bold py-3 px-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Do you provide Pune to Mumbai Cab and 24/7 Pune Airport Cab services?
                </button>
              </h3>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#homeFaq">
                <div className="accordion-body text-muted px-4 pb-4">
                  Yes, we provide 24/7 dedicated <Link to="/pune-to-mumbai-cab">Pune to Mumbai Cab</Link>, <Link to="/pune-airport-cab">Pune Airport Cab</Link>, and <Link to="/outstation-cab-service-pune">Outstation Cab Service in Pune</Link> with Swift Dzire, Ertiga, Innova Crysta, 13/17-seater Force Urbania, and Tempo Travellers.
                </div>
              </div>
            </div>

            <div className="accordion-item border rounded-4 shadow-sm mb-0 overflow-hidden">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed fw-bold py-3 px-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Which cities and Pune localities do you cover for vehicle rental?
                </button>
              </h3>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#homeFaq">
                <div className="accordion-body text-muted px-4 pb-4">
                  We provide 24/7 dispatch across all Pune hubs (Kothrud, Hinjewadi, Baner, Wakad, Kharadi, Hadapsar, Viman Nagar, PCMC) as well as dedicated regional hubs for <strong>Bus, Force Urbania, Tempo Traveller &amp; Mini Bus on rent in Mumbai, Shirdi, Nashik, and Lonavala</strong>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SEO Content Block: Service Introduction (AT BOTTOM) */}
      <section className="py-5 bg-light border-top">
        <div className="container py-3" style={{ maxWidth: '960px' }}>
          <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm" style={{ border: '1px solid #e2e8f0', borderLeft: '4px solid #ff7700' }}>
            <h2 className="fw-bold mb-3 h3 text-center text-md-start">
              Shree Travels – #1 Urbania on Rent in Pune, Tempo Traveller &amp; Luxury Bus Rental Agency
            </h2>
            <p className="text-muted fs-6" style={{ lineHeight: '1.8' }}>
              Welcome to <strong>Shree Travels</strong>, Pune's most trusted group passenger transport and commercial vehicle rental company headquartered at Dodke Palazzo, Kothrud, Pune. Whether you are searching for <Link to="/urbania-on-rent-in-pune" className="fw-semibold" style={{ color: '#ff7700' }}>Urbania on Rent in Pune (@ ₹32/km)</Link>, <Link to="/13-seater-urbania-on-rent-pune" className="fw-semibold" style={{ color: '#ff7700' }}>13 Seater Urbania on Rent in Pune</Link>, <Link to="/17-seater-urbania-on-rent-pune" className="fw-semibold" style={{ color: '#ff7700' }}>17 Seater Urbania on Rent in Pune</Link>, or <Link to="/tempo-traveller-on-rent-in-pune" className="fw-semibold" style={{ color: '#ff7700' }}>Tempo Traveller on Rent in Pune</Link>, we offer transparent per-kilometer tariffs with zero hidden charges.
            </p>
            <p className="text-muted fs-6 mb-0" style={{ lineHeight: '1.8' }}>
              Our self-owned fleet includes <Link to="/13-seater-tempo-traveller-on-rent-in-pune" className="fw-semibold" style={{ color: '#0f172a' }}>13 Seater</Link> &amp; <Link to="/17-seater-tempo-traveller-on-rent-in-pune" className="fw-semibold" style={{ color: '#0f172a' }}>17 Seater Tempo Travellers</Link>, <Link to="/32-seater-bus-on-rent-in-pune" className="fw-semibold" style={{ color: '#0f172a' }}>32 Seater</Link>, <Link to="/40-seater-bus-on-rent-in-pune" className="fw-semibold" style={{ color: '#0f172a' }}>40 Seater</Link>, and <Link to="/50-seater-bus-on-rent-in-pune" className="fw-semibold" style={{ color: '#0f172a' }}>50 Seater Luxury Buses</Link>, plus 24/7 <Link to="/pune-to-mumbai-cab" className="fw-semibold" style={{ color: '#0f172a' }}>Pune to Mumbai Cab</Link> and <Link to="/pune-airport-cab" className="fw-semibold" style={{ color: '#0f172a' }}>Pune Airport Cab</Link> transfers across Pune, Mumbai, Shirdi, Nashik, and Lonavala.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Final CTA Section */}
      <section className="py-5" style={{ backgroundColor: '#0f172a' }}>
        <div className="container py-4">
          <div className="row align-items-center flex-column-reverse flex-lg-row g-4">
            <div className="col-lg-6 text-white text-center text-lg-start">
              <h2 className="fw-bold mb-3 h3 h2-lg text-white">Ready to Book Your Next Journey?</h2>
              <p className="lead text-light opacity-75 mb-4 fs-6 fs-lg-5">
                Whether it's a corporate event, a family wedding, or a weekend getaway, Shree Travels guarantees a seamless ride.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <button
                  type="button"
                  className="btn btn-lg text-white fw-bold px-4 rounded-pill shadow-sm d-inline-flex align-items-center open-booking-popup-btn"
                  data-mode="booking"
                  data-vehicle="17 Seater Force Urbania (₹32/km)"
                  data-ac="AC"
                  data-place="Pune Local / Outstation"
                  style={{ backgroundColor: '#ff7700' }}
                >
                  <FaBus className="me-2" />
                  <span className="d-none d-sm-inline">Book Vehicle Online</span>
                  <span className="d-inline d-sm-none">Book Online</span>
                </button>
                <a href="tel:+917620411277" className="btn btn-lg btn-outline-light fw-bold px-4 rounded-pill shadow-sm d-inline-flex align-items-center">
                  <FaPhoneAlt className="me-2" />
                  <span className="d-none d-sm-inline">Call +91 76204 11277</span>
                  <span className="d-inline d-sm-none">Call Now</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img src="/img/cta-men.png" loading="lazy" alt="Shree Travels customer support team" className="img-fluid w-75 w-lg-100" style={{ maxHeight: '320px', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;