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
            <li className=" p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-500">Licenciatura en Ingeniería de Sistemas</h4>
              <p className="text-gray-600 dark:text-gray-300">Universidad XYZ (2017 - 2022)</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Descripción breve de tu licenciatura, materias principales, proyectos, etc.</p>
            </li>
            {/* Agrega más elementos de tu experiencia educativa aquí */}
          </ul>
        </div>
        
        {/* Cursos y Certificados */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Cursos y Certificados</h3>
          <ul className="space-y-4">
            <li className=" p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-500">Desarrollo Web Full Stack - Henry</h4>
              <p className="text-gray-600 dark:text-gray-300">Curso intensivo online (2024)</p>
              <a href="https://www.certificado-henry.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">Ver Certificado</a>
            </li>
            <li className=" p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-500">JavaScript y Node.js - FreeCodeCamp</h4>
              <p className="text-gray-600 dark:text-gray-300">Curso en línea (2023)</p>
              <a href="https://www.certificado-freecodecamp.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">Ver Certificado</a>
            </li>
            {/* Agrega más cursos y certificados aquí */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
