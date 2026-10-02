import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Blogs = () => {
  // Main Featured Post (Topic 1)
  const mainFeaturedPost = {
    title: "Force Urbania Pune vs Tempo Traveller Rental: Complete Comparison",
    date: "September 10, 2026",
    readTime: "6 min read",
    author: "Shree Travels Team",
    image: "/img/force-jai.webp",
    excerpt: "Deciding between a Force Urbania Pune and a tempo traveller rental Pune? We break down seating, legroom, and features. Whether you need a 12 seater tempo traveller Pune or a premium Force Urbania rental Pune, discover the best vehicle for group travel Pune.",
    category: "Vehicle Comparison"
  };

  // Secondary Posts (Topics 2-10)
  const secondaryPosts = [
    {
      title: "Corporate Bus Rental Pune & Commute Benefits",
      date: "September 5, 2026",
      readTime: "5 min read",
      author: "Prakash Margale",
      image: "/img/Image for Service/Image for Service-02.jpg",
      excerpt: "Discover how dedicated bus rental Pune and premium car rental Pune services improve IT employee punctuality and offer stress-free commutes to Hinjewadi and Kharadi tech parks.",
      category: "Corporate Travel"
    },
    {
      title: "Wedding Transportation: 17 & 20 Seater Tempo Traveller Pune",
      date: "August 28, 2026",
      readTime: "7 min read",
      author: "Travel Desk",
      image: "/img/Image for Service/Image for Service-03.jpg",
      excerpt: "Ensure your grand wedding runs smoothly. Learn the benefits of booking a 17 seater tempo traveller Pune or a spacious 20 seater tempo traveller Pune for seamless guest transport.",
      category: "Wedding Rentals"
    },
    {
      title: "Best Outstation Cab Pune Destinations for Weekend Trips",
      date: "August 20, 2026",
      readTime: "6 min read",
      author: "Operations Team",
      image: "/img/Image for Service/Image for Service-04.jpg",
      excerpt: "Plan the ultimate getaway with a reliable outstation cab Pune. Explore top scenic routes including our popular Pune to Mahabaleshwar cab, Pune to Lonavala cab, Pune to Shirdi cab, and Pune to Nashik cab packages.",
      category: "Outstation Tours"
    },
    {
      title: "Budget Travel: Tempo Traveller Price Pune Breakdown",
      date: "August 15, 2026",
      readTime: "4 min read",
      author: "Shree Travels Team",
      image: "/img/Image for Service/Image for Service-05.jpg",
      excerpt: "Learn insider secrets to booking affordable group transport. We explain the average tempo traveller price Pune, specifically the 13 seater tempo traveller price Pune, and estimate your Pune to Mahabaleshwar travel cost.",
      category: "Travel Tips"
    },
    {
      title: "Pilgrimage Guide: 13 Seater Tempo Traveller Pune Options",
      date: "August 12, 2026",
      readTime: "8 min read",
      author: "Pilgrimage Dept",
      image: "/img/Image for Service/Image for Service-06.jpg",
      excerpt: "Embark on a sacred journey with our Ashtavinayak Yatra itinerary. Learn how booking a 13 seater tempo traveller Pune provides the perfect space for a peaceful family pilgrimage.",
      category: "Pilgrimage"
    },
    {
      title: "Airport Transfers: Pune to Mumbai Cab vs Luxury Bus",
      date: "August 2, 2026",
      readTime: "5 min read",
      author: "Logistics Team",
      image: "/img/tempo.webp",
      excerpt: "Avoid travel hassle. Compare the costs and luggage capacity of booking a dedicated airport cab Pune, a direct Pune to Mumbai cab, or an executive Force Urbania for airport drop services.",
      category: "Airport Transfer"
    },
    {
      title: "School Picnics & The Ultimate Pune to Lonavala Group Trip",
      date: "July 28, 2026",
      readTime: "4 min read",
      author: "Operations Team",
      image: "/img/tempo-ttt.webp",
      excerpt: "Organizing an educational tour or a fun Pune to Lonavala group trip? Read our checklist for selecting safe, GPS-enabled vehicles through our trusted bus rental Pune services.",
      category: "Educational Tours"
    },
    {
      title: "Corporate Event Transport & Force Urbania Rental Pune",
      date: "July 20, 2026",
      readTime: "5 min read",
      author: "Corporate Desk",
      image: "/img/force-ub.jpg",
      excerpt: "Planning an offsite meeting or team-building retreat? Learn the logistics of managing VIP transport with an executive Force Urbania rental Pune and large fleet dispatching.",
      category: "Corporate Events"
    },
    {
      title: "Travel Safety Tips for Tempo Traveller Rental Pune",
      date: "July 15, 2026",
      readTime: "4 min read",
      author: "Shree Travels Team",
      image: "/img/tata-winger3.jpeg",
      excerpt: "Safety first! Essential tips for group leaders securing a tempo traveller rental Pune, covering emergency protocols, regular vehicle maintenance checks, and smart seating arrangements.",
      category: "Safety"
    }
  ];

  // Combine all posts to generate individual BlogPosting schemas
  const allPosts = [mainFeaturedPost, ...secondaryPosts];
  
  const blogPostingSchemas = allPosts.map(post => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://shreetravels.in${post.image}`,
    "datePublished": new Date(post.date).toISOString(),
    "author": { 
      "@type": "Person", 
      "name": post.author 
    },
    "articleBody": post.excerpt,
    "publisher": {
      "@type": "Organization",
      "name": "Shree Travels",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shreetravels.in/img/Logo/shree.png"
      }
    }
  }));

  // Main Blog Schema Wrapper using @graph for robust SEO indexing
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "name": "Shree Travels Travel Blog",
        "url": "https://shreetravels.in/blog",
        "description": "Travel insights and guides on Force Urbania Pune, tempo traveller rental Pune, outstation cabs, and bus rentals."
      },
      ...blogPostingSchemas
    ]
  };

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" }
  ];

  // Combined Keywords String for SEO
  const seoKeywords = "12 seater tempo traveller Pune, 13 seater tempo traveller Pune, 17 seater tempo traveller Pune, 20 seater tempo traveller Pune, Force Urbania Pune, Force Urbania rental Pune, Pune to Mumbai cab, Pune to Lonavala cab, Pune to Mahabaleshwar cab, Pune to Shirdi cab, Pune to Nashik cab, car rental Pune, bus rental Pune, tempo traveller rental Pune, outstation cab Pune, airport cab Pune, tempo traveller price Pune, 13 seater tempo traveller price Pune, best vehicle for group travel Pune, Pune to Mahabaleshwar travel cost, Pune to Lonavala group trip";

  return (
    <>
      <SEO 
        title="Travel Blog: Tips for Tempo Traveller & Force Urbania Rent in Pune"
        description="Expert guides on booking 12, 13, 17, and 20 seater tempo travellers, Force Urbania rentals, and outstation cabs from Pune to Mumbai, Lonavala, Shirdi, and Mahabaleshwar."
        keywords={seoKeywords}
        path="/blog"
        schema={pageSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Blog Page Header */}
      <section className="bg-light py-5 border-bottom">
        <div className="container py-4 text-center px-3">
          <span className="badge px-3 py-2 rounded-pill fw-bold mb-3 shadow-sm text-white" style={{ backgroundColor: '#ff7700', fontSize: '0.85rem' }}>
            Shree Travels Journal
          </span>
          <h1 className="fw-bold mb-3 display-5 fs-3 fs-md-1 text-dark">Travel Insights, Guides & <span style={{ color: '#ff7700' }}>News</span></h1>
          <p className="text-muted lead fs-6 fs-md-5 max-w-75 mx-auto">
            Your definitive resource for booking Force Urbania rentals, discovering the best vehicle for group travel Pune, and planning outstation trips across Maharashtra.
          </p>
        </div>
      </section>

      {/* Main Blog Content Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          
          {/* Featured Hero Article */}
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-5 bg-light">
            <div className="row g-0 align-items-center">
              <div className="col-lg-7 overflow-hidden" style={{ minHeight: '320px' }}>
                <img 
                  src={mainFeaturedPost.image} 
                  alt={mainFeaturedPost.title} 
                  loading="lazy"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '320px', maxHeight: '420px', transition: 'transform 0.5s ease' }}
                  onError={(e) => { e.target.src = '/img/bus-luxury.jpeg'; }}
                />
              </div>
              <div className="col-lg-5 p-4 p-md-5">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="badge text-white px-3 py-1 rounded-pill fw-bold" style={{ backgroundColor: '#ff7700', fontSize: '0.75rem' }}>
                    {mainFeaturedPost.category}
                  </span>
                  <span className="text-muted small"><i className="far fa-clock me-1"></i> {mainFeaturedPost.readTime}</span>
                </div>
                <h2 className="h3 fw-bold text-dark mb-3" style={{ lineHeight: '1.4' }}>
                  {mainFeaturedPost.title}
                </h2>
                <p className="text-muted small mb-4" style={{ lineHeight: '1.7' }}>
                  {mainFeaturedPost.excerpt}
                </p>
                <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                  <span className="text-secondary small fw-semibold"><i className="far fa-user me-1"></i> {mainFeaturedPost.author}</span>
                  <Link to={`/blog/force-urbania-vs-tempo-traveller`} className="btn btn-dark btn-sm rounded-pill px-4 fw-semibold">
                    Read Article <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Articles Grid */}
          <div className="row g-4">
            {secondaryPosts.map((post, index) => {
              // Create a URL friendly slug for internal linking
              const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
              
              return (
                <div className="col-lg-4 col-md-6" key={index}>
                  <article className="h-100 d-flex flex-column bg-white border rounded-4 overflow-hidden shadow-sm">
                    
                    {/* Image Container */}
                    <div className="overflow-hidden position-relative" style={{ height: '220px' }}>
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        loading="lazy"
                        className="w-100 h-100 object-fit-cover"
                        style={{ transition: 'transform 0.5s ease' }}
                        onError={(e) => { e.target.src = '/img/bus-luxury.jpeg'; }}
                      />
                      <span 
                        className="position-absolute top-0 start-0 m-3 px-3 py-1 text-white small fw-bold rounded-pill shadow-sm"
                        style={{ backgroundColor: '#ff7700', fontSize: '0.75rem' }}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Body Content */}
                    <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                      <div>
                        <div className="d-flex align-items-center text-muted small mb-2 gap-3">
                          <span><i className="far fa-calendar-alt me-1"></i> {post.date}</span>
                          <span><i className="far fa-clock me-1"></i> {post.readTime}</span>
                        </div>
                        <h3 className="h5 fw-bold text-dark mb-2" style={{ lineHeight: '1.4', fontSize: '1.1rem' }}>
                          {post.title}
                        </h3>
                        <p className="text-muted small mb-4" style={{ lineHeight: '1.6' }}>
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="d-flex align-items-center justify-content-between pt-3 border-top mt-auto">
                        <span className="text-muted small" style={{ fontSize: '0.8rem' }}>By {post.author}</span>
                        <Link to={`/blog/${slug}`} className="text-decoration-none fw-bold small" style={{ color: '#ff7700' }}>
                          Read More &rarr;
                        </Link>
                      </div>
                    </div>

                  </article>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Professional Call to Action Banner */}
      <section className="py-5 text-white text-center" style={{ backgroundColor: '#0f172a' }}>
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Ready to Plan Your Next Journey with Us?</h2>
          <p className="text-light opacity-75 mb-4 max-w-75 mx-auto">
            Whether you need a quick airport cab Pune, an outstation journey, or a 20 seater tempo traveller Pune, book with instant confirmation and transparent pricing.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="tel:7875774499" className="btn btn-lg text-white fw-bold px-4 py-3 rounded-pill shadow-sm" style={{ backgroundColor: '#ff7700' }}>
              <i className="fas fa-phone-alt me-2"></i> Call: 7875774499
            </a>
            <Link to="/contact" className="btn btn-lg btn-light fw-bold px-4 py-3 rounded-pill text-dark">
              Book Online Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;