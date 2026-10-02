import React from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";

const CORPORATE={
  "corporate-car-rental-pune":{h1:"Corporate Car Rental in Pune",title:"Corporate Car Rental in Pune | Shree Travels",description:"Chauffeur-driven corporate car rental in Pune for meetings, airport transfers, client visits and business travel."},
  "corporate-bus-rental-pune":{h1:"Corporate Bus Rental in Pune",title:"Corporate Bus Rental in Pune | Shree Travels",description:"Corporate bus rental in Pune for employee movement, events, conferences, offsites and group transportation."},
  "employee-transportation-pune":{h1:"Employee Transportation in Pune",title:"Employee Transportation in Pune | Shree Travels",description:"Employee transportation and corporate group travel solutions across Pune, including Hinjewadi, Kharadi, Baner and Hadapsar."}
};

const CorporatePage=()=>{
  const {slug="corporate-bus-rental-pune"}=useParams();
  const data=CORPORATE[slug]||CORPORATE["corporate-bus-rental-pune"];
  const faqs=[
    ["Can you handle recurring corporate transportation?","Recurring requirements can be discussed based on routes, employee counts, pickup schedules and vehicle requirements."],
    ["Can you provide vehicles for corporate events?","Yes. Cars, Tempo Travellers, Force Urbania and buses can be considered based on the size and format of the event."],
    ["Do you provide airport transfers for business travellers?","Yes. Airport transfers can be arranged for individual executives or larger teams."],
    ["How do we request a corporate quotation?","Share the route, dates, passenger count, pickup points and required vehicle category through the booking or enquiry channel."]
  ];
  const schema=[
    {"@context":"https://schema.org","@type":"Service","name":data.h1,"serviceType":"Corporate transportation","provider":{"@type":"LocalBusiness","name":"Shree Travels","telephone":"+91-7875774499","url":"https://shreetravels.in"},"areaServed":["Pune","Hinjewadi","Kharadi","Baner","Hadapsar","Pimpri-Chinchwad"],"url":`https://shreetravels.in/${slug}`},
    {"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}
  ];
  return <>
    <SEO title={data.title.replace(" | Shree Travels","")} description={data.description} path={`/${slug}`} keywords="corporate travel Pune, employee transportation Pune, corporate bus rental Pune, corporate car rental Pune" schema={schema} breadcrumbs={[{name:"Home",url:"/"},{name:"Corporate Travel",url:"/service"},{name:data.h1,url:`/${slug}`}]}/>
    <main>
      <section className="py-5 text-white" style={{background:"linear-gradient(135deg,#0f172a,#1e293b)"}}><div className="container py-5">
        <p className="text-uppercase fw-bold" style={{color:"#ff7700"}}>Corporate Mobility • Pune</p><h1 className="display-5 fw-bold">{data.h1}</h1><p className="lead col-lg-8 mt-3">{data.description}</p>
        <div className="mt-4 d-flex flex-wrap gap-2"><Link to="/booking" className="btn btn-lg text-white fw-bold" style={{background:"#ff7700"}}>Request Corporate Quote</Link><a href="tel:+917875774499" className="btn btn-lg btn-outline-light fw-bold">Call Corporate Team</a></div>
      </div></section>

      <section className="py-5"><div className="container"><h2 className="fw-bold text-center mb-4">Built Around Business Travel Requirements</h2><div className="row g-4">
        {[["Scheduled employee movement","Plan recurring or one-time transportation around employee pickup points and office schedules."],["Client & executive travel","Use chauffeur-driven cars or premium group vehicles for meetings, airport transfers and business visits."],["Corporate events","Move teams between offices, hotels, venues, conferences and offsite destinations."],["Group capacity planning","Select a vehicle based on actual headcount instead of booking multiple smaller vehicles unnecessarily."],["Route coordination","Share pickup locations and destination details in advance so the trip plan is clear before travel."],["Single booking point","Coordinate vehicle requirement, date, route and passenger information through one enquiry."]].map(([t,d])=><div className="col-md-6 col-lg-4" key={t}><article className="h-100 border rounded-4 p-4 shadow-sm"><h2 className="h5 fw-bold">{t}</h2><p className="text-muted mb-0">{d}</p></article></div>)}
      </div></div></section>

      <section className="py-5 bg-light"><div className="container"><h2 className="fw-bold mb-3">Pune Corporate Travel Coverage</h2><p className="text-muted">Shree Travels can support corporate travel requirements across Pune and major business areas. Discuss your actual pickup and drop locations so the vehicle and schedule can be planned correctly.</p>
        <div className="d-flex flex-wrap gap-2 mt-4">{["Hinjewadi","Kharadi","Baner","Wakad","Hadapsar","Kothrud","Pimpri-Chinchwad"].map(a=><Link key={a} to={`/vehicle-rental-${a.toLowerCase().replaceAll(" ","-")}`} className="badge rounded-pill text-bg-dark text-decoration-none p-3">{a}</Link>)}</div>
      </div></section>

      <section className="py-5"><div className="container"><div className="row g-4">
        {[["Cars","/seater-cars"],["Tempo Travellers","/tempo-traveller"],["Force Urbania","/force-urbania-on-rent-pune"],["Buses","/bus-rental-pune"]].map(([n,h])=><div className="col-sm-6 col-lg-3" key={n}><Link to={h} className="d-block border rounded-4 p-4 h-100 text-decoration-none shadow-sm"><h2 className="h5 fw-bold">{n}</h2><span className="text-muted">Explore vehicle options →</span></Link></div>)}
      </div></div></section>

      <section className="py-5 bg-light"><div className="container" style={{maxWidth:"900px"}}><h2 className="fw-bold text-center mb-4">Corporate Travel FAQs</h2>
        {faqs.map(([q,a])=><details className="border rounded-3 p-3 mb-3 bg-white" key={q}><summary className="fw-bold">{q}</summary><p className="text-muted mt-3 mb-0">{a}</p></details>)}
      </div></section>
    </main>
  </>;
};
export default CorporatePage;