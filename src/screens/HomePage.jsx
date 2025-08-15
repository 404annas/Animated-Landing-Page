import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Partners';
import AboutUs from '../components/AboutUs';
import OurValues from '../components/OurValues';
import Services from '../components/Services';
import Footer from '../components/Footer';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <OurValues />
      <Footer />
    </div>
  );
};

export default HomePage;
