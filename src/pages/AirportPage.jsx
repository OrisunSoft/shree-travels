import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import SEO from "../components/SEO";

const AIRPORT_PAGES = {
  "pune-airport-cab": {
    h1: "Pune Airport Cab, Tempo Traveller & Bus Pickup Service",
    title: "Pune Airport Cab & Group Transfer Service | Lohegaon (PNQ) Pickup",
    description: "Book reliable Pune Airport (PNQ) transfers for families and corporate groups. Force Urbania @ ₹30/km, Tempo Travellers @ ₹22/km, and Mini Buses available 24/7.",
    intro: "Pre-book a punctual group transfer to or from Pune Lohegaon Airport (PNQ) with a spacious vehicle matched to your passenger count and luggage volume.",
    keywords: "Pune airport cab, airport pickup Pune, Pune airport tempo traveller, Pune airport bus hire, Lohegaon airport transfer Pune",
    image: "/img/Keyword Based Image/Keyword Based Image-16.jpg"
  },
  "mumbai-airport-to-pune-cab": {
    h1: "Mumbai Airport to Pune Cab, Urbania & Tempo Traveller",
    title: "Mumbai Airport to Pune Cab & Tempo Traveller | Direct Terminal 2 Pickup",
    description: "Book a direct transfer from Mumbai International Airport (BOM T1/T2) to Pune. Force Urbania ₹12,000, 13-Seater Tempo Traveller ₹9,000–10,000 with live flight tracking.",
    intro: "Keep your entire family or NRI group together in one comfortable vehicle from Mumbai Airport Terminal 1 & 2 straight to your doorstep in Pune via the Mumbai-Pune Expressway.",
    keywords: "Mumbai airport to Pune cab, Mumbai airport pickup, Mumbai airport to Pune tempo traveller, Mumbai airport to Pune Force Urbania",
    image: "/img/Keyword Based Image/Keyword Based Image-27.jpg"
  },
  "pune-airport-to-mumbai-cab": {
    h1: "Pune to Mumbai Airport Drop & Pickup Service",
    title: "Pune to Mumbai Airport Cab, Urbania & Bus Drop | 24/7 Punctual Transfer",
    description: "Travelling from Pune to Mumbai International Airport (CSMIA)? Book chauffeur-driven Force Urbania, Tempo Travellers, and Mini Buses for a stress-free international flight drop.",
    intro: "Travel from anywhere in Pune or PCMC to Mumbai Airport Terminal 2 with a dedicated chauffeur-driven vehicle sized for your heavy check-in luggage.",
    keywords: "Pune to Mumbai airport cab, Pune to Mumbai airport drop, Pune to Mumbai airport tempo traveller, Pune to Mumbai airport Urbania",
    image: "/img/Keyword Based Image/Keyword Based Image-39.jpg"
  },
  "mumbai-airport-to-pune-tempo-traveller": {
    h1: "Mumbai Airport to Pune Tempo Traveller & Force Urbania",
    title: "Mumbai Airport to Pune Tempo Traveller @ ₹9,000 | 13, 17 & 20 Seater",
    description: "Hire a 13, 17, 20, or 26 Seater AC Tempo Traveller or Force Urbania from Mumbai International Airport (T1/T2) to Pune. Ample luggage space & 24/7 flight tracking.",
    intro: "Landing at Mumbai International Airport with family or a corporate delegation? Skip booking 3 separate taxis and travel together to Pune in a luxury AC Tempo Traveller or Force Urbania.",
    keywords: "Mumbai airport to Pune tempo traveller, 17 seater tempo traveller Mumbai airport to Pune, Mumbai airport to Pune Urbania on rent",
    image: "/img/Keyword Based Image/Keyword Based Image-01.jpg"
  }
};

const AirportPage = () => {
  const { slug: paramSlug } = useParams();
  const location = useLocation();
  const pathSlug = location.pathname.replace(/^\/+/, "");
  const slug = paramSlug || pathSlug || "pune-airport-cab";
  const data = AIRPORT_PAGES[slug] || AIRPORT_PAGES["pune-airport-cab"];

  const faqs = [
    ["What is the fixed package rate for Mumbai Airport to Pune?", "Our Pune ↔ Mumbai Airport fixed package starts at ₹9,000 (Non-AC 13-Seater), ₹10,000 (AC 13-Seater), ₹12,000 (AC 17-Seater or 13-Seater Force Urbania), and ₹14,000 (17-Seater Force Urbania)."],
    ["Do you track international flight delays at Mumbai T2 and Pune Airport?", "Yes. Share your flight number while booking and our 24/7 dispatch team tracks live landing status so your driver is waiting at the arrival gate when you exit customs."],
    ["Can you accommodate 15–25 large international check-in suitcases?", "Yes! Our Tempo Travellers, Mini Buses, and Force Urbania vans feature dedicated rear luggage boots and covered rooftop carriers for heavy international baggage."],
    ["Do you also serve the upcoming Purandar Airport in Pune?", "Yes, visit our dedicated Purandar Airport Bus Hire Services Pune page for saswad-jejuri corridor group transfers."]
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": data.h1,
      "provider": {
        "@type": "AutoRental",
        "name": "Shree Travels",
        "telephone": "+917620411277",
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
    <div style={{ overflowX: "hidden", maxWidth: "100%" }}>
      <SEO
        title={data.title}
        description={data.description}
        path={`/${slug}`}
        image={data.image}
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
          <div className="container py-4">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <p className="text-uppercase fw-bold mb-2" style={{ color: "#ff7700" }}>24/7 Airport Transfers • PNQ & BOM</p>
                <h1 className="display-5 fw-bold text-white">{data.h1}</h1>
                <p className="lead text-light mt-3">{data.intro}</p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a href="tel:+917620411277" className="btn btn-lg text-white fw-bold px-4" style={{ background: "#ff7700" }}>
                    Call +91 76204 11277
                  </a>
                  <a
                    href={`https://wa.me/917875774499?text=${encodeURIComponent(`Hello Shree Travels, I want to book ${data.h1}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg text-white fw-bold px-4"
                    style={{ background: "#25D366" }}
                  >
                    WhatsApp +91 78757 74499
                  </a>
                  <Link to="/book-taxi" className="btn btn-lg btn-outline-light fw-bold px-4">
                    Book Online
                  </Link>
                </div>
              </div>
              <div className="col-lg-5">
                <img src={data.image} alt={data.h1} className="img-fluid rounded-4 shadow-lg w-100" style={{ maxHeight: "340px", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-white">
          <div className="container">
            <div className="row g-4">
              {[
                ["Live Flight Tracking", "Share your flight number and terminal details so our driver tracks delays and waits at the arrival gate on time."],
                ["13 to 50 Seater Fleet", "Choose from Tata Winger, 13–26 Seater Tempo Travellers, Luxury Force Urbania (@ ₹30/km), or 32–50 Seater Coaches."],
                ["Heavy Luggage Carriers", "Dedicated rear boot space and weatherproof rooftop carriers for international suitcases and golf kits."],
                ["Single-Vehicle Savings", "Keep your entire family or corporate delegation together instead of booking 3–4 separate airport cabs."]
              ].map(([t, d]) => (
                <div className="col-md-6 col-lg-3" key={t}>
                  <article className="h-100 border rounded-4 p-4 shadow-sm bg-light">
                    <h2 className="h5 fw-bold">{t}</h2>
                    <p className="text-muted mb-0">{d}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-light border-top border-bottom">
          <div className="container">
            <h2 className="fw-bold text-center mb-4">All Airport & Fleet Transfer Options</h2>
            <div className="row g-3">
              {[
                ["Pune Airport Cab & Van", "/pune-airport-cab"],
                ["Mumbai Airport → Pune Cab", "/mumbai-airport-to-pune-cab"],
                ["Pune → Mumbai Airport Drop", "/pune-airport-to-mumbai-cab"],
                ["Mumbai Airport → Pune Tempo Traveller", "/mumbai-airport-to-pune-tempo-traveller"],
                ["Purandar Airport Bus Hire Pune", "/purandar-airport-bus-hire-services-pune"],
                ["Force Urbania On Rent (@ ₹30/km)", "/force-urbania-on-rent-pune"]
              ].map(([t, h]) => (
                <div className="col-md-6 col-lg-4" key={t}>
                  <Link to={h} className="bg-white border rounded-3 p-4 d-block text-decoration-none text-dark fw-semibold shadow-sm">
                    {t} <span style={{ color: "#ff7700", float: "right" }}>&rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-white">
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 className="fw-bold text-center mb-4">Airport Transfer FAQs</h2>
            {faqs.map(([q, a]) => (
              <details className="border rounded-3 p-3 mb-3 bg-white shadow-sm" key={q}>
                <summary className="fw-bold" style={{ cursor: "pointer" }}>{q}</summary>
                <p className="text-muted mt-3 mb-0">{a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AirportPage;