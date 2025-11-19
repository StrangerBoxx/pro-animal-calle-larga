import React from 'react';

const DogCard = ({ dog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden 
                    hover:shadow-xl transition-all duration-300 ease-in-out 
                    transform hover:-translate-y-2 border border-gray-100"> {/* Animación simple*/}
      <div className="h-64 w-full overflow-hidden">
        <img 
          src={dog.image} 
          alt={dog.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{dog.name}</h3>
        <p className="text-gray-500 text-sm mb-3">{dog.description}</p>
      </div>
    </div>
  );
};

export default DogCard;