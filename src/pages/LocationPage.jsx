import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const CITY_DATA = {
  "pune": {
    name: "Pune",
    title: "Bus, Mini Bus & Force Urbania Rental in Pune @ ₹22/km | Shree Travels",
    description: "Looking for a bus, mini bus, or Force Urbania on rent in Pune? Shree Travels offers 13 to 50-seater luxury vehicles for corporate commutes, weddings, and outstation tours.",
    h1: "Bus, Mini Bus & Force Urbania Rental in Pune",
    image: "/img/Keyword Based Image/Keyword Based Image-68.jpg",
    intro: "Shree Travels is Pune's leading group transportation provider. Whether you need a mini bus for a local school picnic, a Force Urbania (@ ₹32/km) for corporate executives, or a 50-seater luxury bus for a wedding, we deliver clean, well-maintained vehicles right to your doorstep across Hinjewadi, Wakad, Baner, Kothrud, and Pimpri-Chinchwad.",
    popularFleet: [
      { name: "Force Urbania (13 & 17 Seater)", desc: "Ultra-luxury push-back seating @ ₹32/km for VIP travel.", link: "/force-urbania-on-rent-pune" },
      { name: "Tempo Traveller (13-26 Seater)", desc: "Starting @ ₹22/km for family trips and outstation getaways.", link: "/tempo-traveller-seater-hire-pune" },
      { name: "Mini Bus (20-25 Seater)", desc: "Ideal for medium-sized groups, office picnics, and local events.", link: "/mini-bus-on-rent-pune" },
      { name: "Luxury AC Bus (32-50 Seater)", desc: "Massive capacity for grand weddings and institutional tours.", link: "/bus-rental-pune" }
    ]
  },
  "hinjewadi": {
    name: "Hinjewadi",
    title: "Bus, Tempo Traveller & Force Urbania On Rent in Hinjewadi | Shree Travels",
    description: "Book Bus on Rent in Hinjewadi Phase 1, 2 & 3, Force Urbania @ ₹32/km, and Tempo Travellers for IT company outings, team offsites, and airport transfers.",
    h1: "Bus, Tempo Traveller & Force Urbania Rental in Hinjewadi",
    image: "/img/Keyword Based Image/Keyword Based Image-36.jpg",
    intro: "Located minutes away from Rajiv Gandhi Infotech Park (Hinjewadi Phase 1, Phase 2, Phase 3, Marunji & Maan), Shree Travels provides 15-minute doorstep reporting for IT corporate team outings to Lonavala, Mahabaleshwar, and Mulshi, as well as daily employee bus shuttles.",
    popularFleet: [
      { name: "Corporate Event Bus Hinjewadi", desc: "32 to 50 Seater AC coaches for IT team outings & offsites.", link: "/bus-rental-for-corporate-events" },
      { name: "Force Urbania Hinjewadi", desc: "13 & 17 Seater luxury van @ ₹32/km for client visits.", link: "/force-urbania-on-rent-pune" },
      { name: "17 Seater Tempo Traveller", desc: "Most popular vehicle for Hinjewadi to Lonavala/Pawna trips.", link: "/17-seater-on-rent-pune" },
      { name: "Mini Bus On Rent", desc: "20 & 25 Seater AC Mini Buses for team dinners & resorts.", link: "/mini-bus-on-rent-pune" }
    ]
  },
  "kharadi": {
    name: "Kharadi",
    title: "Bus, Tempo Traveller & Force Urbania On Rent in Kharadi Pune | Shree Travels",
    description: "Hire AC Buses, Force Urbania @ ₹32/km, and 13-26 Seater Tempo Travellers in Kharadi EON IT Park, World Trade Center, Wagholi & Viman Nagar.",
    h1: "Bus & Tempo Traveller On Rent in Kharadi Pune",
    image: "/img/Keyword Based Image/Keyword Based Image-54.jpg",
    intro: "Serving EON Free Zone IT Park, World Trade Center Kharadi, Chandan Nagar, Viman Nagar, and Wagholi, Shree Travels dispatches spotless AC buses, Force Urbania vans, and Tempo Travellers for Pune Airport pickups, corporate offsites, and family pilgrimages to Shirdi and Ashtavinayak.",
    popularFleet: [
      { name: "Bus On Rent in Kharadi", desc: "32, 35, 45 & 50 Seater coaches for corporate & wedding events.", link: "/bus-rental-pune" },
      { name: "Force Urbania Kharadi", desc: "Executive 13 & 17 Seater Urbania @ ₹32/km near WTC & EON.", link: "/force-urbania-on-rent-pune" },
      { name: "Tempo Traveller Kharadi", desc: "13, 17 & 20 Seater Travellers for Shirdi & Mahabaleshwar.", link: "/tempo-traveller-seater-hire-pune" },
      { name: "Pune Airport Transfer", desc: "15-minute reporting to Lohegaon Airport from Kharadi.", link: "/pune-airport-cab" }
    ]
  },
  "baner": {
    name: "Baner",
    title: "Bus, Tempo Traveller & Force Urbania On Rent in Baner & Balewadi | Shree Travels",
    description: "Book Tempo Traveller, Force Urbania @ ₹32/km, and 20-50 Seater Buses in Baner, Balewadi High Street, Pashan & Aundh with instant doorstep pickup.",
    h1: "Vehicle, Bus & Tempo Traveller Rental in Baner",
    image: "/img/Keyword Based Image/Keyword Based Image-61.jpg",
    intro: "From residential societies along Baner-Pashan Link Road to corporate offices on Balewadi High Street and Aundh, Shree Travels provides fast highway-side pickups right on the Mumbai-Bangalore Bypass (NH48) for trips to Mumbai, Lonavala, Mahabaleshwar, and Goa.",
    popularFleet: [
      { name: "Force Urbania in Baner", desc: "13 & 17 Seater luxury van @ ₹32/km for weekend villa trips.", link: "/force-urbania-on-rent-pune" },
      { name: "13 & 17 Seater Traveller", desc: "Starting @ ₹22/km for family vacations from Baner.", link: "/tempo-traveller-seater-hire-pune" },
      { name: "Mini Bus On Rent", desc: "20 & 25 Seater Mini Buses for wedding & corporate groups.", link: "/mini-bus-on-rent-pune" },
      { name: "32–50 Seater Luxury Bus", desc: "Large AC & Non-AC coaches for marriage functions.", link: "/bus-rental-pune" }
    ]
  },
  "wakad": {
    name: "Wakad",
    title: "Bus, Tempo Traveller & Force Urbania On Rent in Wakad Pune | Shree Travels",
    description: "Rent 13-26 Seater Tempo Travellers, Force Urbania @ ₹32/km, and 32-50 Seater Buses in Wakad, Bhumkar Chowk, Tathawade, Punawale & Pimple Saudagar.",
    h1: "Bus, Tempo Traveller & Urbania Rental in Wakad",
    image: "/img/Keyword Based Image/Keyword Based Image-48.jpg",
    intro: "With our main Pimpri-Chinchwad garage located just 10 minutes from Wakad Bridge and Bhumkar Chowk, residents of Wakad, Tathawade, Punawale, and Pimple Saudagar enjoy the fastest vehicle dispatch and zero empty-deadhead charges for Mumbai Expressway and Lonavala trips.",
    popularFleet: [
      { name: "Tempo Traveller Wakad", desc: "13, 17, 20 & 26 Seater AC Travellers starting @ ₹22/km.", link: "/tempo-traveller-seater-hire-pune" },
      { name: "Force Urbania Wakad", desc: "Flat ₹32/km luxury van for Mumbai Airport & Lonavala.", link: "/force-urbania-on-rent-pune" },
      { name: "Mini Bus Rental Wakad", desc: "20 & 25 Seater Mini Buses for society picnics & weddings.", link: "/mini-bus-on-rent-pune" },
      { name: "32–50 Seater Bus Hire", desc: "Full-size tourist coaches for college & wedding trips.", link: "/bus-rental-pune" }
    ]
  },
  "hadapsar": {
    name: "Hadapsar",
    title: "Bus, Tempo Traveller & Force Urbania On Rent in Hadapsar & Magarpatta | Shree Travels",
    description: "Book Bus on Rent in Hadapsar, Magarpatta City, Amanora Park Town & SP Infocity. 13-50 Seater Buses, Tempo Travellers & Force Urbania @ ₹32/km.",
    h1: "Bus & Tempo Traveller On Rent in Hadapsar",
    image: "/img/Keyword Based Image/Keyword Based Image-38.jpg",
    intro: "Serving Magarpatta Cybercity, Amanora Park Town, SP Infocity Phursungi, and Pune-Solapur Highway, our Hadapsar dispatch unit is the #1 choice for Ashtavinayak Darshan (starting at Morgaon & Theur), Pandharpur-Tuljapur-Akkalkot yatras, and corporate staff transport.",
    popularFleet: [
      { name: "Bus On Rent in Hadapsar", desc: "32, 35, 45 & 50 Seater AC/Non-AC buses for events & tours.", link: "/bus-rental-pune" },
      { name: "Ashtavinayak Darshan Fleet", desc: "Direct pickup from Hadapsar/Magarpatta towards Morgaon.", link: "/ashtavinayak-darshan-bus-hire-pune" },
      { name: "Force Urbania Hadapsar", desc: "13 & 17 Seater luxury van @ ₹32/km for VIP travel.", link: "/force-urbania-on-rent-pune" },
      { name: "Tempo Traveller Hire", desc: "13 to 26 Seater pushback Tempo Travellers @ ₹22/km.", link: "/tempo-traveller-seater-hire-pune" }
    ]
  },
  "kothrud": {
    name: "Kothrud",
    title: "Bus, Tempo Traveller & Force Urbania On Rent in Kothrud Pune | Shree Travels",
    description: "Hire 13-26 Seater Tempo Travellers, Force Urbania @ ₹32/km, Tata Winger & 32-50 Seater Buses in Kothrud, Karve Nagar, Warje, Bavdhan & Sinhagad Road.",
    h1: "Bus, Tempo Traveller & Urbania Rental in Kothrud",
    image: "/img/Keyword Based Image/Keyword Based Image-68.jpg",
    intro: "Serving families across Kothrud Depot, Paud Road, Karve Nagar, Warje Malwadi, Bavdhan, and Sinhagad Road for over 30 years, Shree Travels specializes in senior-citizen-friendly family pilgrimages, Konkan Darshan tours via Tamhini/Varandha Ghat, and marriage bus bookings.",
    popularFleet: [
      { name: "Tempo Traveller Kothrud", desc: "13, 17 & 20 Seater pushback vans for family yatras.", link: "/tempo-traveller-seater-hire-pune" },
      { name: "Konkan & Mahabaleshwar Tours", desc: "Expert ghat drivers for Dapoli, Ganpatipule & Panchgani.", link: "/pune-to-konkan-darshan" },
      { name: "Force Urbania Kothrud", desc: "Next-gen luxury 13 & 17 Seater van @ ₹32/km.", link: "/force-urbania-on-rent-pune" },
      { name: "Wedding Bus Hire Kothrud", desc: "32, 40, 45 & 50 Seater buses for marriage functions.", link: "/bus-rental-pune" }
    ]
  },
  "pimpri-chinchwad": {
    name: "Pimpri-Chinchwad",
    title: "Bus, Tempo Traveller & Force Urbania On Rent in Pimpri-Chinchwad (PCMC) | Shree Travels",
    description: "Direct head-office garage rates for Tempo Traveller, Force Urbania @ ₹32/km, Mini Bus & 32-50 Seater Bus Hire in Pimpri-Chinchwad, Akurdi, Nigdi, Bhosari & Chakan.",
    h1: "Bus & Tempo Traveller On Rent in Pimpri-Chinchwad",
    image: "/img/Keyword Based Image/Keyword Based Image-65.jpg",
    intro: "Headquartered right at Akurdi-Chinchwad in PCMC, Shree Travels offers direct garage-to-garage pricing with zero middleman commission across Nigdi, Pradhikaran, Chinchwad, Pimpri, Bhosari MIDC, Moshi, Chakan, and Talegaon.",
    popularFleet: [
      { name: "Tempo Traveller in PCMC", desc: "13, 17, 20 & 26 Seater Travellers from our Akurdi hub.", link: "/tempo-traveller-seater-hire-pune" },
      { name: "Bus Hire in Pimpri-Chinchwad", desc: "32 to 50 Seater AC & Non-AC buses for weddings & MIDC.", link: "/bus-rental-pune" },
      { name: "Force Urbania PCMC", desc: "13 & 17 Seater Luxury Force Urbania @ ₹32/km.", link: "/force-urbania-on-rent-pune" },
      { name: "Tata Winger & Mini Bus", desc: "9 to 25 Seater compact vans & mini buses @ ₹22/km.", link: "/tata-winger-on-rent-in-pune" }
    ]
  },
  "mumbai": {
    name: "Mumbai",
    title: "Force Urbania, Mini Bus & Bus Rental in Mumbai | Shree Travels",
    description: "Book Force Urbania, mini bus, and luxury coaches on rent in Mumbai. Safe, reliable chauffeur-driven group transportation for airport transfers, corporate events, and city tours.",
    h1: "Force Urbania & Bus Rental in Mumbai",
    image: "/img/Our Network Images/Our Network Images-02.jpg",
    intro: "Planning group travel from or within Mumbai? Shree Travels offers premium chauffeur-driven Force Urbania vans, mini buses, and large AC tourist coaches designed for city navigation, corporate outings, and outstation road trips.",
    popularFleet: [
      { name: "Force Urbania in Mumbai", desc: "Premium styling and spacious legroom for Mumbai executive travel @ ₹32/km.", link: "/rent/mumbai/force-urbania" },
      { name: "Tempo Traveller in Mumbai", desc: "Comfortable group transit for family functions and tours.", link: "/rent/mumbai/tempo-traveller" },
      { name: "Mini & Luxury Bus Rental", desc: "Reliable seating for large delegations and event guests.", link: "/rent/mumbai/bus" }
    ]
  },
  "shirdi": {
    name: "Shirdi",
    title: "Bus & Tempo Traveller Rental for Shirdi Darshan from Pune | Shree Travels",
    description: "Planning a pilgrimage to Shirdi? Rent a comfortable AC bus, mini bus, or Force Urbania from Pune to Shirdi with experienced drivers and transparent pricing.",
    h1: "Shirdi Darshan Bus & Vehicle Rental",
    image: "/img/Keyword Based Image/Keyword Based Image-07.jpg",
    intro: "Make your spiritual journey peaceful and hassle-free with Shree Travels. We provide dedicated Pune-to-Shirdi vehicle rentals configured for family groups, senior citizens, and large pilgrimage delegations seeking comfortable push-back seating.",
    popularFleet: [
      { name: "17/20 Seater Tempo Traveller", desc: "Spacious AC travel for extended families heading to Shirdi.", link: "/rent/shirdi/tempo-traveller" },
      { name: "Mini Bus for Pilgrimage", desc: "Cost-effective group travel keeping everyone together.", link: "/rent/shirdi/mini-bus" },
      { name: "Force Urbania VIP Darshan", desc: "Travel in supreme luxury and modern comfort @ ₹32/km.", link: "/rent/shirdi/force-urbania" }
    ]
  },
  "lonavala": {
    name: "Lonavala",
    title: "Bus, Mini Bus & Force Urbania Rental for Lonavala Trips | Shree Travels",
    description: "Book a mini bus, Force Urbania, or Tempo Traveller for your weekend trip to Lonavala from Pune or Mumbai. Enjoy mountain-ready drivers and spotless interiors.",
    h1: "Lonavala Weekend Trip Vehicle Rental",
    image: "/img/Keyword Based Image/Keyword Based Image-26.jpg",
    intro: "Heading to the hills? Lonavala is Pune and Mumbai’s favorite weekend escape. Shree Travels provides expert hill-driving chauffeurs and powerful AC vehicles—from Force Urbania (@ ₹32/km) to 35-seater mini buses—to handle ghat roads effortlessly.",
    popularFleet: [
      { name: "Force Urbania for Ghats", desc: "Powerful engine and superior suspension @ ₹32/km for smooth hill-climbing.", link: "/rent/lonavala/force-urbania" },
      { name: "Tempo Traveller for Groups", desc: "The go-to choice for friends and family weekend getaways.", link: "/rent/lonavala/tempo-traveller" },
      { name: "Mini Bus Rental", desc: "Bring the whole office or extended family along.", link: "/rent/lonavala/mini-bus" }
    ]
  },
  "nashik": {
    name: "Nashik",
    title: "Bus & Force Urbania Rental in Nashik | Shree Travels",
    description: "Rent buses, mini buses, and Force Urbania vehicles for winery tours, Trimbakeshwar Jyotirlinga, family events, and corporate travel in Nashik.",
    h1: "Nashik Bus & Vehicle Rental Services",
    image: "/img/Keyword Based Image/Keyword Based Image-25.jpg",
    intro: "Whether you are planning a wine-tasting tour to Sula Vineyards, Trimbakeshwar Jyotirlinga Darshan, or a family wedding, Shree Travels offers reliable outstation vehicle rentals connecting Pune and Mumbai to Nashik.",
    popularFleet: [
      { name: "Tempo Traveller on Rent", desc: "Comfortable air conditioning and luggage space for trips to Nashik.", link: "/rent/nashik/tempo-traveller" },
      { name: "Mini & Mid-Size Bus", desc: "Great for group tours, temple visits, and family celebrations.", link: "/rent/nashik/mini-bus" },
      { name: "Force Urbania", desc: "Modern amenities @ ₹32/km for an exceptionally smooth long-distance ride.", link: "/rent/nashik/force-urbania" }
    ]
  }
};

const LocationPage = () => {
  const { city: paramCity } = useParams();
  const location = useLocation();
  const pathKey = location.pathname
    .replace(/^\/locations\//, "")
    .replace(/^\/vehicle-rental-/, "")
    .replace(/^\/+/, "");
  const cityKey = paramCity || pathKey || "pune";
  const data = CITY_DATA[cityKey] || CITY_DATA["pune"];
  const canonicalPath = location.pathname || `/locations/${cityKey}`;

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100%' }}>
      <SEO 
        title={data.title}
        description={data.description}
        keywords={`Bus on rent in ${data.name}, Mini bus rental ${data.name}, Force Urbania hire ${data.name}, Tempo traveller ${data.name}`}
        path={canonicalPath}
        image={data.image}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Service Locations", url: "/service" },
          { name: `${data.name} Rentals`, url: canonicalPath }
        ]}
      />

      {/* Hero Section */}
      <section className="py-5 text-white" style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}>
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <p className="text-uppercase fw-bold mb-2" style={{ color: "#ff7700" }}>Verified Fleet & Chauffeur Services • {data.name}</p>
              <h1 className="display-5 fw-bold mb-3 text-white">{data.h1}</h1>
              <p className="lead mb-4 text-light">{data.intro}</p>
              <div className="d-flex flex-wrap gap-2 gap-sm-3">
                <a href="tel:+917620411277" className="btn btn-lg text-white fw-bold px-3 px-sm-4 py-2 py-sm-3 shadow-sm d-inline-flex align-items-center" style={{ backgroundColor: "#ff7700" }}>
                  <i className="fas fa-phone-alt me-1 me-sm-2"></i>
                  <span className="d-none d-sm-inline">Call +91 76204 11277</span>
                  <span className="d-inline d-sm-none">Call Now</span>
                </a>
                <a
                  href={`https://wa.me/917875774499?text=${encodeURIComponent(`Hello Shree Travels, I need a vehicle in ${data.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg text-white fw-bold px-3 px-sm-4 py-2 py-sm-3 shadow-sm d-inline-flex align-items-center"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <i className="fab fa-whatsapp me-1 me-sm-2"></i>
                  <span className="d-none d-sm-inline">WhatsApp: +91 78757 74499</span>
                  <span className="d-inline d-sm-none">WhatsApp</span>
                </a>
                <button
                  type="button"
                  className="btn btn-lg btn-outline-light fw-bold px-3 px-sm-4 py-2 py-sm-3 shadow-sm rounded-pill open-booking-popup-btn d-inline-flex align-items-center"
                  data-vehicle={data.h1}
                  data-place={data.name}
                  data-mode="enquiry"
                >
                  Instant Enquiry
                </button>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="position-relative overflow-hidden rounded-4 shadow-lg">
                <img src={data.image} alt={data.h1} className="img-fluid w-100 d-block" style={{ aspectRatio: "1280 / 826" }} />
              </div>
            </div>
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
                  <div className="d-flex gap-2">
                    <Link to={vehicle.link} className="btn btn-sm btn-outline-dark fw-semibold rounded-pill flex-grow-1 py-2 text-nowrap text-center">
                      Details
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm fw-bold text-white rounded-pill px-3 py-2 flex-grow-1 open-booking-popup-btn text-nowrap"
                      data-vehicle={vehicle.name}
                      data-place={data.name}
                      style={{ backgroundColor: "#ff7700" }}
                    >
                      Enquire
                    </button>
                  </div>
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
                <li className="mb-3"><i className="fas fa-check-circle text-success me-3"></i><strong>Transparent Pricing:</strong> Official Packages.jsx rates with Force Urbania @ ₹32/km and Tempo Traveller @ ₹22–25/km.</li>
              </ul>
            </div>
            <div className="col-lg-6 text-center">
              <div className="p-5 rounded-4 shadow-sm text-white" style={{ background: "#0f172a" }}>
                <h3 className="h4 fw-bold mb-3 text-white">Ready to Plan Your Trip from {data.name}?</h3>
                <p className="opacity-75 mb-4">Get custom rates for your exact passenger count and itinerary in seconds via WhatsApp.</p>
                <a
                  href={`https://wa.me/917875774499?text=${encodeURIComponent(`Hello Shree Travels, I want a quote from ${data.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn fw-bold px-4 px-sm-5 py-3 rounded-pill text-white shadow-sm d-inline-flex align-items-center justify-content-center"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <i className="fab fa-whatsapp me-2 fs-5"></i>
                  <span className="d-none d-sm-inline">Book Now via WhatsApp (+91 78757 74499)</span>
                  <span className="d-inline d-sm-none">WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;