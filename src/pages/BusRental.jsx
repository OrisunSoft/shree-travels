import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const BusRental = () => {
  const busSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    name: 'Bus On Rent in Pune - Shree Travels',
    description: 'Book 20, 25, 32, 35, 40, 45 & 50 seater AC, Non-AC & Volvo luxury buses on rent in Pune at verified per-km rates.',
    telephone: '+917620411277',
    url: 'https://shreetravels.in/bus-rental-pune'
  };

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100%' }}>
      <SEO 
        title="Bus On Rent in Pune @ ₹28/km | 20, 32, 35, 40, 45 & 50 Seater Bus Hire"
        description="Book Bus On Rent in Pune with Shree Travels. Verified 20, 25, 32, 35, 40, 45 & 50 seater AC, Non-AC & Volvo luxury coaches for weddings, corporate events, school picnics & outstation tours. Call +91 7620411277 or WhatsApp +91 78757 74499."
        keywords="Bus On Rent in Pune, Bus Hire in Pune, Pune Bus Hire, 32 Seater Bus On Rent in Pune, 35 Seater Bus On Rent in Pune, 40 Seater bus on rent in pune, 50 Seater Bus On Rent in Pune, Volvo Bus On Rent in Pune"
        path="/bus-rental-pune"
        image="/img/Keyword Based Image/Keyword Based Image-47.jpg"
        schema={busSchema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Bus On Rent in Pune", url: "/bus-rental-pune" }
        ]}
      />

      {/* Hero Banner Section */}
      <section className="py-5 text-white" style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}>
        <div className="container py-4 text-center text-lg-start">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="badge px-3 py-2 rounded-pill mb-3 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
                <i className="fas fa-bus me-2"></i> Maharashtra's Trusted Group Fleet Service
              </span>
              <h1 className="display-4 fw-bold mb-3 text-white">Bus On Rent in Pune</h1>
              <p className="lead opacity-75 mb-4">
                Book immaculately maintained 17, 20, 25, 32, 35, 40, 45 & 50-seater AC, Non-AC, Scania, and Volvo buses on rent in Pune. Serving Hinjewadi, Kharadi, Pimpri-Chinchwad, Mumbai, Shirdi, Lonavala, and Mahabaleshwar with transparent garage-to-garage per-km billing.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-3">
                <a href="tel:+917620411277" className="btn btn-lg text-white fw-bold px-4 py-3 shadow-sm" style={{ backgroundColor: "#ff7700" }}>
                  <i className="fas fa-phone-alt me-2"></i> Call +91 76204 11277
                </a>
                <a
                  href="https://wa.me/917875774499?text=Hello%20Shree%20Travels%2C%20I%20want%20to%20book%20a%20Bus%20On%20Rent%20in%20Pune.%20Please%20share%20rates."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg text-white fw-bold px-4 py-3 shadow-sm"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <i className="fab fa-whatsapp me-2"></i> WhatsApp +91 78757 74499
                </a>
                <Link to="/book-taxi" className="btn btn-lg btn-outline-light fw-bold px-4 py-3 shadow-sm">
                  Book Online
                </Link>
              </div>
              <div className="small text-light opacity-75">
                <strong>24/7 Dispatch Desk:</strong> <a href="tel:+917620411277" className="text-white text-decoration-none me-2">+91 76204 11277</a> | <a href="https://wa.me/917875774499" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none ms-2">WhatsApp: +91 78757 74499</a>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="p-4 rounded-4 shadow bg-white text-dark border">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#ff7700' }}>Quick Fleet Booking</h2>
                <p className="text-muted small mb-4">Select your seating capacity or city hub for instant per-km rates.</p>
                <div className="d-grid gap-2">
                  <Link to="/32-seater-bus-on-rent-in-pune" className="btn btn-dark fw-semibold py-2">32 Seater Bus On Rent in Pune</Link>
                  <Link to="/35-seater-bus-on-rent-in-pune" className="btn btn-outline-dark fw-semibold py-2">35 & 40 Seater Bus On Rent in Pune</Link>
                  <Link to="/50-seater-bus-on-rent-in-pune" className="btn btn-outline-dark fw-semibold py-2">45 & 50 Seater Bus On Rent in Pune</Link>
                  <Link to="/volvo-bus-on-rent-in-pune" className="btn btn-outline-dark fw-semibold py-2">Volvo & Scania Bus On Rent in Pune</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Fleet Visual & Overview */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="position-relative overflow-hidden rounded-4 shadow-lg my-3">
                <img 
                  src="/img/Keyword Based Image/Keyword Based Image-47.jpg" 
                  alt="Bus On Rent in Pune - 32, 35, 40, 45, 50 Seater Luxury Coaches" 
                  className="img-fluid w-100 rounded-4"
                  style={{ maxHeight: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold h3 mb-4">Complete Bus & Coach Range Across Pune & Maharashtra</h2>
              <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                Whether you are organizing an employee shuttle from Hinjewadi or Kharadi, a wedding baraat convoy in Pune & PCMC, a school excursion, or an outstation pilgrimage to Shirdi, Ashtavinayak, and Mahabaleshwar, Shree Travels dispatches RTA-certified coaches with uniformed highway drivers.
              </p>
              <div className="row g-3">
                <div className="col-6">
                  <div className="p-3 bg-light rounded-3 border-start border-4 border-warning">
                    <h3 className="h6 fw-bold mb-1">Mini Buses</h3>
                    <p className="small text-muted mb-0">17, 20 & 25 Seater (@ ₹22–38/km)</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-light rounded-3 border-start border-4 border-warning">
                    <h3 className="h6 fw-bold mb-1">Medium Coaches</h3>
                    <p className="small text-muted mb-0">30, 32 & 35 Seater (@ ₹32–50/km)</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-light rounded-3 border-start border-4 border-warning">
                    <h3 className="h6 fw-bold mb-1">Large Luxury Buses</h3>
                    <p className="small text-muted mb-0">40, 45 & 50 Seater (@ ₹48–90/km)</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-light rounded-3 border-start border-4 border-warning">
                    <h3 className="h6 fw-bold mb-1">Volvo & Scania</h3>
                    <p className="small text-muted mb-0">45 & 49 Seater Multi-Axle (@ ₹80–90/km)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Packages.jsx Bus Tariff Table */}
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container py-2">
          <div className="text-center mb-4">
            <h2 className="fw-bold h3">Official Bus On Rent in Pune Rate Card</h2>
            <p className="text-muted">Synchronized with our official Packages.jsx tariff — zero hidden charges</p>
          </div>
          <div className="table-responsive shadow-sm rounded-4 border bg-white overflow-hidden">
            <table className="table table-hover align-middle mb-0 text-center">
              <thead style={{ backgroundColor: '#0f172a', color: '#fff' }}>
                <tr>
                  <th className="py-3 text-white" style={{ backgroundColor: '#0f172a' }}>Bus Capacity</th>
                  <th className="py-3 text-white" style={{ backgroundColor: '#0f172a' }}>Non-AC / KM</th>
                  <th className="py-3 text-white" style={{ backgroundColor: '#0f172a' }}>AC / KM</th>
                  <th className="py-3 text-white" style={{ backgroundColor: '#0f172a' }}>Local 8Hr/80KM</th>
                  <th className="py-3 text-white" style={{ backgroundColor: '#0f172a' }}>Outstation 300KM Pkg</th>
                  <th className="py-3 text-white" style={{ backgroundColor: '#0f172a' }}>Mumbai / Mahabaleshwar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-bold"><Link to="/20-seater-bus-rental-pune" className="text-decoration-none text-dark">20 Seater Mini Bus / Tempo Traveller</Link></td>
                  <td>₹25/km</td>
                  <td className="fw-bold" style={{ color: '#ff7700' }}>₹28/km</td>
                  <td>₹6,000 / ₹6,500</td>
                  <td>₹7,500 / ₹8,400</td>
                  <td>₹10,000 – ₹13,000</td>
                </tr>
                <tr>
                  <td className="fw-bold"><Link to="/25-seater-bus-on-rent-in-pune" className="text-decoration-none text-dark">26 Seater Bus / Tempo Traveller</Link></td>
                  <td>₹32/km</td>
                  <td className="fw-bold" style={{ color: '#ff7700' }}>₹37/km</td>
                  <td>₹7,000 / ₹8,000</td>
                  <td>₹9,600 / ₹11,100</td>
                  <td>₹12,000 – ₹17,000</td>
                </tr>
                <tr>
                  <td className="fw-bold"><Link to="/32-seater-bus-on-rent-in-pune" className="text-decoration-none text-dark">30 / 32 Seater Bus</Link></td>
                  <td>₹35/km</td>
                  <td className="fw-bold" style={{ color: '#ff7700' }}>₹50/km</td>
                  <td>₹8,000 / ₹10,000</td>
                  <td>₹10,500 / ₹15,000</td>
                  <td>₹13,000 – ₹22,000</td>
                </tr>
                <tr>
                  <td className="fw-bold"><Link to="/35-seater-bus-on-rent-in-pune" className="text-decoration-none text-dark">35 Seater Bus (Benz / Executive)</Link></td>
                  <td>₹38/km</td>
                  <td className="fw-bold" style={{ color: '#ff7700' }}>₹50/km</td>
                  <td>₹8,000 / ₹10,000</td>
                  <td>₹11,400 / ₹15,000</td>
                  <td>₹14,000 – ₹22,000</td>
                </tr>
                <tr>
                  <td className="fw-bold"><Link to="/40-seater-bus-on-rent-in-pune" className="text-decoration-none text-dark">45 / 49 Seater Bus (Non-AC)</Link></td>
                  <td>₹50/km</td>
                  <td className="fw-bold" style={{ color: '#ff7700' }}>—</td>
                  <td>₹10,000</td>
                  <td>₹15,000</td>
                  <td>₹16,000 / ₹20,000</td>
                </tr>
                <tr>
                  <td className="fw-bold"><Link to="/volvo-bus-on-rent-in-pune" className="text-decoration-none text-dark">53 Seater Volvo / Benz Special Bus</Link></td>
                  <td>—</td>
                  <td className="fw-bold" style={{ color: '#ff7700' }}>₹80/km</td>
                  <td>₹20,000</td>
                  <td>₹24,000</td>
                  <td>₹25,000 / ₹33,000</td>
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

      {/* Bus Photo Gallery */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold h3">Our Pune Bus Fleet Gallery</h2>
            <p className="text-muted">Verified 32, 35, 45, 50 Seater & Luxury Coaches ready for dispatch</p>
          </div>
          <div className="row g-4">
            {[
              { src: '/img/Keyword Based Image/Keyword Based Image-11.jpg', label: '32 Seater Bus Rent in Pune', link: '/32-seater-bus-on-rent-in-pune' },
              { src: '/img/Keyword Based Image/Keyword Based Image-12.jpg', label: '35 Seater Bus On Rent in Pune', link: '/35-seater-bus-on-rent-in-pune' },
              { src: '/img/Keyword Based Image/Keyword Based Image-13.jpg', label: '45 Seater Bus On Rent in Pune', link: '/40-seater-bus-on-rent-in-pune' },
              { src: '/img/Keyword Based Image/Keyword Based Image-14.jpg', label: '50 Seater Bus On Rent in Pune', link: '/50-seater-bus-on-rent-in-pune' }
            ].map((item, idx) => (
              <div className="col-sm-6 col-lg-3" key={idx}>
                <Link to={item.link} className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                    <img src={item.src} alt={item.label} className="img-fluid w-100" style={{ height: '210px', objectFit: 'cover' }} loading="lazy" />
                    <div className="card-body p-3 text-center">
                      <p className="small fw-bold mb-0 text-dark">{item.label}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage & Local Keywords Section */}
      <section className="py-5 bg-light border-top">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold h3">Regional Hubs & Local Area Coverage</h2>
            <p className="text-muted">Direct doorstep pickup and drop services across key localities.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white">
                <h3 className="h5 fw-bold mb-2" style={{ color: '#ff7700' }}>Pune & PCMC Hub</h3>
                <p className="text-muted small mb-3">Hinjewadi, Wakad, Baner, Kothrud, Magarpatta, Kharadi, Hadapsar, Viman Nagar, Pimpri-Chinchwad.</p>
                <Link to="/rent/pune/mini-bus" className="btn btn-outline-dark btn-sm rounded-pill mt-auto">Explore Pune Mini Bus →</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white">
                <h3 className="h5 fw-bold mb-2" style={{ color: '#ff7700' }}>Mumbai & Thane Hub</h3>
                <p className="text-muted small mb-3">Andheri, Borivali, Thane, Navi Mumbai, Dadar, CSMT, Kurla, Mumbai Airport (BOM) transfers.</p>
                <Link to="/rent/mumbai/force-urbania" className="btn btn-outline-dark btn-sm rounded-pill mt-auto">Explore Mumbai Fleet →</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white">
                <h3 className="h5 fw-bold mb-2" style={{ color: '#ff7700' }}>Shirdi Pilgrimage Hub</h3>
                <p className="text-muted small mb-3">Direct temple parking pickups, Shirdi Darshan packages, family groups, and senior citizen travel.</p>
                <Link to="/rent/shirdi/bus" className="btn btn-outline-dark btn-sm rounded-pill mt-auto">Explore Shirdi Fleet →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusRental;