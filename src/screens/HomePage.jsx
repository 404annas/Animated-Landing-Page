import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Partners';
import AboutUs from '../components/AboutUs';
import OurValues from '../components/OurValues';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Testimonials />
      <OurValues />
      <Footer />
    </div>
  );
};

export default HomePage;
