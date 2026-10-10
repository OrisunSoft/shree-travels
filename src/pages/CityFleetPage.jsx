import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaRoad,
  FaShieldAlt,
  FaUserTie,
  FaArrowRight,
  FaClock,
  FaStar,
  FaCompass
} from 'react-icons/fa';
import SEO from '../components/SEO';
import CardSlider from '../components/CardSlider';

const CITY_MAP = {
  pune: {
    name: "Pune",
    hub: "Hinjewadi IT Park, Wakad, Baner, Kharadi, Hadapsar, Viman Nagar, Kothrud & Pimpri-Chinchwad (PCMC)",
    networkImage: "/img/Our Network Images/Our Network Images-06.jpg",
    overview:
      "Shree Travels operates its central garage and 24/7 dispatch control desk from Pimpri-Chinchwad and Pune. Whether you need a morning pickup in Hinjewadi Phase 3, a wedding convoy from Kothrud and Baner, or an airport transfer from Viman Nagar, our drivers report 30 minutes early with clean, GPS-enabled vehicles.",
    localAttractions: [
      "Shaniwar Wada, Lal Mahal & Dagdusheth Halwai Ganpati Temple",
      "Sinhagad Fort, Khadakwasla Dam & Panshet Backwaters",
      "Aga Khan Palace, Pataleshwar Caves & Osho Teerth Park",
      "Ramdara Temple, Prati Balaji Ketkawale & Jejuri Khandoba"
    ],
    topRoutes: [
      { name: "Pune to Mahabaleshwar", link: "/pune-to-mahabaleshwar-bus-hire", dist: "120 km" },
      { name: "Pune to Lonavala", link: "/pune-to-lonavala-bus-hire", dist: "65 km" },
      { name: "Pune to Shirdi", link: "/route/pune-to-shirdi-cab", dist: "185 km" },
      { name: "Pune to Mumbai Darshan", link: "/pune-to-mumbai-darshan", dist: "150 km" }
    ]
  },
  mumbai: {
    name: "Mumbai",
    hub: "Mumbai Airport (T1/T2), Andheri, Bandra BKC, Dadar, Borivali, Thane, Vashi & Navi Mumbai",
    networkImage: "/img/Our Network Images/Our Network Images-02.jpg",
    overview:
      "Our Mumbai & Navi Mumbai fleet division serves corporate delegations at BKC and Lower Parel, international arrivals at Chhatrapati Shivaji Maharaj International Airport (BOM Terminal 2), and family groups across Dadar, Borivali, Thane, and Panvel. All vehicles carry valid Mumbai Entry Toll permits and Fastag for non-stop travel.",
    localAttractions: [
      "Gateway of India, Taj Mahal Palace Hotel & Colaba Causeway",
      "Marine Drive (Queen's Necklace), Nariman Point & Girgaon Chowpatty",
      "Shree Siddhivinayak Temple, Mahalakshmi Temple & Haji Ali Dargah",
      "Bandra-Worli Sea Link, Juhu Beach & Film City Goregaon"
    ],
    topRoutes: [
      { name: "Mumbai to Pune Expressway", link: "/pune-to-mumbai-darshan", dist: "150 km" },
      { name: "Mumbai to Lonavala & Khandala", link: "/pune-to-lonavala-bus-hire", dist: "85 km" },
      { name: "Mumbai to Shirdi & Shani Shingnapur", link: "/route/pune-to-shirdi-cab", dist: "240 km" },
      { name: "Mumbai to Mahabaleshwar", link: "/pune-to-mahabaleshwar-bus-hire", dist: "260 km" }
    ]
  },
  shirdi: {
    name: "Shirdi",
    hub: "Sai Baba Samadhi Mandir Gate, Sainagar Shirdi Railway Station, Shirdi Airport & Rahata",
    networkImage: "/img/Keyword Based Image/Keyword Based Image-07.jpg",
    overview:
      "Planning a family pilgrimage to Shri Sai Baba Samadhi Mandir in Shirdi? Shree Travels provides dedicated pilgrimage coaches, Force Urbania vans, and AC Tempo Travellers with drivers who know the exact VIP Darshan Gate drop points, Bhaktiniwas parking zones, and same-day detours to Shani Shingnapur and Nashik Trimbakeshwar.",
    localAttractions: [
      "Shri Sai Baba Samadhi Mandir, Dwarkamai & Chavadi",
      "Gurusthan, Lendi Baug & Khandoba Mandir",
      "Shani Shingnapur Temple (70 km from Shirdi)",
      "Devgad Dattatreya Temple & Ranjangaon Mahaganpati en route"
    ],
    topRoutes: [
      { name: "Pune to Shirdi Darshan", link: "/route/pune-to-shirdi-cab", dist: "185 km" },
      { name: "Shirdi to Trimbakeshwar & Nashik", link: "/rent/nashik/tempo-traveller", dist: "120 km" },
      { name: "Shirdi to Grishneshwar & Ellora", link: "/bhimashankar-5-jyotirlinga-darshan-pune", dist: "110 km" },
      { name: "Shirdi to Bhimashankar Jyotirlinga", link: "/bhimashankar-5-jyotirlinga-darshan-pune", dist: "180 km" }
    ]
  },
  lonavala: {
    name: "Lonavala",
    hub: "Lonavala Railway Station, Khandala Ghat, Tiger Point, Pawna Lake, Karla & Bhaja Caves",
    networkImage: "/img/Keyword Based Image/Keyword Based Image-26.jpg",
    overview:
      "Lonavala and Khandala are the favourite weekend hill stations for corporate offsites, villa parties, and family monsoon getaways from Pune and Mumbai. Our ghat-certified drivers navigate the steep bends of Tiger Point, Lion's Point, Amby Valley road, and Pawna Lake campsites safely in every season.",
    localAttractions: [
      "Tiger's Leap (Tiger Point), Lion's Point & Sunset Point Khandala",
      "Bhushi Dam, Lonavala Lake & Rajmachi Viewpoint",
      "Karla Caves, Ekvira Devi Temple & Bhaja Caves",
      "Pawna Lake Camping, Lohagad Fort & Imagicaa Theme Park"
    ],
    topRoutes: [
      { name: "Pune to Lonavala Sightseeing", link: "/pune-to-lonavala-bus-hire", dist: "65 km" },
      { name: "Lonavala to Imagicaa & Khopoli", link: "/pune-to-lonavala-bus-hire", dist: "25 km" },
      { name: "Lonavala to Mahabaleshwar", link: "/pune-to-mahabaleshwar-bus-hire", dist: "180 km" },
      { name: "Lonavala to Mumbai Airport Drop", link: "/pune-to-mumbai-darshan", dist: "90 km" }
    ]
  },
  nashik: {
    name: "Nashik",
    hub: "Panchavati, Trimbakeshwar Jyotirlinga, Sula Vineyards, Igatpuri & Saputara Highway",
    networkImage: "/img/Keyword Based Image/Keyword Based Image-25.jpg",
    overview:
      "From sacred Jyotirlinga pilgrimages at Trimbakeshwar and Saptashrungi Vani Gad to weekend wine-tasting tours at Sula and York Vineyards, our Nashik fleet combines spiritual comfort with executive luxury. Ideal for Pune-to-Nashik via NH60 (Sangamner Highway) and Nashik-Shirdi-Aurangabad circuits.",
    localAttractions: [
      "Shri Trimbakeshwar Jyotirlinga Temple & Kushavarta Kund",
      "Panchavati, Kalaram Mandir, Sita Gufaa & Ramkund Godavari Ghat",
      "Saptashrungi Devi Temple at Vani Gad (Funicular Trolley access)",
      "Sula Vineyards, Pandavleni Caves & Muktidham Mandir"
    ],
    topRoutes: [
      { name: "Pune to Nashik & Trimbakeshwar", link: "/bhimashankar-5-jyotirlinga-darshan-pune", dist: "215 km" },
      { name: "Nashik to Saptashrungi Devi Vani", link: "/sade-teen-shakti-peeth-darshan-pune", dist: "65 km" },
      { name: "Nashik to Shirdi Sai Baba Temple", link: "/rent/shirdi/force-urbania", dist: "90 km" },
      { name: "Nashik to Igatpuri & Bhandardara", link: "/pune-to-lonavala-bus-hire", dist: "50 km" }
    ]
  }
};

// Exact heading overrides so Footer Keywords #4, #5, #13 and dropdown links have exact H1s
const CUSTOM_HEADINGS = {
  "pune__mini-bus": "Mini Bus On Rent in Pune",
  "pune__bus": "Luxury & Mini Bus Rental in Pune",
  "pune__tempo-traveller": "Tempo Traveller Hire in Pune",
  "pune__force-urbania": "Luxury Force Urbania Rental in Pune",
  "pune__tata-winger": "Tata Winger On Rent in Pune",
  "pune__volvo-bus": "Volvo Bus On Rent in Pune",
  "mumbai__force-urbania": "Urbania On Rent in Mumbai",
  "mumbai__tempo-traveller": "Tempo Traveller On Rent in Mumbai",
  "mumbai__mini-bus": "Mini Bus On Rent in Mumbai",
  "mumbai__bus": "Bus On Rent in Mumbai",
  "mumbai__tata-winger": "Tata Winger On Rent in Mumbai",
  "mumbai__volvo-bus": "Volvo Bus On Rent in Mumbai",
  "lonavala__force-urbania": "Urbania Rent in Lonavala",
  "lonavala__mini-bus": "Mini Bus On Rent in Lonavala",
  "lonavala__tempo-traveller": "Tempo Traveller On Rent in Lonavala",
  "lonavala__bus": "Bus On Rent in Lonavala",
  "lonavala__tata-winger": "Tata Winger On Rent in Lonavala",
  "lonavala__volvo-bus": "Volvo Bus On Rent in Lonavala",
  "shirdi__bus": "Bus On Rent in Shirdi",
  "shirdi__mini-bus": "Mini Bus On Rent in Shirdi",
  "shirdi__tempo-traveller": "Tempo Traveller On Rent in Shirdi",
  "shirdi__force-urbania": "Force Urbania On Rent in Shirdi",
  "shirdi__tata-winger": "Tata Winger On Rent in Shirdi",
  "shirdi__volvo-bus": "Volvo Bus On Rent in Shirdi",
  "nashik__mini-bus": "Mini Bus On Rent in Nashik",
  "nashik__tempo-traveller": "Tempo Traveller On Rent in Nashik",
  "nashik__force-urbania": "Force Urbania On Rent in Nashik",
  "nashik__bus": "Bus On Rent in Nashik",
  "nashik__tata-winger": "Tata Winger On Rent in Nashik",
  "nashik__volvo-bus": "Volvo Bus On Rent in Nashik"
};

const VEHICLE_DETAILS = {
  "force-urbania": {
    label: "Force Urbania",
    heroImg: "/img/urbania/ub-1.jpeg",
    gallery: [
      { src: "/img/urbania/ub-1.jpeg", caption: "Luxury Force Urbania On Rent" },
      { src: "/img/urbania/ub-2.jpeg", caption: "Premium White Force Urbania Fleet" },
      { src: "/img/urbania/ub-3.jpeg", caption: "Executive Grey Force Urbania Van" },
      { src: "/img/Keyword Based Image/comfort-1.jpeg", caption: "VIP Recliner Cabin Interior" }
    ],
    specs: "10, 13 & 17 Seater Next-Gen Luxury Force Urbania Vans",
    summary:
      "European-styled luxury van equipped with aircraft-grade individual recliner seats, panoramic sealed windows, dual airbags, ABS + ESP safety suite, and whisper-quiet NVH cabin insulation."
  },
  "tempo-traveller": {
    label: "Tempo Traveller",
    heroImg: "/img/Keyword Based Image/Keyword Based Image-01.jpg",
    gallery: [
      { src: "/img/Keyword Based Image/Keyword Based Image-01.jpg", caption: "Tempo Traveller On Rent" },
      { src: "/img/25-seater-tempo/tt-1.jpeg", caption: "25 & 26 Seater Luxury Tempo Traveller Interior" },
      { src: "/img/25-seater-tempo/tt-2.jpeg", caption: "Force Traveller Long Wheelbase Exterior" },
      { src: "/img/Keyword Based Image/Keyword Based Image-05.jpg", caption: "14 Seater AC Tempo Traveller" }
    ],
    specs: "13, 14, 17, 20 & 26 Seater Maharaja AC Tempo Travellers",
    summary:
      "India's most trusted group tour vehicle featuring 1x1 and 2x1 Maharaja pushback seats, individual AC vents, USB charging ports, Bluetooth music system, and smooth suspension."
  },
  "mini-bus": {
    label: "Mini Bus",
    heroImg: "/img/Keyword Based Image/Keyword Based Image-04.jpg",
    gallery: [
      { src: "/img/Keyword Based Image/Keyword Based Image-04.jpg", caption: "Mini Bus On Rent in Pune" },
      { src: "/img/Keyword Based Image/Keyword Based Image-08.jpg", caption: "20 Seater Mini Bus Hire" },
      { src: "/img/Keyword Based Image/Keyword Based Image-50.jpg", caption: "Compact Mini Bus & Winger Fleet" },
      { src: "/img/Keyword Based Image/Keyword Based Image-51.jpg", caption: "14, 17, 20 & 25 Seater Mini Buses" }
    ],
    specs: "13, 15, 17, 20 & 25 Seater AC/Non-AC Mini Coaches",
    summary:
      "Compact, high-maneuverability mini buses with wide entry doors, 2x1 and 2x2 pushback seating, roof carrier / rear boot luggage space, and powerful dual-blower AC."
  },
  "bus": {
    label: "Bus",
    heroImg: "/img/Keyword Based Image/Keyword Based Image-47.jpg",
    gallery: [
      { src: "/img/Keyword Based Image/Keyword Based Image-47.jpg", caption: "32, 35, 40, 45 & 50 Seater Buses" },
      { src: "/img/Keyword Based Image/Keyword Based Image-11.jpg", caption: "32 Seater Luxury Bus" },
      { src: "/img/Keyword Based Image/Keyword Based Image-14.jpg", caption: "50 Seater Tourist Coach" },
      { src: "/img/Keyword Based Image/Keyword Based Image-15.jpg", caption: "Volvo & Scania Air-Suspension Coaches" }
    ],
    specs: "30, 32, 35, 40, 45 & 50 Seater AC / Non-AC / Volvo Coaches",
    summary:
      "Full-size luxury tourist coaches with pneumatic air suspension, high-back 2x2 reclining seats, dual LED TVs, PA mic system for tour leaders, and massive under-belly luggage holds."
  },
  "tata-winger": {
    label: "Tata Winger",
    heroImg: "/img/Keyword Based Image/1.jpg",
    gallery: [
      { src: "/img/Keyword Based Image/1.jpg", caption: "Tata Winger On Rent" },
      { src: "/img/Keyword Based Image/Keyword Based Image-50.jpg", caption: "9, 10, 13 & 15 Seater Tata Winger" },
      { src: "/img/Keyword Based Image/Keyword Based Image-05.jpg", caption: "AC Pushback Cabin Interior" },
      { src: "/img/Keyword Based Image/Keyword Based Image-51.jpg", caption: "Compact Executive Van & Mini Coach Fleet" }
    ],
    specs: "9, 10, 12, 13 & 15 Seater AC/Non-AC Tata Winger Vans",
    summary:
      "Economical, high-headroom executive passenger van with monocoque body comfort, dual-blower AC, front-wheel drive stability, and ample luggage space for small families and corporate teams."
  },
  "volvo-bus": {
    label: "Volvo Bus",
    heroImg: "/img/Keyword Based Image/Keyword Based Image-42.jpg",
    gallery: [
      { src: "/img/Keyword Based Image/Keyword Based Image-42.jpg", caption: "Volvo Bus On Rent" },
      { src: "/img/Keyword Based Image/Keyword Based Image-15.jpg", caption: "45 & 49 Seater Volvo Multi-Axle Coach" },
      { src: "/img/Keyword Based Image/Keyword Based Image-14.jpg", caption: "50 Seater Luxury Tourist Coach" },
      { src: "/img/Keyword Based Image/Keyword Based Image-47.jpg", caption: "Premium Air-Suspension Bus Fleet" }
    ],
    specs: "45, 49 & 53 Seater Volvo & Scania Multi-Axle Air-Suspension Coaches",
    summary:
      "Flagship luxury coaches with electronically controlled pneumatic air suspension, extra-wide calf-support reclining seats, whisper-quiet cabin insulation, dual LED displays, and huge under-belly luggage bays."
  }
};

// Official Pricing synchronized with Packages.jsx
const VEHICLE_PRICING = {
  "mini-bus": [
    { seat: "13 Seater", type: "Non-AC", pkg300: 7200, perKm: 22, local: 5500, mumbai: 9000, mahabaleshwar: 9000, shirdi: 9000 },
    { seat: "13 Seater", type: "AC", pkg300: 8100, perKm: 25, local: 5500, mumbai: 10000, mahabaleshwar: 10000, shirdi: 10000 },
    { seat: "15 Seater", type: "AC", pkg300: 9000, perKm: 30, local: 5500, mumbai: 11000, mahabaleshwar: 11000, shirdi: 11000 },
    { seat: "17 Seater", type: "Non-AC", pkg300: 7500, perKm: 22, local: 5500, mumbai: 10000, mahabaleshwar: 10000, shirdi: 10000 },
    { seat: "17 Seater", type: "AC", pkg300: 9600, perKm: 25, local: 5500, mumbai: 12000, mahabaleshwar: 12000, shirdi: 12000 },
    { seat: "20 Seater Tempo Traveller", type: "Non-AC", pkg300: 7500, perKm: 25, local: 6000, mumbai: 11000, mahabaleshwar: 10000, shirdi: 11500 },
    { seat: "20 Seater Tempo Traveller", type: "AC", pkg300: 8400, perKm: 28, local: 6500, mumbai: 13000, mahabaleshwar: 12000, shirdi: 13000 },
    { seat: "24 Seater Mini Bus", type: "AC", pkg300: 12000, perKm: 40, local: 7000, mumbai: 18000, mahabaleshwar: 13000, shirdi: 14000 },
    { seat: "26 Seater Tempo Traveller", type: "Non-AC", pkg300: 9600, perKm: 32, local: 7000, mumbai: 14000, mahabaleshwar: 12000, shirdi: 13000 },
    { seat: "26 Seater Tempo Traveller", type: "AC", pkg300: 11100, perKm: 37, local: 8000, mumbai: 17000, mahabaleshwar: 14000, shirdi: 15000 },
    { seat: "29 Seater Bus", type: "AC", pkg300: 13500, perKm: 45, local: 8000, mumbai: 18000, mahabaleshwar: 14000, shirdi: 15000 },
    { seat: "30 Seater Bus", type: "Non-AC", pkg300: 10500, perKm: 35, local: 8000, mumbai: 15000, mahabaleshwar: 13000, shirdi: 14000 }
  ],
  "tempo-traveller": [
    { seat: "13 Seater", type: "Non-AC", pkg300: 6600, perKm: 22, local: 5000, mumbai: 10000, mahabaleshwar: 9000, shirdi: 9000 },
    { seat: "13 Seater", type: "AC", pkg300: 7500, perKm: 25, local: 5500, mumbai: 11000, mahabaleshwar: 10000, shirdi: 10000 },
    { seat: "17 Seater", type: "Non-AC", pkg300: 6600, perKm: 22, local: 5000, mumbai: 10000, mahabaleshwar: 9000, shirdi: 9000 },
    { seat: "17 Seater", type: "AC", pkg300: 7500, perKm: 25, local: 5500, mumbai: 11000, mahabaleshwar: 10000, shirdi: 10000 },
    { seat: "20 Seater", type: "Non-AC", pkg300: 7500, perKm: 25, local: 6000, mumbai: 11000, mahabaleshwar: 10000, shirdi: 10000 },
    { seat: "20 Seater", type: "AC", pkg300: 8400, perKm: 28, local: 6500, mumbai: 13000, mahabaleshwar: 12000, shirdi: 12000 },
    { seat: "26 Seater", type: "Non-AC", pkg300: 9600, perKm: 32, local: 7000, mumbai: 14000, mahabaleshwar: 12000, shirdi: 12500 },
    { seat: "26 Seater", type: "AC", pkg300: 11100, perKm: 37, local: 8000, mumbai: 17000, mahabaleshwar: 14000, shirdi: 14000 }
  ],
  "bus": [
    { seat: "30 Seater", type: "Non-AC", pkg300: 10500, perKm: 35, local: 8000, mumbai: 15000, mahabaleshwar: 13000, shirdi: 14000 },
    { seat: "32 Seater", type: "Non-AC", pkg300: 10500, perKm: 35, local: 8000, mumbai: 15000, mahabaleshwar: 13000, shirdi: 14000 },
    { seat: "32 Seater", type: "AC", pkg300: 15000, perKm: 50, local: 10000, mumbai: 22000, mahabaleshwar: 16000, shirdi: 18000 },
    { seat: "35 Seater", type: "Non-AC", pkg300: 11400, perKm: 38, local: 8000, mumbai: 17000, mahabaleshwar: 14000, shirdi: 16000 },
    { seat: "35 Seater Benz", type: "AC", pkg300: 15000, perKm: 50, local: 10000, mumbai: 22000, mahabaleshwar: 16500, shirdi: 18000 },
    { seat: "45 Seater", type: "Non-AC", pkg300: 15000, perKm: 50, local: 10000, mumbai: 20000, mahabaleshwar: 16000, shirdi: 18000 },
    { seat: "49 Seater", type: "Non-AC", pkg300: 15000, perKm: 50, local: 10000, mumbai: 20000, mahabaleshwar: 16000, shirdi: 19000 },
    { seat: "53 Seater Volvo/Benz", type: "Special AC", pkg300: 24000, perKm: 80, local: 20000, mumbai: 33000, mahabaleshwar: 25000, shirdi: 25000 }
  ],
  "force-urbania": [
    { seat: "10 Seater Urbania", type: "AC Luxury", pkg300: 9600, perKm: 32, local: 8000, mumbai: 14000, mahabaleshwar: 12000, shirdi: 12000 },
    { seat: "13 Seater Urbania", type: "AC Luxury", pkg300: 9600, perKm: 32, local: 8000, mumbai: 14000, mahabaleshwar: 12000, shirdi: 12000 },
    { seat: "17 Seater Urbania", type: "AC Luxury", pkg300: 9600, perKm: 32, local: 8000, mumbai: 14000, mahabaleshwar: 12000, shirdi: 12000 }
  ],
  "tata-winger": [
    { seat: "13 Seater Winger", type: "Non-AC", pkg300: 6600, perKm: 22, local: 5000, mumbai: 10000, mahabaleshwar: 9000, shirdi: 9000 },
    { seat: "13 Seater Winger", type: "AC", pkg300: 7500, perKm: 25, local: 5500, mumbai: 11000, mahabaleshwar: 10000, shirdi: 10000 }
  ],
  "volvo-bus": [
    { seat: "53 Seater Volvo / Benz", type: "Special Luxury AC", pkg300: 24000, perKm: 80, local: 20000, mumbai: 33000, mahabaleshwar: 25000, shirdi: 25000 }
  ]
};

const CityFleetPage = () => {
  const { city = "pune", vehicle = "mini-bus" } = useParams();

  const cityInfo = CITY_MAP[city] || CITY_MAP["pune"];
  const vehicleInfo = VEHICLE_DETAILS[vehicle] || VEHICLE_DETAILS["mini-bus"];
  const fareList = VEHICLE_PRICING[vehicle] || VEHICLE_PRICING["mini-bus"];

  const customH1 =
    CUSTOM_HEADINGS[`${city}__${vehicle}`] ||
    `${vehicleInfo.label} On Rent in ${cityInfo.name}`;

  const startingPrice = Math.min(...fareList.map((item) => item.perKm));

  const pageTitle = `${customH1} @ ₹${startingPrice}/Km | Verified Rates & Packages - Shree Travels`;
  const pageDescription = `Book ${customH1} starting at ₹${startingPrice}/Km. View 300 KM outstation packages, 8Hr/80Km local fares, and verified sightseeing trips across ${cityInfo.hub}. Call +91 7620411277 or WhatsApp +91 78757 74499.`;

  const faqs = [
    {
      q: `What is the per km rate for ${customH1}?`,
      a: `Our ${vehicleInfo.label} rental rate in ${cityInfo.name} starts at ₹${startingPrice}/km for outstation travel (minimum 300 km/day billing). Local 8 Hours / 80 KM packages start from ₹${fareList[0].local}.`
    },
    {
      q: `Which areas in ${cityInfo.name} do you cover for doorstep pickup?`,
      a: `We provide punctual doorstep pickup and drop across ${cityInfo.hub} with zero extra empty-dispatch charges inside city limits.`
    },
    {
      q: `Are tolls, parking, and state permits included in the per-km rate?`,
      a: `To keep billing 100% transparent, highway Fastag tolls, parking fees, and interstate taxes (if any) are charged on actual receipts.`
    },
    {
      q: `How can I book ${customH1} urgently?`,
      a: `You can call our 24/7 dispatch desk at +91 7620411277 or click the WhatsApp button (+91 7875774499) to get vehicle photos and live booking confirmation in 2 minutes.`
    }
  ];

  const pageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": customH1,
      "description": pageDescription,
      "provider": {
        "@type": "AutoRental",
        "name": "Shree Travels",
        "telephone": "+917620411277",
        "url": `https://shreetravels.in/rent/${city}/${vehicle}`
      },
      "areaServed": {
        "@type": "City",
        "name": cityInfo.name
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": String(startingPrice),
        "highPrice": String(Math.max(...fareList.map((i) => i.pkg300))),
        "offerCount": String(fareList.length)
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    }
  ];

  return (
    <div style={{ overflowX: "hidden", maxWidth: "100%" }}>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={`${customH1}, ${vehicleInfo.label} on rent in ${cityInfo.name}, ${cityInfo.name} ${vehicleInfo.label.toLowerCase()} hire rate per km, Shree Travels ${cityInfo.name}`}
        path={`/rent/${city}/${vehicle}`}
        image={vehicleInfo.heroImg}
        schema={pageSchema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/service" },
          { name: customH1, url: `/rent/${city}/${vehicle}` }
        ]}
      />

      {/* Hero Section */}
      <section
        className="py-5 text-white"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
      >
        <div className="container py-lg-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span
                  className="badge px-3 py-2 rounded-pill fw-bold"
                  style={{ backgroundColor: "#ff7700", color: "#fff" }}
                >
                  <FaMapMarkerAlt className="me-1" /> {cityInfo.name} Dispatch Hub
                </span>
                <span
                  className="badge px-3 py-2 rounded-pill fw-semibold"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.12)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)"
                  }}
                >
                  Starting @ ₹{startingPrice}/km
                </span>
              </div>

              <h1 className="display-5 fw-bold mb-3 text-white">{customH1}</h1>
              <p className="lead mb-3" style={{ color: "#e2e8f0" }}>
                {vehicleInfo.summary} Serving <strong>{cityInfo.hub}</strong> with transparent garage-to-garage rates and experienced commercial chauffeurs.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <a
                  href="tel:+917620411277"
                  className="btn btn-lg text-white fw-bold px-4 py-3 rounded-pill shadow"
                  style={{ backgroundColor: "#ff7700" }}
                >
                  <FaPhoneAlt className="me-2" /> Call +91 76204 11277
                </a>
                <a
                  href={`https://wa.me/917875774499?text=${encodeURIComponent(
                    `Hello Shree Travels, I want to book ${customH1}. Please share rates & availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg fw-bold px-4 py-3 rounded-pill shadow text-white"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <FaWhatsapp className="me-2" /> WhatsApp +91 78757 74499
                </a>
                <Link
                  to="/book-taxi"
                  className="btn btn-lg btn-outline-light fw-bold px-4 py-3 rounded-pill"
                >
                  Online Booking
                </Link>
              </div>

              <div className="small" style={{ color: "#cbd5e1" }}>
                <strong>24/7 Direct Dispatch:</strong>{" "}
                <a href="tel:+917620411277" className="text-white text-decoration-none me-2">+91 76204 11277 (Call)</a> |{" "}
                <a href="https://wa.me/917875774499" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none ms-2">+91 78757 74499 (WhatsApp)</a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="bg-white p-2 rounded-4 shadow-lg">
                <div className="position-relative overflow-hidden rounded-4">
                  <img
                    src={vehicleInfo.heroImg}
                    alt={customH1}
                    className="img-fluid rounded-4 w-100 d-block"
                  />
                </div>
                <div className="p-3 text-dark d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge bg-success mb-1">Verified Fleet</span>
                    <h2 className="h6 fw-bold mb-0" style={{ color: "#0f172a" }}>
                      {vehicleInfo.specs}
                    </h2>
                  </div>
                  <span className="fw-bold" style={{ color: "#ff7700", fontSize: "1.1rem" }}>
                    ₹{startingPrice}/km
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Specific Overview & Local Places to Tour */}
      <section className="py-5 bg-white">
        <div className="container py-2">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <span
                className="badge px-3 py-2 rounded-pill mb-2"
                style={{ backgroundColor: "#fff3e6", color: "#ff7700" }}
              >
                LOCAL DISPATCH & SIGHTSEEING GUIDE
              </span>
              <h2 className="fw-bold h3 mb-3" style={{ color: "#0f172a" }}>
                Why Book {customH1} with Shree Travels?
              </h2>
              <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>
                {cityInfo.overview}
              </p>

              <div className="p-4 rounded-4 bg-light border mb-4">
                <h3 className="h5 fw-bold mb-3" style={{ color: "#0f172a" }}>
                  <FaCompass className="me-2" style={{ color: "#ff7700" }} />
                  Popular Local Sightseeing & Pickup Points in {cityInfo.name}
                </h3>
                <div className="row g-2">
                  {cityInfo.localAttractions.map((spot, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="d-flex align-items-start gap-2 small text-dark py-1">
                        <FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: "#ff7700" }} />
                        <span>{spot}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2">
                {cityInfo.topRoutes.map((rt, i) => (
                  <Link
                    key={i}
                    to={rt.link}
                    className="btn btn-sm btn-outline-dark rounded-pill px-3 py-2 fw-semibold"
                  >
                    <FaRoad className="me-1" style={{ color: "#ff7700" }} /> {rt.name} ({rt.dist})
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <img
                    src={cityInfo.networkImage}
                    alt={`${cityInfo.name} Travel & Bus Hire Network`}
                    className="img-fluid w-100 d-block"
                  />
                </div>
                <div className="card-body p-4" style={{ backgroundColor: "#0f172a", color: "#fff" }}>
                  <h3 className="h5 fw-bold text-white mb-2">
                    {cityInfo.name} Active Coverage Zones
                  </h3>
                  <p className="small mb-3" style={{ color: "#cbd5e1" }}>
                    {cityInfo.hub}
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge bg-success">30-Min Reporting</span>
                    <span className="badge bg-warning text-dark">GPS Tracked</span>
                    <span className="badge bg-info text-dark">All-Permit Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Pricing Table Section */}
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container py-3">
          <div className="text-center mb-4">
            <span
              className="badge px-3 py-2 rounded-pill mb-2"
              style={{ backgroundColor: "#fff3e6", color: "#ff7700" }}
            >
              OFFICIAL PACKAGES.JSX TARIFF CARD
            </span>
            <h2 className="fw-bold h3" style={{ color: "#0f172a" }}>
              Verified Fares & Packages for {customH1}
            </h2>
            <p className="text-muted mb-2">
              Direct garage rates with transparent terms and zero hidden charges.
            </p>
            <div className="d-md-none small fw-semibold" style={{ color: "#ff7700" }}>
              ← Swipe table horizontally to view all rates & tap Book Now →
            </div>
          </div>

          <div className="table-responsive shadow-sm rounded-4 border bg-white">
            <table className="table table-hover align-middle mb-0 text-center">
              <thead className="text-white" style={{ backgroundColor: "#0f172a" }}>
                <tr>
                  <th className="py-3 text-white" style={{ backgroundColor: "#0f172a" }}>Seating Capacity</th>
                  <th className="py-3 text-white" style={{ backgroundColor: "#0f172a" }}>Type</th>
                  <th className="py-3 text-white" style={{ backgroundColor: "#0f172a" }}>300 KM Outstation Pkg</th>
                  <th className="py-3 text-white" style={{ backgroundColor: "#0f172a" }}>Per KM Rate</th>
                  <th className="py-3 text-white" style={{ backgroundColor: "#0f172a" }}>8 Hrs / 80 KM Local</th>
                  <th className="py-3 text-white" style={{ backgroundColor: "#0f172a" }}>Mumbai Trip</th>
                  <th className="py-3 text-white" style={{ backgroundColor: "#0f172a" }}>Mahabaleshwar Trip</th>
                  <th className="py-3 text-white" style={{ backgroundColor: "#0f172a" }}>Shirdi Trip</th>
                  <th className="py-3 text-white" style={{ backgroundColor: "#0f172a" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {fareList.map((item, index) => (
                  <tr key={index}>
                    <td><strong>{item.seat}</strong></td>
                    <td>
                      <span
                        className={`badge ${
                          item.type.includes("AC") && !item.type.includes("Non")
                            ? "bg-success"
                            : "bg-secondary"
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>
                    <td className="fw-bold" style={{ color: "#ff7700" }}>₹{item.pkg300.toLocaleString()}</td>
                    <td className="fw-bold">₹{item.perKm}/km</td>
                    <td>₹{item.local.toLocaleString()}</td>
                    <td>₹{item.mumbai.toLocaleString()}</td>
                    <td>₹{item.mahabaleshwar.toLocaleString()}</td>
                    <td>{item.shirdi ? `₹${item.shirdi.toLocaleString()}` : "—"}</td>
                    <td>
                      <button
                        type="button"
                        data-vehicle={`${item.seat} ${vehicleInfo.label}`}
                        data-place={`${cityInfo.name} (${customH1})`}
                        className="btn btn-sm text-white fw-bold px-3 rounded-pill open-booking-popup-btn"
                        style={{ backgroundColor: "#ff7700" }}
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
          </div>
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="py-5 bg-white">
        <div className="container py-2">
          <div className="text-center mb-4">
            <h2 className="fw-bold h3" style={{ color: "#0f172a" }}>
              {vehicleInfo.label} Fleet Photos ({cityInfo.name} Division)
            </h2>
            <p className="text-muted">Swipe or use the slider arrows to view actual photos from our fleet serving {cityInfo.name} & Maharashtra</p>
          </div>
          <CardSlider cardsPerView={4} interval={3800}>
            {vehicleInfo.gallery.map((img, i) => (
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" key={i}>
                <div className="position-relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={`${img.caption} - ${cityInfo.name}`}
                    className="img-fluid w-100 d-block"
                  />
                </div>
                <div className="card-body p-3 text-center">
                  <p className="small fw-bold mb-0" style={{ color: "#0f172a" }}>
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* Cross-City & Cross-Vehicle Local SEO Switcher */}
      <section className="py-5 bg-light border-top">
        <div className="container">
          <div className="mb-4">
            <span
              className="badge px-3 py-2 rounded-pill mb-2 fw-bold"
              style={{ backgroundColor: "#fff3e6", color: "#ff7700" }}
            >
              LOCAL SEO FOCUS KEYWORDS & MULTI-CITY FLEET MATRIX
            </span>
            <h2 className="fw-bold h4 mb-2" style={{ color: "#0f172a" }}>
              All Vehicle Types Available on Rent in {cityInfo.name}
            </h2>
            <p className="text-muted small mb-0">
              Click any vehicle type below to open its dedicated {cityInfo.name} rental page with verified per-km rates, local packages, and fleet photos:
            </p>
          </div>

          <div className="row g-3 mb-4">
            {Object.keys(VEHICLE_DETAILS).map((vKey) => (
              <div className="col-6 col-md-4 col-lg-2" key={vKey}>
                <Link
                  to={`/rent/${city}/${vKey}`}
                  className={`btn w-100 py-3 px-2 fw-bold rounded-4 shadow-sm small ${
                    vKey === vehicle ? "text-white" : "bg-white text-dark border"
                  }`}
                  style={vKey === vehicle ? { backgroundColor: "#ff7700" } : {}}
                >
                  {VEHICLE_DETAILS[vKey].label} in {cityInfo.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Dedicated Focus Keywords for Current City & Vehicle */}
          <div className="p-4 rounded-4 bg-white border shadow-sm mb-4">
            <h3 className="h6 fw-bold mb-3" style={{ color: "#0f172a" }}>
              Focus Keywords for {customH1} & {cityInfo.name} Local Dispatch:
            </h3>
            <div className="d-flex flex-wrap gap-2">
              {Object.keys(VEHICLE_DETAILS).map((vKey) => (
                <Link
                  key={`kw-${vKey}`}
                  to={`/rent/${city}/${vKey}`}
                  className="focus-keyword-pill"
                >
                  <FaStar size={11} style={{ color: "#ff7700" }} />
                  {CUSTOM_HEADINGS[`${city}__${vKey}`] || `${VEHICLE_DETAILS[vKey].label} On Rent in ${cityInfo.name}`}
                </Link>
              ))}
              {Object.keys(CITY_MAP).map((cKey) => (
                <Link
                  key={`city-kw-${cKey}`}
                  to={`/rent/${cKey}/${vehicle}`}
                  className="focus-keyword-pill"
                >
                  <FaMapMarkerAlt size={11} style={{ color: "#ff7700" }} />
                  {CUSTOM_HEADINGS[`${cKey}__${vehicle}`] || `${vehicleInfo.label} On Rent in ${CITY_MAP[cKey].name}`}
                </Link>
              ))}
              <Link to="/force-urbania-on-rent-pune" className="focus-keyword-pill">
                <FaArrowRight size={10} style={{ color: "#ff7700" }} /> Force Urbania @ ₹32/km
              </Link>
              <Link to="/tempo-traveller-on-rent-in-pune" className="focus-keyword-pill">
                <FaArrowRight size={10} style={{ color: "#ff7700" }} /> Tempo Traveller @ ₹22/km
              </Link>
              <Link to="/tata-winger-on-rent-in-pune" className="focus-keyword-pill">
                <FaArrowRight size={10} style={{ color: "#ff7700" }} /> Tata Winger On Rent
              </Link>
              <Link to="/volvo-bus-on-rent-in-pune" className="focus-keyword-pill">
                <FaArrowRight size={10} style={{ color: "#ff7700" }} /> Volvo Bus On Rent
              </Link>
            </div>
          </div>

          <h3 className="h6 fw-bold mb-2" style={{ color: "#0f172a" }}>
            Switch City Hub (Pune, Mumbai, Nashik, Lonavala & Shirdi):
          </h3>
          <div className="d-flex flex-wrap gap-2">
            {Object.keys(CITY_MAP).map((cKey) => (
              <Link
                key={cKey}
                to={`/rent/${cKey}/${vehicle}`}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold ${
                  cKey === city ? "btn-dark" : "btn-outline-dark"
                }`}
              >
                {vehicleInfo.label} in {CITY_MAP[cKey].name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-5 bg-white border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="fw-bold h3 text-center mb-4" style={{ color: "#0f172a" }}>
                Frequently Asked Questions — {customH1}
              </h2>
              <div className="d-flex flex-column gap-3">
                {faqs.map((f, idx) => (
                  <div className="p-4 rounded-4 bg-light border" key={idx}>
                    <h3 className="h6 fw-bold mb-2" style={{ color: "#0f172a" }}>
                      Q{idx + 1}. {f.q}
                    </h3>
                    <p className="text-muted small mb-0" style={{ lineHeight: "1.7" }}>
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityFleetPage;