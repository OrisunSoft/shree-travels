import React, { useState } from 'react';
import SEO from '../components/SEO';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', date: '', vehicle: '', destination: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Format the booking data perfectly for WhatsApp
    const whatsappMessage = 
      `*New Vehicle Booking Request*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'Not provided'}%0A` +
      `*Travel Date:* ${formData.date}%0A` +
      `*Vehicle Selected:* ${formData.vehicle}%0A` +
      `*Destination/Route:* ${formData.destination}`;

    // 2. Open WhatsApp with your business number (7875774499)
    window.open(`https://wa.me/917875774499?text=${whatsappMessage}`, '_blank');
    
    // 3. Show success message on the website
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', email: '', date: '', vehicle: '', destination: '' });
  };

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100%' }}>
      <SEO 
        title="Book a Bus on Rent in Pune | Mini & Luxury Bus Hire"
        description="Book your next ride with Shree Travels. Fill out our quick booking form for Tempo Travellers, Force Urbania @ ₹30/km, and luxury buses."
        keywords="book bus online Pune, Force Urbania booking, tempo traveller booking Pune"
        path="/book-taxi"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Book Now", url: "/book-taxi" }
        ]}
      />

      {/* Hero Section */}
      <section 
        className="py-5 position-relative" 
        style={{ backgroundImage: 'url("/img/Keyword Based Image/Keyword Based Image-01.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(15, 23, 42, 0.85)' }}></div>
        <div className="container py-5 position-relative z-index-1 text-center text-white">
          <h1 className="fw-bold mb-3 display-5">Book Your <span style={{ color: '#ff7700' }}>Ride</span></h1>
          <p className="lead opacity-75">Fast, easy, and secure vehicle reservations directly via WhatsApp.</p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg p-4 p-md-5 rounded-4 bg-white">
                
                {submitted ? (
                  <div className="text-center py-4">
                    <i className="fab fa-whatsapp" style={{ fontSize: '4rem', color: '#25D366' }}></i>
                    <h3 className="fw-bold mt-4">Redirecting to WhatsApp...</h3>
                    <p className="text-muted mb-4">Your booking details are ready to be sent. Our team will confirm your vehicle shortly!</p>
                    <button onClick={handleReset} className="btn btn-outline-dark rounded-pill px-4 fw-semibold">
                      Make Another Booking
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="text-center mb-4">
                      <h2 className="h4 fw-bold">Fill in your travel details</h2>
                      <p className="text-muted small">We will review your requirements and provide the best quote instantly.</p>
                    </div>

                    <div className="row g-4">
                      <div className="col-md-6">
                        <label className="form-label fw-bold small text-secondary">Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control bg-light py-2.5 rounded-3 border-0" placeholder="Enter your full name" required />
                      </div>
                      
                      <div className="col-md-6">
                        <label className="form-label fw-bold small text-secondary">Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control bg-light py-2.5 rounded-3 border-0" placeholder="10-digit mobile number" required />
                      </div>
                      
                      <div className="col-md-6">
                        <label className="form-label fw-bold small text-secondary">Email Address (Optional)</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control bg-light py-2.5 rounded-3 border-0" placeholder="For booking receipt" />
                      </div>
                      
                      <div className="col-md-6">
                        <label className="form-label fw-bold small text-secondary">Date of Travel</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control bg-light py-2.5 rounded-3 border-0 text-muted" required />
                      </div>
                      
                      <div className="col-md-6">
                        <label className="form-label fw-bold small text-secondary">Select Vehicle</label>
                        <select name="vehicle" value={formData.vehicle} onChange={handleChange} className="form-select bg-light py-2.5 rounded-3 border-0 text-muted" required>
                          <option value="">Choose your vehicle...</option>
                          <option value="Premium Force Urbania (10 to 17 Seater)">Premium Force Urbania (10 to 17 Seater)</option>
                          <option value="13-Seater Tempo Traveller">13-Seater Tempo Traveller</option>
                          <option value="17-Seater Tempo Traveller">17-Seater Tempo Traveller</option>
                          <option value="20-Seater Tempo Traveller">20-Seater Tempo Traveller</option>
                          <option value="26-Seater Tempo Traveller">26-Seater Tempo Traveller</option>
                          <option value="14-Seater Tata Winger">14-Seater Tata Winger</option>
                          <option value="20 to 25-Seater Mini Bus">20 to 25-Seater Mini Bus</option>
                          <option value="32 to 35-Seater Mid-Size AC Bus">32 to 35-Seater Mid-Size AC Bus</option>
                          <option value="40 to 50-Seater Luxury AC Coach">40 to 50-Seater Luxury AC Coach</option>
                          <option value="Outstation Cab (Sedan / SUV)">Outstation Cab (Sedan / SUV)</option>
                        </select>
                      </div>
                      
                      <div className="col-md-6">
                        <label className="form-label fw-bold small text-secondary">Destination / Route</label>
                        <input type="text" name="destination" value={formData.destination} onChange={handleChange} className="form-control bg-light py-2.5 rounded-3 border-0" placeholder="e.g. Pune to Mahabaleshwar" required />
                      </div>
                      
                      <div className="col-12 mt-4">
                        <button
                          type="submit"
                          className="btn text-white fw-bold px-3 py-2 w-100 rounded-pill shadow-sm d-flex align-items-center justify-content-center gap-2 btn-hover-animate booking-submit-btn"
                          style={{
                            backgroundColor: '#25D366',
                            height: '44px',
                            fontSize: '0.92rem',
                            whiteSpace: 'nowrap',
                            transition: 'all 0.3s'
                          }}
                        >
                          <i className="fab fa-whatsapp fs-5"></i>
                          <span>Send Booking via WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;