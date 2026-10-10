import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../components/SEO';

const SeaterCars = () => {
  const seaterSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    name: '13 Seater Tempo Traveller On Rent in Pune',
    description: 'Affordable 13, 14, 17, 20 seater tempo traveller and group vehicle rentals in Pune starting @ ₹22/km',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '5500',
      highPrice: '15000',
      availability: 'https://schema.org/InStock',
      url: 'https://shreetravels.in/13-seater-on-rent-pune'
    }
  };

  const seaterTypes = [
    {
      seater: '13 Seater',
      capacity: '13 Passengers',
      features: ['AC Pushback Seats', 'Music System', 'Wide Leg Space', 'Power Steering'],
      localRate: '₹5,500',
      fullDayRate: '₹7,200 (Non-AC) | ₹8,100 (AC)',
      outstationRate: '₹22/km (Non-AC) | ₹25/km (AC)',
      image: '/img/Keyword Based Image/Keyword Based Image-01.jpg',
      bestFor: 'Family trips, small tours, office outings'
    },
    {
      seater: '14 / 15 Seater',
      capacity: '14-15 Passengers',
      features: ['AC with Heater', 'LCD Display', 'Music System', 'ABS Brakes'],
      localRate: '₹5,500',
      fullDayRate: '₹9,000 (AC)',
      outstationRate: '₹25–30/km (AC)',
      image: '/img/Keyword Based Image/Keyword Based Image-05.jpg',
      bestFor: 'Medium groups, wedding transport, school trips'
    },
    {
      seater: '17 Seater',
      capacity: '17 Passengers',
      features: ['Full AC System', 'Recliner Seats', 'Music System', 'LCD Display'],
      localRate: '₹5,500',
      fullDayRate: '₹7,500 (Non-AC) | ₹9,600 (AC)',
      outstationRate: '₹22/km (Non-AC) | ₹25/km (AC)',
      image: '/img/Keyword Based Image/Keyword Based Image-06.jpg',
      bestFor: 'Large groups, tour groups, corporate events'
    },
    {
      seater: '20 Seater',
      capacity: '20 Passengers',
      features: ['Premium AC', 'Push Back Seats', 'Music & LCD', 'Power Windows'],
      localRate: '₹5,500–6,000',
      fullDayRate: '₹8,100 (Non-AC) | ₹10,200 (AC)',
      outstationRate: '₹28/km (Non-AC & AC)',
      image: '/img/Keyword Based Image/Keyword Based Image-08.jpg',
      bestFor: 'Large family groups, charter tours, events'
    }
  ];

  return (
    <>
      <SEO
        title="13 Seater Tempo Traveller On Rent in Pune @ ₹22/km | 13–20 Seater Hire"
        description="Book 13 Seater Tempo Traveller On Rent in Pune starting @ ₹22/km (Non-AC) & ₹25/km (AC). Verified pushback seats, experienced drivers, local 8Hr/80KM @ ₹5,500. Call +91 7620411277 or WhatsApp +91 78757 74499."
        keywords="13 Seater Tempo Traveller On Rent in Pune, 13 seater on rent Pune, 14 seater tempo traveller Pune, 17 seater bus rental Pune, 20 seater on rent Pune, tempo traveller hire Pune"
        path="/13-seater-on-rent-pune"
        image="/img/Keyword Based Image/Keyword Based Image-01.jpg"
        schema={seaterSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Vehicles', url: '/our-fleet' },
          { name: '13 Seater Tempo Traveller On Rent in Pune', url: '/13-seater-on-rent-pune' }
        ]}
      />

      <style>{`
        .seater-hero {
          background: linear-gradient(135deg, #1a202c 0%, #0f172a 100%);
          color: white;
          padding: 60px 0;
        }

        .seater-card {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          height: 100%;
        }

        .seater-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        .seater-card img {
          width: 100%;
          height: auto;
          aspect-ratio: 1280 / 826;
          display: block;
        }

        .seater-badge {
          display: inline-block;
          background: #ff7700;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 2rem;
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 1rem 0;
        }

        .feature-list li {
          padding: 0.5rem 0;
          color: #555;
          font-size: 0.9rem;
        }

        .feature-list i {
          color: #ff7700;
          margin-right: 0.75rem;
          width: 20px;
        }

        .comparison-section {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          margin-top: 2rem;
        }

        .rate-box {
          background: linear-gradient(135deg, #fff9f0 0%, #ffe4cc 100%);
          padding: 1.5rem;
          border-radius: 0.75rem;
          margin: 1rem 0;
          border-left: 4px solid #ff7700;
        }

        .rate-box h6 {
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .rate-box p {
          color: #ff7700;
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0;
        }

        .info-box {
          background: #f0f8ff;
          border-left: 4px solid #ff7700;
          padding: 1.5rem;
          border-radius: 0.5rem;
          margin: 2rem 0;
        }

        @media (max-width: 768px) {
          .seater-hero {
            padding: 40px 0;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="seater-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="badge px-3 py-2 rounded-pill mb-3 fw-bold" style={{ backgroundColor: '#ff7700', color: '#fff' }}>
                Starting @ ₹22/km (Non-AC) & ₹25/km (AC)
              </span>
              <h1 className="display-5 fw-bold mb-3 text-white">
                13 Seater Tempo Traveller On Rent in Pune
              </h1>
              <p className="lead mb-4">
                Book our popular 13 Seater AC & Non-AC Tempo Traveller on rent in Pune (plus 14, 17, and 20 seater options) for family pilgrimages, weekend tours to Mahabaleshwar & Lonavala, and corporate outings.
              </p>
              <div className="d-flex gap-3 flex-wrap mb-3">
                <a href="tel:+917620411277" className="btn btn-lg fw-bold text-white" style={{ backgroundColor: '#ff7700' }}>
                  <i className="fas fa-phone me-2"></i>Call +91 76204 11277
                </a>
                <a
                  href="https://wa.me/917875774499?text=Hello%20Shree%20Travels%2C%20I%20want%20to%20book%2013%20Seater%20Tempo%20Traveller%20On%20Rent%20in%20Pune."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg fw-bold text-white"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <i className="fab fa-whatsapp me-2"></i>WhatsApp +91 78757 74499
                </a>
                <Link to="/book-taxi" className="btn btn-lg fw-bold border-2" style={{ borderColor: 'white', color: 'white' }}>
                  Book Online
                </Link>
              </div>
              <div className="small text-light opacity-75">
                <strong>24/7 Dispatch Desk:</strong> <a href="tel:+917620411277" className="text-white text-decoration-none me-2">+91 76204 11277</a> | <a href="https://wa.me/917875774499" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none ms-2">WhatsApp: +91 78757 74499</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative overflow-hidden rounded-4 shadow-lg">
                <img 
                  src="/img/Keyword Based Image/Keyword Based Image-01.jpg" 
                  alt="13 Seater Tempo Traveller On Rent in Pune - AC Pushback Seats" 
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
                      13 SEATER TEMPO TRAVELLER • PUNE FLEET
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">Choose Your Perfect <span style={{ color: '#ff7700' }}>Seater Vehicle</span></h2>
            <p className="text-muted">Select the size that best fits your group</p>
          </div>

          <div className="row g-4">
            {seaterTypes.map((type, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="seater-card">
                  <div className="position-relative overflow-hidden">
                    <img 
                      src={type.image}
                      alt={`${type.seater} Tempo Traveller On Rent in Pune`}
                      loading="lazy"
                    />
                    {type.image.includes('Keyword Based Image') && (
                      <div className="fleet-gallery-overlay-tag">
                        <FaMapMarkerAlt className="text-warning me-1 flex-shrink-0" size={10} />
                        <span className="text-truncate">{type.seater.toUpperCase()} • PUNE FLEET</span>
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="seater-badge">{type.seater}</div>
                    <p className="text-muted small mb-2">{type.capacity}</p>
                    
                    <h6 className="fw-bold mt-3 mb-2">Features:</h6>
                    <ul className="feature-list">
                      {type.features.map((feature, i) => (
                        <li key={i}>
                          <i className="fas fa-check-circle"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="rate-box mt-3">
                      <h6>8Hr / 80KM Local</h6>
                      <p>{type.localRate}</p>
                    </div>

                    <button type="button" className="btn btn-sm fw-bold text-white w-100 open-booking-popup-btn" style={{ backgroundColor: '#ff7700' }} data-vehicle={`${type.seater} Tempo Traveller`} data-ac="AC" data-place="13 Seater Tempo Traveller On Rent in Pune">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4">Transparent <span style={{ color: '#ff7700' }}>Pricing</span> for All Seater Types</h2>

          <div className="table-responsive">
            <table className="table table-hover text-center align-middle">
              <thead style={{ backgroundColor: '#0f172a', color: 'white' }}>
                <tr>
                  <th className="text-start text-white" style={{ backgroundColor: '#0f172a' }}>Vehicle Type</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>8Hr / 80KM Local</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>300 KM Outstation Pkg</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>Per KM Rate</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {seaterTypes.map((type, idx) => (
                  <tr key={idx}>
                    <td className="text-start fw-bold">{type.seater}</td>
                    <td>{type.localRate}</td>
                    <td>{type.fullDayRate}</td>
                    <td>{type.outstationRate}</td>
                    <td>
                      <button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: '#ff7700' }} data-vehicle={`${type.seater} Tempo Traveller`} data-ac="AC" data-place="Pune">
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="info-box mt-4">
            <h6 className="fw-bold mb-2">
              <i className="fas fa-check-circle me-2" style={{ color: '#ff7700' }}></i>
              What's Included:
            </h6>
            <ul className="mb-0" style={{ fontSize: '0.95rem' }}>
              <li>Professional driver with valid license</li>
              <li>Fuel and vehicle maintenance</li>
              <li>Basic insurance coverage</li>
              <li>Air conditioning and entertainment system</li>
              <li>24/7 customer support</li>
            </ul>
          </div>

          <div className="info-box bg-warning bg-opacity-10">
            <h6 className="fw-bold mb-2">
              <i className="fas fa-info-circle me-2" style={{ color: '#ff7700' }}></i>
              Not Included:
            </h6>
            <p className="mb-0" style={{ fontSize: '0.95rem' }}>
              Toll charges, parking fees, and meals are applicable as per actual consumption.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">Why Choose Shree for Seater <span style={{ color: '#ff7700' }}>Vehicles</span>?</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="d-flex gap-3">
                <div style={{ minWidth: '50px' }}>
                  <i className="fas fa-award fa-2x" style={{ color: '#ff7700' }}></i>
                </div>
                <div>
                  <h5 className="fw-bold">Experienced Drivers</h5>
                  <p className="text-muted small">Our drivers are trained professionals with 10+ years of driving experience and GPS navigation expertise.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-flex gap-3">
                <div style={{ minWidth: '50px' }}>
                  <i className="fas fa-rupee-sign fa-2x" style={{ color: '#ff7700' }}></i>
                </div>
                <div>
                  <h5 className="fw-bold">Best Rates Guaranteed</h5>
                  <p className="text-muted small">Competitive pricing with transparent billing - no hidden charges, no surprises at the end.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-flex gap-3">
                <div style={{ minWidth: '50px' }}>
                  <i className="fas fa-check-circle fa-2x" style={{ color: '#ff7700' }}></i>
                </div>
                <div>
                  <h5 className="fw-bold">Well-Maintained Fleet</h5>
                  <p className="text-muted small">All vehicles regularly serviced, sanitized, and inspected for safety and comfort standards.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-flex gap-3">
                <div style={{ minWidth: '50px' }}>
                  <i className="fas fa-headset fa-2x" style={{ color: '#ff7700' }}></i>
                </div>
                <div>
                  <h5 className="fw-bold">24/7 Support</h5>
                  <p className="text-muted small">Round-the-clock customer support available for booking assistance and emergency assistance during your trip.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-flex gap-3">
                <div style={{ minWidth: '50px' }}>
                  <i className="fas fa-clock fa-2x" style={{ color: '#ff7700' }}></i>
                </div>
                <div>
                  <h5 className="fw-bold">On-Time Service</h5>
                  <p className="text-muted small">Punctual pickup and drop-off guaranteed - we value your time and never keep you waiting.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-flex gap-3">
                <div style={{ minWidth: '50px' }}>
                  <i className="fas fa-shield-alt fa-2x" style={{ color: '#ff7700' }}></i>
                </div>
                <div>
                  <h5 className="fw-bold">Safety First</h5>
                  <p className="text-muted small">ABS brakes, power steering, first aid kits, and comprehensive insurance for complete peace of mind.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Use Cases */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4">Perfect For <span style={{ color: '#ff7700' }}>Every Occasion</span></h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <i className="fas fa-map-pin fa-2x mb-3" style={{ color: '#ff7700' }}></i>
                  <h5 className="fw-bold mb-2">Weekend Group Tours</h5>
                  <p className="text-muted small">Explore nearby destinations like Lonavala, Khandala, Nashik, and Aurangabad with friends and family.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <i className="fas fa-ring fa-2x mb-3" style={{ color: '#ff7700' }}></i>
                  <h5 className="fw-bold mb-2">Wedding Events</h5>
                  <p className="text-muted small">Transport wedding guests, organize baraat vehicles, or arrange family transport for ceremonies.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <i className="fas fa-briefcase fa-2x mb-3" style={{ color: '#ff7700' }}></i>
                  <h5 className="fw-bold mb-2">Corporate Outings</h5>
                  <p className="text-muted small">Team building events, office trips, and employee celebrations with professional transport solutions.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <i className="fas fa-graduation-cap fa-2x mb-3" style={{ color: '#ff7700' }}></i>
                  <h5 className="fw-bold mb-2">School Picnics</h5>
                  <p className="text-muted small">Safe and comfortable transport for school trips, educational tours, and student excursions.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <i className="fas fa-users fa-2x mb-3" style={{ color: '#ff7700' }}></i>
                  <h5 className="fw-bold mb-2">Family Reunions</h5>
                  <p className="text-muted small">Comfortable group transport for family gatherings and multi-day family vacation trips.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <i className="fas fa-place-of-worship fa-2x mb-3" style={{ color: '#ff7700' }}></i>
                  <h5 className="fw-bold mb-2">Pilgrimage Trips</h5>
                  <p className="text-muted small">Religious tours to Shirdi, Tirupati, and other pilgrimage sites with comfortable seating and AC.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison with Other Vehicles */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">How Seater Vehicles <span style={{ color: '#ff7700' }}>Compare</span></h2>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead style={{ backgroundColor: '#ff7700', color: 'white' }}>
                <tr>
                  <th>Aspect</th>
                  <th>13-20 Seater</th>
                  <th>Force Urbania</th>
                  <th>Full Bus (32+)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Group Size</strong></td>
                  <td>Small-Medium (13-20)</td>
                  <td>Small (7-8)</td>
                  <td>Large (32-50)</td>
                </tr>
                <tr>
                  <td><strong>Comfort Level</strong></td>
                  <td>Good</td>
                  <td>Premium</td>
                  <td>Good</td>
                </tr>
                <tr>
                  <td><strong>Cost Efficiency</strong></td>
                  <td>Excellent</td>
                  <td>Good</td>
                  <td>Best per person</td>
                </tr>
                <tr>
                  <td><strong>Leg Space</strong></td>
                  <td>Adequate</td>
                  <td>Spacious</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td><strong>Best For</strong></td>
                  <td>Group tours, families</td>
                  <td>Corporate, elite</td>
                  <td>Large events</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Internal Linking */}
      <section className="py-5 bg-white border-top">
        <div className="container">
          <h2 className="fw-bold mb-4">Explore All <span style={{ color: '#ff7700' }}>Our Vehicles</span></h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">
                    <i className="fas fa-car me-2" style={{ color: '#ff7700' }}></i>
                    Force Urbania
                  </h5>
                  <p className="text-muted small mb-3">Premium luxury 7-8 seater vans</p>
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
                    <i className="fas fa-bus-alt me-2" style={{ color: '#ff7700' }}></i>
                    Luxury Bus
                  </h5>
                  <p className="text-muted small mb-3">Large 32-50 seater buses</p>
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
                    All Vehicles
                  </h5>
                  <p className="text-muted small mb-3">Complete fleet overview</p>
                  <Link to="/our-fleet" className="btn btn-sm btn-outline-warning fw-bold">
                    View Fleet <i className="fas fa-arrow-right ms-1"></i>
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
              <h2 className="fw-bold mb-2 text-white">Ready to Book Your Seater Vehicle?</h2>
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

export default SeaterCars;