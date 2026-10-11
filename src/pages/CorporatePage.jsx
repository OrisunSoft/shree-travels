import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import SEO from "../components/SEO";

const CORPORATE = {
  "corporate-car-rental-pune": {
    h1: "Corporate Car & Urbania Rental in Pune",
    title: "Corporate Car & Force Urbania Rental in Pune | Executive Chauffeur Service",
    description: "Chauffeur-driven corporate car, Force Urbania Starting at ₹32/km, and executive van rental in Pune for client visits, airport transfers, and IT park meetings.",
    image: "/img/Keyword Based Image/Keyword Based Image-41.jpg"
  },
  "corporate-bus-rental-pune": {
    h1: "Corporate Bus Rental in Pune",
    title: "Corporate Bus Rental in Pune | 20 to 50 Seater Staff & Event Coaches",
    description: "Corporate bus rental in Pune for employee movement, events, conferences, offsites and group transportation across Hinjewadi, Kharadi, Magarpatta & Chakan.",
    image: "/img/Keyword Based Image/Keyword Based Image-58.jpg"
  },
  "employee-transportation-pune": {
    h1: "Employee Transportation Services in Pune",
    title: "Employee Transportation in Pune | Monthly Contract Buses & Staff Shuttles",
    description: "Daily and monthly employee transportation solutions across Pune IT parks and MIDC zones including Hinjewadi, Kharadi, Baner, Hadapsar, Chakan and Pimpri-Chinchwad.",
    image: "/img/Keyword Based Image/Keyword Based Image-33.jpg"
  },
  "school-college-bus-rental-pune": {
    h1: "School & College Bus Rental in Pune",
    title: "School & College Bus Hire in Pune | Safe Educational Trip & Picnic Buses",
    description: "RTO-compliant 32, 40, 45, and 50 seater buses on rent in Pune for school picnics, educational excursions, industrial visits, and college fests.",
    image: "/img/Keyword Based Image/Keyword Based Image-19.jpg"
  }
};

const CorporatePage = () => {
  const { slug: paramSlug } = useParams();
  const location = useLocation();
  const pathSlug = location.pathname.replace(/^\/+/, "");
  const slug = paramSlug || pathSlug || "corporate-bus-rental-pune";
  const data = CORPORATE[slug] || CORPORATE["corporate-bus-rental-pune"];

  const faqs = [
    ["Can you handle recurring monthly corporate transportation?", "Yes, we provide daily and monthly contract buses, Mini Buses, and Tempo Travellers with GPS tracking, dedicated route supervisors, and GST-compliant monthly billing."],
    ["Can you provide vehicles for corporate events and team offsites?", "Yes. Force Urbania Starting at ₹32/km, 17-26 seater Tempo Travellers, and 32-50 seater AC luxury coaches are available for conferences and weekend offsites to Lonavala, Mahabaleshwar, and Goa."],
    ["Do you provide Mumbai & Pune airport transfers for business travellers?", "Yes. 24/7 punctual airport transfers are arranged for individual executives and corporate delegations at Pune Airport (PNQ) and Mumbai Airport (BOM T2)."],
    ["How do we request a corporate quotation?", "Call +91 7620411277 or WhatsApp +91 78757 74499 with your route, shift timings, or event dates to receive an instant commercial proposal."]
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": data.h1,
      "serviceType": "Corporate transportation",
      "provider": {
        "@type": "AutoRental",
        "name": "Shree Travels",
        "telephone": "+917620411277",
        "url": "https://shreetravels.in"
      },
      "areaServed": ["Pune", "Hinjewadi", "Kharadi", "Baner", "Hadapsar", "Pimpri-Chinchwad"],
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
        keywords={`${data.h1}, corporate travel Pune, employee transportation Pune, corporate bus rental Pune, school bus hire Pune`}
        schema={schema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/service" },
          { name: data.h1, url: `/${slug}` }
        ]}
      />
      <main>
        <section className="py-5 text-white" style={{ background: "linear-gradient(135deg,#0f172a,#1e293b)" }}>
          <div className="container py-4">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <p className="text-uppercase fw-bold mb-2" style={{ color: "#ff7700" }}>Corporate & Institutional Mobility • Pune</p>
                <h1 className="display-5 fw-bold text-white">{data.h1}</h1>
                <p className="lead mt-3 text-light">{data.description}</p>
                <div className="mt-4 d-flex flex-wrap gap-3">
                  <a href="tel:+917620411277" className="btn btn-lg text-white fw-bold px-4" style={{ background: "#ff7700" }}>
                    <span className="d-none d-sm-inline">Call +91 76204 11277</span>
                    <span className="d-inline d-sm-none">Call Now</span>
                  </a>
                  <a
                    href={`https://wa.me/917875774499?text=${encodeURIComponent(`Hello Shree Travels, I need a corporate quote for ${data.h1}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg text-white fw-bold px-4"
                    style={{ background: "#25D366" }}
                  >
                    <span className="d-none d-sm-inline">WhatsApp +91 78757 74499</span>
                    <span className="d-inline d-sm-none">WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-light fw-bold px-4 rounded-pill open-booking-popup-btn"
                    data-vehicle={data.h1}
                    data-place={data.h1}
                  >
                    Instant Enquiry
                  </button>
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
            <h2 className="fw-bold text-center mb-4">Built Around Business & Institutional Travel Requirements</h2>
            <div className="row g-4">
              {[
                ["Scheduled employee movement", "Plan recurring monthly shifts or one-time transportation around employee pickup points and IT park schedules."],
                ["Client & executive travel", "Use chauffeur-driven Force Urbania (@ ₹32/km) or luxury coaches for VIP delegations, airport transfers, and plant visits."],
                ["Corporate events & offsites", "Move teams seamlessly between offices, 5-star hotels, convention halls, and Lonavala/Mahabaleshwar offsite resorts."],
                ["GST & SLA compliance", "100% RTO-compliant commercial permits, speed governors, GPS tracking, and clean monthly GST invoicing."],
                ["Multi-bus route coordination", "Dedicated on-ground transport supervisors for large 200 to 2,000+ attendee conferences and annual days."],
                ["24/7 control desk backup", "Immediate standby replacement vehicle support from our Pimpri-Chinchwad, Hinjewadi, and Kharadi hubs."]
              ].map(([t, d]) => (
                <div className="col-md-6 col-lg-4" key={t}>
                  <article className="h-100 border rounded-4 p-4 shadow-sm bg-light">
                    <h3 className="h5 fw-bold">{t}</h3>
                    <p className="text-muted mb-0">{d}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-light border-top border-bottom">
          <div className="container">
            <h2 className="fw-bold mb-3">Pune Corporate & Industrial Hub Coverage</h2>
            <p className="text-muted">
              Shree Travels supports daily staff shuttles and corporate event transport across all major IT parks and MIDC industrial zones in Pune:
            </p>
            <div className="d-flex flex-wrap gap-2 mt-4">
              {["Hinjewadi", "Kharadi", "Baner", "Wakad", "Hadapsar", "Kothrud", "Pimpri-Chinchwad"].map((a) => (
                <Link
                  key={a}
                  to={`/vehicle-rental-${a.toLowerCase().replace(/ /g, "-")}`}
                  className="badge rounded-pill text-bg-dark text-decoration-none p-3"
                >
                  {a}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-white">
          <div className="container">
            <div className="row g-4">
              {[
                ["13–20 Seater Fleet", "/13-seater-on-rent-pune"],
                ["Tempo Travellers", "/tempo-traveller-seater-hire-pune"],
                ["Force Urbania (@ ₹30/km)", "/force-urbania-on-rent-pune"],
                ["32–50 Seater Buses", "/bus-rental-pune"]
              ].map(([n, h]) => (
                <div className="col-sm-6 col-lg-3" key={n}>
                  <Link to={h} className="d-block border rounded-4 p-4 h-100 text-decoration-none shadow-sm text-dark">
                    <h3 className="h5 fw-bold" style={{ color: "#0f172a" }}>{n}</h3>
                    <span style={{ color: "#ff7700", fontWeight: 600 }}>Explore vehicle options →</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 className="fw-bold text-center mb-4">Corporate Travel FAQs</h2>
            {faqs.map(([q, a]) => (
              <details className="border rounded-3 p-3 mb-3 bg-white" key={q}>
                <summary className="fw-bold">{q}</summary>
                <p className="text-muted mt-3 mb-0">{a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CorporatePage;