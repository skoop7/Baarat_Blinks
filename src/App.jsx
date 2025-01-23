import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./utils/ScrollTop";
import Loader from "./utils/Loader";
import ScrollToTop from "./utils/ScrollToTop";
import HomePage from "./screens/HomePage";
import AboutUsPage from "./screens/AboutUsPage";
import GalleryPage from "./screens/GalleryPage";
import ContactUsPage from "./screens/ContactUsPage";
import ServicePage from "./screens/ServicePage";
import TermsAndConditions from "./screens/TermsandCondition";
import PrivacyPolicy from "./screens/PrivacyPolicy";

// Lazy load your pages
// const HomePage = lazy(() => import("./screens/HomePage"));
// const AboutUsPage = lazy(() => import("./screens/AboutUsPage"));
// const GalleryPage = lazy(() => import("./screens/GalleryPage"));
// const ContactUsPage = lazy(() => import("./screens/ContactUsPage"));
// const ServicePage = lazy(() => import("./screens/ServicePage"));
// const TermsAndConditions = lazy(() => import("./screens/TermsandCondition"));
// const PrivacyPolicy = lazy(() => import("./screens/PrivacyPolicy"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="" element={<HomePage />} />
          <Route path="/terms-condition" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <ScrollTop />
      <Footer />
    </Router>
  );
}

export default App;
