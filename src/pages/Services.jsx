import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {
  // Structured Data for Google Spiders detailing all major service categories
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Vehicle Rental and Tour Packages",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Shree Travels"
    },
    "areaServed": ["Pune", "Pimpri-Chinchwad", "Mumbai", "Maharashtra"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transportation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Bus on Rent (14 to 50 Seater)" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Tempo Traveller Hire (13 to 26 Seater)" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Tata Winger on Rent" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Luxury Force Urbania Rental" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Corporate & Wedding Transportation" }
        }
      ]
    }
  };

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/service" }
  ];

  return (
    <>
      <SEO 
        title="Bus, Tempo Traveller, Winger & Urbania Rental Services Pune"
        description="Explore Shree Travels' rental services: 14-50 seater buses, Tempo Travellers, Tata Winger, Force Urbania, and corporate/wedding transport in Pune and Mumbai."
        keywords="Bus on rent in Pune, Tempo Traveller hire Pune, Tata Winger rent, Force Urbania rental, Corporate travel Pune, Wedding bus booking, Outstation bus hire"
        path="/service"
        schema={servicesSchema}
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-light py-5">
        <div className="container py-4 text-center">
          <h1 className="fw-bold mb-3">Our Premium <span style={{ color: '#ff7700' }}>Services</span></h1>
          <p className="text-muted max-w-75 mx-auto">
            Whether you need a quick local transfer, a multi-day outstation tour, or corporate daily commuting, we have the perfect vehicle and package for your group size.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            
            {/* Category 1: Buses */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fas fa-bus fs-1" style={{ color: '#ff7700' }}></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Bus Rentals</h3>
                  <ul className="list-unstyled text-muted mb-4">
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>14, 17, 20 & 25 Seater Mini Buses</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>32 & 35 Seater Mid-Size Buses</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>40, 45 & 50 Seater Luxury Buses</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>AC and Non-AC Options</li>
                  </ul>
                  <Link to="/our-fleet" className="fw-bold text-decoration-none" style={{ color: '#ff7700' }}>View Fleet &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Category 2: Tempo Travellers */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fas fa-shuttle-van fs-1" style={{ color: '#ff7700' }}></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Tempo Traveller</h3>
                  <ul className="list-unstyled text-muted mb-4">
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>13 & 17 Seater Tempo Travellers</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>20, 25 & 26 Seater Options</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Pushback Seats & AC</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Pimpri-Chinchwad & Pune Local</li>
                  </ul>
                  <Link to="/book-taxi" className="fw-bold text-decoration-none" style={{ color: '#ff7700' }}>Book Traveller &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Category 4: Urbania */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3">
                    {/* Changed icon to a car logo here */}
                    <i className="fas fa-car fs-1" style={{ color: '#ff7700' }}></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Force Urbania</h3>
                  <ul className="list-unstyled text-muted mb-4">
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Luxury Force Urbania Rentals</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Premium Interiors & Seating</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Available in Pune & Mumbai</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Perfect for VIP Airport Transfers</li>
                  </ul>
                  <Link to="/book-taxi" className="fw-bold text-decoration-none" style={{ color: '#ff7700' }}>Book Urbania &rarr;</Link>
                </div>
              </div>
            </div>

 {/* Category 3: Tata Winger */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fas fa-van-shuttle fs-1" style={{ color: '#ff7700' }}></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Tata Winger</h3>
                  <ul className="list-unstyled text-muted mb-4">
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Spacious & Comfortable Seating</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Best for Family Trips</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Available for Outstation</li>
                  </ul>
                  <Link to="/book-taxi" className="fw-bold text-decoration-none" style={{ color: '#ff7700' }}>Book Winger &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Category 5: Event Based */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm bg-dark text-white">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fas fa-building fs-1 text-white"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Corporate & Events</h3>
                  <ul className="list-unstyled text-light opacity-75 mb-4">
                    <li className="mb-2"><i className="fas fa-check me-2"></i>Corporate Daily Commute (Monthly)</li>
                    <li className="mb-2"><i className="fas fa-check me-2"></i>Wedding & Marriage Functions</li>
                    <li className="mb-2"><i className="fas fa-check me-2"></i>School Trips & Picnics</li>
                    <li className="mb-2"><i className="fas fa-check me-2"></i>Hinjewadi & Kharadi IT Parks</li>
                  </ul>
                  <Link to="/contact" className="fw-bold text-white text-decoration-none">Enquire Now &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Category 6: Tour Packages (Made col-lg-12 to center beautifully at the bottom of the grid) */}
            <div className="col-lg-12 col-md-12">
              <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: '#fff5ec' }}>
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fas fa-route fs-1" style={{ color: '#ff7700' }}></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Popular Tour Packages & Outstation</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-unstyled text-muted mb-4">
                        <li className="mb-2"><i className="fas fa-map-marker-alt text-primary me-2"></i>Pune to Mahabaleshwar / Lonavala</li>
                        <li className="mb-2"><i className="fas fa-map-marker-alt text-primary me-2"></i>Pune to Goa / Konkan Darshan</li>
                        <li className="mb-2"><i className="fas fa-map-marker-alt text-primary me-2"></i>Pune to Mumbai Darshan</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled text-muted mb-4">
                        <li className="mb-2"><i className="fas fa-om text-warning me-2"></i>Ashtavinayak Darshan</li>
                        <li className="mb-2"><i className="fas fa-om text-warning me-2"></i>Bhimashankar & 5 Jyotirlinga</li>
                        <li className="mb-2"><i className="fas fa-om text-warning me-2"></i>Sade Teen Shakti Peeth</li>
                      </ul>
                    </div>
                  </div>
                  <Link to="/packages" className="fw-bold text-decoration-none" style={{ color: '#ff7700' }}>View All Packages &rarr;</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Services;