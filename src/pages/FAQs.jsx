import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How do I book a bus, Tempo Traveller, or Force Urbania?",
      a: "You can book online through our booking form, call us directly at +91 7875774499 / +91 7875774499, or message us on WhatsApp. We confirm most bookings within 5 minutes of receiving your travel dates and vehicle preference."
    },
    {
      q: "What advance payment is required to confirm a booking?",
      a: "Advance booking requires 50% of the total amount, along with a security deposit, to be paid at least 2 days before the trip date. The balance is settled at the end of the trip."
    },
    {
      q: "What is included in the daily distance limit for outstation trips?",
      a: "The standard package covers 300 km per day for outstation trips. Dedicated packages are also available for popular routes like Mumbai, Mahabaleshwar, and Shirdi — see our Packages page for exact fares by seater size."
    },
    {
      q: "Are toll, parking, and GST included in the quoted price?",
      a: "No. Toll, parking charges, passenger tax, GST, and the cost of any special permits are payable separately by the hiring party, in addition to the quoted package or per-km rate."
    },
    {
      q: "What are your operating hours?",
      a: "Our vehicles operate from 6:00 AM to 12:00 midnight. Any usage beyond this window, or beyond the included hours in your package, is billed at the extra-hour rate listed on our Packages page."
    },
    {
      q: "Do you provide both AC and Non-AC buses?",
      a: "Yes. We offer both AC and Non-AC buses across seating capacities from 13 to 49 seats, along with Tempo Travellers, Tata Winger, and premium Force Urbania vehicles."
    },
    {
      q: "Can I hire a bus or Urbania for a single day local trip within Pune?",
      a: "Yes, we offer local Pune packages (commonly referred to as 8 hours / 80 km packages) for city sightseeing, corporate events, weddings, and airport transfers, in addition to outstation hire."
    },
    {
      q: "Do you offer pick-up and drop-off at my location?",
      a: "Yes, free pick-up and drop-off is available within our serviceable areas in Pune and Pimpri-Chinchwad, including Hinjewadi, Kharadi, Wakad, Baner, and surrounding localities."
    },
    {
      q: "Can I cancel or reschedule my booking?",
      a: "Cancellations and rescheduling are handled case-by-case depending on how close the request is to your travel date. Please call our team directly at +91 7875774499 to discuss your specific booking — we'll always try to find a workable solution."
    },
    {
      q: "Do you provide vehicles for cities outside Pune and Mumbai?",
      a: "Yes, alongside our Pune and Mumbai operations, we support bookings across our wider network including Delhi, Bangalore, Hyderabad, Chennai, Kolkata, Jaipur, and Ahmedabad. Visit our Network page for details."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "FAQs", url: "/faqs" }
  ];

  return (
    <>
      <SEO
        title="Frequently Asked Questions | Bus & Urbania Rental Pune"
        description="Answers to common questions about booking buses, Tempo Travellers and Force Urbania with Shree Travels — payments, distance limits, timings, and cancellations."
        keywords="Shree Travels FAQ, bus rental questions Pune, Force Urbania booking help, tempo traveller hire FAQ"
        path="/faqs"
        schema={faqSchema}
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-light py-5">
        <div className="container py-4 text-center px-3">
          <h1 className="fw-bold mb-3 display-5 fs-3 fs-md-1">Frequently Asked <span style={{ color: '#ff7700' }}>Questions</span></h1>
          <p className="text-muted lead fs-6 fs-md-5 max-w-75 mx-auto">
            Everything you need to know before booking your bus, Tempo Traveller, or Force Urbania with us.
          </p>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion" id="faqAccordion">
                {faqs.map((item, index) => (
                  <div className="accordion-item border-0 shadow-sm rounded-4 overflow-hidden mb-3" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button fw-semibold ${openIndex === index ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        style={openIndex === index ? { backgroundColor: '#fff5ec', color: '#0f172a' } : {}}
                      >
                        {item.q}
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}>
                      <div className="accordion-body text-muted" style={{ lineHeight: '1.7' }}>
                        {item.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-5 p-4 rounded-4 bg-light">
                <h3 className="h5 fw-bold mb-2">Still have a question?</h3>
                <p className="text-muted mb-3">Our team is happy to help with anything not covered here.</p>
                <Link to="/contact" className="btn text-white fw-bold px-4 py-2 rounded-pill" style={{ backgroundColor: '#ff7700' }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;