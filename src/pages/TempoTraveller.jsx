import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TempoTraveller = () => {
  const tempoSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRentalService',
    name: 'Tempo Traveller Hire in Pune',
    description: 'Affordable tempo traveller rental in Pune - 13 to 20 seater options for group travel',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      priceRange: '₹6000-₹12500',
      availability: 'https://schema.org/InStock',
      url: 'https://shreetravels.in/tempo-traveller-seater-hire-pune'
    }
  };

  const tempoVariants = [
    {
      seater: '13 Seater',
      capacity: '13 passengers',
      startingRate: '₹6,000/4hrs',
      route: '/13-seater-on-rent-pune',
      image: 'Img for Booking-03.png',
      bestFor: 'Family trips, small tours',
      features: ['AC Pushback Seats', 'Music System', 'Power Steering', 'Wide Leg Space']
    },
    {
      seater: '14 Seater',
      capacity: '14 passengers',
      startingRate: '₹6,500/4hrs',
      route: '/14-seater-on-rent-pune',
      image: 'Img for Booking-04.png',
      bestFor: 'Weddings, medium groups',
      features: ['AC with Heater', 'LCD Display', 'Recliner Seats', 'ABS Brakes']
    },
    {
      seater: '17 Seater',
      capacity: '17 passengers',
      startingRate: '₹7,000/4hrs',
      route: '/17-seater-on-rent-pune',
      image: 'Img for Booking-05.png',
      bestFor: 'Large groups, tours',
      features: ['Full AC System', 'Recliner Seats', 'Music System', 'LCD Display']
    },
    {
      seater: '20 Seater',
      capacity: '20 passengers',
      startingRate: '₹28/km',
      route: '/20-seater-bus-rental-pune',
      image: 'Img for Booking-06.png',
      bestFor: 'Large events, charters',
      features: ['Premium AC', 'Push Back Seats', 'Music & LCD', 'Power Windows']
    },
    
  ];

  return (
    <>
      <SEO
        title="Tempo Traveller on Rent in Pune | ₹24/km 13-20 Seater AC Vehicles"
        description="Book affordable tempo traveller (13-20 seater) on rent in Pune. AC vehicles with experienced drivers for group travel, tours, weddings, and corporate events across all Pune areas."
        keywords="tempo traveller on rent Pune, tempo traveller hire near me, 13 seater tempo traveller, 20 seater bus rental, group vehicle rental Pune, affordable bus on rent, AC tempo traveller, charter bus Pune"
        path="/tempo-traveller-seater-hire-pune"
        image="/img/Img for Booking/Img for Booking-03.png"
        schema={tempoSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Vehicles', url: '/our-fleet' },
          { name: 'Tempo Traveller', url: '/tempo-traveller-seater-hire-pune' }
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
          height: 200px;
          object-fit: cover;
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
          font-size: 1.1rem;
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
              <h1 className="display-5 fw-bold mb-3">
                Tempo Traveller on Rent in <span style={{ color: '#ff7700' }}>Pune</span>
              </h1>
              <p className="lead mb-4">
                Affordable group vehicle rental with 13-20 seater options. Perfect for families, corporate tours, weddings, and group travels. All vehicles feature AC, experienced drivers, and transparent pricing.
              </p>
              <div className="d-flex gap-3 flex-wrap mb-4">
                <Link to="/book-taxi" className="btn btn-lg fw-bold text-white" style={{ backgroundColor: '#ff7700' }}>
                  <i className="fas fa-calendar-check me-2"></i>Book Now
                </Link>
                <a href="tel:+917875774499" className="btn btn-lg fw-bold border-2" style={{ borderColor: 'white', color: 'white' }}>
                  <i className="fas fa-phone me-2"></i>+91 7875774499
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="/img/Img for Booking/Img for Booking-03.png" 
                alt="Affordable tempo traveller on rent in Pune - AC group transport vehicle" 
                className="img-fluid rounded-3" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tempo Variants Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">Choose Your Perfect Tempo <span style={{ color: '#ff7700' }}>Traveller</span></h2>
            <p className="text-muted">Available in 13, 14, 17, and 20 seater options for every group size</p>
          </div>

          <div className="row g-4">
            {tempoVariants.map((tempo, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="tempo-card">
                  <img 
                    src={`/img/Img for Booking/${tempo.image}`}
                    alt={`${tempo.seater} tempo traveller on rent in Pune - ${tempo.bestFor}`}
                    loading="lazy"
                  />
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
                      <span className="tempo-rate">From {tempo.startingRate}</span>
                    </div>

                    <div className="d-grid gap-2 mt-3">
                      <Link to={tempo.route} className="btn btn-sm fw-bold text-white" style={{ backgroundColor: '#ff7700' }}>
                        View Details
                      </Link>
                      <Link to="/book-taxi" className="btn btn-sm btn-outline-warning fw-bold">
                        Book Now
                      </Link>
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
          <h2 className="fw-bold mb-4">Quick Tempo Traveller <span style={{ color: '#ff7700' }}>Comparison</span></h2>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead style={{ backgroundColor: '#ff7700', color: 'white' }}>
                <tr>
                  <th>Seater Type</th>
                  <th>Capacity</th>
                  <th>4 Hour Rate</th>
                  <th>Full Day (24h)</th>
                  <th>Per Person Cost</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>13 Seater</strong></td>
                  <td>13 passengers</td>
                  <td>₹6,000-7,500</td>
                  <td>₹9,000-10,000</td>
                  <td>₹692/person</td>
                  <td>Family trips</td>
                </tr>
                <tr>
                  <td><strong>14 Seater</strong></td>
                  <td>14 passengers</td>
                  <td>₹6,500-8,000</td>
                  <td>₹9,500-10,500</td>
                  <td>₹679/person</td>
                  <td>Weddings</td>
                </tr>
                <tr>
                  <td><strong>17 Seater</strong></td>
                  <td>17 passengers</td>
                  <td>₹7,000-8,500</td>
                  <td>₹10,000-11,500</td>
                  <td>₹647/person</td>
                  <td>Large groups</td>
                </tr>
                <tr>
                  <td><strong>20 Seater</strong></td>
                  <td>20 passengers</td>
                  <td>₹8,000-9,500</td>
                  <td>₹11,000-12,500</td>
                  <td>₹625/person</td>
                  <td>Large events</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="alert alert-info mt-4">
            <i className="fas fa-info-circle me-2"></i>
            <strong>💰 Better Economics:</strong> Larger groups (20 seater) offer better per-person pricing. Calculate your group size to find the best option!
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