import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" }
  ];

  return (
    <>
      <SEO
        title="Privacy Policy | Shree Travels"
        description="Learn how Shree Travels collects, uses, and protects your personal information when you book a bus, Tempo Traveller, or Force Urbania rental in Pune."
        keywords="Shree Travels privacy policy, data protection Shree Travels, booking form privacy Pune travel"
        path="/privacy-policy"
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-light py-5">
        <div className="container py-4 text-center px-3">
          <h1 className="fw-bold mb-3 display-5 fs-3 fs-md-1">Privacy <span style={{ color: '#ff7700' }}>Policy</span></h1>
          <p className="text-muted lead fs-6 fs-md-5 max-w-75 mx-auto">
            How we collect, use, and protect your information when you use our website and services.
          </p>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <p className="text-muted mb-2" style={{ lineHeight: '1.8' }}>
                <strong>Last updated:</strong> September 2026
              </p>
              <p className="text-muted mb-5" style={{ lineHeight: '1.8' }}>
                This policy explains what personal information Shree Travels collects through
                amrutatravel.com, why we collect it, and how it is used. By using our website or
                submitting a booking or contact enquiry, you agree to the practices described here.
              </p>

              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#0f172a' }}>1. Information We Collect</h2>
                <p className="text-muted mb-2" style={{ lineHeight: '1.8' }}>
                  We collect information you provide directly to us, including:
                </p>
                <ul className="text-muted" style={{ lineHeight: '1.9' }}>
                  <li>Name, phone number, and email address submitted through our Booking or Contact forms</li>
                  <li>Travel details such as pickup date, destination, and vehicle preference</li>
                  <li>Any message or requirement you type into our contact or enquiry forms</li>
                  <li>Messages sent to us via WhatsApp or phone calls initiated from our website</li>
                </ul>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  We do not knowingly collect payment card details through this website; payment
                  arrangements are handled directly with our team.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#0f172a' }}>2. How We Use Your Information</h2>
                <p className="text-muted mb-2" style={{ lineHeight: '1.8' }}>We use the information we collect to:</p>
                <ul className="text-muted" style={{ lineHeight: '1.9' }}>
                  <li>Respond to booking enquiries and confirm reservations</li>
                  <li>Contact you by phone, email, or WhatsApp regarding your trip</li>
                  <li>Improve our services, fleet planning, and customer support</li>
                  <li>Meet legal, accounting, or regulatory requirements where applicable</li>
                </ul>
              </div>

              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#0f172a' }}>3. Third-Party Services We Use</h2>
                <p className="text-muted mb-2" style={{ lineHeight: '1.8' }}>
                  Our website embeds or links to a small number of third-party services, each governed
                  by its own privacy policy:
                </p>
                <ul className="text-muted" style={{ lineHeight: '1.9' }}>
                  <li><strong>Google Maps</strong> — used to display our office location and directions</li>
                  <li><strong>WhatsApp</strong> — used for the click-to-chat button so you can message our team directly</li>
                  <li><strong>Standard web hosting and analytics tools</strong> — used to understand site traffic and keep the site running reliably</li>
                </ul>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  We do not sell, rent, or trade your personal information to third parties for their
                  own marketing purposes.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#0f172a' }}>4. Data Retention & Security</h2>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  We retain booking and enquiry information only for as long as needed to fulfil your
                  request, maintain business records, or meet legal obligations. We take reasonable
                  administrative and technical measures to protect your information, though no method
                  of transmission over the internet is completely secure.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#0f172a' }}>5. Your Rights</h2>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  You may request access to, correction of, or deletion of the personal information we
                  hold about you at any time by contacting us using the details below. We will respond
                  to reasonable requests within a reasonable timeframe.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#0f172a' }}>6. Changes to This Policy</h2>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  We may update this Privacy Policy periodically to reflect changes in our practices or
                  legal requirements. Updates will be posted on this page with a revised "last updated"
                  date.
                </p>
              </div>

              <div className="p-4 rounded-4 bg-light">
                <h2 className="h5 fw-bold mb-2">Questions about your data?</h2>
                <p className="text-muted mb-0">
                  Contact us at{' '}
                  <a href="mailto:booking@amrutatravel.com" style={{ color: '#ff7700' }}>booking@amrutatravel.com</a>
                  {' '}or call{' '}
                  <a href="tel:+917875774499" style={{ color: '#ff7700' }}>+91 7875774499</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;