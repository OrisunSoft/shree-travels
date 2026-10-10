import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp, FaTimes, FaBus, FaCalendarAlt, FaMapMarkerAlt, FaUser, FaPhoneAlt, FaSnowflake } from 'react-icons/fa';

export const ALL_SEATER_VEHICLES = [
  { value: '9 Seater Tata Winger (@ ₹20/km)', label: '9 Seater Tata Winger (@ ₹20/km)', keywords: ['9 seater', 'winger'] },
  { value: '10 Seater Force Urbania (@ ₹32/km)', label: '10 Seater Force Urbania (@ ₹32/km)', keywords: ['10 seater', '10 seater urbania'] },
  { value: '12 Seater Tempo Traveller (@ ₹22/km)', label: '12 Seater Tempo Traveller (@ ₹22/km)', keywords: ['12 seater'] },
  { value: '13 Seater Tempo Traveller (@ ₹22–25/km)', label: '13 Seater Tempo Traveller (Non-AC ₹22/km | AC ₹25/km)', keywords: ['13 seater tempo', '13 seater'] },
  { value: '13 Seater Force Urbania (@ ₹32/km)', label: '13 Seater Force Urbania Luxury Van (@ ₹32/km)', keywords: ['13 seater urbania', '13 seater force urbania'] },
  { value: '13 Seater Tata Winger (@ ₹22–25/km)', label: '13 Seater Tata Winger (@ ₹22–25/km)', keywords: ['13 seater winger'] },
  { value: '14 Seater Tempo Traveller (@ ₹22–25/km)', label: '14 Seater Tempo Traveller (@ ₹22–25/km)', keywords: ['14 seater'] },
  { value: '15 Seater Mini Bus / Winger (@ ₹30/km)', label: '15 Seater Mini Bus / Winger (@ ₹30/km)', keywords: ['15 seater'] },
  { value: '17 Seater Tempo Traveller (@ ₹22–25/km)', label: '17 Seater Tempo Traveller (Non-AC ₹22/km | AC ₹25/km)', keywords: ['17 seater tempo', '17 seater'] },
  { value: '17 Seater Force Urbania (@ ₹32/km)', label: '17 Seater Force Urbania Luxury Van (@ ₹32/km)', keywords: ['17 seater urbania', '17 seater force urbania', 'urbania'] },
  { value: '17 Seater Mini Bus (@ ₹25/km)', label: '17 Seater Mini Bus (@ ₹25/km)', keywords: ['17 seater bus', '17 seater mini'] },
  { value: '20 Seater Tempo Traveller / Mini Bus (@ ₹28/km)', label: '20 Seater Tempo Traveller / Mini Bus (@ ₹28/km)', keywords: ['20 seater'] },
  { value: '24 Seater AC Mini Bus (@ ₹38/km)', label: '24 Seater AC Mini Bus (@ ₹38/km)', keywords: ['24 seater'] },
  { value: '25 Seater Mini Bus (@ ₹38/km)', label: '25 Seater Mini Bus (@ ₹38/km)', keywords: ['25 seater'] },
  { value: '26 Seater Maharaja Tempo Traveller (@ ₹38/km)', label: '26 Seater Maharaja Tempo Traveller (@ ₹38/km)', keywords: ['26 seater'] },
  { value: '30 Seater Bus (@ ₹32/km)', label: '30 Seater Bus (@ ₹32/km)', keywords: ['30 seater'] },
  { value: '32 Seater Bus 2x2 Pushback (@ ₹45/km)', label: '32 Seater Bus 2x2 Pushback (@ ₹45/km)', keywords: ['32 seater'] },
  { value: '35 Seater Bus (Non-AC ₹40/km | AC ₹50/km)', label: '35 Seater Bus (Non-AC ₹40/km | AC ₹50/km)', keywords: ['35 seater'] },
  { value: '40 Seater Luxury AC Bus (@ ₹60/km)', label: '40 Seater Luxury AC Bus (@ ₹60/km)', keywords: ['40 seater'] },
  { value: '45 Seater Bus (Non-AC ₹48/km | AC ₹60/km)', label: '45 Seater Bus (Non-AC ₹48/km | AC ₹60/km)', keywords: ['45 seater'] },
  { value: '49 / 50 Seater Large Coach (Non-AC ₹50/km | AC ₹90/km)', label: '49 / 50 Seater Large Coach (Non-AC ₹50/km | AC ₹90/km)', keywords: ['49 seater', '50 seater'] },
  { value: 'Scania 45 Seater Multi-Axle AC Bus (@ ₹80/km)', label: 'Scania 45 Seater Multi-Axle AC Bus (@ ₹80/km)', keywords: ['scania'] },
  { value: 'Volvo 49 Seater Multi-Axle AC Bus (@ ₹90/km)', label: 'Volvo 49 Seater Multi-Axle AC Bus (@ ₹90/km)', keywords: ['volvo 49', 'volvo'] },
  { value: 'Volvo 53 Seater Multi-Axle AC Coach (@ ₹95/km)', label: 'Volvo 53 Seater Multi-Axle AC Coach (@ ₹95/km)', keywords: ['volvo 53', '53 seater'] },
  { value: 'Outstation Cab (Sedan Dzire / Ertiga / Innova Crysta)', label: 'Outstation Cab (Sedan Dzire / Ertiga / Innova Crysta)', keywords: ['cab', 'innova', 'ertiga', 'sedan'] }
];

const detectDefaultPlaceFromPage = (pathname) => {
  const cleanPath = (pathname || '/').toLowerCase();
  if (cleanPath.includes('lonavala')) return 'Lonavala & Khandala';
  if (cleanPath.includes('mahabaleshwar')) return 'Pune to Mahabaleshwar';
  if (cleanPath.includes('mumbai')) return 'Mumbai / Pune to Mumbai';
  if (cleanPath.includes('shirdi')) return 'Shirdi Sai Baba Darshan';
  if (cleanPath.includes('nashik')) return 'Nashik & Trimbakeshwar';
  if (cleanPath.includes('goa')) return 'Pune to Goa';
  if (cleanPath.includes('konkan')) return 'Pune to Konkan Darshan';
  if (cleanPath.includes('ashtavinayak')) return 'Ashtavinayak Darshan from Pune';
  if (cleanPath.includes('jyotirlinga') || cleanPath.includes('bhimashankar')) return 'Bhimashankar & 5 Jyotirlinga';
  if (cleanPath.includes('shakti-peeth')) return 'Sade Teen Shakti Peeth';
  if (cleanPath.includes('hinjewadi')) return 'Hinjewadi IT Park, Pune';
  if (cleanPath.includes('kharadi')) return 'Kharadi, Pune';
  if (cleanPath.includes('baner')) return 'Baner, Pune';
  if (cleanPath.includes('wakad')) return 'Wakad, Pune';
  if (cleanPath.includes('hadapsar')) return 'Hadapsar, Pune';
  if (cleanPath.includes('kothrud')) return 'Kothrud, Pune';
  if (cleanPath.includes('pimpri')) return 'Pimpri-Chinchwad (PCMC)';
  if (cleanPath.includes('airport')) return 'Pune / Mumbai Airport Transfer';

  const h1El = document.querySelector('main h1');
  if (h1El && h1El.textContent) {
    const h1Text = h1El.textContent.trim();
    if (h1Text.length > 3 && h1Text.length < 75) {
      return h1Text;
    }
  }
  return 'Pune (Local / Outstation)';
};

const matchVehicleOption = (rawText) => {
  const text = (rawText || '').toLowerCase();
  if (!text) return ALL_SEATER_VEHICLES[3].value;

  // Check Urbania specific seaters first
  if (text.includes('urbania')) {
    if (text.includes('10')) return '10 Seater Force Urbania (@ ₹32/km)';
    if (text.includes('13')) return '13 Seater Force Urbania (@ ₹32/km)';
    return '17 Seater Force Urbania (@ ₹32/km)';
  }
  if (text.includes('winger')) {
    if (text.includes('9')) return '9 Seater Tata Winger (@ ₹20/km)';
    if (text.includes('15')) return '15 Seater Mini Bus / Winger (@ ₹30/km)';
    return '13 Seater Tata Winger (@ ₹22–25/km)';
  }
  if (text.includes('scania')) return 'Scania 45 Seater Multi-Axle AC Bus (@ ₹80/km)';
  if (text.includes('volvo 53') || text.includes('53 seater')) return 'Volvo 53 Seater Multi-Axle AC Coach (@ ₹95/km)';
  if (text.includes('volvo')) return 'Volvo 49 Seater Multi-Axle AC Bus (@ ₹90/km)';
  if (text.includes('49') || text.includes('50')) return '49 / 50 Seater Large Coach (Non-AC ₹50/km | AC ₹90/km)';
  if (text.includes('45')) return '45 Seater Bus (Non-AC ₹48/km | AC ₹60/km)';
  if (text.includes('40')) return '40 Seater Luxury AC Bus (@ ₹60/km)';
  if (text.includes('35')) return '35 Seater Bus (Non-AC ₹40/km | AC ₹50/km)';
  if (text.includes('32')) return '32 Seater Bus 2x2 Pushback (@ ₹45/km)';
  if (text.includes('30')) return '30 Seater Bus (@ ₹32/km)';
  if (text.includes('26')) return '26 Seater Maharaja Tempo Traveller (@ ₹38/km)';
  if (text.includes('25')) return '25 Seater Mini Bus (@ ₹38/km)';
  if (text.includes('24')) return '24 Seater AC Mini Bus (@ ₹38/km)';
  if (text.includes('20')) return '20 Seater Tempo Traveller / Mini Bus (@ ₹28/km)';
  if (text.includes('17') && text.includes('bus')) return '17 Seater Mini Bus (@ ₹25/km)';
  if (text.includes('17')) return '17 Seater Tempo Traveller (@ ₹22–25/km)';
  if (text.includes('15')) return '15 Seater Mini Bus / Winger (@ ₹30/km)';
  if (text.includes('14')) return '14 Seater Tempo Traveller (@ ₹22–25/km)';
  if (text.includes('13')) return '13 Seater Tempo Traveller (@ ₹22–25/km)';
  if (text.includes('12')) return '12 Seater Tempo Traveller (@ ₹22/km)';
  if (text.includes('10')) return '10 Seater Force Urbania (@ ₹32/km)';
  if (text.includes('9')) return '9 Seater Tata Winger (@ ₹20/km)';
  if (text.includes('cab') || text.includes('innova') || text.includes('ertiga') || text.includes('sedan')) {
    return 'Outstation Cab (Sedan Dzire / Ertiga / Innova Crysta)';
  }

  return ALL_SEATER_VEHICLES[3].value;
};

const BookingPopupModal = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    date: new Date().toISOString().split('T')[0],
    vehicle: ALL_SEATER_VEHICLES[3].value,
    acType: 'AC',
    place: 'Pune (Local / Outstation)',
    rowSummary: ''
  });

  const openModalWithContext = useCallback(
    ({ rawVehicleText = '', rawAcText = '', customPlace = '', rowSummary = '' } = {}) => {
      const pagePlace = customPlace || detectDefaultPlaceFromPage(location.pathname);
      const matchedVehicle = matchVehicleOption(`${rawVehicleText} ${location.pathname}`);
      const combinedAcCheck = `${rawAcText} ${rawVehicleText}`.toLowerCase();
      const detectedAc = combinedAcCheck.includes('non-ac') || combinedAcCheck.includes('non ac') ? 'Non-AC' : 'AC';

      setFormData((prev) => ({
        ...prev,
        vehicle: matchedVehicle,
        acType: detectedAc,
        place: pagePlace,
        rowSummary
      }));
      setIsOpen(true);
    },
    [location.pathname]
  );

  useEffect(() => {
    // Expose global helper in case any component wants to trigger it directly
    window.openShreeBookingModal = openModalWithContext;

    const handleDocumentClick = (e) => {
      const trigger = e.target.closest('a, button');
      if (!trigger) return;

      const insideTable = trigger.closest('table, .table-responsive');
      const hasExplicitTrigger = trigger.classList.contains('open-booking-popup-btn');

      if (!insideTable && !hasExplicitTrigger) return;

      e.preventDefault();
      e.stopPropagation();

      const tr = trigger.closest('tr');
      const section = trigger.closest('section');
      const sectionHeading = section?.querySelector('h2, h3')?.textContent || '';

      let rowVehicleText = '';
      let rowAcText = sectionHeading;
      let rowRatePreview = '';

      if (tr) {
        const cells = Array.from(tr.querySelectorAll('td, th')).map((c) => c.textContent.trim());
        // First 1-2 cells contain vehicle / seater name
        rowVehicleText = cells.slice(0, 3).join(' ');
        rowAcText = `${sectionHeading} ${cells.join(' ')}`;
        rowRatePreview = cells
          .filter((c) => c.includes('₹'))
          .slice(0, 2)
          .join(' | ');
      } else {
        rowVehicleText = trigger.dataset.vehicle || sectionHeading || document.querySelector('main h1')?.textContent || '';
      }

      openModalWithContext({
        rawVehicleText: rowVehicleText,
        rawAcText: rowAcText,
        customPlace: trigger.dataset.place || '',
        rowSummary: rowRatePreview
      });
    };

    document.addEventListener('click', handleDocumentClick, true);
    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
    };
  }, [openModalWithContext]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = [
      `*New Vehicle Booking Request - Shree Travels* 🚐`,
      `----------------------------------`,
      `👤 *Customer Name:* ${formData.name.trim()}`,
      `📞 *Mobile Number:* ${formData.mobile.trim()}`,
      `📅 *Journey Date:* ${formData.date}`,
      `🚌 *Vehicle & Seater:* ${formData.vehicle}`,
      `❄️ *AC / Non-AC:* ${formData.acType}`,
      `📍 *Pickup / Tour Place:* ${formData.place.trim()}`,
      formData.rowSummary ? `💰 *Selected Tariff:* ${formData.rowSummary}` : null,
      `🔗 *Page:* https://shreetravels.in${location.pathname}`,
      `----------------------------------`,
      `Please confirm availability and share final booking details.`
    ]
      .filter(Boolean)
      .join('\n');

    const waUrl = `https://wa.me/917875774499?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div
      className="shree-booking-modal-backdrop"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="bookingModalTitle"
    >
      <div
        className="shree-booking-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="d-flex align-items-center justify-content-between px-4 py-3 text-white"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderBottom: '3px solid #ff7700'
          }}
        >
          <div>
            <span
              className="badge rounded-pill px-2 py-1 mb-1 fw-bold"
              style={{ backgroundColor: '#ff7700', fontSize: '0.68rem' }}
            >
              INSTANT WHATSAPP QUOTATION & BOOKING
            </span>
            <h3 id="bookingModalTitle" className="h5 fw-bold mb-0 text-white">
              Book Your Vehicle Now
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="btn btn-sm text-white rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '34px', height: '34px', backgroundColor: 'rgba(255,255,255,0.12)' }}
            aria-label="Close modal"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-3 p-sm-4">
          <div className="row g-2 g-sm-3">
            {/* Name */}
            <div className="col-sm-6">
              <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                <FaUser className="me-1" style={{ color: '#ff7700' }} /> Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="form-control form-control-sm py-2 rounded-3"
              />
            </div>

            {/* Mobile */}
            <div className="col-sm-6">
              <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                <FaPhoneAlt className="me-1" style={{ color: '#ff7700' }} /> Mobile Number *
              </label>
              <input
                type="tel"
                name="mobile"
                required
                pattern="[0-9+\-\s]{10,15}"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className="form-control form-control-sm py-2 rounded-3"
              />
            </div>

            {/* Journey Date */}
            <div className="col-sm-6">
              <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                <FaCalendarAlt className="me-1" style={{ color: '#ff7700' }} /> Travel Date *
              </label>
              <input
                type="date"
                name="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={handleChange}
                className="form-control form-control-sm py-2 rounded-3"
              />
            </div>

            {/* AC / Non-AC Radio Buttons */}
            <div className="col-sm-6">
              <label className="form-label small fw-bold mb-1 d-block" style={{ color: '#0f172a' }}>
                <FaSnowflake className="me-1" style={{ color: '#ff7700' }} /> Vehicle Variant (AC / Non-AC) *
              </label>
              <div className="d-flex gap-2">
                <label
                  className={`flex-fill text-center py-1 px-2 rounded-3 border fw-bold small cursor-pointer ${
                    formData.acType === 'AC' ? 'text-white border-0 shadow-sm' : 'bg-light text-dark'
                  }`}
                  style={{
                    backgroundColor: formData.acType === 'AC' ? '#ff7700' : undefined,
                    cursor: 'pointer'
                  }}
                >
                  <input
                    type="radio"
                    name="acType"
                    value="AC"
                    checked={formData.acType === 'AC'}
                    onChange={handleChange}
                    className="me-1"
                  />
                  AC
                </label>

                <label
                  className={`flex-fill text-center py-1 px-2 rounded-3 border fw-bold small cursor-pointer ${
                    formData.acType === 'Non-AC' ? 'text-white border-0 shadow-sm' : 'bg-light text-dark'
                  }`}
                  style={{
                    backgroundColor: formData.acType === 'Non-AC' ? '#0f172a' : undefined,
                    cursor: 'pointer'
                  }}
                >
                  <input
                    type="radio"
                    name="acType"
                    value="Non-AC"
                    checked={formData.acType === 'Non-AC'}
                    onChange={handleChange}
                    className="me-1"
                  />
                  Non-AC
                </label>
              </div>
            </div>

            {/* Vehicle & All Seaters Dropdown */}
            <div className="col-12">
              <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                <FaBus className="me-1" style={{ color: '#ff7700' }} /> Select Vehicle & Seater Capacity *
              </label>
              <select
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className="form-select form-select-sm py-2 rounded-3 fw-semibold"
              >
                {ALL_SEATER_VEHICLES.map((v) => (
                  <option key={v.value} value={v.value}>
                    {v.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Place / Route (Auto-populated from page) */}
            <div className="col-12">
              <label className="form-label small fw-bold mb-1" style={{ color: '#0f172a' }}>
                <FaMapMarkerAlt className="me-1" style={{ color: '#ff7700' }} /> Pickup City / Tour Destination *
              </label>
              <input
                type="text"
                name="place"
                required
                value={formData.place}
                onChange={handleChange}
                placeholder="e.g. Pune to Mahabaleshwar / Lonavala / Shirdi"
                className="form-control form-control-sm py-2 rounded-3"
              />
            </div>
          </div>

          <div className="mt-3">
            <button
              type="submit"
              className="btn w-100 fw-bold text-white d-flex align-items-center justify-content-center gap-2 rounded-pill shadow-sm booking-submit-btn"
              style={{
                backgroundColor: '#25D366',
                height: '42px',
                padding: '0 16px',
                fontSize: '0.9rem',
                whiteSpace: 'nowrap'
              }}
            >
              <FaWhatsapp size={17} className="flex-shrink-0" />
              <span>Book Now via WhatsApp</span>
            </button>
          </div>

          <div className="text-center mt-2">
            <small className="text-muted" style={{ fontSize: '0.75rem' }}>
              24/7 Dispatch: <strong>+91 78757 74499</strong> | <strong>+91 76204 11277</strong>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPopupModal;
