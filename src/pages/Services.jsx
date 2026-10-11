import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBus,
  FaShuttleVan,
  FaCar,
  FaBuilding,
  FaRoute,
  FaCheck,
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPrayingHands,
  FaPlaneDeparture,
  FaGlassCheers,
  FaBriefcase,
  FaGraduationCap,
  FaUmbrellaBeach,
  FaShieldAlt,
  FaUserTie,
  FaClock,
  FaHeadset,
  FaFileInvoiceDollar,
  FaClipboardList,
  FaSmileBeam
} from 'react-icons/fa';
import SEO from '../components/SEO';
import CardSlider from '../components/CardSlider';

const Services = () => {
  // Structured Data for Google Spiders detailing all major service categories
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Vehicle Rental and Tour Packages",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Shree Travels",
      "telephone": "+91-7620411277",
      "url": "https://shreetravels.in"
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

  const servicesFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of vehicles does Shree Travels offer for rent in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shree Travels provides a complete range of group and passenger vehicles in Pune, including 13 to 26-seater AC/Non-AC Tempo Travellers, luxury 13 & 17-seater Force Urbania vans, 9 to 15-seater Tata Wingers, 20 to 25-seater Mini Buses, and 32 to 50-seater luxury AC and Volvo coaches."
        }
      },
      {
        "@type": "Question",
        "name": "How is the rental cost calculated for outstation and local Pune trips?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outstation rentals are billed on a transparent per-kilometer basis (with a standard 300 km/day minimum calculation), plus actual toll, parking, and driver allowance. Local Pune city rentals are available on 8 Hours / 80 Km or 12 Hours / 120 Km packages."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide monthly contract buses for corporate companies in Hinjewadi and Kharadi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide dedicated daily and monthly employee transportation solutions for IT parks and industrial zones across Hinjewadi, Kharadi, Magarpatta, Chakan, Ranjangaon, and Talawade with GPS tracking and backup vehicle support."
        }
      },
      {
        "@type": "Question",
        "name": "Can we book multiple luxury buses for wedding guests in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We specialize in bulk wedding transportation in Pune and across Maharashtra, offering coordinated fleets of 32, 40, 45, and 50-seater AC buses and Force Urbania vans for VIP guests, airport pickups, and venue transfers."
        }
      }
    ]
  };

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/service" }
  ];

  const specializedVerticals = [
    {
      icon: <FaBriefcase size={24} />,
      badge: "B2B & IT Parks",
      title: "Corporate Employee Transportation",
      desc: "Reliable daily staff shuttle services, monthly contract buses, and executive transport across Hinjewadi Phase 1-3, Kharadi EON IT Park, Magarpatta, Chakan MIDC, and Pimpri-Chinchwad.",
      highlights: [
        { text: "Monthly Bus Hire Service in Pune", to: "/monthly-bus-hire-service-in-pune" },
        { text: "Bus On Rent in Hinjewadi IT Park", to: "/bus-on-rent-in-hinjewadi" },
        { text: "Bus On Rent in Kharadi & Hadapsar", to: "/bus-on-rent-in-kharadi-pune" }
      ],
      link: "/employee-transportation-pune",
      cta: "Explore Corporate Transport"
    },
    {
      icon: <FaPlaneDeparture size={24} />,
      badge: "24/7 Punctual Dispatch",
      title: "Pune & Mumbai Airport Transfers",
      desc: "Seamless group airport pickups and drops between Pune, Lohegaon Airport, and Mumbai CSIA Terminal 1 & 2 using spacious Tempo Travellers, Force Urbania, and Mini Buses.",
      highlights: [
        { text: "Purandar Airport Bus Hire Services Pune", to: "/purandar-airport-bus-hire-services-pune" },
        { text: "Mumbai Airport to Pune Tempo Traveller", to: "/mumbai-airport-to-pune-tempo-traveller" },
        { text: "Urbania On Rent in Mumbai & Pune Airport", to: "/rent/mumbai/force-urbania" }
      ],
      link: "/mumbai-airport-to-pune-tempo-traveller",
      cta: "Book Airport Transfer"
    },
    {
      icon: <FaGlassCheers size={24} />,
      badge: "Bulk Fleet Coordination",
      title: "Wedding & Event Guest Logistics",
      desc: "Make your family celebrations stress-free with our spotless luxury AC buses, Force Urbania VIP vans, and mini coaches for Barat processions, hotel shuttles, and destination weddings.",
      highlights: [
        { text: "Bus Hire for Wedding in Pune", to: "/bus-hire-for-wedding-in-pune" },
        { text: "Bus Hire for Marriage Function", to: "/bus-hire-for-marriage-function" },
        { text: "Tempo Traveller Hire for Wedding in Pune", to: "/tempo-traveller-hire-for-wedding-in-pune" }
      ],
      link: "/bus-hire-for-wedding-in-pune",
      cta: "Plan Wedding Transport"
    },
    {
      icon: <FaPrayingHands size={24} />,
      badge: "Sacred Tours",
      title: "Pilgrimage & Darshan Yatras",
      desc: "Specially curated spiritual group tours with experienced ghat and highway drivers for Ashtavinayak Darshan, Shirdi Sai Baba, Bhimashankar, 5 Jyotirlinga, and Sade Teen Shakti Peeth.",
      highlights: [
        { text: "Ashtavinayak Darshan Bus Hire Pune", to: "/ashtavinayak-darshan-bus-hire-pune" },
        { text: "Bhimashankar & 5 Jyotirlinga Darshan", to: "/bhimashankar-5-jyotirlinga-darshan-pune" },
        { text: "Sade Teen Shakti Peeth & Shirdi Tour", to: "/sade-teen-shakti-peeth-darshan-pune" }
      ],
      link: "/ashtavinayak-darshan-bus-hire-pune",
      cta: "View Darshan Packages"
    },
    {
      icon: <FaGraduationCap size={24} />,
      badge: "Safety First",
      title: "School, College & Industrial Trips",
      desc: "RTO-compliant 32, 40, 45, and 50-seater buses equipped with speed governors, first-aid kits, and verified drivers for school picnics, educational excursions, and industrial visits.",
      highlights: [
        { text: "Bus Hire for School Trips in Pune", to: "/bus-hire-for-school-trips-in-pune" },
        { text: "Bus On Rent for Picnic in Pune", to: "/bus-on-rent-for-picnic-in-pune" },
        { text: "45 & 50 Seater Bus On Rent in Pune", to: "/50-seater-bus-on-rent-in-pune" }
      ],
      link: "/bus-hire-for-school-trips-in-pune",
      cta: "Enquire Institutional Hire"
    },
    {
      icon: <FaUmbrellaBeach size={24} />,
      badge: "Custom Itineraries",
      title: "Outstation Weekend & Family Tours",
      desc: "Travel together with your extended family or friends to Mahabaleshwar, Lonavala, Alibaug, Tarkarli, Ganpatipule, Goa, and Ajanta-Ellora in pushback-seat comfort.",
      highlights: [
        { text: "Tempo Traveller Hire for Outstation in Pune", to: "/tempo-traveller-hire-for-outstation-in-pune" },
        { text: "Bus Hire for Outstation in Pune", to: "/bus-hire-for-outstation-in-pune" },
        { text: "Pune to Mahabaleshwar, Goa & Konkan Tours", to: "/pune-to-mahabaleshwar-bus-hire" }
      ],
      link: "/tempo-traveller-hire-for-outstation-in-pune",
      cta: "Explore Outstation Tours"
    }
  ];

  const popularTourPackages = [
    {
      title: "Pune to Mahabaleshwar Tour Package",
      route: "/pune-to-mahabaleshwar-bus-hire",
      image: "/img/Keyword Based Image/Keyword Based Image-31.jpg",
      distance: "120 km (1–3 Days)",
      rate: "From ₹9,000 (13S) | Urbania @ ₹32/km",
      places: "Mapro Garden, Pratapgad Fort, Arthur's Seat, Venna Lake, Panchgani Table Land & Mahabaleshwar Temple",
      desc: "Enjoy strawberry farms, misty valleys, and historic Maratha forts with our ghat-certified chauffeurs."
    },
    {
      title: "Pune to Lonavala & Khandala Package",
      route: "/pune-to-lonavala-bus-hire",
      image: "/img/Keyword Based Image/Keyword Based Image-26.jpg",
      distance: "65 km (1–2 Days)",
      rate: "From ₹7,200 (13S) | Urbania @ ₹32/km",
      places: "Tiger's Leap, Bhushi Dam, Karla & Bhaja Caves, Pawna Lake Camping, Lohagad Fort & Imagicaa",
      desc: "Quick weekend hill-station escape for families, villa groups, and corporate team outings."
    },
    {
      title: "Pune to Goa Beach & Heritage Tour",
      route: "/pune-to-goa-bus-hire",
      image: "/img/Keyword Based Image/Keyword Based Image-23.jpg",
      distance: "450 km (3–5 Days)",
      rate: "Tempo Traveller @ ₹22/km | Urbania @ ₹32/km",
      places: "Baga & Calangute Beach, Fort Aguada, Basilica of Bom Jesus, Mangueshi Temple, Panjim Cruise & Palolem",
      desc: "Interstate permit-ready luxury Tempo Travellers, Force Urbania vans, and AC coaches via Amboli Ghat."
    },
    {
      title: "Pune to Konkan Darshan Coastal Tour",
      route: "/pune-to-konkan-darshan",
      image: "/img/Keyword Based Image/Keyword Based Image-24.jpg",
      distance: "160–390 km (2–5 Days)",
      rate: "Tempo Traveller @ ₹22/km | Mini Bus @ ₹28/km",
      places: "Alibaug, Murud Janjira, Diveagar, Harihareshwar, Dapoli, Ganpatipule, Sindhudurg Fort & Tarkarli Scuba",
      desc: "Scenic coastal drive across pristine Konkan beaches, sea forts, and sacred Swayambhu temples."
    },
    {
      title: "Pune to Mumbai Darshan One-Day Package",
      route: "/pune-to-mumbai-darshan",
      image: "/img/Keyword Based Image/Keyword Based Image-27.jpg",
      distance: "150 km (1 Day)",
      rate: "From ₹9,000 (13S) | Urbania ₹12,500",
      places: "Gateway of India, Marine Drive, Siddhivinayak Temple, Mahalakshmi, Haji Ali, Bandra-Worli Sea Link & Juhu",
      desc: "Complete one-day Mumbai sightseeing tour via the Mumbai-Pune Expressway with all iconic landmarks covered."
    },
    {
      title: "Ashtavinayak Darshan Yatra from Pune",
      route: "/ashtavinayak-darshan-bus-hire-pune",
      image: "/img/Keyword Based Image/Keyword Based Image-17.jpg",
      distance: "650–750 km (2–3 Days)",
      rate: "Tempo Traveller @ ₹22/km | Urbania @ ₹32/km",
      places: "Morgaon, Siddhatek, Pali, Mahad, Theur, Lenyadri, Ozar, Ranjangaon + Jejuri & Prati Balaji",
      desc: "Sacred pilgrimage across all 8 Swayambhu Ganpati temples in traditional shastra sequence."
    },
    {
      title: "Bhimashankar & 5 Jyotirlinga Darshan",
      route: "/bhimashankar-5-jyotirlinga-darshan-pune",
      image: "/img/Keyword Based Image/Keyword Based Image-63.jpg",
      distance: "110 km / 1,450 km (1–5 Days)",
      rate: "Tempo Traveller @ ₹22/km | Bus @ ₹45/km",
      places: "Bhimashankar, Trimbakeshwar (Nashik), Grishneshwar (Ellora), Parli Vaijnath, Aundha Nagnath & Shirdi",
      desc: "Single-day Bhimashankar Darshan or complete 4–5 day Panch Jyotirlinga pilgrimage across Maharashtra."
    },
    {
      title: "Sade Teen Shakti Peeth Darshan Yatra",
      route: "/sade-teen-shakti-peeth-darshan-pune",
      image: "/img/Keyword Based Image/Keyword Based Image-25.jpg",
      distance: "1,350 km (4 Days)",
      rate: "Tempo Traveller @ ₹22/km | Urbania @ ₹32/km",
      places: "Mahalaxmi Ambabai (Kolhapur), Tuljabhavani (Tuljapur), Renuka Mata (Mahur) & Saptashrungi (Vani)",
      desc: "Blessed Devi pilgrimage covering all 3.5 Shakti Peethas of Maharashtra along with Pandharpur & Shirdi."
    }
  ];

  const fleetRateOverview = [
    {
      vehicle: "Tata Winger (AC / Non-AC)",
      capacity: "9, 12 & 13 Seater",
      idealFor: "Small family trips & airport drops",
      rate: "Starting at ₹20–₹22/km (Non-AC) / ₹25/km (AC)",
      minKm: "300 km / day",
      link: "/tata-winger-on-rent-in-pune"
    },
    {
      vehicle: "13 & 14 Seater Tempo Traveller",
      capacity: "13 & 14 Passengers + Driver",
      idealFor: "Family weekend tours & Shirdi trips",
      rate: "Starting at ₹22/km (Non-AC) / ₹25/km (AC)",
      minKm: "300 km / day",
      link: "/13-seater-tempo-traveller-on-rent-in-pune"
    },
    {
      vehicle: "17 Seater Luxury Tempo Traveller",
      capacity: "17 Passengers + Driver",
      idealFor: "Corporate outings & pilgrimage tours",
      rate: "Starting at ₹22/km (Non-AC) / ₹25/km (AC)",
      minKm: "300 km / day",
      link: "/17-seater-tempo-traveller-on-rent-in-pune"
    },
    {
      vehicle: "20 & 26 Seater Tempo Traveller / Mini Bus",
      capacity: "20 to 26 Passengers + Driver",
      idealFor: "Mid-sized group tours & weddings",
      rate: "Starting at ₹25–₹37/km",
      minKm: "300 km / day",
      link: "/20-seater-bus-on-rent-in-pune"
    },
    {
      vehicle: "Luxury Force Urbania (10, 13 & 17 Seater)",
      capacity: "10, 13 & 17 Recliner Seats",
      idealFor: "VIP corporate delegations & luxury family tours",
      rate: "Starting at ₹32/km (Flat)",
      minKm: "300 km / day",
      link: "/urbania-on-rent-in-pune"
    },
    {
      vehicle: "32 & 35 Seater Luxury Bus (AC / Non-AC)",
      capacity: "32 & 35 Pushback Seats",
      idealFor: "Marriage functions, picnics & group events",
      rate: "Starting at ₹35/km (Non-AC) / ₹50/km (AC)",
      minKm: "300 km / day",
      link: "/32-seater-bus-on-rent-in-pune"
    },
    {
      vehicle: "40, 45 & 50 Seater Luxury AC / Volvo Coach",
      capacity: "40 to 53 Recliner Seats",
      idealFor: "Large corporate events, yatra & school trips",
      rate: "Starting at ₹50/km (Non-AC) / ₹80/km (53S Volvo/Benz)",
      minKm: "300 km / day",
      link: "/50-seater-bus-on-rent-in-pune"
    },
    {
      vehicle: "Pune to Mumbai Cab & Pune Airport Cab",
      capacity: "4 Seater Dzire & 7 Seater Ertiga / Crysta",
      idealFor: "24/7 Airport Transfers & Outstation Cabs",
      rate: "Starting at ₹12–₹20/km (Fixed Packages Available)",
      minKm: "One-Way / 300 km",
      link: "/pune-to-mumbai-cab"
    }
  ];

  const bookingSteps = [
    {
      step: "01",
      icon: <FaClipboardList size={22} />,
      title: "Share Travel Details",
      desc: "Call or WhatsApp (+91 78757 74499) your pickup location in Pune/Mumbai, destination, travel dates, and passenger count."
    },
    {
      step: "02",
      icon: <FaFileInvoiceDollar size={22} />,
      title: "Get All-Inclusive Quote",
      desc: "Receive an instant, transparent quotation with clear per-km rates, toll estimates, parking, and driver allowance."
    },
    {
      step: "03",
      icon: <FaUserTie size={22} />,
      title: "Vehicle & Driver Confirmation",
      desc: "Confirm your booking with a small advance and receive vehicle photos, registration number, and chauffeur details."
    },
    {
      step: "04",
      icon: <FaSmileBeam size={22} />,
      title: "Punctual Doorstep Dispatch",
      desc: "Our sanitized, well-maintained vehicle arrives 15 minutes before schedule for a smooth, memorable journey."
    }
  ];

  const serviceHubs = [
    { label: "Kothrud (Head Office)", path: "/vehicle-rental-kothrud" },
    { label: "Hinjewadi IT Park", path: "/vehicle-rental-hinjewadi" },
    { label: "Kharadi & Viman Nagar", path: "/vehicle-rental-kharadi" },
    { label: "Wakad & Baner", path: "/vehicle-rental-wakad" },
    { label: "Pimpri-Chinchwad (PCMC)", path: "/vehicle-rental-pimpri-chinchwad" },
    { label: "Hadapsar & Magarpatta", path: "/vehicle-rental-hadapsar" },
    { label: "Mumbai & Navi Mumbai", path: "/rent/mumbai/force-urbania" },
    { label: "Lonavala & Khandala", path: "/pune-to-lonavala-bus-hire" },
    { label: "Shirdi & Nashik", path: "/rent/shirdi/tempo-traveller" },
    { label: "Mahabaleshwar & Panchgani", path: "/pune-to-mahabaleshwar-bus-hire" },
    { label: "Pune Airport Cab", path: "/pune-airport-cab" },
    { label: "Pune to Mumbai Cab", path: "/pune-to-mumbai-cab" }
  ];

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100%' }}>
      <SEO 
        title="Bus, Tempo Traveller, Force Urbania Rental & Tour Packages in Pune | Shree Travels"
        description="Explore Shree Travels' rental services & outstation tour packages: 13-50 seater buses, Tempo Travellers, Tata Winger, Force Urbania @ ₹32/km, Mahabaleshwar, Lonavala, Goa, Konkan, Ashtavinayak & Jyotirlinga tours."
        keywords="Bus on rent in Pune, Tempo Traveller hire Pune, Tata Winger rent, Force Urbania rental Pune, 13 Seater Urbania on Rent in Pune, 17 Seater Urbania on Rent in Pune, Pune to Mahabaleshwar bus hire, Pune to Lonavala bus hire, Ashtavinayak Darshan bus hire Pune, Pune to Konkan Darshan"
        path="/service"
        image="/img/Keyword Based Image/Keyword Based Image-60.jpg"
        schema={[servicesSchema, servicesFaqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* 1. Corporate Hero Header & Trust Metrics Bar */}
      <section className="py-5 text-white position-relative" style={{ backgroundColor: '#0f172a' }}>
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-8 mx-auto text-center">
              <span
                className="badge rounded-pill px-3 py-2 mb-3 fw-semibold"
                style={{ backgroundColor: 'rgba(255, 119, 0, 0.18)', color: '#ff9933', border: '1px solid rgba(255, 119, 0, 0.35)' }}
              >
                End-to-End Group Mobility Solutions Since 1994
              </span>
              <h1 className="fw-bold display-5 text-white mb-3">
                Our Premium <span style={{ color: '#ff7700' }}>Services & Tour Packages</span>
              </h1>
              <p className="lead text-light opacity-75 mb-4 mx-auto" style={{ maxWidth: '760px', lineHeight: '1.7' }}>
                Whether you need a quick local transfer, a multi-day outstation pilgrimage or hill-station tour, or corporate daily commuting, we have the perfect vehicle and package for your group size.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a
                  href="tel:+917620411277"
                  className="btn btn-lg text-white fw-bold px-4 py-3 rounded-pill shadow-sm d-inline-flex align-items-center"
                  style={{ backgroundColor: '#ff7700' }}
                >
                  <FaPhoneAlt className="me-2" /> Call: +91 76204 11277
                </a>
                <a
                  href="https://wa.me/917875774499?text=Hello%20Shree%20Travels%2C%20I%20want%20to%20enquire%20about%20vehicle%20rental%20and%20tour%20packages%20from%20Pune."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg text-white fw-bold px-4 py-3 rounded-pill shadow-sm d-inline-flex align-items-center"
                  style={{ backgroundColor: '#25D366' }}
                >
                  WhatsApp: +91 78757 74499
                </a>
                <Link
                  to="/our-fleet"
                  className="btn btn-lg btn-outline-light fw-bold px-4 py-3 rounded-pill d-inline-flex align-items-center"
                >
                  <FaBus className="me-2" /> Explore Complete Fleet
                </Link>
              </div>
            </div>
          </div>

          {/* 4-Column Trust Bar */}
          <div className="row g-3 mt-5 pt-4 border-top border-secondary border-opacity-25 text-center">
            <div className="col-6 col-md-3">
              <div className="p-3 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <h2 className="h3 fw-bold mb-1" style={{ color: '#ff7700' }}>30+ Years</h2>
                <p className="small text-light opacity-75 mb-0">Trusted Pune Travel Legacy</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <h2 className="h3 fw-bold mb-1" style={{ color: '#ff7700' }}>9 to 50 Seater</h2>
                <p className="small text-light opacity-75 mb-0">AC & Non-AC Fleet Options</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <h2 className="h3 fw-bold mb-1" style={{ color: '#ff7700' }}>500+ Corporates</h2>
                <p className="small text-light opacity-75 mb-0">Served Across Pune & Mumbai</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <h2 className="h3 fw-bold mb-1" style={{ color: '#ff7700' }}>24/7 Support</h2>
                <p className="small text-light opacity-75 mb-0">Instant Dispatch & Backup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Primary Fleet & Rental Service Categories */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold h3 mb-2">Core Vehicle & <span style={{ color: '#ff7700' }}>Rental Categories</span></h2>
            <p className="text-muted mb-0 mx-auto" style={{ maxWidth: '720px' }}>
              Choose from our sanitized, deeply-maintained fleet of luxury coaches, mini buses, and executive passenger vans tailored to your itinerary.
            </p>
          </div>

          <div className="row g-4">
            {/* Category 1: Buses */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm d-flex flex-column justify-content-between">
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span
                        className="d-inline-flex align-items-center justify-content-center rounded-3"
                        style={{ width: '56px', height: '56px', backgroundColor: '#fff3e6', color: '#ff7700' }}
                      >
                        <FaBus size={26} />
                      </span>
                      <span className="badge rounded-pill px-3 py-2 fw-semibold" style={{ backgroundColor: '#f8fafc', color: '#0f172a', border: '1px solid #e2e8f0' }}>
                        17 to 50 Seater • Starting at ₹28/km
                      </span>
                    </div>
                    <h3 className="h5 fw-bold mb-2">
                      <Link to="/bus-on-rent-in-pune" className="text-dark text-decoration-none">Bus Rentals</Link>
                    </h3>
                    <p className="text-muted small mb-3">
                      Ideal for large group outings, corporate events, marriage functions, and interstate pilgrimages with pushback comfort.
                    </p>
                    <ul className="list-unstyled text-muted mb-4 small">
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <span>
                          <Link to="/17-seater-bus-on-rent-pune" className="service-keyword-link">17 Seater</Link>,{" "}
                          <Link to="/20-seater-bus-rental-pune" className="service-keyword-link">20 Seater</Link> &{" "}
                          <Link to="/25-seater-bus-on-rent-in-pune" className="service-keyword-link">25 Seater Mini Buses</Link> (@ ₹22–38/km)
                        </span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <span>
                          <Link to="/32-seater-bus-on-rent-in-pune" className="service-keyword-link">32 Seater</Link> &{" "}
                          <Link to="/35-seater-bus-on-rent-in-pune" className="service-keyword-link">35 Seater Mid-Size Buses</Link> (@ ₹40–50/km)
                        </span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <span>
                          <Link to="/40-seater-bus-on-rent-in-pune" className="service-keyword-link">40 Seater</Link>,{" "}
                          <Link to="/45-seater-bus-rent-in-pune" className="service-keyword-link">45 Seater</Link> &{" "}
                          <Link to="/50-seater-bus-on-rent-in-pune" className="service-keyword-link">50 Seater Luxury Buses</Link> (@ ₹48–90/km)
                        </span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <span>
                          <Link to="/ac-bus-on-rent-in-pune" className="service-keyword-link">AC Bus</Link>,{" "}
                          <Link to="/non-ac-bus-rental-service-in-pune" className="service-keyword-link">Non-AC Bus</Link> &{" "}
                          <Link to="/volvo-bus-on-rent-in-pune" className="service-keyword-link">Volvo / Scania Coaches</Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link to="/bus-on-rent-in-pune" className="btn btn-outline-dark w-100 rounded-pill fw-bold py-2 d-inline-flex align-items-center justify-content-center mt-auto">
                    Explore Bus Fleet <FaArrowRight className="ms-2" size={12} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Category 2: Tempo Travellers */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm d-flex flex-column justify-content-between">
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span
                        className="d-inline-flex align-items-center justify-content-center rounded-3"
                        style={{ width: '56px', height: '56px', backgroundColor: '#fff3e6', color: '#ff7700' }}
                      >
                        <FaShuttleVan size={26} />
                      </span>
                      <span className="badge rounded-pill px-3 py-2 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
                        Starting @ ₹22/km
                      </span>
                    </div>
                    <h3 className="h5 fw-bold mb-2">
                      <Link to="/tempo-traveller-on-rent-in-pune" className="text-dark text-decoration-none">Tempo Traveller</Link>
                    </h3>
                    <p className="text-muted small mb-3">
                      Pune's most popular choice for family weekend getaways, Shirdi-Mahabaleshwar tours, and Mumbai airport transfers.
                    </p>
                    <ul className="list-unstyled text-muted mb-4 small">
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <span>
                          <Link to="/13-seater-tempo-traveller-on-rent-in-pune" className="service-keyword-link">13 Seater</Link> &{" "}
                          <Link to="/17-seater-tempo-traveller-on-rent-in-pune" className="service-keyword-link">17 Seater Tempo Travellers</Link> (@ ₹22–25/km)
                        </span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <span>
                          <Link to="/20-seater-tempo-traveller-on-rent-in-pune" className="service-keyword-link">20 Seater</Link> &{" "}
                          <Link to="/26-seater-tempo-traveller-on-rent-in-pune" className="service-keyword-link">26 Seater Maharaja Options</Link> (@ ₹28–38/km)
                        </span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <Link to="/luxury-tempo-traveller-on-rent-in-pune" className="service-keyword-link">
                          Luxury Tempo Traveller (Pushback, Music & AC)
                        </Link>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <span>
                          <Link to="/tempo-traveller-on-rent-in-pimpri-chinchwad" className="service-keyword-link">Pimpri-Chinchwad</Link> &{" "}
                          <Link to="/tempo-traveller-on-rent-pune" className="service-keyword-link">Pune Local Dispatch</Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link to="/tempo-traveller-on-rent-in-pune" className="btn btn-outline-dark w-100 rounded-pill fw-bold py-2 d-inline-flex align-items-center justify-content-center mt-auto">
                    Book Traveller <FaArrowRight className="ms-2" size={12} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Category 3: Force Urbania */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm d-flex flex-column justify-content-between">
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span
                        className="d-inline-flex align-items-center justify-content-center rounded-3"
                        style={{ width: '56px', height: '56px', backgroundColor: '#fff3e6', color: '#ff7700' }}
                      >
                        <FaCar size={26} />
                      </span>
                      <span className="badge rounded-pill px-3 py-2 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
                        Flat @ ₹32/km
                      </span>
                    </div>
                    <h3 className="h5 fw-bold mb-2">
                      <Link to="/urbania-on-rent-in-pune" className="text-dark text-decoration-none">Force Urbania</Link>
                    </h3>
                    <p className="text-muted small mb-3">
                      Next-generation European-style luxury van with individual AC vents, panoramic windows, and superior suspension.
                    </p>
                    <ul className="list-unstyled text-muted mb-4 small">
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <span>
                          <Link to="/13-seater-urbania-on-rent-pune" className="service-keyword-link">13 Seater</Link> &amp;{" "}
                          <Link to="/17-seater-urbania-on-rent-pune" className="service-keyword-link">17 Seater Force Urbania (@ ₹32/km)</Link>
                        </span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <Link to="/force-urbania-luxury-mini-bus-on-rent" className="service-keyword-link">
                          Recliner Interiors &amp; Ambient Lighting
                        </Link>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <span>
                          Available in <Link to="/urbania-on-rent-in-pune" className="service-keyword-link">Pune</Link>,{" "}
                          <Link to="/urbania-on-rent-in-mumbai" className="service-keyword-link">Mumbai</Link>,{" "}
                          <Link to="/urbania-rent-in-lonavala" className="service-keyword-link">Lonavala</Link>,{" "}
                          <Link to="/urbania-on-rent-in-nashik" className="service-keyword-link">Nashik</Link> &amp;{" "}
                          <Link to="/urbania-on-rent-in-shirdi" className="service-keyword-link">Shirdi</Link>
                        </span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <Link to="/urbania-hire-in-pune" className="service-keyword-link">
                          VIP Airport Transfers &amp; Corporate Urbania Hire
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/urbania-on-rent-in-pune" className="btn btn-outline-dark w-100 rounded-pill fw-bold py-2 d-inline-flex align-items-center justify-content-center mt-auto">
                    Book Urbania <FaArrowRight className="ms-2" size={12} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Category 4: Tata Winger */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm d-flex flex-column justify-content-between">
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span
                        className="d-inline-flex align-items-center justify-content-center rounded-3"
                        style={{ width: '56px', height: '56px', backgroundColor: '#fff3e6', color: '#ff7700' }}
                      >
                        <FaShuttleVan size={26} />
                      </span>
                      <span className="badge rounded-pill px-3 py-2 fw-semibold" style={{ backgroundColor: '#f8fafc', color: '#0f172a', border: '1px solid #e2e8f0' }}>
                        9 to 15 Seater • Starting at ₹20/km
                      </span>
                    </div>
                    <h3 className="h5 fw-bold mb-2">
                      <Link to="/tata-winger-on-rent-in-pune" className="text-dark text-decoration-none">Tata Winger</Link>
                    </h3>
                    <p className="text-muted small mb-3">
                      Compact, economical, and high-headroom van rental ideal for small families, Ashtavinayak trips, and quick highway travel.
                    </p>
                    <ul className="list-unstyled text-muted mb-4 small">
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <Link to="/tata-winger-on-rent-in-pune" className="service-keyword-link">
                          9, 10, 13 &amp; 15 Seater Tata Winger On Rent
                        </Link>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <Link to="/rent/pune/tata-winger" className="service-keyword-link">
                          Best for 8–12 Member Family Trips &amp; Darshan
                        </Link>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <span>
                          Available in <Link to="/rent/pune/tata-winger" className="service-keyword-link">Pune</Link>,{" "}
                          <Link to="/rent/mumbai/tata-winger" className="service-keyword-link">Mumbai</Link>,{" "}
                          <Link to="/rent/nashik/tata-winger" className="service-keyword-link">Nashik</Link>,{" "}
                          <Link to="/rent/lonavala/tata-winger" className="service-keyword-link">Lonavala</Link> &amp;{" "}
                          <Link to="/rent/shirdi/tata-winger" className="service-keyword-link">Shirdi</Link>
                        </span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <Link to="/packages" className="service-keyword-link">
                          Starting @ ₹20–22/km (Non-AC) &amp; ₹25/km (AC)
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/tata-winger-on-rent-in-pune" className="btn btn-outline-dark w-100 rounded-pill fw-bold py-2 d-inline-flex align-items-center justify-content-center mt-auto">
                    Book Tata Winger <FaArrowRight className="ms-2" size={12} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Category 5: Corporate & Events */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm text-white d-flex flex-column justify-content-between" style={{ backgroundColor: '#0f172a' }}>
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span
                        className="d-inline-flex align-items-center justify-content-center rounded-3"
                        style={{ width: '56px', height: '56px', backgroundColor: 'rgba(255, 119, 0, 0.2)', color: '#ff7700' }}
                      >
                        <FaBuilding size={26} />
                      </span>
                      <span className="badge rounded-pill px-3 py-2 fw-semibold" style={{ backgroundColor: '#ff7700', color: '#ffffff' }}>
                        Contract &amp; Event Hire
                      </span>
                    </div>
                    <h3 className="h5 fw-bold mb-2 text-white">
                      <Link to="/bus-rental-for-corporate-events" className="text-white text-decoration-none">Corporate &amp; Events</Link>
                    </h3>
                    <p className="text-light opacity-75 small mb-3">
                      Dedicated contract fleets for IT companies, factory staff transport, destination weddings, and school excursions.
                    </p>
                    <ul className="list-unstyled text-light mb-4 small">
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="me-2 mt-1 flex-shrink-0" style={{ color: '#ff7700' }} />
                        <Link to="/monthly-bus-hire-service-in-pune" className="service-keyword-link service-keyword-link-dark">
                          Corporate Daily Commute (Monthly Bus Hire)
                        </Link>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="me-2 mt-1 flex-shrink-0" style={{ color: '#ff7700' }} />
                        <span>
                          <Link to="/bus-hire-for-wedding-in-pune" className="service-keyword-link service-keyword-link-dark">Wedding Bus Hire</Link> &amp;{" "}
                          <Link to="/bus-hire-for-marriage-function" className="service-keyword-link service-keyword-link-dark">Marriage Functions</Link>
                        </span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="me-2 mt-1 flex-shrink-0" style={{ color: '#ff7700' }} />
                        <span>
                          <Link to="/bus-hire-for-school-trips-in-pune" className="service-keyword-link service-keyword-link-dark">School Trips</Link> &amp;{" "}
                          <Link to="/bus-on-rent-for-picnic-in-pune" className="service-keyword-link service-keyword-link-dark">Picnics</Link>
                        </span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <FaCheck className="me-2 mt-1 flex-shrink-0" style={{ color: '#ff7700' }} />
                        <span>
                          <Link to="/bus-on-rent-in-hinjewadi" className="service-keyword-link service-keyword-link-dark">Hinjewadi</Link> &amp;{" "}
                          <Link to="/bus-on-rent-in-kharadi-pune" className="service-keyword-link service-keyword-link-dark">Kharadi IT Parks</Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    to="/bus-rental-for-corporate-events"
                    className="btn w-100 rounded-pill fw-bold py-2 text-white d-inline-flex align-items-center justify-content-center mt-auto"
                    style={{ backgroundColor: '#ff7700' }}
                  >
                    Explore Corporate Events <FaArrowRight className="ms-2" size={12} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Category 6: Popular Tour Packages & Outstation */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm d-flex flex-column justify-content-between" style={{ backgroundColor: '#fff5ec' }}>
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span
                        className="d-inline-flex align-items-center justify-content-center rounded-3 bg-white shadow-sm"
                        style={{ width: '56px', height: '56px', color: '#ff7700' }}
                      >
                        <FaRoute size={26} />
                      </span>
                      <span className="badge rounded-pill px-3 py-2 fw-semibold bg-white" style={{ color: '#ff7700', border: '1px solid rgba(255,119,0,0.25)' }}>
                        Click Any Tour Below
                      </span>
                    </div>
                    <h3 className="h5 fw-bold mb-2">
                      <Link to="/pune-to-mahabaleshwar-bus-hire" className="text-dark text-decoration-none">Popular Tour Packages &amp; Outstation</Link>
                    </h3>
                    <p className="text-muted small mb-3">
                      Dedicated destination guides with local places to tour, itineraries, and fixed packages from Pune:
                    </p>
                    <ul className="list-unstyled mb-4 small">
                      <li className="mb-2 d-flex align-items-center">
                        <FaMapMarkerAlt className="me-2 flex-shrink-0" style={{ color: '#ff7700' }} />
                        <Link to="/pune-to-mahabaleshwar-bus-hire" className="service-keyword-link">Pune to Mahabaleshwar</Link>
                        <span className="mx-1">/</span>
                        <Link to="/pune-to-lonavala-bus-hire" className="service-keyword-link">Lonavala</Link>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <FaMapMarkerAlt className="me-2 flex-shrink-0" style={{ color: '#ff7700' }} />
                        <Link to="/pune-to-goa-bus-hire" className="service-keyword-link">Pune to Goa</Link>
                        <span className="mx-1">/</span>
                        <Link to="/pune-to-konkan-darshan" className="service-keyword-link">Konkan Darshan</Link>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <FaMapMarkerAlt className="me-2 flex-shrink-0" style={{ color: '#ff7700' }} />
                        <Link to="/pune-to-mumbai-darshan" className="service-keyword-link">Pune to Mumbai Darshan</Link>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <FaPrayingHands className="me-2 flex-shrink-0" style={{ color: '#ff7700' }} />
                        <Link to="/ashtavinayak-darshan-bus-hire-pune" className="service-keyword-link">Ashtavinayak Darshan</Link>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <FaPrayingHands className="me-2 flex-shrink-0" style={{ color: '#ff7700' }} />
                        <Link to="/bhimashankar-5-jyotirlinga-darshan-pune" className="service-keyword-link">Bhimashankar &amp; 5 Jyotirlinga</Link>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <FaPrayingHands className="me-2 flex-shrink-0" style={{ color: '#ff7700' }} />
                        <Link to="/sade-teen-shakti-peeth-darshan-pune" className="service-keyword-link">Sade Teen Shakti Peeth</Link>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="#popular-tour-packages"
                    className="btn w-100 rounded-pill fw-bold py-2 text-white d-inline-flex align-items-center justify-content-center mt-auto"
                    style={{ backgroundColor: '#ff7700' }}
                  >
                    Explore All 8 Tour Guides <FaArrowRight className="ms-2" size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2B. Featured Popular Tour Packages & Outstation Sightseeing Guides */}
      <section id="popular-tour-packages" className="py-5 border-bottom" style={{ backgroundColor: '#fffaf5' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge rounded-pill px-3 py-2 mb-2 fw-bold" style={{ backgroundColor: '#ff7700', color: '#fff' }}>
              POPULAR TOUR PACKAGES &amp; OUTSTATION GUIDES
            </span>
            <h2 className="fw-bold h3 mb-2">
              Explore Our Signature <span style={{ color: '#ff7700' }}>Outstation &amp; Pilgrimage Tours from Pune</span>
            </h2>
            <p className="text-muted mb-0 mx-auto" style={{ maxWidth: '780px' }}>
              Click on any destination below to view its complete local sightseeing guide, day-by-day itinerary, actual fleet photos, and official per-km &amp; package rates.
            </p>
          </div>

          <div className="row g-4">
            {popularTourPackages.map((pkg, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white d-flex flex-column">
                  <Link to={pkg.route} className="text-decoration-none">
                    <div className="position-relative overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="img-fluid w-100 d-block"
                        loading="lazy"
                      />
                      <span
                        className="badge position-absolute top-0 start-0 m-2 px-3 py-2 rounded-pill fw-bold"
                        style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', color: '#fff', zIndex: 3 }}
                      >
                        {pkg.distance}
                      </span>
                    </div>
                  </Link>
                  <div className="card-body p-3 d-flex flex-column flex-grow-1">
                    <h3 className="h6 fw-bold mb-2" style={{ color: '#0f172a' }}>
                      <Link to={pkg.route} className="text-decoration-none" style={{ color: '#0f172a' }}>
                        {pkg.title}
                      </Link>
                    </h3>
                    <p className="small text-muted mb-2">{pkg.desc}</p>
                    <div className="p-2 rounded-3 bg-light border mb-3 small">
                      <strong style={{ color: '#ff7700' }}>Local Places Covered:</strong>
                      <div className="text-muted mt-1" style={{ fontSize: '0.8rem', lineHeight: '1.45' }}>
                        {pkg.places}
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="fw-bold small mb-2" style={{ color: '#ff7700' }}>
                        {pkg.rate}
                      </div>
                      <Link
                        to={pkg.route}
                        className="btn btn-sm w-100 rounded-pill text-white fw-bold py-2"
                        style={{ backgroundColor: '#ff7700' }}
                      >
                        View Sightseeing &amp; Rates <FaArrowRight className="ms-1" size={11} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Specialized Transportation Solutions (Deep Service Verticals) */}
      <section className="py-5 bg-light border-bottom">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge rounded-pill px-3 py-2 mb-2 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
              Tailored Group Travel
            </span>
            <h2 className="fw-bold h3 mb-2">Specialized Transportation <span style={{ color: '#ff7700' }}>Solutions in Pune</span></h2>
            <p className="text-muted mb-0 mx-auto" style={{ maxWidth: '750px' }}>
              From daily corporate shuttle operations in Hinjewadi to multi-bus wedding logistics and Maharashtra pilgrimage circuits, we deliver dependable service for every occasion.
            </p>
          </div>

          <CardSlider cardsPerView={3} interval={4200}>
            {specializedVerticals.map((item, idx) => (
              <div className="card h-100 border-0 shadow-sm bg-white p-4 d-flex flex-column justify-content-between" key={idx}>
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span
                      className="d-inline-flex align-items-center justify-content-center rounded-circle"
                      style={{ width: '50px', height: '50px', backgroundColor: '#fff3e6', color: '#ff7700' }}
                    >
                      {item.icon}
                    </span>
                    <span className="badge rounded-pill px-3 py-1 small fw-semibold" style={{ backgroundColor: '#f8fafc', color: '#334155', border: '1px solid #e2e8f0' }}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="h5 fw-bold mb-2 text-dark">
                    <Link to={item.link} className="text-dark text-decoration-none">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-muted small mb-3" style={{ lineHeight: '1.7' }}>
                    {item.desc}
                  </p>
                  <ul className="list-unstyled small text-dark mb-4 pt-2 border-top">
                    {item.highlights.map((pt, i) => (
                      <li className="mb-2 d-flex align-items-center fw-medium" key={i}>
                        <FaCheckCircle className="me-2 flex-shrink-0" style={{ color: '#ff7700' }} />
                        <Link to={pt.to} className="service-keyword-link">
                          {pt.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={item.link}
                  className="fw-bold text-decoration-none d-inline-flex align-items-center mt-auto"
                  style={{ color: '#ff7700' }}
                >
                  {item.cta} <FaArrowRight className="ms-2" size={12} />
                </Link>
              </div>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* 4. Transparent Fleet Capacity & Rate Comparison Table */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge rounded-pill px-3 py-2 mb-2 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
              Transparent Tariff Guide
            </span>
            <h2 className="fw-bold h3 mb-2">Vehicle Capacity &amp; <span style={{ color: '#ff7700' }}>Per-KM Rate Overview</span></h2>
            <p className="text-muted mb-2 mx-auto" style={{ maxWidth: '740px' }}>
              Compare seating capacities and starting per-kilometer outstation rates across our Pune fleet to choose the most economical option for your group.
            </p>
            <div className="d-md-none small fw-semibold" style={{ color: '#ff7700' }}>
              ← Swipe table horizontally to view all rates &amp; tap Book Now →
            </div>
          </div>

          <div className="table-responsive shadow-sm rounded-4 border bg-white">
            <table className="table table-hover align-middle mb-0 responsive-fare-table">
              <thead className="text-white" style={{ backgroundColor: '#0f172a' }}>
                <tr>
                  <th className="py-3 px-3 text-white" style={{ backgroundColor: '#0f172a' }}>Vehicle Category</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>Outstation Rate</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>Seating Capacity</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>Min. Billing</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>Best Suited For</th>
                  <th className="py-3 px-3 text-end text-white" style={{ backgroundColor: '#0f172a' }}>Book Now</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {fleetRateOverview.map((row, index) => (
                  <tr key={index}>
                    <td data-label="Vehicle Category" className="py-2 py-md-3 px-2 px-md-3 fw-bold text-dark">
                      <Link to={row.link} className="service-keyword-link">
                        {row.vehicle}
                      </Link>
                    </td>
                    <td data-label="Outstation Rate" className="py-2 py-md-3 px-2 fw-bold" style={{ color: '#ff7700' }}>
                      {row.rate}
                    </td>
                    <td data-label="Seating Capacity" className="py-2 py-md-3 px-2 text-muted">
                      {row.capacity}
                    </td>
                    <td data-label="Min. Billing" className="py-2 py-md-3 px-2 text-muted small">
                      {row.minKm}
                    </td>
                    <td data-label="Best Suited For" className="py-2 py-md-3 px-2 text-muted small">
                      {row.idealFor}
                    </td>
                    <td data-label="Action" className="py-2 py-md-3 px-2 px-md-3 text-end">
                      <button
                        type="button"
                        className="btn btn-sm rounded-pill fw-bold px-3 py-1 text-white d-inline-flex align-items-center open-booking-popup-btn"
                        data-vehicle={row.vehicle}
                        data-ac="AC"
                        data-place="Pune Local / Outstation"
                        style={{ backgroundColor: '#ff7700' }}
                      >
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Important Fare Rules & Guidelines Notice */}
          <div className="mt-4 p-3 p-md-4 rounded-4 border shadow-sm" style={{ backgroundColor: '#fffdfa', borderColor: '#ffd8a8' }}>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2 pb-2 border-bottom">
              <span className="badge rounded-pill px-3 py-2 fw-bold text-white fs-6" style={{ backgroundColor: '#dc2626' }}>
                <i className="fas fa-exclamation-triangle me-2"></i>Please note that toll, parking, and border tax charges are extra
              </span>
              <span className="text-muted small fw-semibold">
                Official Shree Travels Fare Card Rules &amp; Guidelines (04/02/2026)
              </span>
            </div>
            <div className="row g-2 pt-1 text-dark small" style={{ lineHeight: '1.7' }}>
              <div className="col-md-6">
                <ul className="list-unstyled mb-0 d-flex flex-column gap-1">
                  <li><strong>• Toll, Parking &amp; Taxes:</strong> Full toll, parking, passenger tax, GST, and the cost of special permits are to be paid by the party.</li>
                  <li><strong>• Outstation Distance:</strong> For an outstation trip, the minimum daily billing distance is 300 km; special fixed packages apply for Mumbai, Shirdi, and Mahabaleshwar routes.</li>
                  <li><strong>• Force Urbania:</strong> Force Urbania (10, 13 &amp; 17 Seater) is charged at flat <strong>₹32/km</strong> for outstation travel.</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled mb-0 d-flex flex-column gap-1">
                  <li><strong>• Service Hours:</strong> Bus service is available from 6:00 AM to 12:00 midnight. Extra hours incur additional charges.</li>
                  <li><strong>• Advance Booking:</strong> Advance booking requires 50% payment at least 2 days before the trip.</li>
                  <li><strong>• Duty Calculation:</strong> Time &amp; KM calculation will be office to office. Driver food charges ₹300/- local &amp; ₹400/- outstation duties.</li>
                </ul>
              </div>
            </div>
            <div className="mt-2 pt-2 border-top text-end">
              <Link to="/travel-guides/bus-rental-price-pune" className="fw-bold text-decoration-none small" style={{ color: '#ff7700' }}>
                View Complete Pune Bus Rental Price Guide <FaArrowRight className="ms-1" size={11} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-Step Booking Process & Service Standards */}
      <section className="py-5 bg-light border-bottom">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold h3 mb-2">How Our <span style={{ color: '#ff7700' }}>Booking Process Works</span></h2>
            <p className="text-muted mb-0 mx-auto" style={{ maxWidth: '680px' }}>
              Book a bus, Force Urbania, or Tempo Traveller in Pune in four simple steps with instant WhatsApp and phone confirmation.
            </p>
          </div>

          <div className="row g-4 mb-5">
            {bookingSteps.map((item, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <div className="corporate-feature-card p-4 h-100 position-relative">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span
                      className="d-inline-flex align-items-center justify-content-center rounded-circle"
                      style={{ width: '48px', height: '48px', backgroundColor: '#fff3e6', color: '#ff7700' }}
                    >
                      {item.icon}
                    </span>
                    <span className="fw-bold fs-4 opacity-25" style={{ color: '#0f172a' }}>
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="h5 fw-bold mb-2 text-dark">{item.title}</h3>
                  <p className="text-muted small mb-0" style={{ lineHeight: '1.65' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Service Quality Assurance Banner */}
          <div className="bg-white p-4 p-lg-5 rounded-4 shadow-sm border">
            <div className="row g-4 align-items-center">
              <div className="col-lg-4">
                <h3 className="h4 fw-bold mb-2">The Shree Travels <span style={{ color: '#ff7700' }}>Service Guarantee</span></h3>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.7' }}>
                  Every vehicle dispatched from our Kothrud, Hinjewadi, and Pimpri-Chinchwad hubs undergoes a strict 20-point safety and hygiene inspection before each trip.
                </p>
              </div>
              <div className="col-lg-8">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-start p-3 rounded-3 h-100" style={{ backgroundColor: '#f8fafc' }}>
                      <FaShieldAlt className="me-3 mt-1 flex-shrink-0" size={20} style={{ color: '#ff7700' }} />
                      <div>
                        <h4 className="h6 fw-bold mb-1">Zero-Breakdown Maintenance</h4>
                        <p className="small text-muted mb-0">Authorized workshop servicing and immediate standby backup support across Maharashtra.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-start p-3 rounded-3 h-100" style={{ backgroundColor: '#f8fafc' }}>
                      <FaUserTie className="me-3 mt-1 flex-shrink-0" size={20} style={{ color: '#ff7700' }} />
                      <div>
                        <h4 className="h6 fw-bold mb-1">Police-Verified Chauffeurs</h4>
                        <p className="small text-muted mb-0">Experienced commercial badge drivers fluent in Marathi, Hindi, and basic English.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-start p-3 rounded-3 h-100" style={{ backgroundColor: '#f8fafc' }}>
                      <FaClock className="me-3 mt-1 flex-shrink-0" size={20} style={{ color: '#ff7700' }} />
                      <div>
                        <h4 className="h6 fw-bold mb-1">100% Punctual Reporting</h4>
                        <p className="small text-muted mb-0">Drivers report 15–30 minutes prior to pickup time with clean, air-freshened interiors.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-start p-3 rounded-3 h-100" style={{ backgroundColor: '#f8fafc' }}>
                      <FaHeadset className="me-3 mt-1 flex-shrink-0" size={20} style={{ color: '#ff7700' }} />
                      <div>
                        <h4 className="h6 fw-bold mb-1">24/7 Control Room</h4>
                        <p className="small text-muted mb-0">Dedicated trip managers for corporate events, late-night flights, and multi-day tours.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Active Dispatch Hubs & Multi-City Local SEO Fleet Directory (Pune, Mumbai, Nashik, Lonavala, Shirdi) */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-4">
          <div className="text-center mb-4">
            <span className="badge rounded-pill px-3 py-2 mb-2 fw-bold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
              MULTI-CITY LOCAL SEO FLEET DIRECTORY
            </span>
            <h2 className="fw-bold h3 mb-2">
              Active Dispatch Hubs &amp; <span style={{ color: '#ff7700' }}>Local SEO Vehicle Pages (Pune, Mumbai, Nashik, Lonavala &amp; Shirdi)</span>
            </h2>
            <p className="text-muted mx-auto mb-0" style={{ maxWidth: '780px' }}>
              Click any city or vehicle keyword below to open its dedicated local rental page with verified per-km rates, local 8Hr/80Km packages, and doorstep pickup zones.
            </p>
          </div>

          <div className="row g-3 mt-2 mb-5">
            {serviceHubs.map((hub, idx) => (
              <div className="col-6 col-md-4 col-lg-3" key={idx}>
                <Link to={hub.path} className="area-grid-card h-100">
                  <span className="d-flex align-items-center text-truncate">
                    <FaMapMarkerAlt className="me-2 flex-shrink-0 area-icon" style={{ color: '#ff7700' }} />
                    <span className="text-truncate">{hub.label}</span>
                  </span>
                  <FaArrowRight className="ms-1 flex-shrink-0 text-muted area-icon" size={11} />
                </Link>
              </div>
            ))}
          </div>

          {/* 5-City × 6-Vehicle Dedicated Local SEO Cards Slider */}
          <CardSlider cardsPerView={3} interval={4500}>
            {[
              {
                city: "Pune",
                slug: "pune",
                zones: "Hinjewadi, Wakad, Baner, Kharadi, Viman Nagar, Kothrud, Hadapsar & PCMC",
                links: [
                  { label: "Force Urbania On Rent in Pune (@ ₹32/km)", to: "/rent/pune/force-urbania" },
                  { label: "Tempo Traveller Hire in Pune (@ ₹22/km)", to: "/rent/pune/tempo-traveller" },
                  { label: "Mini Bus On Rent in Pune (@ ₹22/km)", to: "/rent/pune/mini-bus" },
                  { label: "Luxury Bus Rental in Pune (32–50 Seater)", to: "/rent/pune/bus" },
                  { label: "Tata Winger On Rent in Pune (@ ₹20/km)", to: "/rent/pune/tata-winger" },
                  { label: "Volvo Bus On Rent in Pune (@ ₹90/km)", to: "/rent/pune/volvo-bus" }
                ]
              },
              {
                city: "Mumbai",
                slug: "mumbai",
                zones: "CSIA Airport T1/T2, Andheri, Bandra BKC, Dadar, Borivali, Thane & Navi Mumbai",
                links: [
                  { label: "Urbania On Rent in Mumbai (@ ₹32/km)", to: "/rent/mumbai/force-urbania" },
                  { label: "Tempo Traveller On Rent in Mumbai", to: "/rent/mumbai/tempo-traveller" },
                  { label: "Mini Bus On Rent in Mumbai", to: "/rent/mumbai/mini-bus" },
                  { label: "Bus On Rent in Mumbai (32–50 Seater)", to: "/rent/mumbai/bus" },
                  { label: "Tata Winger On Rent in Mumbai", to: "/rent/mumbai/tata-winger" },
                  { label: "Volvo Bus On Rent in Mumbai", to: "/rent/mumbai/volvo-bus" }
                ]
              },
              {
                city: "Nashik",
                slug: "nashik",
                zones: "Trimbakeshwar Jyotirlinga, Panchavati, Sula Vineyards, Vani Saptashrungi & Igatpuri",
                links: [
                  { label: "Force Urbania On Rent in Nashik (@ ₹32/km)", to: "/rent/nashik/force-urbania" },
                  { label: "Tempo Traveller On Rent in Nashik", to: "/rent/nashik/tempo-traveller" },
                  { label: "Mini Bus On Rent in Nashik", to: "/rent/nashik/mini-bus" },
                  { label: "Bus On Rent in Nashik (32–50 Seater)", to: "/rent/nashik/bus" },
                  { label: "Tata Winger On Rent in Nashik", to: "/rent/nashik/tata-winger" },
                  { label: "Volvo Bus On Rent in Nashik", to: "/rent/nashik/volvo-bus" }
                ]
              },
              {
                city: "Lonavala",
                slug: "lonavala",
                zones: "Tiger Point, Bhushi Dam, Khandala Ghat, Pawna Lake, Karla Caves & Imagicaa",
                links: [
                  { label: "Urbania Rent in Lonavala (@ ₹32/km)", to: "/rent/lonavala/force-urbania" },
                  { label: "Tempo Traveller On Rent in Lonavala", to: "/rent/lonavala/tempo-traveller" },
                  { label: "Mini Bus On Rent in Lonavala", to: "/rent/lonavala/mini-bus" },
                  { label: "Bus On Rent in Lonavala (32–50 Seater)", to: "/rent/lonavala/bus" },
                  { label: "Tata Winger On Rent in Lonavala", to: "/rent/lonavala/tata-winger" },
                  { label: "Volvo Bus On Rent in Lonavala", to: "/rent/lonavala/volvo-bus" }
                ]
              },
              {
                city: "Shirdi",
                slug: "shirdi",
                zones: "Sai Baba Samadhi Mandir Gate, Sainagar Railway Station, Shirdi Airport & Shani Shingnapur",
                links: [
                  { label: "Force Urbania On Rent in Shirdi (@ ₹32/km)", to: "/rent/shirdi/force-urbania" },
                  { label: "Tempo Traveller On Rent in Shirdi", to: "/rent/shirdi/tempo-traveller" },
                  { label: "Mini Bus On Rent in Shirdi", to: "/rent/shirdi/mini-bus" },
                  { label: "Bus On Rent in Shirdi (32–50 Seater)", to: "/rent/shirdi/bus" },
                  { label: "Tata Winger On Rent in Shirdi", to: "/rent/shirdi/tata-winger" },
                  { label: "Volvo Bus On Rent in Shirdi", to: "/rent/shirdi/volvo-bus" }
                ]
              }
            ].map((hubCard) => (
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-light" key={hubCard.slug}>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h3 className="h5 fw-bold mb-0" style={{ color: '#0f172a' }}>
                    <FaMapMarkerAlt className="me-2" style={{ color: '#ff7700' }} />
                    {hubCard.city} Rental Hub
                  </h3>
                  <span className="badge rounded-pill" style={{ backgroundColor: '#ff7700', color: '#fff' }}>
                    6 Vehicle Types
                  </span>
                </div>
                <p className="small text-muted mb-3">
                  <strong>Coverage:</strong> {hubCard.zones}
                </p>
                <div className="d-flex flex-column gap-2">
                  {hubCard.links.map((lk, i) => (
                    <Link
                      key={i}
                      to={lk.to}
                      className="focus-keyword-pill justify-content-between w-100 py-2 px-3 bg-white"
                    >
                      <span>{lk.label}</span>
                      <FaArrowRight size={10} style={{ color: '#ff7700' }} />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* 7. Frequently Asked Questions (Services FAQ) */}
      <section className="py-5 bg-light border-bottom">
        <div className="container py-4" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-5">
            <h2 className="fw-bold h3 mb-2">Frequently Asked Questions About <span style={{ color: '#ff7700' }}>Our Services</span></h2>
            <p className="text-muted mb-0">Clear answers to common questions regarding vehicle rentals, billing, and group bookings.</p>
          </div>

          <div className="accordion" id="servicesFaq">
            <div className="accordion-item border rounded-4 shadow-sm mb-3 overflow-hidden bg-white">
              <h3 className="accordion-header">
                <button className="accordion-button fw-bold py-3 px-4" type="button" data-bs-toggle="collapse" data-bs-target="#sfaq1">
                  What types of vehicles does Shree Travels offer for rent in Pune?
                </button>
              </h3>
              <div id="sfaq1" className="accordion-collapse collapse show" data-bs-parent="#servicesFaq">
                <div className="accordion-body text-muted px-4 pb-4">
                  Shree Travels provides a complete range of group and passenger vehicles in Pune, including 13 to 26-seater AC/Non-AC Tempo Travellers, luxury 10, 13 &amp; 17-seater Force Urbania vans (@ ₹32/km), 9 to 15-seater Tata Wingers, 20 to 25-seater Mini Buses, and 32 to 50-seater luxury AC and Volvo coaches.
                </div>
              </div>
            </div>

            <div className="accordion-item border rounded-4 shadow-sm mb-3 overflow-hidden bg-white">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed fw-bold py-3 px-4" type="button" data-bs-toggle="collapse" data-bs-target="#sfaq2">
                  How is the rental cost calculated for outstation and local Pune trips?
                </button>
              </h3>
              <div id="sfaq2" className="accordion-collapse collapse" data-bs-parent="#servicesFaq">
                <div className="accordion-body text-muted px-4 pb-4">
                  Outstation rentals are billed on a transparent per-kilometer basis (with a standard 300 km/day minimum calculation), plus actual toll, parking, and driver allowance. Local Pune city rentals are available on 8 Hours / 80 Km or 12 Hours / 120 Km packages.
                </div>
              </div>
            </div>

            <div className="accordion-item border rounded-4 shadow-sm mb-3 overflow-hidden bg-white">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed fw-bold py-3 px-4" type="button" data-bs-toggle="collapse" data-bs-target="#sfaq3">
                  Do you provide monthly contract buses for corporate companies in Hinjewadi and Kharadi?
                </button>
              </h3>
              <div id="sfaq3" className="accordion-collapse collapse" data-bs-parent="#servicesFaq">
                <div className="accordion-body text-muted px-4 pb-4">
                  Yes, we provide dedicated daily and monthly employee transportation solutions for IT parks and industrial zones across Hinjewadi, Kharadi, Magarpatta, Chakan, Ranjangaon, and Talawade with GPS tracking and backup vehicle support.
                </div>
              </div>
            </div>

            <div className="accordion-item border rounded-4 shadow-sm mb-0 overflow-hidden bg-white">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed fw-bold py-3 px-4" type="button" data-bs-toggle="collapse" data-bs-target="#sfaq4">
                  Can we book multiple luxury buses for wedding guests in Pune?
                </button>
              </h3>
              <div id="sfaq4" className="accordion-collapse collapse" data-bs-parent="#servicesFaq">
                <div className="accordion-body text-muted px-4 pb-4">
                  Absolutely. We specialize in bulk wedding transportation in Pune and across Maharashtra, offering coordinated fleets of 32, 40, 45, and 50-seater AC buses and Force Urbania vans for VIP guests, airport pickups, and venue transfers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Comprehensive SEO Overview & Final CTA Banner */}
      <section className="py-5 bg-white">
        <div className="container py-3" style={{ maxWidth: '960px' }}>
          <div className="bg-light p-4 p-md-5 rounded-4 shadow-sm" style={{ border: '1px solid #e2e8f0', borderLeft: '4px solid #ff7700' }}>
            <h2 className="fw-bold h4 mb-3">Why Shree Travels is Pune's Preferred Bus, Tempo Traveller &amp; Force Urbania Rental Partner</h2>
            <p className="text-muted mb-3" style={{ lineHeight: '1.8' }}>
              With over three decades of operational excellence in Maharashtra's passenger transport sector, <strong>Shree Travels</strong> delivers unmatched reliability for both individual families and large corporate enterprises. Whether you are searching for a <strong>17 seater Tempo Traveller on rent in Pune</strong>, a premium <strong>Force Urbania on rent @ ₹32/km</strong>, or a <strong>50 seater luxury bus for a wedding or corporate event</strong>, our fleet is maintained to the highest standards of cleanliness, air-conditioning performance, and road safety.
            </p>
            <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
              From swift Pune to Mumbai International Airport transfers to multi-day Ashtavinayak, Shirdi, Mahabaleshwar, and Konkan Darshan tour packages, our transparent billing and courteous chauffeurs ensure a stress-free travel experience every kilometer of the way.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Bottom Call-to-Action */}
      <section className="py-5 text-white text-center" style={{ backgroundColor: '#0f172a' }}>
        <div className="container py-4">
          <h2 className="fw-bold h3 text-white mb-3">Need a Custom Vehicle Rental Quote in Pune?</h2>
          <p className="text-light opacity-75 mb-4 mx-auto" style={{ maxWidth: '680px' }}>
            Speak directly with our fleet booking desk for instant availability, customized tour packages, or corporate contract rates.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="tel:+917620411277"
              className="btn btn-lg text-white fw-bold px-4 py-3 rounded-pill shadow-sm d-inline-flex align-items-center"
              style={{ backgroundColor: '#ff7700' }}
            >
              <FaPhoneAlt className="me-2" /> Call: +91 76204 11277
            </a>
            <Link
              to="/book-taxi"
              className="btn btn-lg btn-outline-light fw-bold px-4 py-3 rounded-pill d-inline-flex align-items-center"
            >
              Book Online Now <FaArrowRight className="ms-2" size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;