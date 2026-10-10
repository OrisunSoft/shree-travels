import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const OurFleet = () => {
  const vehicles = [
    { 
      name: 'Premium Force Urbania', 
      capacity: '10 to 17 Seater', 
      desc: 'Premium luxury seating, perfect for VIP travel and corporate executives.', 
      img: '/img/urbania/ub-1.jpeg',
      link: '/force-urbania-on-rent-pune',
      tag: 'Ultra Luxury'
    },
    { 
      name: 'Tempo Traveller', 
      capacity: '13 to 26 Seater', 
      desc: 'Comfortable push-back seats, AC, and ample luggage space for family trips.', 
      img: '/img/Tempo Traveller img-01.jpg',
      link: '/tempo-traveller-seater-hire-pune',
      tag: 'Most Popular'
    },
    { 
      name: 'Tata Winger', 
      capacity: '14 Seater', 
      desc: 'Compact, efficient, and comfortable for smaller group outings.', 
      img: '/img/tata-winger.jpeg',
      link: '/contact'
    },
    { 
      name: 'Mini Bus', 
      capacity: '20 to 25 Seater', 
      desc: 'Ideal for medium-sized groups, school picnics, and local event transportation.', 
      img: '/img/hell2.png',
      link: '/bus-rental-pune',
      tag: 'Corporate Pick'
    },
    { 
      name: 'Mid-Size AC Bus', 
      capacity: '32 to 35 Seater', 
      desc: 'Spacious and equipped with advanced air conditioning for outstation tours.', 
      img: '/img/32-seater.jpeg',
      link: '/bus-rental-pune',
      tag: 'Corporate Pick'
    },
    { 
      name: 'Luxury AC Coach', 
      capacity: '40 to 50 Seater', 
      desc: 'Air-suspended coaches for maximum comfort on long-distance corporate or wedding tours.', 
      img: '/img/bus-luxury.jpg',
      link: '/bus-rental-pune'
    },
  ];

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <SEO 
        title="Tempo Traveller, Urbania & Bus Rental Pune | starting @30₹"
        description="View the Shree Travels fleet. We offer 13 to 26-seater Tempo Travellers, Luxury Force Urbania, and 32 to 50-seater AC buses on rent in Pune."
        keywords="Our Fleet, Tempo Traveller hire Pune, Force Urbania on rent, 50 seater bus rent"
        path="/our-fleet"
        image="https://shreetravels.in/img/force-urbania.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": vehicles.map((v, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: v.name
          }))
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Our Fleet", url: "/our-fleet" }
        ]}
      />

      {/* Page Header */}
      <section className="bg-light py-5">
        <div className="container py-4 text-center">
          <h1 className="fw-bold mb-3 display-5">Our Premium <span style={{ color: '#ff7700' }}>Fleet</span></h1>
          <p className="text-muted lead max-w-75 mx-auto">
            Maintained to the highest standards of safety and hygiene. Explore our wide range of vehicles to find the perfect fit for your journey.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            {vehicles.map((vehicle, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
                  
                  {/* Floating Tag / Badge */}
                  {vehicle.tag && (
                    <div className="position-absolute top-0 end-0 m-3" style={{ zIndex: 1 }}>
                      <span className="badge fw-bold px-3 py-2 rounded-pill shadow" style={{ backgroundColor: '#ff7700', color: 'white', fontSize: '0.85rem' }}>
                        {vehicle.tag}
                      </span>
                    </div>
                  )}

                  <img 
                    src={vehicle.img} 
                    className="card-img-top" 
                    alt={`${vehicle.name} rental in Pune`} 
                    style={{ height: '240px', objectFit: 'cover' }} 
                  />
                  <div className="card-body p-4 d-flex flex-column">
                    <h3 className="h5 fw-bold mb-1">{vehicle.name}</h3>
                    <p className="text-primary fw-semibold mb-3" style={{ color: '#ff7700' }}>{vehicle.capacity}</p>
                    <p className="text-muted small mb-4 flex-grow-1">{vehicle.desc}</p>
                    <Link to={vehicle.link} className="btn btn-outline-dark w-100 fw-bold rounded-pill">
                      Explore Vehicle
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFleet;