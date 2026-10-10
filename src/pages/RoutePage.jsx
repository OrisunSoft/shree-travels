import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import SEO from "../components/SEO";

const ROUTES = {
  "pune-to-mumbai": {
    name: "Pune to Mumbai Travel Guide",
    title: "Pune to Mumbai Bus, Tempo Traveller & Urbania Guide | Shree Travels",
    description: "Comprehensive guide for traveling from Pune to Mumbai. Compare routes, travel time, and book buses, Tempo Travellers @ ₹22/km, or Force Urbania @ ₹32/km.",
    intro: "Shree Travels provides chauffeur-driven Pune to Mumbai travel for families, corporate groups, airport transfers and Mumbai Darshan sightseeing.",
    distance: "Approx. 150 km",
    time: "3–3.5 hours via Mumbai-Pune Expressway",
    image: "/img/Keyword Based Image/Keyword Based Image-27.jpg",
    keywords: "Pune to Mumbai bus, Pune to Mumbai tempo traveller, Pune to Mumbai expressway travel guide"
  },
  "pune-to-lonavala": {
    name: "Pune to Lonavala Travel Guide",
    title: "Pune to Lonavala Bus, Tempo Traveller & Urbania Guide | Weekend Trips",
    description: "Plan your weekend getaway from Pune to Lonavala. Book Tempo Travellers, mini buses, and Force Urbania luxury vans (@ ₹32/km) with experienced ghat drivers.",
    intro: "Plan a comfortable Pune to Lonavala & Khandala trip covering Tiger Point, Bhushi Dam, Karla Caves, and Pawna Lake.",
    distance: "Approx. 65 km",
    time: "1.5 hours via Expressway / NH48",
    image: "/img/Keyword Based Image/Keyword Based Image-26.jpg",
    keywords: "Pune to Lonavala bus, Pune to Lonavala tempo traveller, Lonavala sightseeing package"
  },
  "bus-rental-price-pune": {
    name: "Bus Rental Rates per KM in Pune",
    title: "Bus Rental Rates per KM in Pune (2026 Tariff) | 13 to 50 Seater Rate Card",
    description: "Official per-km pricing guide for bus, mini bus, Force Urbania (@ ₹32/km), and Tempo Traveller (@ ₹22/km) rental in Pune.",
    intro: "Explore clear, transparent per-km billing and 300 km outstation packages for 13 to 50-seater vehicles in Pune.",
    distance: "Local (8Hr/80KM) & Outstation (Min 300KM/Day)",
    time: "24/7 Dispatch Across Pune & PCMC",
    image: "/img/Keyword Based Image/Keyword Based Image-47.jpg",
    keywords: "bus rental price pune, bus rate per km pune, tempo traveller rates pune, mini bus hire cost pune"
  },
  "maharashtra-tour-vehicle-rental": {
    name: "Maharashtra Tour Vehicle, Bus & Urbania Rental",
    title: "Maharashtra Tour Bus & Tempo Traveller Rental from Pune | All-State Darshan",
    description: "Book Tempo Travellers, Force Urbania @ ₹32/km, Mini Buses & 32-50 Seater Coaches for Maharashtra Darshan, Ashtavinayak, 5 Jyotirlinga, Konkan & Mahabaleshwar.",
    intro: "Explore the best of Maharashtra — from Sahyadri hill stations and Konkan beaches to sacred Jyotirlinga and Shakti Peeth temples — with our experienced tour chauffeurs.",
    distance: "All Maharashtra Circuits",
    time: "1 to 10 Day Custom Tour Packages",
    image: "/img/Keyword Based Image/Keyword Based Image-21.jpg",
    keywords: "Maharashtra tour bus hire Pune, Pune to Maharashtra Darshan bus, outstation bus rental Pune"
  },
  "pune-to-mumbai-cab": {
    name: "Pune to Mumbai Cab, Tempo Traveller & Urbania",
    title: "Pune to Mumbai Cab | Shree Travels",
    description: "Book Pune to Mumbai cab & group vehicles with Shree Travels for one-way, round-trip, Mumbai Airport T2 and Mumbai Darshan travel.",
    intro: "Shree Travels provides chauffeur-driven Pune to Mumbai travel for families, corporate groups, airport transfers and outstation journeys.",
    distance: "Approx. 150 km",
    time: "3–4 hours via Mumbai-Pune Expressway",
    image: "/img/Keyword Based Image/Keyword Based Image-27.jpg",
    keywords: "Pune to Mumbai cab, Pune to Mumbai Tempo Traveller, Pune to Mumbai Urbania"
  },
  "pune-to-lonavala-cab": {
    name: "Pune to Lonavala Cab, Tempo Traveller & Bus",
    title: "Pune to Lonavala Cab & Tempo Traveller Service | Weekend Sightseeing",
    description: "Book a Pune to Lonavala Tempo Traveller, Force Urbania (@ ₹32/km), or Mini Bus with Shree Travels for family trips, villa stays, and group sightseeing.",
    intro: "Plan a comfortable Pune to Lonavala trip with a chauffeur-driven vehicle selected for your group size and itinerary.",
    distance: "Approx. 65 km",
    time: "1.5–2 hours",
    image: "/img/Keyword Based Image/Keyword Based Image-26.jpg",
    keywords: "Pune to Lonavala cab, Pune to Lonavala Tempo Traveller, Lonavala sightseeing bus"
  },
  "pune-to-mahabaleshwar-cab": {
    name: "Pune to Mahabaleshwar Cab, Urbania & Bus",
    title: "Pune to Mahabaleshwar Tempo Traveller, Urbania & Bus Hire | @ ₹9,000",
    description: "Book a Pune to Mahabaleshwar Tempo Traveller, Force Urbania @ ₹32/km, or Mini Bus with Shree Travels for family holidays and corporate trips.",
    intro: "Travel from Pune to Mahabaleshwar & Panchgani in a chauffeur-driven vehicle with experienced Pasarani Ghat drivers.",
    distance: "Approx. 120 km",
    time: "3–3.5 hours via NH48 & Wai",
    image: "/img/Keyword Based Image/Keyword Based Image-31.jpg",
    keywords: "Pune to Mahabaleshwar cab, Pune to Mahabaleshwar Tempo Traveller, Pune to Mahabaleshwar Urbania"
  },
  "pune-to-shirdi-cab": {
    name: "Pune to Shirdi Tempo Traveller, Urbania & Bus",
    title: "Pune to Shirdi Tempo Traveller, Force Urbania & Bus Booking | @ ₹10,000",
    description: "Book a Pune to Shirdi Tempo Traveller, Force Urbania @ ₹32/km, or Mini Bus with Shree Travels for same-day and 2-day Sai Baba & Shani Shingnapur Darshan.",
    intro: "Shree Travels provides peaceful, senior-citizen-friendly Pune to Shirdi Darshan travel for families and pilgrimage groups.",
    distance: "Approx. 185–205 km",
    time: "4–4.5 hours",
    image: "/img/Keyword Based Image/Keyword Based Image-07.jpg",
    keywords: "Pune to Shirdi cab, Pune to Shirdi Tempo Traveller, Shirdi darshan bus from Pune"
  },
  "pune-to-nashik-cab": {
    name: "Pune to Nashik & Trimbakeshwar Tempo Traveller & Bus",
    title: "Pune to Nashik Tempo Traveller, Urbania & Bus Service | Trimbakeshwar & Sula",
    description: "Book a Pune to Nashik Tempo Traveller, Force Urbania @ ₹32/km, or Bus for Trimbakeshwar Jyotirlinga, Saptashrungi Vani, and Sula Vineyards tours.",
    intro: "Travel between Pune and Nashik via NH60 in a pushback AC vehicle tailored for your group.",
    distance: "Approx. 210 km",
    time: "4.5–5 hours via Sangamner Highway",
    image: "/img/Keyword Based Image/Keyword Based Image-25.jpg",
    keywords: "Pune to Nashik cab, Pune to Nashik Tempo Traveller, Pune to Trimbakeshwar bus"
  },
  "pune-to-goa-cab": {
    name: "Pune to Goa Tempo Traveller, Urbania & Bus",
    title: "Pune to Goa Tempo Traveller, Force Urbania & Bus Hire | Road Trip",
    description: "Plan a Pune to Goa road trip with Shree Travels. Book a chauffeur-driven Force Urbania @ ₹32/km, Tempo Traveller @ ₹22/km, or Mini Bus.",
    intro: "For memorable road trips from Pune to North & South Goa, travel together with music, pushback seats, and interstate permits handled.",
    distance: "Approx. 450 km",
    time: "8.5–9.5 hours via Kolhapur & Amboli Ghat",
    image: "/img/Keyword Based Image/Keyword Based Image-23.jpg",
    keywords: "Pune to Goa cab, Pune to Goa Tempo Traveller, Pune to Goa bus hire"
  }
};

const RoutePage = () => {
  const { slug: paramSlug } = useParams();
  const location = useLocation();
  const pathSlug = location.pathname
    .replace(/^\/route\//, "")
    .replace(/^\/travel-guides\//, "")
    .replace(/^\/+/, "");
  const slug = paramSlug || pathSlug || "pune-to-mumbai-cab";
  const canonicalPath = location.pathname || `/route/${slug}`;

  const data = ROUTES[slug] || {
    name: slug.split("-").map((w) => w[0]?.toUpperCase() + w.slice(1)).join(" "),
    title: `${slug.split("-").map((w) => w[0]?.toUpperCase() + w.slice(1)).join(" ")} | Shree Travels Pune`,
    description: "Book chauffeur-driven outstation travel with Shree Travels.",
    intro: "Shree Travels provides chauffeur-driven travel with Tempo Travellers, Force Urbania (@ ₹32/km), and luxury buses.",
    distance: "Outstation Route",
    time: "Flexible Schedule",
    image: "/img/Keyword Based Image/Keyword Based Image-03.jpg",
    keywords: "Pune outstation bus, hire Tempo Traveller Pune, Force Urbania Pune"
  };

  const faqs = [
    [`What vehicles and per-km rates are available for ${data.name}?`, "We offer 13–17 Seater Tempo Travellers (@ ₹22/km Non-AC, ₹25/km AC), 20 Seater Mini Buses (@ ₹28/km), 26 Seater Travellers (@ ₹38/km), Force Urbania (@ ₹32/km), and 32–50 Seater Buses (@ ₹40–90/km)."],
    [`Do you have dedicated tour packages with local sightseeing places?`, "Yes! Check our dedicated tour pages for Pune to Mahabaleshwar, Lonavala, Goa, Konkan Darshan, Mumbai Darshan, Ashtavinayak, Bhimashankar 5 Jyotirlinga, and Sade Teen Shakti Peeth."],
    ["Are tolls, parking and state taxes included?", "Highway Fastag tolls, parking, and state permits are charged transparently at actuals so you never overpay."],
    ["How can I book immediately?", "Call +91 7620411277 or WhatsApp +91 78757 74499 for instant confirmation."]
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": data.name,
      "serviceType": "Chauffeur-driven vehicle rental",
      "provider": {
        "@type": "AutoRental",
        "name": "Shree Travels",
        "url": "https://shreetravels.in",
        "telephone": "+917620411277"
      },
      "areaServed": ["Pune", "Maharashtra"],
      "url": `https://shreetravels.in${canonicalPath}`
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(([q, a]) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a }
      }))
    }
  ];

  return (
    <div style={{ overflowX: "hidden", maxWidth: "100%" }}>
      <SEO
        title={data.title}
        description={data.description}
        path={canonicalPath}
        image={data.image}
        keywords={data.keywords}
        schema={schema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Routes & Guides", url: "/service" },
          { name: data.name, url: canonicalPath }
        ]}
      />

      <main>
        <section className="py-5 text-white" style={{ background: "linear-gradient(135deg,#0f172a,#1e293b)" }}>
          <div className="container py-4">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <p className="text-uppercase fw-bold mb-2" style={{ color: "#ff7700" }}>Pune Outstation Travel & Tariff Guide</p>
                <h1 className="display-5 fw-bold text-white">{data.name}</h1>
                <p className="lead text-light">{data.intro}</p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a href="tel:+917620411277" className="btn btn-lg text-white fw-bold shadow-sm px-4" style={{ background: "#ff7700" }}>
                    Call +91 76204 11277
                  </a>
                  <a
                    href={`https://wa.me/917875774499?text=${encodeURIComponent(`Hello Shree Travels, I want to enquire about ${data.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg text-white fw-bold shadow-sm px-4"
                    style={{ background: "#25D366" }}
                  >
                    WhatsApp +91 78757 74499
                  </a>
                  <Link to="/book-taxi" className="btn btn-lg btn-outline-light fw-bold shadow-sm px-4">
                    Book Online
                  </Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="position-relative overflow-hidden rounded-4 shadow-lg">
                  <img src={data.image} alt={data.name} className="img-fluid w-100 d-block" style={{ aspectRatio: "1280 / 826" }} />
                  {data.image && data.image.includes('Keyword Based Image') && (
                    <div className="fleet-verified-tag">
                      <div className="fleet-tag-pill-top">
                        <FaStar className="me-1 text-warning" size={9} />
                        <span>OFFICIAL OUTSTATION ROUTE</span>
                      </div>
                      <div className="fleet-tag-title-bottom">
                        <FaMapMarkerAlt className="me-1 text-warning flex-shrink-0" size={11} />
                        <span className="text-truncate">
                          {data.name.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-white">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-3">Official Per-KM Rates & Fleet Options for {data.name}</h2>
                <p className="text-muted">
                  Compare our official Packages.jsx rates across all seating capacities:
                </p>
                <div className="table-responsive rounded-4 border shadow-sm mb-4">
                  <table className="table table-hover align-middle mb-0 text-center">
                    <thead style={{ backgroundColor: "#0f172a", color: "#fff" }}>
                      <tr>
                        <th className="py-3 text-white" style={{ backgroundColor: "#0f172a" }}>Vehicle</th>
                        <th className="py-3 text-white" style={{ backgroundColor: "#0f172a" }}>Per KM Rate</th>
                        <th className="py-3 text-white" style={{ backgroundColor: "#0f172a" }}>300 KM Outstation Pkg</th>
                        <th className="py-3 text-white" style={{ backgroundColor: "#0f172a" }}>Local 8Hr/80KM</th>
                        <th className="py-3 text-white" style={{ backgroundColor: "#0f172a" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fw-bold">13 Seater Tempo Traveller (Non-AC / AC)</td>
                        <td>₹22 / ₹25/km</td>
                        <td>₹6,600 / ₹7,500</td>
                        <td>₹5,000 / ₹5,500</td>
                        <td><button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: "#ff7700" }} data-vehicle="13 Seater Tempo Traveller" data-ac="AC" data-place={data.name}>Book Now</button></td>
                      </tr>
                      <tr>
                        <td className="fw-bold">17 Seater Tempo Traveller (Non-AC / AC)</td>
                        <td>₹22 / ₹25/km</td>
                        <td>₹6,600 / ₹7,500</td>
                        <td>₹5,000 / ₹5,500</td>
                        <td><button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: "#ff7700" }} data-vehicle="17 Seater Tempo Traveller" data-ac="AC" data-place={data.name}>Book Now</button></td>
                      </tr>
                      <tr>
                        <td className="fw-bold">Force Urbania (10, 13 &amp; 17 Seater Luxury)</td>
                        <td className="fw-bold" style={{ color: "#ff7700" }}>₹32/km (Flat)</td>
                        <td>₹9,600</td>
                        <td>₹8,000</td>
                        <td><button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: "#ff7700" }} data-vehicle="17 Seater Force Urbania (@ ₹32/km)" data-ac="AC" data-place={data.name}>Book Now</button></td>
                      </tr>
                      <tr>
                        <td className="fw-bold">20 Seater Tempo Traveller / Mini Bus (Non-AC / AC)</td>
                        <td>₹25 / ₹28</td>
                        <td>₹7,500 / ₹8,400</td>
                        <td>₹6,000 / ₹6,500</td>
                        <td><button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: "#ff7700" }} data-vehicle="20 Seater Tempo Traveller" data-ac="AC" data-place={data.name}>Book Now</button></td>
                      </tr>
                      <tr>
                        <td className="fw-bold">26 Seater Tempo Traveller / Mini Bus (Non-AC / AC)</td>
                        <td>₹32 / ₹37</td>
                        <td>₹9,600 / ₹11,100</td>
                        <td>₹7,000 / ₹8,000</td>
                        <td><button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: "#ff7700" }} data-vehicle="26 Seater Tempo Traveller" data-ac="AC" data-place={data.name}>Book Now</button></td>
                      </tr>
                      <tr>
                        <td className="fw-bold">30 / 32 Seater Luxury Bus</td>
                        <td>₹35 / ₹50</td>
                        <td>₹10,500 / ₹15,000</td>
                        <td>₹8,000 / ₹10,000</td>
                        <td><button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: "#ff7700" }} data-vehicle="32 Seater Bus" data-ac="AC" data-place={data.name}>Book Now</button></td>
                      </tr>
                      <tr>
                        <td className="fw-bold">35 Seater Bus (Non-AC / AC Benz)</td>
                        <td>₹38 / ₹50</td>
                        <td>₹11,400 / ₹15,000</td>
                        <td>₹8,000 / ₹10,000</td>
                        <td><button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: "#ff7700" }} data-vehicle="35 Seater Bus" data-ac="AC" data-place={data.name}>Book Now</button></td>
                      </tr>
                      <tr>
                        <td className="fw-bold">45 &amp; 49 Seater Bus (Non-AC)</td>
                        <td>₹50/km</td>
                        <td>₹15,000</td>
                        <td>₹10,000</td>
                        <td><button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: "#ff7700" }} data-vehicle="45 Seater Bus" data-ac="Non-AC" data-place={data.name}>Book Now</button></td>
                      </tr>
                      <tr>
                        <td className="fw-bold">53 Seater Volvo / Benz Special Bus</td>
                        <td className="fw-bold" style={{ color: "#ff7700" }}>₹80/km</td>
                        <td>₹24,000</td>
                        <td>₹20,000</td>
                        <td><button type="button" className="btn btn-sm fw-bold text-white rounded-pill px-3 open-booking-popup-btn" style={{ backgroundColor: "#ff7700" }} data-vehicle="53 Seater Volvo / Benz Bus" data-ac="AC" data-place={data.name}>Book Now</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Important Fare Rules & Guidelines Notice */}
                <div className="p-3 p-md-4 rounded-4 border shadow-sm mb-4" style={{ backgroundColor: '#fffdfa', borderColor: '#ffd8a8' }}>
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2 pb-2 border-bottom">
                    <span className="badge rounded-pill px-3 py-2 fw-bold text-white fs-6" style={{ backgroundColor: '#dc2626' }}>
                      <i className="fas fa-exclamation-triangle me-2"></i>Please note that toll, parking, and border tax charges are extra
                    </span>
                    <span className="text-muted small fw-semibold">
                      Official Shree Travels Fare Card Rules (04/02/2026)
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

                <h3 className="h5 fw-bold mt-4 mb-3">Explore Detailed Sightseeing Tour Pages</h3>
                <div className="row g-3">
                  {[
                    ["Pune to Mahabaleshwar Tour", "/pune-to-mahabaleshwar-bus-hire"],
                    ["Pune to Lonavala Tour", "/pune-to-lonavala-bus-hire"],
                    ["Pune to Goa Tour", "/pune-to-goa-bus-hire"],
                    ["Pune to Konkan Darshan", "/pune-to-konkan-darshan"],
                    ["Pune to Mumbai Darshan", "/pune-to-mumbai-darshan"],
                    ["Ashtavinayak Darshan", "/ashtavinayak-darshan-bus-hire-pune"],
                    ["Bhimashankar & 5 Jyotirlinga", "/bhimashankar-5-jyotirlinga-darshan-pune"],
                    ["Sade Teen Shakti Peeth", "/sade-teen-shakti-peeth-darshan-pune"]
                  ].map(([n, h]) => (
                    <div className="col-sm-6" key={n}>
                      <Link to={h} className="d-block bg-light border rounded-3 p-3 text-decoration-none fw-semibold text-dark shadow-sm">
                        {n} <span style={{ color: "#ff7700", float: "right" }}>→</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="col-lg-4">
                <div className="bg-light rounded-4 shadow-sm border p-4 sticky-lg-top" style={{ top: "90px" }}>
                  <h2 className="h4 fw-bold mb-3">Route Snapshot</h2>
                  <p className="mb-2"><strong>Distance:</strong> {data.distance}</p>
                  <p className="mb-4"><strong>Typical Time:</strong> {data.time}</p>
                  <a
                    href={`https://wa.me/917875774499?text=${encodeURIComponent(`Hello Shree Travels, I want a quote for ${data.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-100 text-white fw-bold py-3 rounded-pill shadow-sm mb-2"
                    style={{ background: "#25D366" }}
                  >
                    WhatsApp +91 78757 74499
                  </a>
                  <Link to="/book-taxi" className="btn w-100 text-white fw-bold py-3 rounded-pill shadow-sm" style={{ background: "#ff7700" }}>
                    Book / Enquire Online
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
            {faqs.map(([q, a]) => (
              <details className="border rounded-3 p-3 mb-3 bg-white shadow-sm" key={q}>
                <summary className="fw-bold cursor-pointer">{q}</summary>
                <p className="text-muted mt-3 mb-0">{a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default RoutePage;