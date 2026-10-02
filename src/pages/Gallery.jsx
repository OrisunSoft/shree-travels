import React from 'react';
import SEO from '../components/SEO';

const Gallery = () => {
  // Array mapping all 15 fleet images, using .jpg so they load correctly.
  // Change to .webp only after you have compressed and converted the physical files.
  const photos = [
    { src: "/img/Img for Our Fleet/Img for Our Fleet-01.jpg", seat: "13" },
    { src: "/img/Img for Our Fleet/Img for Our Fleet-02.jpg", seat: "17" },
    { src: "/img/Img for Our Fleet/Img for Our Fleet-03.jpg", seat: "13" },
    { src: "/img/Img for Our Fleet/Img for Our Fleet-04.jpg", seat: "17" },
    { src: "/img/Img for Our Fleet/Img for Our Fleet-05.jpg", seat: "14" },
    { src: "/img/Img for Our Fleet/Img for Our Fleet-06.jpg", seat: "20" },
    { src: "/img/Img for Our Fleet/Img for Our Fleet-07.jpg", seat: "25" },
    { src: "/img/Img for Our Fleet/Img for Our Fleet-08.jpg", seat: "32" },
    { src: "/img/Img for Our Fleet/Img for Our Fleet-09.jpg", seat: "40" },
    { src: "/img/Img for Our Fleet/Img for Our Fleet-10.jpg", seat: "Luxury" },
    { src: "/img/Img for Our Fleet/Img for Our Fleet-11.jpg", seat: "Semi-Luxury" },
    { src: "/img/Img for Our Fleet/Img for Our Fleet-12.jpg", seat: "Volvo 45" },
    { src: "/img/Img for Our Fleet/Img for Our Fleet-13.jpg", seat: "45" },
    { src: "/img/Img for Our Fleet/Img for Our Fleet-14.jpg", seat: "35" },
    { src: "/img/Img for Our Fleet/Img for Our Fleet-15.jpg", seat: "50" }
  ];

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <SEO 
        title="Photo Gallery | Shree Travels Fleet in Pune" 
        description="View high-quality photos of our luxury buses, Tempo Travellers, and Force Urbania available for rent in Pune and Mumbai." 
        keywords="Shree Travels gallery, Bus rental photos Pune, Force Urbania images, Tempo Traveller pictures"
        path="/gallery"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" }
        ]}
      />

      {/* Page Header */}
      <section className="bg-light py-5 text-center">
        <div className="container py-4">
          <h1 className="fw-bold mb-3 display-5 fs-3 fs-md-1">Our Fleet <span style={{ color: '#ff7700' }}>Gallery</span></h1>
          <p className="text-muted lead fs-6 fs-md-5 max-w-75 mx-auto">
            Take a visual tour of our meticulously maintained, clean, and comfortable luxury vehicles.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            {photos.map((photo, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="card h-100 rounded-4 overflow-hidden border-0 shadow-sm bg-white">
                  <div className="overflow-hidden position-relative" style={{ height: '260px' }}>
                    <img 
                      src={photo.src}
                      srcSet={`${photo.src} 1x`}
                      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Shree Travels ${photo.seat}-seater bus #${idx + 1} - Fleet Photo`} 
                      loading="lazy"
                      className="w-100 h-100 object-fit-cover" 
                      style={{ transition: 'transform 0.5s ease' }}
                      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
                      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <span 
                      className="position-absolute bottom-0 start-0 m-3 px-3 py-1 text-white small fw-bold rounded-pill shadow-sm"
                      style={{ backgroundColor: '#ff7700', fontSize: '0.75rem' }}
                    >
                      <i className="fas fa-users me-2"></i>{photo.seat} Seater
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;