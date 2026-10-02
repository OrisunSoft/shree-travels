import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const OurNetwork = () => {
  const cities = [
    {
      name: "Delhi",
      image: "/img/Our Network Images/Our Network Images-01.jpg",
      description: "Delhi, the capital city of India, is known for its rich history, vibrant culture, and architectural marvels. From the historic Red Fort to the bustling markets of Chandni Chowk, Delhi offers a blend of the old and the new."
    },
    {
      name: "Mumbai",
      image: "/img/Our Network Images/Our Network Images-02.jpg",
      description: "Mumbai, the financial capital of India, is renowned for its bustling streets, vibrant nightlife, and iconic landmarks like the Gateway of India. It is the heart of Bollywood and offers a unique blend of modernity and tradition."
    },
    {
      name: "Bangalore",
      image: "/img/Our Network Images/Our Network Images-03.jpg",
      description: "Bangalore, also known as Bengaluru, is the tech hub of India. It is known for its pleasant weather, greenery, and thriving IT industry. The city offers a mix of modernity and traditional charm, with numerous parks and historical sites."
    },
    {
      name: "Hyderabad",
      image: "/img/Our Network Images/Our Network Images-04.jpg",
      description: "Hyderabad, known as the City of Pearls, is famous for its historical sites, including the Charminar and Golconda Fort. It is also renowned for its unique cuisine, particularly the Hyderabadi Biryani, and its growing IT sector."
    },
    {
      name: "Chennai",
      image: "/img/Our Network Images/Our Network Images-05.jpg",
      description: "Chennai, located on the southeastern coast, is known for its beautiful beaches, historic temples, and vibrant culture. It is a major cultural and economic hub with a rich tradition of music, dance, and cuisine."
    },
    {
      name: "Pune",
      image: "/img/Our Network Images/Our Network Images-06.jpg",
      description: "Pune, known as the Oxford of the East, is famous for its educational institutions and pleasant climate. It is a major cultural and industrial hub with a growing IT sector and numerous historical landmarks."
    },
    {
      name: "Jaipur",
      image: "/img/Our Network Images/Our Network Images-07.jpg",
      description: "Jaipur, the Pink City, is renowned for its beautiful palaces, forts, and vibrant bazaars. It is a major tourist destination with attractions like the Hawa Mahal and Amber Fort, offering a glimpse into Rajasthan’s royal heritage."
    },
    {
      name: "Ahmedabad",
      image: "/img/Our Network Images/Our Network Images-08.jpg",
      description: "Ahmedabad, a city in Gujarat, is known for its rich history, vibrant culture, and beautiful architecture. It is a major center for textiles and offers attractions like the Sabarmati Ashram and the Ahmedabad Heritage Walk."
    },
    {
      name: "Kolkata",
      image: "/img/Our Network Images/Our Network Images-09.jpg",
      description: "Kolkata, the cultural capital of India, is known for its colonial architecture, literary heritage, and vibrant festivals. It offers a unique blend of tradition and modernity with its bustling markets and artistic scene."
    }
  ];

  return (
    <>
      <SEO 
        title="Bus & Force Urbania Rent in Pune @ 35 Rs/Km"
        description="Explore Shree Travels' nationwide network across Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Jaipur, and Ahmedabad. Reliable vehicle rentals everywhere."
        keywords="Shree Travels network, Nationwide bus rental India, Delhi Mumbai Bangalore bus hire, Pune travel agency network"
        path="/our-network"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Our Network", url: "/our-network" }
        ]}
      />

      {/* Page Header */}
      <section className="bg-light py-5">
        <div className="container py-4 text-center px-3">
          <h1 className="fw-bold mb-3 display-5 fs-3 fs-md-1">Our Nationwide <span style={{ color: '#ff7700' }}>Network</span></h1>
          <p className="text-muted lead fs-6 fs-md-5 max-w-75 mx-auto">
            Providing reliable transport services and vehicle rentals across major metropolitan cities and cultural hubs in India.
          </p>
        </div>
      </section>

      {/* City Network Grid Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-4">
            {cities.map((city, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 rounded-4 overflow-hidden border-0 shadow-sm bg-white d-flex flex-column justify-content-between">
                  
                  {/* City Card Image */}
                  <div className="overflow-hidden position-relative" style={{ height: '220px' }}>
                    <img 
                      src={city.image} 
                      className="w-100 h-100 object-fit-cover" 
                      alt={`${city.name} City Network - Shree Travels`} 
                      onError={(e) => { e.target.src = '/img/bus-luxury.jpeg'; }}
                    />
                    <span 
                      className="position-absolute bottom-0 start-0 m-3 px-3 py-1 text-white small fw-bold rounded-pill shadow-sm"
                      style={{ backgroundColor: '#ff7700', fontSize: '0.75rem' }}
                    >
                      {city.name} Hub
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
                      to="/book-taxi" 
                      className="btn btn-outline-dark w-100 fw-semibold rounded-pill py-2 text-decoration-none"
                    >
                      Book in {city.name}
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-5 text-white text-center" style={{ backgroundColor: '#0f172a' }}>
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Ready to Travel Across India?</h2>
          <p className="text-light opacity-75 mb-4 max-w-75 mx-auto">
            Get instant confirmation for your bus, Force Urbania, or Tempo Traveller rentals across any of our operating cities.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="tel:+917875774499" className="btn btn-lg text-white fw-bold px-4 py-3 rounded-pill shadow-sm" style={{ backgroundColor: '#ff7700' }}>
              <i className="fas fa-phone-alt me-2"></i> Call: 7875774499
            </a>
            <Link to="/contact" className="btn btn-lg btn-outline-light fw-bold px-4 py-3 rounded-pill">
              Contact Office
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurNetwork;