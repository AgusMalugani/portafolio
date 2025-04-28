import React from 'react';
import { FaHtml5, FaJs, FaNodeJs, FaReact, FaJava } from 'react-icons/fa';
import { SiTypescript, SiSpringboot, SiNestjs, SiPostgresql, SiMysql, SiExpress } from 'react-icons/si';
import { IoLogoGithub } from 'react-icons/io';  // Para GitFlow
import logoJWT from "../assets/jwt-3.svg"

function Technologies() {
  return (
    <section id="technologies" className="py-16 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Tecnologías que Manejo</h2>
        
        {/* Contenedor de íconos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* HTML */}
          <div className="text-center text-gray-600 dark:text-gray-300">
            <FaHtml5 className="text-5xl mx-auto mb-4 text-orange-500" />
            <p>HTML</p>
          </div>


          {/* JavaScript */}
          <div className="text-center text-gray-600 dark:text-gray-300">
            <FaJs className="text-5xl mx-auto mb-4 text-yellow-500" />
            <p>JavaScript</p>
          </div>

          {/* TypeScript */}
          <div className="text-center text-gray-600 dark:text-gray-300">
            <SiTypescript className="text-5xl mx-auto mb-4 text-blue-600" />
            <p>TypeScript</p>
          </div>

          {/* Node.js */}
          <div className="text-center text-gray-600 dark:text-gray-300">
            <FaNodeJs className="text-5xl mx-auto mb-4 text-green-500" />
            <p>Node.js</p>
          </div>

          {/* React */}
          <div className="text-center text-gray-600 dark:text-gray-300">
            <FaReact className="text-5xl mx-auto mb-4 text-blue-400" />
            <p>React</p>
          </div>

          {/* Java */}
          <div className="text-center text-gray-600 dark:text-gray-300">
            <FaJava className="text-5xl mx-auto mb-4 text-red-500" />
            <p>Java</p>
          </div>

          {/* Spring Boot */}
          <div className="text-center text-gray-600 dark:text-gray-300">
            <SiSpringboot className="text-5xl mx-auto mb-4 text-orange-600" />
            <p>Spring Boot</p>
          </div>

          {/* NestJS */}
          <div className="text-center text-gray-600 dark:text-gray-300">
            <SiNestjs className="text-5xl mx-auto mb-4 text-red-500" />
            <p>NestJS</p>
          </div>

          {/* PostgreSQL */}
          <div className="text-center text-gray-600 dark:text-gray-300">
            <SiPostgresql className="text-5xl mx-auto mb-4 text-blue-700" />
            <p>PostgreSQL</p>
          </div>

          {/* MySQL */}
          <div className="text-center text-gray-600 dark:text-gray-300">
            <SiMysql className="text-5xl mx-auto mb-4 text-blue-600" />
            <p>MySQL</p>
          </div>

          {/* Express */}
          <div className="text-center text-gray-600 dark:text-gray-300">
            <SiExpress className="text-5xl mx-auto mb-4 text-gray-600" />
            <p>Express</p>
          </div>

          {/* GitFlow (GitHub) */}
          <div className="text-center text-gray-600 dark:text-gray-300">
            <IoLogoGithub className="text-5xl mx-auto mb-4 text-black" />
            <p>GitFlow</p>
          </div>

          <div className="text-center text-gray-600 dark:text-gray-300">
            <img src={logoJWT} alt="JWT" className="h-16  text-5xl mx-auto mb-4 text-black" />
            <p>JWT</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
