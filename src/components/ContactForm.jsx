import React from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  // Estado para manejar los datos (opcional por ahora, pero útil para el futuro)
  {/* const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  }); */}

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por escribirnos! Te responderemos pronto.');
  };

  return (
    <section id='contact' className="bg-green-700 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Encabezado: Texto blanco sobre fondo verde (Estilo de tu imagen) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-green-50 text-lg max-w-2xl mx-auto">
            ¿Tienes dudas sobre el proceso de adopción o quieres ayudar? 
            Llena el formulario y nos pondremos en contacto contigo.
          </p>
        </div>

        {/* Tarjeta del Formulario */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden md:flex">
          
          {/* Lado Izquierdo: Información (Visible en PC) */}
          <div className="bg-[#0f5132] text-white p-8 md:w-1/3 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>
            <p className="text-green-100 mb-4 text-sm leading-relaxed">
              La adopción no solo cambia la vida de un perro, también transforma la tuya.
            </p>
            <div className="mt-auto space-y-4">
               <div className="flex items-center gap-3">
                 <Mail size={18} className="text-green-300"/>
                 <span className="text-sm">contacto@callelarga.cl</span>
               </div>
            </div>
          </div>

          {/* Lado Derecho: El Formulario */}
          <div className="p-8 md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Campo Nombre */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nombre Completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
              </div>

              {/* Campo Email */}
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    placeholder="tucorreo@ejemplo.com"
                    required
                  />
                </div>
              </div>

              {/* Campo Mensaje */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Mensaje
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare size={18} className="text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    required
                  ></textarea>
                </div>
              </div>

              {/* Botón: Estilo exacto de tu imagen */}
              <button
                type="submit"
                className="w-full bg-[#0f5132] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-900 hover:shadow-xl transition transform hover:-translate-y-1 flex justify-center items-center gap-2"
              >
                <Send size={18} />
                Enviar Mensaje
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;