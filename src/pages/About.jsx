import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  const testimonials = [
    {
      name: "Corporate Client",
      text: "Shree Travels has been handling our corporate events for years. Their 50-seater buses are immaculate, and the instant booking confirmation makes our job so much easier.",
      img: "/img/comment-1.png"
    },
    {
      name: "Satisfied Traveler",
      text: "We booked a Tempo Traveller for a family trip to Mahabaleshwar. The free pick-up and drop-off service was a lifesaver. Exceptional luxury and highly reliable!",
      img: "/img/comment-2.png"
    },
    {
      name: "Regular Commuter",
      text: "Best Pune to Mumbai airport drop service. I have been using them regularly. Quality service at minimum expense, just as they promise.",
      img: "/img/comment-3.png"
    }
  ];

  return (
    <>
      <SEO 
        title="Bus Rental in Pune | Starting @ Just ₹22/Km"
        description="Force Urbania on rent starting at just ₹22/Km with 0% hidden fees."
        keywords="About Shree Travels, Bus rental company Pune, Force Urbania rent Pune, Tempo traveller rent Pune starting price, Pune outstation bus hire, Bus rent per km in Pune"
        path="/about-us"
        image="https://shreetravels.in/img/Bus-on-rent-in-pune.jpeg"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Shree Travels",
            "foundingDate": "2003",
            "founder": { "@type": "Person", "name": "Prakash Pandurang Margale" }
          }
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about-us" }
        ]}
      />

      {/* Page Header */}
      <section className="bg-light py-5">
        <div className="container py-4 text-center">
          <h1 className="fw-bold mb-3 display-5">About <span style={{ color: '#ff7700' }}>Our Company</span></h1>
          <p className="text-muted lead max-w-75 mx-auto">
            Renowned travel providers in Pune and Mumbai, established in 2003.
          </p>
        </div>
      </section>

      {/* Company History & Founder Section */}
      <section className="py-5 bg-white overflow-hidden">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            
            {/* Overlapping Image Column */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative pe-lg-5 pb-lg-5">
                {/* Main Big Image */}
                <img 
                  src="/img/Bus-on-rent-in-pune.jpeg" 
                  alt="Bus on rent in Pune" 
                  className="img-fluid rounded-4 shadow-lg w-100" 
                  style={{ objectFit: 'cover', minHeight: '400px' }}
                />
                {/* Secondary Overlapping Image */}
                <img 
                  src="/img/amruta.jpeg" 
                  alt="Our Fleet" 
                  className="img-fluid rounded-4 shadow-lg position-absolute bottom-0 end-0 d-none d-md-block" 
                  style={{ 
                    width: '55%', 
                    transform: 'translate(10%, 20%)', 
                    border: '8px solid white',
                    objectFit: 'cover',
                    height: '250px'
                  }}
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4 display-6">Shree Travels</h2>
              
              <p className="text-muted mb-3" style={{ lineHeight: '1.8' }}>
                A premier bus rental company in the beautiful city of Pune and Mumbai Metro city, <strong>Shree Travels was established in 2003</strong>. With over 20 years of dedicated experience, we have served numerous corporate organizations, travel agencies, hotels in Pune, embassies, and individuals. We are proud to be one of the most renowned travel providers across the region.
              </p>
              
              <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                We provide Local and Outstation bus rental services from Mumbai and Pune to anywhere in India. Whether you need economy, premium, or luxury buses on rent for business or personal use, we offer them at highly reasonable rates. We also facilitate tax credit documentation for corporate events. From daily commutes to our trusted <strong>Pune to Mumbai and Mumbai to Pune Airport Drops</strong>, our 20-year legacy reflects our commitment to excellence.
              </p>

              <div className="bg-light p-4 rounded-4 border-start border-4 mb-4" style={{ borderColor: '#ff7700' }}>
                <h5 className="fw-bold mb-1">Founder</h5>
                <p className="mb-0 text-dark fw-semibold fs-5">MR. PRAKASH PANDURANG MARGALE</p>
              </div>

              <div className="d-flex align-items-center mt-4 p-3 rounded-pill shadow-sm d-inline-flex" style={{ backgroundColor: '#0f172a' }}>
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px' }}>
                  <i className="fas fa-phone-alt fs-5" style={{ color: '#ff7700' }}></i>
                </div>
                <div>
                  <span className="text-light d-block small opacity-75">Instant Confirmation in 5 Mins</span>
                  <a href="tel:7875774499" className="text-white fw-bold text-decoration-none fs-5">Call Us: 7875774499</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values / Features */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4 transition-hover">
                <i className="fas fa-star fs-1 mb-3" style={{ color: '#ff7700' }}></i>
                <h4 className="fw-bold h5">Exceptional Luxury Travel Experience</h4>
                <p className="text-muted small mb-0">World-class luxury travel services where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4 transition-hover">
                <i className="fas fa-tools fs-1 mb-3" style={{ color: '#ff7700' }}></i>
                <h4 className="fw-bold h5">Reliable Roadside Assistance</h4>
                <p className="text-muted small mb-0">Reliable support when you need it most, keeping you on the move with confidence and peace of mind.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4 transition-hover">
                <i className="fas fa-wallet fs-1 mb-3" style={{ color: '#ff7700' }}></i>
                <h4 className="fw-bold h5">Quality at Minimum Expense</h4>
                <p className="text-muted small mb-0">Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4 transition-hover">
                <i className="fas fa-map-marker-alt fs-1 mb-3" style={{ color: '#ff7700' }}></i>
                <h4 className="fw-bold h5">Free Pick-Up & Drop-Off</h4>
                <p className="text-muted small mb-0">Enjoy free pickup and drop-off services, adding an extra layer of ease to your Bus Rental experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-5" style={{ backgroundColor: '#0f172a' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white display-6">About Our <span style={{ color: '#ff7700' }}>Vision & Mission</span></h2>
          </div>
          <div className="row g-4">
            {/* Vision */}
            <div className="col-md-6">
              <div className="bg-white p-5 rounded-4 h-100 shadow">
                <div className="d-flex align-items-center mb-4">
                  <i className="fas fa-eye fs-2 me-3" style={{ color: '#ff7700' }}></i>
                  <h3 className="fw-bold mb-0">Our Vision</h3>
                </div>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  At Shree Travels, our vision is to become the leading provider of travel services, committed to delivering outstanding experiences for our customers. We aim to transform the travel experience by offering personalized, reliable, and comfortable journeys that connect our travelers to their destinations. Through innovation, customer-focused services, and an unwavering commitment to quality, we strive to make every journey with us a memorable and enriching experience, promoting a deeper connection to the diverse and vibrant cultures of our destinations.
                </p>
              </div>
            </div>
            
            {/* Mission */}
            <div className="col-md-6">
              <div className="bg-white p-5 rounded-4 h-100 shadow">
                <div className="d-flex align-items-center mb-4">
                  <i className="fas fa-bullseye fs-2 me-3" style={{ color: '#ff7700' }}></i>
                  <h3 className="fw-bold mb-0">Our Mission</h3>
                </div>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  Delivering exceptional customer service that goes beyond expectations at every interaction. Embracing cutting-edge technology and innovation to enhance the travel experience and streamline our services. Building strong partnerships with key stakeholders to broaden our reach and offer a comprehensive range of services. Fostering a culture of continuous improvement, learning, and development within our team to ensure we lead the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6">What Our <span style={{ color: '#ff7700' }}>Clients Say</span></h2>
            <p className="text-muted">Trusted by corporates, families, and solo travelers alike.</p>
          </div>
          
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                  <div className="d-flex align-items-center mb-3">
                    <img 
                      src={testimonial.img} 
                      alt="Client Avatar" 
                      className="rounded-circle me-3"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      onError={(e) => { e.target.src = '/img/auhtor.png'; }}
                    />
                    <div>
                      <h5 className="fw-bold mb-0">{testimonial.name}</h5>
                      <div className="text-warning small mt-1">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted fst-italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/book-taxi" className="btn btn-lg text-white fw-bold px-5 py-3 shadow-sm rounded-pill" style={{ backgroundColor: '#ff7700' }}>
              Experience It Yourself
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;