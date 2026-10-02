import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ForceUrbania = () => {
  const forceUrbaniaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    name: 'Force Urbania on Rent in Pune',
    description: 'Premium Force Urbania rental service in Pune with experienced drivers',
    manufacturer: {
      '@type': 'Organization',
      name: 'Force Motors'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      priceRange: '₹4000-₹8000',
      availability: 'https://schema.org/InStock',
      url: 'https://shreetravels.in/force-urbania-on-rent-pune'
    }
  };

  const puneAreas = [
    'Hinjewadi IT Park', 'Kharadi', 'Koregaon Park', 'Baner', 'Wakad', 
    'Magarpatta City', 'Viman Nagar', 'Shivaji Nagar', 'Hadapsar', 'Pimpri-Chinchwad'
  ];

  return (
    <>
      <SEO
        title="Force Urbania on Rent in Pune @₹35/km| Premium Luxury Van Rental Service"
        description="Book Force Urbania rental in Pune at affordable rates. Premium luxury van hire with air-conditioned interiors, experienced drivers. Available for outstation & local trips across Hinjewadi, Kharadi, Wakad."
        keywords="Force Urbania on rent in Pune, Force Urbania rental Pune, premium van hire Pune, luxury Force Urbania Pune, Force Urbania booking Pune, Force Urbania outstation Pune, Urbania van on rent near me, Force Urbania Hinjewadi, Force Urbania Kharadi"
        path="/force-urbania-on-rent-pune"
        image="/img/Img for Booking/Img for Booking-01.png"
        schema={forceUrbaniaSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Vehicles', url: '/our-fleet' },
          { name: 'Force Urbania on Rent', url: '/force-urbania-on-rent-pune' }
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
              <h1 className="display-5 fw-bold mb-3">
                Premium Force Urbania on Rent in <span style={{ color: '#ff7700' }}>Pune</span>
              </h1>
              <p className="lead mb-4">
                Experience luxury and comfort with Shree Travels' premium Force Urbania rental service. Perfect for family trips, corporate outings, and special occasions across Pune and outstation destinations.
              </p>
              <div className="d-flex gap-3 flex-wrap mb-4">
                <Link to="/book-taxi" className="btn btn-lg fw-bold text-white" style={{ backgroundColor: '#ff7700' }}>
                  <i className="fas fa-calendar-check me-2"></i>Book Now
                </Link>
                <a href="tel:+917875774499" className="btn btn-lg fw-bold border-2" style={{ borderColor: 'white', color: 'white' }}>
                  <i className="fas fa-phone me-2"></i>Call Now
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="/img/Img for Booking/Img for Booking-01.png" 
                alt="Force Urbania luxury van on rent in Pune - Premium seating and AC comfort" 
                className="img-fluid rounded-3" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Why Choose Our <span style={{ color: '#ff7700' }}>Force Urbania</span>?</h2>
            <p className="text-muted max-w-75 mx-auto">Premium comfort and reliability for every journey</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="vehicle-spec">
                <i className="fas fa-chair feature-icon"></i>
                <h5>7-8 Seater Capacity</h5>
                <p>Spacious interiors with premium seating arrangement</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="vehicle-spec">
                <i className="fas fa-wind feature-icon"></i>
                <h5>Full AC & Climate Control</h5>
                <p>Latest air conditioning system for comfort</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="vehicle-spec">
                <i className="fas fa-person-hiking feature-icon"></i>
                <h5>Professional Drivers</h5>
                <p>Experienced, courteous & GPS-trained drivers</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="vehicle-spec">
                <i className="fas fa-wallet feature-icon"></i>
                <h5>Affordable Pricing</h5>
                <p>Transparent pricing with no hidden charges</p>
              </div>
            </div>
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
              <span className="amenity-badge"><i className="fas fa-shield"></i>Power Steering</span>
            </div>
            <div className="col-md-4">
              <span className="amenity-badge"><i className="fas fa-music"></i>Music System</span><br/>
              <span className="amenity-badge"><i className="fas fa-camera"></i>Spacious Interior</span><br/>
              <span className="amenity-badge"><i className="fas fa-first-aid"></i>First Aid Kit</span>
            </div>
            <div className="col-md-4">
              <span className="amenity-badge"><i className="fas fa-road"></i>ABS Brakes</span><br/>
              <span className="amenity-badge"><i className="fas fa-car"></i>Power Windows</span><br/>
              <span className="amenity-badge"><i className="fas fa-star"></i>Premium Upholstery</span>
            </div>
          </div>

          <div className="highlight-box">
            <h5><i className="fas fa-exclamation-circle me-2" style={{ color: '#ff7700' }}></i>Perfect For:</h5>
            <p className="mb-0">Corporate meetings, family vacations, wedding ceremonies, airport transfers, weekend getaways, and special occasions across Pune and surrounding areas.</p>
          </div>
        </div>
      </section>

      {/* Usage & Pricing */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">Force Urbania Rental <span style={{ color: '#ff7700' }}>Options</span></h2>
          
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-3">Local Rental</h5>
                  <p className="text-muted small mb-3">Within Pune city for day trips</p>
                  <p className="mb-2"><strong>Duration:</strong> 8 hours</p>
                  <p className="mb-2"><strong>Distance:</strong> 80-120 km</p>
                  <p className="mb-2"><strong>Driver Allowance:</strong> ₹500</p>
                  <p className="mb-2"><strong>Night Halt:</strong> ₹500</p>
                  <p style={{ color: '#ff7700', fontSize: '1.2rem', fontWeight: '700' }}>₹8,000</p>
                  <Link to="/book-taxi" className="btn btn-sm btn-outline-warning fw-bold">Book Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 border-top border-warning" style={{ borderTopWidth: '3px !important' }}>
                <div className="card-body">
                  <h5 className="fw-bold mb-3">Full Day Rental</h5>
                  <p className="text-muted small mb-3">24 hours all-day service</p>
                  <p className="mb-2"><strong>Duration:</strong> 24 hours</p>
                  <p className="mb-2"><strong>Distance:</strong> 300 km</p>
                  <p className="mb-2"><strong>Driver Allowance:</strong> ₹500</p>
                  <p className="mb-2"><strong>Night Halt:</strong> ₹500</p>
                  <p style={{ color: '#ff7700', fontSize: '1.2rem', fontWeight: '700' }}>₹10,000 </p>
                  <Link to="/book-taxi" className="btn btn-sm fw-bold text-white" style={{ backgroundColor: '#ff7700' }}>Book Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-3">Outstation Rental</h5>
                  <p className="text-muted small mb-3">Multi-day trips & vacations</p>
                  <p className="mb-2"><strong>Duration:</strong> 2+ days</p>
                  <p className="mb-2"><strong>Distance:</strong> Unlimited</p>
                  <p className="mb-2"><strong>Driver Allowance:</strong> ₹500</p>
                  <p className="mb-2"><strong>Night Halt:</strong> ₹500</p>
                  <p style={{ color: '#ff7700', fontSize: '1.2rem', fontWeight: '700' }}>₹32/km</p>
                  <Link to="/book-taxi" className="btn btn-sm btn-outline-warning fw-bold">Book Now</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="highlight-box">
            <p className="mb-0">
              <strong> Pricing Includes:</strong>  basic insurance, GPS tracking, 24/7 customer support.
              <br/><strong> Not Included:</strong> Driver allowance,Toll charges, parking fees (applicable separately).
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
            <table className="table table-hover">
              <thead style={{ backgroundColor: '#ff7700', color: 'white' }}>
                <tr>
                  <th>Feature</th>
                  <th>Force Urbania</th>
                  <th>Standard Van</th>
                  <th>13 Seater</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Seating</strong></td>
                  <td><span className="badge bg-success">7-8</span></td>
                  <td><span className="badge bg-secondary">5-6</span></td>
                  <td><span className="badge bg-info">13</span></td>
                </tr>
                <tr>
                  <td><strong>Luxury Level</strong></td>
                  <td><span className="badge bg-success">Premium</span></td>
                  <td><span className="badge bg-secondary">Standard</span></td>
                  <td><span className="badge bg-info">Good</span></td>
                </tr>
                <tr>
                  <td><strong>Best For</strong></td>
                  <td>Family trips, Executives</td>
                  <td>City commute</td>
                  <td>Group tours</td>
                </tr>
                <tr>
                  <td><strong>AC & Comfort</strong></td>
                  <td><i className="fas fa-check" style={{ color: 'green' }}></i></td>
                  <td><i className="fas fa-check" style={{ color: 'green' }}></i></td>
                  <td><i className="fas fa-check" style={{ color: 'green' }}></i></td>
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
                  Force Urbania typically seats 7-8 passengers comfortably with premium seating arrangements and ample legroom for each passenger.
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