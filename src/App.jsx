import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import AdminPage from './pages/Admin';

function App() {
  return (
    <BrowserRouter basename="/pro-animal-calle-larga">
      <Routes>
        {/* Ruta Home */}
        <Route path="/" element={<HomePage />} />

        {/* Rutas disponibles */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;