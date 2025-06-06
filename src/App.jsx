import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';
import RequestPage from './Pages/RequestPage';
import SocialMediaMarketing from './ServicesPage/SocialMediaMarketing';
import WebDevelopment from './ServicesPage/WebDevelopment';
import BrandStrategy from './ServicesPage/BrandStrategy';
import ContentMarketing from './ServicesPage/ContentMarketing';
import Training from './ServicesPage/Training';
import CommunityManagement from './ServicesPage/CommunityManagement';


const App = () => {
  return (
    <section>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/socialmediamarketing" element={<SocialMediaMarketing />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/brandstrategy" element={<BrandStrategy />} />
          <Route path="/contentmarketing" element={<ContentMarketing />} />
          <Route path="/training" element={<Training />} />
          <Route path="/communitymanagement" element={<CommunityManagement />} />
        </Routes>
      </BrowserRouter>

    </section>
  )
}

export default App