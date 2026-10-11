import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import {
  FaBus,
  FaShuttleVan,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaRoad,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
  FaCompass,
  FaPrayingHands,
  FaUmbrellaBeach,
  FaMountain,
  FaShieldAlt,
  FaStar
} from 'react-icons/fa';
import SEO from '../components/SEO';
import CardSlider from '../components/CardSlider';

export const TOUR_PACKAGES_DATA = {
  'pune-to-mahabaleshwar-bus-hire': {
    slug: 'pune-to-mahabaleshwar-bus-hire',
    badge: 'Hill Station Tour Package • Sahyadri Ghats',
    h1: 'Pune to Mahabaleshwar & Panchgani Tour Package – Bus, Urbania & Tempo Traveller Hire',
    title: 'Pune to Mahabaleshwar Bus, Force Urbania & Tempo Traveller Hire | Shree Travels',
    description: 'Book Pune to Mahabaleshwar & Panchgani tour packages with Shree Travels. Rent 13-20 seater Tempo Traveller, Luxury Force Urbania (Starting at ₹32/km), or 32-50 seater Bus with expert ghat drivers.',
    keywords: 'Pune to Mahabaleshwar bus hire, Pune to Mahabaleshwar Tempo Traveller, Pune to Mahabaleshwar Urbania on rent, Mahabaleshwar Panchgani tour package from Pune, Pratapgad Mapro Garden bus trip',
    heroImage: '/img/Keyword Based Image/Keyword Based Image-31.jpg',
    galleryImages: [
      { src: '/img/Keyword Based Image/Keyword Based Image-31.jpg', caption: 'Pune to Mahabaleshwar Luxury Bus Service' },
      { src: '/img/Keyword Based Image/Keyword Based Image-02.jpg', caption: 'Pune to Mahabaleshwar Tempo Traveller Hire' },
      { src: '/img/Keyword Based Image/Keyword Based Image-44.jpg', caption: 'Pune to Mahabaleshwar Force Urbania Rental' },
      { src: '/img/Keyword Based Image/comfort-1.jpeg', caption: 'Pushback Recliner Cabin for Smooth Ghat Travel' }
    ],
    distance: '120 km (One Way) / ~300 km Round Trip with Sightseeing',
    duration: '3 to 3.5 Hours via NH-48 (Pune–Satara Highway) & Pasarani Ghat',
    bestTime: 'October to June (Winter Strawberry Season & Monsoon Waterfalls)',
    startingPackage: '₹9,000 (13 Seater Non-AC) / ₹9,600 (Force Urbania Starting at ₹32/km)',
    intro: 'Nestled at 1,353 meters in the Western Ghats, Mahabaleshwar and twin hill station Panchgani are Pune’s most loved family weekend and corporate outing destinations. Shree Travels provides experienced ghat-certified chauffeurs who know every hairpin bend of Pasarani Ghat and Ambenali Ghat, ensuring a motion-sickness-free, relaxing mountain holiday for your entire group.',
    localPlaces: [
      {
        name: 'Kshetra Mahabaleshwar & Panchganga Mandir',
        tag: 'Sacred Origin of 5 Rivers',
        desc: 'Visit the 4,500-year-old Swayambhu Shiva Lingam (Rudraksha-shaped) at Old Mahabaleshwar and the ancient Panchganga Temple where five sacred rivers—Krishna, Venna, Koyna, Savitri, and Gayatri—converge into a carved stone cow spout (Gaumukh).'
      },
      {
        name: 'Pratapgad Fort & Bhavani Mata Temple',
        tag: 'Maratha History • 24 km from Mahabaleshwar',
        desc: 'Built in 1656 by Chhatrapati Shivaji Maharaj, Pratapgad Fort stands atop a steep ridge overlooking the Konkan valley. Explore the historic Tulja Bhavani temple, the bronze equestrian statue of Shivaji Maharaj, and the scenic fortifications.'
      },
      {
        name: 'Arthur’s Seat, Elephant’s Head Point & Kate’s Point',
        tag: 'Iconic Canyon Viewpoints',
        desc: 'Known as the "Queen of All Points," Arthur’s Seat offers a dramatic 1,000-meter drop into the Savitri Valley. Nearby Elephant’s Head Point (Needle Hole Point) and Kate’s Point provide postcard-perfect views of the Dhom Dam backwaters.'
      },
      {
        name: 'Venna Lake Sunset Boating & Mapro Garden',
        tag: 'Family Favourite & Strawberry Hub',
        desc: 'Enjoy rowboat and paddleboat rides on the tranquil waters of Venna Lake, horse riding along the lakeside promenade, and a refreshing halt at Mapro Garden in Gureghar for fresh strawberry with cream, wood-fired pizzas, and fruit crushes.'
      },
      {
        name: 'Panchgani Table Land, Parsi Point & Sydney Point',
        tag: 'Volcanic Plateau • En Route to Pune',
        desc: 'Walk across Asia’s second-longest volcanic mountain plateau at Panchgani Table Land, admire the Pandavgad and Mandhardeo ranges from Sydney Point, and pick up fresh farm strawberries, mulberries, and artisanal jams on your return drive.'
      },
      {
        name: 'Lingmala Waterfall, Wilson Point & Tapola (Mini Kashmir)',
        tag: 'Nature Trails & Backwater Boating',
        desc: 'Witness the 500-foot cascading Lingmala Waterfall during monsoon and post-monsoon months, catch the sunrise at Wilson Point, or extend your itinerary by 28 km to Tapola (Shivsagar Lake) for kayaking and speed-boating.'
      }
    ],
    itinerary: [
      {
        day: 'Day 1: Pune Pickup → Wai Ganpati → Panchgani → Mahabaleshwar Sightseeing',
        plan: '6:30 AM doorstep pickup in Pune/PCMC. Breakfast stop near Shirwal/Khed Shivapur, followed by Dholya Ganpati & Kashi Vishweshwar Darshan at Wai. Climb Pasarani Ghat stopping at Sydney Point, Parsi Point, Panchgani Table Land, and Mapro Garden. Evening boating at Venna Lake and sunset at Bombay Point.'
      },
      {
        day: 'Day 2: Pratapgad Fort → Kshetra Mahabaleshwar → Arthur’s Seat → Pune Return',
        plan: 'Morning drive through lush forest roads to Pratapgad Fort. Return for lunch and visit Old Mahabaleshwar Panchganga Temple, Elphinstone Point, and Arthur’s Seat. Depart by 4:30 PM with a strawberry shopping halt and reach Pune comfortably by 8:30 PM.'
      }
    ],
    faqs: [
      [
        'What is the fixed package cost for Pune to Mahabaleshwar bus or Tempo Traveller?',
        'As per our official tariff card, a Pune to Mahabaleshwar package (up to 300 km) starts at ₹9,000 for a 13-Seater Non-AC Tempo Traveller, ₹10,000 for a 13-Seater AC Tempo Traveller, ₹9,600–₹12,500 for a 13/17-Seater Force Urbania (Starting at ₹32/km), and ₹14,000–₹16,000 for a 32-Seater Bus.'
      ],
      [
        'Can a 32-seater or 45-seater bus go up to Pratapgad Fort and Mahabaleshwar points?',
        'Yes! Our 20, 32, 35, and 45-seater buses easily climb Pasarani Ghat to Panchgani and Mahabaleshwar main bus stand, Mapro Garden, Venna Lake, and Pratapgad base parking. For narrow internal forest points where heavy buses are restricted by local authorities, local union taxis are available at the stand.'
      ],
      [
        'Are Mahabaleshwar pollution tax and entry tolls included in the base fare?',
        'Our base package covers vehicle fuel and the 300 km running limit. Highway tolls (Khed Shivapur & Anewadi), Panchgani/Mahabaleshwar municipal entry/eco tax, and parking are paid at actuals as per official receipts.'
      ]
    ]
  },

  'pune-to-lonavala-bus-hire': {
    slug: 'pune-to-lonavala-bus-hire',
    badge: '1-Day & Weekend Escape • Mumbai-Pune Corridor',
    h1: 'Pune to Lonavala & Khandala Tour Package – Bus, Mini Bus & Force Urbania Hire',
    title: 'Pune to Lonavala Bus, Tempo Traveller & Force Urbania On Rent | Shree Travels',
    description: 'Hire a Bus, Mini Bus, Tempo Traveller, or Luxury Force Urbania (Starting at ₹32/km) from Pune to Lonavala & Khandala. Complete local sightseeing covering Bhushi Dam, Tiger Point, Karla Caves, Pawna Lake & Della.',
    keywords: 'Pune to Lonavala bus hire, Pune to Lonavala Tempo Traveller, Urbania rent in Lonavala, Mini bus on rent for Lonavala picnic, Lonavala Khandala 1 day tour package from Pune',
    heroImage: '/img/Keyword Based Image/Keyword Based Image-26.jpg',
    galleryImages: [
      { src: '/img/Keyword Based Image/Keyword Based Image-26.jpg', caption: 'Pune to Lonavala Bus & Coach Hire' },
      { src: '/img/Keyword Based Image/Keyword Based Image-03.jpg', caption: 'Outstation Tempo Traveller for Lonavala Ghats' },
      { src: '/img/Keyword Based Image/Keyword Based Image-39.jpg', caption: 'Force Urbania Luxury Van for Lonavala Resorts' },
      { src: '/img/Keyword Based Image/comfort-2.jpeg', caption: 'Executive Interiors with LED TV & Bluetooth Music' }
    ],
    distance: '65 km (One Way) / ~180–220 km Round Trip with Sightseeing',
    duration: '1.5 Hours via Mumbai–Pune Expressway or Old NH-48 Highway',
    bestTime: 'Year-Round (June–September for Waterfalls; October–March for Forts & Camping)',
    startingPackage: 'From ₹7,200 (13 Seater Non-AC) / ₹8,100 (13 Seater AC) / Starting at ₹32/km Force Urbania',
    intro: 'Just a 90-minute drive from Pune, Lonavala and Khandala offer mist-covered valleys, ancient Buddhist rock-cut caves, lakeside camping, and thrilling adventure parks. Whether you are planning a corporate resort offsite at Amby Valley/Della, a school excursion to Wet’nJoy, or a monsoon family picnic to Bhushi Dam, Shree Travels delivers spotless vehicles right to your doorstep.',
    localPlaces: [
      {
        name: 'Bhushi Dam & Lion’s Point / Tiger’s Leap (Waghdari)',
        tag: 'Monsoon Waterfalls & Valley Vistas',
        desc: 'Sit on the iconic stone steps of Bhushi Dam as fresh mountain water cascades over them, then drive up to Lion’s Point and Tiger’s Leap along the Amby Valley road for panoramic views of the Konkan cliff drop, echo points, and hot corn & bhajiya stalls.'
      },
      {
        name: 'Karla Caves, Bhaja Caves & Ekvira Devi Mandir',
        tag: '2nd-Century BC Heritage & Sacred Shrine',
        desc: 'Explore India’s largest ancient Hinayana Buddhist Chaitya rock-cut prayer hall at Karla (famous for its 2,000-year-old teakwood ribs) and seek blessings at the revered Aai Ekvira Devi Temple located right beside the cave complex.'
      },
      {
        name: 'Lohagad Fort & Visapur Fort Foothills',
        tag: 'Maratha Hill Forts • Malavli',
        desc: 'Rising 1,033 meters above sea level, Lohagad Fort offers an easy, family-friendly stone-step climb through four historic दरवाजा (gates) leading to the famous "Vinchu Kata" (Scorpion’s Tail) ridge overlooking Pawna Lake.'
      },
      {
        name: 'Pawna Lake & Tungarli Lake',
        tag: 'Lakeside Picnic & Sunset Views',
        desc: 'Surrounded by the pyramid-shaped Tikona Fort, Tung Fort, and Lohagad, Pawna Lake is the premier destination for corporate day picnics, lakeside lunches, and evening campfire getaways.'
      },
      {
        name: 'Rajmachi Garden, Duke’s Nose View & Khandala Ghat',
        tag: 'Expressway Valley Overlook',
        desc: 'Located at the edge of Bor Ghat in Khandala, Rajmachi Point offers a dramatic view of the twin forts of Shrivardhan and Manaranjan, the railway viaducts, and the winding Mumbai-Pune Expressway below.'
      },
      {
        name: 'Wet’nJoy Water Park, Magic Mountain & Sunil’s Wax Museum',
        tag: 'Theme Parks & Chikki Shopping',
        desc: 'Ideal for school picnics, college trips, and family outings—spend a full day on wave pools and roller coasters at Wet’nJoy or Della Adventure Park, followed by authentic Maganlal Chikki and fudge shopping in Lonavala Bazaar.'
      }
    ],
    itinerary: [
      {
        day: 'Option A: 1-Day Lonavala & Khandala Complete Sightseeing (7:00 AM – 9:00 PM)',
        plan: 'Morning pickup from Pune → Karla Caves & Ekvira Devi Temple → Wet’nJoy OR Lohagad Fort & Bhaja Caves → Lunch on Old Mumbai-Pune Highway → Bhushi Dam → Lion’s Point & Tiger’s Leap Sunset → Lonavala Chikki Bazaar → Return to Pune by 9:00 PM.'
      },
      {
        day: 'Option B: 2-Day Corporate Resort / Pawna Lake & Sightseeing Package',
        plan: 'Day 1 covers Khandala Rajmachi Point, Sunil’s Wax Museum, Bhushi Dam, and Tiger Point before checking into your Lonavala resort or Pawna Lake camp. Day 2 covers Lohagad Fort, Karla Caves, and Wet’nJoy / Della Adventure before returning to Pune.'
      }
    ],
    faqs: [
      [
        'Which vehicle is best for a 15 to 40 member group picnic from Pune to Lonavala?',
        'For 10–17 passengers, our 13/17-Seater AC Tempo Traveller (Starting at ₹25/km) or Luxury Force Urbania (Starting at ₹32/km) is ideal and easily navigates Tiger Point and Pawna roads. For 20–50 passengers, our 20-Seater Mini Bus (Starting at ₹28/km) and 32/45-Seater Luxury Coaches are most economical.'
      ],
      [
        'Can you arrange multiple buses for a school picnic to Wet’nJoy Lonavala?',
        'Yes, we regularly coordinate fleets of 3 to 15 buses (32, 40, 45, and 50-seater RTO-compliant coaches) for Pune schools, colleges, and IT companies visiting Wet’nJoy, Magic Mountain, and Della Adventure.'
      ],
      [
        'How are tolls charged on the Pune to Lonavala route?',
        'Depending on whether your group prefers the fast Mumbai-Pune Expressway or the scenic Old NH-48 Highway (via Dehu Road, Vadgaon, and Kamshet), actual toll and Lonavala municipal entry charges are paid directly at the booth.'
      ]
    ]
  },

  'pune-to-goa-bus-hire': {
    slug: 'pune-to-goa-bus-hire',
    badge: 'Coastal Beach Holiday • North & South Goa',
    h1: 'Pune to Goa Bus Hire, Force Urbania & Tempo Traveller Package',
    title: 'Pune to Goa Bus Hire, Tempo Traveller & Force Urbania Rental | Shree Travels',
    description: 'Book Pune to Goa Bus, Mini Bus, Tempo Traveller, or Luxury Force Urbania (Starting at ₹32/km) with Shree Travels. Explore North Goa & South Goa beaches, forts, churches, and Dudhsagar with experienced highway drivers.',
    keywords: 'Pune to Goa Bus Hire, Pune to Goa Tempo Traveller, Pune to Goa Force Urbania on rent, Mini bus on rent for Goa trip from Pune, North South Goa group tour bus Pune',
    heroImage: '/img/Keyword Based Image/Keyword Based Image-23.jpg',
    galleryImages: [
      { src: '/img/Keyword Based Image/Keyword Based Image-23.jpg', caption: 'Pune to Goa Bus & Group Tour Service' },
      { src: '/img/Keyword Based Image/Keyword Based Image-34.jpg', caption: 'Long-Distance Luxury Tourist Coach for Goa Highway' },
      { src: '/img/Keyword Based Image/Keyword Based Image-16.jpg', caption: 'Force Urbania for Friends & Family Goa Road Trips' },
      { src: '/img/Keyword Based Image/comfort-3.jpeg', caption: 'Reclining Captain Seats & Overhead Luggage Lockers' }
    ],
    distance: '450 km (One Way) / ~1,100–1,250 km 4-Day Round Trip',
    duration: '8.5 to 10 Hours via NH-48 (Satara–Kolhapur–Nipani–Amboli Ghat)',
    bestTime: 'October to March (Peak Beach & Festival Season) & June–September (Lush Monsoon Goa)',
    startingPackage: 'Starting at ₹22/km (Non-AC) | ₹25/km (AC) | ₹32/km (Force Urbania)',
    intro: 'Planning an unforgettable road trip from Pune to Goa with friends, extended family, or your corporate team? Avoid the hassle of split flight tickets, train waitlists, and expensive local Goa taxis. When you hire a dedicated Tempo Traveller, Force Urbania, or Luxury AC Bus from Shree Travels, your vehicle stays with you throughout North and South Goa for seamless beach-hopping and sightseeing.',
    localPlaces: [
      {
        name: 'Calangute, Baga, Candolim & Anjuna Beaches (North Goa)',
        tag: 'Water Sports & Coastal Vibrance',
        desc: 'Experience parasailing, jet-skiing, banana boat rides, and lively beachfront shacks along North Goa’s golden coastline, plus the famous Anjuna flea market and Vagator cliff views.'
      },
      {
        name: 'Fort Aguada, Sinquerim Lighthouse & Chapora Fort',
        tag: '17th-Century Portuguese Sea Forts',
        desc: 'Built in 1612 to guard the Mandovi River estuary, Fort Aguada features a four-storey Portuguese lighthouse and sweeping Arabian Sea panoramas. Pair it with the red-laterite ramparts of Chapora Fort ("Dil Chahta Hai" point) at sunset.'
      },
      {
        name: 'Old Goa UNESCO Churches & Fontainhas Latin Quarter',
        tag: 'World Heritage Architecture • Panjim',
        desc: 'Marvel at the Baroque architecture of the Basilica of Bom Jesus (housing the relics of St. Francis Xavier) and the grand Se Cathedral, followed by a walk through Panjim’s colorful Portuguese villas in Fontainhas and Our Lady of the Immaculate Conception Church.'
      },
      {
        name: 'Shri Mangeshi Mandir, Shantadurga Temple & Tropical Spice Farms',
        tag: 'Ponda Cultural & Spiritual Belt',
        desc: 'Admire the seven-storey white Deepstambha (lamp tower) at Shri Mangeshi Temple and Shantadurga Temple in Ponda, followed by a guided walk through an organic Goan spice plantation with a traditional Saraswat buffet lunch.'
      },
      {
        name: 'Miramar, Dona Paula, Colva & Palolem Beaches (South Goa)',
        tag: 'Serene White Sands & Dolphin Rides',
        desc: 'Discover the peaceful side of Goa in the south—visit Dona Paula jetty where the Zuari and Mandovi rivers meet the sea, stroll along Colva and Benaulim beaches, or relax at the crescent-shaped palm bay of Palolem.'
      },
      {
        name: 'Mandovi River Sunset Cruise & Aguada Jail Museum',
        tag: 'Evening Cultural Experience',
        desc: 'Board a 1-hour musical sunset cruise from Santa Monica Jetty in Panjim featuring traditional Dekhni and Fugdi folk dances overlooking the illuminated Atal Setu bridge.'
      }
    ],
    itinerary: [
      {
        day: 'Day 1: Pune / Overnight Departure → Kolhapur Mahalakshmi Halt → North Goa Check-In',
        plan: 'Depart Pune late evening (10:00 PM) or early morning (5:00 AM) via Satara–Kolhapur NH-48 and scenic Amboli Ghat. Optional en-route darshan at Kolhapur Mahalakshmi Temple. Arrive in North Goa, check into hotel, and spend the evening at Calangute / Baga Beach.'
      },
      {
        day: 'Day 2: Complete North Goa Sightseeing Circuit',
        plan: 'Visit Fort Aguada, Sinquerim Beach, Candolim, Snow Park, Anjuna Beach, Vagator, and Chapora Fort at sunset.'
      },
      {
        day: 'Day 3: Old Goa Heritage, Spice Plantation, South Goa & Mandovi River Cruise',
        plan: 'Morning visit to Basilica of Bom Jesus & Se Cathedral (Old Goa), Shri Mangeshi Temple, and Ponda Spice Plantation. Afternoon at Dona Paula, Miramar Beach, Panjim Church, and evening Mandovi River Sunset Cruise.'
      },
      {
        day: 'Day 4: Cashew Shopping at Mapusa / Sawantwadi → Return to Pune',
        plan: 'Morning leisure and Goan cashew/handicraft shopping. Return smoothly via Amboli Ghat and Kolhapur, reaching Pune by night.'
      }
    ],
    faqs: [
      [
        'Is Goa interstate permit and road tax required for Pune-registered buses and Tempo Travellers?',
        'Yes, all commercial tourist vehicles entering Goa from Maharashtra require a Goa State Entry Tax / All-India Tourist Permit endorsement. Shree Travels arranges all permit paperwork in advance so your group passes the Banda/Dodamarg check-post smoothly without delay (permit fee charged at actual government receipt).'
      ],
      [
        'Does the vehicle stay with us for local North and South Goa sightseeing?',
        'Yes! Unlike one-way drops, when you book a Pune to Goa outstation round-trip package with Shree Travels, our vehicle and driver remain with your group for all days to cover your North Goa and South Goa sightseeing points as per your itinerary.'
      ],
      [
        'Which route do your drivers take from Pune to Goa?',
        'Our preferred, safest highway route is Pune → Satara → Karad → Kolhapur → Nipani → Ajra → Amboli Ghat → Sawantwadi → North Goa (NH-48 + NH-66), which has excellent four-lane highway stretches and reliable family food malls.'
      ]
    ]
  },

  'pune-to-konkan-darshan': {
    slug: 'pune-to-konkan-darshan',
    badge: 'Coastal Maharashtra Circuit • Beaches, Sea Forts & Temples',
    h1: 'Pune to Konkan Darshan Bus Hire – Alibaug, Dapoli, Ganpatipule & Tarkarli Tour',
    title: 'Pune to Konkan Darshan Bus Hire, Tempo Traveller & Urbania | Shree Travels',
    description: 'Book Pune to Konkan Darshan Bus, Mini Bus, Tempo Traveller, or Force Urbania (Starting at ₹32/km). Explore Diveagar, Harihareshwar, Dapoli, Ganpatipule, Ratnagiri, Sindhudurg & Tarkarli with expert coastal drivers.',
    keywords: 'Pune to Konkan Darshan Bus Hire, Pune to Ganpatipule Tempo Traveller, Pune to Dapoli Diveagar Mini Bus on rent, Pune to Tarkarli Malvan bus package, Konkan coastal tour from Pune',
    heroImage: '/img/Keyword Based Image/Keyword Based Image-24.jpg',
    galleryImages: [
      { src: '/img/Keyword Based Image/Keyword Based Image-24.jpg', caption: 'Pune to Konkan Darshan Bus Hire' },
      { src: '/img/Keyword Based Image/Keyword Based Image-45.jpg', caption: '20-25 Seater Mini Bus for Konkan Ghat & Coastal Roads' },
      { src: '/img/Keyword Based Image/Keyword Based Image-48.jpg', caption: 'Force Tempo Traveller for Family Konkan Trips' },
      { src: '/img/Keyword Based Image/comfort-4.jpeg', caption: 'High-Cooling AC Recliner Cabin for Coastal Journeys' }
    ],
    distance: '170 km (Diveagar) / 310 km (Ganpatipule) / 390 km (Tarkarli-Malvan)',
    duration: '2 to 5 Days Customizable Coastal Circuit via Tamhini, Varandha or Amba Ghat',
    bestTime: 'October to May (Clear Seas, Dolphin Rides, Scuba & Alphonso Mango Season)',
    startingPackage: 'Starting at ₹22/km (Non-AC) | ₹25/km (AC) | ₹32/km (Force Urbania)',
    intro: 'Stretching across Raigad, Ratnagiri, and Sindhudurg districts, the Konkan coastline is a breathtaking paradise of untouched white-sand beaches, ancient sea forts built by Chhatrapati Shivaji Maharaj, coconut and Alphonso mango orchards, and sacred seaside temples. Because Konkan roads wind through scenic ghats and coastal villages, Shree Travels recommends our nimble 13–26 Seater Tempo Travellers, Force Urbania vans, and 20–35 Seater Mini/Mid-Size Buses driven by seasoned Konkan route specialists.',
    localPlaces: [
      {
        name: 'Diveagar, Shrivardhan & Harihareshwar (Raigad Konkan)',
        tag: 'Dakshin Kashi • 170 km via Tamhini Ghat',
        desc: 'Start your Konkan journey with the ancient Harihareshwar Shiva & Kalbhairav Temple (famous for its rocky seashore Pradakshina path running alongside crashing waves), Somjaai Devi at Shrivardhan (birthplace of Peshwa Balaji Vishwanath), and the wide, casuarina-fringed beach of Diveagar.'
      },
      {
        name: 'Alibaug, Kashid Beach & Murud-Janjira Sea Fort',
        tag: 'Island Fortress & Coastal Getaway',
        desc: 'Take a traditional sailboat from Rajapuri jetty to the undefeated 15th-century Murud-Janjira Sea Fort rising 40 feet out of the Arabian Sea, relax on the sparkling white sands of Kashid Beach, and visit Kolaba Fort & Birla Mandir in Alibaug.'
      },
      {
        name: 'Dapoli, Karde Beach, Harnai Bandar & Keshavraj Temple',
        tag: 'Mini Mahabaleshwar of Konkan • 195 km',
        desc: 'Enjoy early-morning dolphin-spotting boat rides at Karde and Murud-Dapoli beaches, witness the famous evening fish auction at Harnai Port overlooking Suvarnadurg Sea Fort, visit the hillside stone temple of Vyaghreshwar & Keshavraj at Asud, and see the Panhalakaji Caves.'
      },
      {
        name: 'Guhagar, Hedvi Dashabhuja Ganpati & Velneshwar Beach',
        tag: 'Serene Temple Coastline',
        desc: 'Visit the 10-armed white marble idol of Shri Dashabhuja Laxmi Ganesh at Hedvi and the natural Bamanghal gorge (where sea waves shoot 20 feet into the air), followed by Vyadeshwar Mandir in Guhagar and the coconut-fringed bay of Velneshwar.'
      },
      {
        name: 'Ganpatipule Swayambhu Ganpati, Aare-Ware & Ratnagiri',
        tag: '400-Year-Old Beachfront Ganesh Shrine',
        desc: 'Seek blessings at the world-famous Swayambhu Ganpatipule Temple where the hill itself forms the pradakshina path right on the beach. Explore the Prachin Konkan open-air museum, drive along the dramatic Aare-Ware coastal cliff road, and visit Thibaw Palace & Bhatye Beach in Ratnagiri.'
      },
      {
        name: 'Tarkarli, Malvan Sindhudurg Sea Fort & Kunkeshwar Mandir',
        tag: 'Scuba Diving & Maratha Naval Capital',
        desc: 'In South Konkan, ferry across to Chhatrapati Shivaji Maharaj’s iconic 1664 Sindhudurg Sea Fort in Malvan, experience scuba diving and parasailing at Tarkarli and Devbagh Sangam (where the Karli River meets the Arabian Sea), and visit the 11th-century beachfront Kunkeshwar Shiva Temple.'
      }
    ],
    itinerary: [
      {
        day: 'Circuit 1 (2–3 Days): North Konkan – Diveagar, Shrivardhan, Harihareshwar & Dapoli',
        plan: 'Day 1: Pune → Tamhini Ghat (Mulshi Dam & Plus Valley views) → Diveagar Beach & Suvarna Ganesh Mandir → Shrivardhan. Day 2: Harihareshwar Temple Pradakshina → Bankot Ferry to Dapoli → Karde Beach & Keshavraj Temple. Day 3: Harnai Port, Parshuram Bhumi (Chiplun) → Return to Pune via Koyna/Satara.'
      },
      {
        day: 'Circuit 2 (3–4 Days): Ratnagiri & Ganpatipule Complete Darshan',
        plan: 'Day 1: Pune → Karad → Amba Ghat → Marleshwar Cave Temple & Waterfall → Ganpatipule. Day 2: Swayambhu Ganpati Darshan, Prachin Konkan, Malgund, and Aare-Ware Coastal Drive. Day 3: Ratnadurg Fort, Pawas Swarupanand Ashram & Thibaw Palace → Return to Pune.'
      },
      {
        day: 'Circuit 3 (4–5 Days): Grand South Konkan – Ganpatipule, Kunkeshwar, Malvan & Tarkarli',
        plan: 'Covers Ganpatipule, Vijaydurg Fort, Kunkeshwar Mandir, Malvan Sindhudurg Sea Fort, Rock Garden, Tarkarli Water Sports & Devbagh Sangam, returning via Gaganbawda or Radhanagari-Kolhapur.'
      }
    ],
    faqs: [
      [
        'Which vehicle size is best suited for Konkan coastal roads and ferry crossings?',
        'For Konkan trips (especially Diveagar, Dapoli, Guhagar, and Ganpatipule where roads have scenic ghats and optional Ro-Ro ferry crossings at Bagmandla/Dabhol), our 13, 17, and 20-Seater Tempo Travellers, Force Urbania (Starting at ₹32/km), and 20–32 Seater Mini/Mid-size Buses are the most comfortable and agile choices.'
      ],
      [
        'Can we customize our Konkan Darshan route to include Kolhapur Mahalakshmi on the way back?',
        'Yes! Most families returning from Ganpatipule, Kunkeshwar, or Tarkarli take the Amba Ghat or Phonda/Gaganbawda route via Kolhapur, allowing a convenient darshan halt at Shri Ambabai (Mahalakshmi) Mandir before heading up NH-48 to Pune.'
      ],
      [
        'How is the fare calculated for a 3-day or 4-day Pune to Konkan Darshan tour?',
        'Multi-day Konkan tours are billed transparently on actual total kilometers (subject to the standard 300 km/day average minimum) at our official per-km rates starting from ₹22/km (Non-AC) and ₹25/km (AC), plus actual toll, parking, and ferry/driver allowance.'
      ]
    ]
  },

  'pune-to-mumbai-darshan': {
    slug: 'pune-to-mumbai-darshan',
    badge: '1-Day & 2-Day City Sightseeing • Express Highway',
    h1: 'Pune to Mumbai Darshan Bus On Rent – Siddhivinayak, Gateway of India & Marine Drive Tour',
    title: 'Pune to Mumbai Darshan Bus On Rent, Force Urbania & Tempo Traveller | Shree Travels',
    description: 'Book Pune to Mumbai Darshan Bus, Mini Bus, Force Urbania (Starting at ₹32/km), or Tempo Traveller on rent. Cover Siddhivinayak Temple, Gateway of India, Marine Drive, Mahalakshmi, Haji Ali & Juhu Beach in 1 day.',
    keywords: 'Pune to Mumbai Darshan Bus On Rent, Pune to Mumbai bus hire, Pune to Mumbai Urbania on rent, Pune to Mumbai Tempo Traveller, 1 day Mumbai Darshan package from Pune',
    heroImage: '/img/Keyword Based Image/Keyword Based Image-27.jpg',
    galleryImages: [
      { src: '/img/Keyword Based Image/Keyword Based Image-27.jpg', caption: 'Pune to Mumbai Darshan Bus On Rent' },
      { src: '/img/Keyword Based Image/Keyword Based Image-21.jpg', caption: 'Gateway of India & Maharashtra Darshan Fleet' },
      { src: '/img/Our Network Images/Our Network Images-02.jpg', caption: 'Marine Drive (Queen’s Necklace) Evening Tour' },
      { src: '/img/Keyword Based Image/Keyword Based Image-16.jpg', caption: 'Luxury Force Urbania for VIP Mumbai Trips' }
    ],
    distance: '150 km (One Way) / ~350 km Complete Mumbai Darshan Round Trip',
    duration: '3 Hours (One Way) via Mumbai–Pune Yashwantrao Chavan Expressway',
    bestTime: 'Year-Round (October to March Ideal for Walking & Ferry Rides)',
    startingPackage: 'From ₹9,000 (13 Seater Non-AC) / ₹10,000 (13 Seater AC) / Starting at ₹32/km Force Urbania',
    intro: 'Experience the magic of India’s financial and entertainment capital in complete air-conditioned comfort! Whether your family wants a sacred darshan at Shree Siddhivinayak and Mahalakshmi Temples, your school is planning an educational tour to Nehru Science Centre and Taraporewala/Prince of Wales Museum, or your guests want to see the Gateway of India, Bandra-Worli Sea Link, and Marine Drive, Shree Travels provides Mumbai-experienced chauffeurs who navigate South Mumbai traffic and bus parking zones effortlessly.',
    localPlaces: [
      {
        name: 'Gateway of India, Taj Mahal Palace & Elephanta Harbour Cruise',
        tag: 'Colaba Heritage Waterfront',
        desc: 'Built in 1924 overlooking the Arabian Sea, the Gateway of India is Mumbai’s signature landmark. Admire the historic Taj Mahal Palace dome, take a 45-minute motorboat harbour cruise (or ferry to UNESCO Elephanta Caves), and stroll through Colaba Causeway.'
      },
      {
        name: 'Shree Siddhivinayak Ganpati Mandir (Prabhadevi) & Mahalakshmi Temple',
        tag: 'Mumbai’s Most Revered Spiritual Shrines',
        desc: 'Seek the blessings of Shree Siddhivinayak at Prabhadevi and visit the seaside Mahalakshmi Temple housing the three stone idols of Mahakali, Mahalakshmi, and Mahasaraswati overlooking the Arabian Sea.'
      },
      {
        name: 'Haji Ali Dargah & Bandra–Worli Sea Link (Rajiv Gandhi Sea Link)',
        tag: 'Iconic Coastal Engineering',
        desc: 'Visit the 15th-century Indo-Islamic shrine of Pir Haji Ali Shah Bukhari situated on an islet 500 yards into Worli Bay, then glide across the spectacular 5.6-km cable-stayed Bandra-Worli Sea Link spanning Mahim Bay.'
      },
      {
        name: 'Marine Drive (Queen’s Necklace), Nariman Point & Girgaon Chowpatty',
        tag: '3.6-KM Arabian Sea Promenade',
        desc: 'Enjoy a breezy walk along the Art Deco promenade of Marine Drive, watch the sunset over Back Bay, and treat your group to authentic Mumbai Pav Bhaji, Bhelpuri, and Kulfi at Girgaon Chowpatty.'
      },
      {
        name: 'Chhatrapati Shivaji Maharaj Terminus (CSMT), Museum & Kala Ghoda',
        tag: 'UNESCO World Heritage District',
        desc: 'Photograph the breathtaking Victorian Gothic architecture of CSMT railway station, BMC Headquarters, and Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (formerly Prince of Wales Museum) in the Fort heritage precinct.'
      },
      {
        name: 'Juhu Beach, ISKCON Temple, Bandra Bandstand & Nehru Science Centre',
        tag: 'Suburban Mumbai & Educational Hubs',
        desc: 'Visit the serene marble complex of ISKCON Juhu, walk along Juhu Beach and Bandra Bandstand (near Mannat & Mount Mary Church), or include Nehru Planetarium & Science Centre in Worli for school and family groups.'
      }
    ],
    itinerary: [
      {
        day: '1-Day Complete Pune to Mumbai Darshan Itinerary (6:00 AM – 10:30 PM)',
        plan: '6:00 AM pickup from Pune → Breakfast at Lonavala Expressway Food Mall → Enter Mumbai via Atal Setu (MTHL) or Vashi Creek Bridge → 10:00 AM Gateway of India, Taj View & Harbour Boat Ride → CSMT & Museum photo stop → Marine Drive & Girgaon Chowpatty lunch → Mahalakshmi Temple & Haji Ali Dargah → Shree Siddhivinayak Temple (Prabhadevi) → Drive over Bandra-Worli Sea Link to Bandstand & Juhu Beach / ISKCON → Dinner on Expressway & drop home in Pune by 10:30 PM.'
      }
    ],
    faqs: [
      [
        'What is the fixed package price for a 1-day Pune to Mumbai Darshan trip?',
        'From our official Packages tariff card (covering up to 350 km round trip): 13-Seater Non-AC is ₹9,000 (AC: ₹10,000), 17-Seater Non-AC is ₹10,000 (AC: ₹12,000), Force Urbania is Starting at ₹32/km (₹12,500–₹14,500 pkg), 20-Seater AC is ₹15,000, 32-Seater AC Bus is ₹16,000, and 35/40-Seater AC Bus is ₹21,000.'
      ],
      [
        'Are large tourist buses allowed inside South Mumbai for Gateway of India and Marine Drive?',
        'Mumbai Traffic Police has specific daytime entry timings and designated tourist bus parking zones near Colaba/NCPA, Mahalakshmi, and Dadar. Our Mumbai-route drivers know all permitted corridors and drop/pickup gates so your group walks minimal distances.'
      ],
      [
        'Can we travel via the new Mumbai Trans Harbour Link (Atal Setu) from Pune to South Mumbai?',
        'Yes! Taking the Mumbai-Pune Expressway directly onto Atal Setu (MTHL) from Chirle to Sewri cuts travel time to South Mumbai (Gateway of India & Siddhivinayak) by 45–60 minutes. Atal Setu toll is charged at actuals if you choose this route.'
      ]
    ]
  },

  'ashtavinayak-darshan-bus-hire-pune': {
    slug: 'ashtavinayak-darshan-bus-hire-pune',
    badge: 'Sacred 8 Swayambhu Ganesh Yatra • Starting from Pune',
    h1: 'Ashtavinayak Darshan Bus, Force Urbania & Tempo Traveller Hire from Pune',
    title: 'Ashtavinayak Darshan Bus Hire, Tempo Traveller & Urbania Pune | Shree Travels',
    description: 'Book Ashtavinayak Darshan Bus, Mini Bus, Force Urbania (Starting at ₹32/km), or Tempo Traveller from Pune. Cover all 8 Swayambhu Ganesh temples (Morgaon, Siddhatek, Pali, Mahad, Theur, Lenyadri, Ozar, Ranjangaon) in comfort.',
    keywords: 'Bus hire for Pune to Ashtavinayak, Force Urbania On Rent for Ashtavinayak Darshan, Ashtavinayak Darshan Tempo Traveller Pune, 2 days Ashtavinayak package from Pune by bus, Ashtavinayak tour rental Pune',
    heroImage: '/img/Keyword Based Image/Keyword Based Image-29.jpg',
    galleryImages: [
      { src: '/img/Keyword Based Image/Keyword Based Image-29.jpg', caption: 'Bus Hire for Pune to Ashtavinayak Darshan' },
      { src: '/img/Keyword Based Image/Keyword Based Image-17.jpg', caption: 'Force Urbania On Rent for Ashtavinayak Darshan' },
      { src: '/img/Keyword Based Image/Keyword Based Image-32.jpg', caption: 'Luxury AC Coaches for Family & Society Yatra Groups' },
      { src: '/img/Keyword Based Image/comfort-1.jpeg', caption: 'Senior-Citizen Friendly Reclining Seats & High Headroom' }
    ],
    distance: 'Approx. 650 to 720 km (Complete 8-Temple Shastra Sequence Circuit)',
    duration: '2 Days / 1 Night (Standard) OR 3 Days / 2 Nights (Relaxed Senior Citizen Pace)',
    bestTime: 'Year-Round (Especially Auspicious on Sankashti Chaturthi, Vinayaki & Maghi Ganeshotsav)',
    startingPackage: 'Starting at ₹22/km (Non-AC) | ₹25/km (AC) | ₹32/km (Force Urbania)',
    intro: 'Pune is the spiritual gateway to the sacred Ashtavinayak Yatra—the eight ancient Swayambhu (self-originated) temples of Lord Ganesha situated across Pune, Ahmednagar, and Raigad districts. At Shree Travels, our drivers have completed thousands of Ashtavinayak circuits over the past 30+ years. They know the exact Shastra-recommended sequence, temple aarti timings, clean vegetarian meal stops, and comfortable bhakta niwas / hotel halts at Ozar, Lenyadri, or Lonavala.',
    localPlaces: [
      {
        name: '1. Shri Mayureshwar Mandir (Morgaon, Baramati Taluka – 65 km)',
        tag: 'Adya Peeth • Starting & Concluding Shrine',
        desc: 'Situated on the banks of the Karha River, Morgaon is the foremost (Adya) peeth of the Ashtavinayak circuit where Lord Ganesha slayed the demon Sindhu riding a peacock (Mayur). By tradition, the yatra begins here and concludes with a final darshan at Morgaon.'
      },
      {
        name: '2. Shri Siddhivinayak Mandir (Siddhatek, Karjat Taluka – Ahmednagar)',
        tag: 'Right-Trunked Swayambhu Idol on Bhima River',
        desc: 'Located peacefully on Siddhatek hillock beside the Bhima River, this is the only Ashtavinayak idol with its trunk turned to the right (UjviSond), believed to have granted Siddhi to Lord Vishnu before defeating Madhu and Kaitabha.'
      },
      {
        name: '3. Shri Ballaleshwar Mandir (Pali, Sudhagad Taluka – Raigad)',
        tag: 'Named After Devotee Ballal',
        desc: 'Nestled between Sarasgad Fort and the Amba River in Raigad district, Ballaleshwar is the only Ganesha temple in the world named after a devotee—the young boy Ballal whose unwavering devotion brought Lord Ganesha to Pali dressed as a Brahmin.'
      },
      {
        name: '4. Shri Varadavinayak Mandir (Mahad, Khalapur near Khopoli/Lonavala)',
        tag: 'Eternal Flame Since 1892 • Direct Sanctum Access',
        desc: 'Located just off the Mumbai-Pune highway near Khopoli, Varadavinayak fulfills the wishes (Varada) of devotees. Its famous oil lamp (Nandadeep) has been burning continuously since 1892, and devotees can offer prayers close to the idol.'
      },
      {
        name: '5. Shri Chintamani Mandir (Theur, Haveli Taluka – 25 km from Pune)',
        tag: 'Peace of Mind • Peshwa Madhavrao’s Revered Shrine',
        desc: 'Surrounded on three sides by the Mula-Mutha River, Theur is where Lord Ganesha retrieved the wish-fulfilling Chintamani jewel for Sage Kapila and calmed the restless mind of Lord Brahma.'
      },
      {
        name: '6. Shri Girijatmaj Mandir (Lenyadri, Junnar Taluka – Pune)',
        tag: 'Buddhist Cave Mountain Shrine (307 Steps)',
        desc: 'Carved into a single monolithic rock-cut cave on Lenyadri mountain overlooking the Kukadi valley and Shivneri Fort, Girijatmaj celebrates the childhood form of Ganesha nurtured by Goddess Parvati (Girija). (Doli/Palkhi facility available at base for seniors).'
      },
      {
        name: '7. Shri Vighneshwar Mandir (Ozar, Junnar Taluka – Pune)',
        tag: 'Golden Dome & Deepmala Architecture',
        desc: 'Situated on the banks of the Kukadi River with a gleaming gold-plated Shikhar and two tall stone lamp towers, Ozar Vighneshwar removes all obstacles (Vighna). Its clean, spacious Bhakta Niwas makes Ozar the best overnight stay halt.'
      },
      {
        name: '8. Shri Mahaganapati Mandir (Ranjangaon, Shirur – Pune-Nagar Highway)',
        tag: 'Powerful Mahotkat Form • East Entrance',
        desc: 'Located 50 km from Pune on the Ahilyanagar highway, Ranjangaon Mahaganapati was worshipped by Lord Shiva before conquering the demon Tripurasura. During Dakshinayan, the morning sunrays fall directly upon the Swayambhu idol.'
      }
    ],
    itinerary: [
      {
        day: 'Day 1: Pune → Morgaon → Siddhatek → Theur → Ranjangaon → Ozar (Overnight Stay)',
        plan: '5:30 AM departure from Pune → 1. Morgaon Mayureshwar Darshan & breakfast → 2. Siddhatek Siddhivinayak → 3. Theur Chintamani & Mahaprasad/Lunch → 4. Ranjangaon Mahaganapati → Drive via Alephata/Narayangaon to 5. Ozar Vighneshwar for evening Aarti & comfortable overnight stay at Ozar.'
      },
      {
        day: 'Day 2: Lenyadri → Mahad → Pali → Pune Return (Optional Prati Balaji / Jejuri)',
        plan: '6:30 AM morning darshan at 6. Lenyadri Girijatmaj Cave Temple → Drive via Chakan & Talegaon down Bor Ghat to 7. Mahad Varadavinayak → Lunch halt → 8. Pali Ballaleshwar Darshan → Return via Tamhini Ghat OR Express Highway to Pune by 9:30 PM.'
      }
    ],
    faqs: [
      [
        'What is the total cost to hire a Tempo Traveller, Force Urbania, or Bus for the 2-Day Ashtavinayak Darshan?',
        'The complete 8-temple Ashtavinayak circuit from Pune covers approximately 650–700 km over 2 days. At our official per-km rates, a 13-Seater Non-AC Tempo Traveller starts at ₹22/km (AC: ₹25/km), a 17-Seater AC Tempo Traveller is Starting at ₹25/km, a Luxury Force Urbania is Starting at ₹32/km, a 20-Seater Mini Bus is Starting at ₹28/km, and a 32-Seater Bus is Starting at ₹45/km, plus actual toll, parking, and driver allowance.'
      ],
      [
        'Can we include Jejuri Khandoba and Ketkawale Prati Balaji on the Morgaon day?',
        'Yes! Both Jejuri (Khandoba Gad) and Narayanpur/Ketkawale (Prati Balaji Mandir) lie directly along the Pune–Saswad–Morgaon corridor and can be easily added if your group opts for a 2.5 or 3-day itinerary.'
      ],
      [
        'Is Lenyadri accessible for senior citizens in our group?',
        'Lenyadri is the only Ashtavinayak temple with 307 stone steps; however, registered Doli (Palkhi) carriers are readily available at the base parking lot so senior citizens can comfortably take darshan without climbing.'
      ]
    ]
  },

  'bhimashankar-5-jyotirlinga-darshan-pune': {
    slug: 'bhimashankar-5-jyotirlinga-darshan-pune',
    badge: 'Sacred Shiva Circuit • Panch Jyotirlinga of Maharashtra',
    h1: 'Bhimashankar & 5 Jyotirlinga Darshan Bus Hire from Pune – Complete Pilgrimage Guide',
    title: 'Pune to Bhimashankar & 5 Jyotirlinga Darshan Bus Hire | Shree Travels',
    description: 'Book a Bus, Mini Bus, Force Urbania (Starting at ₹32/km), or Tempo Traveller from Pune for 1-Day Bhimashankar Darshan or the 4-Day Maharashtra 5 Jyotirlinga Tour (Bhimashankar, Trimbakeshwar, Grishneshwar, Aundha Nagnath, Parli Vaijnath).',
    keywords: 'Pune to Bhimashankar Jyotirlinga Mini Bus Hire in Pune, Pune to 5 Jyotirlinga Darshan Bus Hire, Pune to Bhimashankar bus on rent, Panch Jyotirlinga Maharashtra tour package from Pune, 12 Jyotirlinga Darshan Tour Package from Pune',
    heroImage: '/img/Keyword Based Image/Keyword Based Image-63.jpg',
    galleryImages: [
      { src: '/img/Keyword Based Image/Keyword Based Image-63.jpg', caption: 'Pune to 5 Jyotirlinga Darshan Bus Hire' },
      { src: '/img/Keyword Based Image/Keyword Based Image-30.jpg', caption: 'Pune to Bhimashankar Bus On Rent in Pune' },
      { src: '/img/Keyword Based Image/Keyword Based Image-18.jpg', caption: 'Bhimashankar Jyotirlinga Mini Bus Hire' },
      { src: '/img/Keyword Based Image/Keyword Based Image-35.jpg', caption: '12 Jyotirlinga Darshan Tour Packages Available' }
    ],
    distance: '230 km (1-Day Bhimashankar Round Trip) / ~1,350 km (Complete 5 Jyotirlinga Circuit)',
    duration: '1 Day (Bhimashankar Only) OR 3 to 4 Days (All 5 Maharashtra Jyotirlingas)',
    bestTime: 'Year-Round (Shravan Maas, Mahashivratri, Kartik Purnima & Winter Months)',
    startingPackage: 'From ₹7,200 (1-Day Bhimashankar Non-AC) / ₹9,600 (Force Urbania Starting at ₹32/km)',
    intro: 'Maharashtra is blessed with five of India’s twelve sacred Swayambhu Jyotirlingas—known reveredly as the "Panch Jyotirlinga of Maharashtra." Whether your family wishes to take a peaceful 1-day darshan trip to Shri Bhimashankar in the Sahyadri hills (just 110 km from Pune) or embark on the complete 4-day spiritual circuit covering Bhimashankar, Trimbakeshwar, Grishneshwar, Aundha Nagnath, and Parli Vaijnath (along with Shirdi and Shanishingnapur), Shree Travels provides smooth-suspension vehicles and deeply experienced pilgrimage drivers.',
    localPlaces: [
      {
        name: '1. Shri Bhimashankar Jyotirlinga (Khed / Ambegaon, Pune – 110 km)',
        tag: 'Sahyadri Wildlife Sanctuary & Origin of Bhima River',
        desc: 'Built in ancient Nagara style out of black basalt rock by Nana Phadnavis in the 18th century, Bhimashankar sits amidst misty evergreen forests at 3,250 feet. Local sights include the Mokshakund Tirtha (origin of the Bhima River), Kamalaja Devi Mandir, Hanuman Lake, Gupt Bhimashankar forest trail, and Bombay Point.'
      },
      {
        name: '2. Shri Trimbakeshwar Jyotirlinga (Nashik District – 235 km from Pune)',
        tag: 'Origin of Sacred Godavari River & Three-Faced Lingam',
        desc: 'Located at the foothills of Brahmagiri Mountain near Nashik, Trimbakeshwar is unique because its Jyotirlinga features three small concave faces embodying Lord Brahma, Lord Vishnu, and Lord Shiva. Local sightseeing includes Kusavarta Kund, Nivruttinath Maharaj Samadhi, Anjaneri (birthplace of Lord Hanuman), and Nashik Panchavati (Kalaram Mandir & Tapovan).'
      },
      {
        name: '3. Shri Grishneshwar Jyotirlinga & Ellora Caves (Verul, Chhatrapati Sambhajinagar)',
        tag: '12th Jyotirlinga & UNESCO Kailasa Rock Temple',
        desc: 'Rebuilt in red stone by Rani Ahilyabai Holkar of Indore, Grishneshwar is the 12th Jyotirlinga mentioned in the Shiva Purana. Right beside the temple stand the world-famous UNESCO Ellora Caves (featuring Cave 16, the monolithic Kailasa Shiva Temple), Bhadra Maruti Mandir at Khuldabad, and Daulatabad (Devgiri) Fort.'
      },
      {
        name: '4. Shri Aundha Nagnath Jyotirlinga (Hingoli District, Marathwada)',
        tag: 'Underground Garbhagriha & Saint Namdev Miracle Site',
        desc: 'Surrounded by dense forests in Hingoli district, Aundha Nagnath is revered as the 8th (Darukavan) Jyotirlinga. Devotees descend into a sacred underground sanctum for darshan, and the temple’s Nandi sits behind the shrine—marking the miracle where the temple rotated in response to Saint Namdev’s kirtan.'
      },
      {
        name: '5. Shri Parli Vaijnath Jyotirlinga (Beed District, Marathwada)',
        tag: 'Amrit-Infused Lingam & Direct Sparsh Darshan',
        desc: 'Positioned on Meru Parvat hill in Parli, this fortified stone temple renovated by Rani Ahilyabai Holkar is surrounded by medicinal herbs where Dhanvantari hid the nectar of immortality (Amrit). It is one of the rare Jyotirlingas where devotees can perform direct Sparsh Darshan, and is easily paired with Ambajogai Yogeshwari Devi.'
      },
      {
        name: 'En-Route Bonus Shrines: Shirdi Sai Baba, Shanishingnapur & Devgad Dattatreya',
        tag: 'Seamless Circuit Add-Ons',
        desc: 'Because the Trimbakeshwar-to-Grishneshwar highway passes directly through Kopargaon, Shirdi, and Nevasa, your group can comfortably take darshan at Shirdi Sai Baba Samadhi Mandir, Devgad Datta Mandir, and Shri Shanishingnapur without extra detours.'
      }
    ],
    itinerary: [
      {
        day: 'Option 1: 1-Day Pune to Bhimashankar Jyotirlinga Darshan (6:00 AM – 8:00 PM)',
        plan: '6:00 AM doorstep pickup in Pune → Drive via Manchar & Dimbhe Dam scenic ghat road → 9:30 AM Arrival at Bhimashankar, Abhishekam & Darshan, Kamalaja Mata Mandir & Gupt Bhimashankar walk → Lunch halt at Manchar/Ghodegaon → Optional stop at Ozhar/Lenyadri OR Alandi Sant Dnyaneshwar Samadhi → Return to Pune by 8:00 PM.'
      },
      {
        day: 'Option 2: 4-Day Complete Maharashtra 5 Jyotirlinga Darshan Yatra',
        plan: 'Day 1: Pune → Bhimashankar Jyotirlinga → Drive via Sangamner to Trimbakeshwar (Nashik) for evening darshan & stay. Day 2: Morning Trimbakeshwar & Panchavati → Shirdi Sai Baba → Grishneshwar Jyotirlinga & Ellora Caves (Stay at Sambhajinagar). Day 3: Sambhajinagar → Aundha Nagnath Jyotirlinga → Parli Vaijnath Jyotirlinga (Stay at Parli/Ambajogai). Day 4: Ambajogai Yogeshwari Devi / Shanishingnapur → Return to Pune.'
      }
    ],
    faqs: [
      [
        'What is the cost of hiring a Mini Bus or Tempo Traveller from Pune to Bhimashankar for 1 day?',
        'Pune to Bhimashankar and back is approximately 230 km (covered under our 300 km daily outstation slab). A 13-Seater Non-AC Tempo Traveller costs ₹7,200 (AC: ₹8,100), a 17-Seater Non-AC costs ₹7,500 (AC: ₹9,600), a Force Urbania costs ₹9,600 (Starting at ₹32/km), and a 20-Seater Mini Bus costs ₹8,100–₹10,200.'
      ],
      [
        'How many kilometers is the complete 5 Jyotirlinga tour from Pune?',
        'The complete 5 Jyotirlinga circuit (Pune → Bhimashankar → Trimbakeshwar → Shirdi → Grishneshwar → Aundha Nagnath → Parli Vaijnath → Pune) is approximately 1,300 to 1,420 km and is comfortably completed in 4 days (minimum 300 km/day billing).'
      ],
      [
        'Do you also provide buses and Force Urbania for all-India 12 Jyotirlinga or Ujjain Mahakaleshwar tours?',
        'Yes! We regularly operate multi-day Force Urbania and Luxury Bus packages from Pune to Ujjain Mahakaleshwar & Omkareshwar (Madhya Pradesh), Somnath & Nageshwar (Gujarat), Mallikarjuna Srisailam, and Rameshwaram.'
      ]
    ]
  },

  'sade-teen-shakti-peeth-darshan-pune': {
    slug: 'sade-teen-shakti-peeth-darshan-pune',
    badge: 'Sacred Devi Yatra • Kolhapur, Tuljapur, Mahur & Vani',
    h1: 'Pune to Sade Teen Shakti Peeth Bus On Rent – Complete 3.5 Shakti Peeth Darshan Tour',
    title: 'Pune Sade Teen Shakti Peeth Bus On Rent, Tempo Traveller & Urbania | Shree Travels',
    description: 'Book a Bus, Mini Bus, Force Urbania (Starting at ₹32/km), or Tempo Traveller from Pune for the sacred Sade Teen (3.5) Shakti Peeth Darshan: Kolhapur Mahalakshmi, Tuljapur Tulja Bhavani, Mahur Renuka Mata & Vani Saptashrungi.',
    keywords: 'Pune Sade Teen Shakti Peeth Bus on Rent, Sade Teen Shakti Peeth tour package from Pune, Kolhapur Tuljapur Mahur Vani bus hire Pune, Tempo Traveller for Shakti Peeth Yatra Maharashtra',
    heroImage: '/img/Keyword Based Image/Keyword Based Image-25.jpg',
    galleryImages: [
      { src: '/img/Keyword Based Image/Keyword Based Image-25.jpg', caption: 'Pune Sade Teen Shakti Peeth Bus On Rent' },
      { src: '/img/Keyword Based Image/Keyword Based Image-11.jpg', caption: '32 to 50 Seater Luxury AC Coaches for Yatra Groups' },
      { src: '/img/Keyword Based Image/Keyword Based Image-01.jpg', caption: '13 to 26 Seater Tempo Travellers for Family Pilgrimages' },
      { src: '/img/Keyword Based Image/comfort-3.jpeg', caption: 'Spacious Pushback Recliner Seats for Long-Distance Comfort' }
    ],
    distance: 'Approx. 1,550 to 1,700 km (Complete 4-Shrine Maharashtra Circuit)',
    duration: '4 to 5 Days (Covering Kolhapur, Tuljapur, Mahurgad & Saptashrungi Vani)',
    bestTime: 'Year-Round (Chaitra Navratri, Sharadiya Navratri, Kojagiri & Diwali-to-Summer Months)',
    startingPackage: 'Starting at ₹22/km (Non-AC) | ₹25/km (AC) | ₹32/km (Urbania) | ₹45/km (32-Seater Bus)',
    intro: 'In Maharashtra’s sacred tradition, the "Sade Teen Shakti Peeth" (Three and a Half Shakti Peethas) represent the supreme cosmic energy of Adi Shakti—embodying Ohm (ॐ) through three full peethas (A-kara, U-kara, Ma-kara) and one half-peeth (Ardha-matra). Completing this yatra with your family or mandal is a deeply fulfilling spiritual milestone. Shree Travels provides reliable, long-distance luxury buses, Tempo Travellers, and Force Urbania vans with courteous drivers who know the exact highway connections, ropeway timings, and temple lodging across Western Maharashtra, Marathwada, Vidarbha border, and Khandesh.',
    localPlaces: [
      {
        name: '1. Shri Ambabai / Mahalakshmi Mandir, Kolhapur (1st Full Peeth – Peeth of Prosperity)',
        tag: 'Dakshin Kashi • 235 km South of Pune on NH-48',
        desc: 'Built in the 7th century by the Chalukya dynasty in Hemadpanthi black stone, the Karveer Nivasini Mahalakshmi Temple houses a 40-kg gemstone-embedded Swayambhu idol where the sunrays touch the Goddess’s feet during the Kirnotsav festival. Local places to visit include Jyotiba Dongar, Panhala Fort, Rankala Lake, and Kaneri Math.'
      },
      {
        name: '2. Shri Tulja Bhavani Mandir, Tuljapur (2nd Full Peeth – Kuldaivat of Maharashtra)',
        tag: 'Dharashiv (Osmanabad) District • Yamunachala Hill',
        desc: 'Revered as the family deity of Chhatrapati Shivaji Maharaj (who received the sacred Bhavani Talwar here), the 12th-century Tulja Bhavani Temple features the sacred Kallol Tirtha (combining 108 holy waters), Gomukh Tirtha, the wish-answering Chintamani stone, and Matangi Devi shrine.'
      },
      {
        name: '3. Shri Renuka Mata Mandir, Mahurgad (3rd Full Peeth – Maternal Peeth)',
        tag: 'Nanded District • Scenic Sahyadri Hilltop Fort',
        desc: 'Perched on a lush hillock in Nanded district, Mahurgad is the sacred birthplace of Lord Parshuram and Lord Dattatreya. Worship the iconic Tandul-shaped मुख (face) of Renuka Devi, and visit the surrounding shrines of Shri Datta Shikhar, Mata Anasuya Mandir, Devdeveshwar, and Matru Tirtha.'
      },
      {
        name: '4. Shri Saptashrungi Nivasini Devi, Vani (Half / Ardha Peeth – 7 Mountain Peaks)',
        tag: 'Nashik District • 8-Foot Rock-Cliff Idol & Funicular Ropeway',
        desc: 'Situated 65 km from Nashik amidst seven dramatic peaks of the Sahyadri range, the 18-armed Mahishasuramardini idol of Saptashrungi Devi is carved directly into a sheer natural rock cliff face. A modern air-conditioned funicular trolley ropeway makes darshan effortless for senior citizens and children.'
      },
      {
        name: 'Bonus Pilgrimage Stops: Pandharpur Vitthal Mandir & Akkalkot Swami Samarth',
        tag: 'Between Kolhapur & Tuljapur',
        desc: 'As you travel east from Kolhapur towards Tuljapur via Sangola and Solapur, your group can seamlessly take darshan of Lord Vitthal-Rukmini on the banks of the Chandrabhaga River in Pandharpur and Shri Swami Samarth Maharaj Vatavruksha Mandir in Akkalkot.'
      },
      {
        name: 'Bonus Return Stops: Shirdi Sai Baba & Nashik Panchavati',
        tag: 'Between Vani Saptashrungi & Pune',
        desc: 'On the final leg returning from Vani (Nashik) to Pune down NH-60, enjoy a peaceful halt at Nashik Panchavati (Kalaram Mandir & Sita Gufa) and Shirdi Sai Baba Samadhi Mandir.'
      }
    ],
    itinerary: [
      {
        day: 'Day 1: Pune → Jyotiba Dongar → Kolhapur Ambabai (Mahalakshmi) Darshan → Pandharpur',
        plan: 'Early 5:00 AM departure from Pune via Satara & Karad. Morning darshan at Shree Jyotiba Mandir (Wadi Ratnagiri) and Karveer Nivasini Ambabai Mandir in Kolhapur. Evening drive to Pandharpur for Vitthal-Rukmini Darshan & overnight stay.'
      },
      {
        day: 'Day 2: Pandharpur → Akkalkot (Optional) → Tuljapur Tulja Bhavani Darshan → Nanded/Latur Stay',
        plan: 'Morning drive to Tuljapur for Kallol Tirtha bath and Shri Tulja Bhavani Darshan. Afternoon proceed via Latur/Nanded highway towards Nanded (visit Hazur Sahib Gurudwara if time permits) for overnight stay.'
      },
      {
        day: 'Day 3: Nanded → Mahurgad (Renuka Mata, Datta Shikhar & Anasuya Mata) → Sambhajinagar Stay',
        plan: 'Early morning drive to Mahurgad for Shri Renuka Devi, Lord Dattatreya Shikhar, and Anasuya Mata Darshan. Afternoon drive via Washim/Jalna (Samruddhi Mahamarg) to Chhatrapati Sambhajinagar for dinner and rest.'
      },
      {
        day: 'Day 4: Sambhajinagar → Vani Saptashrungi Devi (via Ropeway) → Nashik / Shirdi → Pune',
        plan: 'Morning drive to Vani (Nashik) for Saptashrungi Devi Darshan via the funicular trolley ropeway. Afternoon return via Nashik/Sangamner highway, reaching Pune comfortably by night (or extend to Day 5 for Shirdi & Trimbakeshwar).'
      }
    ],
    faqs: [
      [
        'How many days are required for the complete Sade Teen Shakti Peeth Yatra from Pune?',
        'The complete 4-temple circuit (Kolhapur, Tuljapur, Mahurgad, and Saptashrungi Vani) covers roughly 1,550 to 1,700 km and requires 4 days / 3 nights at a steady pace, or 5 days / 4 nights if you also include Pandharpur, Akkalkot, and Shirdi.'
      ],
      [
        'Are there ropeway or lift facilities at Mahurgad and Saptashrungi Vani for elderly family members?',
        'Yes! Saptashrungi Gad (Vani) has a world-class funicular trolley ropeway that takes devotees right to the upper temple plaza in 3 minutes. At Mahurgad, vehicles go high up the ghat road to the upper parking lot, leaving fewer steps (with Doli/Palkhi support available).'
      ],
      [
        'Which vehicle is best for a 12 to 35 member family or society group for this 5-day yatra?',
        'Because this circuit covers ~1,600 km across Maharashtra, we highly recommend our pushback AC 13/17-Seater Tempo Traveller (Starting at ₹25/km), Luxury Force Urbania with individual AC vents (Starting at ₹32/km), or 32/35-Seater AC Pushback Coach (Starting at ₹45–50/km) for maximum legroom and fatigue-free travel.'
      ]
    ]
  }
};

// Official package rates from Packages.jsx for the comparison table on every Tour page
const OFFICIAL_PACKAGE_FARES = [
  { vehicle: '13 Seater Tempo Traveller (Non-AC)', perKm: '₹22/km', pkg300: '₹6,600', local880: '₹5,000', mumbai: '₹10,000', mahabaleshwar: '₹9,000' },
  { vehicle: '13 Seater Tempo Traveller (AC)', perKm: '₹25/km', pkg300: '₹7,500', local880: '₹5,500', mumbai: '₹11,000', mahabaleshwar: '₹10,000' },
  { vehicle: '17 Seater Tempo Traveller (Non-AC)', perKm: '₹22/km', pkg300: '₹6,600', local880: '₹5,000', mumbai: '₹10,000', mahabaleshwar: '₹9,000' },
  { vehicle: '17 Seater Tempo Traveller (AC)', perKm: '₹25/km', pkg300: '₹7,500', local880: '₹5,500', mumbai: '₹11,000', mahabaleshwar: '₹10,000' },
  { vehicle: '20 Seater Tempo Traveller (Non-AC)', perKm: '₹25/km', pkg300: '₹7,500', local880: '₹6,000', mumbai: '₹11,000', mahabaleshwar: '₹10,000' },
  { vehicle: '20 Seater Tempo Traveller (AC)', perKm: '₹28/km', pkg300: '₹8,400', local880: '₹6,500', mumbai: '₹13,000', mahabaleshwar: '₹12,000' },
  { vehicle: '26 Seater Tempo Traveller (Non-AC)', perKm: '₹32/km', pkg300: '₹9,600', local880: '₹7,000', mumbai: '₹14,000', mahabaleshwar: '₹12,000' },
  { vehicle: '26 Seater Tempo Traveller (AC)', perKm: '₹37/km', pkg300: '₹11,100', local880: '₹8,000', mumbai: '₹17,000', mahabaleshwar: '₹14,000' },
  { vehicle: 'Force Urbania (10, 13 & 17 Seater Luxury AC)', perKm: '₹32/km (Flat)', pkg300: '₹9,600', local880: '₹8,000', mumbai: '₹14,000', mahabaleshwar: '₹12,000' },
  { vehicle: '24 Seater Mini Bus (AC)', perKm: '₹40/km', pkg300: '₹12,000', local880: '₹7,000', mumbai: '₹18,000', mahabaleshwar: '₹13,000' },
  { vehicle: '29 Seater Bus (AC)', perKm: '₹45/km', pkg300: '₹13,500', local880: '₹8,000', mumbai: '₹18,000', mahabaleshwar: '₹14,000' },
  { vehicle: '30 / 32 Seater Bus (Non-AC)', perKm: '₹35/km', pkg300: '₹10,500', local880: '₹8,000', mumbai: '₹15,000', mahabaleshwar: '₹13,000' },
  { vehicle: '32 Seater Luxury Bus (AC)', perKm: '₹50/km', pkg300: '₹15,000', local880: '₹10,000', mumbai: '₹22,000', mahabaleshwar: '₹16,000' },
  { vehicle: '35 Seater Bus (Non-AC / AC Benz)', perKm: '₹38 / ₹50/km', pkg300: '₹11,400 / ₹15,000', local880: '₹8,000 / ₹10,000', mumbai: '₹17,000 / ₹22,000', mahabaleshwar: '₹14,000 / ₹16,500' },
  { vehicle: '45 / 49 Seater Bus (Non-AC)', perKm: '₹50/km', pkg300: '₹15,000', local880: '₹10,000', mumbai: '₹20,000', mahabaleshwar: '₹16,000' },
  { vehicle: '53 Seater Volvo / Benz Special Bus', perKm: '₹80/km', pkg300: '₹24,000', local880: '₹20,000', mumbai: '₹33,000', mahabaleshwar: '₹25,000' }
];

const TourPackagePage = ({ tourSlug }) => {
  const params = useParams();
  const location = useLocation();
  const resolvedSlug = tourSlug || params.slug || location.pathname.replace(/^\/+/, '');
  const tour = TOUR_PACKAGES_DATA[resolvedSlug] || TOUR_PACKAGES_DATA['pune-to-mahabaleshwar-bus-hire'];

  const otherTours = Object.values(TOUR_PACKAGES_DATA).filter(t => t.slug !== tour.slug);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: tour.h1,
      description: tour.description,
      image: `https://shreetravels.in${encodeURI(tour.heroImage)}`,
      serviceType: 'Outstation Tour Package & Chauffeur-Driven Vehicle Rental',
      provider: {
        '@type': 'AutoRental',
        name: 'Shree Travels',
        url: 'https://shreetravels.in',
        telephone: '+91-7620411277'
      },
      areaServed: ['Pune', 'Pimpri-Chinchwad', 'Mumbai', 'Maharashtra'],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '7200',
        highPrice: '27000',
        offerCount: '11',
        availability: 'https://schema.org/InStock',
        url: `https://shreetravels.in/${tour.slug}`
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: tour.faqs.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a }
      }))
    }
  ];

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100%' }}>
      <SEO
        title={tour.title}
        description={tour.description}
        keywords={tour.keywords}
        path={`/${tour.slug}`}
        image={`https://shreetravels.in${encodeURI(tour.heroImage)}`}
        schema={schema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services & Tours', url: '/service' },
          { name: tour.h1.split('–')[0].trim(), url: `/${tour.slug}` }
        ]}
      />

      {/* 1. Hero Section with Destination Image */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
        <div className="container py-3">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span
                className="badge rounded-pill px-3 py-2 mb-3 fw-semibold d-inline-flex align-items-center"
                style={{ backgroundColor: 'rgba(255, 119, 0, 0.18)', color: '#ff9933', border: '1px solid rgba(255, 119, 0, 0.35)' }}
              >
                <FaCompass className="me-2" /> {tour.badge}
              </span>
              <h1 className="display-6 fw-bold text-white mb-3">{tour.h1}</h1>
              <p className="lead text-light opacity-90 mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
                {tour.intro}
              </p>

              <div className="d-flex flex-wrap gap-2 gap-sm-3 mb-4">
                <a
                  href="tel:+917620411277"
                  className="btn btn-lg text-white fw-bold px-3 px-sm-4 py-2 py-sm-3 rounded-pill shadow-sm d-inline-flex align-items-center"
                  style={{ backgroundColor: '#ff7700' }}
                >
                  <FaPhoneAlt className="me-1 me-sm-2" />
                  <span className="d-none d-sm-inline">Call: +91 76204 11277</span>
                  <span className="d-inline d-sm-none">Call Now</span>
                </a>
                <a
                  href={`https://wa.me/917875774499?text=${encodeURIComponent(`Hello Shree Travels, I want a quote for ${tour.h1.split('–')[0].trim()}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg fw-bold px-3 px-sm-4 py-2 py-sm-3 rounded-pill shadow-sm d-inline-flex align-items-center text-white"
                  style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                >
                  <FaWhatsapp className="me-1 me-sm-2" size={19} />
                  <span className="d-none d-sm-inline">WhatsApp: +91 78757 74499</span>
                  <span className="d-inline d-sm-none">WhatsApp</span>
                </a>
                <button
                  type="button"
                  className="btn btn-lg btn-outline-light fw-bold px-3 px-sm-4 py-2 py-sm-3 rounded-pill d-inline-flex align-items-center open-booking-popup-btn"
                  data-vehicle={tour.h1.split('–')[0].trim()}
                  data-place={tour.h1.split('–')[0].trim()}
                  data-mode="enquiry"
                >
                  Instant Enquiry <FaArrowRight className="ms-1 ms-sm-2" size={13} />
                </button>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="rounded-4 overflow-hidden shadow-lg border border-secondary border-opacity-25 bg-dark">
                <div className="position-relative overflow-hidden">
                  <img
                    src={tour.heroImage}
                    alt={tour.h1}
                    className="img-fluid w-100 d-block"
                  />
                  {tour.heroImage && tour.heroImage.includes('Keyword Based Image') && (
                    <div className="fleet-verified-tag">
                      <div className="fleet-tag-pill-top">
                        <FaStar className="me-1 text-warning" size={9} />
                        <span>OFFICIAL TOUR PACKAGE</span>
                      </div>
                      <div className="fleet-tag-title-bottom">
                        <FaMapMarkerAlt className="me-1 text-warning flex-shrink-0" size={11} />
                        <span className="text-truncate">
                          {tour.h1.split('–')[0].split('-')[0].trim().toUpperCase()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-3 bg-white text-dark d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <div>
                    <span className="small text-muted d-block">Official Package Tariff Starts At</span>
                    <strong className="fs-6" style={{ color: '#ff7700' }}>{tour.startingPackage}</strong>
                  </div>
                  <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-semibold">
                    <FaShieldAlt className="me-1" /> Verified Route Chauffeurs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Metric Quick Route Snapshot Bar */}
          <div className="row g-3 mt-4 pt-4 border-top border-secondary border-opacity-25">
            <div className="col-sm-6 col-lg-3">
              <div className="p-3 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                <div className="d-flex align-items-center mb-1" style={{ color: '#ff9933' }}>
                  <FaRoad className="me-2" /> <span className="small fw-bold text-uppercase">Distance</span>
                </div>
                <p className="small text-white mb-0 fw-semibold">{tour.distance}</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="p-3 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                <div className="d-flex align-items-center mb-1" style={{ color: '#ff9933' }}>
                  <FaClock className="me-2" /> <span className="small fw-bold text-uppercase">Travel Duration</span>
                </div>
                <p className="small text-white mb-0 fw-semibold">{tour.duration}</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="p-3 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                <div className="d-flex align-items-center mb-1" style={{ color: '#ff9933' }}>
                  <FaCalendarAlt className="me-2" /> <span className="small fw-bold text-uppercase">Best Season</span>
                </div>
                <p className="small text-white mb-0 fw-semibold">{tour.bestTime}</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="p-3 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                <div className="d-flex align-items-center mb-1" style={{ color: '#ff9933' }}>
                  <FaBus className="me-2" /> <span className="small fw-bold text-uppercase">Available Fleet</span>
                </div>
                <p className="small text-white mb-0 fw-semibold">9–15 Winger, 13–26 Traveller, Urbania &amp; 32–50 Bus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Local Places to Tour & Sightseeing Guide */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-3">
          <div className="text-center mb-5">
            <span className="badge rounded-pill px-3 py-2 mb-2 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
              Complete Local Sightseeing Guide
            </span>
            <h2 className="fw-bold h3 mb-2">
              Top Local Places to Visit on Your <span style={{ color: '#ff7700' }}>{tour.h1.split('–')[0].replace('Pune to ', '').trim()}</span>
            </h2>
            <p className="text-muted mx-auto mb-0" style={{ maxWidth: '760px' }}>
              Our experienced route chauffeurs cover all major local temples, forts, beaches, and viewpoints so your group never misses a landmark.
            </p>
          </div>

          <div className="row g-4">
            {tour.localPlaces.map((place, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 border-0 shadow-sm p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3 gap-2">
                      <span
                        className="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold flex-shrink-0"
                        style={{ width: '42px', height: '42px', backgroundColor: '#fff3e6', color: '#ff7700' }}
                      >
                        0{index + 1}
                      </span>
                      <span className="badge rounded-pill px-3 py-1 text-wrap text-end" style={{ backgroundColor: '#f8fafc', color: '#0f172a', border: '1px solid #e2e8f0', fontSize: '0.75rem' }}>
                        {place.tag}
                      </span>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">{place.name}</h3>
                    <p className="text-muted small mb-0" style={{ lineHeight: '1.75' }}>
                      {place.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Suggested Humanized Itinerary & Route Plan */}
      <section className="py-5 bg-light border-bottom">
        <div className="container py-3">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <span className="badge rounded-pill px-3 py-2 mb-2 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
                Recommended Trip Plan
              </span>
              <h2 className="fw-bold h3 mb-4">
                Suggested Itinerary &amp; <span style={{ color: '#ff7700' }}>Route Schedule</span>
              </h2>

              <div className="d-flex flex-column gap-3">
                {tour.itinerary.map((item, idx) => (
                  <div className="bg-white p-4 rounded-4 shadow-sm border" key={idx} style={{ borderLeft: '4px solid #ff7700' }}>
                    <h3 className="h6 fw-bold mb-2" style={{ color: '#0f172a' }}>
                      <FaMapMarkerAlt className="me-2" style={{ color: '#ff7700' }} />
                      {item.day}
                    </h3>
                    <p className="text-muted small mb-0" style={{ lineHeight: '1.75' }}>
                      {item.plan}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-5">
              <div className="p-4 p-md-5 rounded-4 text-white shadow-sm" style={{ backgroundColor: '#0f172a' }}>
                <h3 className="h4 fw-bold text-white mb-3">Why Book Your Tour With Shree Travels?</h3>
                <ul className="list-unstyled mb-4" style={{ lineHeight: '1.9' }}>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1 flex-shrink-0" style={{ color: '#ff7700' }} />
                    <span className="small text-light"><strong>Doorstep Pickup Across Pune &amp; PCMC:</strong> Kothrud, Hinjewadi, Wakad, Baner, Kharadi, Hadapsar, Nigdi &amp; Bhosari.</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1 flex-shrink-0" style={{ color: '#ff7700' }} />
                    <span className="small text-light"><strong>100% Flexible Sightseeing Halts:</strong> Stop at clean family restaurants, temples, and viewpoints at your own pace.</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1 flex-shrink-0" style={{ color: '#ff7700' }} />
                    <span className="small text-light"><strong>Ghat &amp; Highway Certified Chauffeurs:</strong> Over 10+ years of experience on Maharashtra ghats and coastal roads.</span>
                  </li>
                  <li className="mb-0 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1 flex-shrink-0" style={{ color: '#ff7700' }} />
                    <span className="small text-light"><strong>24/7 Pune Dispatch &amp; Support Desk:</strong> Call +91 76204 11277 or WhatsApp +91 78757 74499 anytime.</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn w-100 py-3 rounded-pill fw-bold text-white shadow-sm d-inline-flex align-items-center justify-content-center open-booking-popup-btn"
                  data-vehicle="17 Seater Force Urbania (₹32/km)"
                  data-ac="AC"
                  data-place={tour.h1.split('–')[0].trim()}
                  style={{ backgroundColor: '#ff7700' }}
                >
                  <FaWhatsapp className="me-2" size={18} /> Book Tour Package Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tour & Fleet Photo Gallery (From Keyword Based Images) */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-3">
          <div className="text-center mb-4">
            <h2 className="fw-bold h3 mb-2">Tour &amp; Fleet <span style={{ color: '#ff7700' }}>Visual Showcase</span></h2>
            <p className="text-muted mb-0">Swipe or use the slider arrows to explore the vehicles and destinations curated for your journey.</p>
          </div>

          <CardSlider cardsPerView={4} interval={3800}>
            {tour.galleryImages.map((img, i) => (
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden d-flex flex-column" key={i}>
                <div className="position-relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="card-img-top w-100 d-block fleet-gallery-img"
                    style={{ height: '220px', objectFit: 'cover' }}
                    loading="lazy"
                    decoding="async"
                  />
                  {img.src.includes('Keyword Based Image') && (
                    <div className="fleet-gallery-overlay-tag">
                      <FaMapMarkerAlt className="text-warning me-1 flex-shrink-0" size={10} />
                      <span className="text-truncate">{tour.h1.split('–')[0].split('Tour')[0].trim().toUpperCase()}</span>
                    </div>
                  )}
                </div>
                <div className="card-body p-3 text-center d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <h3 className="h6 fw-bold text-dark mb-1" style={{ fontSize: '0.95rem' }}>{img.caption}</h3>
                    <p className="text-muted small mb-2" style={{ fontSize: '0.8rem', lineHeight: '1.45' }}>
                      {img.desc || `Curated ${tour.h1.split('–')[0].trim()} vehicle option with sanitized pushback seats, dual AC, and expert commercial chauffeur.`}
                    </p>
                    <div className="d-flex justify-content-center flex-wrap gap-1 mb-2">
                      <span className="badge bg-light text-muted border small" style={{ fontSize: '0.7rem' }}>
                        AC Pushback
                      </span>
                      <span className="badge bg-light text-muted border small" style={{ fontSize: '0.7rem' }}>
                        Chauffeur Driven
                      </span>
                      <span className="badge bg-light text-muted border small" style={{ fontSize: '0.7rem' }}>
                        Sanitized Fleet
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 border-top mt-auto d-flex align-items-center justify-content-between">
                    <span className="badge small" style={{ backgroundColor: '#fff3e6', color: '#ff7700', fontSize: '0.78rem', fontWeight: 700 }}>
                      {tour.startingPackage.split('/')[0].trim()}
                    </span>
                    <span className="small text-muted fw-semibold" style={{ fontSize: '0.72rem' }}>
                      Verified Fleet
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* 5. Official Vehicle Fares & Packages Comparison Table (Synced with Packages.jsx) */}
      <section className="py-5 bg-light border-bottom">
        <div className="container py-3">
          <div className="text-center mb-4">
            <span className="badge rounded-pill px-3 py-2 mb-2 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
              Official Shree Travels Rate Card
            </span>
            <h2 className="fw-bold h3 mb-2">Vehicle Rates &amp; <span style={{ color: '#ff7700' }}>Outstation Package Tariff</span></h2>
            <p className="text-muted mb-2 mx-auto" style={{ maxWidth: '720px' }}>
              Transparent per-kilometer and fixed route packages matching our official Packages tariff—zero hidden charges.
            </p>
            <div className="d-md-none small fw-semibold" style={{ color: '#ff7700' }}>
              ← Swipe table horizontally to view all rates &amp; tap Book Now →
            </div>
          </div>

          <div className="table-responsive shadow-sm rounded-4 border bg-white">
            <table className="table table-hover align-middle mb-0 text-center responsive-fare-table">
              <thead className="text-white" style={{ backgroundColor: '#0f172a' }}>
                <tr>
                  <th className="py-3 px-3 text-start text-white" style={{ backgroundColor: '#0f172a' }}>Vehicle Type &amp; Capacity</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>Per KM Rate</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>300 KM Outstation Pkg</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>8 Hrs / 80 KM Local</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>Mumbai (350 KM)</th>
                  <th className="py-3 px-2 text-white" style={{ backgroundColor: '#0f172a' }}>Mahabaleshwar (300 KM)</th>
                  <th className="py-3 px-3 text-white" style={{ backgroundColor: '#0f172a' }}>Book Now</th>
                </tr>
              </thead>
              <tbody>
                {OFFICIAL_PACKAGE_FARES.map((row, idx) => (
                  <tr key={idx}>
                    <td data-label="Vehicle Type" className="text-start fw-bold px-3">{row.vehicle}</td>
                    <td data-label="Per KM Rate" className="fw-bold" style={{ color: '#ff7700' }}>{row.perKm}</td>
                    <td data-label="300 KM Outstation Pkg" className="fw-semibold">{row.pkg300}</td>
                    <td data-label="8 Hrs / 80 KM Local">{row.local880}</td>
                    <td data-label="Mumbai (350 KM)">{row.mumbai}</td>
                    <td data-label="Mahabaleshwar (300 KM)">{row.mahabaleshwar}</td>
                    <td data-label="Book" className="px-3">
                      <button
                        type="button"
                        className="btn btn-sm text-white fw-bold px-3 rounded-pill open-booking-popup-btn"
                        data-vehicle={row.vehicle}
                        data-ac={row.vehicle.includes('Non-AC') && !row.vehicle.includes('/ AC') ? 'Non-AC' : 'AC'}
                        data-place={tour.h1.split('–')[0].trim()}
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
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-3" style={{ maxWidth: '900px' }}>
          <h2 className="fw-bold h3 text-center mb-4">
            Frequently Asked Questions – <span style={{ color: '#ff7700' }}>{tour.h1.split('–')[0].trim()}</span>
          </h2>
          {tour.faqs.map(([q, a], index) => (
            <details className="border rounded-4 p-4 mb-3 bg-light shadow-sm" key={index} open={index === 0}>
              <summary className="fw-bold text-dark" style={{ cursor: 'pointer' }}>{q}</summary>
              <p className="text-muted mt-3 mb-0" style={{ lineHeight: '1.75' }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 7. Explore Other Popular Tour Packages Slider */}
      <section className="py-5 bg-light">
        <div className="container py-3">
          <div className="text-center mb-4">
            <span className="badge rounded-pill px-3 py-2 mb-2 fw-semibold" style={{ backgroundColor: '#fff3e6', color: '#ff7700' }}>
              Related Tour Packages
            </span>
            <h2 className="fw-bold h3 mb-2">Explore Other <span style={{ color: '#ff7700' }}>Popular Tour Packages from Pune</span></h2>
            <p className="text-muted small mb-0">Slide through our signature outstation and pilgrimage packages with complete local sightseeing guides.</p>
          </div>

          <CardSlider cardsPerView={3} interval={4200}>
            {otherTours.map((item) => (
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden d-flex flex-column" key={item.slug}>
                <div className="position-relative overflow-hidden">
                  <img
                    src={item.heroImage}
                    alt={item.h1}
                    className="card-img-top w-100 d-block fleet-gallery-img"
                    style={{ height: '220px', objectFit: 'cover' }}
                    loading="lazy"
                    decoding="async"
                  />
                  {item.heroImage && item.heroImage.includes('Keyword Based Image') && (
                    <div className="fleet-gallery-overlay-tag">
                      <FaMapMarkerAlt className="text-warning me-1 flex-shrink-0" size={10} />
                      <span className="text-truncate">{item.h1.split('–')[0].split('Tour')[0].trim().toUpperCase()}</span>
                    </div>
                  )}
                </div>
                <div className="card-body p-4 d-flex flex-column flex-grow-1">
                  <h3 className="h5 fw-bold text-dark mb-2">{item.h1.split('–')[0].trim()}</h3>
                  <p className="text-muted small mb-3 flex-grow-1" style={{ lineHeight: '1.6' }}>{item.description}</p>
                  <div className="d-flex align-items-center justify-content-between mb-3 pt-2 border-top">
                    <span className="badge small" style={{ backgroundColor: '#fff3e6', color: '#ff7700', fontSize: '0.8rem', fontWeight: 700 }}>
                      Starting @ {item.startingPackage.split('/')[0].trim()}
                    </span>
                    <span className="small text-muted fw-semibold">From Pune</span>
                  </div>
                  <div className="d-flex gap-2 mt-auto">
                    <Link
                      to={`/${item.slug}`}
                      className="btn btn-sm btn-outline-dark rounded-pill fw-semibold flex-fill py-2 text-center small text-nowrap"
                    >
                      View Details
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm fw-bold text-white rounded-pill px-3 py-2 flex-fill open-booking-popup-btn d-inline-flex align-items-center justify-content-center gap-1 text-nowrap"
                      data-vehicle={item.h1.split('–')[0].trim()}
                      data-place={item.h1.split('–')[0].trim()}
                      style={{ backgroundColor: '#ff7700' }}
                    >
                      <FaWhatsapp size={14} /> Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </CardSlider>
        </div>
      </section>
    </div>
  );
};

export default TourPackagePage;
