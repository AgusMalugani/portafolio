import React from 'react';

function Experience() {
  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Experiencia de Estudio y Certificados</h2>
        
        {/* Experiencia de Estudio */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Experiencia de Estudio</h3>
          <ul className="space-y-4"> 
            
          <li className="p-4 rounded-lg shadow-2xl transition transform hover:scale-105">
          <h4 className="text-xl font-semibold text-blue-500">Ingles Conversacional</h4>
              <p className="text-gray-600 dark:text-gray-300">Open English (2025 - Actualmente cursando)</p>
             </li>

          <li className="p-4 rounded-lg shadow-2xl transition transform hover:scale-105">
          <h4 className="text-xl font-semibold text-blue-500">Desarrollo Web Fullstack</h4>
              <p className="text-gray-600 dark:text-gray-300">SoyHenry (2024 - 2025)</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Descripción breve materias principales, proyectos, etc.</p>
              <a href="https://res.cloudinary.com/dxt4qdckz/image/upload/v1745846837/Certificados/gal6zr3qqyecqtj8drmy.png" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">Ver Certificado</a>
            </li>

            <li className="p-4 rounded-lg shadow-2xl transition transform hover:scale-105">
          <h4 className="text-xl font-semibold text-blue-500">Desarrollo Web Fullstack</h4>
              <p className="text-gray-600 dark:text-gray-300">Egg Corporation (2023)</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Descripción materias principales, proyectos, etc.</p>
              <a href="https://res.cloudinary.com/dxt4qdckz/image/upload/v1745846672/Certificados/zy5sj9lpdq9rnnsej9tg.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">Ver Certificado</a>
            </li>

            {/* Agrega más elementos de tu experiencia educativa aquí */}
          </ul>
        </div>
        
        {/* Cursos y Certificados */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Cursos y Certificados</h3>
          <ul className="space-y-4">

          <li className="p-4 rounded-lg shadow-2xl transition transform hover:scale-105">
              <h4 className="text-xl font-semibold text-blue-500"> Ethereum Developer Pack </h4>
              <p className="text-gray-600 dark:text-gray-300">Curso en linea EthKipu (2025 - Actualmente cursando)</p>
            </li>
        
          <li className="p-4 rounded-lg shadow-2xl transition transform hover:scale-105">
              <h4 className="text-xl font-semibold text-blue-500">Creacion APIs con Spring Boot</h4>
              <p className="text-gray-600 dark:text-gray-300">Curso en linea TodoCode (2024)</p>
              <a href="https://res.cloudinary.com/dxt4qdckz/image/upload/v1745846872/Certificados/asjbhk8akjkgty9d2lbp.png" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">Ver Certificado</a>
            </li>
           
            <li className="p-4 rounded-lg shadow-2xl transition transform hover:scale-105">
              <h4 className="text-xl font-semibold text-blue-500">Introduccion a la Programacion</h4>
              <p className="text-gray-600 dark:text-gray-300">Curso en línea Egg Corporation (2022)</p>
              <a href="https://res.cloudinary.com/dxt4qdckz/image/upload/v1745846904/Certificados/cu8f5py5ucud6b3zsice.png" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">Ver Certificado</a>
            </li>
          
            {/* Agrega más cursos y certificados aquí */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
