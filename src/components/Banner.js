import { useState, useEffect } from 'react';
import FireflyParticles from './FireflyParticles';
import DarkModeToggle from './DarkModeToggle';

function Banner() {

  // État pour savoir si l'écran est un mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Taille d'écran pour mobile
    };

    // Première vérification de la taille de l'écran
    handleResize();

    // Écoute les changements de taille de l'écran
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Fonction pour télécharger le CV
  function handleDownload() {
    const link = document.createElement('a');
    link.href = '/documents/Vincent_Vaitilingom_CV Développeur Web.pdf';
    link.download = 'Vincent_Vaitilingom_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="home"
      className="bg-card text-black p-10 m-5 mt-20 pb-10 shadow-lg flex flex-col items-center relative rounded-xl dark:bg-custom-gray overflow-hidden"
    >
      {!isMobile && <FireflyParticles />}
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
          <linearGradient id="grad1" x1="100%" y1="100%" x2="0%" y2="0%">
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
      <div className="flex flex-col relative mt-20 z-10 2xl:mt-40 typewriter-wrapper">
        <p className="text-center max-w-4xl text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl dark:text-white pb-6 flex items-baseline typewriter">
          Développeur web junior dédié à la création de sites modernes.
        </p>
      </div>

      <div className="flex justify-between w-full px-1 relative z-10 mt-10 sm:px-5">
        <a
          href="https://github.com/der411"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center dark:text-white dark:hover:text-gray-400 text-black hover:text-black hover:text-opacity-60 transition duration-300"
          aria-label="Voir mon GitHub"
        >
          <i className="fa-brands fa-github text-7xl md:text-8xl cursor-pointer"></i>
        </a>
        <button
          onClick={handleDownload}
          aria-label="Télécharger mon CV au format PDF"
          className="flex justify-center text-icon-git w-20 h-20 md:w-28 md:h-28 border hover:border-opacity-60 border-black dark:border-white dark:hover:border-gray-400 rounded-full flex-col items-center gap-1 text-black hover:text-opacity-60 transition duration-300 dark:text-white dark:hover:text-gray-400"
        >
          <i className="fa-solid fa-cloud-arrow-down text-xl md:text-5xl"></i>
          <span className='text-md md:text-lg lg:text-xl'>CV</span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
