import React from 'react';
import SEO from '../components/SEO';

const GOOGLE_BUSINESS_PROFILE = "https://share.google/p6WieDC55DgKtuLN6";

const Reviews = () => {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://shreetravels.in/reviews#webpage",
    "url": "https://shreetravels.in/reviews",
    "name": "Google Reviews | Shree Travels Pune",
    "description": "See the latest Google rating, customer reviews, photos and business information for Shree Travels in Pune.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://shreetravels.in/#website",
      "url": "https://shreetravels.in",
      "name": "Shree Travels"
    },
    "about": {
      "@type": "LocalBusiness",
      "@id": "https://shreetravels.in/#organization",
      "name": "Shree Travels",
      "url": "https://shreetravels.in",
      "telephone": "+91-7875774499",
      "hasMap": GOOGLE_BUSINESS_PROFILE,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office no 201, Dodke Palazzo, near mahatma society, Pramathesh Housing Society, Jijai Nagar, Kothrud",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411038",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <SEO
        title="Google Reviews & Customer Feedback in Pune"
        description="See the latest Google rating, customer reviews, photos and business information for Shree Travels in Pune."
        path="/reviews"
        image="https://shreetravels.in/img/force-urbania.jpg"
        schema={reviewsSchema}
      />

      <main>
        <section className="py-5" style={{ backgroundColor: '#0f172a' }}>
          <div className="container py-5 text-center text-white">
            <span
              className="badge rounded-pill px-3 py-2 mb-3"
              style={{ backgroundColor: '#ff7700' }}
            >
              <i className="fab fa-google me-2"></i>
              Google Business Profile
            </span>

            <h1 className="display-5 fw-bold mb-3">
              Shree Travels <span style={{ color: '#ff7700' }}>Google Reviews</span>
            </h1>

            <p className="lead text-light opacity-75 mx-auto mb-0" style={{ maxWidth: '760px' }}>
              Check the latest Google rating and genuine customer reviews for
              Shree Travels, Pune, directly on Google.
            </p>
          </div>
        </section>

        <section className="py-5 bg-white">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="p-4 p-md-5 rounded-4 border shadow-sm text-center">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-4"
                    style={{
                      width: '72px',
                      height: '72px',
                      backgroundColor: '#fff3e6',
                      color: '#ff7700'
                    }}
                  >
                    <i className="fab fa-google fa-2x"></i>
                  </div>

                  <h2 className="h3 fw-bold mb-3">
                    View our current Google rating
                  </h2>

                  <p className="text-muted fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                    Google is the source of truth for our current star rating,
                    review count, customer comments, photos and business profile
                    information. Open our Google Business Profile to see the latest
                    information directly from Google.
                  </p>

                  <a
                    href={GOOGLE_BUSINESS_PROFILE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg fw-bold text-white rounded-pill px-5 py-3"
                    style={{ backgroundColor: '#ff7700' }}
                  >
                    <i className="fab fa-google me-2"></i>
                    View Google Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light border-top">
          <div className="container py-4">
            <div className="text-center mb-5">
              <h2 className="h3 fw-bold">
                Why Customer Reviews <span style={{ color: '#ff7700' }}>Matter</span>
              </h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '750px' }}>
                Customer feedback helps travellers evaluate service quality before
                booking. We encourage genuine reviews based on real travel experiences.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="bg-white rounded-4 p-4 h-100 shadow-sm border">
                  <i className="fas fa-star fa-2x mb-3" style={{ color: '#f59e0b' }}></i>
                  <h3 className="h5 fw-bold">Current Google Rating</h3>
                  <p className="text-muted mb-0">
                    Check Google's live rating instead of relying on a manually
                    entered number on the website.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="bg-white rounded-4 p-4 h-100 shadow-sm border">
                  <i className="fas fa-comments fa-2x mb-3" style={{ color: '#ff7700' }}></i>
                  <h3 className="h5 fw-bold">Genuine Feedback</h3>
                  <p className="text-muted mb-0">
                    Read comments from customers who have shared their experience
                    with Shree Travels on Google.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="bg-white rounded-4 p-4 h-100 shadow-sm border">
                  <i className="fas fa-bus fa-2x mb-3" style={{ color: '#ff7700' }}></i>
                  <h3 className="h5 fw-bold">Travel With Confidence</h3>
                  <p className="text-muted mb-0">
                    Review our Google business information before booking your
                    Tempo Traveller, Force Urbania, bus or other travel service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-white">
          <div className="container text-center">
            <h2 className="h3 fw-bold mb-3">Travelled With Shree Travels?</h2>
            <p className="text-muted mb-4">
              Your genuine feedback helps future customers make an informed decision.
            </p>
            <a
              href={GOOGLE_BUSINESS_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark fw-bold rounded-pill px-4 py-3"
            >
              <i className="fab fa-google me-2"></i>
              Leave / Read a Google Review
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Reviews;