import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const Seventeen20Seater = ({ seaterType = '17' }) => {
  const location = useLocation();
  
  const seaterData = {
    '17': {
      title: '17 Seater Tempo Traveller on Rent in Pune',
      shortDesc: 'Premium 17 seater tempo traveller rental with AC, recliner seats',
      fullDesc: 'Perfect for large groups! Our 17 seater tempo travellers are ideal for corporate tours, family reunions, and group travel. Spacious, comfortable, and affordable.',
      localRate: '₹7,000-8,500',
      fullDayRate: '₹10,000-11,500',
      outstationRate: '₹18-20/km',
      keywords: '17 seater on rent Pune, 17 seater tempo traveller Pune, 17 passenger bus rental, large group transport, AC tempo traveller hire',
      path: '/17-seater-on-rent-pune',
      image: 'Img for Booking-05.png',
      perPersonCost: '₹600',
      capacity: '17 Passengers'
    },
    '20': {
      title: '20 Seater Bus on Rent in Pune | Large Group Transport',
      shortDesc: 'Book 20 seater bus rental in Pune for large groups at best rates',
      fullDesc: 'Largest tempo traveller option! Our 20 seater buses are perfect for large family groups, corporate events, and major tours. Ultimate comfort and capacity combined.',
      localRate: '₹8,000-9,500',
      fullDayRate: '₹11,000-12,500',
      outstationRate: '₹19-21/km',
      keywords: '20 seater bus on rent Pune, 20 seater bus rental, large group bus hire, charter bus Pune, big group transport',
      path: '/20-seater-bus-rental-pune',
      image: 'Img for Booking-06.png',
      perPersonCost: '₹550',
      capacity: '20 Passengers'
    }
  };

  const data = seaterData[seaterType] || seaterData['17'];

  const vehicleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    name: data.title,
    description: data.fullDesc,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      priceRange: seaterType === '20' ? '₹8000-₹12500' : '₹7000-₹11500',
      availability: 'https://schema.org/InStock',
      url: `https://shreetravels.in${data.path}`
    }
  };

  const benefits = [
    { icon: 'fa-users', title: 'Large Capacity', desc: `Comfortable seating for ${data.capacity}` },
    { icon: 'fa-wind', title: 'Full AC System', desc: 'Climate-controlled comfort for everyone' },
    { icon: 'fa-star', title: 'Premium Recliner Seats', desc: 'Individual comfort with armrests' },
    { icon: 'fa-shield-alt', title: 'Top Safety', desc: 'ABS brakes, power steering, insurance' },
    { icon: 'fa-tv', title: 'Entertainment System', desc: 'Music, LCD display for entertainment' },
    { icon: 'fa-person-hiking', title: 'Experienced Drivers', desc: 'Professional drivers with GPS navigation' }
  ];

  const useCases = [
    {
      icon: 'fa-building',
      title: 'Large Corporate Groups',
      desc: 'Transport entire department or corporate team for seminars, conferences, and training programs.'
    },
    {
      icon: 'fa-ring',
      title: 'Wedding Transport',
      desc: 'Organize transport for large wedding parties, guest management, and ceremony coordination.'
    },
    {
      icon: 'fa-map-pin',
      title: 'Group Tours',
      desc: 'Extended tours to Aurangabad, Nashik, Goa, Belgaum with complete comfort for large groups.'
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Educational Groups',
      desc: 'School and college trips with safe, reliable, and comfortable transport for large student groups.'
    },
    {
      icon: 'fa-place-of-worship',
      title: 'Religious Pilgrimages',
      desc: 'Large pilgrimage groups to Shirdi, Tirupati, Pandharpur, and other religious destinations.'
    },
    {
      icon: 'fa-users',
      title: 'Family Reunions',
      desc: 'Extended family celebrations and reunions with comfort for all family members.'
    }
  ];

  return (
    <>
      <SEO
        title={data.title}
        description={`Book ${seaterType} seater bus on rent in Pune. ${data.fullDesc} AC with recliner seats, experienced drivers, best rates for group travel across Hinjewadi, Kharadi, and all Pune areas.`}
        keywords={data.keywords}
        path={data.path}
        image={`/img/Img for Booking/${data.image}`}
        schema={vehicleSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Vehicles', url: '/our-fleet' },
          { name: 'Seater Vehicles', url: '/13-seater-on-rent-pune' },
          { name: `${seaterType} Seater`, url: data.path }
        ]}
      />

      <style>{`
        .hero-large-seater {
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
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }

        .benefit-icon {
          font-size: 2.5rem;
          color: #ff7700;
          margin-bottom: 1rem;
        }

        .pricing-card {
          background: white;
          border: 2px solid #ff7700;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          margin: 1rem 0;
        }

        .pricing-card h5 {
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .price-amount {
          font-size: 1.5rem;
          color: #ff7700;
          font-weight: 700;
          margin: 0.75rem 0;
        }

        .use-case-card {
          background: white;
          padding: 1.5rem;
          border-radius: 0.75rem;
          border-left: 4px solid #ff7700;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .use-case-card:hover {
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          transform: translateX(5px);
        }

        .use-case-icon {
          font-size: 2rem;
          color: #ff7700;
          margin-bottom: 0.75rem;
        }

        .highlight-box {
          background: linear-gradient(135deg, #fff9f0 0%, #ffe4cc 100%);
          border-left: 4px solid #ff7700;
          padding: 1.5rem;
          border-radius: 0.5rem;
          margin: 1.5rem 0;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .feature-item {
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 0.5rem;
          text-align: center;
        }

        .feature-item i {
          color: #ff7700;
          margin-right: 0.5rem;
        }

        @media (max-width: 768px) {
          .hero-large-seater {
            padding: 40px 0;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-large-seater">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold mb-3">
                {seaterType} Seater Bus on Rent in <span style={{ color: '#ff7700' }}>Pune</span>
              </h1>
              <p className="lead mb-4">
                {data.fullDesc} Perfect for large corporate groups, wedding events, extended family gatherings, and multi-day tours. Affordable rates with premium comfort and experienced drivers.
              </p>
              <div className="d-flex gap-3 flex-wrap mb-4">
                <Link to="/book-taxi" className="btn btn-lg fw-bold text-white" style={{ backgroundColor: '#ff7700' }}>
                  <i className="fas fa-calendar-check me-2"></i>Book Now
                </Link>
                <a href="tel:+917875774499" className="btn btn-lg fw-bold border-2" style={{ borderColor: 'white', color: 'white' }}>
                  <i className="fas fa-phone me-2"></i>Call Now
                </a>
              </div>
              <div className="alert alert-light">
                <i className="fas fa-star me-2" style={{ color: '#ff7700' }}></i>
                <strong>Best Rate Guarantee:</strong> Lowest prices in Pune for {seaterType} seater vehicles
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src={`/img/Img for Booking/${data.image}`}
                alt={`${seaterType} seater bus on rent in Pune - Large group transport with AC comfort`}
                className="img-fluid rounded-3" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">Why Choose {seaterType} Seater <span style={{ color: '#ff7700' }}>Vehicles</span>?</h2>
            <p className="text-muted">Premium comfort meets affordability for large groups</p>
          </div>

          <div className="row g-4">
            {benefits.map((benefit, idx) => (
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

      {/* Pricing Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">{seaterType} Seater Bus Rental <span style={{ color: '#ff7700' }}>Pricing</span></h2>
          <p className="text-center text-muted mb-4">Transparent pricing with no hidden charges</p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="pricing-card">
                <h5>4 Hour Local Trip</h5>
                <p className="text-muted small">Within Pune city</p>
                <div className="price-amount">{data.localRate}</div>
                <p className="small text-muted">Distance: 80-100 km</p>
                <p className="small fw-bold">Per person: <span style={{ color: '#ff7700' }}>{data.perPersonCost}</span></p>
                <Link to="/book-taxi" className="btn btn-sm fw-bold text-white mt-3" style={{ backgroundColor: '#ff7700' }}>
                  Book Local Trip
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pricing-card">
                <h5>Full Day (24 Hours)</h5>
                <p className="text-muted small">Single day rental</p>
                <div className="price-amount">{data.fullDayRate}</div>
                <p className="small text-muted">Distance: 250 km</p>
                <p className="small fw-bold">Per person: <span style={{ color: '#ff7700' }}>₹{Math.round(parseInt(data.fullDayRate.split('-')[1]) / parseInt(data.capacity))} approx</span></p>
                <Link to="/book-taxi" className="btn btn-sm fw-bold text-white mt-3" style={{ backgroundColor: '#ff7700' }}>
                  Book Full Day
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pricing-card">
                <h5>Outstation Trip</h5>
                <p className="text-muted small">Multi-day tours & travel</p>
                <div className="price-amount">{data.outstationRate}</div>
                <p className="small text-muted">Unlimited distance</p>
                <p className="small fw-bold">Driver accommodation included</p>
                <Link to="/book-taxi" className="btn btn-sm fw-bold text-white mt-3" style={{ backgroundColor: '#ff7700' }}>
                  Book Outstation
                </Link>
              </div>
            </div>
          </div>

          <div className="highlight-box">
            <h6><i className="fas fa-check-circle me-2" style={{ color: '#ff7700' }}></i>What's Included:</h6>
            <div className="feature-grid">
              <div className="feature-item">
                <i className="fas fa-person-hiking"></i> Professional Driver
              </div>
              <div className="feature-item">
                <i className="fas fa-gas-pump"></i> Fuel & Maintenance
              </div>
              <div className="feature-item">
                <i className="fas fa-shield"></i> Insurance Coverage
              </div>
              <div className="feature-item">
                <i className="fas fa-wind"></i> Full AC System
              </div>
              <div className="feature-item">
                <i className="fas fa-headset"></i> 24/7 Support
              </div>
              <div className="feature-item">
                <i className="fas fa-music"></i> Entertainment System
              </div>
            </div>
          </div>

          <div className="alert alert-warning mt-4">
            <i className="fas fa-info-circle me-2"></i>
            <strong>Extra Charges:</strong> Toll (actual), parking fees (applicable), night charges (10 PM-6 AM: 25% premium)
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">Perfect {seaterType} Seater <span style={{ color: '#ff7700' }}>Use Cases</span></h2>

          <div className="row g-4">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="col-md-6">
                <div className="use-case-card">
                  <i className={`fas ${useCase.icon} use-case-icon`}></i>
                  <h5 className="fw-bold mb-2">{useCase.title}</h5>
                  <p className="text-muted small mb-0">{useCase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4">{seaterType} Seater Vehicle <span style={{ color: '#ff7700' }}>Specifications</span></h2>

          <div className="row g-4">
            <div className="col-md-6">
              <h5 className="fw-bold mb-3">Technical Specifications</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Seating Capacity:</strong> {data.capacity}
                </li>
                <li className="list-group-item">
                  <strong>Engine Type:</strong> Diesel, Fuel Efficient
                </li>
                <li className="list-group-item">
                  <strong>Transmission:</strong> Manual/Automatic Available
                </li>
                <li className="list-group-item">
                  <strong>Braking System:</strong> ABS with Power Steering
                </li>
                <li className="list-group-item">
                  <strong>Luggage Capacity:</strong> Large compartment for 20+ bags
                </li>
                <li className="list-group-item">
                  <strong>Ground Clearance:</strong> High, suitable for all road types
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h5 className="fw-bold mb-3">Premium Amenities</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="fas fa-wind" style={{ color: '#ff7700' }}></i> Full AC with Temperature Control
                </li>
                <li className="list-group-item">
                  <i className="fas fa-chair" style={{ color: '#ff7700' }}></i> Luxury Recliner Seats with Armrests
                </li>
                <li className="list-group-item">
                  <i className="fas fa-music" style={{ color: '#ff7700' }}></i> Music System with Bluetooth
                </li>
                <li className="list-group-item">
                  <i className="fas fa-tv" style={{ color: '#ff7700' }}></i> LCD Display Screen
                </li>
                <li className="list-group-item">
                  <i className="fas fa-usb" style={{ color: '#ff7700' }}></i> USB Charging for All Passengers
                </li>
                <li className="list-group-item">
                  <i className="fas fa-shield" style={{ color: '#ff7700' }}></i> First Aid Kit & Safety Equipment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">{seaterType} Seater Service <span style={{ color: '#ff7700' }}>Coverage</span></h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="bg-white p-4 rounded-3">
                <h5 className="fw-bold mb-3">
                  <i className="fas fa-map-marker-alt me-2" style={{ color: '#ff7700' }}></i>
                  Within Pune
                </h5>
                <p className="text-muted">
                  Available in Hinjewadi, Kharadi, Wakad, Baner, Koregaon Park, Magarpatta City, Viman Nagar, Hadapsar, Shivaji Nagar, Pimpri-Chinchwad, Aundh, Swargate, and surrounding areas.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="bg-white p-4 rounded-3">
                <h5 className="fw-bold mb-3">
                  <i className="fas fa-road me-2" style={{ color: '#ff7700' }}></i>
                  Outstation Routes
                </h5>
                <p className="text-muted">
                  Mumbai, Aurangabad, Nashik, Lonavala, Khandala, Shirdi, Belgaum, Indore, Goa, Mahabaleshwar, Panchgani, and all major destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">How {seaterType} Seater <span style={{ color: '#ff7700' }}>Compares</span></h2>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead style={{ backgroundColor: '#ff7700', color: 'white' }}>
                <tr>
                  <th>Metric</th>
                  <th>{seaterType} Seater</th>
                  <th>{seaterType === '20' ? '17' : '13'} Seater</th>
                  <th>Full Bus (32+)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Capacity</strong></td>
                  <td><span className="badge bg-success">{data.capacity}</span></td>
                  <td><span className="badge bg-secondary">{seaterType === '20' ? '17 Passengers' : '13 Passengers'}</span></td>
                  <td><span className="badge bg-info">32-50 Pax</span></td>
                </tr>
                <tr>
                  <td><strong>Best For</strong></td>
                  <td>Large groups, events</td>
                  <td>{seaterType === '20' ? 'Medium groups' : 'Small groups'}</td>
                  <td>Very large groups</td>
                </tr>
                <tr>
                  <td><strong>Comfort Level</strong></td>
                  <td>Good</td>
                  <td>Good</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td><strong>Cost Per Person</strong></td>
                  <td>{data.perPersonCost}/person</td>
                  <td>{seaterType === '20' ? '₹600' : '₹750'}/person</td>
                  <td>₹500-600/person</td>
                </tr>
                <tr>
                  <td><strong>Luggage Space</strong></td>
                  <td>Large</td>
                  <td>Adequate</td>
                  <td>Very Large</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Vehicles */}
      <section className="py-5 bg-light border-top">
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
                  <p className="text-muted small mb-3">Luxury 7-8 seater premium transport</p>
                  <Link to="/force-urbania-on-rent-pune" className="btn btn-sm btn-outline-warning fw-bold">
                    View <i className="fas fa-arrow-right ms-1"></i>
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
                  <p className="text-muted small mb-3">Large 32-50 seater buses for events</p>
                  <Link to="/bus-rental-pune" className="btn btn-sm btn-outline-warning fw-bold">
                    View <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">
                    <i className="fas fa-shuttle-van me-2" style={{ color: '#ff7700' }}></i>
                    All Seaters
                  </h5>
                  <p className="text-muted small mb-3">13-20 seater options overview</p>
                  <Link to="/13-seater-on-rent-pune" className="btn btn-sm btn-outline-warning fw-bold">
                    View <i className="fas fa-arrow-right ms-1"></i>
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
              <h2 className="fw-bold mb-2 text-white">Book Your {seaterType} Seater Today</h2>
              <p className="lead text-white mb-0">Instant quotes, confirmed booking, premium comfort for large groups</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/book-taxi" className="btn btn-lg fw-bold px-5" style={{ backgroundColor: 'white', color: '#ff7700' }}>
                Reserve Now <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Seventeen20Seater;