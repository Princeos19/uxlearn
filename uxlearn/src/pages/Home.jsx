import React from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import LogosStrip from "../components/landing/LogosStrip";
import CoursesSection from "../components/landing/CoursesSection";
import WhySection from "../components/landing/WhySection";
import StatsSection from "../components/landing/StatsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import CTABanner from "../components/landing/CTABanner";

const Home = () => {
  return (
    <div className="bg-[#0A0A0A] text-[#F0EFE9] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogosStrip />
      <CoursesSection />
      <WhySection />
      <StatsSection />
      <TestimonialsSection />
      <CTABanner />
    </div>
  );
};

export default Home;
