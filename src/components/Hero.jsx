import { Heart, User } from 'lucide-react';

const HeroSection = () => {
    return (
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
        </section>
    );
};

export default HeroSection;