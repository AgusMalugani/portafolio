import { useState } from "react";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción breve del proyecto 1.",
    repo: "https://github.com/tuusuario/proyecto1",
    deploy: "https://proyecto1.com",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://res.cloudinary.com/dxt4qdckz/image/upload/v1742683464/logo-saphire_hj5yra.png",
  },
  {
    title: "Proyecto 2",
    description: "Descripción breve del proyecto 2.",
    repo: "https://github.com/tuusuario/proyecto2",
    deploy: null,
    technologies: ["React", "NestJs", "TypeScript", "PostgreSQL", "JWT"],
    image: "/images/proyecto2.png",
  },
  {
    title: "Proyecto 2",
    description: "Descripción breve del proyecto 2.",
    repo: "https://github.com/tuusuario/proyecto2",
    deploy: null,
    technologies: ["React", "NestJs", "TypeScript", "PostgreSQL", "JWT"],
    image: "/images/proyecto2.png",
  }
];

function Projects() {
  const [flipped, setFlipped] = useState(Array(projects.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative w-full h-80 [perspective:1000px]"
              onClick={() => handleFlip(index)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped[index] ? "[transform:rotateY(180deg)]" : ""}`}>
                
                {/* Lado Frontal */}
                <div className="absolute inset-0 bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col [backface-visibility:hidden]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-1/2 object-cover transition-transform duration-500"
                  />
                  <div className="flex flex-col justify-between flex-grow p-6">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Lado Trasero */}
                <div className="absolute inset-0 bg-gray-700 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                    📂 Ver Repositorio
                  </a>
                  {project.deploy && (
                    <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                      🚀 Ver Deploy
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
