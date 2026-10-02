import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Import the components you want to embed
import Gallery from './Gallery';
import OurNetwork from './OurNetwork';

// Updated to your newest Google Link
const GOOGLE_BUSINESS_PROFILE = "https://share.google/gfkP38ghwwQu9J5TJ";

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "@id": "https://shreetravels.in/#organization",
    "name": "Shree Travels",
    "image": "https://shreetravels.in/img/force-urbania.jpg",
    "url": "https://shreetravels.in",
    "logo": "https://shreetravels.in/img/Logo/shree.png",
    "telephone": "+91-7620411277",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office no 202, 2nd floor, Dodke Palazzo, road, near wonder futura, Mahatma Society, Kothrud",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411038",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.4655", 
      "longitude": "73.8188" 
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7620411277",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Marathi", "Hindi"]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100063648079773",
      "https://www.instagram.com/amrutatravel.in/"
    ],
    "areaServed": [
      "Pune", "Pimpri-Chinchwad", "Hinjewadi", "Kharadi", "Koregaon Park", 
      "Baner", "Wakad", "Magarpatta", "Mumbai"
    ]
  };

  const puneAreas = [
    { name: "Hinjewadi", path: "/contact" }, 
    { name: "Kharadi", path: "/contact" },
    { name: "Baner", path: "/contact" },
    { name: "Wakad", path: "/contact" },
    { name: "Koregaon Park", path: "/contact" },
    { name: "Hadapsar", path: "/contact" },
    { name: "Kothrud", path: "/contact" },
    { name: "Pimpri-Chinchwad", path: "/contact" }
  ];

  // Generate array for 16 corporate logos
  const corporateLogos = Array.from({ length: 16 }, (_, i) => 
    `/img/corporat/Corporate Customer Logo on Website-${String(i + 1).padStart(2, '0')}.jpg`
  );

  // Cards for the Vehicles Grid
  const vehicleCards = [
    { title: "Tempo Traveller", desc: "13, 17, and 20 Seater Options • AC", img: "/img/Tempo Traveller img-01.jpg", link: "/tempo-traveller-seater-hire-pune", tag: "Most Popular" },
    { title: "Force Urbania", desc: "Premium VIP Travel • Spacious Interiors", img: "/img/force-ub.jpg", link: "/force-urbania-on-rent-pune", tag: "Ultra Luxury" },
    { title: "Luxury AC Bus", desc: "32, 40, and 50 Seater • Corporate", img: "/img/bus-luxury.jpg", link: "/bus-rental-pune", tag: "Corporate Pick" },
    { title: "Outstation Vehicals", desc: "Mini Bus", img: "/img/tata-winger3.jpeg", link: "/contact" }
  ];

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <SEO 
        title="Vehicle Rental Service in Pune | Rent Bus, Urbania"
        description="Book premium vehicle rentals in Pune. Shree Travels offers Tempo Travellers, Force Urbania, Luxury Buses, and outstation cabs for corporate and family group travel."
        keywords="Travels in Pune, Car rental Pune, Tempo Traveller Pune, Bus rental Pune, Force Urbania Pune, Outstation travel Pune, Airport cab Pune"
        path="/"
        image="https://shreetravels.in/img/force-urbania.jpg"
        schema={homeSchema}
      />

      <style>
        {`
          .hero-video-container { position: relative; width: 100%; height: 65vh; overflow: hidden; background-color: #0f172a; }
          .hero-video { position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%; width: auto; height: auto; transform: translate(-50%, -50%); object-fit: cover; z-index: 0; }
          .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.65); z-index: 1; }
          .hero-content { position: relative; z-index: 2; height: 100%; }
          .text-shadow-custom { text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8); }
          .btn-hover-animate { transition: all 0.3s ease; }
          .btn-hover-animate:hover { transform: translateY(-5px) scale(1.05); }
          
          /* Corporate Logo Marquee - Colorful by Default, Grey on Click/Hover */
          .marquee-container { overflow: hidden; white-space: nowrap; width: 100%; background: #ffffff; padding: 2rem 0; position: relative; }
          .marquee-container::before, .marquee-container::after { content: ''; position: absolute; top: 0; width: 150px; height: 100%; z-index: 2; }
          .marquee-container::before { left: 0; background: linear-gradient(to right, white 0%, transparent 100%); }
          .marquee-container::after { right: 0; background: linear-gradient(to left, white 0%, transparent 100%); }
          .marquee-track { display: inline-block; animation: marquee 35s linear infinite; }
          .marquee-track img { height: 70px; margin: 0 2rem; object-fit: contain; filter: grayscale(0%) opacity(100%); transition: filter 0.3s ease, transform 0.3s ease; cursor: pointer; }
          .marquee-track img:hover, .marquee-track img:active { filter: grayscale(100%) opacity(60%); transform: scale(0.95); }
          
          /* Uniform Grid Card Hover Effects (For Vehicles) */
          .grid-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .grid-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
          .grid-card-img { transition: transform 0.5s ease; }
          .grid-card:hover .grid-card-img { transform: scale(1.05); }

          /* Comfort Section Photo Album Swipe (Book-like slide) */
          .album-container { display: flex; overflow-x: auto; gap: 1.2rem; padding: 1rem 1rem 2rem 1rem; scrollbar-width: none; scroll-snap-type: x mandatory; }
          .album-container::-webkit-scrollbar { display: none; }
          .album-card { flex: 0 0 80%; scroll-snap-align: center; transition: transform 0.3s ease; }
          .comfort-card img { transition: transform 0.5s ease; height: 320px; }
          .comfort-card:hover img { transform: scale(1.05); }

          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

          .accordion-button:not(.collapsed) { background-color: #fff3e6; color: #ff7700; border-bottom: 1px solid #ff7700; }
          .accordion-button:focus { box-shadow: none; }

          @media (min-width: 768px) { 
            .hero-video-container { height: 85vh; }
            .album-container { justify-content: center; overflow-x: hidden; gap: 1.5rem; padding: 1rem 0; }
            .album-card { flex: 0 0 calc(25% - 1.2rem); }
          }
        `}
      </style>

      {/* 1. Hero Section */}
      <section className="hero-video-container d-flex align-items-center justify-content-center text-center">
        <video 
          autoPlay muted loop playsInline 
          loading="lazy" preload="none" 
          poster="/img/video-poster.jpg" 
          className="hero-video"
        >
          <source src="/img/video.webm" type="video/webm" />
          <source src="/img/video.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="container hero-content d-flex flex-column justify-content-center align-items-center py-5">
          <div className="max-w-850 mx-auto mb-4 animate__animated animate__fadeInDown px-3">
            <h1 className="display-4 fw-bold text-white mb-3 text-shadow-custom">
              Travel & Vehicle Rental <span style={{ color: '#ff7700' }}>Services in Pune</span>
            </h1>
            <p className="lead text-light mb-0 text-shadow-custom fw-semibold" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              Tempo Travellers, Force Urbania, Luxury Buses, Cars, and Outstation Travel across Maharashtra.
            </p>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 gap-md-4 animate__animated animate__bounceInUp w-100 px-3">
            <Link to="/our-fleet" className="btn fw-bold px-4 px-md-5 py-3 text-white shadow-lg rounded-pill btn-hover-animate" style={{ backgroundColor: '#ff7700', border: 'none' }}>
              Explore Fleet
            </Link>
            <a href="tel:+917620411277" className="btn fw-bold px-4 px-md-5 py-3 shadow-lg rounded-pill btn-hover-animate" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: 'white', border: '2px solid white', backdropFilter: 'blur(4px)' }}>
              Call: +91 76204 11277
            </a>
          </div>
        </div>
      </section>

      {/* 2. Trusted By Section */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-3">
          <div className="text-center mb-4">
            <h2 className="fw-bold h3">Trusted by <span style={{ color: '#ff7700' }}>500+ Companies</span></h2>
            <p className="text-muted">Leading organizations trust Shree Travels for all their corporate travel requirements.</p>
          </div>
        </div>
        <div className="marquee-container bg-white">
          <div className="marquee-track">
            {corporateLogos.map((src, index) => (
              <img key={`logo-set1-${index}`} src={src} loading="lazy" alt={`Corporate Client ${index + 1}`} />
            ))}
            {corporateLogos.map((src, index) => (
              <img key={`logo-set2-${index}`} src={src} loading="lazy" alt="" aria-hidden="true" />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Experience Ultimate Comfort Section (Book-Like Slide/Album) */}
      <section className="py-5 bg-light border-bottom">
        <div className="container-fluid py-2">
          <div className="text-center mb-4">
            <h2 className="fw-bold h3">Experience Ultimate <span style={{ color: '#ff7700' }}>Comfort</span></h2>
          </div>
          
          <div className="album-container">
            {[1, 2, 3, 4].map((num) => (
              <div key={`comfort-${num}`} className="album-card">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden comfort-card position-relative">
                  <img 
                    src={`/img/Keyword Based Image/comfort-${num}.jpeg`} 
                    loading="lazy" 
                    alt={`Shree Travels premium interior comfort ${num}`} 
                    className="w-100 object-fit-cover" 
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
                    <span className="text-white fw-semibold small px-2 py-1 rounded" style={{ backgroundColor: '#ff7700' }}>
                      <i className="fas fa-check-circle me-1"></i> Premium Interior
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Travel & Rental Vehicles Section (Static Grid) */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold h3">Our Travel & <span style={{ color: '#ff7700' }}>Rental Vehicles</span></h2>
            <p className="text-muted">Explore our deeply-maintained fleet designed for local and outstation journeys.</p>
          </div>
          
          <div className="row g-4">
            {vehicleCards.map((card, index) => (
              <div className="col-12 col-md-6 col-lg-3" key={`vehicle-card-${index}`}>
                <div className="card h-100 rounded-4 overflow-hidden bg-white shadow-sm border position-relative grid-card">
                  
                  {/* Floating Tag / Badge */}
                  {card.tag && (
                    <div className="position-absolute top-0 end-0 m-3" style={{ zIndex: 1 }}>
                      <span className="badge fw-bold px-3 py-2 rounded-pill shadow" style={{ backgroundColor: '#ff7700', color: 'white', fontSize: '0.85rem' }}>
                        {card.tag}
                      </span>
                    </div>
                  )}

                  <div className="overflow-hidden" style={{ height: '220px' }}>
                    <img src={card.img} loading="lazy" alt={card.title} className="w-100 h-100 object-fit-cover grid-card-img" />
                  </div>
                  <div className="card-body p-4 text-center d-flex flex-column justify-content-between">
                    <div>
                      <h3 className="h5 fw-bold mb-2">{card.title}</h3>
                      <p className="text-muted small mb-3">{card.desc}</p>
                    </div>
                    <Link to={card.link} className="btn btn-outline-dark w-100 fw-semibold rounded-pill py-2 mt-auto">
                      Explore Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Embedded External Components (Gallery & Network) */}
      <Gallery />
      <OurNetwork />

      {/* 6. Popular Routes & Why Choose Us */}
      <section className="py-5 bg-light border-top">
        <div className="container py-4">
          <div className="row g-5">
            {/* Why Choose Us */}
            <div className="col-lg-6">
              <h2 className="fw-bold h3 mb-4">Why Choose <span style={{ color: '#ff7700' }}>Shree Travels?</span></h2>
              <ul className="list-unstyled text-dark fs-5" style={{ lineHeight: '1.8' }}>
                <li className="mb-3"><i className="fas fa-check-circle text-success me-3"></i><strong>30+ Years of Experience:</strong> Decades of mastering Maharashtra's travel routes.</li>
                <li className="mb-3"><i className="fas fa-check-circle text-success me-3"></i><strong>Strictly Maintained Fleet:</strong> Routine servicing for zero breakdowns.</li>
                <li className="mb-3"><i className="fas fa-check-circle text-success me-3"></i><strong>Experienced Chauffeurs:</strong> Background-verified, polite, and hill-driving experts.</li>
                <li className="mb-3"><i className="fas fa-check-circle text-success me-3"></i><strong>Transparent Quotations:</strong> No hidden toll shockers or surprise driver allowances.</li>
                <li className="mb-3"><i className="fas fa-check-circle text-success me-3"></i><strong>24/7 Support:</strong> Always available for airport drops and emergency bookings.</li>
              </ul>
            </div>

            {/* Popular Routes */}
            <div className="col-lg-6">
              <h2 className="fw-bold h3 mb-4">Popular <span style={{ color: '#ff7700' }}>Outstation Routes</span></h2>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-white border shadow-sm rounded-pill fw-semibold px-4 py-2 text-dark">Pune → Mumbai Cab</Link>
                <Link to="/contact" className="btn btn-white border shadow-sm rounded-pill fw-semibold px-4 py-2 text-dark">Pune → Lonavala Tour</Link>
                <Link to="/contact" className="btn btn-white border shadow-sm rounded-pill fw-semibold px-4 py-2 text-dark">Pune → Mahabaleshwar</Link>
                <Link to="/contact" className="btn btn-white border shadow-sm rounded-pill fw-semibold px-4 py-2 text-dark">Pune → Shirdi Darshan</Link>
                <Link to="/contact" className="btn btn-white border shadow-sm rounded-pill fw-semibold px-4 py-2 text-dark">Pune → Nashik</Link>
                <Link to="/contact" className="btn btn-white border shadow-sm rounded-pill fw-semibold px-4 py-2 text-dark">Mumbai Airport Transfer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Areas We Serve */}
      <section className="py-5 bg-white border-top">
        <div className="container py-4 text-center">
          <h2 className="fw-bold h3 mb-4">Areas We <span style={{ color: '#ff7700' }}>Serve in Pune</span></h2>
          <p className="text-muted max-w-850 mx-auto fs-5 mb-4" style={{ lineHeight: '1.7' }}>
            We provide prompt vehicle dispatch, corporate commute solutions, and doorstep pick-up services across all major localities in the Pune metropolitan area. Click your area below to learn more about our local services.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {puneAreas.map((area, idx) => (
              <Link 
                key={idx} 
                to={area.path} 
                className="text-decoration-none px-4 py-2 rounded-pill fw-semibold border shadow-sm"
                style={{ backgroundColor: '#f8f9fa', color: '#333', transition: 'all 0.2s' }}
                onMouseOver={(e) => { e.target.style.backgroundColor = '#ff7700'; e.target.style.color = 'white'; }}
                onMouseOut={(e) => { e.target.style.backgroundColor = '#f8f9fa'; e.target.style.color = '#333'; }}
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Google Business Profile & Reviews */}
      <section className="py-5 bg-white border-top" id="google-reviews">
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span
                className="badge rounded-pill px-3 py-2 mb-3"
                style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}
              >
                <i className="fab fa-google me-2"></i> Google Business Profile
              </span>

              <h2 className="fw-bold h3 mb-3">
                Shree Travels <span style={{ color: '#ff7700' }}>Google Reviews</span>
              </h2>

              <p className="text-muted fs-5 mb-3" style={{ lineHeight: '1.8' }}>
                See our latest customer feedback, Google rating, photos, business
                information, and reviews directly on our Google Business Profile.
              </p>

              <p className="text-muted mb-4">
                We value genuine customer feedback. If you have travelled with Shree
                Travels, you can also share your experience on Google.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href={GOOGLE_BUSINESS_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn fw-bold px-4 py-3 rounded-pill text-white shadow-sm"
                  style={{ backgroundColor: '#ff7700' }}
                >
                  <i className="fab fa-google me-2"></i>
                  View Google Reviews
                </a>

                <Link
                  to="/reviews"
                  className="btn btn-outline-dark fw-bold px-4 py-3 rounded-pill"
                >
                  Reviews & Trust
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="p-4 rounded-4 shadow-sm border h-100"
                style={{ backgroundColor: '#f8fafc' }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle me-3"
                    style={{
                      width: '52px',
                      height: '52px',
                      backgroundColor: '#fff3e6',
                      color: '#ff7700'
                    }}
                  >
                    <i className="fab fa-google fa-lg"></i>
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-1">Google Business Profile</h3>
                    <p className="small text-muted mb-0">Shree Travels, Pune</p>
                  </div>
                </div>

                <div className="border-top pt-3">
                  <p className="mb-2 fw-semibold">
                    <i className="fas fa-star me-2" style={{ color: '#f59e0b' }}></i>
                    Latest Google rating & customer reviews
                  </p>
                  <p className="small text-muted mb-0">
                    Rating and review counts are displayed directly by Google so
                    customers can see the current information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-5 bg-light border-top">
        <div className="container py-4" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-5">
            <h2 className="fw-bold h3">Frequently Asked <span style={{ color: '#ff7700' }}>Questions</span></h2>
            <p className="text-muted">Everything you need to know about renting a vehicle with Shree Travels.</p>
          </div>
          
          <div className="accordion shadow-sm rounded" id="homeFaq">
            <div className="accordion-item border-0 border-bottom">
              <h3 className="accordion-header">
                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  What vehicles can I rent from Shree Travels in Pune?
                </button>
              </h3>
              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#homeFaq">
                <div className="accordion-body text-muted">
                  We offer a vast fleet including 13 to 20-seater Tempo Travellers, premium Force Urbania luxury vans, 32 to 50-seater AC buses, and outstation sedan/SUV cabs.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-0 border-bottom">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Do you provide airport pickup and drop services?
                </button>
              </h3>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#homeFaq">
                <div className="accordion-body text-muted">
                  Yes, we provide 24/7 dedicated Pune to Mumbai Airport cab and Tempo Traveller transfer services with ample luggage space.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0 border-bottom">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Do you offer dedicated corporate employee transportation?
                </button>
              </h3>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#homeFaq">
                <div className="accordion-body text-muted">
                  Absolutely. Over 500 companies trust us for daily employee commutes to major IT hubs like Hinjewadi, Kharadi, and Magarpatta using our buses and 17-seater vehicles.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SEO Content Block: Service Introduction (AT BOTTOM) */}
      <section className="py-5 bg-white border-top">
        <div className="container py-4 text-center" style={{ maxWidth: '900px' }}>
          <h2 className="fw-bold mb-4 h3">Comprehensive Group Travel Solutions in Pune</h2>
          <p className="text-muted fs-5" style={{ lineHeight: '1.8' }}>
            Welcome to Shree Travels, Pune's premier group transportation agency. Whether you are organizing a corporate commute to Hinjewadi IT Park, planning a grand family wedding, or booking an outstation weekend trip to Mahabaleshwar, we provide reliable, safe, and impeccably maintained vehicles. 
          </p>
          <p className="text-muted fs-5 mb-0" style={{ lineHeight: '1.8' }}>
            Our expansive fleet serves all of Pune and Pimpri-Chinchwad, offering everything from swift Mumbai airport transfers to massive 50-seater buses for educational tours. Travel with a trusted partner that understands Maharashtra's roads.
          </p>
        </div>
      </section>

      {/* 11. Final CTA Section */}
      <section className="py-5" style={{ backgroundColor: '#0f172a' }}>
        <div className="container py-4">
          <div className="row align-items-center flex-column-reverse flex-lg-row g-4">
            <div className="col-lg-6 text-white text-center text-lg-start">
              <h2 className="fw-bold mb-3 h3 h2-lg">Ready to Book Your Next Journey?</h2>
              <p className="lead text-light opacity-75 mb-4 fs-6 fs-lg-5">
                Whether it's a corporate event, a family wedding, or a weekend getaway, Shree Travels guarantees a seamless ride.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <a href="tel:+917620411277" className="btn btn-lg text-white fw-bold px-4 shadow-sm" style={{ backgroundColor: '#ff7700' }}>
                  <i className="fas fa-phone-alt me-2"></i> Call +91 7620411277
                </a>
                <Link to="/contact" className="btn btn-lg btn-outline-light fw-bold px-4 shadow-sm">
                  Get a Free Quote
                </Link>
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