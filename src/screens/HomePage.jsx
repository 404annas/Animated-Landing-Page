import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Partners';
import AboutUs from '../components/AboutUs';
import OurValues from '../components/OurValues';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Projects />
      <Testimonials />
      <OurValues />
      <Footer />
    </div>
  );
};

export default HomePage;
