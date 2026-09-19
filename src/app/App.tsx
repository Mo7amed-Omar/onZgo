import React from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import { Navbar } from '../components/layout/Navbar/Navbar';
import { Footer } from '../components/layout/Footer/Footer';
import { Hero } from '../components/sections/Hero/Hero';
import { QuickCards } from '../components/sections/QuickCards/QuickCards';
import { SignatureMenu } from '../components/sections/SignatureMenu/SignatureMenu';
import { Delivery } from '../components/sections/Delivery/Delivery';
import { BrandStory } from '../components/sections/BrandStory/BrandStory';
import { Atmosphere } from '../components/sections/Atmosphere/Atmosphere';
import { VisitUs } from '../components/sections/VisitUs/VisitUs';

export const AppContent: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-onzgo-cream-100 text-onzgo-espresso flex flex-col selection:bg-onzgo-orange selection:text-white font-sans">
      {/* Costa-Style Header & Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1 w-full" id="main-content">
        {/* 1. Hero Promo Carousel */}
        <Hero />

        {/* 2. 4 Quick Action Feature Cards (قهوتنا، المنيو، التراس، الفروع) */}
        <QuickCards />

        {/* 3. The Menu (المنيو) with Category Tabs & EGP Prices */}
        <SignatureMenu />

        {/* 4. Delivery Partners & Online Ordering */}
        <Delivery />

        {/* 5. Our Story & Quality Promise */}
        <BrandStory />

        {/* 6. Atmosphere & Outdoor Terrace */}
        <Atmosphere />

        {/* 7. Store Locator & Working Hours */}
        <VisitUs />
      </main>

      {/* Corporate Multi-Column Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
