import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';

const CITY_MAP = {
  pune: { name: "Pune", hub: "Pune, Hinjewadi, Wakad, Baner, Kothrud & Pimpri-Chinchwad" },
  mumbai: { name: "Mumbai", hub: "Mumbai, Thane, Navi Mumbai & Airport" },
  shirdi: { name: "Shirdi", hub: "Shirdi Temple & Pilgrimage Routes" },
  lonavala: { name: "Lonavala", hub: "Lonavala, Khandala & Hill Stations" },
  nashik: { name: "Nashik", hub: "Nashik City, Trimbakeshwar & Vineyards" }
};

// Pricing matrices updated with exact per KM rates
const VEHICLE_PRICING = {
  "mini-bus": [
    { seat: 13, type: "Non-AC", pkg300: 7200, perKm: 22, local: 5500, mumbai: 9000, mahabaleshwar: 9000 },
    { seat: 13, type: "AC", pkg300: 8100, perKm: 25, local: 5500, mumbai: 10000, mahabaleshwar: 10000, shirdi: 10000 },
    { seat: 15, type: "AC", pkg300: 9000, perKm: 30, local: 5500, mumbai: 11000, mahabaleshwar: 11000, shirdi: 11000 },
    { seat: 17, type: "Non-AC", pkg300: 7500, perKm: 22, local: 5500, mumbai: 10000, mahabaleshwar: 10000 },
    { seat: 17, type: "AC", pkg300: 9600, perKm: 25, local: 5500, mumbai: 12000, mahabaleshwar: 12000, shirdi: 12000 },
    { seat: 20, type: "Non-AC", pkg300: 8100, perKm: 28, local: 5500, mumbai: 11000, mahabaleshwar: 12000 },
    { seat: 20, type: "AC", pkg300: 10200, perKm: 28, local: 6000, mumbai: 15000, mahabaleshwar: 15000, shirdi: 13000 },
  ],
  "tempo-traveller": [
    { seat: 13, type: "Non-AC", pkg300: 7200, perKm: 25, local: 5500, mumbai: 9000, mahabaleshwar: 9000 },
    { seat: 13, type: "AC", pkg300: 8100, perKm: 25, local: 5500, mumbai: 10000, mahabaleshwar: 10000, shirdi: 10000 },
    { seat: 17, type: "AC", pkg300: 9600, perKm: 25, local: 5500, mumbai: 12000, mahabaleshwar: 12000, shirdi: 12000 },
    { seat: 20, type: "AC", pkg300: 10200, perKm: 28, local: 6000, mumbai: 15000, mahabaleshwar: 15000, shirdi: 13000 },
    { seat: 26, type: "AC", pkg300: 11000, perKm: 38, local: 8000, mumbai: 18000, mahabaleshwar: 18000, shirdi: 14000 },
  ],
  "bus": [
    { seat: 30, type: "Non-AC", pkg300: 9600, perKm: 32, local: 7500, mumbai: 14000, mahabaleshwar: 13000 },
    { seat: 32, type: "Non-AC", pkg300: 11100, perKm: 45, local: 7500, mumbai: 18000, mahabaleshwar: 14000 },
    { seat: 32, type: "AC", pkg300: 12000, perKm: 45, local: 9500, mumbai: 16000, mahabaleshwar: 16000, shirdi: 18000 },
    { seat: 35, type: "AC", pkg300: 14000, perKm: 50, local: 12000, mumbai: 21000, mahabaleshwar: 21000, shirdi: 18000 },
    { seat: 40, type: "AC", pkg300: 14000, perKm: 60, local: 12000, mumbai: 21000, mahabaleshwar: 21000, shirdi: 18000 },
    { seat: 45, type: "AC", pkg300: 18000, perKm: 60, local: 14000, mumbai: 25000, mahabaleshwar: 25000, shirdi: 19500 },
    { seat: 49, type: "AC", pkg300: 21000, perKm: 90, local: 18000, mumbai: 27000, mahabaleshwar: 27000, shirdi: 21000 },
    { seat: "Volvo 49", type: "Special AC", pkg300: 25500, perKm: 90, local: 17000, mumbai: 27000, shirdi: 27000 }
  ],
  "force-urbania": [
    { seat: 13, type: "AC Luxury", pkg300: 9000, perKm: 35, local: 6000, mumbai: 12000, mahabaleshwar: 12000, shirdi: 11000 },
    { seat: 17, type: "AC Luxury", pkg300: 11000, perKm: 35, local: 7000, mumbai: 14000, mahabaleshwar: 14000, shirdi: 13000 }
  ]
};

const CityFleetPage = () => {
  const { city = "pune", vehicle = "mini-bus" } = useParams();
  
  const cityInfo = CITY_MAP[city] || CITY_MAP["pune"];
  const fareList = VEHICLE_PRICING[vehicle] || VEHICLE_PRICING["mini-bus"];
  const categoryName = vehicle.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");

  // Dynamically find the lowest Per KM rate for the selected vehicle
  const startingPrice = Math.min(...fareList.map(item => item.perKm));

  // Added the pricing dynamically into the middle of the title
  const pageTitle = `${categoryName} on Rent in ${cityInfo.name} @ ₹${startingPrice}/Km | Pricing & Packages`;
  
  const pageDescription = `Check transparent rental rates for ${categoryName.toLowerCase()} in ${cityInfo.name} starting at ₹${startingPrice}/Km. View outstation packages, local fares, and route trips to Mumbai, Shirdi & Mahabaleshwar.`;

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={`${categoryName.toLowerCase()} on rent in ${cityInfo.name}, rate per km, outstation package price`}
        path={`/rent/${city}/${vehicle}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: `${cityInfo.name} Rentals`, url: `/rent/${city}/${vehicle}` }
        ]}
      />

      {/* Hero Section */}
      <section className="py-5 text-white" style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}>
        <div className="container py-5">
          <span className="badge px-3 py-2 rounded-pill mb-3 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
            <i className="fas fa-map-marker-alt me-2"></i> Serving {cityInfo.hub}
          </span>
          <h1 className="display-4 fw-bold mb-3">{categoryName} on Rent in {cityInfo.name}</h1>
          <p className="lead col-lg-9 mb-4">
            Compare verified seating capacities, 300 km outstation packages, per-km rates starting at <strong>₹{startingPrice}/Km</strong>, and specific route pricing for your trip starting from {cityInfo.name}.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <a href="tel:+917620411277" className="btn btn-lg text-white fw-bold px-4 py-3 shadow-sm" style={{ backgroundColor: "#ff7700" }}>
              <i className="fas fa-phone-alt me-2"></i> Call: +91 76204 11277
            </a>
            <Link to="/book-taxi" className="btn btn-lg btn-outline-light fw-bold px-4 py-3 shadow-sm">
              Book on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Pricing Table Section */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold h3">Verified Fares & Packages for {categoryName} in {cityInfo.name}</h2>
            <p className="text-muted">Direct garage rates with transparent terms and no hidden charges.</p>
          </div>

          <div className="table-responsive shadow-sm rounded-4 border">
            <table className="table table-hover align-middle mb-0 text-center">
              <thead className="text-white" style={{ backgroundColor: '#0f172a' }}>
                <tr>
                  <th>Seating Capacity</th>
                  <th>Type</th>
                  <th>Per KM Rate (300 KM Pkg)</th>
                  <th>Per KM</th>
                  <th>8 Hrs / 80 KM Local</th>
                  <th>Mumbai Trip</th>
                  <th>Mahabaleshwar Trip</th>
                  {city === "shirdi" && <th>Shirdi Trip</th>}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {fareList.map((item, index) => (
                  <tr key={index}>
                    <td><strong>{item.seat} Seater</strong></td>
                    <td><span className={`badge ${item.type.includes('AC') && !item.type.includes('Non') ? 'bg-success' : 'bg-secondary'}`}>{item.type}</span></td>
                    <td className="fw-semibold" style={{ color: '#ff7700' }}>₹{item.pkg300}</td>
                    <td>₹{item.perKm}</td>
                    <td>₹{item.local}</td>
                    <td>₹{item.mumbai}</td>
                    <td>₹{item.mahabaleshwar}</td>
                    {city === "shirdi" && <td>{item.shirdi ? `₹${item.shirdi}` : '—'}</td>}
                    <td>
                      <Link to="/book-taxi" className="btn btn-sm text-white fw-bold px-3 rounded-pill" style={{ backgroundColor: '#ff7700' }}>
                        Book Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Rules Notice */}
      <section className="py-5 bg-light border-top">
        <div className="container">
          <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
            <h3 className="fw-bold h5 mb-3" style={{ color: '#ff7700' }}>Important Package Terms:</h3>
            <ul className="text-muted small mb-0" style={{ lineHeight: '1.8' }}>
              <li>Full toll, parking, passenger tax, and permit charges are to be paid by the customer.</li>
              <li>Outstation base package includes up to 300 km daily running limit.</li>
              <li>Service available daily with reliable highway-experienced drivers.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityFleetPage;