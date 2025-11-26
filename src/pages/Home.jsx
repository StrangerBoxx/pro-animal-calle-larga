import Navbar from '../components/Navbar';
import VideoGallery from '../components/VideoGallery';
import HeroSection from '../components/Hero';
import AnimalesGrid from '../components/AnimalesGrid';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div id='home' className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Navbar />

      <VideoGallery />

      <HeroSection />

      <AnimalesGrid />
      
      <ContactForm />     

      <Footer />
    </div>
  );
};

export default HomePage;