import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  FaBus,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
  FaStar,
  FaCompass,
  FaShieldAlt,
  FaClock
} from 'react-icons/fa';
import SEO from '../components/SEO';
import CardSlider from '../components/CardSlider';

// Official Pricing Rows from Packages.jsx grouped by vehicle category
const FARE_TABLES = {
  urbania: [
    { model: '10 Seater Force Urbania (AC Luxury)', pkg300: '₹9,600', perKm: '₹32/km (Flat)', local: '₹8,000', mumbai: '₹14,000', mahabaleshwar: '₹12,000', shirdi: '₹12,000' },
    { model: '13 Seater Force Urbania (AC Luxury)', pkg300: '₹9,600', perKm: '₹32/km (Flat)', local: '₹8,000', mumbai: '₹14,000', mahabaleshwar: '₹12,000', shirdi: '₹12,000' },
    { model: '17 Seater Force Urbania (AC Luxury)', pkg300: '₹9,600', perKm: '₹32/km (Flat)', local: '₹8,000', mumbai: '₹14,000', mahabaleshwar: '₹12,000', shirdi: '₹12,000' }
  ],
  tempo: [
    { model: '13 Seater Tempo Traveller (Non-AC / AC)', pkg300: '₹6,600 / ₹7,500', perKm: '₹22 / ₹25', local: '₹5,000 / ₹5,500', mumbai: '₹10,000 / ₹11,000', mahabaleshwar: '₹9,000 / ₹10,000', shirdi: '₹10,000' },
    { model: '17 Seater Tempo Traveller (Non-AC / AC)', pkg300: '₹6,600 / ₹7,500', perKm: '₹22 / ₹25', local: '₹5,000 / ₹5,500', mumbai: '₹10,000 / ₹11,000', mahabaleshwar: '₹9,000 / ₹10,000', shirdi: '₹10,000' },
    { model: '20 Seater Tempo Traveller (Non-AC / AC)', pkg300: '₹7,500 / ₹8,400', perKm: '₹25 / ₹28', local: '₹6,000 / ₹6,500', mumbai: '₹11,000 / ₹13,000', mahabaleshwar: '₹10,000 / ₹12,000', shirdi: '₹12,000' },
    { model: '26 Seater Tempo Traveller (Non-AC / AC)', pkg300: '₹9,600 / ₹11,100', perKm: '₹32 / ₹37', local: '₹7,000 / ₹8,000', mumbai: '₹14,000 / ₹17,000', mahabaleshwar: '₹12,000 / ₹14,000', shirdi: '₹14,000' }
  ],
  winger: [
    { model: '13 Seater Tata Winger (Non-AC / AC)', pkg300: '₹6,600 / ₹7,500', perKm: '₹22 / ₹25', local: '₹5,000 / ₹5,500', mumbai: '₹10,000 / ₹11,000', mahabaleshwar: '₹9,000 / ₹10,000', shirdi: '₹10,000' }
  ],
  minibus: [
    { model: '20 Seater Mini Bus / Tempo Traveller (Non-AC / AC)', pkg300: '₹7,500 / ₹8,400', perKm: '₹25 / ₹28', local: '₹6,000 / ₹6,500', mumbai: '₹11,000 / ₹13,000', mahabaleshwar: '₹10,000 / ₹12,000', shirdi: '₹12,000' },
    { model: '24 Seater Mini Bus (AC)', pkg300: '₹12,000', perKm: '₹40/km', local: '₹7,000', mumbai: '₹18,000', mahabaleshwar: '₹13,000', shirdi: '₹14,000' },
    { model: '26 Seater Mini Bus / Tempo Traveller (Non-AC / AC)', pkg300: '₹9,600 / ₹11,100', perKm: '₹32 / ₹37', local: '₹7,000 / ₹8,000', mumbai: '₹14,000 / ₹17,000', mahabaleshwar: '₹12,000 / ₹14,000', shirdi: '₹14,000' },
    { model: '29 Seater Bus (AC)', pkg300: '₹13,500', perKm: '₹45/km', local: '₹8,000', mumbai: '₹18,000', mahabaleshwar: '₹14,000', shirdi: '₹15,000' }
  ],
  bus: [
    { model: '30 / 32 Seater Bus (Non-AC / AC)', pkg300: '₹10,500 / ₹15,000', perKm: '₹35 / ₹50', local: '₹8,000 / ₹10,000', mumbai: '₹15,000 / ₹22,000', mahabaleshwar: '₹13,000 / ₹16,000', shirdi: '₹14,000 / ₹18,000' },
    { model: '35 Seater Bus (Non-AC / AC Benz)', pkg300: '₹11,400 / ₹15,000', perKm: '₹38 / ₹50', local: '₹8,000 / ₹10,000', mumbai: '₹17,000 / ₹22,000', mahabaleshwar: '₹14,000 / ₹16,500', shirdi: '₹16,000 / ₹18,000' },
    { model: '45 / 49 Seater Bus (Non-AC)', pkg300: '₹15,000', perKm: '₹50/km', local: '₹10,000', mumbai: '₹20,000', mahabaleshwar: '₹16,000', shirdi: '₹18,000' },
    { model: '53 Seater Volvo / Benz Special Bus', pkg300: '₹24,000', perKm: '₹80/km', local: '₹20,000', mumbai: '₹33,000', mahabaleshwar: '₹25,000', shirdi: '₹25,000' }
  ],
  volvo: [
    { model: '53 Seater Volvo / Benz Special Bus', pkg300: '₹24,000', perKm: '₹80/km', local: '₹20,000', mumbai: '₹33,000', mahabaleshwar: '₹25,000', shirdi: '₹25,000' }
  ],
  all: [
    { model: 'Force Urbania (10, 13 & 17S Luxury)', pkg300: '₹9,600', perKm: '₹32/km (Flat)', local: '₹8,000', mumbai: '₹14,000', mahabaleshwar: '₹12,000', shirdi: '₹12,000' },
    { model: '13 / 17 Seater Tempo Traveller (Non-AC / AC)', pkg300: '₹6,600 – ₹7,500', perKm: '₹22 – ₹25/km', local: '₹5,000 – ₹5,500', mumbai: '₹10,000 – ₹11,000', mahabaleshwar: '₹9,000 – ₹10,000', shirdi: '₹10,000' },
    { model: '20 / 26 Seater Tempo Traveller / Mini Bus', pkg300: '₹7,500 – ₹11,100', perKm: '₹25 – ₹37/km', local: '₹6,000 – ₹8,000', mumbai: '₹11,000 – ₹17,000', mahabaleshwar: '₹10,000 – ₹14,000', shirdi: '₹12,000 – ₹14,000' },
    { model: '30 / 32 / 35 Seater Bus (Non-AC / AC)', pkg300: '₹10,500 – ₹15,000', perKm: '₹35 – ₹50/km', local: '₹8,000 – ₹10,000', mumbai: '₹15,000 – ₹22,000', mahabaleshwar: '₹13,000 – ₹16,500', shirdi: '₹14,000 – ₹18,000' },
    { model: '45 / 49 & 53 Seater Bus / Volvo', pkg300: '₹15,000 – ₹24,000', perKm: '₹50 – ₹80/km', local: '₹10,000 – ₹20,000', mumbai: '₹20,000 – ₹33,000', mahabaleshwar: '₹16,000 – ₹25,000', shirdi: '₹18,000 – ₹25,000' }
  ]
};

// Destination & Route Local Sightseeing Places for Route-Based Keywords
const DESTINATION_SPOTS = {
  mahabaleshwar: [
    { name: 'Kshetra Mahabaleshwar & Panchganga Temple', tag: 'Sacred Confluence of 5 Rivers', desc: 'Ancient temple where Krishna, Venna, Koyna, Savitri, and Gayatri rivers emerge from a carved stone Gaumukh spout, plus the Swayambhu Shiva Lingam.' },
    { name: 'Pratapgad Fort & Bhavani Mandir', tag: 'Historic 1656 Maratha Fort', desc: 'Built by Chhatrapati Shivaji Maharaj overlooking the Jawali valley; features the Tulja Bhavani shrine, equestrian statue, and panoramic Konkan views.' },
    { name: 'Arthur’s Seat, Kate’s Point & Elephant’s Head', tag: 'Dramatic Valley Viewpoints', desc: 'Experience breathtaking canyon drops over the Savitri River and Dhom Dam backwaters with cool mountain breezes year-round.' },
    { name: 'Venna Lake Boating & Mapro Garden', tag: 'Family Leisure & Strawberry Halt', desc: 'Enjoy sunset paddle-boating at Venna Lake followed by fresh strawberry cream, sandwiches, and fruit crushes at Mapro Garden in Gureghar.' },
    { name: 'Panchgani Table Land & Sydney Point', tag: 'Volcanic Mountain Plateau', desc: 'Stop at Asia’s second-largest volcanic plateau and scenic Parsi/Sydney viewpoints along Pasarani Ghat on your drive from Pune.' }
  ],
  lonavala: [
    { name: 'Bhushi Dam & Lion’s Point (Tiger Point)', tag: 'Iconic Monsoon & Sunset Views', desc: 'Relax on the cascading steps of Bhushi Dam and watch clouds roll through the Sahyadri valley from Tiger’s Leap and Sunset Point.' },
    { name: 'Karla & Bhaja Buddhist Caves & Ekvira Devi', tag: '2nd-Century BC Rock-Cut Heritage', desc: 'Marvel at ancient Chaitya arches, timber-ribbed rock halls, and the revered Ekvira Aai Temple atop Karla hills.' },
    { name: 'Pawna Lake Camping & Lohagad-Visapur Forts', tag: 'Lakeside & Trekking Circuit', desc: 'Drive along the scenic Pawna Dam backwaters surrounded by Lohagad, Visapur, Tikona, and Tung forts.' },
    { name: 'Della Adventure Park & Wet’nJoy Water Park', tag: 'Corporate Offsites & School Picnics', desc: 'Door-to-door group transfers for corporate team-building at Della and school excursions at Wet’nJoy and Wax Museum.' }
  ],
  shirdi: [
    { name: 'Shri Sai Baba Samadhi Mandir & Dwarkamai', tag: 'Main Shirdi Darshan Complex', desc: 'Convenient parking near Gate No. 1/2 for smooth darshan at Samadhi Mandir, Dwarkamai Masjid, Chavadi, Gurusthan, and Lendi Baug.' },
    { name: 'Shani Shingnapur Temple (En Route)', tag: 'Sacred Open-Sky Swayambhu Shila', desc: 'Combine your Pune to Shirdi trip with a halt at Shani Shingnapur in Nevasa taluka before returning via Ahmednagar.' },
    { name: 'Ranjangaon Mahaganpati (Ashtavinayak Stop)', tag: 'Optional En-Route Blessing', desc: 'Located directly on the Pune–Nagar Highway (NH-753F), making it an effortless morning darshan halt on your way to Shirdi.' },
    { name: 'Nashik Trimbakeshwar & Panchavati Extension', tag: '2-Day Pilgrimage Combo', desc: 'Extend your Shirdi trip via the Samruddhi Mahamarg/Sinnar highway to cover Trimbakeshwar Jyotirlinga and Sula Vineyards.' }
  ],
  ashtavinayak: [
    { name: 'Moreshwar (Morgaon) & Siddhivinayak (Siddhatek)', tag: 'Day 1 Morning & Afternoon Stops', desc: 'Begin the sacred yatra at Morgaon (Mayureshwar) in Baramati taluka and proceed to the right-trunked Siddhivinayak on the Bhima River bank.' },
    { name: 'Ballaleshwar (Pali) & Varadvinayak (Mahad)', tag: 'Konkan Ashtavinayak Temples', desc: 'Descend into Raigad district to visit Ballaleshwar at Pali (near Sarasgad Fort) and Varadvinayak at Mahad near Khopoli.' },
    { name: 'Chintamani (Theur) & Mahaganpati (Ranjangaon)', tag: 'Eastern Pune Highway Temples', desc: 'Seek peace of mind at Shri Chintamani in Theur and bow before the mighty Mahaganpati at Ranjangaon.' },
    { name: 'Vigneshwar (Ozar) & Girijatmaj (Lenyadri)', tag: 'Junnar Kukadi River & Cave Temples', desc: 'Visit the golden-domed Vigneshwar temple at Ozar and climb the 307 stone steps to the rock-cut Buddhist cave shrine of Girijatmaj at Lenyadri.' }
  ],
  jyotirlinga: [
    { name: 'Bhimashankar Jyotirlinga (Khed / Sahyadri Hills)', tag: '110 km from Pune • 6th Jyotirlinga', desc: 'Set amidst the dense Bhimashankar Wildlife Sanctuary where the Bhima River originates; ancient Nagara-style black-stone shikhara.' },
    { name: 'Trimbakeshwar Jyotirlinga (Nashik)', tag: 'Origin of River Godavari', desc: 'Features the unique three-faced Lingam representing Brahma, Vishnu, and Maheshwara at the foothills of Brahmagiri Mountain.' },
    { name: 'Grishneshwar Jyotirlinga & Ellora Caves (Sambhajinagar)', tag: '12th Jyotirlinga + UNESCO Heritage', desc: 'Red-stone Ahilyabai Holkar temple right beside the world-famous Kailasa Temple (Cave 16) at Ellora.' },
    { name: 'Aundha Nagnath (Hingoli) & Parli Vaijnath (Beed)', tag: 'Marathwada Sacred Jyotirlingas', desc: 'Complete all 5 Maharashtra Jyotirlingas with Hemadpanti carvings at Aundha Nagnath and the hilltop fortress temple at Parli Vaijnath.' }
  ],
  shaktipeeth: [
    { name: 'Shri Mahalaxmi Ambabai Mandir (Kolhapur)', tag: '1st Purna Peeth • Dakshin Kashi', desc: 'Built in the 7th century by Chalukya rulers; combine with Jyotiba Hills, Panhala Fort, and Rankala Lake in Kolhapur.' },
    { name: 'Shri Tulja Bhavani Mandir (Tuljapur)', tag: '2nd Purna Peeth • Kuldevi of Maharashtra', desc: 'Family deity of Chhatrapati Shivaji Maharaj in Dharashiv district; explore Kallol Tirth, Gomukh Tirth, and Chintamani stone.' },
    { name: 'Shri Renuka Devi Mandir (Mahurgad, Nanded)', tag: '3rd Purna Peeth • Sahyadri Peak', desc: 'Scenic forest-clad mountain shrine in Nanded district alongside Shri Datta Shikhar and Anasuya Mata Mandir.' },
    { name: 'Shri Saptashrungi Nivasini Devi (Vani, Nashik)', tag: 'Ardha (Half) Shakti Peeth', desc: '18-armed Swayambhu goddess carved into the seven-peaked cliff face at Vani, equipped with a modern funicular ropeway trolley.' }
  ],
  konkan: [
    { name: 'Alibaug, Kashid, Murud-Janjira & Diveagar', tag: 'Raigad Coastal Heritage', desc: 'Unbeatable sea-fort architecture at Janjira, white-sand Kashid beach, Suvarnaganesha at Diveagar, and Harihareshwar Dakshin Kashi.' },
    { name: 'Dapoli, Anjarle, Harnai & Guhagar', tag: 'Ratnagiri Northern Coast', desc: 'Visit Kadyavarcha Ganpati at Anjarle, Suvarnadurg sea fort, Harnai fish auction, and the pristine 6-km Guhagar beach.' },
    { name: 'Ganpatipule Swayambhu Mandir & Aare-Ware Road', tag: 'Iconic Beachfront Ganpati', desc: '400-year-old beachfront Ganpati temple paired with the breathtaking Aare-Ware coastal cliff drive and Prachin Konkan museum.' },
    { name: 'Tarkarli Scuba Diving, Sindhudurg Fort & Malvan', tag: 'Crystal-Clear Waters & Malvani Cuisine', desc: 'Snorkeling and scuba diving at Tarkarli-Devbag Sangam, boat ride to Chhatrapati Shivaji Maharaj’s Sindhudurg Fort, and authentic Malvani thalis.' }
  ],
  goa: [
    { name: 'Baga, Calangute, Candolim & Fort Aguada', tag: 'North Goa Beach & Nightlife Circuit', desc: 'Seamless group transfers from Pune via Amboli/Chorla Ghat to North Goa resorts, 17th-century Portuguese Fort Aguada, and Chapora Fort.' },
    { name: 'Old Goa Churches, Mangueshi Temple & Panjim Cruise', tag: 'UNESCO Heritage & Mandovi River', desc: 'Visit Basilica of Bom Jesus, Se Cathedral, Shri Mangueshi Temple, Latin Quarter Fontainhas, and evening Mandovi sunset cruises.' },
    { name: 'Colva, Palolem, Cabo de Rama & Dudhsagar', tag: 'South Goa Serenity', desc: 'Relax at pristine South Goa beaches, Dona Paula viewpoint, Miramar beach, and optional Dudhsagar Waterfall excursions.' }
  ],
  mumbai: [
    { name: 'Siddhivinayak Temple, Mahalaxmi & Haji Ali', tag: 'Sacred Mumbai Darshan', desc: 'Early morning departure from Pune via Expressway for peaceful darshan at Prabhadevi Siddhivinayak, Mahalaxmi Temple, and Haji Ali Dargah.' },
    { name: 'Gateway of India, Taj Mahal Palace & Colaba', tag: 'South Mumbai Heritage Walk', desc: 'Explore Apollo Bunder, Elephanta Caves ferry jetty, Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, and CSMT Victoria Terminus.' },
    { name: 'Marine Drive, Bandra-Worli Sea Link & Juhu Beach', tag: 'Queen’s Necklace & Sunset Coast', desc: 'Cruise across the iconic 8-lane Bandra-Worli Sea Link, enjoy sunset chaat at Juhu Chowpatty, and drive along Marine Drive.' }
  ],
  allIndia: [
    { name: 'Ujjain Mahakaleshwar & Omkareshwar (MP)', tag: 'Madhya Pradesh Pilgrimage Corridor', desc: 'Luxury Force Urbania and sleeper/pushback coach packages from Pune to Ujjain Mahakal Lok, Omkareshwar, and Indore.' },
    { name: 'Jaipur, Udaipur, Jodhpur & Jaisalmer', tag: 'Royal Rajasthan Darshan Package', desc: 'Multi-day all-India tourist permit coaches with dual highway drivers for family and Samaj tours across Rajasthan and Gujarat.' },
    { name: 'Haridwar, Rishikesh, Guptkashi & Kedarnath', tag: 'Himalayan Char Dham Yatra', desc: 'Mountain-certified chauffeurs and heavy-duty suspension Tempo Travellers & buses for long-distance Kedarnath and Badrinath expeditions.' },
    { name: 'Tirupati, Hampi, Gokarna, Mysore & Ooty', tag: 'South India Temple & Hill Circuit', desc: 'Hassle-free interstate permits and tax clearance handled by Shree Travels for Karnataka, Tamil Nadu, Telangana, and Kerala tours.' }
  ]
};

// Complete Master Catalog of all 95 Keywords with 1-to-1 Keyword Based Image Mapping
const RAW_KEYWORD_ENTRIES = [
  // ================= COLUMN 1 =================
  {
    slug: 'tempo-traveller-on-rent-in-pune',
    h1: 'Tempo Traveller On Rent in Pune',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-01.jpg',
    rate: '₹22/Km (Non-AC) & ₹25/Km (AC) | ₹5,500 Local 8 Hrs/80 Km',
    cap: '13, 15, 17, 20 & 26 Seater AC/Non-AC Fleet',
    focus: 'all Pune localities (Kothrud, Wakad, Baner, Hinjewadi, Hadapsar, Kharadi & PCMC) for family tours, Shirdi/Ashtavinayak yatras, and weekend getaways',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'pune-to-mahabaleshwar-tempo-traveller',
    h1: 'Pune to Mahabaleshwar Tempo Traveller',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-02.jpg',
    rate: '₹9,000 (Non-AC) / ₹10,000 (AC) Complete Mahabaleshwar Package',
    cap: '13, 17 & 20 Seater Ghat-Ready Tempo Travellers',
    focus: '2-day and 3-day Pune to Mahabaleshwar, Panchgani, Pratapgad Fort, Venna Lake, and Mapro Garden family sightseeing tours',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'pune-to-outstation-tempo-traveller',
    h1: 'Pune to Outstation Tempo Traveller',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-03.jpg',
    rate: 'Starting @ ₹22/Km (Non-AC) & ₹25/Km (AC) | 300 Km/Day Limit',
    cap: '13, 17, 20 & 26 Seater Highway Pushback Travellers',
    focus: 'multi-day outstation trips from Pune to Mahabaleshwar, Lonavala, Goa, Konkan, Shirdi, Nashik, Akkalkot, and Tuljapur',
    spotKey: 'konkan'
  },
  {
    slug: 'mini-bus-on-rent-in-pune',
    h1: 'Mini Bus on Rent in Pune',
    cat: 'minibus',
    img: '/img/Keyword Based Image/Keyword Based Image-04.jpg',
    rate: 'Starting @ ₹22/Km (13–17 Seater) & ₹28/Km (20 Seater Mini Bus)',
    cap: '13, 17, 20 & 25 Seater AC/Non-AC Mini Coaches',
    focus: 'medium-sized group travel, society picnics, wedding guest transfers, and corporate outings across Pune & Maharashtra',
    spotKey: 'lonavala'
  },
  {
    slug: '13-seater-tempo-traveller-on-rent',
    h1: '13 Seater Tempo Traveller on Rent',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-05.jpg',
    rate: '₹22/Km (Non-AC ₹7,200) | ₹25/Km (AC ₹8,100) for 300 Km',
    cap: '13+1 Pushback Seater (1x1 & 2x1 Cabin Layout)',
    focus: 'compact 10–13 member family trips, Mumbai International Airport transfers, and Shirdi/Ashtavinayak temple tours',
    spotKey: 'shirdi'
  },
  {
    slug: '17-seater-tempo-traveller-on-rent',
    h1: '17 Seater Tempo Traveller on Rent',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-01.jpg',
    rate: '₹22/Km (Non-AC ₹7,500) | ₹25/Km (AC ₹9,600) for 300 Km',
    cap: '17+1 Recliner Seater with Carrier & Icebox',
    focus: '14–17 passenger family holidays, corporate team outings, and pilgrimage yatras across Maharashtra',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: '17-seater-bus-on-rent-pune',
    h1: '17 Seater Bus on Rent Pune',
    cat: 'minibus',
    img: '/img/Keyword Based Image/Keyword Based Image-06.jpg',
    rate: '₹22/Km (Non-AC ₹7,500) | ₹25/Km (AC ₹9,600) | ₹5,500 Local',
    cap: '17 Passenger Pushback Seats + Driver',
    focus: 'wedding guest pickups, 1-day Lonavala/Lavasa picnics, and ghat-friendly outstation tours from Pune',
    spotKey: 'lonavala'
  },
  {
    slug: 'pune-to-shirdi-tempo-traveller',
    h1: 'Pune to Shirdi Tempo Traveller',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-07.jpg',
    rate: '₹10,000 (13 Seater) | ₹12,000 (17 Seater) | ₹13,000 (20 Seater)',
    cap: '13, 17, 20 & 26 Seater AC/Non-AC Pilgrimage Fleet',
    focus: 'same-day and 2-day Pune to Shirdi Sai Baba Samadhi Mandir, Shani Shingnapur, and Ranjangaon Mahaganpati darshan',
    spotKey: 'shirdi'
  },
  {
    slug: '20-seater-bus-on-rent-in-pune-city',
    h1: '20 Seater Bus on Rent in Pune',
    cat: 'minibus',
    img: '/img/Keyword Based Image/Keyword Based Image-08.jpg',
    rate: '₹28/Km | ₹8,100 (Non-AC) / ₹10,200 (AC) for 300 Km Package',
    cap: '20+1 Pushback Seater SML / Force Luxury Mini Coach',
    focus: 'corporate industrial visits, wedding family transfers, and 20-member group trips to Mahabaleshwar, Goa, and Konkan',
    spotKey: 'konkan'
  },
  {
    slug: '32-seater-bus-rent-in-pune',
    h1: '32 Seater Bus Rent in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-11.jpg',
    rate: '₹45/Km | ₹11,100 (Non-AC) / ₹12,000 (AC) for 300 Km',
    cap: '32 Seater 2x2 Pushback Luxury Coach',
    focus: 'marriage functions, corporate offsites, housing society tours, and school excursions from Pune',
    spotKey: 'ashtavinayak'
  },
  {
    slug: '35-seater-bus-rent-in-pune',
    h1: '35 Seater Bus Rent in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-12.jpg',
    rate: '₹50/Km | ₹12,000 (Non-AC) / ₹13,000 (AC) for 300 Km',
    cap: '35 Seater Air-Suspension 2x2 Tourist Coach',
    focus: '30–35 passenger weddings, corporate annual picnics, and multi-day Jyotirlinga/Ashtavinayak pilgrimages',
    spotKey: 'jyotirlinga'
  },
  {
    slug: '45-seater-bus-rent-in-pune',
    h1: '45 Seater Bus Rent in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-13.jpg',
    rate: '₹55/Km | ₹14,400 (Non-AC) / ₹16,000 (AC) for 300 Km',
    cap: '45 Seater Heavy-Duty Luxury Tourist Coach',
    focus: 'large marriage baraats, college industrial visits, corporate conventions, and interstate tours from Pune',
    spotKey: 'allIndia'
  },
  {
    slug: '50-seater-bus-rent-in-pune',
    h1: '50 Seater Bus Rent in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-14.jpg',
    rate: '₹50/Km (Non-AC ₹15,000) | ₹90/Km (49 Seater AC Volvo ₹21,000)',
    cap: '49 & 50 Seater High-Capacity Tourist Coaches',
    focus: 'grand wedding guest logistics, school picnics, and 50-passenger group tours across Maharashtra',
    spotKey: 'lonavala'
  },
  {
    slug: 'non-ac-bus-rental-service-in-pune',
    h1: 'Non Ac Bus Rental Service in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-49.jpg',
    rate: 'Starting @ ₹22/Km (Mini Bus) & ₹45–₹50/Km (32 to 50 Seater Non-AC)',
    cap: '13, 17, 20, 32, 35, 45 & 50 Seater Non-AC Buses',
    focus: 'budget-friendly wedding guest shuttles, school excursions, factory staff transport, and winter/monsoon hill-station trips',
    spotKey: 'ashtavinayak'
  },
  {
    slug: 'luxury-bus-rental-in-pune',
    h1: 'Luxury Bus Rental in Pune',
    cat: 'volvo',
    img: '/img/Keyword Based Image/Keyword Based Image-15.jpg',
    rate: '₹45–₹55/Km (32–45 Seater AC) | ₹90/Km (45/49 Seater Volvo AC)',
    cap: '25, 32, 35, 45 & 49 Seater AC Luxury Coaches',
    focus: 'VIP corporate delegations, destination weddings, and ultra-comfortable long-distance tours from Pune',
    spotKey: 'goa'
  },
  {
    slug: 'luxury-force-urbania-on-rent-in-pune',
    h1: 'Luxury Force Urbania On Rent in Pune',
    cat: 'urbania',
    img: '/img/urbania/ub-2.jpeg',
    rate: 'Official Rate: ₹32/Km | ₹9,600 (13 Seater) / ₹11,200 (17 Seater)',
    cap: '10, 13 & 17 Seater European-Styled Recliner Vans',
    focus: 'business-class executive travel, Mumbai airport VIP pickups, and luxury family vacations from Pune',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'force-urbania-luxury-mini-bus-on-rent',
    h1: 'Force Urbania Luxury Mini Bus On Rent',
    cat: 'urbania',
    img: '/img/urbania/ub-1.jpeg',
    rate: '₹32/Km Outstation | ₹6,000–₹7,000 Local 8 Hrs / 80 Km',
    cap: '13 & 17 Seater Monocoque Luxury Mini Coaches',
    focus: 'high-roof stand-up cabin comfort, triple-zone AC cooling, and whisper-quiet highway cruising across Maharashtra',
    spotKey: 'lonavala'
  },
  {
    slug: 'bus-on-rent-in-pune',
    h1: 'Bus On Rent in Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/bus-on-rent-in-pune.jpeg',
    rate: 'Starting @ ₹22/Km (Mini Bus) | ₹45/Km (32 Seater) | ₹50/Km (50 Seater)',
    cap: 'Complete 13 to 50 Seater AC, Non-AC & Volvo Fleet',
    focus: 'weddings, corporate events, school picnics, airport transfers, and outstation pilgrimage tours from Pune',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: '14-17-20-25-seater-bus-on-in-pune',
    h1: '14 17 20 25 Seater Bus on in Pune',
    cat: 'minibus',
    img: '/img/Keyword Based Image/Keyword Based Image-51.jpg',
    rate: '₹22/Km (14/17 Seater) | ₹28/Km (20 Seater) | ₹38/Km (25 Seater)',
    cap: '14, 17, 20 & 25 Seater AC & Non-AC Mini Buses',
    focus: 'right-sized mid-capacity group travel where every seat is filled without paying for an oversized 50-seater bus',
    spotKey: 'konkan'
  },
  {
    slug: 'travel-agents-in-pune-for-mini-bus-hire',
    h1: 'Travel Agents in Pune for Mini Bus Hire',
    cat: 'minibus',
    img: '/img/Keyword Based Image/Keyword Based Image-52.jpg',
    rate: 'Direct Fleet Owner Tariff @ ₹22–₹38/Km (Zero Broker Commission)',
    cap: '13, 17, 20 & 25 Seater Verified RTO-Permitted Mini Buses',
    focus: 'direct garage-to-doorstep mini bus booking in Pune with transparent written quotes and 24/7 dispatch support',
    spotKey: 'ashtavinayak'
  },
  {
    slug: 'tempo-traveller-hire-in-pune',
    h1: 'Tempo Traveller Hire in Pune',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-48.jpg',
    rate: '₹22/Km (Non-AC) & ₹25/Km (AC) | ₹7,200–₹9,600 (300 Km Pkg)',
    cap: '13, 15, 17, 20 & 26 Seater Chauffeur-Driven Travellers',
    focus: 'instant doorstep Tempo Traveller hire across Pune & PCMC for weekend family trips, weddings, and pilgrimages',
    spotKey: 'shirdi'
  },
  {
    slug: '25-seater-tempo-traveller-on-rent-in-pune',
    h1: '25 Seater Tempo Traveller on Rent in Pune',
    cat: 'minibus',
    img: '/img/25-seater-tempo/tt-1.jpeg',
    rate: '₹38/Km | ₹11,000 (300 Km Outstation) | ₹8,000 (Local 8/80)',
    cap: '25 Seater Long-Wheelbase Luxury Tempo Traveller / Coach',
    focus: '22–25 member joint family holidays, corporate offsites, and Ashtavinayak/Jyotirlinga group yatras',
    spotKey: 'jyotirlinga'
  },
  {
    slug: 'tempo-traveller-on-rent-in-pimpri-chinchwad',
    h1: 'Tempo Traveller on Rent in Pimpri Chinchwad',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-10.jpg',
    rate: '₹22/Km (Non-AC) & ₹25/Km (AC) | Zero Dead-Mileage in PCMC',
    cap: '13, 17, 20 & 26 Seater Travellers Stationed in PCMC',
    focus: 'fast 20-minute doorstep pickup across Wakad, Nigdi, Akurdi, Bhosari, Chinchwad, Moshi, Punawale, and Pimple Saudagar',
    spotKey: 'lonavala'
  },
  {
    slug: 'force-urbania-on-rent-for-ashtavinayak-darshan',
    h1: 'Force Urbania On Rent for Ashtavinayak Darshan',
    cat: 'urbania',
    img: '/img/urbania/ub-2.jpeg',
    rate: '₹32/Km Official Urbania Rate | 2-Day & 3-Day Ashtavinayak Packages',
    cap: '13 & 17 Seater Luxury Recliner Force Urbania Vans',
    focus: 'fatigue-free senior-citizen-friendly darshan of all 8 Swayambhu Ashtavinayak Ganpati temples from Pune',
    spotKey: 'ashtavinayak'
  },
  {
    slug: 'pune-to-mahabaleshwar-urbania-on-rent',
    h1: 'Pune to Mahabaleshwar Urbania On Rent',
    cat: 'urbania',
    img: '/img/urbania/ub-3.jpeg',
    rate: '₹32/Km | ₹12,000 (13 Seater) & ₹14,000 (17 Seater) Mahabaleshwar Pkg',
    cap: '13 & 17 Seater Monocoque Hill-Hold Force Urbania',
    focus: 'zero-body-roll luxury ghat travel from Pune to Panchgani, Mahabaleshwar, Pratapgad Fort, and Tapola',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'bus-hire-for-school-trips-in-pune',
    h1: 'Bus Hire for School Trips in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-19.jpg',
    rate: 'Special Educational Tariff: ₹45–₹55/Km | ₹7,500–₹9,500 Local Excursion',
    cap: '32, 35, 45 & 50 Seater RTO-Compliant GPS School Coaches',
    focus: 'safe, speed-governed school and college educational tours to science parks, forts, Wet’nJoy, Imagicaa, and Mahabaleshwar',
    spotKey: 'lonavala'
  },
  {
    slug: 'urbania-on-rent-in-pune',
    h1: 'Urbania On Rent in Pune',
    cat: 'urbania',
    img: '/img/urbania/ub-1.jpeg',
    rate: '₹32/Km (Outstation) | ₹6,000 (Local 8/80) | ₹9,600 (300 Km Pkg)',
    cap: '10, 13 & 17 Seater Luxury AC Force Urbania',
    focus: 'corporate delegations, Mumbai airport VIP pickups, destination weddings, and family tours from Pune',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'urbania-hire-in-pune',
    h1: 'Urbania Hire in Pune',
    cat: 'urbania',
    img: '/img/urbania/ub-3.jpeg',
    rate: '₹32/Km Official Tariff | ₹9,600–₹11,200 (300 Km Package)',
    cap: '13 & 17 Seater Chauffeur-Driven Executive Vans',
    focus: 'all-in-one group travel replacing multiple SUVs on Pune–Mumbai, Lonavala, Shirdi, and Mahabaleshwar routes',
    spotKey: 'lonavala'
  },
  {
    slug: 'mini-bus-on-rent-pune',
    h1: 'Mini Bus On Rent Pune',
    cat: 'minibus',
    img: '/img/Keyword Based Image/Keyword Based Image-50.jpg',
    rate: '₹22–₹25/Km (13–17 Seater) | ₹28/Km (20 Seater) | ₹38/Km (25 Seater)',
    cap: '13, 17, 20 & 25 Seater AC & Non-AC Mini Buses',
    focus: 'economical family weddings, society picnics, corporate shuttles, and ghat-friendly outstation trips',
    spotKey: 'ashtavinayak'
  },
  {
    slug: 'force-urbania-on-rent-in-pune',
    h1: 'Force Urbania On Rent in Pune',
    cat: 'urbania',
    img: '/img/urbania/ub-1.jpeg',
    rate: '₹32/Km | ₹9,600 (13 Seater) & ₹11,200 (17 Seater) 300 Km Pkg',
    cap: '13 & 17 Seater Next-Gen Force Urbania Luxury Fleet',
    focus: 'panoramic window luxury travel, individual AC vents, USB-C ports, and monocoque stability across Pune & Maharashtra',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: '17-seater-tempo-traveller-on-rent-in-pune',
    h1: '17 Seater Tempo Traveller On Rent in Pune',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-01.jpg',
    rate: '₹22/Km (Non-AC ₹7,500) | ₹25/Km (AC ₹9,600) | ₹5,500 Local',
    cap: '17+1 Seater Pushback AC & Non-AC Tempo Traveller',
    focus: '15–17 member family outstation tours, corporate team outings, and Shirdi/Mahabaleshwar packages from Pune',
    spotKey: 'shirdi'
  },

  // ================= COLUMN 2 =================
  {
    slug: 'pune-local-bus-on-rent',
    h1: 'Pune Local Bus on Rent',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-37.jpg',
    rate: '₹5,500 (13–20 Seater) | ₹7,500–₹9,500 (32–50 Seater) 8 Hrs / 80 Km',
    cap: '13, 17, 20, 25, 32, 35, 45 & 50 Seater City Coaches',
    focus: '8 Hours / 80 Km local Pune sightseeing (Shaniwar Wada, Dagdusheth Ganpati, Sinhagad, Katraj Zoo), wedding guest drops, and corporate events',
    spotKey: 'lonavala'
  },
  {
    slug: 'bus-on-rent-in-kharadi-pune',
    h1: 'Bus On Rent in Kharadi Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-54.jpg',
    rate: 'Starting @ ₹22/Km (Mini Bus), ₹30/Km (Urbania) & ₹45/Km (32 Seater)',
    cap: '13 to 50 Seater Fleet Stationed Near EON IT Park & World Trade Center',
    focus: 'instant 15-minute reporting across Kharadi, Viman Nagar, Wagholi, Magarpatta, and Kalyani Nagar for IT offsites and family trips',
    spotKey: 'lonavala'
  },
  {
    slug: 'bus-on-rent-in-hinjewadi',
    h1: 'Bus on Rent in Hinjewadi',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-36.jpg',
    rate: 'Starting @ ₹22/Km | Special Corporate & IT Park Contract Rates',
    cap: '13 to 50 Seater AC/Non-AC Buses Near Hinjewadi Phase 1, 2 & 3',
    focus: 'employee shuttle services, corporate team outings to Lonavala/Mulshi/Tamhini, and direct Mumbai Expressway departures from Hinjewadi & Wakad',
    spotKey: 'lonavala'
  },
  {
    slug: 'bus-hire-for-wedding-in-pune',
    h1: 'Bus Hire For Wedding in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-55.jpg',
    rate: '₹7,500–₹11,500 Local Wedding Transfers | ₹45–₹55/Km Outstation Baraat',
    cap: '20, 25, 32, 35, 45, 50 Seater Coaches & Luxury Force Urbania',
    focus: 'punctual marriage guest pickups between hotels, railway stations, Pune airport, and wedding lawns across Pune, Mulshi, and Lonavala',
    spotKey: 'lonavala'
  },
  {
    slug: 'buses-for-corporate-events-in-pune',
    h1: 'Buses For Corporate Events in Pune',
    cat: 'volvo',
    img: '/img/Keyword Based Image/Keyword Based Image-56.jpg',
    rate: '₹30/Km (Force Urbania) | ₹45–₹55/Km (AC Coaches) | ₹90/Km (Volvo)',
    cap: '13 to 50 Seater Executive AC Coaches with GST Billing',
    focus: 'conferences, annual general meetings, resort team-building offsites, and VIP delegation movements across Pune & Mumbai',
    spotKey: 'lonavala'
  },
  {
    slug: 'bus-rentals-for-school-trips-in-pune',
    h1: 'Bus Rentals For School Trips in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-43.jpg',
    rate: 'Institutional Discounted Packages from ₹7,500 (Local) & ₹45/Km (Outstation)',
    cap: '32, 35, 45 & 50 Seater Safety-Certified School Excursion Buses',
    focus: 'first-aid equipped, GPS-tracked buses with veteran drivers for school picnics, fort treks, and industrial visits',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'bus-booking-for-wedding-in-pune',
    h1: 'Bus booking for wedding in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-57.jpg',
    rate: 'Local 8 Hrs/80 Km from ₹5,500 (Mini Bus) to ₹9,500 (32–50 Seater)',
    cap: '17, 20, 25, 32, 35, 45 & 50 Seater Wedding Special Fleet',
    focus: 'multi-bus wedding logistics, decorated VIP groom/bride family Urbania vans, and late-night reception drop services',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'bus-booking-for-marriage-function-in-pune',
    h1: 'Bus Booking for Marriage function in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-46.jpg',
    rate: '₹11,100 (32 Seater) | ₹14,400 (45 Seater) | ₹15,000 (50 Seater) 300 Km Pkg',
    cap: '32, 35, 45 & 50 Seater Pushback Coaches with Large Luggage Dicky',
    focus: 'outstation marriage functions, engagement ceremonies, and Vidai transfers across Maharashtra with dedicated fleet coordinators',
    spotKey: 'ashtavinayak'
  },
  {
    slug: 'bus-service-for-corporate-pune',
    h1: 'Bus Service for Corporate Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-58.jpg',
    rate: 'Daily, Ad-Hoc & Monthly Corporate Contracts | 100% SLA Compliance',
    cap: '13 Seater Urbania, 20–25 Seater Mini Buses & 32–50 Seater Staff Coaches',
    focus: 'daily employee pickup-and-drop across Hinjewadi, Kharadi, Magarpatta, Chakan MIDC, Talegaon, and Ranjangaon MIDC',
    spotKey: 'lonavala'
  },
  {
    slug: 'bus-on-rent-for-event-in-pune',
    h1: 'Bus on Rent For Event in Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-59.jpg',
    rate: 'Starting @ ₹5,500 (Local 8/80) | Custom Multi-Bus Event Packages',
    cap: '13 to 50 Seater Event Shuttle Fleet with On-Ground Supervisor',
    focus: 'concerts, sports tournaments at Balewadi Stadium, exhibitions at Moshi PIECC, destination weddings, and film shoots',
    spotKey: 'mumbai'
  },
  {
    slug: 'bus-rental-for-tour-packages-in-pune',
    h1: 'Bus Rental for Tour Packages in Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-60.jpg',
    rate: 'Fixed All-Season Tour Packages Starting @ ₹7,200 (300 Km)',
    cap: '13 to 50 Seater AC & Non-AC Tourist Permit Vehicles',
    focus: 'customized family and group tour packages to Mahabaleshwar, Lonavala, Goa, Konkan, Ashtavinayak, Shirdi, and 5 Jyotirlinga',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'bus-hire-for-outstation-in-pune',
    h1: 'Bus Hire for Outstation in Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-45.jpg',
    rate: '₹22–₹38/Km (Mini Bus/Traveller) | ₹45–₹55/Km (Large Coach) | ₹30/Km (Urbania)',
    cap: '13, 17, 20, 25, 32, 35, 45 & 50 Seater Highway Coaches',
    focus: 'long-distance outstation road trips across Maharashtra, Goa, Karnataka, Gujarat, Madhya Pradesh, and Rajasthan',
    spotKey: 'konkan'
  },
  {
    slug: 'pune-bus-hire-rental-service',
    h1: 'Pune Bus Hire Rental Service',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-61.jpg',
    rate: 'Direct Fleet Owner Rates Starting @ ₹22/Km | 24/7 Helpline',
    cap: '13 to 50 Seater Sanitized AC, Non-AC & Volvo Buses',
    focus: 'reliable doorstep bus hire rental service across all Pune and PCMC pincodes with uniformed badge-holder drivers',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'bus-service-for-picnic-in-pune',
    h1: 'Bus Service for Picnic in Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-40.jpg',
    rate: '1-Day Picnic Packages Starting @ ₹5,500–₹8,100 (Mini Bus) & ₹11,100 (32 Seater)',
    cap: '13, 17, 20, 25, 32, 35, 45 & 50 Seater Picnic Buses with Music System',
    focus: 'housing society picnics, family get-togethers, and water-park trips to Lonavala, Wet’nJoy, Imagicaa, Mulshi, Lavasa, and Panshet',
    spotKey: 'lonavala'
  },
  {
    slug: 'pune-to-5-jyotirlinga-darshan-bus-hire',
    h1: 'Pune to 5 Jyotirlinga Darshan Bus Hire',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-63.jpg',
    rate: '3 to 4 Day Panch Jyotirlinga Package @ ₹22–₹50/Km (13 to 50 Seater)',
    cap: '13, 17, 20, 25, 32, 35, 45 & 50 Seater Pilgrimage Coaches',
    focus: 'covering Bhimashankar, Trimbakeshwar, Grishneshwar (Ellora), Aundha Nagnath, and Parli Vaijnath with Shirdi & Shani Shingnapur',
    spotKey: 'jyotirlinga'
  },
  {
    slug: 'pune-to-mumbai-darshan-bus-on-rent',
    h1: 'Pune to Mumbai Darshan Bus On Rent',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-27.jpg',
    rate: '₹9,000–₹12,000 (Traveller/Urbania) | ₹16,000–₹20,000 (32–50 Seater Bus)',
    cap: '13, 17, 20, 25, 32, 35, 45 & 50 Seater AC/Non-AC Coaches',
    focus: '1-day and 2-day Pune to Mumbai Darshan covering Gateway of India, Marine Drive, Siddhivinayak, Mahalaxmi, Bandra-Worli Sea Link & Juhu Beach',
    spotKey: 'mumbai'
  },
  {
    slug: 'bus-on-rent-in-pimpri-chinchwad',
    h1: 'Bus On Rent in Pimpri Chinchwad',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-65.jpg',
    rate: 'Starting @ ₹22/Km | Fast Dispatch from Nigdi, Chinchwad, Wakad & Bhosari',
    cap: '13 to 50 Seater Mini Buses, Urbania & Luxury Coaches in PCMC',
    focus: 'weddings, industrial MIDC staff transport, school trips, and family pilgrimages starting anywhere in Pimpri-Chinchwad',
    spotKey: 'ashtavinayak'
  },
  {
    slug: 'urbania-on-rent-in-mumbai',
    h1: 'Urbania On Rent in Mumbai',
    cat: 'urbania',
    img: '/img/urbania/ub-1.jpeg',
    rate: '₹32/Km Outstation | ₹12,000–₹14,000 Mumbai–Pune / Airport Package',
    cap: '10, 13 & 17 Seater Luxury Force Urbania Vans in Mumbai & Navi Mumbai',
    focus: 'CSMIA T2 international airport transfers, corporate delegations in BKC/Andheri/Powai, Mumbai Darshan, and Mumbai to Shirdi/Lonavala/Pune trips',
    spotKey: 'mumbai'
  },
  {
    slug: 'pune-to-bhimashankar-jyotirlinga-mini-bus-hire-in-pune',
    h1: 'Pune to Bhimashankar Jyotirlinga Mini Bus Hire in Pune',
    cat: 'minibus',
    img: '/img/Keyword Based Image/Keyword Based Image-18.jpg',
    rate: '1-Day Bhimashankar Package from ₹7,200 (13 Seater) to ₹10,200 (20 Seater AC)',
    cap: '13, 17, 20 & 25 Seater Ghat-Friendly Mini Buses',
    focus: 'safe ascent up the misty Manchar–Dimbhe Dam–Pokhari ghat to Shri Bhimashankar Jyotirlinga with optional Ozarde Waterfall & Manchar stops',
    spotKey: 'jyotirlinga'
  },
  {
    slug: 'bus-hire-near-me-pune',
    h1: 'Bus Hire Near me Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-68.jpg',
    rate: '20-Minute Local Dispatch Across 8 Pune & PCMC Hubs | Starting @ ₹22/Km',
    cap: '13, 17, 20, 25, 32, 35, 45 & 50 Seater Buses Near Your Location',
    focus: 'instant neighbourhood bus booking in Kothrud, Baner, Wakad, Hinjewadi, Pimpri-Chinchwad, Viman Nagar, Kharadi, Hadapsar, and Swargate',
    spotKey: 'lonavala'
  },
  {
    slug: 'pune-to-konkan-darshan-bus-hire',
    h1: 'Pune to Konkan Darshan Bus Hire',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-24.jpg',
    rate: 'Starting @ ₹22–₹28/Km (Mini Bus) & ₹45–₹50/Km (32–50 Seater Coach)',
    cap: '13, 17, 20, 25, 32, 35 & 45 Seater Coastal Ghat-Ready Buses',
    focus: '3 to 6 day Pune to Konkan Darshan covering Alibaug, Diveagar, Harihareshwar, Dapoli, Guhagar, Ganpatipule, Ratnagiri, Tarkarli & Sindhudurg',
    spotKey: 'konkan'
  },
  {
    slug: 'bus-hire-in-pimpri-chinchwad',
    h1: 'Bus Hire in Pimpri Chinchwad',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-67.jpg',
    rate: 'Starting @ ₹22/Km (Mini Bus) & ₹45/Km (32 Seater) | Local PCMC Hub',
    cap: '13 to 50 Seater AC & Non-AC Fleet in Pimpri-Chinchwad',
    focus: 'marriage ceremonies, Chakan/Talegaon/Bhosari MIDC corporate transport, and family outstation tours from PCMC',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'bus-on-rent-in-hadapsar',
    h1: 'Bus on Rent in Hadapsar',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-38.jpg',
    rate: 'Starting @ ₹22/Km | Fast Pickup at Magarpatta, Amanora, Phursungi & Saswad Road',
    cap: '13, 17, 20, 25, 32, 35, 45 & 50 Seater Buses in East-South Pune',
    focus: 'Magarpatta/SP Infocity corporate shuttles, Morgaon/Theur Ashtavinayak departures, and Solapur/Pandharpur/Akkalkot highway trips',
    spotKey: 'ashtavinayak'
  },
  {
    slug: 'luxury-tempo-traveller-on-rent-in-pune',
    h1: 'Luxury Tempo Traveller On Rent in Pune',
    cat: 'tempo',
    img: '/img/Keyword Based Image/comfort-1.jpeg',
    rate: '₹25/Km (13 & 17 Seater AC) | ₹28/Km (20 Seater AC) | Maharaja Cabin',
    cap: '13, 15, 17, 20 & 26 Seater Maharaja Leather Recliner Travellers',
    focus: 'VIP family holidays, corporate delegations, wedding hospitality, and luxury outstation road trips with LED TV & ambient mood lighting',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: '13-seater-tempo-traveller-on-rent-in-pune',
    h1: '13 Seater Tempo Traveller On Rent in Pune',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-05.jpg',
    rate: '₹22/Km (Non-AC ₹7,200) | ₹25/Km (AC ₹8,100) | ₹5,500 Local 8/80',
    cap: '13+1 Pushback Seater AC & Non-AC Tempo Traveller',
    focus: '10–13 passenger family tours to Mahabaleshwar, Lonavala, Shirdi, Ashtavinayak, and Mumbai Airport drops from Pune',
    spotKey: 'shirdi'
  },
  {
    slug: '32-seater-bus-on-rent-in-pune',
    h1: '32 Seater Bus On Rent in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-11.jpg',
    rate: '₹45/Km | ₹11,100 (Non-AC) / ₹12,000 (AC) for 300 Km Package',
    cap: '32 Passenger 2x2 Pushback Seats + Driver & Helper',
    focus: 'wedding functions, corporate team offsites, school picnics, and 30-member pilgrimage tours from Pune',
    spotKey: 'ashtavinayak'
  },
  {
    slug: '50-seater-bus-on-rent-in-pune',
    h1: '50 Seater Bus On Rent in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-14.jpg',
    rate: '₹50/Km (Non-AC ₹15,000) | ₹90/Km (AC Volvo ₹21,000) for 300 Km',
    cap: '49 & 50 Passenger Pushback Luxury Coaches',
    focus: 'lowest per-person travel cost for grand weddings, college excursions, factory picnics, and Samaj yatras',
    spotKey: 'lonavala'
  },
  {
    slug: 'tempo-traveller-on-rent-pune',
    h1: 'Tempo Traveller On Rent Pune',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-03.jpg',
    rate: '₹22/Km (Non-AC) & ₹25/Km (AC) | ₹5,500 Local 8 Hrs / 80 Km',
    cap: '13, 15, 17, 20 & 26 Seater Force Tempo Traveller Fleet',
    focus: 'doorstep pickup across Pune & PCMC for weekend trips, airport transfers, and Maharashtra darshan tours',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: '25-seater-bus-on-rent-in-pune',
    h1: '25 Seater Bus On Rent in Pune',
    cat: 'minibus',
    img: '/img/25-seater-tempo/tt-1.jpeg',
    rate: '₹38/Km | ₹11,000 (300 Km Outstation) | ₹8,000 (Local 8 Hrs / 80 Km)',
    cap: '24 & 25 Seater 2x1 / 2x2 Pushback Luxury Mini Coach',
    focus: '20–25 passenger wedding groups, corporate resort outings, and hill-station/coastal ghat tours from Pune',
    spotKey: 'konkan'
  },

  // ================= COLUMN 3 =================
  {
    slug: 'bus-hire-for-picnic-in-pune',
    h1: 'Bus Hire for Picnic in Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-40.jpg',
    rate: '1-Day Picnic Packages from ₹5,500 (Mini Bus) & ₹11,100 (32 Seater)',
    cap: '13 to 50 Seater Picnic Coaches with Bluetooth Audio & Mic System',
    focus: 'fun-filled family, society, school, and office 1-day picnics to Lonavala, Wet’nJoy, Imagicaa, Lavasa, Mulshi, Sinhagad, and Panshet',
    spotKey: 'lonavala'
  },
  {
    slug: 'corporate-travels-in-pune',
    h1: 'Corporate Travels in Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-41.jpg',
    rate: 'Trusted by 500+ Companies | Custom Monthly & Ad-Hoc Corporate Tariffs',
    cap: 'Sedans, Innova Crysta, Force Urbania, Mini Buses & 50 Seater Coaches',
    focus: 'end-to-end employee transportation, airport VIP pickups, and corporate offsite logistics across Hinjewadi, Kharadi, Magarpatta, and Chakan MIDC',
    spotKey: 'mumbai'
  },
  {
    slug: 'pune-to-rajasthan-darshan-bus-package',
    h1: 'Pune to Rajasthan Darshan Bus Package',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-22.jpg',
    rate: 'Multi-Day All-India Permit Package @ ₹25–₹55/Km (Traveller to 45 Seater)',
    cap: '17, 20, 26 Seater Luxury Travellers, Force Urbania & 32–49 Seater AC Coaches',
    focus: '7 to 12 day Pune to Rajasthan Darshan covering Udaipur, Nathdwara, Mount Abu, Jodhpur, Jaisalmer, Pushkar, Ajmer, and Jaipur',
    spotKey: 'allIndia'
  },
  {
    slug: 'tourist-bus-rental-services',
    h1: 'Tourist Bus Rental Services',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-34.jpg',
    rate: 'All-India & Maharashtra Tourist Permit Fleet Starting @ ₹22/Km',
    cap: '13 to 50 Seater Pushback AC, Non-AC & Multi-Axle Volvo Tourist Coaches',
    focus: 'sightseeing tours, pilgrimage yatras, heritage excursions, and coastal holidays departing from Pune and Mumbai',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'monthly-bus-hire-service-in-pune',
    h1: 'Monthly Bus Hire Service in Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-33.jpg',
    rate: 'Long-Term Monthly Staff & Institutional Contracts with Dedicated Backup Fleet',
    cap: '13, 17, 20, 25, 32, 35, 40, 45 & 50 Seater Contract Buses',
    focus: 'IT companies, manufacturing plants in Chakan/Ranjangaon/Talegaon/Bhosari MIDC, schools, colleges, and hospitals across Pune',
    spotKey: 'lonavala'
  },
  {
    slug: 'bus-hire-for-kedarnath-trip',
    h1: 'Bus Hire For Kedarnath Trip',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-20.jpg',
    rate: 'All-India Himalayan Yatra Permit | Starting @ ₹25–₹55/Km',
    cap: '13, 17, 20 Seater Force Urbania / Tempo Traveller & 32–45 Seater Hill Coaches',
    focus: 'long-distance pilgrimage expeditions from Pune to Haridwar, Rishikesh, Devprayag, Guptkashi, Sonprayag (Kedarnath), and Badrinath',
    spotKey: 'allIndia'
  },
  {
    slug: 'bus-hire-for-pune-to-ashtavinayak',
    h1: 'Bus hire for Pune to Ashtavinayak',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-29.jpg',
    rate: '2-Day All 8 Ganpati Package from ₹14,400 (Mini Bus) & ₹22,200 (32 Seater)',
    cap: '13, 17, 20, 25, 32, 35, 45 & 50 Seater Ashtavinayak Special Buses',
    focus: 'complete 2-day or 3-day darshan of Morgaon, Siddhatek, Pali, Mahad, Theur, Lenyadri, Ozar, and Ranjangaon with Prati Balaji',
    spotKey: 'ashtavinayak'
  },
  {
    slug: 'bus-hire-for-pune-to-maharashtra-darshan',
    h1: 'Bus hire for Pune to Maharashtra Darshan',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-21.jpg',
    rate: 'Starting @ ₹22/Km (Mini Bus), ₹30/Km (Urbania) & ₹45–₹55/Km (Large Coach)',
    cap: '13 to 50 Seater AC & Non-AC Maharashtra Tourist Coaches',
    focus: 'statewide tours covering Ajanta-Ellora, Lonar Crater, Tadoba Safari, Konkan Beaches, Mahabaleshwar, Kolhapur, Shirdi, and 5 Jyotirlingas',
    spotKey: 'jyotirlinga'
  },
  {
    slug: 'volvo-bus-hire-in-pune',
    h1: 'Volvo Bus Hire in Pune',
    cat: 'volvo',
    img: '/img/Keyword Based Image/Keyword Based Image-42.jpg',
    rate: '₹90/Km | ₹20,000 (45 Seater Volvo) & ₹21,000 (49 Seater Volvo) for 300 Km',
    cap: '45 & 49 Seater Multi-Axle Air-Suspension Volvo / BharatBenz Coaches',
    focus: 'ultra-luxury VIP weddings, corporate leadership summits, international delegations, and Pune–Goa / Pune–Mumbai highway charters',
    spotKey: 'goa'
  },
  {
    slug: 'urbania-rent-in-lonavala',
    h1: 'Urbania Rent in Lonavala',
    cat: 'urbania',
    img: '/img/urbania/ub-2.jpeg',
    rate: '₹32/Km Official Tariff | ₹9,600 (13 Seater) & ₹11,200 (17 Seater) Package',
    cap: '13 & 17 Seater Luxury Force Urbania Vans for Lonavala & Khandala',
    focus: 'luxury villa stays, Della/Amby Valley corporate retreats, Bhushi Dam, Tiger Point, Karla Caves, and Mumbai/Pune airport transfers',
    spotKey: 'lonavala'
  },
  {
    slug: '32-35-40-45-50-seater-bus-on-rent-in-pune',
    h1: '32,35,40,45,50 Seater Bus on Rent in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-47.jpg',
    rate: '₹45/Km (32 Seater) | ₹50/Km (35 & 50 Seater) | ₹55/Km (40 & 45 Seater)',
    cap: 'Full Range of 32, 35, 40, 45 & 50 Seater AC & Non-AC Coaches',
    focus: 'comparing and booking the exact heavy-bus seating capacity for weddings, school trips, corporate events, and Samaj yatras in Pune',
    spotKey: 'ashtavinayak'
  },
  {
    slug: '12-jyotirlinga-darshan-tour-package-from-pune',
    h1: '12 Jyotirlinga Darshan Tour Package from Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-35.jpg',
    rate: 'Customizable 5-Jyotirlinga & All-India 12-Jyotirlinga Charter Packages',
    cap: '13–17 Seater Force Urbania, Luxury Tempo Travellers & 32–49 Seater AC Coaches',
    focus: 'sacred pilgrimage tours from Pune to Bhimashankar, Trimbakeshwar, Grishneshwar, Aundha Nagnath, Parli Vaijnath, Somnath, Nageshwar, Mahakaleshwar, Omkareshwar, Kashi Vishwanath, Mallikarjuna & Rameshwaram',
    spotKey: 'jyotirlinga'
  },
  {
    slug: 'pune-sade-teen-shakti-peeth-bus-on-rent',
    h1: 'Pune Sade Teen Shakti Peeth Bus on Rent',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-25.jpg',
    rate: '4-Day Sade Teen Shakti Peeth Yatra @ ₹22–₹50/Km (13 to 50 Seater)',
    cap: '13, 17, 20, 25, 32, 35, 45 & 50 Seater AC/Non-AC Pilgrimage Buses',
    focus: 'complete darshan of Kolhapur Mahalaxmi, Tuljapur Tulja Bhavani, Mahurgad Renuka Devi, and Vani Saptashrungi Devi from Pune',
    spotKey: 'shaktipeeth'
  },
  {
    slug: 'explore-all-india-bus-hire-services-from-pune',
    h1: 'Explore All India Bus Hire Services From Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-28.jpg',
    rate: 'National Tourist Permit Fleet @ ₹22–₹90/Km Across All Indian States',
    cap: '13 Seater Urbania/Traveller to 49 Seater Multi-Axle Volvo Coaches',
    focus: 'seamless interstate group travel from Pune to Goa, Gujarat, Rajasthan, Madhya Pradesh, Karnataka, Telangana, Tamil Nadu, Kerala, and Uttarakhand',
    spotKey: 'allIndia'
  },
  {
    slug: 'tata-winger-on-rent-in-pune',
    h1: 'Tata Winger On Rent in Pune',
    cat: 'winger',
    img: '/img/Keyword Based Image/1.jpg',
    rate: '₹20–₹22/Km (Non-AC) | ₹22–₹25/Km (AC) | ₹5,500 Local 8 Hrs/80 Km',
    cap: '9+D, 12+D, 13+D & 15+D Seater Compact High-Roof Vans',
    focus: 'economical 8 to 14 passenger family tours, Shirdi/Ashtavinayak darshan, and Mumbai Airport group transfers',
    spotKey: 'shirdi'
  },
  {
    slug: '30-seater-bus-on-rent-in-pune',
    h1: '30 Seater Bus On Rent in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-11.jpg',
    rate: '₹45/Km | ₹11,100 (Non-AC) / ₹12,000 (AC) for 300 Km Package',
    cap: '30 & 32 Seater 2x2 Pushback Luxury Mini-Coach',
    focus: '26–30 member wedding guest groups, corporate team outings, and weekend hill-station/pilgrimage tours from Pune',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'pune-to-mumbai-urbania-on-rent',
    h1: 'Pune to Mumbai Urbania on Rent',
    cat: 'urbania',
    img: '/img/urbania/ub-1.jpeg',
    rate: '₹32/Km | ₹12,000 (13 Seater) & ₹14,000 (17 Seater) Pune–Mumbai Package',
    cap: '10, 13 & 17 Seater Luxury Force Urbania Vans',
    focus: 'Pune to Mumbai International Airport (T1/T2) group pickups/drops, corporate BKC meetings, cruise terminal transfers, and Mumbai Darshan',
    spotKey: 'mumbai'
  },
  {
    slug: 'pune-to-ujjain-urbania-on-rent',
    h1: 'Pune to Ujjain Urbania on Rent',
    cat: 'urbania',
    img: '/img/urbania/ub-1.jpeg',
    rate: '₹32/Km Official Urbania Rate | 4-Day Pune–Ujjain–Omkareshwar–Indore Package',
    cap: '13 & 17 Seater Recliner Force Urbania with Dual Highway Chauffeurs',
    focus: 'ultra-comfortable highway travel from Pune to Shri Mahakaleshwar Jyotirlinga (Mahakal Lok Corridor), Omkareshwar, Mamleshwar, and Indore',
    spotKey: 'allIndia'
  },
  {
    slug: 'car-rental-in-pune',
    h1: 'Car Rental in Pune',
    cat: 'winger',
    img: '/img/innova-crysta.png',
    rate: 'Starting @ ₹12/Km (Sedan), ₹15–₹18/Km (Ertiga/Innova Crysta) & ₹20/Km (Winger)',
    cap: '4+1 Seater Dzire, 6+1 Seater Ertiga/Innova Crysta & 9–17 Seater Vans',
    focus: 'Pune to Mumbai Airport cab drops, corporate executive car rentals, local 8 Hrs/80 Km city packages, and outstation family trips',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: '26-seater-tempo-traveller-on-rent',
    h1: '26 Seater Tempo Traveller On Rent',
    cat: 'tempo',
    img: '/img/25-seater-tempo/tt-1.jpeg',
    rate: '₹38/Km | ₹11,000 (300 Km Outstation Package) | ₹8,000 Local 8/80',
    cap: '26+1 Seater Long-Wheelbase AC Pushback Tempo Traveller',
    focus: '22–26 passenger extended family vacations, wedding guest hospitality, and multi-day Maharashtra darshan tours',
    spotKey: 'konkan'
  },
  {
    slug: 'tempo-traveller-on-rent-in-lonavala',
    h1: 'Tempo Traveller on Rent in Lonavala',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-26.jpg',
    rate: '₹22/Km (Non-AC) & ₹25/Km (AC) | Local Lonavala Sightseeing & Resort Drops',
    cap: '13, 17, 20 & 26 Seater Tempo Travellers in Lonavala & Khandala',
    focus: 'villa transfers, Bhushi Dam, Tiger Point, Karla-Bhaja Caves, Pawna Lake camping, Wet’nJoy, and Lonavala to Pune/Mumbai Airport drops',
    spotKey: 'lonavala'
  },
  {
    slug: 'force-urbania-on-rent-in-nashik',
    h1: 'Force Urbania on Rent in Nashik',
    cat: 'urbania',
    img: '/img/urbania/ub-3.jpeg',
    rate: '₹32/Km Official Tariff | ₹9,600 (13 Seater) & ₹11,200 (17 Seater) 300 Km Pkg',
    cap: '13 & 17 Seater Luxury Force Urbania Vans for Nashik, Trimbakeshwar & Sula',
    focus: 'Trimbakeshwar Jyotirlinga darshan, Sula & York Vineyard wine tours, Vani Saptashrungi Devi, and Nashik–Shirdi–Pune luxury transfers',
    spotKey: 'jyotirlinga'
  },
  {
    slug: 'mini-bus-on-rent-in-lonavala',
    h1: 'Mini Bus on Rent in Lonavala',
    cat: 'minibus',
    img: '/img/Keyword Based Image/Keyword Based Image-26.jpg',
    rate: '₹22–₹28/Km | ₹7,200–₹10,200 Complete Lonavala & Khandala Group Package',
    cap: '13, 17, 20 & 25 Seater AC/Non-AC Mini Buses',
    focus: 'corporate resort offsites, wedding guest shuttles between Lonavala hotels, and monsoon waterfall sightseeing',
    spotKey: 'lonavala'
  },
  {
    slug: 'urbania-on-rent-in-shirdi',
    h1: 'Urbania on Rent in Shirdi',
    cat: 'urbania',
    img: '/img/urbania/ub-1.jpeg',
    rate: '₹32/Km | ₹11,000 (13 Seater) & ₹13,000 (17 Seater) Shirdi Package',
    cap: '13 & 17 Seater Luxury Recliner Force Urbania Vans',
    focus: 'VIP Shirdi Sai Baba darshan, Shirdi Airport pickups, Shani Shingnapur, and Shirdi to Trimbakeshwar/Ellora/Pune luxury travel',
    spotKey: 'shirdi'
  },
  {
    slug: 'bus-rental-service-in-mumbai',
    h1: 'Bus Rental Service in Mumbai',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-27.jpg',
    rate: 'Starting @ ₹25/Km (Traveller), ₹30/Km (Urbania) & ₹45–₹90/Km (32–50 Seater)',
    cap: '13 to 50 Seater AC Luxury Coaches & Force Urbania in Mumbai',
    focus: 'Mumbai Airport group transfers, corporate events in BKC/Navi Mumbai, wedding baraat coaches, and Mumbai to Pune/Lonavala/Mahabaleshwar/Shirdi trips',
    spotKey: 'mumbai'
  },
  {
    slug: '35-seater-bus-on-rent-in-pune',
    h1: '35 Seater Bus On Rent in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-12.jpg',
    rate: '₹50/Km | ₹12,000 (Non-AC) / ₹13,000 (AC) for 300 Km Outstation',
    cap: '35 Passenger 2x2 Pushback Air-Suspension Coach',
    focus: 'marriage ceremonies, corporate annual outings, and 35-member pilgrimage tours across Maharashtra',
    spotKey: 'jyotirlinga'
  },
  {
    slug: '40-seater-bus-on-rent-in-pune',
    h1: '40 Seater bus on rent in pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-47.jpg',
    rate: '₹55/Km | ₹14,400 (Non-AC) / ₹16,000 (AC) for 300 Km Package',
    cap: '40 & 45 Passenger 2x2 Pushback Tourist Coach',
    focus: 'college industrial visits, wedding guest transport, and corporate staff shuttles in Pune',
    spotKey: 'lonavala'
  },
  {
    slug: 'purandar-airport-bus-hire-services-pune',
    h1: 'Purandar Airport Bus Hire Services Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-62.jpg',
    rate: '24/7 Airport & Aviation Corridor Fleet @ ₹22–₹50/Km',
    cap: '13–17 Seater Force Urbania, Tempo Travellers & 20–50 Seater Coaches',
    focus: 'Purandar New Pune International Airport corridor (Saswad, Jejuri, नारायणपूर, Hadapsar) & Lohegaon Airport group transfers',
    spotKey: 'ashtavinayak'
  },
  {
    slug: 'bus-hire-in-pune',
    h1: 'Bus Hire in Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-61.jpg',
    rate: 'Starting @ ₹22/Km (Mini Bus), ₹30/Km (Urbania) & ₹45–₹55/Km (32–50 Seater)',
    cap: '13, 17, 20, 25, 32, 35, 40, 45 & 50 Seater Fleet',
    focus: 'direct fleet owner bus hire across Pune & PCMC for weddings, corporate offsites, school trips, and pilgrimages',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'bus-rental-for-corporate-events',
    h1: 'Bus Rental for Corporate Events',
    cat: 'volvo',
    img: '/img/Keyword Based Image/Keyword Based Image-56.jpg',
    rate: '₹30/Km (Force Urbania) | ₹45–₹55/Km (AC Coaches) | ₹90/Km (Volvo)',
    cap: '13 to 50 Seater Corporate Fleet with GST Billing & Transport Coordinator',
    focus: 'IT conferences, CXO delegations, resort team-building offsites, and daily staff shuttles in Pune & Mumbai',
    spotKey: 'lonavala'
  },
  {
    slug: '26-seater-tempo-traveller-on-rent-in-pune',
    h1: '26 Seater Tempo Traveller On Rent in Pune',
    cat: 'tempo',
    img: '/img/25-seater-tempo/tt-1.jpeg',
    rate: '₹38/Km | ₹11,000 (300 Km Outstation) | ₹8,000 (Local 8 Hrs / 80 Km)',
    cap: '26+1 Seater Long-Wheelbase AC Luxury Tempo Traveller',
    focus: '22–26 passenger family holidays, wedding transfers, and Ashtavinayak/Jyotirlinga yatras from Pune',
    spotKey: 'ashtavinayak'
  },
  {
    slug: 'pune-bus-hire',
    h1: 'Pune Bus Hire',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-47.jpg',
    rate: 'Starting @ ₹22/Km (Mini Bus) to ₹50/Km (50 Seater) | ₹5,500 Local 8/80',
    cap: '13 to 50 Seater AC, Non-AC & Volvo Coaches Across 8 Pune Hubs',
    focus: 'instant doorstep bus hire in Pune for local sightseeing, marriage ceremonies, corporate shuttles, and outstation tours',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'volvo-bus-on-rent-in-pune',
    h1: 'Volvo Bus On Rent in Pune',
    cat: 'volvo',
    img: '/img/Keyword Based Image/Keyword Based Image-42.jpg',
    rate: '₹90/Km | ₹24,000 (45 Seater Volvo) & ₹25,500 (49 Seater Volvo) for 300 Km',
    cap: '45 & 49 Seater Multi-Axle Air-Suspension Luxury Volvo Coaches',
    focus: 'VIP corporate summits, luxury destination weddings, foreign tourist delegations, and long-distance highway charters',
    spotKey: 'goa'
  },
  // ================= SEO AUDIT DEDICATED PRIMARY KEYWORD PAGES =================
  {
    slug: '13-seater-urbania-on-rent-pune',
    h1: '13 Seater Urbania on Rent in Pune',
    cat: 'urbania',
    img: '/img/urbania/ub-2.jpeg',
    rate: '₹32/Km | ₹9,600 Outstation (300 Km) | ₹6,000 Local 8 Hrs/80 Km',
    cap: '13 Seater Luxury Force Urbania AC Van with Individual Recliner Seats',
    focus: 'corporate executive delegations, VIP airport pickups, family trips to Mahabaleshwar & Lonavala, and Ashtavinayak Darshan from Pune',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: '17-seater-urbania-on-rent-pune',
    h1: '17 Seater Urbania on Rent in Pune',
    cat: 'urbania',
    img: '/img/urbania/ub-1.jpeg',
    rate: '₹32/Km | ₹11,200 Outstation (300 Km) | ₹7,000 Local 8 Hrs/80 Km',
    cap: '17 Seater Long-Wheelbase Force Urbania AC Luxury Van',
    focus: '14–17 passenger luxury family vacations, wedding VIP guest transfers, Shirdi & 5 Jyotirlinga yatras, and corporate offsites',
    spotKey: 'lonavala'
  },
  {
    slug: 'pune-to-mumbai-cab',
    h1: 'Pune to Mumbai Cab',
    cat: 'winger',
    img: '/img/Keyword Based Image/Keyword Based Image-27.jpg',
    rate: 'Starting @ ₹2,800 (Sedan) / ₹3,800 (SUV) / ₹20/Km (9–13 Seater Winger)',
    cap: 'AC Sedan, Ertiga, Innova Crysta, Tata Winger & Force Urbania (@ ₹32/km)',
    focus: '24/7 doorstep Pune to Mumbai International Airport (T2) drops, BKC corporate meetings, Cruise Terminal transfers, and Mumbai Darshan',
    spotKey: 'mumbai'
  },
  {
    slug: 'outstation-cab-service-pune',
    h1: 'Outstation Cab Service Pune',
    cat: 'all',
    img: '/img/Keyword Based Image/Keyword Based Image-03.jpg',
    rate: 'Starting @ ₹12/Km (Cab), ₹22/Km (Tempo Traveller) & ₹32/Km (Force Urbania)',
    cap: '4 to 50 Seater AC Cabs, SUVs, Force Urbania, Tempo Travellers & Luxury Buses',
    focus: 'outstation family tours from Pune to Mahabaleshwar, Lonavala, Shirdi, Bhimashankar, Nashik, Konkan, and Goa',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'bus-on-rent-in-mumbai',
    h1: 'Bus on Rent in Mumbai',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-47.jpg',
    rate: 'Starting @ ₹32/Km (30 Seater) & ₹45/Km (32 Seater AC/Non-AC)',
    cap: '20, 32, 35, 40, 45 & 50 Seater AC & Non-AC Luxury Coaches in Mumbai',
    focus: 'Mumbai Airport T2 group pickups, BKC corporate events, Mumbai Darshan sightseeing, and Mumbai to Lonavala/Shirdi/Pune trips',
    spotKey: 'mumbai'
  },
  {
    slug: 'bus-on-rent-in-shirdi',
    h1: 'Bus on Rent in Shirdi',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-07.jpg',
    rate: 'Starting @ ₹32/Km (30 Seater) & ₹45/Km (32 Seater AC/Non-AC)',
    cap: '20, 32, 35, 45 & 50 Seater Pilgrimage Coaches in Shirdi',
    focus: 'Shirdi Sai Baba Samadhi Mandir group darshan, Shani Shingnapur transfers, Trimbakeshwar-Nashik-Ellora circuits, and Shirdi Airport pickups',
    spotKey: 'shirdi'
  },
  {
    slug: 'bus-on-rent-in-nashik',
    h1: 'Bus on Rent in Nashik',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-25.jpg',
    rate: 'Starting @ ₹32/Km (30 Seater) & ₹45/Km (32 Seater AC/Non-AC)',
    cap: '20, 32, 35, 45 & 50 Seater Luxury Buses in Nashik',
    focus: 'Trimbakeshwar Jyotirlinga, Saptashrungi Vani Gad, Panchavati darshan, Sula Vineyards tours, and wedding guest transport in Nashik',
    spotKey: 'jyotirlinga'
  },
  {
    slug: 'bus-on-rent-in-lonavala',
    h1: 'Bus on Rent in Lonavala',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-11.jpg',
    rate: 'Starting @ ₹32/Km (30 Seater) & ₹45/Km (32 Seater AC/Non-AC)',
    cap: '20, 32, 35, 45 & 50 Seater Hill-Station Coaches in Lonavala',
    focus: 'Lonavala & Khandala resort offsites, Bhushi Dam, Tiger Point, Karla Caves, Della Adventure, and Mumbai–Pune transfers',
    spotKey: 'lonavala'
  },
  {
    slug: 'tempo-traveller-on-rent-in-mumbai',
    h1: 'Tempo Traveller on Rent in Mumbai',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-01.jpg',
    rate: '₹22/Km (Non-AC) & ₹25/Km (AC) | 13, 17, 20 & 26 Seater',
    cap: '13, 17, 20 & 26 Seater Maharaja AC Tempo Travellers in Mumbai',
    focus: 'Mumbai Airport group transfers, Mumbai Darshan, and outstation trips from Mumbai/Thane/Navi Mumbai to Lonavala, Shirdi & Mahabaleshwar',
    spotKey: 'mumbai'
  },
  {
    slug: 'tempo-traveller-on-rent-in-shirdi',
    h1: 'Tempo Traveller on Rent in Shirdi',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-07.jpg',
    rate: '₹22/Km (Non-AC) & ₹25/Km (AC) | 13, 17, 20 & 26 Seater',
    cap: '13, 17, 20 & 26 Seater AC/Non-AC Tempo Travellers in Shirdi',
    focus: 'Shirdi Sai Baba darshan, Shani Shingnapur, Grishneshwar Ellora, and Nashik Trimbakeshwar family pilgrimages',
    spotKey: 'shirdi'
  },
  {
    slug: 'tempo-traveller-on-rent-in-nashik',
    h1: 'Tempo Traveller on Rent in Nashik',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-48.jpg',
    rate: '₹22/Km (Non-AC) & ₹25/Km (AC) | 13, 17, 20 & 26 Seater',
    cap: '13, 17, 20 & 26 Seater AC/Non-AC Tempo Travellers in Nashik',
    focus: 'Trimbakeshwar, Panchavati, Saptashrungi Vani, Sula Vineyards, and Shirdi outstation tours from Nashik',
    spotKey: 'jyotirlinga'
  },
  {
    slug: 'mini-bus-on-rent-in-mumbai',
    h1: 'Mini Bus on Rent in Mumbai',
    cat: 'minibus',
    img: '/img/Keyword Based Image/Keyword Based Image-04.jpg',
    rate: '₹22/Km to ₹38/Km | 13, 17, 20 & 25 Seater Mini Coaches',
    cap: '13, 17, 20 & 25 Seater AC & Non-AC Mini Buses in Mumbai',
    focus: 'corporate team outings, wedding guest shuttles, Mumbai Airport transfers, and weekend trips from Mumbai & Navi Mumbai',
    spotKey: 'mumbai'
  },
  {
    slug: 'mini-bus-on-rent-in-shirdi',
    h1: 'Mini Bus on Rent in Shirdi',
    cat: 'minibus',
    img: '/img/Keyword Based Image/Keyword Based Image-08.jpg',
    rate: '₹22/Km to ₹38/Km | 13, 17, 20 & 25 Seater Mini Coaches',
    cap: '13, 17, 20 & 25 Seater AC & Non-AC Mini Buses in Shirdi',
    focus: 'family pilgrimage groups visiting Shirdi Sai Baba Mandir, Shani Shingnapur, Bhimashankar, and Nashik Trimbakeshwar',
    spotKey: 'shirdi'
  },
  {
    slug: 'mini-bus-on-rent-in-nashik',
    h1: 'Mini Bus on Rent in Nashik',
    cat: 'minibus',
    img: '/img/Keyword Based Image/Keyword Based Image-50.jpg',
    rate: '₹22/Km to ₹38/Km | 13, 17, 20 & 25 Seater Mini Coaches',
    cap: '13, 17, 20 & 25 Seater AC & Non-AC Mini Buses in Nashik',
    focus: 'Trimbakeshwar Jyotirlinga, Saptashrungi Vani Gad, Igatpuri resorts, and Shirdi temple tours from Nashik',
    spotKey: 'jyotirlinga'
  },
  {
    slug: 'urbania-on-rent-in-nashik',
    h1: 'Urbania On Rent in Nashik',
    cat: 'urbania',
    img: '/img/urbania/ub-3.jpeg',
    rate: '₹32/Km (Flat Outstation Rate)',
    cap: '10, 13 & 17 Seater Force Urbania Luxury Fleet',
    focus: 'Trimbakeshwar Jyotirlinga, Sula Vineyards wine tours, Panchavati, Shirdi trips, and Nashik to Pune/Mumbai executive transfers',
    spotKey: 'jyotirlinga'
  },
  {
    slug: 'ac-bus-on-rent-in-pune',
    h1: 'AC Bus On Rent in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-11.jpg',
    rate: '₹40 – ₹60/Km | ₹7,000 – ₹10,000 Local 8 Hrs/80 Km',
    cap: '24, 29, 32, 35, 45 & 50 Seater Luxury AC Coaches',
    focus: 'corporate employee transportation, outstation weddings, pilgrimage tours, and long-distance group excursions from Pune',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: '20-seater-tempo-traveller-on-rent-in-pune',
    h1: '20 Seater Tempo Traveller On Rent in Pune',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-06.jpg',
    rate: '₹25/Km (Non-AC) & ₹28/Km (AC) | ₹6,000 / ₹6,500 Local 8 Hrs/80 Km',
    cap: '20 Seater 2x1 & 2x2 Maharaja Luxury Recliner Fleet',
    focus: 'corporate offsites, large family pilgrimages to Ashtavinayak & Shirdi, and Pune to Mumbai/Goa outstation tours',
    spotKey: 'ashtavinayak'
  },
  {
    slug: 'bus-hire-for-marriage-function',
    h1: 'Bus Hire for Marriage Function in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-38.jpg',
    rate: '₹35 – ₹50/Km | Special Wedding Day Packages',
    cap: '32, 35, 45 & 50 Seater Pushback AC Wedding Coaches',
    focus: 'baraat processions, guest pickup from Pune railway stations/airport to marriage lawns in Kothrud, Hadapsar, PCMC, and destination weddings',
    spotKey: 'mumbai'
  },
  {
    slug: 'bus-on-rent-for-picnic-in-pune',
    h1: 'Bus On Rent for Picnic in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-44.jpg',
    rate: '₹35 – ₹50/Km | Custom 1-Day & Weekend Picnic Packages',
    cap: '25, 32, 35 & 50 Seater Comfortable Picnic Buses',
    focus: 'school excursions, college picnics, family outings to Lonavala, Lavasa, Mulshi Dam, Sinhagad Fort, and Wet N Joy Waterpark',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: '13-seater-tempo-traveller-pune',
    h1: '13 Seater Tempo Traveller On Rent in Pune',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-01.jpg',
    rate: '₹22/Km (Non-AC) & ₹25/Km (AC) | ₹5,000 / ₹5,500 Local 8 Hrs/80 Km',
    cap: '13 Seater Pushback AC & Non-AC Tempo Traveller',
    focus: 'small family tours, airport transfers, Shirdi, Mahabaleshwar, and local sightseeing in Pune',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: '17-seater-tempo-traveller-pune',
    h1: '17 Seater Tempo Traveller On Rent in Pune',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-04.jpg',
    rate: '₹22/Km (Non-AC) & ₹25/Km (AC) | ₹5,000 / ₹5,500 Local 8 Hrs/80 Km',
    cap: '17 Seater Pushback AC & Non-AC Tempo Traveller',
    focus: 'medium group tours, Ashtavinayak Darshan, Konkan trips, and corporate offsite travel from Pune',
    spotKey: 'ashtavinayak'
  },
  {
    slug: 'tempo-traveller-on-rent-pune',
    h1: 'Tempo Traveller On Rent in Pune',
    cat: 'tempo',
    img: '/img/Keyword Based Image/Keyword Based Image-01.jpg',
    rate: '₹22/Km (Non-AC) & ₹25/Km (AC) | ₹5,000 Local 8 Hrs/80 Km',
    cap: '13, 17, 20 & 26 Seater Tempo Traveller Fleet',
    focus: 'doorstep vehicle dispatch across Kothrud, Baner, Wakad, Hinjewadi, and all Pune localities',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: 'urbania-on-rent-pune',
    h1: 'Urbania On Rent in Pune',
    cat: 'urbania',
    img: '/img/urbania/ub-1.jpeg',
    rate: '₹32/Km (Flat Outstation Rate)',
    cap: '10, 13 & 17 Seater Force Urbania Luxury Fleet',
    focus: 'executive luxury van travel, outstation family trips, VIP weddings, and corporate delegates in Pune',
    spotKey: 'mumbai'
  },
  {
    slug: 'bus-on-rent-pune',
    h1: 'Bus On Rent in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-11.jpg',
    rate: '₹35 – ₹50/Km | ₹8,000 – ₹10,000 Local 8 Hrs/80 Km',
    cap: '20, 25, 30, 32, 35, 45 & 50 Seater Luxury Bus Fleet',
    focus: 'corporate employee transport, wedding guests, school trips, and pilgrimage tours in Pune',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: '32-seater-bus-on-rent-pune',
    h1: '32 Seater Bus On Rent in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-11.jpg',
    rate: '₹35/Km (Non-AC) & ₹50/Km (AC) | ₹8,000 / ₹10,000 Local 8 Hrs/80 Km',
    cap: '32 Seater 2x2 Pushback Luxury Bus',
    focus: 'intercity group travel, wedding baraat, family trips to Mahabaleshwar, Shirdi, and Goa',
    spotKey: 'mahabaleshwar'
  },
  {
    slug: '40-seater-bus-on-rent-pune',
    h1: '40 Seater Bus On Rent in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-13.jpg',
    rate: '₹40 – ₹60/Km | ₹9,000 Local 8 Hrs/80 Km',
    cap: '40 Seater High-Deck Luxury Coach',
    focus: 'large corporate tours, wedding events, and long distance pilgrimages from Pune',
    spotKey: 'mumbai'
  },
  {
    slug: '50-seater-bus-on-rent-pune',
    h1: '50 Seater Bus On Rent in Pune',
    cat: 'bus',
    img: '/img/Keyword Based Image/Keyword Based Image-14.jpg',
    rate: '₹50/Km | ₹10,000 Local 8 Hrs/80 Km',
    cap: '50 Seater Large Pushback Air-Suspension Coach',
    focus: 'large group transportation, marriage party shuttles, school/college excursions, and all-India yatras',
    spotKey: 'mumbai'
  }
];

// Build full enriched KEYWORD_PAGES_DATA dictionary from RAW_KEYWORD_ENTRIES
export const KEYWORD_PAGES_DATA = RAW_KEYWORD_ENTRIES.reduce((acc, item) => {
  // Normalize all Force Urbania rates from ₹30/km to ₹32/km across every keyword entry
  const normalizedRate =
    item.cat === 'urbania'
      ? item.rate
          .replace(/₹30\s*\/\s*Km/gi, '₹32/Km')
          .replace(/₹9,000/g, '₹9,600')
          .replace(/₹11,000/g, '₹11,200')
      : item.rate.replace(/₹30\/Km \(Force Urbania\)/gi, '₹32/Km (Force Urbania)');

  let defaultGallery = [];
  if (item.cat === 'urbania') {
    defaultGallery = [
      { src: item.img, label: `${item.h1} – Luxury Force Urbania` },
      { src: '/img/urbania/ub-1.jpeg', label: 'Force Urbania Executive Fleet' },
      { src: '/img/urbania/ub-2.jpeg', label: 'White Luxury Urbania Showroom Fleet' },
      { src: '/img/urbania/ub-3.jpeg', label: 'Grey Metallic Urbania Passenger Cabin' },
      { src: '/img/Keyword Based Image/comfort-1.jpeg', label: 'VIP Reclining Captain Seats & Ambient Light' }
    ];
  } else if (item.slug.includes('25-seater') || item.slug.includes('26-seater')) {
    defaultGallery = [
      { src: '/img/25-seater-tempo/tt-1.jpeg', label: `${item.h1} – Luxury Pushback Cabin` },
      { src: '/img/25-seater-tempo/tt-2.jpeg', label: 'Force Traveller Long Wheelbase Exterior' },
      { src: '/img/25-seater-tempo/tt-3.jpeg', label: 'Force Traveller Front Highway Profile' },
      { src: '/img/25-seater-tempo/tt-4.jpeg', label: 'Aisle View with Headrest Cushions & Curtains' }
    ];
  } else {
    defaultGallery = [
      { src: item.img, label: `${item.h1} – Verified Shree Travels Fleet` },
      { src: '/img/Keyword Based Image/comfort-1.jpeg', label: 'Plush Reclining Pushback Cabin & Mood Lighting' },
      { src: '/img/Keyword Based Image/comfort-2.jpeg', label: 'Executive Interior with LED TV & Surround Audio' },
      { src: '/img/Keyword Based Image/comfort-4.jpeg', label: 'Individual AC Vents, Armrests & Charging Sockets' }
    ];
  }

  // Add dedicated destination scenery card if matching destination
  if (item.spotKey === 'shirdi' || item.slug.includes('shirdi')) {
    defaultGallery.push({ src: '/img/Keyword Based Image/Keyword Based Image-07.jpg', label: 'Pune to Shirdi Sai Baba Temple Darshan' });
  } else if (item.spotKey === 'lonavala' || item.slug.includes('lonavala')) {
    defaultGallery.push({ src: '/img/Keyword Based Image/Keyword Based Image-26.jpg', label: 'Pune to Lonavala Ghat & Hill Station Route' });
  } else if (item.spotKey === 'mahabaleshwar' || item.slug.includes('mahabaleshwar')) {
    defaultGallery.push({ src: '/img/Keyword Based Image/Keyword Based Image-02.jpg', label: 'Pune to Mahabaleshwar & Panchgani Ghat Route' });
  } else if (item.spotKey === 'ashtavinayak' || item.slug.includes('ashtavinayak')) {
    defaultGallery.push({ src: '/img/Keyword Based Image/Keyword Based Image-29.jpg', label: 'Pune to Ashtavinayak 8 Ganpati Temple Circuit' });
  } else if (item.spotKey === 'mumbai' || item.slug.includes('mumbai')) {
    defaultGallery.push({ src: '/img/Keyword Based Image/Keyword Based Image-27.jpg', label: 'Pune to Mumbai Darshan & Sea Link Route' });
  }

  acc[item.slug] = {
    slug: item.slug,
    h1: item.h1,
    title: `${item.h1} | Shree Travels`,
    badge: `Verified Fleet • ${item.cap}`,
    description: `Book ${item.h1} with Shree Travels (${normalizedRate}). Choose ${item.cap} with uniformed chauffeurs for ${item.focus}. Call +91 7620411277 or WhatsApp +91 78757 74499.`,
    keywords: `${item.h1}, ${item.h1} price per km, ${item.h1} contact number, Shree Travels Pune, Force Urbania 32 rs km Pune, bus rental Pune`,
    heroImage: item.img,
    gallery: defaultGallery,
    rateHighlight: normalizedRate,
    capacity: item.cap,
    intro: `Searching for dependable, spotlessly maintained ${item.h1} at direct fleet-owner rates? Shree Travels provides ${item.cap} tailored specifically for ${item.focus}. Every vehicle is dispatched from our nearest Pune, PCMC, Mumbai, Lonavala, Nashik, or Shirdi hub after thorough sanitization, complete with pushback reclining seats, roof-mounted air conditioning, Bluetooth entertainment, and a veteran commercial badge-holding chauffeur.`,
    highlights: [
      {
        title: 'Direct Fleet Owner Tariff (Zero Middlemen)',
        desc: `Book ${item.h1} directly with Shree Travels at our official rate card (${normalizedRate.split('|')[0].trim()}) with 100% transparent billing.`
      },
      {
        title: 'Pushback Recliners & High-Cooling Cabin',
        desc: 'Ergonomic reclining seats, wide legroom, panoramic windows, LED TV/music system, and mobile charging sockets for every row.'
      },
      {
        title: 'Ghat & Highway Certified Chauffeurs',
        desc: 'Uniformed drivers with 8+ years of experience across Sahyadri ghats, Konkan coastal highways, and the Mumbai–Pune Expressway.'
      },
      {
        title: '24/7 Dispatch Across 8 Local Hubs',
        desc: 'Guaranteed reporting 15 minutes before departure across Kothrud, Baner, Wakad, Hinjewadi, PCMC, Viman Nagar, Kharadi, and Hadapsar.'
      }
    ],
    idealFor: [
      'Family Outstation Holidays & Hill Station Trips',
      'Ashtavinayak, Shirdi & 5 Jyotirlinga Pilgrimages',
      'Corporate Events, IT Offsites & Airport Transfers',
      'Marriage Functions, Baraat & School Excursions'
    ],
    localPlaces: DESTINATION_SPOTS[item.spotKey] || DESTINATION_SPOTS.mahabaleshwar,
    fareRows: FARE_TABLES[item.cat] || FARE_TABLES.all,
    faqs: [
      [
        `What is the official rate for ${item.h1}?`,
        `Our official tariff for ${item.h1} is ${normalizedRate}. Outstation trips are billed at a standard 300 km/day minimum average, while local Pune packages cover 8 Hours / 80 Km.`
      ],
      [
        `How can I book ${item.h1} and view actual vehicle photos?`,
        `Simply call +91 7620411277 or WhatsApp +91 78757 74499 with your travel dates, pickup address, and passenger count. Our dispatch desk will share live interior/exterior photos and lock your booking immediately.`
      ],
      [
        'Are toll, parking, and state permit charges included in the per km rate?',
        'To maintain 100% billing transparency, highway tolls, municipal parking, passenger tax, GST, and interstate permits (if travelling outside Maharashtra) are charged at actuals against official receipts.'
      ]
    ]
  };
  return acc;
}, {});

// Featured Visual Cards for the "Related Vehicles & Tour Packages" Slider
const FEATURED_RELATED_CARDS = [
  {
    title: 'Force Urbania On Rent in Pune',
    subtitle: '13 & 17 Seater European Luxury Van',
    rate: '₹32 / Km',
    image: '/img/urbania/ub-1.jpeg',
    path: '/force-urbania-on-rent-in-pune'
  },
  {
    title: 'Tempo Traveller On Rent in Pune',
    subtitle: '13, 17, 20 & 26 Seater AC/Non-AC',
    rate: '₹22 – ₹25 / Km',
    image: '/img/Keyword Based Image/Keyword Based Image-01.jpg',
    path: '/tempo-traveller-on-rent-in-pune'
  },
  {
    title: '32 Seater Bus On Rent in Pune',
    subtitle: '2x2 Pushback AC & Non-AC Coach',
    rate: '₹45 / Km',
    image: '/img/Keyword Based Image/Keyword Based Image-11.jpg',
    path: '/32-seater-bus-on-rent-in-pune'
  },
  {
    title: '50 Seater Bus On Rent in Pune',
    subtitle: 'Large Wedding & Excursion Coach',
    rate: '₹50 / Km',
    image: '/img/Keyword Based Image/Keyword Based Image-14.jpg',
    path: '/50-seater-bus-on-rent-in-pune'
  },
  {
    title: 'Tata Winger On Rent in Pune',
    subtitle: '9, 12, 13 & 15 Seater Compact Van',
    rate: '₹20 – ₹22 / Km',
    image: '/img/Keyword Based Image/1.jpg',
    path: '/tata-winger-on-rent-in-pune'
  },
  {
    title: 'Pune to Mahabaleshwar Package',
    subtitle: 'Panchgani, Pratapgad & Venna Lake',
    rate: 'From ₹9,000',
    image: '/img/Keyword Based Image/Keyword Based Image-02.jpg',
    path: '/pune-to-mahabaleshwar-bus-hire'
  },
  {
    title: 'Ashtavinayak Darshan Bus Hire',
    subtitle: 'All 8 Swayambhu Ganpati Yatra',
    rate: 'From ₹14,400',
    image: '/img/Keyword Based Image/Keyword Based Image-17.jpg',
    path: '/ashtavinayak-darshan-bus-hire-pune'
  },
  {
    title: 'Pune to Konkan Darshan Bus Hire',
    subtitle: 'Alibaug, Ganpatipule & Tarkarli',
    rate: 'From ₹22 / Km',
    image: '/img/Keyword Based Image/Keyword Based Image-24.jpg',
    path: '/pune-to-konkan-darshan'
  }
];

const KeywordLandingPage = ({ keywordKey }) => {
  const params = useParams();
  const location = useLocation();
  const rawPath = keywordKey || params.slug || location.pathname.replace(/^\//, '');
  const data = KEYWORD_PAGES_DATA[rawPath] || KEYWORD_PAGES_DATA['urbania-on-rent-in-pune'];

  const allEntries = Object.values(KEYWORD_PAGES_DATA);
  const currentIndex = allEntries.findIndex((p) => p.slug === data.slug);
  const relatedKeywordLinks = [
    ...allEntries.slice(currentIndex + 1, currentIndex + 10),
    ...allEntries.slice(0, Math.max(0, 9 - (allEntries.length - 1 - currentIndex)))
  ].slice(0, 9);

  return (
    <div className="bg-light">
      <SEO
        title={data.title}
        description={data.description}
        keywords={data.keywords}
        path={`/${data.slug}`}
        image={data.heroImage}
        faqData={data.faqs}
        serviceData={{
          name: data.h1,
          description: data.description,
          serviceType: data.h1,
          areaServed: ['Pune', 'Pimpri-Chinchwad', 'Mumbai', 'Lonavala', 'Mahabaleshwar', 'Shirdi', 'Nashik', 'Maharashtra'],
          price: '32',
          priceCurrency: 'INR'
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Our Fleet & Services', url: '/our-fleet' },
          { name: data.h1, url: `/${data.slug}` }
        ]}
      />

      {/* 1. Hero Section with Dedicated Keyword Heading & Image */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
        <div className="container py-3">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span
                className="badge rounded-pill px-3 py-2 mb-3 fw-semibold d-inline-flex align-items-center"
                style={{ backgroundColor: 'rgba(255, 119, 0, 0.18)', color: '#ff9933', border: '1px solid rgba(255, 119, 0, 0.35)' }}
              >
                <FaBus className="me-2" /> {data.badge}
              </span>
              <h1 className="display-5 fw-bold text-white mb-3">{data.h1}</h1>
              <p className="lead text-light opacity-90 mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
                {data.intro}
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <a
                  href="tel:+917620411277"
                  className="btn btn-lg text-white fw-bold px-4 py-3 rounded-pill shadow-sm d-inline-flex align-items-center"
                  style={{ backgroundColor: '#ff7700' }}
                >
                  <FaPhoneAlt className="me-2" /> Call: +91 76204 11277
                </a>
                <a
                  href={`https://wa.me/917875774499?text=${encodeURIComponent(`Hello Shree Travels, I need a quote for ${data.h1}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg fw-bold px-4 py-3 rounded-pill shadow-sm d-inline-flex align-items-center text-white"
                  style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                >
                  <FaWhatsapp className="me-2" size={20} /> WhatsApp: +91 78757 74499
                </a>
                <Link
                  to="/book-taxi"
                  className="btn btn-lg btn-outline-light fw-bold px-4 py-3 rounded-pill d-inline-flex align-items-center"
                >
                  Book Online <FaArrowRight className="ms-2" size={14} />
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 rounded-4 overflow-hidden shadow-lg bg-dark">
                <div className="position-relative overflow-hidden">
                  <img
                    src={data.heroImage}
                    alt={data.h1}
                    className="img-fluid w-100 d-block"
                  />
                </div>
                <div className="p-3 bg-white text-dark">
                  <div className="small text-muted mb-1">Verified Official Tariff ({data.capacity}):</div>
                  <div className="fw-bold" style={{ color: '#ff7700', fontSize: '0.95rem' }}>{data.rateHighlight}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Vehicle Advantages & Humanized Features */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold h3 mb-2">Why Choose Shree Travels for <span style={{ color: '#ff7700' }}>{data.h1}</span>?</h2>
            <p className="text-muted mb-0 mx-auto" style={{ maxWidth: '720px' }}>
              Direct garage rates, deeply sanitized interiors, and highway-certified chauffeurs across Pune and Maharashtra.
            </p>
          </div>

          <div className="row g-4">
            {data.highlights.map((item, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="card h-100 border-0 shadow-sm p-4">
                  <span
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{ width: '48px', height: '48px', backgroundColor: '#fff3e6', color: '#ff7700' }}
                  >
                    <FaCheckCircle size={22} />
                  </span>
                  <h3 className="h5 fw-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-muted small mb-0" style={{ lineHeight: '1.7' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Official Pricing & Packages Table (Synced with Packages.jsx) */}
      <section className="py-5 bg-light border-bottom">
        <div className="container py-3">
          <div className="text-center mb-4">
            <span className="badge rounded-pill px-3 py-2 mb-2 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
              Official Packages Rate Card
            </span>
            <h2 className="fw-bold h3 mb-2">Transparent Rates for <span style={{ color: '#ff7700' }}>{data.h1}</span></h2>
            <p className="text-muted mb-2">Compare per-kilometer rates, 300 km outstation packages, and local 8 Hrs / 80 Km fares.</p>
            <div className="d-md-none small fw-semibold" style={{ color: '#ff7700' }}>
              ← Swipe table horizontally to view all rates & tap Book Now →
            </div>
          </div>

          <div className="table-responsive shadow-sm rounded-4 border bg-white">
            <table className="table table-hover align-middle mb-0 text-center responsive-fare-table">
              <thead className="text-white" style={{ backgroundColor: '#0f172a' }}>
                <tr>
                  <th className="py-3 px-3 text-start text-white" style={{ backgroundColor: '#0f172a' }}>Vehicle Configuration</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>300 KM Outstation Pkg</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>Per KM Rate</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>8 Hrs / 80 KM Local</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>Mumbai (350 KM)</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>Mahabaleshwar</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>Shirdi (450 KM)</th>
                  <th className="py-3 px-3 text-white" style={{ backgroundColor: '#0f172a' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.fareRows.map((row, index) => (
                  <tr key={index}>
                    <td data-label="Vehicle Configuration" className="text-start fw-bold px-3">{row.model}</td>
                    <td data-label="300 KM Outstation Pkg" className="fw-bold" style={{ color: '#ff7700' }}>{row.pkg300}</td>
                    <td data-label="Per KM Rate" className="fw-semibold">{row.perKm}</td>
                    <td data-label="8 Hrs / 80 KM Local">{row.local}</td>
                    <td data-label="Mumbai (350 KM)">{row.mumbai}</td>
                    <td data-label="Mahabaleshwar">{row.mahabaleshwar}</td>
                    <td data-label="Shirdi (450 KM)">{row.shirdi}</td>
                    <td data-label="Action" className="px-3">
                      <button
                        type="button"
                        data-vehicle={row.model}
                        data-place={data.h1}
                        className="btn btn-sm text-white fw-bold px-3 rounded-pill open-booking-popup-btn"
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
              <Link to="/packages" className="fw-bold text-decoration-none small" style={{ color: '#ff7700' }}>
                View Complete 13 to 50 Seater Rate Card <FaArrowRight className="ms-1" size={11} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Fleet & Interior Gallery Card Slider */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-3">
          <div className="text-center mb-4">
            <span className="badge rounded-pill px-3 py-2 mb-2 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
              Interactive Fleet Showcase
            </span>
            <h2 className="fw-bold h3 mb-2">{data.h1} – <span style={{ color: '#ff7700' }}>Fleet & Interior Gallery</span></h2>
            <p className="text-muted mb-0">Swipe or use the slider arrows to inspect actual exterior and cabin visuals from our Pune fleet.</p>
          </div>

          <CardSlider cardsPerView={4} interval={3800}>
            {data.gallery.map((img, i) => (
              <div className="card h-100 border-0 shadow-sm overflow-hidden" key={i}>
                <div className="position-relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="card-img-top d-block w-100"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="card-body p-3 text-center">
                  <p className="small fw-bold text-dark mb-0">{img.label}</p>
                </div>
              </div>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* 5. Local Sightseeing Places & Route Highlights Slider */}
      {data.localPlaces && data.localPlaces.length > 0 && (
        <section className="py-5 bg-light border-bottom">
          <div className="container py-3">
            <div className="text-center mb-4">
              <span className="badge rounded-pill px-3 py-2 mb-2 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
                Popular Route & Sightseeing Stops
              </span>
              <h2 className="fw-bold h3 mb-2">Top Places to Visit with <span style={{ color: '#ff7700' }}>{data.h1}</span></h2>
              <p className="text-muted mb-0 mx-auto" style={{ maxWidth: '720px' }}>
                Our chauffeurs are well-versed with all parking zones, temple timings, and scenic viewpoints across these popular routes:
              </p>
            </div>

            <CardSlider cardsPerView={3} interval={4500}>
              {data.localPlaces.map((place, idx) => (
                <div className="card h-100 border-0 shadow-sm p-4" key={idx}>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span
                      className="badge rounded-pill px-3 py-2 fw-semibold"
                      style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}
                    >
                      <FaCompass className="me-1" /> {place.tag}
                    </span>
                    <span className="fw-bold small text-muted">Stop 0{idx + 1}</span>
                  </div>
                  <h3 className="h5 fw-bold text-dark mb-2">{place.name}</h3>
                  <p className="text-muted small mb-0" style={{ lineHeight: '1.75' }}>{place.desc}</p>
                </div>
              ))}
            </CardSlider>
          </div>
        </section>
      )}

      {/* 6. Popular Trips & Direct Booking Contacts */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-3">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold h3 mb-3">Best Trips & Occasions for <span style={{ color: '#ff7700' }}>{data.h1}</span></h2>
              <p className="text-muted mb-4" style={{ lineHeight: '1.75' }}>
                Our customers book <strong>{data.h1}</strong> for both local Pune events and multi-day outstation tours across Maharashtra, Goa, Gujarat, Madhya Pradesh, and Karnataka:
              </p>
              <div className="row g-3">
                {data.idealFor.map((useCase, i) => (
                  <div className="col-sm-6" key={i}>
                    <div className="corporate-feature-card p-3 h-100 d-flex align-items-center">
                      <FaMapMarkerAlt className="me-2 flex-shrink-0" style={{ color: '#ff7700' }} />
                      <span className="small fw-semibold text-dark">{useCase}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 p-md-5 rounded-4 text-white shadow-sm" style={{ backgroundColor: '#0f172a' }}>
                <h3 className="h4 fw-bold text-white mb-2">24/7 Direct Fleet Booking Numbers</h3>
                <p className="small text-light opacity-75 mb-4">
                  Call or WhatsApp any of our official Pune booking numbers for instant availability and vehicle photos:
                </p>
                <div className="row g-2 mb-4">
                  {[
                    { phone: '+91 76204 11277', href: 'tel:+917620411277', tag: 'Primary Calling & Booking Desk' },
                    { phone: '+91 78757 74499', href: 'https://wa.me/917875774499', tag: '24/7 WhatsApp & Support Desk', isWa: true }
                  ].map((item, idx) => (
                    <div className="col-sm-6" key={idx}>
                      <a
                        href={item.href}
                        target={item.isWa ? '_blank' : undefined}
                        rel={item.isWa ? 'noopener noreferrer' : undefined}
                        className="d-block p-3 rounded-3 text-decoration-none text-white border border-secondary border-opacity-50"
                        style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                      >
                        <span className="d-block small" style={{ color: '#ff9933' }}>{item.tag}</span>
                        <strong className="fs-6">{item.phone}</strong>
                      </a>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/917875774499?text=${encodeURIComponent(`Hello Shree Travels, please send rates and photos for ${data.h1}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-100 py-3 rounded-pill fw-bold text-white d-inline-flex align-items-center justify-content-center"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <FaWhatsapp className="me-2" size={20} /> Chat on WhatsApp (+91 78757 74499)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-5 bg-light border-bottom">
        <div className="container py-3" style={{ maxWidth: '880px' }}>
          <h2 className="fw-bold h3 text-center mb-4">Frequently Asked Questions – <span style={{ color: '#ff7700' }}>{data.h1}</span></h2>
          {data.faqs.map(([q, a], i) => (
            <details className="border rounded-4 p-4 mb-3 bg-white shadow-sm" key={i} open={i === 0}>
              <summary className="fw-bold text-dark" style={{ cursor: 'pointer' }}>{q}</summary>
              <p className="text-muted mt-3 mb-0" style={{ lineHeight: '1.75' }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 8. Related Vehicles & Tour Packages Interactive Card Slider */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="text-center mb-4">
            <span className="badge rounded-pill px-3 py-2 mb-2 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
              Related Fleet & Tour Packages
            </span>
            <h2 className="fw-bold h3 mb-2">Explore Related <span style={{ color: '#ff7700' }}>Vehicles & Tour Packages</span></h2>
            <p className="text-muted mb-0">Slide through our most popular vehicle rentals and outstation packages from Pune.</p>
          </div>

          <CardSlider cardsPerView={4} interval={4000} className="mb-5">
            {FEATURED_RELATED_CARDS.map((card, idx) => (
              <div className="card h-100 border-0 shadow-sm overflow-hidden d-flex flex-column" key={idx}>
                <div className="position-relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-img-top"
                    style={{ height: '190px', objectFit: 'cover' }}
                    loading="lazy"
                    decoding="async"
                  />
                  <span
                    className="badge position-absolute top-0 end-0 m-2 px-3 py-2 rounded-pill fw-bold shadow-sm"
                    style={{ backgroundColor: '#ff7700', color: '#fff' }}
                  >
                    {card.rate}
                  </span>
                </div>
                <div className="card-body p-3 d-flex flex-column flex-grow-1">
                  <h3 className="h6 fw-bold text-dark mb-1">{card.title}</h3>
                  <p className="text-muted small mb-3 flex-grow-1">{card.subtitle}</p>
                  <Link
                    to={card.path}
                    className="btn btn-sm w-100 rounded-pill fw-bold text-white mt-auto"
                    style={{ backgroundColor: '#0f172a' }}
                  >
                    View Tariff & Details <FaArrowRight className="ms-1" size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </CardSlider>

          <h3 className="fw-bold h5 text-center mb-3">More Dedicated Rental Pages</h3>
          <div className="row g-3">
            {relatedKeywordLinks.map((p) => (
              <div className="col-md-6 col-lg-4" key={p.slug}>
                <Link to={`/${p.slug}`} className="route-grid-link h-100">
                  <span className="d-flex align-items-center text-truncate">
                    <FaBus className="me-2 flex-shrink-0" style={{ color: '#ff7700' }} />
                    <span className="text-truncate">{p.h1}</span>
                  </span>
                  <FaArrowRight className="ms-2 flex-shrink-0" style={{ color: '#ff7700' }} size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeywordLandingPage;
