import React, { useState } from 'react';
import SEO from '../components/SEO';

const GOOGLE_BUSINESS_PROFILE = "https://share.google/gfkP38ghwwQu9J5TJ";
const GOOGLE_MAPS_LINK = "https://share.google/gfkP38ghwwQu9J5TJ";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Format the data perfectly for WhatsApp
    const whatsappMessage = 
      `*New Booking Inquiry (Shree Travels)*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A%0A` +
      `*Requirements:*%0A${formData.message}`;

    // 2. Open WhatsApp with your business number (7875774499)
    window.open(`https://wa.me/917875774499?text=${whatsappMessage}`, '_blank');
    
    // 3. Show success message on the website
    setSubmitted(true);
  };

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <SEO 
        title="Contact Shree Travels | Bus & Urbania Booking Pune"
        description="Get in touch with Shree Travels in Pune. Call us at +91 7620411277 or visit our office at Dodke Palazzo, Kothrud, Pune for instant luxury bus and Force Urbania bookings."
        keywords="Contact Shree Travels, Shree Travels Pune phone number, Bus rental office Pune, Kothrud travel agency, Dodke Palazzo"
        path="/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Shree Travels",
            "telephone": ["+91-7620411277", "+91-7875774499"],
            "email": "shreetravelspune5@gmail.com",
            "hasMap": GOOGLE_MAPS_LINK,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office no 202, 2nd floor, Dodke Palazzo, road, near wonder futura, Mahatma Society, Kothrud",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "postalCode": "411038",
              "addressCountry": "IN"
            }
          }
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
      />

      {/* Page Header */}
      <section className="bg-light py-5">
        <div className="container py-4 text-center px-3">
          <h1 className="fw-bold mb-3 display-5">Contact <span style={{ color: '#ff7700' }}>Shree Travels</span></h1>
          <p className="text-muted lead max-w-75 mx-auto fs-6 fs-md-5">
            Have any questions? Get in touch to discuss your vehicle rental and travel needs today.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-5">
            
            {/* Contact Details Column */}
            <div className="col-lg-5">
              <div className="p-4 p-md-5 rounded-4 shadow-sm h-100 border border-light" style={{ backgroundColor: '#f8f9fa' }}>
                <h2 className="fw-bold h3 mb-4" style={{ color: '#0f172a' }}>Get In Touch</h2>
                
                {/* Address */}
                <div className="d-flex align-items-start mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '45px', height: '45px', backgroundColor: 'rgba(255, 119, 0, 0.1)', color: '#ff7700' }}>
                    <i className="fas fa-map-marker-alt fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 fs-6">Office Address</h5>
                    <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>
                      Office No 202, 2nd Floor,<br />
                      Dodke Palazzo, Road,<br />
                      Near Wonder Futura, Mahatma Society,<br />
                      Kothrud, Pune,<br />
                      Maharashtra 411038
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp Numbers */}
                <div className="d-flex align-items-start mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '45px', height: '45px', backgroundColor: 'rgba(255, 119, 0, 0.1)', color: '#ff7700' }}>
                    <i className="fas fa-phone-alt fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 fs-6">Contact Numbers</h5>
                    <div className="d-flex flex-column gap-2 mt-2">
                      <a href="tel:+917620411277" className="text-decoration-none text-muted small fw-semibold hover-orange d-flex align-items-center">
                        <i className="fas fa-phone-alt me-2" style={{ color: '#ff7700' }}></i> +91 7620411277
                      </a>
                      <a href="https://wa.me/917875774499" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted small fw-semibold hover-orange d-flex align-items-center">
                        <i className="fab fa-whatsapp me-2" style={{ color: '#25D366', fontSize: '1.1rem' }}></i> +91 7875774499
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex align-items-center mb-0">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '45px', height: '45px', backgroundColor: 'rgba(255, 119, 0, 0.1)', color: '#ff7700' }}>
                    <i className="fas fa-envelope fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 fs-6">Email Address</h5>
                    <a href="mailto:shreetravelspune5@gmail.com" className="text-decoration-none text-muted small fw-semibold">shreetravelspune5@gmail.com</a>
                  </div>
                </div>

              </div>
            </div>

            {/* Inquiry Form Column */}
            <div className="col-lg-7">
              <div className="p-4 p-md-5 rounded-4 shadow-sm bg-white border border-light h-100">
                <h2 className="fw-bold h3 mb-4" style={{ color: '#0f172a' }}>Send Us a Message</h2>
                
                {submitted ? (
                  <div className="alert alert-success p-4 rounded-4 text-center" role="alert">
                    <i className="fab fa-whatsapp fs-1 mb-3" style={{ color: '#25D366' }}></i>
                    <h4 className="fw-bold">Redirecting to WhatsApp...</h4>
                    <p className="mb-0 text-muted">Your message is ready to be sent via WhatsApp. We will reply to you shortly!</p>
                    <button onClick={() => setSubmitted(false)} className="btn btn-sm btn-outline-success mt-3 rounded-pill px-4">Send Another Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Your Name</label>
                        <input 
                          type="text" 
                          className="form-control py-2.5 rounded-3" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required 
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Phone Number</label>
                        <input 
                          type="tel" 
                          className="form-control py-2.5 rounded-3" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          required 
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold">Email Address</label>
                        <input 
                          type="email" 
                          className="form-control py-2.5 rounded-3" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold">Your Message / Requirements</label>
                        <textarea 
                          className="form-control rounded-3" 
                          name="message" 
                          rows="4" 
                          value={formData.message} 
                          onChange={handleChange} 
                          required 
                          placeholder="Tell us about your trip dates, vehicle preference, or destination..."
                        ></textarea>
                      </div>
                      <div className="col-12 mt-4">
                        <button 
                          type="submit" 
                          className="btn text-white fw-bold px-5 py-3 w-100 rounded-pill shadow-sm d-flex align-items-center justify-content-center" 
                          style={{ backgroundColor: '#25D366' }}
                        >
                          <i className="fab fa-whatsapp fs-5 me-2"></i> Send via WhatsApp
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

      {/* Customer Reviews & Google Integration Section */}
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold h3" style={{ color: '#0f172a' }}>What Our Customers Say</h2>
            <p className="text-muted mb-4 max-w-75 mx-auto">
              Read our latest reviews or share your own experience with Shree Travels. Your feedback helps us deliver the best service in Pune.
            </p>
            <a 
              href={GOOGLE_BUSINESS_PROFILE} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-white border border-secondary rounded-pill px-4 py-2 fw-bold shadow-sm d-inline-flex align-items-center btn-hover-animate"
              style={{ color: '#0f172a', transition: 'transform 0.2s' }}
            >
              <i className="fab fa-google fs-5 me-2" style={{ color: '#DB4437' }}></i> 
              Leave a Review on Google
            </a>
          </div>

          <div className="row g-4">
            {/* Static Review Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex align-items-center mb-3 gap-2">
                  <div className="text-warning fs-6">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <span className="text-muted small fw-semibold">5.0</span>
                </div>
                <p className="text-muted small mb-3 flex-grow-1" style={{ lineHeight: '1.6' }}>
                  "Excellent service! We booked a Force Urbania for a family trip to Mahabaleshwar. The vehicle was exceptionally clean, comfortable, and the driver was very professional and punctual."
                </p>
                <div className="d-flex align-items-center mt-auto pt-3 border-top">
                  <div className="rounded-circle bg-light d-flex align-items-center justify-content-center fw-bold text-secondary me-3" style={{ width: '35px', height: '35px' }}>Y</div>
                  <h6 className="fw-bold mb-0 fs-6">Yash Thakkar</h6>
                </div>
              </div>
            </div>

            {/* Static Review Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex align-items-center mb-3 gap-2">
                  <div className="text-warning fs-6">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <span className="text-muted small fw-semibold">5.0</span>
                </div>
                <p className="text-muted small mb-3 flex-grow-1" style={{ lineHeight: '1.6' }}>
                  "We use Shree Travels for our monthly corporate events in Hinjewadi. Their luxury buses are always on time and well-maintained. Highly recommended for business travel in Pune!"
                </p>
                <div className="d-flex align-items-center mt-auto pt-3 border-top">
                  <div className="rounded-circle bg-light d-flex align-items-center justify-content-center fw-bold text-secondary me-3" style={{ width: '35px', height: '35px' }}>S</div>
                  <h6 className="fw-bold mb-0 fs-6">Sneha Patil</h6>
                </div>
              </div>
            </div>

            {/* Static Review Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex align-items-center mb-3 gap-2">
                  <div className="text-warning fs-6">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
                  </div>
                  <span className="text-muted small fw-semibold">4.8</span>
                </div>
                <p className="text-muted small mb-3 flex-grow-1" style={{ lineHeight: '1.6' }}>
                  "Booked a 32-seater bus for a family wedding. The coordination was seamless and it made guest transport completely stress-free. Very transparent pricing as well."
                </p>
                <div className="d-flex align-items-center mt-auto pt-3 border-top">
                  <div className="rounded-circle bg-light d-flex align-items-center justify-content-center fw-bold text-secondary me-3" style={{ width: '35px', height: '35px' }}>P</div>
                  <h6 className="fw-bold mb-0 fs-6">Prateek Rekhade</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed Section */}
      <section className="pb-5 bg-white pt-5">
        <div className="container">
          <div className="rounded-4 overflow-hidden shadow-sm border" style={{ height: '450px', width: '100%' }}>
            <iframe 
              title="Shree Travels Office Location Map"
              src="https://maps.google.com/maps?q=Dodke+Palazzo,+Kothrud,+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <a 
              href={GOOGLE_MAPS_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-dark rounded-pill px-4 fw-semibold shadow-sm"
            >
              <i className="fas fa-external-link-alt me-2"></i> Open Location in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;