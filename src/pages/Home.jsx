import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DogCard from '../components/DogCard';
import ContactForm from '../components/ContactForm';
import { dogs } from '../data/dogs';
import { Heart, Home, User } from 'lucide-react';
import VideoGallery from '../components/VideoGallery';
import HeroSection from '../components/Hero';
import DogsGrid from '../components/DogsGrid';

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