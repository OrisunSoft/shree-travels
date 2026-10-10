import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';

const BlogDetail = () => {
  const { slug } = useParams();

  // Scroll to top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Complete Database of All Blog Posts matching the Slugs from Blogs.jsx
  const blogData = {
    // BLOG 1
    'force-urbania-vs-tempo-traveller': {
      title: "Force Urbania vs Tempo Traveller: The Complete Booking Guide for Pune",
      date: "September 10, 2026",
      author: "Shree Travels Team",
      image: "/img/force-jai.webp",
      category: "Vehicle Comparison",
      seoTitle: "Force Urbania vs Tempo Traveller on Rent in Pune | Shree Travels",
      seoDescription: "Compare Force Urbania on rent in Pune vs Tempo Traveller. Find the best 12, 13, & 20 seater tempo travellers, and buses on rent for Mumbai, Lonavala & Mahabaleshwar.",
      seoKeywords: "Tempo Traveller on Rent in Pune, 12 Seater Tempo Traveller on Rent in Pune, 13 Seater Tempo Traveller on Rent in Pune, 20 Seater Tempo Traveller on Rent in Pune, Pune to Mumbai Tempo Traveller, Force Urbania on Rent in Pune, Bus on Rent in Pune",
      content: (
        <>
          <p className="lead mb-4">
            Choosing the right group transport is crucial. With so many options available, the debate usually comes down to two undisputed champions of Indian group travel: the classic <strong>Tempo Traveller</strong> and the ultra-modern <strong>Force Urbania</strong>. 
          </p>
          <hr className="my-4" />
          <h2 className="h3 fw-bold text-dark mb-4">1. The Classic Choice: Tempo Traveller on Rent in Pune</h2>
          <p>
            The Tempo Traveller has been the backbone of group tourism in Maharashtra. It is rugged, customizable, and incredibly budget-friendly. A <Link to="/tempo-traveller-seater-hire-pune" className="text-decoration-none fw-bold" style={{ color: '#ff7700' }}>Tempo Traveller on Rent in Pune</Link> is a tried-and-true option.
          </p>
          <ul className="list-group list-group-flush mb-4 shadow-sm rounded border">
            <li className="list-group-item p-3">
              <h3 className="h6 fw-bold mb-1">Small Groups & Families</h3>
              <p className="mb-0 text-muted">A <Link to="/13-seater-on-rent-pune" className="text-decoration-none" style={{ color: '#ff7700' }}>12 Seater Tempo Traveller on Rent in Pune</Link> or a <strong>13 Seater Tempo Traveller on Rent in Pune</strong> provides plush pushback seats perfect for nuclear families.</p>
            </li>
            <li className="list-group-item p-3">
              <h3 className="h6 fw-bold mb-1">Large Joint Families</h3>
              <p className="mb-0 text-muted">Got a bigger crowd? The <strong>20 Seater Tempo Traveller on Rent in Pune</strong> ensures everyone travels together.</p>
            </li>
          </ul>
          <h2 className="h3 fw-bold text-dark mb-4">2. The Premium Upgrade: Force Urbania on Rent in Pune</h2>
          <p>
            Booking a <Link to="/force-urbania-on-rent-pune" className="text-decoration-none fw-bold" style={{ color: '#ff7700' }}>Force Urbania on Rent in Pune</Link> means you get panoramic windows, superior NVH control, and exceptional standing height. It's perfect whether you need a <strong>Force Urbania on Rent in Lonavala</strong> or a <strong>Force Urbania on Rent in Mahabaleshwar</strong> for ghat sections.
          </p>
        </>
      )
    },
    // BLOG 2
    'corporate-bus-rental-pune-commute-benefits': {
      title: "Corporate Bus Rental Pune & Commute Benefits",
      date: "September 5, 2026",
      author: "Prakash Margale",
      image: "/img/Image for Service/Image for Service-02.jpg",
      category: "Corporate Travel",
      seoTitle: "Corporate Bus Rental Pune | Employee Commute Solutions",
      seoDescription: "Discover the benefits of corporate bus rental in Pune. Book a 17, 32, or 40 seater bus on rent for IT park employee commutes.",
      seoKeywords: "Bus on Rent in Pune, 17 Seater Bus on Rent, 32 Seater Bus on Rent, 40 Seater Bus on Rent in Pune, 50 Seater Bus on Rent in Pune",
      content: (
        <>
          <p className="lead mb-4">
            Navigating Pune traffic to reach Hinjewadi or Kharadi IT parks daily is draining. Discover how a dedicated <Link to="/bus-rental-pune" className="text-decoration-none fw-bold" style={{ color: '#ff7700' }}>Bus on Rent in Pune</Link> improves employee punctuality and productivity.
          </p>
          <p>
            For startups, a <strong>17 Seater Bus on Rent</strong> offers agility. For mid-sized IT firms, a <strong>32 Seater Bus on Rent</strong> is the sweet spot. For massive corporate parks, deploying a <strong>40 Seater Bus on Rent in Pune</strong> or even a <strong>50 Seater Bus on Rent in Pune</strong> ensures entire departments arrive safely and stress-free.
          </p>
        </>
      )
    },
    // BLOG 3
    'wedding-transportation-17-20-seater-tempo-traveller-pune': {
      title: "Wedding Transportation: 17 & 20 Seater Tempo Traveller Pune",
      date: "August 28, 2026",
      author: "Travel Desk",
      image: "/img/Image for Service/Image for Service-03.jpg",
      category: "Wedding Rentals",
      seoTitle: "Wedding Transport: 17 & 20 Seater Tempo Traveller Pune",
      seoDescription: "Book a 17 or 20 seater tempo traveller on rent in Pune for your wedding guests. Ensure smooth transportation for grand Maharashtrian weddings.",
      seoKeywords: "20 Seater Tempo Traveller on Rent in Pune, 17 Seater Bus on Rent, Tempo Traveller on Rent in Pune",
      content: (
        <>
          <p className="lead mb-4">
            Indian weddings are logistical marathons. Make sure your guests move seamlessly from the hotel to the mandap with our specialized wedding transport fleets.
          </p>
          <p>
            Booking a <strong>20 Seater Tempo Traveller on Rent in Pune</strong> provides the perfect balance of space for luggage and heavy wedding attire. For slightly smaller VIP family groups, the <Link to="/17-seater-on-rent-pune" className="text-decoration-none fw-bold" style={{ color: '#ff7700' }}>17 Seater Tempo Traveller on Rent in Pune</Link> is unmatched in comfort.
          </p>
        </>
      )
    },
    // BLOG 4
    'best-outstation-cab-pune-destinations-for-weekend-trips': {
      title: "Best Outstation Cab Pune Destinations for Weekend Trips",
      date: "August 20, 2026",
      author: "Operations Team",
      image: "/img/Image for Service/Image for Service-04.jpg",
      category: "Outstation Tours",
      seoTitle: "Best Outstation Cab Pune | Weekend Trips from Pune",
      seoDescription: "Explore Lonavala, Mahabaleshwar, Shirdi, and Nashik. Book premium outstation cabs or a Force Urbania on rent for your next weekend getaway.",
      seoKeywords: "Pune to Mumbai Cab, Force Urbania on Rent in Mahabaleshwar, Force Urbania on Rent in Nashik, Force Urbania on Rent in Shirdi",
      content: (
        <>
          <p className="lead mb-4">
            Ready to escape the city? Pune is surrounded by breathtaking hill stations and sacred pilgrimage sites perfectly suited for weekend getaways.
          </p>
          <p>
            If you are traveling solo or as a couple, our <strong>Pune to Mumbai Cab</strong> services are ideal. But for families, a <strong>Force Urbania on Rent in Mahabaleshwar</strong> guarantees luxury in the hills. Planning a spiritual trip? We highly recommend a <strong>Force Urbania on Rent in Shirdi</strong> or a <strong>Force Urbania on Rent in Nashik</strong> for older family members who require superior suspension and legroom.
          </p>
        </>
      )
    },
    // BLOG 5
    'budget-travel-tempo-traveller-price-pune-breakdown': {
      title: "Budget Travel: Tempo Traveller Price Pune Breakdown",
      date: "August 15, 2026",
      author: "Shree Travels Team",
      image: "/img/Image for Service/Image for Service-05.jpg",
      category: "Travel Tips",
      seoTitle: "Tempo Traveller Price Pune | Budget Travel Tips",
      seoDescription: "Get the complete pricing breakdown for renting a tempo traveller in Pune, including 12 seater and 13 seater options.",
      seoKeywords: "Tempo Traveller on Rent in Pune, 12 Seater Tempo Traveller on Rent in Pune, 13 Seater Tempo Traveller on Rent in Pune",
      content: (
        <>
          <p className="lead mb-4">
            Group travel shouldn't break the bank. Understanding how tempo traveller pricing works in Pune can save you thousands of rupees on your next booking.
          </p>
          <p>
            Typically, pricing is calculated per kilometer with a minimum daily running limit (usually 300km). Whether you opt for a budget-friendly <strong>12 Seater Tempo Traveller on Rent in Pune</strong> or a spacious <strong>13 Seater Tempo Traveller on Rent in Pune</strong>, splitting the cost among passengers makes it significantly cheaper than booking multiple individual cabs.
          </p>
        </>
      )
    },
    // BLOG 6
    'pilgrimage-guide-13-seater-tempo-traveller-pune-options': {
      title: "Pilgrimage Guide: 13 Seater Tempo Traveller Pune Options",
      date: "August 12, 2026",
      author: "Pilgrimage Dept",
      image: "/img/Image for Service/Image for Service-06.jpg",
      category: "Pilgrimage",
      seoTitle: "Pilgrimage Transport: 13 Seater Tempo Traveller in Pune",
      seoDescription: "Embark on Ashtavinayak Darshan or Pandharpur Yatra with a comfortable 13 seater tempo traveller or Force Urbania on rent in Pune.",
      seoKeywords: "13 Seater Tempo Traveller on Rent in Pune, Force Urbania on Rent in Shirdi",
      content: (
        <>
          <p className="lead mb-4">
            Spiritual journeys require peace of mind. For the Ashtavinayak Yatra or a trip to Pandharpur, vehicle comfort is paramount for elderly family members.
          </p>
          <p>
            A <Link to="/13-seater-on-rent-pune" className="text-decoration-none fw-bold" style={{ color: '#ff7700' }}>13 Seater Tempo Traveller on Rent in Pune</Link> provides great aisle space and pushback seats. For premium comfort, upgrading to a <strong>Force Urbania on Rent in Shirdi</strong> ensures your family arrives at the temple feeling fresh, not fatigued.
          </p>
        </>
      )
    },
    // BLOG 7
    'airport-transfers-pune-to-mumbai-cab-vs-luxury-bus': {
      title: "Airport Transfers: Pune to Mumbai Cab vs Luxury Bus",
      date: "August 2, 2026",
      author: "Logistics Team",
      image: "/img/tempo.webp",
      category: "Airport Transfer",
      seoTitle: "Pune to Mumbai Airport Cab & Tempo Traveller Transfers",
      seoDescription: "Need to reach Mumbai airport? Compare Pune to Mumbai cabs, Force Urbania rentals, and Pune to Mumbai Tempo Travellers.",
      seoKeywords: "Pune to Mumbai Cab, Mumbai to Pune Cab, Pune to Mumbai Airport Cab, Pune to Mumbai Tempo Traveller, Force Urbania on Rent in Mumbai",
      content: (
        <>
          <p className="lead mb-4">
            Missing an international flight is a nightmare. Relying on state transport isn't always viable when you have heavy luggage.
          </p>
          <p>
            For individuals, a dedicated <strong>Pune to Mumbai Airport Cab</strong> is the fastest option. Coming back? Book a reliable <strong>Mumbai to Pune Cab</strong>. However, if an entire corporate team or large NRI family is flying, a <strong>Pune to Mumbai Tempo Traveller</strong> or a luxury <strong>Force Urbania on Rent in Mumbai</strong> guarantees all luggage fits perfectly without multiple car rentals.
          </p>
        </>
      )
    },
    // BLOG 8
    'school-picnics-the-ultimate-pune-to-lonavala-group-trip': {
      title: "School Picnics & The Ultimate Pune to Lonavala Group Trip",
      date: "July 28, 2026",
      author: "Operations Team",
      image: "/img/tempo-ttt.webp",
      category: "Educational Tours",
      seoTitle: "Bus on Rent in Pune for School Picnics & Educational Tours",
      seoDescription: "Organize safe school picnics to Lonavala. Book 32, 40, and 50 seater buses on rent in Pune with Shree Travels.",
      seoKeywords: "Bus on Rent in Pune, 32 Seater Bus on Rent, 40 Seater Bus on Rent in Pune, 50 Seater Bus on Rent in Pune",
      content: (
        <>
          <p className="lead mb-4">
            Safety is the number one priority when transporting school and college students. For educational tours to Lonavala or Imagica, you need robust fleet capacity.
          </p>
          <p>
            We strictly maintain our buses for school tours. Depending on the class size, you can book a <strong>32 Seater Bus on Rent</strong>. For large entire-batch excursions, our <strong>40 Seater Bus on Rent in Pune</strong> and <strong>50 Seater Bus on Rent in Pune</strong> come equipped with GPS tracking, first aid, and verified drivers.
          </p>
        </>
      )
    },
    // BLOG 9
    'corporate-event-transport-force-urbania-rental-pune': {
      title: "Corporate Event Transport & Force Urbania Rental Pune",
      date: "July 20, 2026",
      author: "Corporate Desk",
      image: "/img/force-ub.jpg",
      category: "Corporate Events",
      seoTitle: "Corporate Event Transport | Force Urbania Rental Pune",
      seoDescription: "Provide VIP transport for your delegates with a Force Urbania on Rent in Pune or a premium 17 seater bus.",
      seoKeywords: "Force Urbania on Rent in Pune, 17 Seater Bus on Rent",
      content: (
        <>
          <p className="lead mb-4">
            First impressions matter. When international delegates or C-suite executives visit your Pune headquarters, transport should reflect your company's professionalism.
          </p>
          <p>
            A <Link to="/force-urbania-on-rent-pune" className="text-decoration-none fw-bold" style={{ color: '#ff7700' }}>Force Urbania on Rent in Pune</Link> provides an unmatched VIP experience with its high roof, ambient lighting, and captain seats. For slightly larger management offsites, a luxury <strong>17 Seater Bus on Rent</strong> provides executive comfort.
          </p>
        </>
      )
    },
    // BLOG 10
    'travel-safety-tips-for-tempo-traveller-rental-pune': {
      title: "Travel Safety Tips for Tempo Traveller Rental Pune",
      date: "July 15, 2026",
      author: "Shree Travels Team",
      image: "/img/tata-winger3.jpeg",
      category: "Safety",
      seoTitle: "Travel Safety Tips | Tempo Traveller Rental in Pune",
      seoDescription: "Ensure your group's safety. Tips for booking a well-maintained 12, 13, or 20 seater tempo traveller on rent in Pune.",
      seoKeywords: "Tempo Traveller on Rent in Pune, 12 Seater Tempo Traveller on Rent in Pune, 20 Seater Tempo Traveller on Rent in Pune",
      content: (
        <>
          <p className="lead mb-4">
            Before signing off on a cheap travel deal, always verify the maintenance record of the vehicle. Safety should never be compromised for price.
          </p>
          <p>
            Whether booking a compact <strong>12 Seater Tempo Traveller on Rent in Pune</strong> or a heavy-duty <strong>20 Seater Tempo Traveller on Rent in Pune</strong>, ensure the agency provides experienced hill-driving chauffeurs, functional seatbelts, and active GPS tracking for peace of mind.
          </p>
        </>
      )
    },
    // FALLBACK IF URL IS INCORRECT
    'default': {
      title: "Travel Insights & Vehicle Rental Guides",
      date: "September 15, 2026", 
      author: "Shree Travels",
      image: "/img/bus-luxury.jpg",
      category: "Travel Guide",
      seoTitle: "Travel Blog | Shree Travels Pune",
      seoDescription: "Read the latest tips on booking outstation cabs, tempo travellers, and bus rentals in Pune and Maharashtra.",
      seoKeywords: "Bus on Rent in Pune, Pune to Mumbai Cab, Tempo Traveller on Rent in Pune",
      content: (
        <>
          <p className="lead mb-4">
            Welcome to the Shree Travels insights page. We are currently updating this specific article.
          </p>
          <p>
            In the meantime, explore our premium services. Whether you need a <strong>12 Seater Tempo Traveller on Rent in Pune</strong> or a quick <strong>Pune to Mumbai Airport Cab</strong>, we have you covered.
          </p>
          <div className="mt-5 text-center">
            <Link to="/blog" className="btn btn-dark rounded-pill px-4">
              &larr; Back to All Blogs
            </Link>
          </div>
        </>
      )
    }
  };

  // Select the blog data based on the URL slug, or fallback to default
  const post = blogData[slug] || blogData['default'];

  // Generate dynamic Schema Markup for Google rich snippets with Safety Check
  const parsedDate = new Date(post.date);
  const isValidDate = !isNaN(parsedDate.getTime());

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": `https://shreetravels.in${post.image}`,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Shree Travels",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shreetravels.in/img/Logo/shree.png"
      }
    },
    "datePublished": isValidDate ? parsedDate.toISOString() : new Date().toISOString()
  };

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` }
  ];

  return (
    <>
      <SEO 
        title={post.seoTitle}
        description={post.seoDescription}
        keywords={post.seoKeywords}
        path={`/blog/${slug}`}
        schema={articleSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Article Header */}
      <section className="bg-light pt-5 pb-4 border-bottom">
        <div className="container px-3 text-center" style={{ maxWidth: '900px' }}>
          <span 
            className="badge px-3 py-2 rounded-pill fw-bold mb-3 shadow-sm text-white" 
            style={{ backgroundColor: '#ff7700', fontSize: '0.85rem' }}
          >
            {post.category}
          </span>
          <h1 className="fw-bold mb-4 display-5 fs-3 fs-md-1 text-dark" style={{ lineHeight: '1.3' }}>
            {post.title}
          </h1>
          <div className="d-flex align-items-center justify-content-center gap-3 text-muted small fw-semibold">
            <span><i className="far fa-user-circle me-1"></i> {post.author}</span>
            <span>|</span>
            <span><i className="far fa-calendar-alt me-1"></i> {post.date}</span>
          </div>
        </div>
      </section>

      {/* Featured Image - NOW DYNAMICALLY LOADS IMAGES 01 THRU 10 */}
      <section className="py-4">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="rounded-4 overflow-hidden shadow-sm" style={{ height: '400px', backgroundColor: '#f8f9fa' }}>
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-100 h-100 object-fit-cover"
              onError={(e) => { e.target.src = '/img/bus-luxury.jpg'; }}
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-5">
        <div className="container" style={{ maxWidth: '850px' }}>
          <article className="fs-5 text-dark" style={{ lineHeight: '1.8' }}>
            {post.content}
          </article>
          
          {/* Universal Call to Action / Booking Block */}
          <div className="bg-dark text-white rounded-4 p-4 p-md-5 mt-5 text-center shadow-lg">
            <h3 className="fw-bold mb-3">Make the Right Choice with Shree Travels</h3>
            <p className="opacity-75 mb-4 max-w-75 mx-auto">
              From reliable Airport Cabs to ultra-luxury Force Urbania rentals and 50-seater buses, we have the perfect vehicle waiting for your group.
            </p>
            <Link to="/contact" className="btn btn-lg btn-light text-dark fw-bold px-5 rounded-pill shadow">
              Get an Instant Quote Today
            </Link>
          </div>

          {/* Tag / Category Footer */}
          <div className="mt-5 pt-4 border-top d-flex justify-content-between align-items-center flex-wrap gap-3">
             <div>
                <span className="fw-bold me-2">Tags:</span>
                <span className="badge bg-secondary rounded-pill me-2">Pune Travel</span>
                <span className="badge bg-secondary rounded-pill me-2">Bus Rental</span>
                <span className="badge bg-secondary rounded-pill">Force Urbania</span>
             </div>
             <Link to="/blog" className="text-decoration-none fw-bold" style={{ color: '#ff7700' }}>
               &larr; Back to Journal
             </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;