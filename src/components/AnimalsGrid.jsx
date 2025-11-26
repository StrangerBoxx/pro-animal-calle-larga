import { useState, useEffect } from 'react';
// import { dogs } from '../data/dogs';
import { GET } from '../firebase/controller';
import AnimalCard from './AnimalCard';

const AnimalsGrid = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        GET().then((data) => setDogs(data));
    }, []);

    return (
        <section id="dogsgrid" className="py-20 px-6 container mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">Conoce a Nuestros Amigos</h2>
                <p className="text-gray-500">Estos adorables animalitos están esperando conocerte</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dogs.map((dog) => (
                    <AnimalCard key={dog.id} dog={dog} />
                ))}
            </div>
            
            <div className="text-center mt-12">
                <button className="text-gray-600 border border-gray-300 px-6 py-2 rounded-full 
                                hover:bg-gray-50 transition transform hover:scale-105 hover:-translate-y-1 hover:shadow-md 
                                text-sm font-medium">
                Ver Todos
                </button>
            </div>
        </section>
    );
};

export default AnimalsGrid;