import React from 'react';
import SEO from '../components/SEO';

const Careers = () => {
  const roles = [
    {
      title: "Drivers (Bus, Tempo Traveller & Force Urbania)",
      desc: "Experienced, licensed drivers for local Pune routes and outstation trips. Familiarity with routes to Mumbai, Mahabaleshwar, and Shirdi is a plus."
    },
    {
      title: "Customer Support & Booking Coordinators",
      desc: "Handle enquiries, confirm bookings, and coordinate schedules between customers and our fleet team."
    },
    {
      title: "Fleet & Operations Staff",
      desc: "Vehicle maintenance, cleaning, and day-to-day operational support to keep our fleet running reliably."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Careers", url: "/careers" }
  ];

  return (
    <>
      <SEO
        title="Careers | Join Shree Travels Pune"
        description="Interested in working with Shree Travels? We regularly look for drivers, booking coordinators, and operations staff for our Pune-based bus rental business."
        keywords="Shree Travels careers, bus driver jobs Pune, travel company jobs Pune"
        path="/careers"
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-light py-5">
        <div className="container py-4 text-center px-3">
          <h1 className="fw-bold mb-3 display-5 fs-3 fs-md-1">Careers at <span style={{ color: '#ff7700' }}>Shree Travels</span></h1>
          <p className="text-muted lead fs-6 fs-md-5 max-w-75 mx-auto">
            Join a team that's been keeping Pune moving since 2003.
          </p>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <p className="text-muted mb-5 text-center" style={{ lineHeight: '1.8' }}>
                We don't always have open positions listed, but as a growing fleet rental business
                we're regularly looking to connect with reliable, experienced people for roles like
                the ones below. If your experience matches, we'd like to hear from you even without
                a specific vacancy posted here.
              </p>

              <div className="row g-4 mb-5">
                {roles.map((role, i) => (
                  <div className="col-md-4" key={i}>
                    <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                      <h3 className="h6 fw-bold mb-2" style={{ color: '#0f172a' }}>{role.title}</h3>
                      <p className="text-muted small mb-0">{role.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 p-md-5 rounded-4 text-center" style={{ backgroundColor: '#0f172a' }}>
                <h2 className="h4 fw-bold text-white mb-3">How to Apply</h2>
                <p className="text-light opacity-75 mb-4 max-w-75 mx-auto">
                  Send us your resume and a short note about your experience and the role you're
                  interested in. Our team reviews applications on an ongoing basis and will reach out
                  if there's a fit.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <a
                    href="mailto:booking@amrutatravel.com?subject=Job%20Application%20-%20Shree%20Travels"
                    className="btn btn-lg text-white fw-bold px-4 py-3 rounded-pill shadow-sm"
                    style={{ backgroundColor: '#ff7700' }}
                  >
                    <i className="fas fa-envelope me-2"></i> Email Your Resume
                  </a>
                  <a
                    href="tel:+917875774499"
                    className="btn btn-lg btn-outline-light fw-bold px-4 py-3 rounded-pill"
                  >
                    <i className="fas fa-phone-alt me-2"></i> Call +91 7875774499
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;