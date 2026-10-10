import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Thirteen14Seater = () => {
  const fourteenSeaterSchema = {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    name: '14 Seater Tempo Traveller on Rent in Pune',
    description: 'Premium 14 seater tempo traveller rental with AC, pushback seats, and experienced drivers',
    manufacturer: {
      '@type': 'Organization',
      name: 'Shree Travels'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      priceRange: '₹6500-₹10500',
      availability: 'https://schema.org/InStock',
      url: 'https://shreetravels.in/14-seater-on-rent-pune'
    }
  };

  const keyBenefits = [
    { icon: 'fa-check-circle', title: 'Perfect Capacity', desc: '14 comfortable seats with ample legroom for medium-sized groups' },
    { icon: 'fa-wind', title: 'Full AC System', desc: 'Temperature-controlled cabin for comfort in all seasons' },
    { icon: 'fa-music', title: 'Entertainment', desc: 'Built-in music system and LCD display for entertainment' },
    { icon: 'fa-shield-alt', title: 'Safety First', desc: 'ABS brakes, power steering, first aid kit, and insurance' },
    { icon: 'fa-star', title: 'Premium Seats', desc: 'Luxury pushback seats with superior comfort and support' },
    { icon: 'fa-person-hiking', title: 'Pro Drivers', desc: 'Trained and experienced drivers with GPS navigation' }
  ];

  const puneLocations = [
    'Hinjewadi', 'Kharadi', 'Wakad', 'Baner', 'Koregaon Park',
    'Magarpatta City', 'Viman Nagar', 'Hadapsar', 'Pimpri-Chinchwad', 'Aundh'
  ];

  return (
    <>
      <SEO
        title="14 Seater Tempo Traveller On Rent in Pune @ ₹22/km | Group Transport"
        description="Book 14 Seater Tempo Traveller On Rent in Pune starting @ ₹22/km (Non-AC) & ₹25/km (AC). Pushback seats, experienced drivers, best rates for weddings, tours, and corporate events. Call +91 7620411277 or WhatsApp +91 78757 74499."
        keywords="14 seater on rent Pune, 14 seater tempo traveller Pune, 14 passenger bus rental, group transport Pune, AC tempo traveller hire, wedding transport Pune"
        path="/14-seater-on-rent-pune"
        image="/img/Keyword Based Image/Keyword Based Image-05.jpg"
        schema={fourteenSeaterSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Vehicles', url: '/our-fleet' },
          { name: 'Seater Vehicles', url: '/13-seater-on-rent-pune' },
          { name: '14 Seater', url: '/14-seater-on-rent-pune' }
        ]}
      />

      <style>{`
        .hero-14seater {
          background: linear-gradient(135deg, #1a202c 0%, #0f172a 100%);
          color: white;
          padding: 60px 0;
        }

        .benefit-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          height: 100%;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }

        .benefit-icon {
          font-size: 2.5rem;
          color: #ff7700;
          margin-bottom: 1rem;
        }

        .pricing-section {
          background: linear-gradient(135deg, #fff9f0 0%, #ffe4cc 100%);
          padding: 2.5rem;
          border-radius: 1rem;
          margin: 2rem 0;
        }

        .pricing-box {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .price-item {
          background: white;
          padding: 1.5rem;
          border-radius: 0.75rem;
          text-align: center;
          border-top: 3px solid #ff7700;
        }

        .price-item h5 {
          color: #0f172a;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .price-amount {
          font-size: 1.4rem;
          color: #ff7700;
          font-weight: 700;
          margin: 0.5rem 0;
        }

        .feature-box {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 0.75rem;
          margin: 1rem 0;
          border-left: 4px solid #ff7700;
        }

        .feature-list {
          list-style: none;
          padding: 0;
        }

        .feature-list li {
          padding: 0.5rem 0;
          color: #555;
        }

        .feature-list i {
          color: #ff7700;
          margin-right: 0.75rem;
          width: 20px;
        }

        .use-case {
          display: flex;
          gap: 1.5rem;
          padding: 1.5rem;
          background: white;
          border-radius: 0.75rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .use-case-icon {
          font-size: 2rem;
          color: #ff7700;
          min-width: 50px;
        }

        @media (max-width: 768px) {
          .hero-14seater {
            padding: 40px 0;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-14seater">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="badge px-3 py-2 rounded-pill mb-3 fw-bold" style={{ backgroundColor: '#ff7700', color: '#fff' }}>
                Starting @ ₹22/km (Non-AC) & ₹25/km (AC)
              </span>
              <h1 className="display-5 fw-bold mb-3 text-white">
                14 Seater Tempo Traveller On Rent in Pune
              </h1>
              <p className="lead mb-4">
                Perfect solution for medium-sized groups! Our 14 seater tempo travellers offer the ideal balance of comfort and affordability. Ideal for weddings, group tours, corporate events, and family celebrations with air-conditioning and pushback seating.
              </p>
              <div className="d-flex gap-3 flex-wrap mb-3">
                <a href="tel:+917620411277" className="btn btn-lg fw-bold text-white" style={{ backgroundColor: '#ff7700' }}>
                  <i className="fas fa-phone me-2"></i>Call +91 76204 11277
                </a>
                <a
                  href="https://wa.me/917875774499?text=Hello%20Shree%20Travels%2C%20I%20want%20to%20book%2014%20Seater%20Tempo%20Traveller%20On%20Rent%20in%20Pune."
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
              <img 
                src="/img/Keyword Based Image/Keyword Based Image-05.jpg" 
                alt="14 Seater Tempo Traveller On Rent in Pune - AC Pushback Seats" 
                className="img-fluid rounded-4 shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">Why 14 Seater <span style={{ color: '#ff7700' }}>Tempo Traveller</span>?</h2>
            <p className="text-muted">The perfect choice for your group travel needs</p>
          </div>

          <div className="row g-4">
            {keyBenefits.map((benefit, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="benefit-card">
                  <i className={`fas ${benefit.icon} benefit-icon`}></i>
                  <h5 className="fw-bold mb-2">{benefit.title}</h5>
                  <p className="text-muted small">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4">14 Seater Specifications & <span style={{ color: '#ff7700' }}>Features</span></h2>

          <div className="row g-4">
            <div className="col-md-6">
              <h5 className="fw-bold mb-3">Vehicle Specifications</h5>
              <div className="feature-box">
                <ul className="feature-list">
                  <li><i className="fas fa-check-circle"></i> <strong>Seating:</strong> 14 Comfortable passengers</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Transmission:</strong> Manual / Automatic available</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Engine:</strong> Diesel powered, fuel-efficient</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Dimensions:</strong> Spacious cabin with adequate headroom</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Weight:</strong> Optimized for highway performance</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Ground Clearance:</strong> High, suitable for all roads</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <h5 className="fw-bold mb-3">Premium Features</h5>
              <div className="feature-box">
                <ul className="feature-list">
                  <li><i className="fas fa-wind"></i> Full air-conditioning with heater</li>
                  <li><i className="fas fa-chair"></i> Pushback reclining seats with lumbar support</li>
                  <li><i className="fas fa-music"></i> Music system with Bluetooth connectivity</li>
                  <li><i className="fas fa-tv"></i> LCD display screen for entertainment</li>
                  <li><i className="fas fa-usb"></i> USB charging points for all passengers</li>
                  <li><i className="fas fa-shield"></i> ABS braking system & power steering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="pricing-section">
            <h2 className="fw-bold mb-1">Transparent 14 Seater Tempo Traveller <span style={{ color: '#ff7700' }}>Pricing</span></h2>
            <p className="text-muted mb-4">Official Packages.jsx rates in Pune, no hidden charges guaranteed</p>

            <div className="pricing-box">
              <div className="price-item">
                <h5>8 Hour / 80 KM Local</h5>
                <p className="text-muted small">Within Pune city</p>
                <div className="price-amount">₹5,500</div>
                <p className="small" style={{ color: '#666' }}>Distance: 80 km</p>
              </div>

              <div className="price-item">
                <h5>Outstation 300 KM Pkg</h5>
                <p className="text-muted small">Single day outstation</p>
                <div className="price-amount">₹8,100–9,000</div>
                <p className="small" style={{ color: '#666' }}>Distance: 300 km</p>
              </div>

              <div className="price-item">
                <h5>Outstation Per KM</h5>
                <p className="text-muted small">Multi-day & tours</p>
                <div className="price-amount">₹22–25/km</div>
                <p className="small" style={{ color: '#666' }}>Minimum 300 km/day</p>
              </div>
            </div>

            <div className="alert alert-info mt-4 mb-0">
              <i className="fas fa-info-circle me-2"></i>
              <strong>Included in Price:</strong> Professional driver with experience, fuel consumption, vehicle maintenance, basic insurance, air-conditioning, and 24/7 customer support
            </div>
          </div>

          <div className="feature-box mt-4">
            <h6 className="fw-bold mb-2">Additional Charges (Applicable):</h6>
            <p className="mb-0">
              <strong>Toll charges</strong> - As per actual consumption <br/>
              <strong>Parking fees</strong> - At destination locations <br/>
              <strong>Night charges</strong> (10 PM - 6 AM) - 25% premium for overnight trips
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4">Perfect 14 Seater <span style={{ color: '#ff7700' }}>Use Cases</span></h2>

          <div className="use-case">
            <div className="use-case-icon">
              <i className="fas fa-ring"></i>
            </div>
            <div>
              <h5 className="fw-bold">Wedding & Functions</h5>
              <p className="text-muted small mb-0">Transport wedding guests, organize baraat, or arrange family transport for ceremonies and receptions. Perfect for coordinating multiple trips or transporting VIP guests in comfort.</p>
            </div>
          </div>

          <div className="use-case">
            <div className="use-case-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <div>
              <h5 className="fw-bold">Corporate Events</h5>
              <p className="text-muted small mb-0">Team outings, corporate seminars, client meetings, and office celebrations. Reliable transport for employee groups with professional driver service and premium comfort.</p>
            </div>
          </div>

          <div className="use-case">
            <div className="use-case-icon">
              <i className="fas fa-map-pin"></i>
            </div>
            <div>
              <h5 className="fw-bold">Group Tours & Trips</h5>
              <p className="text-muted small mb-0">Weekend getaways to Lonavala, Khandala, Nashik, Aurangabad, Shirdi. Group vacation travel with comfortable seating and experienced drivers for multi-day trips.</p>
            </div>
          </div>

          <div className="use-case">
            <div className="use-case-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div>
              <h5 className="fw-bold">School & Educational Groups</h5>
              <p className="text-muted small mb-0">School picnics, educational tours, sports trips, and student excursions. Safe and reliable transport with experienced drivers familiar with student group management.</p>
            </div>
          </div>

          <div className="use-case">
            <div className="use-case-icon">
              <i className="fas fa-users"></i>
            </div>
            <div>
              <h5 className="fw-bold">Family Reunions</h5>
              <p className="text-muted small mb-0">Large family gatherings, extended family celebrations, and multi-generational trips. Comfortable transport for family groups with ample seating and luggage space.</p>
            </div>
          </div>

          <div className="use-case">
            <div className="use-case-icon">
              <i className="fas fa-users-between-lines"></i>
            </div>
            <div>
              <h5 className="fw-bold">Religious & Pilgrimage Tours</h5>
              <p className="text-muted small mb-0">Group pilgrimages to Shirdi, Tirupati, Pandharpur, and other religious destinations. Comfortable and reliable transport for spiritual journeys and religious group tours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">14 Seater Rental Available <span style={{ color: '#ff7700' }}>in Pune & Nearby</span></h2>

          <div className="row g-4">
            <div className="col-md-6">
              <h5 className="fw-bold mb-3">
                <i className="fas fa-map-marker-alt me-2" style={{ color: '#ff7700' }}></i>
                Pune Locations
              </h5>
              <div className="d-flex flex-wrap gap-2">
                {puneLocations.map((location, idx) => (
                  <span key={idx} className="badge bg-warning text-dark py-2 px-3">
                    {location}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-md-6">
              <h5 className="fw-bold mb-3">
                <i className="fas fa-road me-2" style={{ color: '#ff7700' }}></i>
                Outstation Routes
              </h5>
              <p className="text-muted">
                Mumbai, Aurangabad, Nashik, Lonavala, Khandala, Shirdi, Belgaum, Indore, Goa, Mahabaleshwar, Panchgani, and many more destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">How 14 Seater <span style={{ color: '#ff7700' }}>Compares</span></h2>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead style={{ backgroundColor: '#ff7700', color: 'white' }}>
                <tr>
                  <th>Feature</th>
                  <th>14 Seater</th>
                  <th>13 Seater</th>
                  <th>17 Seater</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Capacity</strong></td>
                  <td><span className="badge bg-success">14 Passengers</span></td>
                  <td><span className="badge bg-secondary">13 Passengers</span></td>
                  <td><span className="badge bg-info">17 Passengers</span></td>
                </tr>
                <tr>
                  <td><strong>Best For</strong></td>
                  <td>Medium groups, weddings</td>
                  <td>Small groups, families</td>
                  <td>Large groups, tours</td>
                </tr>
                <tr>
                  <td><strong>Comfort</strong></td>
                  <td>Excellent</td>
                  <td>Good</td>
                  <td>Good</td>
                </tr>
                <tr>
                  <td><strong>Per Person Cost</strong></td>
                  <td>₹710/person (local)</td>
                  <td>₹750/person (local)</td>
                  <td>₹650/person (local)</td>
                </tr>
                <tr>
                  <td><strong>AC & Features</strong></td>
                  <td><i className="fas fa-check" style={{ color: 'green' }}></i></td>
                  <td><i className="fas fa-check" style={{ color: 'green' }}></i></td>
                  <td><i className="fas fa-check" style={{ color: 'green' }}></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Vehicle Links */}
      <section className="py-5 bg-light border-top">
        <div className="container">
          <h2 className="fw-bold mb-4">Explore Other <span style={{ color: '#ff7700' }}>Vehicle Options</span></h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">
                    <i className="fas fa-car me-2" style={{ color: '#ff7700' }}></i>
                    Force Urbania
                  </h5>
                  <p className="text-muted small mb-3">Luxury 7-8 seater premium vans</p>
                  <Link to="/force-urbania-on-rent-pune" className="btn btn-sm btn-outline-warning fw-bold">
                    View Details <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">
                    <i className="fas fa-shuttle-van me-2" style={{ color: '#ff7700' }}></i>
                    13 & 17 Seater
                  </h5>
                  <p className="text-muted small mb-3">Affordable group travel options</p>
                  <Link to="/13-seater-on-rent-pune" className="btn btn-sm btn-outline-warning fw-bold">
                    View Details <i className="fas fa-arrow-right ms-1"></i>
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
                  <p className="text-muted small mb-3">Large 32-50 seater buses</p>
                  <Link to="/bus-rental-pune" className="btn btn-sm btn-outline-warning fw-bold">
                    View Details <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4">14 Seater Tempo Traveller <span style={{ color: '#ff7700' }}>FAQs</span></h2>

          <div className="accordion" id="seaterFAQ">
            <div className="accordion-item border-0 mb-3 rounded-2 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  Is 14 seater good for a wedding group?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#seaterFAQ">
                <div className="accordion-body">
                  Absolutely! 14 seater tempo travellers are excellent for wedding guest transport. They offer comfortable seating, AC, music system, and can be easily arranged for multiple trips if needed. Perfect for coordinating arrival and departure of wedding guests.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0 mb-3 rounded-2 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  What's the luggage carrying capacity?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#seaterFAQ">
                <div className="accordion-body">
                  Each 14 seater has a large luggage compartment capable of storing 14-16 medium-sized bags or suitcases. Perfect for group tours and multi-day trips where passengers have luggage and personal belongings.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0 mb-3 rounded-2 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Can we arrange 14 seater for 2-3 days?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#seaterFAQ">
                <div className="accordion-body">
                  Yes! We offer multi-day outstation packages. For 2-3 day trips, we charge per kilometer (₹17/km) which works out to be very economical for group travel. Driver accommodation is included.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0 rounded-2 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                  Is the driver experienced with group travel?
                </button>
              </h2>
              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#seaterFAQ">
                <div className="accordion-body">
                  All our drivers are trained professionals with 8-10+ years of experience in group travel. They know all major routes, have GPS navigation, and are courteous and helpful with passengers of all ages.
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
              <h2 className="fw-bold mb-2 text-white">Ready to Book Your 14 Seater?</h2>
              <p className="lead text-white mb-0">Get instant quotes, book now, enjoy premium comfort for your group</p>
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

export default Thirteen14Seater;