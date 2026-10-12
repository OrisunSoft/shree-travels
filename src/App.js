import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Global Layout Components (direct imports for immediate shell hydration)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollAndImageEffects from './components/ScrollAndImageEffects';
import BookingPopupModal from './components/BookingPopupModal';
import FloatingButtons from './components/FloatingButtons';

// Critical Homepage (direct import so homepage loads with zero secondary roundtrips)
import Home from './pages/Home';

// Lazy-loaded secondary pages (code-split into separate on-demand chunks for sub-second mobile loading)
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const OurFleet = lazy(() => import('./pages/OurFleet'));
const Packages = lazy(() => import('./pages/Packages'));
const OurNetwork = lazy(() => import('./pages/OurNetwork'));
const Booking = lazy(() => import('./pages/Booking'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQs = lazy(() => import('./pages/FAQs'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Careers = lazy(() => import('./pages/Careers'));
const Reviews = lazy(() => import('./pages/Reviews'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Vehicle-Specific Pages
const ForceUrbania = lazy(() => import('./pages/ForceUrbania'));
const BusRental = lazy(() => import('./pages/BusRental'));
const SeaterCars = lazy(() => import('./pages/SeaterCars'));
const Thirteen14Seater = lazy(() => import('./pages/Thirteen14Seater'));
const Seventeen20Seater = lazy(() => import('./pages/Seventeen20Seater'));
const TempoTraveller = lazy(() => import('./pages/TempoTraveller'));

// SEO Landing Pages
const RoutePage = lazy(() => import('./pages/RoutePage'));
const AirportPage = lazy(() => import('./pages/AirportPage'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const CorporatePage = lazy(() => import('./pages/CorporatePage'));
const OutOfCityRentals = lazy(() => import('./pages/OutOfCityRentals'));

// Specialized City & Fleet Pages
const CityFleetPage = lazy(() => import('./pages/CityFleetPage'));
const TourPackagePage = lazy(() => import('./pages/TourPackagePage'));

// Keyword Landing Pages & lightweight slugs index
const KeywordLandingPage = lazy(() => import('./pages/KeywordLandingPage'));
import { KEYWORD_SLUGS } from './data/keywordSlugs';

// Minimalist zero-CLS page transition loader
const PageLoader = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '38px', height: '38px', border: '3px solid rgba(255,119,0,0.2)', borderTopColor: '#ff7700', borderRadius: '50%', animation: 'stSpin 0.75s linear infinite' }} />
  </div>
);

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <ScrollAndImageEffects />
        
        <div className="d-flex flex-column min-vh-100" style={{ overflowX: 'hidden', maxWidth: '100%' }}>
          <Navbar />
          
          <main className="flex-grow-1" style={{ overflowX: 'hidden', maxWidth: '100%' }}>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Home & Main Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/service" element={<Services />} />
                <Route path="/our-fleet" element={<OurFleet />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/our-network" element={<OurNetwork />} />
                <Route path="/book-taxi" element={<Booking />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/reviews" element={<Reviews />} />
                
                {/* Blog Routes */}
                <Route path="/blog" element={<Blogs />} />
                <Route path="/blog/:slug" element={<BlogDetail />} /> 
                
                <Route path="/contact" element={<Contact />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/terms-and-conditions" element={<TermsConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/careers" element={<Careers />} />

                {/* Dedicated High-Intent Search URLs (City + Vehicle) */}
                <Route path="/rent/:city/:vehicle" element={<CityFleetPage />} />

                {/* Base Vehicle Routes */}
                <Route path="/force-urbania-on-rent-pune" element={<ForceUrbania />} />
                <Route path="/bus-rental-pune" element={<BusRental />} />
                <Route path="/tempo-traveller-seater-hire-pune" element={<TempoTraveller />} />
                <Route path="/13-seater-on-rent-pune" element={<SeaterCars seaterType="13" />} />
                <Route path="/14-seater-on-rent-pune" element={<Thirteen14Seater />} />
                <Route path="/17-seater-on-rent-pune" element={<Seventeen20Seater seaterType="17" />} />
                
                {/* 20-Seater Routes with Redirects for SEO/Caching Issues */}
                <Route path="/20-seater-bus-rental-pune" element={<Seventeen20Seater seaterType="20" />} />
                <Route path="/20-Seater-On-Rent-In-Pune" element={<Navigate to="/20-seater-bus-rental-pune" replace />} />
                <Route path="/20-seater-on-rent-in-pune" element={<Navigate to="/20-seater-bus-rental-pune" replace />} />
                <Route path="/20-seater-on-rent-pune" element={<Navigate to="/20-seater-bus-rental-pune" replace />} />

                <Route path="/15-seater-on-rent-pune" element={<SeaterCars seaterType="15" />} />

                {/* 8 Dedicated Outstation & Pilgrimage Tour Package Pages */}
                <Route path="/pune-to-mahabaleshwar-bus-hire" element={<TourPackagePage />} />
                <Route path="/pune-to-lonavala-bus-hire" element={<TourPackagePage />} />
                <Route path="/pune-to-goa-bus-hire" element={<TourPackagePage />} />
                <Route path="/pune-to-konkan-darshan" element={<TourPackagePage />} />
                <Route path="/pune-to-mumbai-darshan" element={<TourPackagePage />} />
                <Route path="/ashtavinayak-darshan-bus-hire-pune" element={<TourPackagePage />} />
                <Route path="/bhimashankar-5-jyotirlinga-darshan-pune" element={<TourPackagePage />} />
                <Route path="/sade-teen-shakti-peeth-darshan-pune" element={<TourPackagePage />} />
                <Route path="/pune-to-sambhaji-nagar-tour" element={<TourPackagePage />} />
                <Route path="/pune-to-sambhaji-nagar-tour-package" element={<TourPackagePage />} />
                <Route path="/pune-to-aurangabad-tour" element={<Navigate to="/pune-to-sambhaji-nagar-tour" replace />} />
                <Route path="/pune-to-konkan-darshan-bus-hire" element={<Navigate to="/pune-to-konkan-darshan" replace />} />

                {/* All Dedicated Footer Keyword Vehicle & Route Landing Pages */}
                {KEYWORD_SLUGS.map((slug) => (
                  <Route
                    key={slug}
                    path={`/${slug}`}
                    element={<KeywordLandingPage keywordKey={slug} />}
                  />
                ))}
                
                {/* Travel Guides Route */}
                <Route path="/travel-guides/:slug" element={<RoutePage />} />

                {/* Corporate & Group Transportation Routes */}
                <Route path="/corporate-car-rental-pune" element={<CorporatePage />} />
                <Route path="/corporate-bus-rental-pune" element={<CorporatePage />} />
                <Route path="/employee-transportation-pune" element={<CorporatePage />} />
                <Route path="/group-transportation-pune" element={<CorporatePage />} />
                <Route path="/family-tour-vehicle-rental-pune" element={<CorporatePage />} />
                <Route path="/school-college-bus-rental-pune" element={<CorporatePage />} />

                {/* Tours & Location Routes */}
                <Route path="/maharashtra-tour-vehicle-rental" element={<LocationPage />} />
                <Route path="/pune-tour-vehicle-rental" element={<LocationPage />} />
                <Route path="/vehicle-rental-hinjewadi" element={<LocationPage />} />
                <Route path="/vehicle-rental-kharadi" element={<LocationPage />} />
                <Route path="/vehicle-rental-baner" element={<LocationPage />} />
                <Route path="/vehicle-rental-wakad" element={<LocationPage />} />
                <Route path="/vehicle-rental-koregaon-park" element={<LocationPage />} />
                <Route path="/vehicle-rental-hadapsar" element={<LocationPage />} />
                <Route path="/vehicle-rental-kothrud" element={<LocationPage />} />
                <Route path="/vehicle-rental-pimpri-chinchwad" element={<LocationPage />} />
                <Route path="/maharashtra-network" element={<OutOfCityRentals />} />

                {/* Airport Transfer Routes */}
                <Route path="/pune-airport-cab" element={<AirportPage />} />
                <Route path="/pune-airport-to-mumbai-cab" element={<AirportPage />} />
                <Route path="/pune-airport-to-lonavala-cab" element={<AirportPage />} />
                <Route path="/pune-airport-to-mahabaleshwar-cab" element={<AirportPage />} />
                <Route path="/mumbai-airport-to-pune-cab" element={<AirportPage />} />
                <Route path="/mumbai-airport-to-pune-tempo-traveller" element={<AirportPage />} />

                {/* Catch-all 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
          <BookingPopupModal />
          <FloatingButtons />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;