import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const SeaterCars = () => {
  const seaterSchema = {
    '@context': 'https://schema.org',
    '@type': 'VehicleRentalService',
    name: 'Multi-Seater Tempo Traveller & Group Vehicles Rental',
    description: 'Affordable 13, 14, 17, 20 seater tempo traveller and group vehicle rentals in Pune',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      priceRange: '₹5000-₹10000',
      availability: 'https://schema.org/InStock',
      url: 'https://shreetravels.in/13-seater-on-rent-pune'
    }
  };

  const seaterTypes = [
    {
      seater: '13 Seater',
      capacity: '13 Passengers',
      features: ['AC Pushback Seats', 'Music System', 'Wide Leg Space', 'Power Steering'],
      localRate: '₹6,000-7,500',
      fullDayRate: '₹9,000-10,000',
      outstationRate: '₹16-18/km',
      image: 'Img for Booking-03.png',
      bestFor: 'Family trips, small tours, office outings'
    },
    {
      seater: '14 Seater',
      capacity: '14 Passengers',
      features: ['AC with Heater', 'LCD Display', 'Music System', 'ABS Brakes'],
      localRate: '₹6,500-8,000',
      fullDayRate: '₹9,500-10,500',
      outstationRate: '₹17-19/km',
      image: 'Img for Booking-04.png',
      bestFor: 'Medium groups, wedding transport, school trips'
    },
    {
      seater: '17 Seater',
      capacity: '17 Passengers',
      features: ['Full AC System', 'Recliner Seats', 'Music System', 'LCD Display'],
      localRate: '₹7,000-8,500',
      fullDayRate: '₹10,000-11,500',
      outstationRate: '₹18-20/km',
      image: 'Img for Booking-05.png',
      bestFor: 'Large groups, tour groups, corporate events'
    },
    {
      seater: '20 Seater',
      capacity: '20 Passengers',
      features: ['Premium AC', 'Push Back Seats', 'Music & LCD', 'Power Windows'],
      localRate: '₹8,000-9,500',
      fullDayRate: '₹11,000-12,500',
      outstationRate: '₹19-21/km',
      image: 'Img for Booking-06.png',
      bestFor: 'Large family groups, charter tours, events'
    }
  ];

  return (
    <>
      <SEO
        title="13, 14, 17, 20 Seater Tempo Traveller on Rent in Pune | Affordable Group Transport"
        description="Book affordable 13-20 seater tempo travellers in Pune. Perfect for group travel, tours, weddings, and family outings. AC vehicles with experienced drivers, best rates for local and outstation trips."
        keywords="13 seater on rent Pune, 14 seater tempo traveller Pune, 17 seater bus rental Pune, 20 seater on rent Pune, tempo traveller hire Pune, group vehicle rental, affordable bus on rent, AC tempo traveller Pune, family group transport"
        path="/13-seater-on-rent-pune"
        image="/img/Img for Booking/Img for Booking-03.png"
        schema={seaterSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Vehicles', url: '/our-fleet' },
          { name: 'Seater Vehicles', url: '/13-seater-on-rent-pune' }
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
          height: 200px;
          object-fit: cover;
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
          font-size: 1.2rem;
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

        .comparison-table {
          margin-top: 2rem;
        }

        .vehicle-type-toggle {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .toggle-btn {
          padding: 1rem;
          border: 2px solid #ddd;
          background: white;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .toggle-btn.active {
          background: #ff7700;
          color: white;
          border-color: #ff7700;
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
              <h1 className="display-5 fw-bold mb-3">
                13 to 20 Seater Tempo Traveller on Rent in <span style={{ color: '#ff7700' }}>Pune</span>
              </h1>
              <p className="lead mb-4">
                Affordable group vehicle rentals for family trips, tours, and celebrations. Choose from 13, 14, 17, or 20 seater options with experienced drivers and best rates across Pune.
              </p>
              <div className="d-flex gap-3 flex-wrap mb-4">
                <Link to="/book-taxi" className="btn btn-lg fw-bold text-white" style={{ backgroundColor: '#ff7700' }}>
                  <i className="fas fa-calendar-check me-2"></i>Book Your Vehicle
                </Link>
                <a href="tel:+917875774499" className="btn btn-lg fw-bold border-2" style={{ borderColor: 'white', color: 'white' }}>
                  <i className="fas fa-phone me-2"></i>Call Now
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="/img/Img for Booking/Img for Booking-03.png" 
                alt="13 seater tempo traveller on rent in Pune - AC with pushback seats" 
                className="img-fluid rounded-3" 
                loading="lazy"
              />
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
                  <img 
                    src={`/img/Img for Booking/${type.image}`}
                    alt={`${type.seater} tempo traveller on rent in Pune - AC comfort seating`}
                    loading="lazy"
                  />
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
                      <h6>Local Trip</h6>
                      <p>{type.localRate}/4hrs</p>
                    </div>

                    <Link to="/book-taxi" className="btn btn-sm fw-bold text-white w-100" style={{ backgroundColor: '#ff7700' }}>
                      Book Now
                    </Link>
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
            <table className="table table-hover text-center">
              <thead style={{ backgroundColor: '#ff7700', color: 'white' }}>
                <tr>
                  <th className="text-start">Vehicle Type</th>
                  <th>4 Hour Local</th>
                  <th>Full Day (24h)</th>
                  <th>Outstation</th>
                </tr>
              </thead>
              <tbody>
                {seaterTypes.map((type, idx) => (
                  <tr key={idx}>
                    <td className="text-start fw-bold">{type.seater}</td>
                    <td>{type.localRate}</td>
                    <td>{type.fullDayRate}</td>
                    <td>{type.outstationRate}</td>
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