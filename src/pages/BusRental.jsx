import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const BusRental = () => {
  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <SEO 
        title="Bus Hire @25 Rs/Km | Force Urbania Rent in Pune, Mumbai, Nashik"
        description="Book bus, mini bus, Force Urbania and luxury tempo traveller on rent in Pune, Mumbai, Shirdi, Lonavala and Mahabaleshwar. Best per km rates and verified local drivers."
        keywords="Bus rental Pune, mini bus on rent Mumbai, Force Urbania hire Nashik, tempo traveller Lonavala, bus booking Shirdi, Mahabaleshwar group tour vehicle"
        path="/bus-rental-pune"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Bus & Fleet Rental", url: "/bus-rental-pune" }
        ]}
      />

      {/* Hero Banner Section */}
      <section className="py-5 text-white" style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}>
        <div className="container py-5 text-center text-lg-start">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="badge px-3 py-2 rounded-pill mb-3 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
                <i className="fas fa-bus me-2"></i> Maharashtra's Trusted Group Fleet Service
              </span>
              <h1 className="display-4 fw-bold mb-3">Bus, Mini Bus, Urbania & Traveller Rental</h1>
              <p className="lead opacity-75 mb-4">
                Serving Pune, Mumbai, Shirdi, Lonavala, Nashik, and Mahabaleshwar with immaculately maintained 13 to 50-seater vehicles for weddings, corporate trips, and family tours.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <a href="tel:+917620411277" className="btn btn-lg text-white fw-bold px-4 py-3 shadow-sm" style={{ backgroundColor: "#ff7700" }}>
                  <i className="fas fa-phone-alt me-2"></i> +91 76204 11277
                </a>
                <Link to="/book-taxi" className="btn btn-lg btn-outline-light fw-bold px-4 py-3 shadow-sm">
                  Get WhatsApp Quote
                </Link>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="p-4 rounded-4 shadow bg-white text-dark border">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#ff7700' }}>Quick Fleet Booking</h2>
                <p className="text-muted small mb-4">Select your destination and vehicle configuration for transparent per-km rates.</p>
                <div className="d-grid gap-2">
                  <Link to="/rent/pune/bus" className="btn btn-dark fw-semibold py-2">Bus & Mini Bus in Pune</Link>
                  <Link to="/rent/mumbai/force-urbania" className="btn btn-outline-dark fw-semibold py-2">Force Urbania in Mumbai</Link>
                  <Link to="/rent/shirdi/tempo-traveller" className="btn btn-outline-dark fw-semibold py-2">Shirdi Darshan Fleet</Link>
                  <Link to="/rent/lonavala/mini-bus" className="btn btn-outline-dark fw-semibold py-2">Lonavala & Mahabaleshwar Trips</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED IMAGE LAYOUT SECTION */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="position-relative overflow-hidden rounded-4 shadow-lg my-3">
                <img 
                  src="/img/fleet/bus-main.jpg" 
                  alt="Luxury Bus and Fleet Interior" 
                  className="img-fluid w-100 rounded-4"
                  style={{ maxHeight: '420px', objectFit: 'cover' }}
                  onError={(e)=>{e.target.src='/img/Logo/shree.png'}}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold h3 mb-4">Complete Vehicle Range Across Maharashtra</h2>
              <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                Whether you are organizing an office commute from Hinjewadi or Kharadi, a family wedding celebration in Mumbai, a pilgrimage to Shirdi, or a weekend ghat trip to Lonavala and Mahabaleshwar, our fleet covers all seating requirements.
              </p>
              <div className="row g-3">
                <div className="col-6">
                  <div className="p-3 bg-light rounded-3 border-start border-4 border-warning">
                    <h3 className="h6 fw-bold mb-1">Mini Bus</h3>
                    <p className="small text-muted mb-0">13, 17, 20 Seater</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-light rounded-3 border-start border-4 border-warning">
                    <h3 className="h6 fw-bold mb-1">Tempo Traveller</h3>
                    <p className="small text-muted mb-0">13 to 26 Seater Luxury</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-light rounded-3 border-start border-4 border-warning">
                    <h3 className="h6 fw-bold mb-1">Force Urbania</h3>
                    <p className="small text-muted mb-0">10, 13, 17 Seater VIP</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-light rounded-3 border-start border-4 border-warning">
                    <h3 className="h6 fw-bold mb-1">Large Coaches</h3>
                    <p className="small text-muted mb-0">30 to 50 Seater AC/Non-AC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Support Block */}
      <section className="py-5 bg-light border-top border-bottom my-4">
        <div className="container py-3 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: '70px', height: '70px', backgroundColor: '#fff3e6', color: '#ff7700' }}>
                <i className="fas fa-headset fa-2x"></i>
              </div>
              <h2 className="h3 fw-bold mb-3">24/7 Customer Support & Breakdown Guarantee</h2>
              <p className="text-muted mb-4">
                Our support team and mechanics are on standby around the clock. Every vehicle undergoes a strict multi-point safety check before dispatching across Pune, Mumbai, Nashik, Shirdi, Lonavala, and Mahabaleshwar routes.
              </p>
              <a href="tel:+917620411277" className="btn fw-bold px-5 py-3 rounded-pill text-white shadow-sm" style={{ backgroundColor: '#ff7700' }}>
                Call Support Desk Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Coverage & Local Keywords Section */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold h3">Regional Hubs & Local Area Coverage</h2>
            <p className="text-muted">Direct doorstep pickup and drop services across key localities.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-light">
                <h3 className="h5 fw-bold mb-2" style={{ color: '#ff7700' }}>Pune & PCMC Hub</h3>
                <p className="text-muted small mb-3">Hinjewadi, Wakad, Baner, Kothrud, Magarpatta, Kharadi, Hadapsar, Viman Nagar, Pimpri-Chinchwad.</p>
                <Link to="/rent/pune/mini-bus" className="btn btn-outline-dark btn-sm rounded-pill mt-auto">Explore Pune Fleet →</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-light">
                <h3 className="h5 fw-bold mb-2" style={{ color: '#ff7700' }}>Mumbai & Thane Hub</h3>
                <p className="text-muted small mb-3">Andheri, Borivali, Thane, Navi Mumbai, Dadar, CSMT, Kurla, Mumbai Airport (BOM) transfers.</p>
                <Link to="/rent/mumbai/force-urbania" className="btn btn-outline-dark btn-sm rounded-pill mt-auto">Explore Mumbai Fleet →</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-light">
                <h3 className="h5 fw-bold mb-2" style={{ color: '#ff7700' }}>Shirdi Pilgrimage Hub</h3>
                <p className="text-muted small mb-3">Direct temple parking pickups, Shirdi Darshan packages, family groups, and senior citizen travel.</p>
                <Link to="/rent/shirdi/bus" className="btn btn-outline-dark btn-sm rounded-pill mt-auto">Explore Shirdi Fleet →</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-light">
                <h3 className="h5 fw-bold mb-2" style={{ color: '#ff7700' }}>Lonavala & Khandala Ghats</h3>
                <p className="text-muted small mb-3">Specialized hill-climbing buses, mini buses, and tempo travellers with experienced mountain drivers for weekend getaways.</p>
                <Link to="/rent/lonavala/tempo-traveller" className="btn btn-outline-dark btn-sm rounded-pill mt-auto">Explore Lonavala Fleet →</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-light">
                <h3 className="h5 fw-bold mb-2" style={{ color: '#ff7700' }}>Nashik & Mahabaleshwar Tours</h3>
                <p className="text-muted small mb-3">Trimbakeshwar temple visits, Sula Vineyards wine tours in Nashik, and scenic family trips to Mahabaleshwar table land.</p>
                <Link to="/rent/nashik/mini-bus" className="btn btn-outline-dark btn-sm rounded-pill mt-auto">Explore Nashik & Ghat Fleet →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusRental;