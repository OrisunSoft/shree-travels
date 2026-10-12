import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import SEO from '../components/SEO';

const OurNetwork = ({ isEmbedded = false }) => {
  const cities = [
    {
      name: "Pune",
      image: "/img/Our Network Images/Our Network Images-06.jpg",
      description: "Pune, our central headquarters and main dispatch hub, connects you seamlessly to IT corridors, cultural landmarks, wedding lawns, and scenic Sahyadri getaways with luxury Force Urbania, Tempo Travellers, and buses.",
      link: "/book-taxi"
    },
    {
      name: "Mumbai",
      image: "/img/Our Network Images/Our Network Images-02.jpg",
      description: "Mumbai, the financial capital, renowned for iconic landmarks like the Gateway of India. We offer 24/7 CSMIA airport transfers, BKC corporate commuting, and outstation charters via the Mumbai-Pune Expressway.",
      link: "/rent/mumbai/bus"
    },
    {
      name: "Lonavla",
      image: "/img/city-fleet/lonavla-waterpark.jpg",
      description: "Lonavala & Khandala hill station gateway, providing premium buses and Force Urbania for resort picnics, Wet N Joy waterpark trips, Karla Caves, and Pawna Lake camping.",
      link: "/pune-to-lonavala-bus-hire"
    },
    {
      name: "Mahabaleshwar",
      image: "/img/city-fleet/mahabaleshwar.jpg",
      description: "Mahabaleshwar & Panchgani queen of hill stations, featuring ghat-expert chauffeurs for family vacations, Venna Lake boating, Mapro Garden, Arthur Seat, and Pratapgad Fort tours.",
      link: "/pune-to-mahabaleshwar-bus-hire"
    },
    {
      name: "Shirdi",
      image: "/img/city-fleet/shirdi-saibaba.jpg",
      description: "Shirdi Sai Baba holy pilgrimage hub, offering comfortable AC Tempo Travellers and luxury coaches for VIP Samadhi Mandir darshan, Shani Shingnapur, and Nashik Trimbakeshwar circuits.",
      link: "/rent/shirdi/bus"
    },
    {
      name: "Sambhaji Nagar",
      image: "/img/city-fleet/sambhaji-nagar.jpg",
      description: "Chhatrapati Sambhaji Nagar tourism hub, globally famous for UNESCO World Heritage Ajanta & Ellora Caves, Kailasa Temple, Daulatabad Fort, Bibi Ka Maqbara, and Grishneshwar Jyotirlinga.",
      link: "/pune-to-sambhaji-nagar-tour"
    }
  ];

  const HeadingTag = isEmbedded ? 'h2' : 'h1';

  return (
    <>
      {!isEmbedded && (
        <SEO 
          title="Our Network – Luxury Urbania & Bus Rental in Pune, Mumbai, Lonavla & Shirdi"
          description="Explore Shree Travels' network across Pune, Mumbai, Lonavla, Mahabaleshwar, Shirdi, and Sambhaji Nagar. 24/7 reliable vehicle dispatch, luxury Urbania, and outstation tour packages."
          keywords="Shree Travels network, Pune Mumbai Lonavala bus rental, Mahabaleshwar Shirdi Sambhaji Nagar vehicle hire, Urbania on rent Pune"
          path="/our-network"
          breadcrumbs={[
            { name: "Home", url: "/" },
            { name: "Our Network", url: "/our-network" }
          ]}
        />
      )}

      {/* Page Header */}
      <section className={`${isEmbedded ? 'bg-light pt-5 pb-3 border-top' : 'bg-light py-5'}`}>
        <div className="container py-3 text-center px-3">
          <HeadingTag className={`fw-bold mb-3 ${isEmbedded ? 'h3' : 'display-5 fs-3 fs-md-1'}`}>
            Our Nationwide <span style={{ color: '#ff7700' }}>Network</span>
          </HeadingTag>
          <p className="text-muted lead fs-6 fs-md-5 max-w-75 mx-auto mb-0">
            Providing reliable transport services, luxury Force Urbania, Tempo Travellers, and buses across major metropolitan, hill station, and pilgrimage hubs.
          </p>
        </div>
      </section>

      {/* City Network Grid Section */}
      <section className={`${isEmbedded ? 'pb-5 pt-2 bg-light' : 'py-5 bg-white'}`}>
        <div className="container py-3">
          <div className={`row g-4 ${isEmbedded ? 'mobile-swipe-row' : ''}`}>
            {cities.map((city, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 rounded-4 overflow-hidden border-0 shadow-sm bg-white d-flex flex-column justify-content-between">
                  
                  {/* City Card Image */}
                  <div className="overflow-hidden position-relative" style={{ height: '220px' }}>
                    <img 
                      src={city.image} 
                      className="w-100 h-100 object-fit-cover" 
                      alt={`${city.name} City Network - Shree Travels`} 
                      loading="lazy"
                      decoding="async"
                      onError={(e) => { e.target.src = '/img/bus-luxury.jpeg'; }}
                    />
                    <span 
                      className="position-absolute bottom-0 start-0 m-3 px-3 py-1 text-white small fw-bold rounded-pill shadow-sm d-inline-flex align-items-center"
                      style={{ backgroundColor: '#ff7700', fontSize: '0.75rem' }}
                    >
                      <FaMapMarkerAlt className="me-1" /> {city.name} Hub
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <h3 className="h4 fw-bold mb-2 text-dark">{city.name}</h3>
                      <p className="text-muted small mb-4" style={{ lineHeight: '1.7' }}>
                        {city.description}
                      </p>
                    </div>
                    
                    <Link 
                      to={city.link || "/book-taxi"} 
                      className="btn btn-outline-dark w-100 fw-semibold rounded-pill py-2 text-decoration-none d-inline-flex align-items-center justify-content-center"
                    >
                      Book in {city.name} <FaArrowRight className="ms-2" size={12} />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner - Rendered only on standalone OurNetwork page */}
      {!isEmbedded && (
        <section className="py-5 text-white text-center" style={{ backgroundColor: '#0f172a' }}>
          <div className="container py-4">
            <h2 className="fw-bold mb-3 text-white">Ready to Travel Across India?</h2>
            <p className="text-light opacity-75 mb-4 max-w-75 mx-auto">
              Get instant confirmation for your bus, Force Urbania, or Tempo Traveller rentals across any of our operating cities.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="tel:+917620411277" className="btn btn-lg text-white fw-bold px-4 py-3 rounded-pill shadow-sm d-inline-flex align-items-center" style={{ backgroundColor: '#ff7700' }}>
                <FaPhoneAlt className="me-2" /> Call: +91 76204 11277
              </a>
              <Link to="/contact" className="btn btn-lg btn-outline-light fw-bold px-4 py-3 rounded-pill">
                Contact Office
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OurNetwork;