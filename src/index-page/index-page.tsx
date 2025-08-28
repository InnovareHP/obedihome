// src/components/ObediHomeIndex.tsx
// Usage in Astro:
// ---
// import ObediHomeIndex from "../components/ObediHomeIndex";
// ---
// <ObediHomeIndex client:load />

import AboutUsSection from "../components/index-page/about-us";
import CoreValue from "../components/index-page/core-value";
import Faqs from "../components/index-page/faq";
import Footer from "../components/index-page/footer";
import Header from "../components/index-page/header";
import HeroSection from "../components/index-page/hero-section";
import LifeAtObediSection from "../components/index-page/life-obedi-section";
import MissionVision from "../components/index-page/mission-vision";
import SimpleApproachSection from "../components/index-page/our-approach";
import ServicesSection from "../components/index-page/services-section";

export default function ObediHomeIndex() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <HeroSection />
      <ServicesSection />
      <LifeAtObediSection />
      <SimpleApproachSection />
      <AboutUsSection />
      <MissionVision />
      <CoreValue />
      <Faqs />

      <Footer />
    </div>
  );
}
