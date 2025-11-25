import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DogCard from '../components/DogCard';
import ContactForm from '../components/ContactForm';
import { dogs } from '../data/dogs';
import { Heart, Home, User } from 'lucide-react';

const HomePage = () => {
  return (
    <div id='home' className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Navbar />

      {/* Hero*/}
      <section className="bg-[#f0fdf4] py-20 px-6 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto z-10 relative">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Dale un Hogar <br />
            <span className="text-gray-800">a un Amigo Fiel</span>
          </h1>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Cada perro merece una segunda oportunidad. Ayúdanos a 
            encontrar familias amorosas para nuestros amigos de cuatro patas.
          </p>
          
          <div className="flex justify-center gap-4 mb-16">
            {/* Buttons */}
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold 
                               hover:bg-green-700 transition transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg 
                               flex items-center gap-2">
              <Heart size={20} /> Quiero Adoptar
            </button>
        
            <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-lg font-semibold 
                               hover:bg-gray-50 transition transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg 
                               flex items-center gap-2">
              <User size={20} /> Cómo Ayudar
            </button>
          </div>
        </div>

        {/* Floating Cards */}

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-green-100 flex flex-col items-center">
                <div className="bg-green-50 p-3 rounded-full mb-4">
                    <Home className="text-green-600" size={32} />
                </div>
                <span className="text-4xl font-bold text-green-600 mb-1">5</span>
                <h3 className="font-bold text-gray-700">Perros Buscando Hogar</h3>
                <p className="text-gray-400 text-sm mt-1">Esperando por una familia que los ame</p>
            </div>

            {/* 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-green-100 flex flex-col items-center">
                <div className="bg-green-50 p-3 rounded-full mb-4">
                    <Heart className="text-green-600" size={32} />
                </div>
                <span className="text-4xl font-bold text-green-600 mb-1">2</span>
                <h3 className="font-bold text-gray-700">Perros Adoptados</h3>
                <p className="text-gray-400 text-sm mt-1">Historias de éxito y amor</p>
            </div>
        </div>
      </section>

      {/* Dogs Grid */}
      <section id="dogsgrid" className="py-20 px-6 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Conoce a Nuestros Amigos</h2>
          <p className="text-gray-500">Estos adorables perros están esperando conocerte</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dogs.map((dog) => (
            <DogCard key={dog.id} dog={dog} />
          ))}
        </div>
        
        <div className="text-center mt-12">
            <button className="text-gray-600 border border-gray-300 px-6 py-2 rounded-full 
                               hover:bg-gray-50 transition transform hover:scale-105 hover:-translate-y-1 hover:shadow-md 
                               text-sm font-medium">
                Ver Todos los Perros
            </button>
        </div>
      </section>

      {/* Contacto */}
      
      <ContactForm />     
      <Footer />
    </div>
  );
};

export default HomePage;