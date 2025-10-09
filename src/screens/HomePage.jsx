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
import Header from '../components/Header';
import Banner from '../components/Banner';
import Text from '../components/Text';
import QuerySection from '../components/QuerySection';
import HeroNew from '../components/HeroNew';

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      {/* <NavbarAno /> */}
      {/* <Hero1 /> */}
      <HeroNew />
      {/* <HeroAno /> */}
      {/* <Hero /> */}
      <Banner />

      <Text />

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
      <QuerySection />
      <OurValues />
      <Footer />
    </div>
  );
};

export default HomePage;
