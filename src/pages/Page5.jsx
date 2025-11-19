import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Page5 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-green-700 bg-white p-10 rounded-xl shadow-lg border border-green-100">
          Hola soy page 5 "EDITAR"
        </h1>
      </main>

      <Footer />
    </div>
  );
};

export default Page5;