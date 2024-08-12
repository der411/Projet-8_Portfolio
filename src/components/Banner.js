import FireflyParticles from './FireflyParticles';
import DarkModeToggle from './DarkModeToggle';

function Banner() {
  return (
    <div
      id="home"
      className="bg-card text-white p-10 m-5 mb-20 mt-20 pb-40 shadow-lg flex flex-col items-center relative rounded-xl dark:bg-custom-gray min-h-screen overflow-hidden"
    >
      <FireflyParticles />
      <div className="absolute top-0 right-2 p-4 z-10">
        <DarkModeToggle />
      </div>
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 dark:opacity-70 hidden md:block"
        enableBackground="new 0 0 2459.5 2079.2"
        viewBox="0 0 2459.5 2079.2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0D0D0D', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1A1A1A', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="m2177.5 1535.7h-830.9c-13.4 0-26.4 4.5-36.9 12.9l-619.2 492.3c-16 12.7-7 38.3 13.5 38.3h1483c146.6 0 278.4-131.6 268.1-289.9-9.4-144.4-132.4-253.6-277.6-253.6"
          fill="url(#grad1)"
          className="text-gray-300"
        />
        <path
          d="m1505.3 1021.8c0-.7-.1-1.4-.2-2.2-4.6-74.2-39.5-146.3-102.9-195.8l-964-766.4c-117.7-92-288-71.3-380.4 46.1-92.4 117.5-71.8 287.2 45.8 379.2l698.9 555.6-698.9 555.6c-117.6 91.9-138.2 261.7-45.8 379.1s262.7 138.1 380.4 46.1l964.1-766.5c63.4-49.5 98.3-121.6 102.9-195.8.1-.7.1-1.4.2-2.2.3-5.5.4-10.9.4-16.4 0-5.4-.2-10.9-.5-16.4"
          fill="url(#grad1)"
          className="text-gray-300"
        />
        <path
          d="m2459.5 1807.4c0 150.1-121.9 271.7-272.5 271.7-150.4 0-272.3-121.7-272.3-271.7s121.9-271.7 272.3-271.7c150.6 0 272.5 121.7 272.5 271.7"
          fill="url(#grad1)"
        />
      </svg>
      <div className="flex flex-col items-center relative z-10">
        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold block pt-10 pb-10 sm:pb-20 sm:pt-20">
          Vincent Vaïtilingom
        </h1>
        <p className="text-left max-w-4xl">
          <span className="text-md sm:text-lg md:text-xl block pb-4">
            Développeur web aimant la création de sites web modernes et interactifs.
          </span>
          <span className="text-md sm:text-lg md:text-xl block pb-4">
            Depuis plus d'un an, j'ai appris à utiliser HTML, CSS, JavaScript, ainsi que des outils comme React, Express, MongoDB et d'autres.
          </span>
          <span className="text-md sm:text-lg md:text-xl block pb-4">
            J'aime travailler sur des projets aussi bien en front-end qu'en back-end, en utilisant des méthodes de travail Agile comme Scrum et Kanban.
          </span>
        </p>
      </div>
      <div className="flex justify-between w-full px-1 relative z-10 mt-20 sm:px-5">
        <a
          href="https://github.com/der411"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center dark:text-git-dark dark:hover:text-white text-git hover:text-white"
          aria-label="Voir mon GitHub"
        >
          <i className="fa-brands fa-github text-8xl cursor-pointer"></i>
        </a>
        <a
          href="/documents/Vincent_Vaitilingom_CV Développeur Web.pdf"
          download
          aria-label="Télécharger mon CV au format PDF"
          className="flex justify-center text-icon-git w-24 h-24 border border-icon-git rounded-full flex-col items-center gap-1 text-git hover:text-white dark:text-git-dark dark:hover:text-white"
        >
          <i className="fa-solid fa-cloud-arrow-down text-2xl"></i>
          <span>Mon CV</span>
        </a>
      </div>
    </div>
  );
}

export default Banner;
