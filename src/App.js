import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Global Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollAndImageEffects from './components/ScrollAndImageEffects';
import BookingPopupModal from './components/BookingPopupModal';
import FloatingButtons from './components/FloatingButtons';

// All Page Components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import OurFleet from './pages/OurFleet';
import Packages from './pages/Packages';
import OurNetwork from './pages/OurNetwork';
import Booking from './pages/Booking';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Careers from './pages/Careers';
import Reviews from './pages/Reviews';
import NotFound from './pages/NotFound';

// Vehicle-Specific Pages
import ForceUrbania from './pages/ForceUrbania';
import BusRental from './pages/BusRental';
import SeaterCars from './pages/SeaterCars';
import Thirteen14Seater from './pages/Thirteen14Seater';
import Seventeen20Seater from './pages/Seventeen20Seater';
import TempoTraveller from './pages/TempoTraveller';

// SEO Landing Pages
import RoutePage from './pages/RoutePage';
import AirportPage from './pages/AirportPage';
import LocationPage from './pages/LocationPage';
import CorporatePage from './pages/CorporatePage';
import OutOfCityRentals from './pages/OutOfCityRentals';

// NEW: Combined City & Capacity Fleet Page for targeted local searches
import CityFleetPage from './pages/CityFleetPage';
import TourPackagePage from './pages/TourPackagePage';
import KeywordLandingPage, { KEYWORD_PAGES_DATA } from './pages/KeywordLandingPage';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <ScrollAndImageEffects />
        
        <div className="d-flex flex-column min-vh-100" style={{ overflowX: 'hidden', maxWidth: '100%' }}>
          <Navbar />
          
          <main className="flex-grow-1" style={{ overflowX: 'hidden', maxWidth: '100%' }}>
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
              <Route path="/pune-to-konkan-darshan-bus-hire" element={<Navigate to="/pune-to-konkan-darshan" replace />} />

              {/* All 92 Dedicated Footer Keyword Vehicle & Route Landing Pages */}
              {Object.keys(KEYWORD_PAGES_DATA).map((slug) => (
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