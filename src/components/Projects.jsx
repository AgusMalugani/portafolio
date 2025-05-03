import { useState } from "react";

const projects = [
  {
    title: "Saphiresouvenirs",
    description: "E-commerce moderno donde los usuarios pueden explorar, filtrar y seleccionar productos, completar sus datos y realizar compras de forma sencilla. Al finalizar la compra, se envía una confirmación por email y también existe la opción de recibir un aviso por WhatsApp.",
    repoBack: "https://github.com/AgusMalugani/SaphireSouvenirs-Back",
    repoFront: "https://github.com/AgusMalugani/SaphireSouvernis-Front",
    linkVideo: "https://proyecto1.com",
    technologies: ["React", "NestJs", "TypeScript","PostgreSQL","JWT"],
    image: "https://res.cloudinary.com/dxt4qdckz/image/upload/v1742683464/logo-saphire_hj5yra.png",
  },
  {
    title: "The Three Broomsticks",
    description: "API para bar temático Harry Potter: Una plataforma donde los usuarios pueden realizar reservas para comer en el local o hacer pedidos para llevar. Incluye opciones de pago con efectivo, PayPal o tarjeta.",
    repoBack: "https://github.com/Yan5030/PFHENRY-BACK",
    repoFront: null,
    linkVideo: null,
    technologies: [ "NestJs", "TypeScript", "PostgreSQL", "JWT"],
    image: "https://res.cloudinary.com/dxt4qdckz/image/upload/f_auto,q_auto/jjdncy7rprzkjm6qz1gm",
  },
  {
    title: "HogarExpert",
    description: "Plataforma que conecta a usuarios con proveedores de servicios para el hogar. Los proveedores ofrecen una variedad de servicios, y los clientes pueden contratar a aquellos de su zona. Los usuarios pueden enviar un mensaje detallando lo que necesitan, recibir un presupuesto y, si están conformes, aceptarlo. Al finalizar el trabajo, el usuario podrá cerrar la orden y dejar un comentario sobre el proveedor, que se mostrará en su perfil",
    repoBack: "https://github.com/AgusMalugani/HogarExpertBack",
    repoFront: "https://github.com/AgusMalugani/HogarExpertFront",
    linkVideo: null,
    technologies: [ "Java", "SpringBoot", "MySQL", "JWT","React"],
    image: "https://res.cloudinary.com/dxt4qdckz/image/upload/f_auto,q_auto/jecttwxvq1fml7h4xw2x",
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
                <div className="transition-colors duration-300 transform hover:scale-105 absolute inset-0 rounded-2xl shadow-xl overflow-hidden flex flex-col border border-blue-300 hover:border-green-400 [backface-visibility:hidden]">
  {/* Contenedor de imagen con altura fija */}
  <div className="w-full h-48 overflow-hidden rounded-t-2xl bg-gray-100">
    <img
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      className="w-full h-full object-cover object-center"
    />
  </div>
  
  {/* Contenido de la tarjeta */}
  <div className="flex flex-col justify-between flex-grow p-6">
    <div>
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-400 text-sm mt-2 line-clamp-3">{project.description}</p>
    </div>
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
                  <h3 className="text-lg font-semibold text-green">{project.title}</h3>
                  {project.repoBack && ( <a href={project.repoBack} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                     Repositorio-BackEnd
                  </a>)}
                  {project.repoFront && ( <a href={project.repoFront} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                     Repositorio-FrontEnd
                  </a>)}
                  {project.linkVideo && (
                    <a href={project.linkVideo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                       Video
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
