import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/contactSection/ContactSection';
import FooterSection from '../components/FooterSection';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import NewsLetterSection from '../components/NewsLetterSection';
import ServicesSection from '../components/services/ServicesSection';
import TeamSection from '../components/team/TeamSection';

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <NewsLetterSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default LandingPage;
