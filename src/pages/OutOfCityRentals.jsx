import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const OutOfCityRentals = () => {
  const outstationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Maharashtra Out-of-City Vehicle Rentals",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Shree Travels",
      "telephone": "+91-7620411277",
      "url": "https://shreetravels.in"
    },
    "description": "Book Force Urbania, Tempo Travellers, and Buses starting directly from Mumbai, Lonavala, Nashik, and Shirdi.",
    "areaServed": ["Mumbai", "Lonavala", "Nashik", "Shirdi"]
  };

  return (
    <>
      <SEO 
        title="Vehicle Rentals in Mumbai, Lonavala, Nashik & Shirdi | Shree Travels"
        description="Hire Force Urbania, Tempo Travellers, and buses directly from Mumbai, Lonavala, Nashik, and Shirdi with Shree Travels."
        keywords="Urbania On Rent in Mumbai, Tempo Traveller on Rent in Lonavala, Force Urbania on Rent in Nashik, Urbania on Rent in Shirdi, Bus Rental Service in Mumbai"
        path="/maharashtra-network"
        schema={outstationSchema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Maharashtra Network", url: "/maharashtra-network" }
        ]}
      />

      {/* Page Header */}
      <section className="py-5 text-white" style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}>
        <div className="container py-5 text-center">
          <p className="text-uppercase fw-bold mb-2" style={{ color: "#ff7700" }}>Maharashtra-Wide Dispatch</p>
          <h1 className="display-4 fw-bold mb-3">Out-of-City Rentals</h1>
          <p className="lead max-w-850 mx-auto opacity-75">
            Your journey doesn't have to start in Pune. We provide dedicated vehicle dispatch, including premium Force Urbania and Tempo Travellers, directly from major cities across Maharashtra.
          </p>
        </div>
      </section>

      {/* City Grid Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            
            {/* Mumbai */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                <div className="d-flex align-items-center mb-4">
                  <div className="rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#fff3e6', color: '#ff7700' }}>
                    <i className="fas fa-city fs-3"></i>
                  </div>
                  <h2 className="fw-bold h3 mb-0">Mumbai Services</h2>
                </div>
                <p className="text-muted mb-4">
                  Whether you need airport pickups at Chhatrapati Shivaji Maharaj International Airport or group travel originating in Mumbai, our fleet is ready for dispatch.
                </p>
                <ul className="list-unstyled text-dark fw-semibold mb-4">
                  <li className="mb-3 d-flex align-items-start"><i className="fas fa-check-circle text-success mt-1 me-2"></i> Urbania On Rent in Mumbai</li>
                  <li className="mb-3 d-flex align-items-start"><i className="fas fa-check-circle text-success mt-1 me-2"></i> Bus Rental Service in Mumbai</li>
                </ul>
                <div className="mt-auto">
                  <button
                    type="button"
                    className="btn btn-outline-dark rounded-pill fw-bold px-4 py-2 open-booking-popup-btn"
                    data-place="Mumbai"
                    data-vehicle="Force Urbania / Bus"
                  >
                    Request Mumbai Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Lonavala */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                <div className="d-flex align-items-center mb-4">
                  <div className="rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#fff3e6', color: '#ff7700' }}>
                    <i className="fas fa-mountain fs-3"></i>
                  </div>
                  <h2 className="fw-bold h3 mb-0">Lonavala Services</h2>
                </div>
                <p className="text-muted mb-4">
                  Planning a hill station retreat or a destination wedding? We provide local sightseeing and return trips directly from Lonavala.
                </p>
                <ul className="list-unstyled text-dark fw-semibold mb-4">
                  <li className="mb-3 d-flex align-items-start"><i className="fas fa-check-circle text-success mt-1 me-2"></i> Tempo Traveller on Rent in Lonavala</li>
                  <li className="mb-3 d-flex align-items-start"><i className="fas fa-check-circle text-success mt-1 me-2"></i> Mini Bus on Rent in Lonavala</li>
                  <li className="mb-3 d-flex align-items-start"><i className="fas fa-check-circle text-success mt-1 me-2"></i> Urbania Rent in Lonavala</li>
                </ul>
                <div className="mt-auto">
                  <button
                    type="button"
                    className="btn btn-outline-dark rounded-pill fw-bold px-4 py-2 open-booking-popup-btn"
                    data-place="Lonavala"
                    data-vehicle="Tempo Traveller / Urbania / Bus"
                  >
                    Request Lonavala Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Nashik */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                <div className="d-flex align-items-center mb-4">
                  <div className="rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#fff3e6', color: '#ff7700' }}>
                    <i className="fas fa-wine-glass-alt fs-3"></i>
                  </div>
                  <h2 className="fw-bold h3 mb-0">Nashik Services</h2>
                </div>
                <p className="text-muted mb-4">
                  For wine tours, corporate events, or pilgrimage routes starting from Nashik, book our premium luxury vehicles for a seamless ride.
                </p>
                <ul className="list-unstyled text-dark fw-semibold mb-4">
                  <li className="mb-3 d-flex align-items-start"><i className="fas fa-check-circle text-success mt-1 me-2"></i> Force Urbania on Rent in Nashik</li>
                  <li className="mb-3 d-flex align-items-start"><i className="fas fa-check-circle text-success mt-1 me-2"></i> Outstation Tempo Traveller from Nashik</li>
                </ul>
                <div className="mt-auto">
                  <button
                    type="button"
                    className="btn btn-outline-dark rounded-pill fw-bold px-4 py-2 open-booking-popup-btn"
                    data-place="Nashik"
                    data-vehicle="Force Urbania / Tempo Traveller"
                  >
                    Request Nashik Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Shirdi */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                <div className="d-flex align-items-center mb-4">
                  <div className="rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#fff3e6', color: '#ff7700' }}>
                    <i className="fas fa-om fs-3"></i>
                  </div>
                  <h2 className="fw-bold h3 mb-0">Shirdi Services</h2>
                </div>
                <p className="text-muted mb-4">
                  Conclude your Darshan with a comfortable journey. We arrange vehicle dispatch from Shirdi to Pune, Mumbai, or your next pilgrimage destination.
                </p>
                <ul className="list-unstyled text-dark fw-semibold mb-4">
                  <li className="mb-3 d-flex align-items-start"><i className="fas fa-check-circle text-success mt-1 me-2"></i> Urbania on Rent in Shirdi</li>
                  <li className="mb-3 d-flex align-items-start"><i className="fas fa-check-circle text-success mt-1 me-2"></i> Group Bus Rentals from Shirdi</li>
                </ul>
                <div className="mt-auto">
                  <button
                    type="button"
                    className="btn btn-outline-dark rounded-pill fw-bold px-4 py-2 open-booking-popup-btn"
                    data-place="Shirdi"
                    data-vehicle="Force Urbania / Bus"
                  >
                    Request Shirdi Quote
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-5" style={{ backgroundColor: "#0f172a" }}>
        <div className="container text-center text-white">
          <h2 className="fw-bold mb-3 h3">Need a Vehicle Outside Pune?</h2>
          <p className="lead opacity-75 mb-4">Dispatch times vary by location. Call us to confirm availability and exact pricing for out-of-city origins.</p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a href="tel:+917620411277" className="btn btn-lg fw-bold text-white rounded-pill px-4 shadow-sm" style={{ backgroundColor: "#ff7700" }}>
              <i className="fas fa-phone-alt me-2"></i>
              <span className="d-none d-sm-inline">Call +91 76204 11277</span>
              <span className="d-inline d-sm-none">Call Now</span>
            </a>
            <a
              href="https://wa.me/917875774499?text=Hello%20Shree%20Travels%2C%20I%20want%20to%20enquire%20about%20vehicle%20rentals%20outside%20Pune."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg fw-bold text-white rounded-pill px-4 shadow-sm"
              style={{ backgroundColor: "#25D366" }}
            >
              <i className="fab fa-whatsapp me-2"></i>
              <span className="d-none d-sm-inline">WhatsApp +91 78757 74499</span>
              <span className="d-inline d-sm-none">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OutOfCityRentals;