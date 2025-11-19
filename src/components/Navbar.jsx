import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom'; //Link

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-green-700 font-bold text-xl">
          <Heart className="fill-green-600 text-green-600" size={24} />
          <span>Agrupación Pro Animal Calle Larga</span>
        </Link>

        {/* Tabs */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li>
            <Link to="/" className="hover:text-green-600 cursor-pointer transition-colors">Inicio</Link>
          </li>
          <li>
            <Link to="/page2" className="hover:text-green-600 cursor-pointer transition-colors">Page 2</Link>
          </li>
          <li>
            <Link to="/page3" className="hover:text-green-600 cursor-pointer transition-colors">Page 3</Link>
          </li>
          <li>
            <Link to="/page4" className="hover:text-green-600 cursor-pointer transition-colors">Page 4</Link>
          </li>
          <li>
            <Link to="/page5" className="hover:text-green-600 cursor-pointer transition-colors">Page 5</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;