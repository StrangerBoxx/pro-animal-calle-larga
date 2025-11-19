
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importamos todas las páginas
import HomePage from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Home*/}
        <Route path="/pro-animal-calle-larga" element={<HomePage />} />

        {/* Rutas a editar */}
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;