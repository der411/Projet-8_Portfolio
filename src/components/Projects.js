import { useState } from 'react';
import ModalCard from './ModalCard';
import projectsData from '../data/projectsData.json';

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <section className="text-white">
        <h2 id="projects" className="text-black dark:text-white text-2xl m-5">
          Mes travaux
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 mb-20">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-custom-gray shadow-md p-5 rounded cursor-pointer relative overflow-hidden bg-cover bg-center min-h-[300px] transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundImage: `url(${project.images[0]})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover',
              }}
              onClick={() => openModal(project)}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-all duration-300 hover:bg-opacity-60"></div>
              <h3 className="absolute bottom-0 left-0 right-0 text-white font-bold z-10 bg-black bg-opacity-20 px-2 py-1">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ModalCard
          project={selectedProject}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
}

export default Projects;
