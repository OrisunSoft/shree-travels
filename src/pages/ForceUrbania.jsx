import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ForceUrbania = () => {
  const forceUrbaniaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    name: 'Force Urbania On Rent in Pune',
    description: 'Premium 13 & 17 Seater Force Urbania rental service in Pune @ ₹32/km with experienced drivers',
    manufacturer: {
      '@type': 'Organization',
      name: 'Force Motors'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '6000',
      highPrice: '14000',
      offerCount: '4',
      availability: 'https://schema.org/InStock',
      url: 'https://shreetravels.in/force-urbania-on-rent-pune'
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128"
    }
  };

  const puneAreas = [
    'Hinjewadi IT Park', 'Kharadi', 'Koregaon Park', 'Baner', 'Wakad', 
    'Magarpatta City', 'Viman Nagar', 'Shivaji Nagar', 'Hadapsar', 'Pimpri-Chinchwad'
  ];

  return (
    <>
      <SEO
        title="Force Urbania On Rent in Pune @ ₹32/km | Shree Travels"
        description="Book Force Urbania On Rent in Pune @ ₹32/km. Premium 10, 13 & 17 seater luxury AC van hire with individual recliner seats, panoramic windows & experienced chauffeurs. Call +91 7620411277 or WhatsApp +91 78757 74499."
        keywords="Force Urbania On Rent in Pune, 13 Seater Urbania on Rent in Pune, 17 Seater Urbania on Rent in Pune, Luxury Force Urbania On Rent in Pune, Force Urbania Luxury Mini Bus On Rent, Pune to Mahabaleshwar Urbania On Rent, Urbania On Rent in Mumbai, Urbania Rent in Lonavala"
        path="/force-urbania-on-rent-pune"
        image="/img/Keyword Based Image/Keyword Based Image-16.jpg"
        schema={forceUrbaniaSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Vehicles', url: '/our-fleet' },
          { name: 'Force Urbania On Rent in Pune', url: '/force-urbania-on-rent-pune' }
        ]}
      />

      <style>{`
        .hero-section-urbania {
          background: linear-gradient(135deg, #0f172a 0%, #1a202c 100%);
          color: white;
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }
        
        .feature-icon {
          font-size: 2.5rem;
          color: #ff7700;
          margin-bottom: 1rem;
        }
        
        .highlight-box {
          background: linear-gradient(135deg, #fff9f0 0%, #ffe4cc 100%);
          border-left: 4px solid #ff7700;
          padding: 1.5rem;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }
        
        .vehicle-spec {
          background: white;
          padding: 1.5rem;
          border-radius: 0.75rem;
          border-top: 3px solid #ff7700;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          height: 100%;
        }
        
        .vehicle-spec h5 {
          color: #0f172a;
          font-weight: 700;
          margin-top: 1rem;
        }
        
        .vehicle-spec p {
          color: #666;
          font-size: 0.9rem;
          margin: 0.5rem 0;
        }

        .cta-section-urbania {
          background: linear-gradient(135deg, #ff7700 0%, #ff9933 100%);
          padding: 3rem 0;
          border-radius: 1rem;
          color: white;
        }

        .amenity-badge {
          background: #f0f0f0;
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          display: inline-block;
          margin: 0.5rem;
          font-weight: 600;
          color: #333;
        }

        .amenity-badge i {
          color: #ff7700;
          margin-right: 0.5rem;
        }

        @media (max-width: 768px) {
          .hero-section-urbania {
            padding: 40px 0;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section-urbania">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="badge px-3 py-2 rounded-pill mb-3 fw-bold" style={{ backgroundColor: '#ff7700', color: '#fff' }}>
                Flat ₹32/km Outstation Tariff | 10, 13 &amp; 17 Seater
              </span>
              <h1 className="display-5 fw-bold mb-3 text-white">
                Force Urbania On Rent in Pune
              </h1>
              <p className="lead mb-4">
                Experience business-class road travel with Shree Travels' next-generation 10, 13 &amp; 17 Seater Force Urbania luxury vans in Pune (@ ₹32/km). Perfect for corporate delegations, VIP airport transfers, Ashtavinayak Darshan, and weekend trips to Mahabaleshwar, Lonavala &amp; Goa.
              </p>
              <div className="d-flex gap-3 flex-wrap mb-3">
                <button
                  type="button"
                  className="btn btn-lg fw-bold text-white open-booking-popup-btn"
                  data-vehicle="17 Seater Force Urbania (₹32/km)"
                  data-ac="AC"
                  data-place="Force Urbania On Rent in Pune"
                  style={{ backgroundColor: '#ff7700' }}
                >
                  <i className="fas fa-calendar-check me-2"></i>Book Urbania Now
                </button>
                <a
                  href="https://wa.me/917875774499?text=Hello%20Shree%20Travels%2C%20I%20want%20to%20book%20Force%20Urbania%20On%20Rent%20in%20Pune%20%40%20%E2%82%B932%2Fkm."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg fw-bold text-white"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <i className="fab fa-whatsapp me-2"></i>WhatsApp +91 78757 74499
                </a>
                <a href="tel:+917620411277" className="btn btn-lg fw-bold border-2" style={{ borderColor: 'white', color: 'white' }}>
                  <i className="fas fa-phone me-2"></i>Call +91 76204 11277
                </a>
              </div>
              <div className="small text-light opacity-75">
                <strong>24/7 Dispatch Numbers:</strong> +91 7620411277 | +91 7875774499 | +91 9860256019 | +91 9145411005
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative overflow-hidden rounded-4 shadow-lg">
                <img 
                  src="/img/Keyword Based Image/Keyword Based Image-16.jpg" 
                  alt="Force Urbania On Rent in Pune - 13 and 17 Seater Luxury AC Van" 
                  className="img-fluid w-100 d-block" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Why Choose Our <span style={{ color: '#ff7700' }}>Force Urbania</span>?</h2>
            <p className="text-muted max-w-75 mx-auto">Premium comfort and reliability for every journey starting @ ₹32/km</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="vehicle-spec">
                <i className="fas fa-chair feature-icon"></i>
                <h5>10, 13 &amp; 17 Seater</h5>
                <p>Individual aircraft-style recliner seats with high headroom</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="vehicle-spec">
                <i className="fas fa-wind feature-icon"></i>
                <h5>Triple-Zone AC Vents</h5>
                <p>Dedicated personal AC vents &amp; USB charging on every row</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="vehicle-spec">
                <i className="fas fa-person-hiking feature-icon"></i>
                <h5>VIP Chauffeurs</h5>
                <p>Uniformed, highway-certified &amp; courteous drivers</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="vehicle-spec">
                <i className="fas fa-wallet feature-icon"></i>
                <h5>Flat ₹32/km Rate</h5>
                <p>Official Packages rate with zero hidden charges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior & Exterior Photo Gallery */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold h3">Force Urbania Exterior &amp; <span style={{ color: '#ff7700' }}>Luxury Cabin Gallery</span></h2>
            <p className="text-muted">Actual photos of our Pune Force Urbania fleet and Maharaja recliner interiors</p>
          </div>
          <div className="row g-4">
            {[
              { src: '/img/Keyword Based Image/Keyword Based Image-39.jpg', label: 'Force Urbania Luxury Mini Bus' },
              { src: '/img/Keyword Based Image/Keyword Based Image-44.jpg', label: 'Pune to Mahabaleshwar Urbania' },
              { src: '/img/Keyword Based Image/comfort-1.jpeg', label: 'White Leather Recliner Cabin & LED TV' },
              { src: '/img/Keyword Based Image/comfort-2.jpeg', label: 'Ambient Roof Lighting & Wide Aisle' }
            ].map((item, idx) => (
              <div className="col-sm-6 col-lg-3" key={idx}>
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img src={item.src} alt={item.label} className="img-fluid w-100 d-block" loading="lazy" />
                  </div>
                  <div className="card-body p-3 text-center">
                    <p className="small fw-bold mb-0">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4">Premium <span style={{ color: '#ff7700' }}>Amenities</span> in Force Urbania</h2>
          <p className="text-muted mb-4">Our Force Urbania vehicles come equipped with:</p>
          
          <div className="row g-3 mb-5">
            <div className="col-md-4">
              <span className="amenity-badge"><i className="fas fa-wind"></i>Air Conditioning</span><br/>
              <span className="amenity-badge"><i className="fas fa-wifi"></i>USB Charging</span><br/>
              <span className="amenity-badge"><i className="fas fa-shield"></i>Dual Airbags &amp; ESP</span>
            </div>
            <div className="col-md-4">
              <span className="amenity-badge"><i className="fas fa-music"></i>Touchscreen Audio</span><br/>
              <span className="amenity-badge"><i className="fas fa-camera"></i>Panoramic Windows</span><br/>
              <span className="amenity-badge"><i className="fas fa-first-aid"></i>First Aid Kit</span>
            </div>
            <div className="col-md-4">
              <span className="amenity-badge"><i className="fas fa-road"></i>ABS + EBD Disc Brakes</span><br/>
              <span className="amenity-badge"><i className="fas fa-car"></i>Hill Hold Assist</span><br/>
              <span className="amenity-badge"><i className="fas fa-star"></i>Reclining Captain Seats</span>
            </div>
          </div>

          <div className="highlight-box">
            <h5><i className="fas fa-exclamation-circle me-2" style={{ color: '#ff7700' }}></i>Perfect For:</h5>
            <p className="mb-0">Corporate meetings, family vacations, wedding ceremonies, Mumbai &amp; Pune airport transfers, Ashtavinayak Darshan, and weekend getaways across Maharashtra.</p>
          </div>
        </div>
      </section>

      {/* Usage & Pricing */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">Force Urbania Rental <span style={{ color: '#ff7700' }}>Official Packages</span></h2>
          
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-3">Local 8 Hrs / 80 KM</h5>
                  <p className="text-muted small mb-3">Within Pune &amp; PCMC city limits</p>
                  <p className="mb-2"><strong>13 Seater Urbania:</strong> ₹6,000</p>
                  <p className="mb-2"><strong>17 Seater Urbania:</strong> ₹7,000</p>
                  <p className="mb-2"><strong>Extra KM Rate:</strong> ₹32/km</p>
                  <p style={{ color: '#ff7700', fontSize: '1.2rem', fontWeight: '700' }}>From ₹6,000</p>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-warning fw-bold open-booking-popup-btn"
                    data-vehicle="13 Seater Force Urbania (₹32/km)"
                    data-ac="AC"
                    data-place="Pune Local 8 Hrs / 80 KM"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 border-top border-warning" style={{ borderTopWidth: '3px !important' }}>
                <div className="card-body">
                  <h5 className="fw-bold mb-3">Outstation (300 KM/Day)</h5>
                  <p className="text-muted small mb-3">Full-day outstation package</p>
                  <p className="mb-2"><strong>13 Seater (300 KM):</strong> ₹9,600</p>
                  <p className="mb-2"><strong>17 Seater (300 KM):</strong> ₹11,200</p>
                  <p className="mb-2"><strong>Per KM Tariff:</strong> ₹32/km</p>
                  <p style={{ color: '#ff7700', fontSize: '1.2rem', fontWeight: '700' }}>@ ₹32/km</p>
                  <button
                    type="button"
                    className="btn btn-sm fw-bold text-white open-booking-popup-btn"
                    data-vehicle="17 Seater Force Urbania (₹32/km)"
                    data-ac="AC"
                    data-place="Outstation 300 KM/Day"
                    style={{ backgroundColor: '#ff7700' }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-3">Popular Fixed Packages</h5>
                  <p className="text-muted small mb-3">All-inclusive route packages</p>
                  <p className="mb-2"><strong>Mumbai / Mahabaleshwar (13S):</strong> ₹12,500</p>
                  <p className="mb-2"><strong>Mumbai / Mahabaleshwar (17S):</strong> ₹14,500</p>
                  <p className="mb-2"><strong>Shirdi Darshan (13S / 17S):</strong> ₹11,500 / ₹13,500</p>
                  <p style={{ color: '#ff7700', fontSize: '1.2rem', fontWeight: '700' }}>₹32/km</p>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-warning fw-bold open-booking-popup-btn"
                    data-vehicle="17 Seater Force Urbania (₹32/km)"
                    data-ac="AC"
                    data-place="Mumbai / Mahabaleshwar / Shirdi"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="highlight-box">
            <p className="mb-0">
              <strong>Pricing Includes:</strong> Commercial insurance, GPS tracking, and 24/7 customer support.
              <br/><strong>Not Included:</strong> Highway Fastag tolls, parking fees, and state permits (payable at actuals).
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4">Force Urbania Rental Available in Pune <span style={{ color: '#ff7700' }}>Locations</span></h2>
          <p className="text-muted mb-4">We provide prompt door-to-door pickup and drop services across all major areas:</p>
          
          <div className="d-flex flex-wrap gap-2 mb-4">
            {puneAreas.map((area, idx) => (
              <span key={idx} className="px-3 py-2 rounded-pill fw-semibold text-white" style={{ backgroundColor: '#ff7700' }}>
                <i className="fas fa-map-marker-alt me-2"></i>{area}
              </span>
            ))}
          </div>

          <p className="text-muted">
            <strong>Outstation Routes:</strong> Mumbai, Lonavala, Khandala, Nashik, Aurangabad, Shirdi, Belgaum, Goa, Mahabaleshwar, Panchgani.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">How Force Urbania <span style={{ color: '#ff7700' }}>Compares</span></h2>
          
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead style={{ backgroundColor: '#ff7700', color: 'white' }}>
                <tr>
                  <th>Feature</th>
                  <th>Force Urbania</th>
                  <th>Standard Tempo Traveller</th>
                  <th>Mini Bus</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Seating Capacity</strong></td>
                  <td><span className="badge bg-success">10, 13 &amp; 17 Seater</span></td>
                  <td><span className="badge bg-secondary">13 to 26 Seater</span></td>
                  <td><span className="badge bg-info">20 to 25 Seater</span></td>
                  <td className="text-center">
                    <button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" data-vehicle="17 Seater Force Urbania (₹32/km)" data-ac="AC" style={{ backgroundColor: '#ff7700' }}>Book Now</button>
                  </td>
                </tr>
                <tr>
                  <td><strong>Per KM Rate</strong></td>
                  <td><span className="badge bg-success">₹32/km</span></td>
                  <td><span className="badge bg-secondary">₹22–25/km</span></td>
                  <td><span className="badge bg-info">₹28–38/km</span></td>
                  <td className="text-center">
                    <button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" data-vehicle="13 Seater Force Urbania (₹32/km)" data-ac="AC" style={{ backgroundColor: '#ff7700' }}>Book Now</button>
                  </td>
                </tr>
                <tr>
                  <td><strong>Best For</strong></td>
                  <td>VIPs, Executives, Luxury Family Trips</td>
                  <td>Budget Group Tours</td>
                  <td>Medium Group Events</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" data-vehicle="17 Seater Force Urbania (₹32/km)" data-ac="AC" style={{ backgroundColor: '#ff7700' }}>Book Now</button>
                  </td>
                </tr>
                <tr>
                  <td><strong>Safety (Airbags + ESP)</strong></td>
                  <td><i className="fas fa-check" style={{ color: 'green' }}></i> Dual Airbags + ESP</td>
                  <td><i className="fas fa-check" style={{ color: 'green' }}></i> ABS Brakes</td>
                  <td><i className="fas fa-check" style={{ color: 'green' }}></i> ABS Brakes</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" data-vehicle="17 Seater Force Urbania (₹32/km)" data-ac="AC" style={{ backgroundColor: '#ff7700' }}>Book Now</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Internal Linking - Related Vehicles */}
      <section className="py-5 bg-white border-top">
        <div className="container">
          <h2 className="fw-bold mb-4">Our Other <span style={{ color: '#ff7700' }}>Vehicle Options</span></h2>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">
                    <i className="fas fa-bus-alt me-2" style={{ color: '#ff7700' }}></i>
                    Bus on Rent
                  </h5>
                  <p className="text-muted small mb-3">32-50 seater luxury buses for large groups</p>
                  <Link to="/bus-rental-pune" className="btn btn-sm btn-outline-warning fw-bold">
                    Explore <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">
                    <i className="fas fa-shuttle-van me-2" style={{ color: '#ff7700' }}></i>
                    Tempo Traveller
                  </h5>
                  <p className="text-muted small mb-3">13-26 seater AC tempo travellers</p>
                  <Link to="/tempo-traveller-seater-hire-pune" className="btn btn-sm btn-outline-warning fw-bold">
                    Explore <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">
                    <i className="fas fa-users me-2" style={{ color: '#ff7700' }}></i>
                    13-20 Seater
                  </h5>
                  <p className="text-muted small mb-3">Affordable group vehicle rentals</p>
                  <Link to="/13-seater-on-rent-pune" className="btn btn-sm btn-outline-warning fw-bold">
                    Explore <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-urbania">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-2">Ready to Book Your Force Urbania?</h2>
              <p className="lead mb-0">Get instant quotes and book your vehicle in just 2 minutes</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/book-taxi" className="btn btn-lg fw-bold text-dark px-5" style={{ backgroundColor: 'white' }}>
                Book Now <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4">Frequently Asked Questions About <span style={{ color: '#ff7700' }}>Force Urbania Rental</span></h2>
          
          <div className="accordion" id="forceUrbaniaFAQ">
            <div className="accordion-item border-0 mb-3 rounded-2 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  What is the seating capacity of Force Urbania?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#forceUrbaniaFAQ">
                <div className="accordion-body">
                  Force Urbania typically seats 10 to 13 passengers comfortably with premium seating arrangements and ample legroom for each passenger.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0 mb-3 rounded-2 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Is the Force Urbania suitable for airport transfers?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#forceUrbaniaFAQ">
                <div className="accordion-body">
                  Yes! Force Urbania is excellent for airport transfers. It's a professional luxury vehicle with air-conditioning, experienced drivers, and punctual service - perfect for airport pickups and drop-offs in Pune and surrounding areas.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0 mb-3 rounded-2 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  What's included in the rental price?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#forceUrbaniaFAQ">
                <div className="accordion-body">
                  Our pricing includes driver, fuel, basic insurance, AC, and 24/7 customer support. Toll charges and parking fees are applicable separately.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0 rounded-2 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                  Can we book Force Urbania for outstation trips?
                </button>
              </h2>
              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#forceUrbaniaFAQ">
                <div className="accordion-body">
                  Absolutely! We provide Force Urbania rental for outstation trips to Mumbai, Lonavala, Nashik, Aurangabad, Shirdi, and other destinations from Pune.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForceUrbania;