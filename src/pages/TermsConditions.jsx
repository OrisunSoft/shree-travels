import React from 'react';
import SEO from '../components/SEO';

const TermsConditions = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Terms & Conditions", url: "/terms-and-conditions" }
  ];

  return (
    <>
      <SEO
        title="Terms & Conditions | Shree Travels"
        description="Read the terms and conditions governing bus, Tempo Traveller, and Force Urbania rentals with Shree Travels in Pune, including booking, payment, and cancellation policies."
        keywords="Shree Travels terms and conditions, bus rental policy Pune, booking terms Shree Travels"
        path="/terms-and-conditions"
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-light py-5">
        <div className="container py-4 text-center px-3">
          <h1 className="fw-bold mb-3 display-5 fs-3 fs-md-1">Terms & <span style={{ color: '#ff7700' }}>Conditions</span></h1>
          <p className="text-muted lead fs-6 fs-md-5 max-w-75 mx-auto">
            Please read these terms carefully before booking a vehicle with Shree Travels.
          </p>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <p className="text-muted mb-5" style={{ lineHeight: '1.8' }}>
                These terms and conditions apply to all bookings made with Shree Travels ("we", "us", "our"),
                including bus, Tempo Traveller, Force Urbania, and car rentals, whether booked online, by phone,
                or in person at our office in Vadgaon Budruk, Pune. By confirming a booking with us, you agree
                to the terms below.
              </p>

              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#0f172a' }}>1. Booking & Confirmation</h2>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  A booking is confirmed only once we have acknowledged your travel dates, vehicle choice, and
                  route, and the required advance payment has been received. Verbal or written enquiries alone
                  do not constitute a confirmed booking.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#0f172a' }}>2. Advance Payment & Security Deposit</h2>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  Advance booking requires 50% of the total estimated fare, along with a security deposit, to be
                  paid at least 2 days before the scheduled trip date. The remaining balance is payable at the
                  conclusion of the trip unless otherwise agreed in writing.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#0f172a' }}>3. Fare, Distance & Additional Charges</h2>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  Quoted package fares include an average daily distance allowance of 300 km unless a specific
                  route package (e.g. Mumbai, Mahabaleshwar, Shirdi) states otherwise. Toll charges, parking fees,
                  passenger tax, GST, and the cost of any special state permits are not included in the base fare
                  and are payable by the hiring party. Travel beyond the included hours or distance is charged at
                  the applicable extra-hour or per-km rate shown on our Packages page.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#0f172a' }}>4. Service Hours</h2>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  Vehicles operate between 6:00 AM and 12:00 midnight. Any requirement for travel outside these
                  hours should be discussed with our team in advance, as it may attract additional charges.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#0f172a' }}>5. Cancellations & Rescheduling</h2>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  Cancellation and rescheduling requests are handled on a case-by-case basis depending on how
                  close the request is to the travel date, vehicle availability, and any costs already incurred
                  on your behalf (such as permits). Please contact us directly at +91 7875774499 as early as
                  possible if your plans change — the security deposit and advance payment may be non-refundable
                  for late cancellations.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#0f172a' }}>6. Passenger Conduct & Vehicle Care</h2>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  Passengers are expected to treat vehicles, drivers, and staff with respect. Smoking, consumption
                  of alcohol, and carriage of hazardous or illegal material inside the vehicle are strictly
                  prohibited. Any damage caused to the vehicle beyond normal wear and tear during the hire period
                  will be charged to the hiring party.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#0f172a' }}>7. Liability</h2>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  We take reasonable care to ensure our fleet is well-maintained and drivers are experienced.
                  However, Shree Travels is not liable for delays or disruptions caused by circumstances beyond
                  our reasonable control, including but not limited to traffic conditions, weather, road closures,
                  strikes, or government-imposed restrictions.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: '#0f172a' }}>8. Changes to These Terms</h2>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  We may update these terms from time to time to reflect changes in our services or applicable
                  regulations. The version published on this page at the time of your booking will apply to that
                  booking.
                </p>
              </div>

              <div className="p-4 rounded-4 bg-light">
                <h2 className="h5 fw-bold mb-2">Questions about these terms?</h2>
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

export default TermsConditions;