import React from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";

const AIRPORT_PAGES = {
  "pune-airport-cab": {
    h1: "Pune Airport Cab & Pickup Service",
    title: "Pune Airport Cab & Pickup Service | Reliable Airport Transfers",
    description: "Book a reliable Pune Airport cab for timely pickups, drop-offs, and local transfers. Chauffeur-driven cars, Tempo Travellers, and buses available.",
    intro: "Pre-book a reliable airport transfer from Pune Airport with a vehicle selected around your passengers and luggage for a hassle-free pickup.",
    keywords: "Pune airport cab, airport pickup Pune, Pune airport taxi service, airport transfer Pune, cab to Pune airport"
  },
  "mumbai-airport-to-pune-cab": {
    h1: "Mumbai Airport to Pune Cab & Pickup",
    title: "Mumbai Airport to Pune Cab | Direct Airport Pickup & Drop",
    description: "Book a direct cab from Mumbai Airport to Pune. We offer hassle-free airport pickups, group transfers, and outstation cabs with timely service.",
    intro: "Keep your group together with a pre-arranged chauffeur-driven transfer from Mumbai Airport to Pune. We track your flight for a smooth pickup.",
    keywords: "Mumbai airport to Pune cab, Mumbai airport pickup, Mumbai to Pune taxi, cab from Mumbai airport to Pune, Chhatrapati Shivaji airport pickup"
  },
  "pune-airport-to-mumbai-cab": {
    h1: "Pune to Mumbai Airport Drop Service",
    title: "Pune to Mumbai Airport Cab | Premium Airport Drop & Pickup",
    description: "Looking for a Pune to Mumbai airport cab? Book comfortable, chauffeur-driven cars and group vehicles for a timely drop at Mumbai International Airport.",
    intro: "Travel from Pune to Mumbai Airport with a private chauffeur-driven vehicle suited to your passenger and luggage requirements for a stress-free drop.",
    keywords: "Pune to Mumbai airport cab, Pune to Mumbai airport drop, Pune airport to Mumbai taxi, reliable airport transfer Pune to Mumbai"
  }
};

const AirportPage = () => {
  const { slug = "pune-airport-cab" } = useParams();
  const data = AIRPORT_PAGES[slug] || AIRPORT_PAGES["pune-airport-cab"];
  
  const faqs = [
    ["Can I book an airport transfer for a group?", "Yes. Ask about a Tempo Traveller, Force Urbania or bus where available when your group is larger than a normal car."],
    ["Can I book an airport pickup in advance?", "Yes. Advance booking is recommended when you have a fixed flight arrival or departure time. We will track your flight for timely pickups."],
    ["Can you accommodate luggage?", "Vehicle selection should be based on both passenger count and luggage volume. Mention your luggage requirement when requesting the quotation so we send the right vehicle."],
    ["Do you provide one-way airport transfers?", "Yes, one-way airport transfers can be requested. Availability and final pricing depend on the date, vehicle and route."]
  ];
  
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": data.h1,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Shree Travels",
        "telephone": "+91-7875774499",
        "url": "https://shreetravels.in"
      },
      "serviceType": "Airport pickup and transfer service",
      "areaServed": ["Pune", "Mumbai", "Maharashtra"],
      "url": `https://shreetravels.in/${slug}`
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
    <>
      <SEO 
        title={data.title} 
        description={data.description} 
        path={`/${slug}`} 
        keywords={data.keywords} 
        schema={schema} 
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Airport Transfers", url: "/service" },
          { name: data.h1, url: `/${slug}` }
        ]} 
      />
      
      <main>
        <section className="py-5 text-white" style={{ background: "linear-gradient(135deg,#0f172a,#334155)" }}>
          <div className="container py-5">
            <p className="text-uppercase fw-bold" style={{ color: "#ff7700" }}>Airport Transfers</p>
            <h1 className="display-5 fw-bold">{data.h1}</h1>
            <p className="lead col-lg-8">{data.intro}</p>
            <div className="d-flex flex-wrap gap-2 mt-4">
              <a href="tel:+917875774499" className="btn btn-lg text-white fw-bold" style={{ background: "#ff7700" }}>Call Now</a>
              <Link to="/contact" className="btn btn-lg btn-outline-light fw-bold">Request Airport Quote</Link>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              {[
                ["Flight-focused pickup", "Share arrival or departure details so the booking and pickup can be planned perfectly around your schedule."],
                ["Right-size the vehicle", "Choose a comfortable car for a small party or ask about our spacious larger group vehicles."],
                ["Luggage planning", "Mention passengers and luggage pieces so the perfect vehicle can be selected for your airport run."],
                ["Private chauffeur", "Keep your party together in one vehicle instead of arranging multiple expensive airport cabs."]
              ].map(([t, d]) => (
                <div className="col-md-6 col-lg-3" key={t}>
                  <article className="h-100 border rounded-4 p-4 shadow-sm">
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
            <h2 className="fw-bold text-center mb-4">Airport Transfer Options</h2>
            <div className="row g-3">
              {[
                ["Pune Airport Cab", "/pune-airport-cab"],
                ["Mumbai Airport → Pune", "/mumbai-airport-to-pune-cab"],
                ["Pune Airport → Mumbai", "/pune-airport-to-mumbai-cab"],
                ["Tempo Traveller Hire", "/tempo-traveller-seater-hire-pune"],
                ["Force Urbania Rentals", "/force-urbania-on-rent-pune"],
                ["Premium Bus Rental", "/bus-rental-pune"]
              ].map(([t, h]) => (
                <div className="col-md-6 col-lg-4" key={t}>
                  <Link to={h} className="bg-white border rounded-3 p-4 d-block text-decoration-none text-dark fw-semibold shadow-sm transition-hover">
                    {t} <span style={{ color: '#ff7700', float: 'right' }}>&rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 className="fw-bold text-center mb-4">Airport Transfer FAQs</h2>
            {faqs.map(([q, a]) => (
              <details className="border rounded-3 p-3 mb-3 bg-white shadow-sm" key={q}>
                <summary className="fw-bold" style={{ cursor: 'pointer' }}>{q}</summary>
                <p className="text-muted mt-3 mb-0">{a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default AirportPage;