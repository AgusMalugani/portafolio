import { useState } from "react";
import imgPerfil from "../assets/foto-perfil2.png";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Para el menú hamburguesa

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alternar el estado del menú hamburguesa
  };

  return (
    <aside className={`fixed top-0 left-0 h-full w-96 shadow-md flex flex-col justify-between py-10 px-4 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div>
        {/* Imagen de perfil */}
        <div className="flex justify-center mb-6">
          <img
            src={imgPerfil}
            alt="agusMalugani"
            className="w-27 h-27 object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold mb-10 text-center">Agustin Malugani</h1>

        <nav className="flex flex-col gap-6 items-center text-center">
          <a href="#about" className="hover:text-blue-500"> Sobre mí</a>
          <a href="#projects" className="hover:text-blue-500">Proyectos</a>
          <a href="#contact" className="hover:text-blue-500">Contacto</a>
        </nav>
      </div>

      {/* Redes sociales */}
      <div className="flex justify-center gap-6 mt-8">
        <a href="https://www.linkedin.com/in/agustinmalugani/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition transform hover:scale-130">
          {/* Ícono de LinkedIn */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.865-3.063-1.866 0-2.153 1.458-2.153 2.964v5.703h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.841-1.562 3.041 0 3.602 2.002 3.602 4.604v5.591z"/>
          </svg>
        </a>
        <a href="https://github.com/AgusMalugani" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition transform hover:scale-130">
          {/* Ícono de GitHub */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 3.495.998.107-.776.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.553 3.295-1.23 3.295-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.216.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      {/* Botón del menú hamburguesa */}
      <button className="md:hidden absolute top-5 left-5 text-gray-600 dark:text-white" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </aside>
  );
}

export default Sidebar;
