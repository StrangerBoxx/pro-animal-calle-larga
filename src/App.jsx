
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importamos todas las páginas
import HomePage from './pages/Home';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';

function App() {
  return (
    <BrowserRouter basename="/pro-animal-calle-larga">
      <Routes>
        {/* Ruta Home */}
        <Route path="/" element={<HomePage />} />

        {/* Rutas disponibles */}
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;