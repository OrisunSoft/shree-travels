import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const Seventeen20Seater = ({ seaterType = '17' }) => {
  const location = useLocation();
  
  const seaterData = {
    '17': {
      h1: '17 Seater Tempo Traveller On Rent in Pune',
      title: '17 Seater Tempo Traveller On Rent in Pune @ ₹22/km | AC & Non-AC Hire',
      shortDesc: 'Premium 17 Seater Tempo Traveller On Rent in Pune with AC, pushback recliner seats & top carrier',
      fullDesc: 'Perfect for 14–17 member groups! Our 17 Seater Tempo Traveller On Rent in Pune is ideal for corporate tours, family pilgrimages, Ashtavinayak Darshan, and weekend trips to Mahabaleshwar & Lonavala.',
      localRate: '₹5,500',
      fullDayRate: '₹7,500–9,600',
      outstationRate: '₹22/km (Non-AC) | ₹25/km (AC)',
      keywords: '17 Seater Tempo Traveller On Rent in Pune, 17 seater on rent Pune, 17 seater tempo traveller Pune, 17 passenger bus rental, AC tempo traveller hire',
      path: '/17-seater-on-rent-pune',
      image: '/img/Keyword Based Image/Keyword Based Image-06.jpg',
      perPersonCost: '₹440',
      capacity: '17 Passengers'
    },
    '20': {
      h1: '20 Seater Bus On Rent in Pune',
      title: '20 Seater Bus On Rent in Pune @ ₹28/km | Luxury Mini Bus Hire',
      shortDesc: 'Book 20 Seater Bus On Rent in Pune for group tours, weddings & corporate events @ ₹28/km',
      fullDesc: 'Our 20 Seater Bus On Rent in Pune offers a wide center aisle, high-back 2x1 pushback recliner seats, powerful dual-compressor AC, and generous rear & rooftop luggage space.',
      localRate: '₹5,500–6,000',
      fullDayRate: '₹8,100–10,200',
      outstationRate: '₹28/km (Non-AC & AC)',
      keywords: '20 Seater Bus On Rent in Pune, 20 seater bus rental Pune, 20 seater tempo traveller Pune, mini bus on rent Pune',
      path: '/20-seater-bus-rental-pune',
      image: '/img/Keyword Based Image/Keyword Based Image-08.jpg',
      perPersonCost: '₹405',
      capacity: '20 Passengers'
    }
  };

  const data = seaterData[seaterType] || seaterData['17'];

  const vehicleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    name: data.h1,
    description: data.fullDesc,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '5500',
      highPrice: seaterType === '20' ? '15000' : '12000',
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
        description={`${data.fullDesc} Call +91 7620411277 or WhatsApp +91 78757 74499 for instant booking across Pune & PCMC.`}
        keywords={data.keywords}
        path={data.path}
        image={data.image}
        schema={vehicleSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Vehicles', url: '/our-fleet' },
          { name: 'Seater Vehicles', url: '/13-seater-on-rent-pune' },
          { name: data.h1, url: data.path }
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
          height: 100%;
        }

        .pricing-card h5 {
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .price-amount {
          font-size: 1.4rem;
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
              <span className="badge px-3 py-2 rounded-pill mb-3 fw-bold" style={{ backgroundColor: '#ff7700', color: '#fff' }}>
                Verified Tariff: {data.outstationRate}
              </span>
              <h1 className="display-5 fw-bold mb-3 text-white">
                {data.h1}
              </h1>
              <p className="lead mb-4">
                {data.fullDesc}
              </p>
              <div className="d-flex gap-3 flex-wrap mb-3">
                <a href="tel:+917620411277" className="btn btn-lg fw-bold text-white" style={{ backgroundColor: '#ff7700' }}>
                  <i className="fas fa-phone me-2"></i>Call +91 76204 11277
                </a>
                <a
                  href={`https://wa.me/917875774499?text=${encodeURIComponent(`Hello Shree Travels, I want to book ${data.h1}.`)}`}
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
                src={data.image}
                alt={data.h1}
                className="img-fluid rounded-4 shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">Why Choose {data.h1}?</h2>
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
          <h2 className="fw-bold mb-4 text-center">{data.h1} <span style={{ color: '#ff7700' }}>Official Pricing</span></h2>
          <p className="text-center text-muted mb-4">Transparent pricing from our official Packages.jsx rate card</p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="pricing-card">
                <h5>8 Hour / 80 KM Local</h5>
                <p className="text-muted small">Within Pune & PCMC city limits</p>
                <div className="price-amount">{data.localRate}</div>
                <p className="small text-muted">Distance: 80 km / 8 Hours</p>
                <p className="small fw-bold">Per person: <span style={{ color: '#ff7700' }}>{data.perPersonCost}</span></p>
                <Link to="/book-taxi" className="btn btn-sm fw-bold text-white mt-3" style={{ backgroundColor: '#ff7700' }}>
                  Book Local Trip
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pricing-card">
                <h5>Outstation 300 KM Pkg</h5>
                <p className="text-muted small">Single day outstation package (Non-AC / AC)</p>
                <div className="price-amount">{data.fullDayRate}</div>
                <p className="small text-muted">Includes 300 km daily limit</p>
                <p className="small fw-bold">Per person: <span style={{ color: '#ff7700' }}>{data.perPersonCost} approx</span></p>
                <Link to="/book-taxi" className="btn btn-sm fw-bold text-white mt-3" style={{ backgroundColor: '#ff7700' }}>
                  Book 300 KM Pkg
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pricing-card">
                <h5>Outstation Per KM</h5>
                <p className="text-muted small">Multi-day tours & travel</p>
                <div className="price-amount">{data.outstationRate}</div>
                <p className="small text-muted">Minimum 300 km/day billing</p>
                <p className="small fw-bold">Experienced highway driver</p>
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