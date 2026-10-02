import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';

const CITY_DATA = {
  "pune": {
    name: "Pune",
    title: "Bus, Mini Bus & Force Urbania Rental in Pune | Shree Travels",
    description: "Looking for a bus, mini bus, or Force Urbania on rent in Pune? Shree Travels offers 13 to 50-seater luxury vehicles for corporate commutes, weddings, and outstation tours.",
    h1: "Bus, Mini Bus & Force Urbania Rental in Pune",
    intro: "Shree Travels is Pune's leading group transportation provider. Whether you need a mini bus for a local school picnic, a Force Urbania for corporate executives, or a 50-seater luxury bus for a wedding, we deliver clean, well-maintained vehicles right to your doorstep across Hinjewadi, Wakad, Baner, Kothrud, and more.",
    popularFleet: [
      { name: "Force Urbania (10-17 Seater)", desc: "Ultra-luxury push-back seating for VIP corporate travel.", link: "/force-urbania-on-rent-pune" },
      { name: "Tempo Traveller (13-26 Seater)", desc: "The ultimate choice for family trips and outstation getaways.", link: "/tempo-traveller-seater-hire-pune" },
      { name: "Mini Bus (20-25 Seater)", desc: "Ideal for medium-sized groups, office picnics, and local events.", link: "/bus-rental-pune" },
      { name: "Luxury AC Bus (32-50 Seater)", desc: "Massive capacity for grand weddings and institutional tours.", link: "/bus-rental-pune" }
    ]
  },
  "mumbai": {
    name: "Mumbai",
    title: "Force Urbania, Mini Bus & Bus Rental in Mumbai | Shree Travels",
    description: "Book Force Urbania, mini bus, and luxury coaches on rent in Mumbai. Safe, reliable chauffeur-driven group transportation for airport transfers, corporate events, and city tours.",
    h1: "Force Urbania & Bus Rental in Mumbai",
    intro: "Planning group travel from or within Mumbai? Shree Travels offers premium chauffeur-driven Force Urbania vans, mini buses, and large AC tourist coaches designed for city navigation, corporate outings, and outstation road trips.",
    popularFleet: [
      { name: "Force Urbania in Mumbai", desc: "Premium styling and spacious legroom for Mumbai executive travel.", link: "/force-urbania-on-rent-pune" },
      { name: "Tempo Traveller in Mumbai", desc: "Comfortable group transit for family functions and tours.", link: "/tempo-traveller-seater-hire-pune" },
      { name: "Mini & Luxury Bus Rental", desc: "Reliable seating for large delegations and event guests.", link: "/bus-rental-pune" }
    ]
  },
  "shirdi": {
    name: "Shirdi",
    title: "Bus & Tempo Traveller Rental for Shirdi Darshan from Pune | Shree Travels",
    description: "Planning a pilgrimage to Shirdi? Rent a comfortable AC bus, mini bus, or Force Urbania from Pune to Shirdi with experienced drivers and transparent pricing.",
    h1: "Shirdi Darshan Bus & Vehicle Rental",
    intro: "Make your spiritual journey peaceful and hassle-free with Shree Travels. We provide dedicated Pune-to-Shirdi vehicle rentals configured for family groups, senior citizens, and large pilgrimage delegations seeking comfortable push-back seating.",
    popularFleet: [
      { name: "17/20 Seater Tempo Traveller", desc: "Spacious AC travel for extended families heading to Shirdi.", link: "/tempo-traveller-seater-hire-pune" },
      { name: "Mini Bus for Pilgrimage", desc: "Cost-effective group travel keeping everyone together.", link: "/bus-rental-pune" },
      { name: "Force Urbania VIP Darshan", desc: "Travel in supreme luxury and modern comfort.", link: "/force-urbania-on-rent-pune" }
    ]
  },
  "lonavala": {
    name: "Lonavala",
    title: "Bus, Mini Bus & Force Urbania Rental for Lonavala Trips | Shree Travels",
    description: "Book a mini bus, Force Urbania, or Tempo Traveller for your weekend trip to Lonavala from Pune or Mumbai. Enjoy mountain-ready drivers and spotless interiors.",
    h1: "Lonavala Weekend Trip Vehicle Rental",
    intro: "Heading to the hills? Lonavala is Pune and Mumbai’s favorite weekend escape. Shree Travels provides expert hill-driving chauffeurs and powerful AC vehicles—from Force Urbania to 35-seater mini buses—to handle ghat roads effortlessly.",
    popularFleet: [
      { name: "Force Urbania for Ghats", desc: "Powerful engine and superior suspension for smooth hill-climbing.", link: "/force-urbania-on-rent-pune" },
      { name: "Tempo Traveller for Groups", desc: "The go-to choice for friends and family weekend getaways.", link: "/tempo-traveller-seater-hire-pune" },
      { name: "Mini Bus Rental", desc: "Bring the whole office or extended family along.", link: "/bus-rental-pune" }
    ]
  },
  "nashik": {
    name: "Nashik",
    title: "Bus & Force Urbania Rental in Nashik | Shree Travels",
    description: "Rent buses, mini buses, and Force Urbania vehicles for winery tours, family events, and corporate travel in Nashik.",
    h1: "Nashik Bus & Vehicle Rental Services",
    intro: "Whether you are planning a wine-tasting tour to Sula Vineyards, a family wedding, or a corporate offsite, Shree Travels offers reliable outstation vehicle rentals connecting Pune and Mumbai to Nashik.",
    popularFleet: [
      { name: "Tempo Traveller on Rent", desc: "Comfortable air conditioning and luggage space for trips to Nashik.", link: "/tempo-traveller-seater-hire-pune" },
      { name: "Mini & Mid-Size Bus", desc: "Great for group tours, temple visits, and family celebrations.", link: "/bus-rental-pune" },
      { name: "Force Urbania", desc: "Modern amenities for an exceptionally smooth long-distance ride.", link: "/force-urbania-on-rent-pune" }
    ]
  }
};

const LocationPage = () => {
  const { city = "pune" } = useParams();
  const data = CITY_DATA[city] || CITY_DATA["pune"];

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <SEO 
        title={data.title}
        description={data.description}
        keywords={`Bus on rent in ${data.name}, Mini bus rental ${data.name}, Force Urbania hire ${data.name}, Tempo traveller ${data.name}`}
        path={`/locations/${city}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: `${data.name} Rentals`, url: `/locations/${city}` }
        ]}
      />

      {/* Hero Section */}
      <section className="py-5 text-white" style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}>
        <div className="container py-5">
          <p className="text-uppercase fw-bold" style={{ color: "#ff7700" }}>Verified Fleet & Chauffeur Services</p>
          <h1 className="display-4 fw-bold mb-3">{data.h1}</h1>
          <p className="lead col-lg-9 mb-4">{data.intro}</p>
          <div className="d-flex flex-wrap gap-3">
            <a href="tel:+917620411277" className="btn btn-lg text-white fw-bold px-4 py-3 shadow-sm" style={{ backgroundColor: "#ff7700" }}>
              <i className="fas fa-phone-alt me-2"></i> Call +91 76204 11277
            </a>
            <Link to="/book-taxi" className="btn btn-lg btn-outline-light fw-bold px-4 py-3 shadow-sm">
              Request Instant Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Vehicles Section */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold h3">Available Vehicles in <span style={{ color: "#ff7700" }}>{data.name}</span></h2>
            <p className="text-muted">Choose from our meticulously sanitized and well-maintained fleet.</p>
          </div>
          <div className="row g-4">
            {data.popularFleet.map((vehicle, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 d-flex flex-column justify-content-between bg-light">
                  <div>
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '50px', height: '50px', backgroundColor: '#fff3e6', color: '#ff7700' }}>
                      <i className="fas fa-bus fa-lg"></i>
                    </div>
                    <h3 className="h5 fw-bold mb-2">{vehicle.name}</h3>
                    <p className="text-muted small mb-4">{vehicle.desc}</p>
                  </div>
                  <Link to={vehicle.link} className="btn btn-outline-dark fw-semibold rounded-pill w-100 py-2">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light border-top">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="fw-bold h3 mb-4">Why Book With Shree Travels in <span style={{ color: "#ff7700" }}>{data.name}</span>?</h2>
              <ul className="list-unstyled text-dark fs-5" style={{ lineHeight: '1.9' }}>
                <li className="mb-3"><i className="fas fa-check-circle text-success me-3"></i><strong>Zero Breakdown Guarantee:</strong> Routine mechanical checks before every dispatch.</li>
                <li className="mb-3"><i className="fas fa-check-circle text-success me-3"></i><strong>Experienced Chauffeurs:</strong> Polite drivers with deep knowledge of local routes & ghats.</li>
                <li className="mb-3"><i className="fas fa-check-circle text-success me-3"></i><strong>Transparent Pricing:</strong> No hidden toll surprises or sudden driver fee hikes.</li>
              </ul>
            </div>
            <div className="col-lg-6 text-center">
              <div className="p-5 rounded-4 shadow-sm text-white" style={{ background: "#0f172a" }}>
                <h3 className="h4 fw-bold mb-3">Ready to Plan Your Trip?</h3>
                <p className="opacity-75 mb-4">Get custom rates for your exact passenger count and itinerary in seconds via WhatsApp.</p>
                <Link to="/book-taxi" className="btn fw-bold px-5 py-3 rounded-pill text-white shadow-sm" style={{ backgroundColor: "#ff7700" }}>
                  Book Now via WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;