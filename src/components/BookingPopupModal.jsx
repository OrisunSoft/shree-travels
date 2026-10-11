import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FaWhatsapp,
  FaTimes,
  FaBus,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaPhoneAlt,
  FaSnowflake,
  FaClock,
  FaRoute,
  FaFileInvoiceDollar,
  FaClipboardList,
  FaCheckCircle
} from 'react-icons/fa';

export const ALL_SEATER_VEHICLES = [
  { value: '9 Seater Tata Winger (Starting at ₹20/km)', label: '9 Seater Tata Winger (Starting at ₹20/km)', keywords: ['9 seater', 'winger'] },
  { value: '10 Seater Force Urbania (Starting at ₹32/km)', label: '10 Seater Force Urbania Luxury Van (Starting at ₹32/km)', keywords: ['10 seater', '10 seater urbania'] },
  { value: '12 Seater Tempo Traveller (Starting at ₹22/km)', label: '12 Seater Tempo Traveller (Starting at ₹22/km)', keywords: ['12 seater'] },
  { value: '13 Seater Tempo Traveller (Starting at ₹22–25/km)', label: '13 Seater Tempo Traveller (Non-AC ₹22/km | AC ₹25/km)', keywords: ['13 seater tempo', '13 seater'] },
  { value: '13 Seater Force Urbania (Starting at ₹32/km)', label: '13 Seater Force Urbania Luxury Van (Starting at ₹32/km)', keywords: ['13 seater urbania', '13 seater force urbania'] },
  { value: '13 Seater Tata Winger (Starting at ₹22–25/km)', label: '13 Seater Tata Winger (Starting at ₹22–25/km)', keywords: ['13 seater winger'] },
  { value: '14 Seater Tempo Traveller (Starting at ₹22–25/km)', label: '14 Seater Tempo Traveller (Starting at ₹22–25/km)', keywords: ['14 seater'] },
  { value: '15 Seater Mini Bus / Winger (Starting at ₹30/km)', label: '15 Seater Mini Bus / Winger (Starting at ₹30/km)', keywords: ['15 seater'] },
  { value: '17 Seater Tempo Traveller (Starting at ₹22–25/km)', label: '17 Seater Tempo Traveller (Non-AC ₹22/km | AC ₹25/km)', keywords: ['17 seater tempo', '17 seater'] },
  { value: '17 Seater Force Urbania (Starting at ₹32/km)', label: '17 Seater Force Urbania Luxury Van (Starting at ₹32/km)', keywords: ['17 seater urbania', '17 seater force urbania', 'urbania'] },
  { value: '17 Seater Mini Bus (Starting at ₹25/km)', label: '17 Seater Mini Bus (Starting at ₹25/km)', keywords: ['17 seater bus', '17 seater mini'] },
  { value: '20 Seater Tempo Traveller / Mini Bus (Starting at ₹28/km)', label: '20 Seater Tempo Traveller / Mini Bus (Starting at ₹28/km)', keywords: ['20 seater'] },
  { value: '24 Seater AC Mini Bus (Starting at ₹38/km)', label: '24 Seater AC Mini Bus (Starting at ₹38/km)', keywords: ['24 seater'] },
  { value: '25 Seater Mini Bus (Starting at ₹38/km)', label: '25 Seater Mini Bus (Starting at ₹38/km)', keywords: ['25 seater'] },
  { value: '26 Seater Maharaja Tempo Traveller (Starting at ₹38/km)', label: '26 Seater Maharaja Tempo Traveller (Starting at ₹38/km)', keywords: ['26 seater'] },
  { value: '30 Seater Bus (Starting at ₹32/km)', label: '30 Seater Bus (Starting at ₹32/km)', keywords: ['30 seater'] },
  { value: '32 Seater Bus 2x2 Pushback (Starting at ₹45/km)', label: '32 Seater Bus 2x2 Pushback (Starting at ₹45/km)', keywords: ['32 seater'] },
  { value: '35 Seater Bus (Non-AC ₹40/km | AC ₹50/km)', label: '35 Seater Bus (Non-AC ₹40/km | AC ₹50/km)', keywords: ['35 seater'] },
  { value: '40 Seater Luxury AC Bus (Starting at ₹60/km)', label: '40 Seater Luxury AC Bus (Starting at ₹60/km)', keywords: ['40 seater'] },
  { value: '45 Seater Bus (Non-AC ₹48/km | AC ₹60/km)', label: '45 Seater Bus (Non-AC ₹48/km | AC ₹60/km)', keywords: ['45 seater'] },
  { value: '49 / 50 Seater Large Coach (Non-AC ₹50/km | AC ₹90/km)', label: '49 / 50 Seater Large Coach (Non-AC ₹50/km | AC ₹90/km)', keywords: ['49 seater', '50 seater'] },
  { value: 'Scania 45 Seater Multi-Axle AC Bus (Starting at ₹80/km)', label: 'Scania 45 Seater Multi-Axle AC Bus (Starting at ₹80/km)', keywords: ['scania'] },
  { value: 'Volvo 49 Seater Multi-Axle AC Bus (Starting at ₹90/km)', label: 'Volvo 49 Seater Multi-Axle AC Bus (Starting at ₹90/km)', keywords: ['volvo 49', 'volvo'] },
  { value: 'Volvo 53 Seater Multi-Axle AC Coach (Starting at ₹95/km)', label: 'Volvo 53 Seater Multi-Axle AC Coach (Starting at ₹95/km)', keywords: ['volvo 53', '53 seater'] },
  { value: 'Outstation Cab (Sedan Dzire / Ertiga / Innova Crysta)', label: 'Outstation Cab (Sedan Dzire / Ertiga / Innova Crysta)', keywords: ['cab', 'innova', 'ertiga', 'sedan'] }
];

const detectDefaultPlaceFromPage = (pathname) => {
  const cleanPath = (pathname || '/').toLowerCase();
  if (cleanPath.includes('lonavala')) return 'Pune to Lonavala & Khandala';
  if (cleanPath.includes('mahabaleshwar')) return 'Pune to Mahabaleshwar';
  if (cleanPath.includes('mumbai')) return 'Mumbai / Pune to Mumbai';
  if (cleanPath.includes('shirdi')) return 'Pune to Shirdi Sai Baba Darshan';
  if (cleanPath.includes('nashik')) return 'Pune to Nashik & Trimbakeshwar';
  if (cleanPath.includes('goa')) return 'Pune to Goa Beach Tour';
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

const getTodayDateString = () => new Date().toISOString().split('T')[0];

const getTomorrowDateString = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

const BookingPopupModal = () => {
  const location = useLocation();
  // activeModal: 'enquiry' | 'booking' | null (Two completely SEPARATE popups, NO switch tab inside)
  const [activeModal, setActiveModal] = useState(null);

  // 1. Dedicated Enquiry Form State (Featuring From Date & To Date)
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    mobile: '',
    fromDate: getTodayDateString(),
    toDate: getTomorrowDateString(),
    tripType: 'Round Trip (Outstation Tour)',
    vehicle: ALL_SEATER_VEHICLES[3].value,
    acType: 'AC',
    pickupLocation: 'Pune (City / PCMC)',
    destination: 'Pune to Mahabaleshwar / Goa / Shirdi',
    passengers: '',
    notes: '',
    rowSummary: ''
  });

  // 2. Dedicated Booking Form State (Featuring Journey Date, Pickup Time, Doorstep Pickup Address, Payment Pref)
  const [bookingData, setBookingData] = useState({
    name: '',
    mobile: '',
    journeyDate: getTodayDateString(),
    pickupTime: '06:00',
    vehicle: ALL_SEATER_VEHICLES[3].value,
    acType: 'AC',
    pickupAddress: '',
    dropAddress: '',
    passengers: '',
    paymentPref: 'Cash to Driver on Trip',
    specialNotes: '',
    rowSummary: ''
  });

  const openModalWithContext = useCallback(
    ({
      mode = 'enquiry',
      rawVehicleText = '',
      rawAcText = '',
      customPlace = '',
      rowSummary = '',
      passengers = ''
    } = {}) => {
      const pagePlace = customPlace || detectDefaultPlaceFromPage(location.pathname);
      const matchedVehicle = matchVehicleOption(`${rawVehicleText} ${location.pathname}`);
      const combinedAcCheck = `${rawAcText} ${rawVehicleText}`.toLowerCase();
      const detectedAc = combinedAcCheck.includes('non-ac') || combinedAcCheck.includes('non ac') ? 'Non-AC' : 'AC';

      if (mode === 'booking') {
        setBookingData((prev) => ({
          ...prev,
          vehicle: matchedVehicle,
          acType: detectedAc,
          dropAddress: pagePlace,
          passengers: passengers || prev.passengers,
          rowSummary
        }));
        setActiveModal('booking');
      } else {
        setEnquiryData((prev) => ({
          ...prev,
          vehicle: matchedVehicle,
          acType: detectedAc,
          destination: pagePlace,
          passengers: passengers || prev.passengers,
          rowSummary
        }));
        setActiveModal('enquiry');
      }
    },
    [location.pathname]
  );

  useEffect(() => {
    // Expose global helpers
    window.openShreeBookingModal = (opts) => openModalWithContext({ ...opts, mode: 'booking' });
    window.openShreeEnquiryModal = (opts) => openModalWithContext({ ...opts, mode: 'enquiry' });

    const handleDocumentClick = (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;

      const trigger = e.target.closest('a, button');
      if (!trigger) return;

      const insideTable = trigger.closest('table, .table-responsive');
      const isEnquiryClass =
        trigger.classList.contains('open-enquiry-popup-btn') ||
        trigger.classList.contains('btn-enquiry') ||
        trigger.classList.contains('open-enquiry-modal') ||
        trigger.getAttribute('data-enquiry') === 'true';

      const isBookingClass =
        trigger.classList.contains('open-booking-popup-btn') ||
        trigger.classList.contains('btn-book') ||
        trigger.classList.contains('open-booking-modal');

      const href = trigger.getAttribute('href') || '';
      const isBookTaxiLink =
        (href === '/book-taxi' || trigger.pathname === '/book-taxi') &&
        !trigger.classList.contains('no-modal-intercept');

      if (!insideTable && !isEnquiryClass && !isBookingClass && !isBookTaxiLink) return;

      e.preventDefault();
      e.stopPropagation();

      const btnText = (trigger.textContent || '').trim().toLowerCase();
      const explicitMode = trigger.dataset.mode;

      let targetModal = 'enquiry';

      if (explicitMode === 'booking') {
        targetModal = 'booking';
      } else if (explicitMode === 'enquiry') {
        targetModal = 'enquiry';
      } else if (isEnquiryClass) {
        targetModal = 'enquiry';
      } else if (isBookTaxiLink) {
        targetModal = 'booking';
      } else if (
        btnText.includes('enquiry') ||
        btnText.includes('enquire') ||
        btnText.includes('quote') ||
        btnText.includes('rate') ||
        btnText.includes('tariff')
      ) {
        targetModal = 'enquiry';
      } else if (
        btnText.includes('book') ||
        btnText.includes('reserve')
      ) {
        targetModal = 'booking';
      } else {
        targetModal = 'enquiry';
      }

      const tr = trigger.closest('tr');
      const section = trigger.closest('section');
      const sectionHeading = section?.querySelector('h2, h3')?.textContent || '';

      let rowVehicleText = '';
      let rowAcText = sectionHeading;
      let rowRatePreview = '';

      if (tr) {
        const cells = Array.from(tr.querySelectorAll('td, th')).map((c) => c.textContent.trim());
        rowVehicleText = cells.slice(0, 3).join(' ');
        rowAcText = `${sectionHeading} ${cells.join(' ')}`;
        rowRatePreview = cells
          .filter((c) => c.includes('₹'))
          .slice(0, 2)
          .join(' | ');
      } else {
        rowVehicleText =
          trigger.dataset.vehicle ||
          sectionHeading ||
          document.querySelector('main h1')?.textContent ||
          '';
      }

      openModalWithContext({
        mode: targetModal,
        rawVehicleText: rowVehicleText,
        rawAcText: rowAcText,
        customPlace: trigger.dataset.place || '',
        rowSummary: rowRatePreview,
        passengers: trigger.dataset.passengers || ''
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
      if (e.key === 'Escape' && activeModal) {
        setActiveModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal]);

  if (!activeModal) return null;

  const handleEnquiryChange = (e) => {
    const { name, value } = e.target;
    setEnquiryData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'fromDate' && updated.toDate < value) {
        updated.toDate = value;
      }
      return updated;
    });
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Handler for Enquiry Form
  const handleEnquirySubmit = (e) => {
    e.preventDefault();

    const formattedLines = [
      `*📋 TRIP ENQUIRY & RATE QUOTATION*`,
      `*Shree Travels Pune (24/7 Dispatch Desk)*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📅 *Departure (From Date):* ${enquiryData.fromDate}`,
      `🏁 *Return (To Date):* ${enquiryData.toDate}`,
      `🔄 *Trip Type:* ${enquiryData.tripType}`,
      `🚐 *Vehicle Requested:* ${enquiryData.vehicle} (${enquiryData.acType})`,
      `📍 *Pickup Location:* ${enquiryData.pickupLocation || 'Pune'}`,
      `🎯 *Destination / Route:* ${enquiryData.destination || 'Outstation'}`,
      enquiryData.passengers ? `👥 *Passengers:* ${enquiryData.passengers} Persons` : null,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      enquiryData.name ? `👤 *Customer Name:* ${enquiryData.name.trim()}` : null,
      enquiryData.mobile ? `📞 *Contact Phone:* ${enquiryData.mobile.trim()}` : null,
      enquiryData.notes ? `📝 *Special Notes:* ${enquiryData.notes.trim()}` : null,
      enquiryData.rowSummary ? `💰 *Tariff Reference:* ${enquiryData.rowSummary}` : null,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `🔗 *Source Page:* https://shreetravels.in${location.pathname}`,
      `_Please share guaranteed lowest per-km rate & total quotation._`
    ];

    const message = formattedLines.filter(Boolean).join('\n');
    const waUrl = `https://wa.me/917875774499?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setActiveModal(null);
  };

  // Submit Handler for Booking Form
  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const formattedLines = [
      `*🚐 OFFICIAL VEHICLE RESERVATION*`,
      `*Shree Travels Pune (Confirmed Booking)*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📅 *Journey Date:* ${bookingData.journeyDate}`,
      `⏰ *Reporting / Pickup Time:* ${bookingData.pickupTime}`,
      `🚐 *Vehicle Reserved:* ${bookingData.vehicle} (${bookingData.acType})`,
      `📍 *Exact Doorstep Pickup:* ${bookingData.pickupAddress || 'Pune City'}`,
      `🎯 *Destination / Drop:* ${bookingData.dropAddress || 'Outstation'}`,
      bookingData.passengers ? `👥 *Total Passengers:* ${bookingData.passengers} Persons` : null,
      `💳 *Payment Mode:* ${bookingData.paymentPref}`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      bookingData.name ? `👤 *Lead Passenger:* ${bookingData.name.trim()}` : null,
      bookingData.mobile ? `📞 *Contact Phone:* ${bookingData.mobile.trim()}` : null,
      bookingData.specialNotes ? `📝 *Chauffeur Instructions:* ${bookingData.specialNotes.trim()}` : null,
      bookingData.rowSummary ? `💰 *Tariff Card:* ${bookingData.rowSummary}` : null,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `🔗 *Source Page:* https://shreetravels.in${location.pathname}`,
      `_Please confirm vehicle assignment & chauffeur dispatch details._`
    ];

    const message = formattedLines.filter(Boolean).join('\n');
    const waUrl = `https://wa.me/917875774499?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setActiveModal(null);
  };

  // =========================================================================
  // MODAL 1: TRIP ENQUIRY FORM (Dedicated popup, NO switch option)
  // =========================================================================
  if (activeModal === 'enquiry') {
    return (
      <div
        className="shree-booking-modal-backdrop"
        onClick={() => setActiveModal(null)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiryModalTitle"
      >
        <div
          className="shree-booking-modal-dialog"
          onClick={(e) => e.stopPropagation()}
          style={{ maxWidth: '600px' }}
        >
          {/* Enquiry Modal Header */}
          <div
            className="px-3 px-sm-4 pt-3 pb-3 text-white position-relative"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              borderBottom: '3px solid #ff7700'
            }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <span
                  className="badge rounded-pill px-2.5 py-1 fw-bold mb-1"
                  style={{
                    backgroundColor: '#ff7700',
                    fontSize: '0.72rem',
                    letterSpacing: '0.4px',
                    color: '#ffffff'
                  }}
                >
                  <FaClipboardList className="me-1" size={11} /> 📋 TRIP ENQUIRY &amp; INSTANT QUOTE
                </span>
                <h3 id="enquiryModalTitle" className="h5 fw-bold mb-1 text-white">
                  Trip Enquiry Form • Shree Travels
                </h3>
                <p className="text-light opacity-75 small mb-0" style={{ fontSize: '0.8rem' }}>
                  Select your travel duration &amp; vehicle for an instant WhatsApp quotation.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="btn btn-sm text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '34px', height: '34px', backgroundColor: 'rgba(255,255,255,0.14)' }}
                aria-label="Close enquiry form"
              >
                <FaTimes size={16} />
              </button>
            </div>
          </div>

          {/* Enquiry Form Body */}
          <div className="p-3 p-sm-4 bg-white">
            <form onSubmit={handleEnquirySubmit}>
              <div className="row g-3">
                {/* 1. From Date & To Date */}
                <div className="col-6">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaCalendarAlt size={12} style={{ color: '#ff7700' }} />
                    <span>From Date (Departure) *</span>
                  </label>
                  <input
                    type="date"
                    name="fromDate"
                    value={enquiryData.fromDate}
                    min={getTodayDateString()}
                    onChange={handleEnquiryChange}
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                    required
                  />
                  <small className="text-muted" style={{ fontSize: '0.72rem' }}>Trip start date</small>
                </div>

                <div className="col-6">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaCalendarAlt size={12} style={{ color: '#ff7700' }} />
                    <span>To Date (Return / End) *</span>
                  </label>
                  <input
                    type="date"
                    name="toDate"
                    value={enquiryData.toDate}
                    min={enquiryData.fromDate || getTodayDateString()}
                    onChange={handleEnquiryChange}
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                    required
                  />
                  <small className="text-muted" style={{ fontSize: '0.72rem' }}>Trip return date</small>
                </div>

                {/* 2. Trip Type */}
                <div className="col-12">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaRoute size={12} style={{ color: '#ff7700' }} />
                    <span>Trip Type</span>
                  </label>
                  <select
                    name="tripType"
                    value={enquiryData.tripType}
                    onChange={handleEnquiryChange}
                    className="form-select rounded-3 py-2 border-secondary border-opacity-25"
                  >
                    <option value="Round Trip (Outstation Tour)">Round Trip (Outstation Tour)</option>
                    <option value="One Way Drop (Airport / City Transfer)">One Way Drop (Airport / City Transfer)</option>
                    <option value="Local Pune Package (8Hr / 80Km or 12Hr / 120Km)">Local Pune Package (8Hr / 80Km or 12Hr / 120Km)</option>
                    <option value="Multi-day Pilgrimage / Sightseeing Tour">Multi-day Pilgrimage / Sightseeing Tour</option>
                  </select>
                </div>

                {/* 3. Vehicle & AC / Non-AC */}
                <div className="col-12 col-md-8">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaBus size={12} style={{ color: '#ff7700' }} />
                    <span>Select Vehicle Capacity</span>
                  </label>
                  <select
                    name="vehicle"
                    value={enquiryData.vehicle}
                    onChange={handleEnquiryChange}
                    className="form-select rounded-3 py-2 border-secondary border-opacity-25"
                    required
                  >
                    {ALL_SEATER_VEHICLES.map((v) => (
                      <option key={`enq-${v.value}`} value={v.value}>
                        {v.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaSnowflake size={12} style={{ color: '#ff7700' }} />
                    <span>AC Preference</span>
                  </label>
                  <div className="d-flex gap-2">
                    {['AC', 'Non-AC'].map((type) => (
                      <button
                        key={`enq-ac-${type}`}
                        type="button"
                        onClick={() => setEnquiryData((prev) => ({ ...prev, acType: type }))}
                        className={`btn btn-sm flex-fill py-2 rounded-3 fw-bold border ${
                          enquiryData.acType === type
                            ? 'text-white border-warning'
                            : 'btn-light border-secondary border-opacity-25 text-dark'
                        }`}
                        style={{
                          backgroundColor: enquiryData.acType === type ? '#ff7700' : '#f8f9fa'
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Pickup Location & Destination */}
                <div className="col-12 col-sm-6">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaMapMarkerAlt size={12} style={{ color: '#ff7700' }} />
                    <span>Pickup Location (Pune / PCMC)</span>
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    value={enquiryData.pickupLocation}
                    onChange={handleEnquiryChange}
                    placeholder="e.g. Kothrud, Hinjewadi, Pune Airport"
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                  />
                </div>

                <div className="col-12 col-sm-6">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaMapMarkerAlt size={12} style={{ color: '#ff7700' }} />
                    <span>Destination / Tour Route *</span>
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={enquiryData.destination}
                    onChange={handleEnquiryChange}
                    placeholder="e.g. Mahabaleshwar, Shirdi, Goa"
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                    required
                  />
                </div>

                {/* 5. Passengers Count */}
                <div className="col-12 col-sm-4">
                  <label className="form-label fw-bold small text-dark mb-1">
                    Total Passengers
                  </label>
                  <input
                    type="number"
                    name="passengers"
                    min="1"
                    max="60"
                    value={enquiryData.passengers}
                    onChange={handleEnquiryChange}
                    placeholder="e.g. 14"
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                  />
                </div>

                {/* 6. Name & Mobile */}
                <div className="col-12 col-sm-4">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaUser size={11} style={{ color: '#ff7700' }} />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={enquiryData.name}
                    onChange={handleEnquiryChange}
                    placeholder="Full Name"
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                    required
                  />
                </div>

                <div className="col-12 col-sm-4">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaPhoneAlt size={11} style={{ color: '#ff7700' }} />
                    <span>Mobile Number *</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    pattern="[0-9]{10}"
                    value={enquiryData.mobile}
                    onChange={handleEnquiryChange}
                    placeholder="10-digit mobile"
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                    required
                  />
                </div>

                {/* 7. Special Notes */}
                <div className="col-12">
                  <label className="form-label fw-bold small text-dark mb-1">
                    Special Requirement / Notes (Optional)
                  </label>
                  <input
                    type="text"
                    name="notes"
                    value={enquiryData.notes}
                    onChange={handleEnquiryChange}
                    placeholder="e.g. Need rooftop carrier, senior citizens on board, AC required in ghat section"
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                  />
                </div>

                {/* Submit Button */}
                <div className="col-12 mt-3 pt-1">
                  <button
                    type="submit"
                    className="btn w-100 py-3 rounded-pill fw-bold text-white shadow-sm d-flex align-items-center justify-content-center gap-2 booking-submit-btn"
                    style={{ backgroundColor: '#25D366', fontSize: '1rem', border: 'none' }}
                  >
                    <FaWhatsapp size={20} />
                    <span className="d-none d-sm-inline">Get Instant Quotation via WhatsApp (+91 78757 74499)</span>
                    <span className="d-inline d-sm-none">Get Quotation on WhatsApp</span>
                  </button>
                  <p className="text-center text-muted small mt-2 mb-0" style={{ fontSize: '0.74rem' }}>
                    ⚡ Instant quotation sent directly to WhatsApp desk: <strong>+91 78757 74499</strong>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // MODAL 2: VEHICLE BOOKING RESERVATION FORM (Dedicated popup, NO switch option)
  // =========================================================================
  if (activeModal === 'booking') {
    return (
      <div
        className="shree-booking-modal-backdrop"
        onClick={() => setActiveModal(null)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bookingModalTitle"
      >
        <div
          className="shree-booking-modal-dialog"
          onClick={(e) => e.stopPropagation()}
          style={{ maxWidth: '600px' }}
        >
          {/* Booking Modal Header */}
          <div
            className="px-3 px-sm-4 pt-3 pb-3 text-white position-relative"
            style={{
              background: 'linear-gradient(135deg, #09131f 0%, #172554 100%)',
              borderBottom: '3px solid #2563eb'
            }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <span
                  className="badge rounded-pill px-2.5 py-1 fw-bold mb-1"
                  style={{
                    backgroundColor: '#2563eb',
                    fontSize: '0.72rem',
                    letterSpacing: '0.4px',
                    color: '#ffffff'
                  }}
                >
                  <FaCheckCircle className="me-1" size={11} /> 🚐 VEHICLE RESERVATION FORM
                </span>
                <h3 id="bookingModalTitle" className="h5 fw-bold mb-1 text-white">
                  Confirmed Vehicle Booking • Shree Travels
                </h3>
                <p className="text-light opacity-75 small mb-0" style={{ fontSize: '0.8rem' }}>
                  Provide doorstep reporting details for chauffeur assignment &amp; confirmed dispatch.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="btn btn-sm text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '34px', height: '34px', backgroundColor: 'rgba(255,255,255,0.14)' }}
                aria-label="Close booking form"
              >
                <FaTimes size={16} />
              </button>
            </div>
          </div>

          {/* Booking Form Body */}
          <div className="p-3 p-sm-4 bg-white">
            <form onSubmit={handleBookingSubmit}>
              <div className="row g-3">
                {/* 1. Journey Date & Reporting Time */}
                <div className="col-6">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaCalendarAlt size={12} style={{ color: '#2563eb' }} />
                    <span>Journey Date *</span>
                  </label>
                  <input
                    type="date"
                    name="journeyDate"
                    value={bookingData.journeyDate}
                    min={getTodayDateString()}
                    onChange={handleBookingChange}
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                    required
                  />
                  <small className="text-muted" style={{ fontSize: '0.72rem' }}>Date of travel</small>
                </div>

                <div className="col-6">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaClock size={12} style={{ color: '#2563eb' }} />
                    <span>Pickup / Reporting Time *</span>
                  </label>
                  <input
                    type="time"
                    name="pickupTime"
                    value={bookingData.pickupTime}
                    onChange={handleBookingChange}
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                    required
                  />
                  <small className="text-muted" style={{ fontSize: '0.72rem' }}>Chauffeur reporting time</small>
                </div>

                {/* 2. Vehicle & AC / Non-AC */}
                <div className="col-12 col-md-8">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaBus size={12} style={{ color: '#2563eb' }} />
                    <span>Vehicle to Reserve *</span>
                  </label>
                  <select
                    name="vehicle"
                    value={bookingData.vehicle}
                    onChange={handleBookingChange}
                    className="form-select rounded-3 py-2 border-secondary border-opacity-25"
                    required
                  >
                    {ALL_SEATER_VEHICLES.map((v) => (
                      <option key={`book-${v.value}`} value={v.value}>
                        {v.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-12 col-md-4">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaSnowflake size={12} style={{ color: '#2563eb' }} />
                    <span>AC Option</span>
                  </label>
                  <div className="d-flex gap-2">
                    {['AC', 'Non-AC'].map((type) => (
                      <button
                        key={`book-ac-${type}`}
                        type="button"
                        onClick={() => setBookingData((prev) => ({ ...prev, acType: type }))}
                        className={`btn btn-sm flex-fill py-2 rounded-3 fw-bold border ${
                          bookingData.acType === type
                            ? 'text-white border-primary'
                            : 'btn-light border-secondary border-opacity-25 text-dark'
                        }`}
                        style={{
                          backgroundColor: bookingData.acType === type ? '#2563eb' : '#f8f9fa'
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Doorstep Pickup Address */}
                <div className="col-12">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaMapMarkerAlt size={12} style={{ color: '#2563eb' }} />
                    <span>Exact Doorstep Pickup Address in Pune / PCMC *</span>
                  </label>
                  <input
                    type="text"
                    name="pickupAddress"
                    value={bookingData.pickupAddress}
                    onChange={handleBookingChange}
                    placeholder="House/Flat No., Building Name, Landmark, Area (e.g. Kothrud, Hinjewadi)"
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                    required
                  />
                </div>

                {/* 4. Drop / Destination Address */}
                <div className="col-12 col-sm-7">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaMapMarkerAlt size={12} style={{ color: '#2563eb' }} />
                    <span>Destination / Drop Address *</span>
                  </label>
                  <input
                    type="text"
                    name="dropAddress"
                    value={bookingData.dropAddress}
                    onChange={handleBookingChange}
                    placeholder="Destination Hotel / Place (e.g. Mahabaleshwar / Shirdi)"
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                    required
                  />
                </div>

                {/* 5. Passengers Count */}
                <div className="col-12 col-sm-5">
                  <label className="form-label fw-bold small text-dark mb-1">
                    Total Passengers
                  </label>
                  <input
                    type="number"
                    name="passengers"
                    min="1"
                    max="60"
                    value={bookingData.passengers}
                    onChange={handleBookingChange}
                    placeholder="e.g. 17"
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                  />
                </div>

                {/* 6. Name & Mobile */}
                <div className="col-12 col-sm-6">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaUser size={11} style={{ color: '#2563eb' }} />
                    <span>Lead Passenger Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleBookingChange}
                    placeholder="Your Full Name"
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                    required
                  />
                </div>

                <div className="col-12 col-sm-6">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaPhoneAlt size={11} style={{ color: '#2563eb' }} />
                    <span>WhatsApp / Mobile Number *</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    pattern="[0-9]{10}"
                    value={bookingData.mobile}
                    onChange={handleBookingChange}
                    placeholder="10-digit mobile"
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                    required
                  />
                </div>

                {/* 7. Payment Mode */}
                <div className="col-12">
                  <label className="form-label fw-bold small text-dark mb-1 d-flex align-items-center gap-1">
                    <FaFileInvoiceDollar size={12} style={{ color: '#2563eb' }} />
                    <span>Billing &amp; Payment Preference</span>
                  </label>
                  <select
                    name="paymentPref"
                    value={bookingData.paymentPref}
                    onChange={handleBookingChange}
                    className="form-select rounded-3 py-2 border-secondary border-opacity-25"
                  >
                    <option value="Cash to Driver on Trip">Cash to Chauffeur on Trip</option>
                    <option value="Advance Token via UPI / GPay">Advance Token via UPI / GPay</option>
                    <option value="Corporate GST Invoice Billing">Corporate GST Invoice Billing</option>
                  </select>
                </div>

                {/* 8. Special Chauffeur Instructions */}
                <div className="col-12">
                  <label className="form-label fw-bold small text-dark mb-1">
                    Chauffeur Instructions / Notes (Optional)
                  </label>
                  <input
                    type="text"
                    name="specialNotes"
                    value={bookingData.specialNotes}
                    onChange={handleBookingChange}
                    placeholder="e.g. Flight arrival details, extra luggage, English/Hindi speaking driver"
                    className="form-control rounded-3 py-2 border-secondary border-opacity-25"
                  />
                </div>

                {/* Submit Button */}
                <div className="col-12 mt-3 pt-1">
                  <button
                    type="submit"
                    className="btn w-100 py-3 rounded-pill fw-bold text-white shadow-sm d-flex align-items-center justify-content-center gap-2 booking-submit-btn"
                    style={{ backgroundColor: '#25D366', fontSize: '1rem', border: 'none' }}
                  >
                    <FaWhatsapp size={20} />
                    <span className="d-none d-sm-inline">Confirm Vehicle Booking via WhatsApp (+91 78757 74499)</span>
                    <span className="d-inline d-sm-none">Confirm on WhatsApp</span>
                  </button>
                  <p className="text-center text-muted small mt-2 mb-0" style={{ fontSize: '0.74rem' }}>
                    ⚡ Vehicle reservation confirmed directly with <strong>+91 78757 74499</strong>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default BookingPopupModal;
