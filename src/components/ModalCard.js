import Modal from 'react-modal';
import Slideshow from './SlideShow';

// Fonction pour afficher les détails d'un projet dans une modale
function ModalCard({ isOpen, onRequestClose, project }) {
  if (!project) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Détails du projet"
      overlayClassName="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50"
      className="relative w-3/4 sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-[90vh] p-0 m-auto rounded-lg"
    >
      <div className="relative">
        <button
          className="absolute top-2.5 right-3.5 text-black dark:text-white text-2xl cursor-pointer"
          aria-label="Fermer la modale"
          onClick={onRequestClose}
        >
          <i className="fa fa-times"></i>
        </button>
        <div className="overflow-auto max-h-[80vh] p-6 sm:p-8 md:p-10 text-black dark:text-white bg-footer dark:bg-custom-gray dark:border dark:border-border-card rounded-lg leading-relaxed custom-scrollbar text-sm">
          <h2 className="mb-4 text-lg text-[19px] md:text-[18px] sm:text-[17px] font-bold">
            {project.title}
          </h2>
          <p className="mb-4 text-[14px] md:text-[16px] sm:text-[15px]">
            {project.description}
          </p>
          <p className="mb-4 text-[14px] md:text-[16px] sm:text-[15px]">
            {project.development}
          </p>
          <h3 className="text-lg font-bold mb-4">Défi et Solution :</h3>
          <p className="mb-4 text-[14px] md:text-[16px] sm:text-[15px]">
            {project.chalenges}
          </p>
          <p className="mb-4 text-[14px] md:text-[16px] sm:text-[15px]">
            {project.solution}
          </p>
          {project.githubLink && (
            <p className="mb-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1"
                aria-label="Voir le dépot GitHub"
              >
                <i className="fa-brands fa-github text-3xl text-black dark:text-white cursor-pointer transition-transform transform hover:scale-110 github-grow"></i>
              </a>
            </p>
          )}
          {project.images && <Slideshow pictures={project.images} />}
        </div>
      </div>
    </Modal>
  );
}

export default ModalCard;
