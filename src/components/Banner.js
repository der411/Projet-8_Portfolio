import FireflyParticles from './FireflyParticles';
import DarkModeToggle from './DarkModeToggle';

function Banner() {
  return (
    <div className="bg-card text-white p-10 m-5 mt-20 pb-40 shadow-lg flex flex-col items-center relative rounded-xl dark:bg-custom-gray">
      <FireflyParticles />
      <div className="absolute top-0 right-2 p-4">
        <DarkModeToggle />
      </div>
      <div className="flex flex-col items-center relative z-10">
        <img 
          src="/assets/auteur.webp" 
          alt="Auteur du portfolio" 
          className="w-24 h-24 rounded-full mb-5 object-cover" 
        />
        <p className="text-left leading-6 max-w-lg">
        <span className="text-2xl font-bold block mb-4">
          Bienvenue sur mon portfolio !
        </span>
        <span className="text-xl block mb-2">
          Je suis Vincent Vaitilingom, un développeur web aimant la création de sites web modernes et interactifs.
        </span>
        <span className="text-xl block mb-2">
          Depuis plus d'un an, j'ai appris à utiliser HTML, CSS, JavaScript, ainsi que des outils comme React, Express, MongoDB et d'autres.
        </span>
        <span className="text-xl block mb-2">
          J'aime travailler sur des projets aussi bien en front-end qu'en back-end, en utilisant des méthodes de travail Agile comme Scrum et Kanban.
        </span>
        </p>

      </div>
      <div className="flex justify-between w-full px-1 relative z-10 mt-20 sm:px-5">
        <a href="https://github.com/der411" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center dark:text-git-dark dark:hover:text-white text-git hover:text-white" aria-label="Voir mon GitHub">
        <i className="fa-brands fa-github text-8xl cursor-pointer"></i>
        </a>
        <a href="/documents/Vincent_Vaitilingom_CV Développeur Web.pdf" download aria-label="Télécharger mon CV au format PDF" className="flex justify-center text-icon-git w-24 h-24 border border-icon-git rounded-full flex-col items-center gap-1 text-git hover:text-white dark:text-git-dark dark:hover:text-white">
        <i className="fa-solid fa-cloud-arrow-down text-2xl"></i>
        <span>Mon CV</span>
        </a>
      </div>
    </div>
  );
}

export default Banner;
