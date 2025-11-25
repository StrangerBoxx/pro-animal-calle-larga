import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. ESTADO: Guardamos cuál es la sección activa actual (por defecto 'home')
  const [activeSection, setActiveSection] = useState('home');

  // 2. EFECTO: "Espía" el scroll para saber dónde estamos
  useEffect(() => {
    const handleScrollSpy = () => {
      // Definimos las secciones que queremos rastrear
      const sections = ['home', 'dogsgrid', 'contact'];
      
      // Ajuste para la altura del navbar (para que detecte un poco antes de llegar)
      const scrollPosition = window.scrollY + 150; 

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          // Si la posición actual está dentro de esta sección...
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // 3. FUNCIÓN DE NAVEGACIÓN (Scroll suave)
  const handleScroll = (sectionId) => {
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Función para devolver las clases del botón según si está activo o no
  const getButtonClass = (sectionName) => {
    const isActive = activeSection === sectionName;
    return `transition-colors font-medium px-3 py-1 rounded-full ${
      isActive 
        ? 'text-green-700 font-bold bg-green-100' // ESTILO ACTIVO: Verde oscuro y negrita
        : 'text-gray-600 hover:text-green-600'   // ESTILO NORMAL: Gris
    }`;
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo(0,0)} 
          className="flex items-center gap-2 text-green-700 font-bold text-xl cursor-pointer"
        >
          <Heart className="fill-green-600 text-green-600" size={24} />
          <span>Agrupación Pro Animal Calle Larga</span>
        </Link>

        {/* MENÚ */}
        <ul className="hidden md:flex gap-4 items-center">
          
          {/* BOTÓN INICIO */}
          <li>
            <button 
              onClick={() => handleScroll('home')} 
              className={getButtonClass('home')}
            >
              Inicio
            </button>
          </li>
          
          {/* BOTÓN ANIMALITOS */}
          <li>
            <button 
              onClick={() => handleScroll('dogsgrid')} 
              className={getButtonClass('dogsgrid')}
            >
              Animalitos
            </button>
          </li>
          
          {/* BOTÓN CÓMO AYUDAR */}
          {/* Este tiene un estilo especial tipo píldora, pero también reacciona si estás ahí */}
          <li>
            <button 
              onClick={() => handleScroll('contact')}
              className={`ml-4 px-5 py-2 rounded-full transition transform hover:scale-105 shadow-md font-bold ${
                activeSection === 'contact'
                  ? 'bg-green-900 text-white ring-2 ring-green-300' // Si estás en contacto: Verde más oscuro y anillo
                  : 'bg-green-600 text-white hover:bg-green-700'     // Normal
              }`}
            >
              Cómo Ayudar
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;