import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Lock, Mail } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Heart className="fill-green-600 text-green-600" size={48} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Agrupación Pro Animal
          </h1>
          <p className="text-gray-600">Panel de Administración</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Iniciar Sesión</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="admin@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              Ingresar
            </button>

          </form>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Solo para personal autorizado
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;