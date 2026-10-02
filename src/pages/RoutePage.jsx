import React from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";

const ROUTES = {
  "pune-to-mumbai-cab": {
    name: "Pune to Mumbai Cab",
    title: "Pune to Mumbai Cab | Book Taxi, Tempo Traveller & Urbania",
    description: "Book a Pune to Mumbai cab with Shree Travels for one-way, round-trip, airport and group travel. Choose a car, Tempo Traveller or larger vehicle according to your group size.",
    intro: "Shree Travels provides chauffeur-driven Pune to Mumbai travel for families, corporate groups, airport transfers and outstation journeys.",
    distance: "Approx. 150 km",
    time: "Usually around 3–4 hours depending on traffic and pickup point",
    keywords: "Pune to Mumbai cab, Pune to Mumbai taxi, Pune to Mumbai Tempo Traveller, book cab to Mumbai from Pune"
  },
  "pune-to-lonavala-cab": {
    name: "Pune to Lonavala Cab",
    title: "Pune to Lonavala Cab Service | Rent Taxi & Tempo Traveller",
    description: "Book a Pune to Lonavala cab, Tempo Traveller or group vehicle with Shree Travels for family trips, weekend travel and group sightseeing.",
    intro: "Plan a comfortable Pune to Lonavala trip with a chauffeur-driven vehicle selected for your group size and itinerary.",
    distance: "Approx. 65 km",
    time: "Usually around 1.5–2.5 hours depending on traffic",
    keywords: "Pune to Lonavala cab, Pune to Lonavala taxi, Pune to Lonavala Tempo Traveller, Lonavala sightseeing cab"
  },
  "pune-to-mahabaleshwar-cab": {
    name: "Pune to Mahabaleshwar Cab",
    title: "Pune to Mahabaleshwar Cab | Outstation Taxi & Traveller Rent",
    description: "Book a Pune to Mahabaleshwar cab or group vehicle with Shree Travels for family holidays, corporate trips and weekend travel.",
    intro: "Travel from Pune to Mahabaleshwar in a chauffeur-driven vehicle selected for your group size.",
    distance: "Approx. 120 km",
    time: "Usually around 3–4 hours depending on traffic and route",
    keywords: "Pune to Mahabaleshwar cab, Pune to Mahabaleshwar taxi, Tempo Traveller for Mahabaleshwar, outstation cab Pune"
  },
  "pune-to-shirdi-cab": {
    name: "Pune to Shirdi Cab",
    title: "Pune to Shirdi Cab Booking | Taxi, Tempo Traveller & Minibus",
    description: "Book a Pune to Shirdi cab, Tempo Traveller or group vehicle with Shree Travels for one-way and round-trip travel.",
    intro: "Shree Travels provides chauffeur-driven Pune to Shirdi travel for families and pilgrimage groups.",
    distance: "Approx. 205 km",
    time: "Usually around 4.5–6 hours depending on traffic",
    keywords: "Pune to Shirdi cab, Pune to Shirdi taxi service, Shirdi darshan cab from Pune, Tempo Traveller for Shirdi"
  },
  "pune-to-nashik-cab": {
    name: "Pune to Nashik Cab",
    title: "Pune to Nashik Cab Service | Hire Taxi, Urbania & Traveller",
    description: "Book a Pune to Nashik cab or group vehicle with Shree Travels for business, family, pilgrimage and outstation travel.",
    intro: "Travel between Pune and Nashik with a chauffeur-driven vehicle selected for your passengers and luggage requirements.",
    distance: "Approx. 210 km",
    time: "Usually around 4.5–6 hours depending on traffic",
    keywords: "Pune to Nashik cab, Pune to Nashik taxi, Tempo Traveller for Nashik, Pune outstation cab"
  },
  "pune-to-goa-cab": {
    name: "Pune to Goa Cab",
    title: "Pune to Goa Cab Booking | Outstation Taxi & Group Travel",
    description: "Plan a Pune to Goa road trip with Shree Travels. Book a chauffeur-driven car, Tempo Traveller or group vehicle.",
    intro: "For longer road trips from Pune to Goa, choose a vehicle based on passenger count, luggage and number of travel days.",
    distance: "Route dependent",
    time: "Depends on itinerary, traffic and stops",
    keywords: "Pune to Goa cab, Pune to Goa taxi, Pune to Goa road trip, Tempo Traveller from Pune to Goa"
  },
  "mumbai-airport-to-pune-cab": {
    name: "Mumbai Airport to Pune Cab",
    title: "Mumbai Airport to Pune Cab | Reliable Airport Taxi Pickup",
    description: "Book a Mumbai Airport to Pune cab or group transfer with Shree Travels. Choose a car, Tempo Traveller or larger vehicle.",
    intro: "Arrange a private transfer from Mumbai Airport to Pune with a vehicle suited to your passengers and luggage.",
    distance: "Approx. 150 km",
    time: "Usually around 3–5 hours depending on traffic",
    keywords: "Mumbai airport to Pune cab, Mumbai airport pickup taxi, Mumbai to Pune cab, airport transfer to Pune"
  },
  "pune-airport-to-mumbai-cab": {
    name: "Pune Airport to Mumbai Cab",
    title: "Pune Airport to Mumbai Cab | Direct Airport Drop Taxi Service",
    description: "Book a chauffeur-driven Pune Airport to Mumbai cab or group vehicle with Shree Travels.",
    intro: "Start your Mumbai journey directly from Pune Airport with a pre-arranged chauffeur-driven vehicle.",
    distance: "Approx. 150 km",
    time: "Usually around 3–5 hours depending on traffic",
    keywords: "Pune airport to Mumbai cab, Pune to Mumbai airport drop, airport taxi service Pune"
  }
};

const RoutePage = () => {
  const { slug = "pune-to-mumbai-cab" } = useParams();
  
  const data = ROUTES[slug] || {
    name: slug.split("-").map(w => w[0]?.toUpperCase()+w.slice(1)).join(" "),
    title: `${slug.split("-").map(w => w[0]?.toUpperCase()+w.slice(1)).join(" ")} | Outstation Cab Booking Pune`,
    description: "Book chauffeur-driven outstation travel with Shree Travels.",
    intro: "Shree Travels provides chauffeur-driven travel with cars, Tempo Travellers, Force Urbania and buses.",
    distance: "Route dependent",
    time: "Depends on traffic and route",
    keywords: "Pune outstation cab, hire taxi Pune, Tempo Traveller Pune"
  };

  const faqs = [
    [`What vehicle can I book for ${data.name}?`, "Vehicle selection depends on passenger count, luggage and trip requirements. Shree Travels can help you choose between a car, Tempo Traveller, Force Urbania or bus where available."],
    [`Can I book ${data.name} one way?`, "One-way availability depends on the route, date and vehicle. Share your travel date and pickup details for an exact quotation."],
    ["Are tolls, parking and driver charges included?", "The final inclusions depend on the quotation and trip package. Ask for a written quotation before confirming the booking."],
    ["How early should I book?", "For weekends, holidays, weddings and large group trips, earlier booking is recommended."]
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": data.name,
      "serviceType": "Chauffeur-driven vehicle rental",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Shree Travels",
        "url": "https://shreetravels.in",
        "telephone": "+91-7620411277"
      },
      "areaServed": ["Pune", "Maharashtra"],
      "url": `https://shreetravels.in/${slug}`
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(([q,a]) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a }
      }))
    }
  ];

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <SEO 
        title={data.title} 
        description={data.description} 
        path={`/${slug}`}
        keywords={data.keywords}
        schema={schema} 
        breadcrumbs={[
          {name:"Home", url:"/"},
          {name:"Routes", url:"/service"},
          {name:data.name, url:`/${slug}`}
        ]}
      />
      
      <main>
        <section className="py-5 text-white" style={{background:"linear-gradient(135deg,#0f172a,#1e293b)"}}>
          <div className="container py-5">
            <p className="text-uppercase fw-bold" style={{color:"#ff7700"}}>Pune Outstation Travel</p>
            <h1 className="display-5 fw-bold">{data.name}</h1>
            <p className="lead col-lg-8">{data.intro}</p>
            <div className="d-flex flex-wrap gap-2 mt-4">
              <a href="tel:+917620411277" className="btn btn-lg text-white fw-bold shadow-sm" style={{background:"#ff7700"}}>
                Call +91 76204 11277
              </a>
              
              <Link to="/book-taxi" className="btn btn-lg btn-outline-light fw-bold shadow-sm">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              {[
                ["Choose by group size","Car, Tempo Traveller, Force Urbania and bus options can be matched to your passenger count."],
                ["Chauffeur-driven travel","Travel with an experienced driver instead of managing the route yourself."],
                ["Flexible trip planning","Discuss one-way, return, airport, sightseeing or multi-day requirements."],
                ["Clear quotation","Confirm the vehicle, trip plan and applicable charges before travel."]
              ].map(([t,d]) => (
                <div className="col-md-6 col-lg-3" key={t}>
                  <article className="h-100 border rounded-4 p-4 shadow-sm bg-white">
                    <h2 className="h5 fw-bold">{t}</h2>
                    <p className="text-muted mb-0">{d}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8">
                <h2 className="fw-bold">Plan Your {data.name} Trip</h2>
                <p>Tell us how many people are travelling, how much luggage you have, whether you need a one-way or return journey, and whether additional sightseeing stops are required.</p>
                <p>For small groups, a car may be practical. Larger groups can compare a Tempo Traveller or Force Urbania, while bigger groups can enquire about bus rental.</p>
                
                <h2 className="fw-bold mt-5">Vehicle Options</h2>
                <div className="row g-3">
                  {[
                    ["Car / SUV","/contact"],
                    ["Tempo Traveller","/tempo-traveller-seater-hire-pune"],
                    ["Force Urbania","/force-urbania-on-rent-pune"],
                    ["Bus Rental","/bus-rental-pune"]
                  ].map(([n,h]) => (
                    <div className="col-sm-6" key={n}>
                      <Link to={h} className="d-block bg-white border rounded-3 p-3 text-decoration-none fw-semibold text-dark shadow-sm">
                        {n} →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              
              <aside className="col-lg-4">
                <div className="bg-white rounded-4 shadow-sm border p-4 sticky-lg-top" style={{top:"90px"}}>
                  <h2 className="h4 fw-bold mb-3">Route Snapshot</h2>
                  <p className="mb-2"><strong>Distance:</strong> {data.distance}</p>
                  <p className="mb-4"><strong>Typical time:</strong> {data.time}</p>
                  
                  <Link to="/book-taxi" className="btn w-100 text-white fw-bold py-3 rounded-pill shadow-sm" style={{background:"#ff7700"}}>
                    Book / Enquire
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container" style={{maxWidth:"900px"}}>
            <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
            {faqs.map(([q,a]) => (
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