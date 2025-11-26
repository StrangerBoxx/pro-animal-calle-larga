import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, PawPrint, LogOut, Plus, Edit2, Trash2, X } from 'lucide-react';

const AdminPage = () => {
  const navigate = useNavigate();
  const [activePanel, setActivePanel] = useState('animals');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  const handleLogout = () => {
    navigate('/login');
  };

  const openModal = (type, item = null) => {
    setModalType(type);
    setEditingItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
    setEditingItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Heart className="fill-green-600 text-green-600" size={28} />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Panel de Administración</h1>
              <p className="text-sm text-gray-500">Agrupación Pro Animal</p>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <LogOut size={18} />
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActivePanel('animals')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
              activePanel === 'animals'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            <PawPrint size={20} />
            Animales
          </button>
          
          <button
            onClick={() => setActivePanel('users')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
              activePanel === 'users'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Users size={20} />
            Usuarios
          </button>
        </div>

        {activePanel === 'animals' && <AnimalsPanel openModal={openModal} />}
        {activePanel === 'users' && <UsersPanel openModal={openModal} />}
      </div>

      {showModal && (
        <Modal
          type={modalType}
          editingItem={editingItem}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

const AnimalsPanel = ({ openModal }) => {
  const dummyAnimals = [
    { id: 1, name: 'Luna', species: 'Perro', age: 2, sex: 'Hembra', status: 'Disponible', size: 'Mediano', neutered: true },
    { id: 2, name: 'Max', species: 'Gato', age: 1, sex: 'Macho', status: 'Adoptado', size: 'Pequeño', neutered: true },
    { id: 3, name: 'Rocky', species: 'Perro', age: 3, sex: 'Macho', status: 'En cuidado médico', size: 'Grande', neutered: false },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gestión de Animales</h2>
        <button
          onClick={() => openModal('animal')}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105"
        >
          <Plus size={18} />
          Agregar Animal
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Nombre</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Especie</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Edad</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Sexo</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Tamaño</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Esterilizado</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dummyAnimals.map((animal) => (
              <tr key={animal.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-800">{animal.name}</td>
                <td className="py-3 px-4 text-gray-600">{animal.species}</td>
                <td className="py-3 px-4 text-gray-600">{animal.age} años</td>
                <td className="py-3 px-4 text-gray-600">{animal.sex}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    animal.status === 'Disponible' ? 'bg-green-100 text-green-700' :
                    animal.status === 'Adoptado' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {animal.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-600">{animal.size}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    animal.neutered ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {animal.neutered ? 'Sí' : 'No'}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal('animal', animal)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const UsersPanel = ({ openModal }) => {
  const dummyUsers = [
    { id: 1, name: 'Juan Pérez', email: 'juan@admin.cl', role: 'Administrador' },
    { id: 2, name: 'María González', email: 'maria@admin.cl', role: 'Editor' },
    { id: 3, name: 'Carlos Rojas', email: 'carlos@admin.cl', role: 'Editor' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gestión de Usuarios</h2>
        <button
          onClick={() => openModal('user')}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105"
        >
          <Plus size={18} />
          Agregar Usuario
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Nombre</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Correo</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Rol</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((user) => (
              <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-800">{user.name}</td>
                <td className="py-3 px-4 text-gray-600">{user.email}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    user.role === 'Administrador' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal('user', user)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Modal = ({ type, editingItem, closeModal }) => {
  const [formData, setFormData] = useState(editingItem || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-6">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800">
            {editingItem ? 'Editar' : 'Agregar'} {type === 'animal' ? 'Animal' : 'Usuario'}
          </h3>
          <button
            onClick={closeModal}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {type === 'animal' ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Especie</label>
                  <select
                    name="species"
                    value={formData.species || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">Seleccionar</option>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                    <option value="Conejo">Conejo</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Edad</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Sexo</label>
                  <select
                    name="sex"
                    value={formData.sex || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Seleccionar</option>
                    <option value="Macho">Macho</option>
                    <option value="Hembra">Hembra</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Tamaño</label>
                  <select
                    name="size"
                    value={formData.size || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Seleccionar</option>
                    <option value="Pequeño">Pequeño</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Grande">Grande</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Estado</label>
                  <select
                    name="status"
                    value={formData.status || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Seleccionar</option>
                    <option value="Disponible">Disponible</option>
                    <option value="Adoptado">Adoptado</option>
                    <option value="En cuidado médico">En cuidado médico</option>
                    <option value="En hogar temporal">En hogar temporal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Esterilizado</label>
                  <select
                    name="neutered"
                    value={formData.neutered || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Seleccionar</option>
                    <option value="true">Sí</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Descripción</label>
                <textarea
                  name="description"
                  value={formData.description || ''}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Imagen</label>
                <input
                  type="file"
                  name="image"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Notas Médicas</label>
                <textarea
                  name="medical_notes"
                  value={formData.medical_notes || ''}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  placeholder="Condiciones especiales, tratamientos, etc."
                ></textarea>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {!editingItem && (
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Rol</label>
                <select
                  name="role"
                  value={formData.role || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Seleccionar</option>
                  <option value="Administrador">Administrador</option>
                  <option value="Editor">Editor</option>
                </select>
              </div>
            </>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              {editingItem ? 'Guardar Cambios' : 'Crear'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;