import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Packages = () => {
  const nonAcFares = [
    { seat: 13, pkg300: 7200, perKm: 22, local: 5500, extraHr: 400, mumbai: 9000, mahabaleshwar: 9000 },
    { seat: 17, pkg300: 7500, perKm: 22, local: 5500, extraHr: 400, mumbai: 10000, mahabaleshwar: 10000 },
    // Updated 20 seater to 28 per km
    { seat: 20, pkg300: 8100, perKm: 28, local: 5500, extraHr: 400, mumbai: 11000, mahabaleshwar: 12000 },
    { seat: 30, pkg300: 9600, perKm: 32, local: 7500, extraHr: 400, mumbai: 14000, mahabaleshwar: 13000 },
    // 32 seater is 45 per km
    { seat: 32, pkg300: 11100, perKm: 45, local: 7500, extraHr: 400, mumbai: 18000, mahabaleshwar: 14000 },
    { seat: 35, pkg300: 12000, perKm: 40, local: 8000, extraHr: 400, mumbai: 18000, mahabaleshwar: 14000 },
    { seat: 45, pkg300: 14400, perKm: 48, local: 9000, extraHr: 400, mumbai: 20000, mahabaleshwar: 16000 },
    { seat: 49, pkg300: 15000, perKm: 50, local: 9500, extraHr: 400, mumbai: 20000, mahabaleshwar: 16000 },
  ];

  const acFares = [
    { seat: 13, pkg300: 8100, perKm: 25, local: 5500, extraHr: 500, mumbai: 10000, mahabaleshwar: 10000, shirdi: 10000 },
    { seat: 15, pkg300: 9000, perKm: 30, local: 5500, extraHr: 500, mumbai: 11000, mahabaleshwar: 11000, shirdi: 11000 },
    { seat: 17, pkg300: 9600, perKm: 25, local: 5500, extraHr: 500, mumbai: 12000, mahabaleshwar: 12000, shirdi: 12000 },
    // Updated 20 seater to 28 per km
    { seat: 20, pkg300: 10200, perKm: 28, local: 6000, extraHr: 500, mumbai: 15000, mahabaleshwar: 15000, shirdi: 13000 },
    { seat: 24, pkg300: 11000, perKm: 38, local: 8000, extraHr: 500, mumbai: 18000, mahabaleshwar: 18000, shirdi: 14000 },
    // Updated 32 seater to 45 per km
    { seat: 32, pkg300: 12000, perKm: 45, local: 9500, extraHr: 600, mumbai: 16000, mahabaleshwar: 16000, shirdi: 18000 },
    { seat: 35, pkg300: 14000, perKm: 50, local: 12000, extraHr: 800, mumbai: 21000, mahabaleshwar: 21000, shirdi: 18000 },
    { seat: 40, pkg300: 14000, perKm: 60, local: 12000, extraHr: 800, mumbai: 21000, mahabaleshwar: 21000, shirdi: 18000 },
    { seat: 45, pkg300: 18000, perKm: 60, local: 14000, extraHr: 1000, mumbai: 25000, mahabaleshwar: 25000, shirdi: 19500 },
    { seat: 49, pkg300: 21000, perKm: 90, local: 18000, extraHr: 1000, mumbai: 27000, mahabaleshwar: 27000, shirdi: 21000 },
  ];

  const specialFares = [
    { seat: "Scania 45", pkg300: 24000, perKm: 80, local: 17000, extraHr: 1000, mumbai: 24000, shirdi: 24000 },
    { seat: "Volvo 49", pkg300: 25500, perKm: 90, local: 17000, extraHr: 1000, mumbai: 27000, shirdi: 27000 },
  ];

  // FAQ Schema for Search Engine Spiders
  const packageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the daily distance limit included in bus rental packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average daily distance allowed is 300 km for outstation trips, with specific packages available for Mumbai and Mahabaleshwar routes."
        }
      },
      {
        "@type": "Question",
        "name": "What are the advance booking requirements for bus hire in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Advance booking requires 50% of the total amount along with a security deposit to be paid at least 2 days before the trip date."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Bus Rental Rates & Packages in Pune | Starting at ₹22/Km"
        description="Check transparent bus rental rates starting at ₹22/Km. View non-AC and AC bus packages, local Pune fares, and outstation trips to Mumbai and Shirdi."
        keywords="Bus fare Pune, Non AC bus rate, AC bus price Pune, Bus rental package, Shree Travels rates, Bus rent per km"
        path="/packages"
        schema={[packageSchema]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Packages", url: "/packages" }
        ]}
      />

      <section className="bg-light py-5">
        <div className="container py-4 text-center px-3">
          <h1 className="fw-bold mb-3 display-5 fs-3 fs-md-1">Bus Rental <span style={{ color: '#ff7700' }}>Fares & Packages</span></h1>
          <p className="text-muted lead fs-6 fs-md-5 max-w-75 mx-auto">
            Transparent pricing for local sightseeing, outstation packages, and corporate tours. No hidden charges.
          </p>
        </div>
      </section>

      {/* Non-AC Bus Fare Section */}
      <section className="py-5 bg-white">
        <div className="container px-2 px-md-3">
          <div className="d-flex align-items-center mb-4 border-bottom pb-2">
            <h2 className="fw-bold mb-0 text-dark fs-4">Non-AC Bus Fare</h2>
          </div>
          <div className="table-responsive border-0">
            <table className="table table-hover align-middle mb-0 text-center responsive-fare-table">
              <thead className="text-white" style={{ backgroundColor: '#ff7700' }}>
                <tr>
                  <th>SR.NO</th>
                  <th>Seat</th>
                  <th>Per KM Rate (300 KM Pkg)</th>
                  <th>Per KM</th>
                  <th>8/80 Pune Local</th>
                  <th>Extra Hour</th>
                  <th>Mumbai Upto 350KM</th>
                  <th>Mahabaleshwar Upto 300KM</th>
                </tr>
              </thead>
              <tbody>
                {nonAcFares.map((item, index) => (
                  <tr key={index}>
                    <td data-label="SR.NO"><strong>{index + 1}</strong></td>
                    <td data-label="Seat"><strong>{item.seat} Seater</strong></td>
                    <td data-label="Per KM Rate (300 KM Pkg)" className="fw-semibold text-primary">₹{item.pkg300}</td>
                    <td data-label="Per KM">₹{item.perKm}</td>
                    <td data-label="8/80 Pune Local">₹{item.local}</td>
                    <td data-label="Extra Hour">₹{item.extraHr}</td>
                    <td data-label="Mumbai Upto 350KM">₹{item.mumbai}</td>
                    <td data-label="Mahabaleshwar Upto 300KM">₹{item.mahabaleshwar}</td>
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
          <div className="d-flex align-items-center mb-4 border-bottom pb-2">
            <h2 className="fw-bold mb-0 text-dark fs-4">AC Bus Fare</h2>
          </div>
          <div className="table-responsive border-0">
            <table className="table table-hover align-middle mb-0 text-center responsive-fare-table bg-white">
              <thead className="text-white" style={{ backgroundColor: '#0f172a' }}>
                <tr>
                  <th>SR.NO</th>
                  <th>Seat</th>
                  <th>Per KM Rate (300 KM Pkg)</th>
                  <th>Per KM</th>
                  <th>8/80 Pune Local</th>
                  <th>Extra Hour</th>
                  <th>Mumbai Upto 350KM</th>
                  <th>Mahabaleshwar / Mumbai</th>
                  <th>Shirdi (450 KM)</th>
                </tr>
              </thead>
              <tbody>
                {acFares.map((item, index) => (
                  <tr key={index}>
                    <td data-label="SR.NO"><strong>{index + 1}</strong></td>
                    <td data-label="Seat"><strong>{item.seat} Seater</strong></td>
                    <td data-label="Per KM Rate (300 KM Pkg)" className="fw-semibold" style={{ color: '#ff7700' }}>₹{item.pkg300}</td>
                    <td data-label="Per KM">₹{item.perKm}</td>
                    <td data-label="8/80 Pune Local">₹{item.local}</td>
                    <td data-label="Extra Hour">₹{item.extraHr}</td>
                    <td data-label="Mumbai Upto 350KM">₹{item.mumbai}</td>
                    <td data-label="Mahabaleshwar / Mumbai">₹{item.mahabaleshwar}</td>
                    <td data-label="Shirdi (450 KM)">₹{item.shirdi}</td>
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
          <div className="d-flex align-items-center mb-4 border-bottom pb-2">
            <h2 className="fw-bold mb-0 text-dark fs-4">Special Premium Bus Fare</h2>
          </div>
          <div className="table-responsive border-0">
            <table className="table table-hover align-middle mb-0 text-center responsive-fare-table">
              <thead className="text-white bg-dark">
                <tr>
                  <th>SR.NO</th>
                  <th>Seat</th>
                  <th>Per KM Rate (300 KM Pkg)</th>
                  <th>Per KM</th>
                  <th>8/80 Pune Local</th>
                  <th>Extra Hour</th>
                  <th>Mahabaleshwar / Mumbai</th>
                  <th>Shirdi (450 KM)</th>
                </tr>
              </thead>
              <tbody>
                {specialFares.map((item, index) => (
                  <tr key={index}>
                    <td data-label="SR.NO"><strong>{10 + index}</strong></td>
                    <td data-label="Seat"><strong>{item.seat}</strong></td>
                    <td data-label="Per KM Rate (300 KM Pkg)" className="fw-semibold text-success">₹{item.pkg300}</td>
                    <td data-label="Per KM">₹{item.perKm}</td>
                    <td data-label="8/80 Pune Local">₹{item.local}</td>
                    <td data-label="Extra Hour">₹{item.extraHr}</td>
                    <td data-label="Mahabaleshwar / Mumbai">₹{item.mumbai}</td>
                    <td data-label="Shirdi (450 KM)">₹{item.shirdi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Rules and Guidelines Section */}
      <section className="py-5 bg-light">
        <div className="container px-2 px-md-3">
          <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4">
            <h3 className="fw-bold h4 mb-4" style={{ color: '#ff7700' }}>Rules and Guidelines:</h3>
            <ul className="text-muted small mb-5" style={{ lineHeight: '1.8' }}>
              <li className="mb-2">Full toll, parking, passenger tax, GST, and the cost of special permits are to be paid by the party.</li>
              <li className="mb-2">For a trip, the average daily distance allowed is 300 km; different rates apply for Mumbai-Mahabaleshwar routes.</li>
              <li className="mb-2">Bus service is available from 6:00 AM to 12:00 midnight. Extra hours incur additional charges.</li>
              <li className="mb-0">Advance booking requires 50% payment at least 2 days before the trip.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;