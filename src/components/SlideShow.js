import { useState } from 'react';

function Slideshow({ pictures }) {

  // Etat pour gérer l'index de la photo actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à la photo suivante
  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  }

  // Fonction pour passer à la photo précédente
  function prevSlide() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  }

  return (
    <div className="relative flex items-center justify-center w-full mb-0">
      {pictures.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-2 md:left-1 transform -translate-y-1/2 text-black dark:text-white bg-transparent border-none p-2 cursor-pointer lg:text-5xl md:text-4xl sm:text-3xl text-xl" aria-label="Passez à la photo précédente"
            onClick={prevSlide}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="absolute top-1/2 right-2 md:right-1 transform -translate-y-1/2 text-black dark:text-white bg-transparent border-none p-2 cursor-pointer lg:text-5xl md:text-4xl sm:text-3xl text-xl" aria-label="Passez à la photo suivante"
            onClick={nextSlide}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="absolute bottom-[-30px] text-black dark:text-white hidden lg:block">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        loading="lazy"
        className="max-w-3xs min-h-[300px] object-contain rounded-lg block lg:max-w-xs md:max-w-2xs md:min-h-[100px] sm:max-w-xs xs:min-h-[100px] xl:max-w-md xl:min-h-[300px]"
      />
    </div>
  );
}

export default Slideshow;
