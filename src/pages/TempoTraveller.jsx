import React from 'react';
import { Link } from 'react-router-dom';
import { FaCoins, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../components/SEO';

const TempoTraveller = () => {
  const tempoSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    name: 'Tempo Traveller On Rent in Pune',
    description: 'Affordable 13, 14, 17, 20 & 26 seater Tempo Traveller On Rent in Pune starting at ₹22/km',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '5500',
      highPrice: '18000',
      availability: 'https://schema.org/InStock',
      url: 'https://shreetravels.in/tempo-traveller-seater-hire-pune'
    }
  };

  const tempoVariants = [
    {
      seater: '13 Seater',
      capacity: '13 passengers',
      startingRate: 'Starting at ₹22/km (Non-AC) | ₹25/km (AC)',
      route: '/13-seater-on-rent-pune',
      image: '/img/Keyword Based Image/Keyword Based Image-01.jpg',
      bestFor: 'Family trips, small tours',
      features: ['AC Pushback Seats', 'Music System', 'Power Steering', 'Wide Leg Space']
    },
    {
      seater: '14 Seater',
      capacity: '14 passengers',
      startingRate: 'Starting at ₹22/km (Non-AC) | ₹25/km (AC)',
      route: '/14-seater-on-rent-pune',
      image: '/img/Keyword Based Image/Keyword Based Image-05.jpg',
      bestFor: 'Weddings, medium groups',
      features: ['AC with Heater', 'LCD Display', 'Recliner Seats', 'ABS Brakes']
    },
    {
      seater: '17 Seater',
      capacity: '17 passengers',
      startingRate: 'Starting at ₹22/km (Non-AC) | ₹25/km (AC)',
      route: '/17-seater-on-rent-pune',
      image: '/img/Keyword Based Image/Keyword Based Image-06.jpg',
      bestFor: 'Large groups, tours',
      features: ['Full AC System', 'Recliner Seats', 'Music System', 'LCD Display']
    },
    {
      seater: '20 Seater',
      capacity: '20 passengers',
      startingRate: 'Starting at ₹28/km (AC & Non-AC)',
      route: '/20-seater-bus-rental-pune',
      image: '/img/Keyword Based Image/Keyword Based Image-08.jpg',
      bestFor: 'Large events, charters',
      features: ['Premium AC', 'Push Back Seats', 'Music & LCD', 'Power Windows']
    }
  ];

  return (
    <>
      <SEO
        title="Tempo Traveller On Rent in Pune Starting at ₹22/km | 13, 17, 20 & 26 Seater Hire"
        description="Book Tempo Traveller On Rent in Pune starting at ₹22/km (Non-AC) & ₹25/km (AC). Verified 13, 14, 17, 20 & 26 seater Maharaja Tempo Travellers with experienced drivers. Call +91 7620411277 or WhatsApp +91 78757 74499."
        keywords="Tempo Traveller On Rent in Pune, Tempo Traveller Hire in Pune, 13 Seater Tempo Traveller On Rent in Pune, 17 Seater Tempo Traveller On Rent in Pune, 20 Seater Bus On Rent in Pune, 26 Seater Tempo Traveller On Rent in Pune, Luxury Tempo Traveller On Rent in Pune"
        path="/tempo-traveller-seater-hire-pune"
        image="/img/Keyword Based Image/Keyword Based Image-01.jpg"
        schema={tempoSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Vehicles', url: '/our-fleet' },
          { name: 'Tempo Traveller On Rent in Pune', url: '/tempo-traveller-seater-hire-pune' }
        ]}
      />

      <style>{`
        .tempo-hero {
          background: linear-gradient(135deg, #1a202c 0%, #0f172a 100%);
          color: white;
          padding: 60px 0;
        }

        .tempo-card {
          background: white;
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .tempo-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.2);
        }

        .tempo-card img {
          width: 100%;
          height: auto;
          aspect-ratio: 1280 / 826;
          display: block;
        }

        .tempo-badge {
          display: inline-block;
          background: #ff7700;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 2rem;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .tempo-card-body {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .tempo-card-body h5 {
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .tempo-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 1rem 0;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .tempo-rate {
          color: #ff7700;
          font-weight: 700;
          font-size: 0.95rem;
        }

        .tempo-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin: 1rem 0;
        }

        .tempo-feature {
          font-size: 0.85rem;
          color: #666;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .tempo-feature i {
          color: #ff7700;
          width: 16px;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .comparison-box {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 0.75rem;
          text-align: center;
          border-top: 3px solid #ff7700;
        }

        .comparison-box h6 {
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .why-choose {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .why-choose-card {
          display: flex;
          gap: 1.5rem;
        }

        .why-choose-icon {
          font-size: 2rem;
          color: #ff7700;
          min-width: 50px;
        }

        @media (max-width: 768px) {
          .tempo-hero {
            padding: 40px 0;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="tempo-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="badge px-3 py-2 rounded-pill mb-3 fw-bold" style={{ backgroundColor: '#ff7700', color: '#fff' }}>
                Starting at ₹22/km (Non-AC) & ₹25/km (AC)
              </span>
              <h1 className="display-5 fw-bold mb-3 text-white">
                Tempo Traveller On Rent in Pune
              </h1>
              <p className="lead mb-4">
                Book verified 13, 14, 17, 20 & 26 seater AC and Non-AC Tempo Travellers in Pune. Ideal for family pilgrimages, corporate offsites, weddings, and weekend tours to Mahabaleshwar, Lonavala, Shirdi & Konkan.
              </p>
              <div className="d-flex gap-3 flex-wrap mb-3">
                <a href="tel:+917620411277" className="btn btn-lg fw-bold text-white" style={{ backgroundColor: '#ff7700' }}>
                  <i className="fas fa-phone me-2"></i>
                  <span className="d-none d-sm-inline">Call +91 76204 11277</span>
                  <span className="d-inline d-sm-none">Call Now</span>
                </a>
                <a
                  href="https://wa.me/917875774499?text=Hello%20Shree%20Travels%2C%20I%20want%20to%20book%20Tempo%20Traveller%20On%20Rent%20in%20Pune."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg fw-bold text-white"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <i className="fab fa-whatsapp me-2"></i>
                  <span className="d-none d-sm-inline">WhatsApp +91 78757 74499</span>
                  <span className="d-inline d-sm-none">WhatsApp</span>
                </a>
                <button
                  type="button"
                  className="btn btn-lg fw-bold border-2 open-booking-popup-btn"
                  data-vehicle="17 Seater Tempo Traveller"
                  data-ac="AC"
                  data-place="Tempo Traveller On Rent in Pune"
                  style={{ borderColor: 'white', color: 'white', backgroundColor: 'transparent' }}
                >
                  Instant Enquiry
                </button>
              </div>
              <div className="small text-light opacity-75">
                <strong>24/7 Dispatch Desk:</strong> <a href="tel:+917620411277" className="text-white text-decoration-none me-2">+91 76204 11277 (Call)</a> | <a href="https://wa.me/917875774499" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none ms-2">WhatsApp: +91 78757 74499</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative overflow-hidden rounded-4 shadow-lg">
                <img 
                  src="/img/Keyword Based Image/Keyword Based Image-01.jpg" 
                  alt="Tempo Traveller On Rent in Pune - 13, 17, 20, 26 Seater AC Group Transport" 
                  className="img-fluid w-100 d-block" 
                />
                <div className="fleet-verified-tag">
                  <div className="fleet-tag-pill-top">
                    <FaStar className="me-1 text-warning" size={9} />
                    <span>OFFICIAL DISPATCH • 24/7 FLEET</span>
                  </div>
                  <div className="fleet-tag-title-bottom">
                    <FaMapMarkerAlt className="me-1 text-warning flex-shrink-0" size={11} />
                    <span className="text-truncate">
                      13 TO 26 SEATER TEMPO TRAVELLER • PUNE FLEET
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tempo Variants Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">Choose Your Perfect Tempo <span style={{ color: '#ff7700' }}>Traveller</span></h2>
            <p className="text-muted">Available in 13, 14, 17, 20, and 26 seater options for every group size</p>
          </div>

          <div className="row g-4">
            {tempoVariants.map((tempo, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="tempo-card">
                  <div className="position-relative overflow-hidden">
                    <img 
                      src={tempo.image}
                      alt={`${tempo.seater} Tempo Traveller On Rent in Pune - ${tempo.bestFor}`}
                      loading="lazy"
                    />
                    {tempo.image.includes('Keyword Based Image') && (
                      <div className="fleet-gallery-overlay-tag">
                        <FaMapMarkerAlt className="text-warning me-1 flex-shrink-0" size={10} />
                        <span className="text-truncate">{tempo.seater.toUpperCase()} • PUNE FLEET</span>
                      </div>
                    )}
                  </div>
                  <div className="tempo-card-body">
                    <div className="tempo-badge">{tempo.seater}</div>
                    <p className="text-muted small mb-2">{tempo.capacity}</p>
                    <p className="small mb-2"><strong>Best for:</strong> {tempo.bestFor}</p>
                    
                    <div className="tempo-features">
                      {tempo.features.slice(0, 2).map((feature, i) => (
                        <div key={i} className="tempo-feature">
                          <i className="fas fa-check-circle"></i>
                          {feature}
                        </div>
                      ))}
                      {tempo.features.slice(2, 4).map((feature, i) => (
                        <div key={i + 2} className="tempo-feature">
                          <i className="fas fa-check-circle"></i>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="tempo-meta mt-auto">
                      <span className="tempo-rate">{tempo.startingRate}</span>
                    </div>

                    <div className="d-grid gap-2 mt-3">
                      <Link to={tempo.route} className="btn btn-sm fw-bold text-white" style={{ backgroundColor: '#ff7700' }}>
                        View Details
                      </Link>
                      <button type="button" className="btn btn-sm btn-outline-warning fw-bold open-booking-popup-btn" data-vehicle={`${tempo.seater} Tempo Traveller`} data-ac="AC" data-place="Tempo Traveller On Rent in Pune">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4">Official Tempo Traveller <span style={{ color: '#ff7700' }}>Tariff Table</span></h2>

          <div className="table-responsive">
            <table className="table table-hover text-center align-middle">
              <thead style={{ backgroundColor: '#0f172a', color: 'white' }}>
                <tr>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>Seater Type</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>Per KM Rate</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>Local 8Hr/80KM</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>300 KM Outstation Pkg</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>Mumbai / Mahabaleshwar</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>Best For</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>13 Seater Tempo Traveller (Non-AC / AC)</strong></td>
                  <td className="fw-bold" style={{ color: '#ff7700' }}>₹22/km | ₹25/km</td>
                  <td>₹5,000 / ₹5,500</td>
                  <td>₹6,600 | ₹7,500</td>
                  <td>₹9,000 – ₹11,000</td>
                  <td>Family trips &amp; Shirdi</td>
                  <td><button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: '#ff7700' }} data-vehicle="13 Seater Tempo Traveller" data-ac="AC" data-place="Pune">Book Now</button></td>
                </tr>
                <tr>
                  <td><strong>17 Seater Tempo Traveller (Non-AC / AC)</strong></td>
                  <td className="fw-bold" style={{ color: '#ff7700' }}>₹22/km | ₹25/km</td>
                  <td>₹5,000 / ₹5,500</td>
                  <td>₹6,600 | ₹7,500</td>
                  <td>₹9,000 – ₹11,000</td>
                  <td>Large family &amp; friends</td>
                  <td><button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: '#ff7700' }} data-vehicle="17 Seater Tempo Traveller" data-ac="AC" data-place="Pune">Book Now</button></td>
                </tr>
                <tr>
                  <td><strong>20 Seater Tempo Traveller (Non-AC / AC)</strong></td>
                  <td className="fw-bold" style={{ color: '#ff7700' }}>₹25/km | ₹28/km</td>
                  <td>₹6,000 / ₹6,500</td>
                  <td>₹7,500 | ₹8,400</td>
                  <td>₹10,000 – ₹13,000</td>
                  <td>Corporate &amp; Outings</td>
                  <td><button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: '#ff7700' }} data-vehicle="20 Seater Tempo Traveller" data-ac="AC" data-place="Pune">Book Now</button></td>
                </tr>
                <tr>
                  <td><strong>26 Seater Tempo Traveller (Non-AC / AC)</strong></td>
                  <td className="fw-bold" style={{ color: '#ff7700' }}>₹32/km | ₹37/km</td>
                  <td>₹7,000 / ₹8,000</td>
                  <td>₹9,600 | ₹11,100</td>
                  <td>₹12,000 – ₹17,000</td>
                  <td>Baraat &amp; Pilgrimages</td>
                  <td><button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: '#ff7700' }} data-vehicle="26 Seater Tempo Traveller" data-ac="AC" data-place="Pune">Book Now</button></td>
                </tr>
                <tr>
                  <td><strong>Luxury Force Urbania (10, 13 &amp; 17S)</strong></td>
                  <td className="fw-bold" style={{ color: '#ff7700' }}>₹32/km (Flat)</td>
                  <td>₹8,000</td>
                  <td>₹9,600 (300 km)</td>
                  <td>₹12,000 – ₹14,000</td>
                  <td>VIP &amp; Luxury Travel</td>
                  <td><button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: '#ff7700' }} data-vehicle="17 Seater Force Urbania (@ ₹32/km)" data-ac="AC" data-place="Pune">Book Now</button></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Important Fare Rules & Guidelines Notice */}
          <div className="mt-4 p-3 p-md-4 rounded-4 border shadow-sm" style={{ backgroundColor: '#fffdfa', borderColor: '#ffd8a8' }}>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2 pb-2 border-bottom">
              <span className="badge rounded-pill px-3 py-2 fw-bold text-white fs-6" style={{ backgroundColor: '#dc2626' }}>
                <i className="fas fa-exclamation-triangle me-2"></i>Please note that toll, parking, and border tax charges are extra
              </span>
              <span className="text-muted small fw-semibold">
                Official Shree Travels Fare Card Rules &amp; Guidelines (04/02/2026)
              </span>
            </div>
            <div className="row g-2 pt-1 text-dark small" style={{ lineHeight: '1.7' }}>
              <div className="col-md-6">
                <ul className="list-unstyled mb-0 d-flex flex-column gap-1">
                  <li><strong>• Toll, Parking &amp; Taxes:</strong> Full toll, parking, passenger tax, GST, and the cost of special permits are to be paid by the party.</li>
                  <li><strong>• Outstation Distance:</strong> For an outstation trip, the minimum daily billing distance is 300 km; special fixed packages apply for Mumbai, Shirdi, and Mahabaleshwar routes.</li>
                  <li><strong>• Force Urbania:</strong> Force Urbania (10, 13 &amp; 17 Seater) is charged at flat <strong>₹32/km</strong> for outstation travel.</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled mb-0 d-flex flex-column gap-1">
                  <li><strong>• Service Hours:</strong> Bus service is available from 6:00 AM to 12:00 midnight. Extra hours incur additional charges.</li>
                  <li><strong>• Advance Booking:</strong> Advance booking requires 50% payment at least 2 days before the trip.</li>
                  <li><strong>• Duty Calculation:</strong> Time &amp; KM calculation will be office to office. Driver food charges ₹300/- local &amp; ₹400/- outstation duties.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">Why Choose Shree Travels <span style={{ color: '#ff7700' }}>Tempo Travellers</span>?</h2>

          <div className="why-choose">
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className="fas fa-award"></i>
              </div>
              <div>
                <h5 className="fw-bold">30+ Years Experience</h5>
                <p className="text-muted small">Trusted by 500+ companies and thousands of families across Pune for reliable group transport.</p>
              </div>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className="fas fa-rupee-sign"></i>
              </div>
              <div>
                <h5 className="fw-bold">Best Rates Guaranteed</h5>
                <p className="text-muted small">Competitive pricing with transparent billing. No hidden charges, no surprises. Price match guarantee.</p>
              </div>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div>
                <h5 className="fw-bold">Well-Maintained Fleet</h5>
                <p className="text-muted small">All vehicles regularly serviced, sanitized, and inspected to highest safety and comfort standards.</p>
              </div>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className="fas fa-person-hiking"></i>
              </div>
              <div>
                <h5 className="fw-bold">Professional Drivers</h5>
                <p className="text-muted small">Trained drivers with 8-10+ years experience, GPS navigation knowledge, and excellent customer service.</p>
              </div>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className="fas fa-headset"></i>
              </div>
              <div>
                <h5 className="fw-bold">24/7 Customer Support</h5>
                <p className="text-muted small">Round-the-clock booking assistance, live tracking, emergency support during your trip.</p>
              </div>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h5 className="fw-bold">On-Time Service</h5>
                <p className="text-muted small">Punctual pickup and drop-off guaranteed. We respect your time and never keep you waiting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4">Tempo Traveller Service <span style={{ color: '#ff7700' }}>Locations</span></h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="bg-light p-4 rounded-3">
                <h5 className="fw-bold mb-3">
                  <i className="fas fa-city me-2" style={{ color: '#ff7700' }}></i>
                  Pune City Coverage
                </h5>
                <p className="text-muted small mb-0">
                  Available across Hinjewadi, Kharadi, Wakad, Baner, Koregaon Park, Magarpatta City, Viman Nagar, Hadapsar, Shivaji Nagar, Pimpri-Chinchwad, Aundh, Swargate, and surrounding areas.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="bg-light p-4 rounded-3">
                <h5 className="fw-bold mb-3">
                  <i className="fas fa-road me-2" style={{ color: '#ff7700' }}></i>
                  Outstation Destinations
                </h5>
                <p className="text-muted small mb-0">
                  Mumbai, Aurangabad, Nashik, Lonavala, Khandala, Shirdi, Belgaum, Indore, Goa, Mahabaleshwar, Panchgani, and all major outstation locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">Perfect Tempo Traveller <span style={{ color: '#ff7700' }}>Use Cases</span></h2>

          <div className="comparison-grid">
            <div className="comparison-box">
              <i className="fas fa-map-pin fa-2x mb-2" style={{ color: '#ff7700' }}></i>
              <h6>Group Tours</h6>
              <p className="text-muted small">Weekend trips to Lonavala, Nashik, Aurangabad</p>
            </div>
            <div className="comparison-box">
              <i className="fas fa-ring fa-2x mb-2" style={{ color: '#ff7700' }}></i>
              <h6>Wedding Transport</h6>
              <p className="text-muted small">Guest transport for ceremonies</p>
            </div>
            <div className="comparison-box">
              <i className="fas fa-briefcase fa-2x mb-2" style={{ color: '#ff7700' }}></i>
              <h6>Corporate Events</h6>
              <p className="text-muted small">Team outings and company celebrations</p>
            </div>
            <div className="comparison-box">
              <i className="fas fa-graduation-cap fa-2x mb-2" style={{ color: '#ff7700' }}></i>
              <h6>School Trips</h6>
              <p className="text-muted small">Educational tours and picnics</p>
            </div>
            <div className="comparison-box">
              <i className="fas fa-users fa-2x mb-2" style={{ color: '#ff7700' }}></i>
              <h6>Family Reunions</h6>
              <p className="text-muted small">Extended family celebrations</p>
            </div>
            <div className="comparison-box">
              <i className="fas fa-place-of-worship fa-2x mb-2" style={{ color: '#ff7700' }}></i>
              <h6>Religious Tours</h6>
              <p className="text-muted small">Pilgrimages to Shirdi, Tirupati</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Vehicles */}
      <section className="py-5 bg-white border-top">
        <div className="container">
          <h2 className="fw-bold mb-4">Explore Our Complete <span style={{ color: '#ff7700' }}>Fleet</span></h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">
                    <i className="fas fa-car me-2" style={{ color: '#ff7700' }}></i>
                    Force Urbania
                  </h5>
                  <p className="text-muted small mb-3">Luxury 7-8 seater premium vans for executive travel</p>
                  <Link to="/force-urbania-on-rent-pune" className="btn btn-sm btn-outline-warning fw-bold">
                    Explore <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">
                    <i className="fas fa-bus me-2" style={{ color: '#ff7700' }}></i>
                    Luxury Bus
                  </h5>
                  <p className="text-muted small mb-3">Large 32-50 seater buses for major events</p>
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
                    View All Fleet
                  </h5>
                  <p className="text-muted small mb-3">Complete overview of all available vehicles</p>
                  <Link to="/our-fleet" className="btn btn-sm btn-outline-warning fw-bold">
                    Explore <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: '#ff7700' }} className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-2 text-white">Ready to Book Your Tempo Traveller?</h2>
              <p className="lead text-white mb-0">Quick booking, instant confirmation, best rates guaranteed</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/book-taxi" className="btn btn-lg fw-bold px-5" style={{ backgroundColor: 'white', color: '#ff7700' }}>
                Book Now <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TempoTraveller;