import { useState} from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Para el menú hamburguesa

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alternar el estado del menú hamburguesa
  };

  return (
    <aside className={`fixed top-0 left-0 h-full w-96   shadow-md flex flex-col justify-between py-10 px-4 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div>
        {/* Imagen de perfil */}
        <div className="flex justify-center mb-6">
          <img
            src="tu-imagen-url-aqui.jpg" // Cambia esta URL con tu imagen
            alt="Tu Foto"
            className="w-27 h-27 object-cover border-4 border-blue-500" 
          />
        </div>

        <h1 className="text-2xl font-bold mb-10 text-center ">TuNombre</h1>
        <nav className="flex flex-col gap-6 ">
          <a href="#about" className="hover:text-blue-500">Sobre mí</a>
          <a href="#projects" className="hover:text-blue-500">Proyectos</a>
          <a href="#contact" className="hover:text-blue-500">Contacto</a>
        </nav>
      </div>
     

      {/* Botón del menú hamburguesa */}
      <button className="md:hidden absolute top-5 left-5 text-gray-600 dark:text-white" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </aside>
  );
}

export default Sidebar;
