import Navbar from '../components/Navbar';
import VideoGallery from '../components/VideoGallery';
import HeroSection from '../components/Hero';
import DogsGrid from '../components/DogsGrid';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div id='home' className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Navbar />

      <VideoGallery />

      <HeroSection />

      <DogsGrid />
      
      <ContactForm />     

      <Footer />
    </div>
  );
};

export default HomePage;