import React from 'react';

const FloatingButtons = () => {
  // Your specific enquiry message
  const rawMessage = "Hello Shree Travels Team, I want to Book Force Urbania / Tempo Traveller / Mini Bus / Luxury Bus On Rent with Shree Travels. Please Send Details & Best Quotation. Thank you!";
  
  // Encode the message so it formats correctly in a URL
  const whatsappMessage = encodeURIComponent(rawMessage);

  return (
    <>
      <a 
        href={`https://wa.me/917875774499?text=${whatsappMessage}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="position-fixed bottom-0 start-0 m-3 bg-success text-white rounded-circle d-flex align-items-center justify-content-center shadow-lg"
        style={{ width: '55px', height: '55px', zIndex: 1000, textDecoration: 'none' }}
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp fs-2"></i>
      </a>

      <a 
        href="tel:+917620411277" 
        className="position-fixed bottom-0 end-0 m-3 text-white rounded-circle d-flex align-items-center justify-content-center shadow-lg"
        style={{ width: '55px', height: '55px', zIndex: 1000, backgroundColor: '#ff7700', textDecoration: 'none' }}
        aria-label="Call Us"
      >
        <i className="fas fa-phone-alt fs-4"></i>
      </a>
    </>
  );
};

export default FloatingButtons;