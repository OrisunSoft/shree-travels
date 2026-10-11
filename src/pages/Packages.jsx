import React from 'react';
import SEO from '../components/SEO';
import { FaPhoneAlt, FaWhatsapp, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const Packages = () => {
  // Official Tariff Card (04/02/2026) exactly matching the official fare chart:
  const nonAcFares = [
    { sr: 1, seat: '13 Seater Tempo Traveller', perKm: 22, pkg300: 6600, local: 5000, extraHr: 400, mahabaleshwar: 9000, mumbai: 10000 },
    { sr: 2, seat: '13 Seat WINGER', perKm: 22, pkg300: 6600, local: 5000, extraHr: 400, mahabaleshwar: 9000, mumbai: 10000 },
    { sr: 3, seat: '17 Seater Tempo Traveller', perKm: 22, pkg300: 6600, local: 5000, extraHr: 400, mahabaleshwar: 9000, mumbai: 10000 },
    { sr: 4, seat: '20 Seater Tempo Traveller', perKm: 25, pkg300: 7500, local: 6000, extraHr: 400, mahabaleshwar: 10000, mumbai: 11000 },
    { sr: 5, seat: '26 Seater Tempo Traveller', perKm: 32, pkg300: 9600, local: 7000, extraHr: 500, mahabaleshwar: 12000, mumbai: 14000 },
    { sr: 6, seat: '30 Seater Bus', perKm: 35, pkg300: 10500, local: 8000, extraHr: 400, mahabaleshwar: 13000, mumbai: 15000 },
    { sr: 7, seat: '32 Seater Bus', perKm: 35, pkg300: 10500, local: 8000, extraHr: 400, mahabaleshwar: 13000, mumbai: 15000 },
    { sr: 8, seat: '35 Seater Bus', perKm: 38, pkg300: 11400, local: 8000, extraHr: 400, mahabaleshwar: 14000, mumbai: 17000 },
    { sr: 9, seat: '45 Seater Bus', perKm: 50, pkg300: 15000, local: 10000, extraHr: 800, mahabaleshwar: 16000, mumbai: 20000 },
    { sr: 10, seat: '49 Seater Bus', perKm: 50, pkg300: 15000, local: 10000, extraHr: 800, mahabaleshwar: 16000, mumbai: 20000 },
  ];

  const acFares = [
    { sr: 1, seat: '13 Seater Tempo Traveller', perKm: 25, pkg300: 7500, local: 5500, extraHr: 500, mahabaleshwar: 10000, mumbai: 11000 },
    { sr: 2, seat: '13 Seat WINGER', perKm: 25, pkg300: 7500, local: 5500, extraHr: 500, mahabaleshwar: 10000, mumbai: 11000 },
    { sr: 3, seat: '17 Seater Tempo Traveller', perKm: 25, pkg300: 7500, local: 5500, extraHr: 500, mahabaleshwar: 10000, mumbai: 11000 },
    { sr: 4, seat: '20 Seater Tempo Traveller', perKm: 28, pkg300: 8400, local: 6500, extraHr: 500, mahabaleshwar: 12000, mumbai: 13000 },
    { sr: 5, seat: '26 Seater Tempo Traveller', perKm: 37, pkg300: 11100, local: 8000, extraHr: 500, mahabaleshwar: 14000, mumbai: 17000 },
    { sr: 6, seat: '13 Seat Urbania', perKm: 32, pkg300: 9600, local: 8000, extraHr: 400, mahabaleshwar: 12000, mumbai: 14000 },
    { sr: 7, seat: '17 Seat Urbania', perKm: 32, pkg300: 9600, local: 8000, extraHr: 500, mahabaleshwar: 12000, mumbai: 14000 },
    { sr: 8, seat: '24 SEAT MINIBUS', perKm: 40, pkg300: 12000, local: 7000, extraHr: 800, mahabaleshwar: 13000, mumbai: 18000 },
    { sr: 9, seat: '29 Seater Bus', perKm: 45, pkg300: 13500, local: 8000, extraHr: 1000, mahabaleshwar: 14000, mumbai: 18000 },
    { sr: 10, seat: '32 Seater Bus', perKm: 50, pkg300: 15000, local: 10000, extraHr: 1000, mahabaleshwar: 16000, mumbai: 22000 },
    { sr: 11, seat: '35 BENZ Luxury', perKm: 50, pkg300: 15000, local: 10000, extraHr: 1000, mahabaleshwar: 16500, mumbai: 22000 },
  ];

  const urbaniaFares = [
    { seat: '10 Seater Force Urbania Luxury AC', perKm: 32, pkg300: 9600, local: 8000, extraHr: 400, mahabaleshwar: 12000, mumbai: 14000 },
    { seat: '13 Seater Force Urbania Luxury AC', perKm: 32, pkg300: 9600, local: 8000, extraHr: 400, mahabaleshwar: 12000, mumbai: 14000 },
    { seat: '17 Seater Force Urbania Luxury AC', perKm: 32, pkg300: 9600, local: 8000, extraHr: 500, mahabaleshwar: 12000, mumbai: 14000 },
  ];

  const specialFares = [
    { sr: 10, seat: '53 Seat Volvo / Benz Luxury Coach', perKm: 80, pkg300: 24000, local: 20000, extraHr: 1000, mahabaleshwar: 25000, mumbai: 33000 }
  ];

  const packageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the per km rate for Force Urbania and Tempo Traveller in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Force Urbania (10, 13 & 17 Seater) is charged at flat ₹32/km for outstation travel, while Tempo Traveller (13 & 17 Seater) starts at ₹22/km (Non-AC) and ₹25/km (AC)."
        }
      },
      {
        "@type": "Question",
        "name": "What is the daily distance limit included in bus rental packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum daily billing distance for outstation trips is 300 km, with special fixed packages available for Mumbai and Mahabaleshwar routes."
        }
      },
      {
        "@type": "Question",
        "name": "What are the advance booking requirements for bus hire in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Advance booking requires 50% payment at least 2 days before the trip date."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Bus, Tempo Traveller & Force Urbania Rates in Pune | Starting at ₹22/km | Shree Travels"
        description="Official verified Fare Card (04/02/2026) for Bus, Tempo Traveller (Starting at ₹22/km) and Force Urbania (Starting at ₹32/km) rental rates in Pune. View AC & Non-AC bus packages, Pune local 8/80 fares, Mahabaleshwar and Mumbai packages."
        keywords="Bus fare Pune, Force Urbania rate per km Pune, Tempo Traveller rate per km Pune, Non AC bus rate, AC bus price Pune, Bus rental package, Shree Travels rates"
        path="/packages"
        schema={[packageSchema]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Packages", url: "/packages" }
        ]}
      />

      <section className="bg-light py-5">
        <div className="container py-4 text-center px-3">
          <span className="badge rounded-pill px-3 py-2 mb-2 fw-bold text-white shadow-sm" style={{ backgroundColor: '#ff7700' }}>
            OFFICIAL FARE CARD (VERIFIED RATES)
          </span>
          <h1 className="fw-bold mb-3 display-5 fs-3 fs-md-1">
            Bus, Tempo Traveller &amp; Urbania <span style={{ color: '#ff7700' }}>Fares &amp; Packages</span>
          </h1>
          <p className="text-muted lead fs-6 fs-md-5 max-w-75 mx-auto mb-2">
            Transparent pricing for local sightseeing, outstation packages, and corporate tours. Force Urbania Starting at ₹32/km, Tempo Traveller Starting at ₹22/km &amp; Buses Starting at ₹28–₹35/km.
          </p>
          <div className="d-inline-flex flex-wrap align-items-center justify-content-center gap-2 mt-2">
            <span className="badge bg-dark text-white px-3 py-2 rounded-pill">
              Minimum 300 KM / Day Outstation
            </span>
            <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold">
              Please note that toll, parking, and border tax charges are extra
            </span>
          </div>
          <div className="d-md-none small fw-semibold mt-3" style={{ color: '#ff7700' }}>
            ← Swipe tables horizontally to view all columns &amp; tap Book Now →
          </div>
        </div>
      </section>

      {/* Force Urbania Luxury Van Fare Section */}
      <section className="py-5 bg-white border-bottom">
        <div className="container px-2 px-md-3">
          <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 border-bottom pb-2 gap-2">
            <div>
              <h2 className="fw-bold mb-0 text-dark fs-4">Force Urbania Luxury AC Van Fare (Starting at ₹32/km)</h2>
              <small className="text-muted">Premium 10, 13 &amp; 17 Seater executive recliner fleet for outstation &amp; VIP tours</small>
            </div>
            <span className="badge rounded-pill px-3 py-2 text-white fw-bold shadow-sm" style={{ backgroundColor: '#ff7700' }}>
              Starting at ₹32/km Outstation Tariff
            </span>
          </div>
          <div className="table-responsive shadow-sm rounded-4 border bg-white">
            <table className="table table-hover align-middle mb-0 text-center">
              <thead className="text-white" style={{ backgroundColor: '#0f172a' }}>
                <tr>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>SR.NO</th>
                  <th className="text-white text-start" style={{ backgroundColor: '#0f172a' }}>Vehicle &amp; Seating</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>Per KM Rate</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>300 KM Outstation Pkg</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>8/80 Pune Local</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>Extra Hour</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>Mahabaleshwar (300 KM)</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>Mumbai (350 KM)</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {urbaniaFares.map((item, index) => (
                  <tr key={index}>
                    <td><strong>{index + 1}</strong></td>
                    <td className="text-start"><strong>{item.seat}</strong></td>
                    <td className="fw-bold text-success">₹{item.perKm}/km</td>
                    <td className="fw-bold" style={{ color: '#ff7700' }}>₹{item.pkg300.toLocaleString()}</td>
                    <td>₹{item.local.toLocaleString()}</td>
                    <td>₹{item.extraHr}</td>
                    <td>₹{item.mahabaleshwar.toLocaleString()}</td>
                    <td>₹{item.mumbai.toLocaleString()}</td>
                    <td>
                      <button
                        type="button"
                        data-vehicle={item.seat}
                        data-ac="AC"
                        data-place="Pune / Outstation"
                        className="btn btn-sm text-white fw-bold px-3 rounded-pill open-booking-popup-btn"
                        style={{ backgroundColor: '#ff7700' }}
                      >
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Non-AC Bus Fare Section */}
      <section className="py-5 bg-white">
        <div className="container px-2 px-md-3">
          <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 border-bottom pb-2 gap-2">
            <div>
              <h2 className="fw-bold mb-0 text-dark fs-4">NON AC BUS FARE CARD</h2>
              <small className="text-muted">Comfortable Seating • Safe &amp; Reliable • Best Rates for Group Travel</small>
            </div>
            <span className="badge bg-danger text-white rounded-pill px-3 py-2 fw-bold">
              Please note that toll, parking, and border tax charges are extra
            </span>
          </div>
          <div className="table-responsive shadow-sm rounded-4 border bg-white">
            <table className="table table-hover align-middle mb-0 text-center responsive-fare-table">
              <thead className="text-white" style={{ backgroundColor: '#ff7700' }}>
                <tr>
                  <th className="text-white" style={{ backgroundColor: '#ff7700' }}>SR.NO</th>
                  <th className="text-white text-start" style={{ backgroundColor: '#ff7700' }}>SEAT</th>
                  <th className="text-white" style={{ backgroundColor: '#ff7700' }}>PER KM RATE</th>
                  <th className="text-white" style={{ backgroundColor: '#ff7700' }}>300 KM PACKAGE</th>
                  <th className="text-white" style={{ backgroundColor: '#ff7700' }}>8/80/ PUNE LOCAL</th>
                  <th className="text-white" style={{ backgroundColor: '#ff7700' }}>EXTRA HOUR</th>
                  <th className="text-white" style={{ backgroundColor: '#ff7700' }}>MAHABALESHWAR 300 KMS</th>
                  <th className="text-white" style={{ backgroundColor: '#ff7700' }}>MUMBAI (350 KMS)</th>
                  <th className="text-white" style={{ backgroundColor: '#ff7700' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {nonAcFares.map((item, index) => (
                  <tr key={index}>
                    <td data-label="SR.NO"><strong>{item.sr}</strong></td>
                    <td data-label="SEAT" className="text-start"><strong>{item.seat} (Non-AC)</strong></td>
                    <td data-label="PER KM RATE" className="fw-bold text-success">₹{item.perKm}/km</td>
                    <td data-label="300 KM PACKAGE" className="fw-bold" style={{ color: '#ff7700' }}>₹{item.pkg300.toLocaleString()}</td>
                    <td data-label="8/80/ PUNE LOCAL">₹{item.local.toLocaleString()}</td>
                    <td data-label="EXTRA HOUR">₹{item.extraHr}</td>
                    <td data-label="MAHABALESHWAR 300 KMS">₹{item.mahabaleshwar.toLocaleString()}</td>
                    <td data-label="MUMBAI (350 KMS)">₹{item.mumbai.toLocaleString()}</td>
                    <td data-label="ACTION">
                      <button
                        type="button"
                        data-vehicle={`${item.seat} Non-AC`}
                        data-ac="Non-AC"
                        data-place="Pune / Outstation"
                        className="btn btn-sm text-white fw-bold px-3 rounded-pill open-booking-popup-btn"
                        style={{ backgroundColor: '#ff7700' }}
                      >
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AC Bus Fare Section */}
      <section className="py-5 bg-light">
        <div className="container px-2 px-md-3">
          <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 border-bottom pb-2 gap-2">
            <div>
              <h2 className="fw-bold mb-0 text-dark fs-4">AC BUS FARE CARD</h2>
              <small className="text-muted">AC Comfort Journey • Well Maintained Vehicles • Perfect for Outstation &amp; Tours</small>
            </div>
            <span className="badge bg-dark text-white rounded-pill px-3 py-2 fw-bold">
              Please note that toll, parking, and border tax charges are extra
            </span>
          </div>
          <div className="table-responsive shadow-sm rounded-4 border bg-white">
            <table className="table table-hover align-middle mb-0 text-center responsive-fare-table bg-white">
              <thead className="text-white" style={{ backgroundColor: '#0f172a' }}>
                <tr>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>SR.NO</th>
                  <th className="text-white text-start" style={{ backgroundColor: '#0f172a' }}>SEAT</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>PER KM RATE</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>300 KM PACKAGE</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>8/80/ PUNE LOCAL</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>EXTRA HOUR</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>MAHABALESHWAR 300 KMS</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>MUMBAI (350 KMS)</th>
                  <th className="text-white" style={{ backgroundColor: '#0f172a' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {acFares.map((item, index) => (
                  <tr key={index}>
                    <td data-label="SR.NO"><strong>{item.sr}</strong></td>
                    <td data-label="SEAT" className="text-start"><strong>{item.seat} (AC)</strong></td>
                    <td data-label="PER KM RATE" className="fw-bold text-success">₹{item.perKm}/km</td>
                    <td data-label="300 KM PACKAGE" className="fw-bold" style={{ color: '#ff7700' }}>₹{item.pkg300.toLocaleString()}</td>
                    <td data-label="8/80/ PUNE LOCAL">₹{item.local.toLocaleString()}</td>
                    <td data-label="EXTRA HOUR">₹{item.extraHr}</td>
                    <td data-label="MAHABALESHWAR 300 KMS">₹{item.mahabaleshwar.toLocaleString()}</td>
                    <td data-label="MUMBAI (350 KMS)">₹{item.mumbai.toLocaleString()}</td>
                    <td data-label="ACTION">
                      <button
                        type="button"
                        data-vehicle={`${item.seat} AC`}
                        data-ac="AC"
                        data-place="Pune / Outstation"
                        className="btn btn-sm text-white fw-bold px-3 rounded-pill open-booking-popup-btn"
                        style={{ backgroundColor: '#ff7700' }}
                      >
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Special Premium Bus Fare Section */}
      <section className="py-5 bg-white">
        <div className="container px-2 px-md-3">
          <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 border-bottom pb-2 gap-2">
            <div>
              <h2 className="fw-bold mb-0 text-dark fs-4">SPECIAL PREMIUM BUSES</h2>
              <small className="text-muted">Luxury Multi-Axle Volvo &amp; Mercedes-Benz Premium Highway Coaches</small>
            </div>
            <span className="badge rounded-pill px-3 py-2 text-white fw-bold" style={{ backgroundColor: '#6f42c1' }}>
              Ultra-Luxury 53 Seater Volvo
            </span>
          </div>
          <div className="table-responsive shadow-sm rounded-4 border bg-white">
            <table className="table table-hover align-middle mb-0 text-center responsive-fare-table">
              <thead className="text-white" style={{ backgroundColor: '#212529' }}>
                <tr>
                  <th className="text-white" style={{ backgroundColor: '#212529' }}>SR.NO</th>
                  <th className="text-white text-start" style={{ backgroundColor: '#212529' }}>SEAT</th>
                  <th className="text-white" style={{ backgroundColor: '#212529' }}>PER KM RATE</th>
                  <th className="text-white" style={{ backgroundColor: '#212529' }}>300 KM PACKAGE</th>
                  <th className="text-white" style={{ backgroundColor: '#212529' }}>8/80/ PUNE LOCAL</th>
                  <th className="text-white" style={{ backgroundColor: '#212529' }}>EXTRA HOUR</th>
                  <th className="text-white" style={{ backgroundColor: '#212529' }}>MAHABALESHWAR 300 KMS</th>
                  <th className="text-white" style={{ backgroundColor: '#212529' }}>MUMBAI (350 KMS)</th>
                  <th className="text-white" style={{ backgroundColor: '#212529' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {specialFares.map((item, index) => (
                  <tr key={index}>
                    <td data-label="SR.NO"><strong>{item.sr}</strong></td>
                    <td data-label="SEAT" className="text-start"><strong>{item.seat}</strong></td>
                    <td data-label="PER KM RATE" className="fw-bold text-success">₹{item.perKm}/km</td>
                    <td data-label="300 KM PACKAGE" className="fw-bold" style={{ color: '#ff7700' }}>₹{item.pkg300.toLocaleString()}</td>
                    <td data-label="8/80/ PUNE LOCAL">₹{item.local.toLocaleString()}</td>
                    <td data-label="EXTRA HOUR">₹{item.extraHr}</td>
                    <td data-label="MAHABALESHWAR 300 KMS">₹{item.mahabaleshwar.toLocaleString()}</td>
                    <td data-label="MUMBAI (350 KMS)">₹{item.mumbai.toLocaleString()}</td>
                    <td data-label="ACTION">
                      <button
                        type="button"
                        data-vehicle={item.seat}
                        data-ac="AC"
                        data-place="Pune / Outstation"
                        className="btn btn-sm text-white fw-bold px-3 rounded-pill open-booking-popup-btn"
                        style={{ backgroundColor: '#ff7700' }}
                      >
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Rules and Guidelines Section */}
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container px-2 px-md-3">
          <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4 bg-white">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
              <span className="badge rounded-pill px-3 py-2 fw-bold text-white shadow-sm" style={{ backgroundColor: '#ff7700' }}>
                RULES &amp; GUIDELINES
              </span>
              <span className="badge bg-danger text-white fw-bold px-3 py-2 rounded-pill shadow-sm">
                Please note that toll, parking, and border tax charges are extra
              </span>
            </div>
            <h3 className="fw-bold h4 mb-3" style={{ color: '#0f172a' }}>Rules and Guidelines:</h3>
            
            <ul className="text-dark small mb-4" style={{ lineHeight: '1.9', fontSize: '0.92rem' }}>
              <li className="mb-2">
                <strong>Toll, Parking &amp; Taxes:</strong> Full toll, parking, passenger tax, GST, and the cost of special permits are to be paid by the party. (<em>Please note that toll, parking, and border tax charges are extra / paid at actuals</em>).
              </li>
              <li className="mb-2">
                <strong>Outstation Minimum Daily Billing:</strong> For an outstation trip, the minimum daily billing distance is 300 km; special fixed packages apply for Mumbai, Shirdi, and Mahabaleshwar routes.
              </li>
              <li className="mb-2">
                <strong>Force Urbania Tariff:</strong> Force Urbania (10, 13 &amp; 17 Seater) is charged at flat ₹32/km for outstation travel.
              </li>
              <li className="mb-2">
                <strong>Operating Service Hours:</strong> Bus service is available from 6:00 AM to 12:00 midnight. Extra hours incur additional charges as specified in the tariff table.
              </li>
              <li className="mb-2">
                <strong>Advance Booking Policy:</strong> Advance booking requires 50% payment at least 2 days before the trip date.
              </li>
              <li className="mb-2">
                <strong>Calculation Basis:</strong> Time and kilometer calculation will be from garage/office to office.
              </li>
              <li className="mb-2">
                <strong>Permit Charges:</strong> Permit charges Rs. 1000 will be applicable extra for all duties other than PMC / PCMC municipal area.
              </li>
              <li className="mb-0">
                <strong>Driver Food &amp; Allowance:</strong> Driver food charges will be ₹300/- per day for local duties and ₹400/- per day for outstation duties (included for fixed Mumbai package duties as per fare card).
              </li>
            </ul>

            <div className="p-3 rounded-3 border d-flex flex-wrap align-items-center justify-content-between gap-3" style={{ backgroundColor: '#fffaf5', borderColor: '#ff7700' }}>
              <div>
                <strong className="text-dark d-block">Need Instant Quotation or Custom Group Tour Booking?</strong>
                <span className="text-muted small">Head Office: Office no 201, Dodke Palazzo, near mahatma society, Pramathesh Housing Society, Jijai Nagar, Kothrud, Pune 411038</span>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <a href="https://wa.me/917875774499" target="_blank" rel="noopener noreferrer" className="btn btn-sm text-white fw-bold px-3 py-2 rounded-pill shadow-sm" style={{ backgroundColor: '#25D366' }}>
                  <FaWhatsapp className="me-1" /> WhatsApp +91 78757 74499
                </a>
                <a href="tel:+917620411277" className="btn btn-sm btn-dark fw-bold px-3 py-2 rounded-pill shadow-sm">
                  <FaPhoneAlt className="me-1" /> Call +91 76204 11277
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;