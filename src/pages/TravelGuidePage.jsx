import React from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";

const GUIDES = {
  "pune-to-mumbai": { 
    title: "Pune to Mumbai Road Trip: Group Travel & Vehicle Guide", 
    description: "Planning a Pune to Mumbai trip? Learn how to choose between a car, Tempo Traveller, Force Urbania, or Bus for group travel.", 
    h1: "Pune to Mumbai Travel Guide", 
    intro: "A practical guide to planning Pune–Mumbai road travel by car, Tempo Traveller, Force Urbania or bus." 
  },
  "pune-to-lonavala": { 
    title: "Pune to Lonavala Trip Planning | Renting Buses & Tempo Travellers", 
    description: "Planning a Pune to Lonavala weekend trip? Read our guide on vehicle selection, group trips, and practical road travel tips.", 
    h1: "Pune to Lonavala Travel Guide", 
    intro: "Plan a comfortable Pune–Lonavala road trip with the right vehicle for your passengers, luggage and itinerary." 
  },
  "pune-to-mahabaleshwar": { 
    title: "Pune to Mahabaleshwar Group Tour: Fleet Selection Guide", 
    description: "Everything you need to know about booking group transportation from Pune to Mahabaleshwar. Compare vehicle sizes and trip plans.", 
    h1: "Pune to Mahabaleshwar Travel Guide", 
    intro: "Plan a Pune–Mahabaleshwar trip with a vehicle matched to your group size and travel plan." 
  },
  "pune-to-shirdi": { 
    title: "Pune to Shirdi Darshan: Travel Planning & Vehicle Hire", 
    description: "A complete guide for families and pilgrimage groups travelling from Pune to Shirdi by car, Tempo Traveller or luxury bus.", 
    h1: "Pune to Shirdi Travel Guide", 
    intro: "Understand the main vehicle and planning considerations before booking Pune–Shirdi group transportation." 
  },
  "pune-to-nashik": { 
    title: "Pune to Nashik Road Trip: Group Travel Options & Tips", 
    description: "Discover the best ways to travel from Pune to Nashik. Compare group vehicle choices, luggage capacity, and round-trip planning.", 
    h1: "Pune to Nashik Travel Guide", 
    intro: "Plan your Pune–Nashik journey around passenger count, luggage and whether you need a one-way or return trip." 
  },
  "pune-to-goa": { 
    title: "Pune to Goa Road Trip: Group Travel & Fleet Guide", 
    description: "Planning a long road trip from Pune to Goa? Learn how to choose the right vehicle for maximum comfort during extended travel hours.", 
    h1: "Pune to Goa Road Trip Guide", 
    intro: "Choose the right vehicle for a longer Pune–Goa road trip based on your group size, luggage and travel duration." 
  },
  "13-vs-17-seater-tempo-traveller": { 
    title: "13 vs 17 Seater Tempo Traveller on Rent: Which to Choose?", 
    description: "Not sure which Tempo Traveller to book? Compare 13 and 17 seater capacities for family, corporate, and group travel from Pune.", 
    h1: "13 vs 17 Seater Tempo Traveller", 
    intro: "The best seating capacity depends on passengers, luggage, comfort and whether everyone needs to travel together." 
  },
  "tempo-traveller-vs-force-urbania": { 
    title: "Tempo Traveller vs Force Urbania Rent in Pune: A Comparison", 
    description: "Compare Tempo Traveller and Force Urbania for group travel from Pune based on luxury, comfort, legroom, and trip type.", 
    h1: "Tempo Traveller vs Force Urbania", 
    intro: "Both vehicles can work for group travel, but the right choice depends on comfort expectations, passenger count and itinerary." 
  },
  "17-vs-32-seater-bus": { 
    title: "17 Seater vs 32 Seater Bus Rent in Pune: Group Size Guide", 
    description: "Need to book a bus in Pune? Compare 17-seater mini buses and 32-seater mid-size buses for corporate events and weddings.", 
    h1: "17 Seater vs 32 Seater Bus", 
    intro: "Choose a vehicle based on actual headcount, luggage, comfort and whether the group needs to travel together." 
  },
  "bus-rental-price-pune": { 
    title: "Bus Rental Price in Pune | Per Km Rates & Cost Factors", 
    description: "Understand the factors that affect bus rental pricing in Pune, including per-km rates, seating capacity, outstation packages, and tolls.", 
    h1: "Bus Rental Price in Pune", 
    intro: "Bus rental pricing depends on seating capacity, route, kilometres, duration, vehicle type and trip requirements." 
  },
  "tempo-traveller-price-pune": { 
    title: "Tempo Traveller Price in Pune | Per Km Rental Cost Guide", 
    description: "Wondering how much it costs to rent a Tempo Traveller in Pune? Learn about per-km pricing, package rates, and how to get an accurate quote.", 
    h1: "Tempo Traveller Price in Pune", 
    intro: "Use passenger count, distance, duration, vehicle type and itinerary to compare Tempo Traveller rental quotations." 
  }
};

const TravelGuidePage = () => {
  const { slug = "pune-to-mumbai" } = useParams();
  
  // Default fallback if a bad URL is entered
  const data = GUIDES[slug] || { 
    title: "Group Travel Guide & Vehicle Rentals in Pune", 
    description: "Practical travel and vehicle rental guides for outstation and local trips from Shree Travels.", 
    h1: "Pune Travel Guide", 
    intro: "Practical information for planning group travel from Pune." 
  };
  
  const articleSchema = { 
    "@context": "https://schema.org", 
    "@type": "Article", 
    "headline": data.h1, 
    "description": data.description, 
    "author": { "@type": "Organization", "name": "Shree Travels" }, 
    "publisher": { "@type": "Organization", "name": "Shree Travels", "logo": { "@type": "ImageObject", "url": "https://shreetravels.in/img/Logo/shree.png.png" } }, 
    "mainEntityOfPage": `https://shreetravels.in/travel-guides/${slug}` 
  };
  
  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <SEO 
        title={data.title} 
        description={data.description} 
        path={`/travel-guides/${slug}`} 
        keywords={`${data.h1}, Pune road trip guide, rent bus in Pune, group travel planning`} 
        schema={articleSchema} 
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Travel Guides", url: "/blog" },
          { name: data.h1, url: `/travel-guides/${slug}` }
        ]}
      />
      
      <main>
        <article>
          <header className="py-5 text-white" style={{background:"linear-gradient(135deg,#0f172a,#334155)"}}>
            <div className="container py-5">
              <p className="text-uppercase fw-bold" style={{color:"#ff7700"}}>Shree Travel Guide</p>
              <h1 className="display-5 fw-bold">{data.h1}</h1>
              <p className="lead col-lg-8 mt-3">{data.intro}</p>
            </div>
          </header>
          
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-8">
                <h2 className="fw-bold">Start With Your Group Size</h2>
                <p>Vehicle selection should start with the number of passengers travelling together. A small family may prefer a car, while larger groups can compare a Tempo Traveller, Force Urbania or bus. Passenger count is only one factor: luggage and trip duration also affect comfort.</p>
                
                <h2 className="fw-bold mt-5">Compare the Trip Format</h2>
                <p>Decide whether you need a one-way transfer, round trip, local sightseeing, airport transfer or multi-day journey. The same destination can require different vehicles depending on the itinerary and number of travel days.</p>
                
                <h2 className="fw-bold mt-5">Ask for a Clear Quotation</h2>
                <p>Before confirming a booking, share your travel date, pickup point, destination, passenger count, luggage requirement and preferred vehicle. Ask which charges are included and which are additional so you can compare quotations fairly.</p>
                
                <h2 className="fw-bold mt-5">Vehicle Options</h2>
                <div className="row g-3">
                  {[
                    ["Car Rental","/contact"],
                    ["Tempo Traveller","/tempo-traveller-seater-hire-pune"],
                    ["Force Urbania","/force-urbania-on-rent-pune"],
                    ["Bus Rental","/bus-rental-pune"]
                  ].map(([n,h])=>(
                    <div className="col-sm-6" key={n}>
                      <a href={h} className="border rounded-3 p-3 d-block text-decoration-none fw-semibold text-dark hover-orange-bg transition-all">
                        {n} →
                      </a>
                    </div>
                  ))}
                </div>
                
                <div className="mt-5 p-4 p-md-5 rounded-4 text-white shadow" style={{background:"#0f172a"}}>
                  <h2 className="h4 fw-bold">Planning a Trip?</h2>
                  <p className="mb-4">Share your date, passengers and route with Shree Travels for an exact vehicle recommendation.</p>
                  
                  <a href="/book-taxi" className="btn fw-bold text-white px-4 py-3 rounded-pill shadow-sm" style={{background:"#ff7700"}}>
                    Request a Quote
                  </a>
                </div>
              </div>
              
              <aside className="col-lg-4">
                <div className="border rounded-4 p-4 shadow-sm sticky-lg-top bg-white" style={{top:"90px"}}>
                  <h2 className="h5 fw-bold mb-3">Explore Shree Travels</h2>
                  <div className="list-group list-group-flush">
                    <a href="/bus-rental-pune" className="list-group-item list-group-item-action py-3">Bus Rental in Pune</a>
                    <a href="/tempo-traveller-seater-hire-pune" className="list-group-item list-group-item-action py-3">Tempo Traveller</a>
                    <a href="/force-urbania-on-rent-pune" className="list-group-item list-group-item-action py-3">Force Urbania</a>
                    <a href="/reviews" className="list-group-item list-group-item-action py-3">Google Reviews</a>
                    <a href="/contact" className="list-group-item list-group-item-action py-3">Contact Shree Travels</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default TravelGuidePage;