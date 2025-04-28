import { useState } from "react";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción breve del proyecto 1.",
    link: "https://github.com/tuusuario/proyecto1",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Proyecto 2",
    description: "Descripción breve del proyecto 2.",
    link: "https://github.com/tuusuario/proyecto2",
    technologies: ["React", "NestJs", "TypeScript","PostegreSQL","JWT"]
  }
];

function Projects() {
  const [selectedTechnologies, setSelectedTechnologies] = useState(null);
  const [isOpen,setIsOpen]=useState(false);

  const handleShowTechnologies = (technologies) => {
    setIsOpen(!isOpen)
    setSelectedTechnologies(technologies);
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ver Proyecto
              </a>
              <button
                onClick={() => handleShowTechnologies(project.technologies)}
                className="text-blue-500 hover:underline ml-4"
              >
                Ver Tecnologías
              </button>
            </div>
          ))}

        </div>

        {isOpen && (
  <div className="mt-8 p-4 border rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-2">Tecnologías Utilizadas:</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {selectedTechnologies.slice(0, 6).map((tech, index) => (
        <div key={index} className="text-center">
          {tech}
        </div>
      ))}
      
    </div>
  </div>
)}
      </div>
    </section>
  );
}

export default Projects;