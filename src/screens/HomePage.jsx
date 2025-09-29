import Navbar from '../components/Navbar';
import Hero from '../components/Partners';
import AboutUs from '../components/AboutUs';
import AboutUsAno from '../components/AboutUsAno'; // Import the alternate component
import OurValues from '../components/OurValues';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import NavbarAno from '../components/NavbarAno';
import Hero1 from '../components/Hero1';
import HeroAno from '../components/HeroAno';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      {/* <NavbarAno /> */}
      <Hero1 />
      {/* <HeroAno /> */}
      <Hero />

      {/* AboutUs visible on lg and above */}
      <div className="hidden lg:block">
        <AboutUs />
      </div>

      {/* AboutUsAno visible below lg */}
      <div className="block lg:hidden">
        <AboutUsAno />
      </div>

      <Projects />
      <Testimonials />
      <OurValues />
      <Footer />
    </div>
  );
};

export default HomePage;
