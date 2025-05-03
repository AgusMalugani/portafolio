import { FaHtml5, FaJs, FaNodeJs, FaReact, FaJava } from "react-icons/fa"
import { SiTypescript, SiSpringboot, SiNestjs, SiPostgresql, SiMysql, SiExpress } from "react-icons/si"
import { IoLogoGithub } from "react-icons/io" // Para GitFlow
import logoJWT from "../assets/jwt-3.svg"
function Technologies() {
  return (
    <section id="technologies" className="py-16 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Tecnologías que Manejo</h2>

        {/* Contenedor de íconos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* HTML */}
          <div className="text-center text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center">
            <div className="h-16 flex items-center justify-center">
              <FaHtml5 className="text-5xl text-orange-500" />
            </div>
            <p className="mt-2">HTML</p>
          </div>

          {/* JavaScript */}
          <div className="text-center text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center">
            <div className="h-16 flex items-center justify-center">
              <FaJs className="text-5xl text-yellow-500" />
            </div>
            <p className="mt-2">JavaScript</p>
          </div>

          {/* TypeScript */}
          <div className="text-center text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center">
            <div className="h-16 flex items-center justify-center">
              <SiTypescript className="text-5xl text-blue-600" />
            </div>
            <p className="mt-2">TypeScript</p>
          </div>

          {/* Node.js */}
          <div className="text-center text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center">
            <div className="h-16 flex items-center justify-center">
              <FaNodeJs className="text-5xl text-green-500" />
            </div>
            <p className="mt-2">Node.js</p>
          </div>

          {/* React */}
          <div className="text-center text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center">
            <div className="h-16 flex items-center justify-center">
              <FaReact className="text-5xl text-blue-400" />
            </div>
            <p className="mt-2">React</p>
          </div>

          {/* Java */}
          <div className="text-center text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center">
            <div className="h-16 flex items-center justify-center">
              <FaJava className="text-5xl text-red-500" />
            </div>
            <p className="mt-2">Java</p>
          </div>

          {/* Spring Boot */}
          <div className="text-center text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center">
            <div className="h-16 flex items-center justify-center">
              <SiSpringboot className="text-5xl text-green-600" />
            </div>
            <p className="mt-2">Spring Boot</p>
          </div>

          {/* NestJS */}
          <div className="text-center text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center">
            <div className="h-16 flex items-center justify-center">
              <SiNestjs className="text-5xl text-red-500" />
            </div>
            <p className="mt-2">NestJS</p>
          </div>

          {/* PostgreSQL */}
          <div className="text-center text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center">
            <div className="h-16 flex items-center justify-center">
              <SiPostgresql className="text-5xl text-blue-700" />
            </div>
            <p className="mt-2">PostgreSQL</p>
          </div>

          {/* MySQL */}
          <div className="text-center text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center">
            <div className="h-16 flex items-center justify-center">
              <SiMysql className="text-5xl text-blue-600" />
            </div>
            <p className="mt-2">MySQL</p>
          </div>

          {/* Express */}
          <div className="text-center text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center">
            <div className="h-16 flex items-center justify-center">
              <SiExpress className="text-5xl text-gray-600 dark:text-gray-400" />
            </div>
            <p className="mt-2">Express</p>
          </div>

          {/* GitFlow (GitHub) */}
          <div className="text-center text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center">
            <div className="h-16 flex items-center justify-center">
              <IoLogoGithub className="text-5xl text-gray-800 dark:text-white" />
            </div>
            <p className="mt-2">GitFlow</p>
          </div>

          {/* JWT */}
          <div className="text-center text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center">
            <div className="h-16 flex items-center justify-center">
              <img src={logoJWT} alt="JWT" className="h-12 w-auto" />
            </div>
            <p className="mt-2">JWT</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies

