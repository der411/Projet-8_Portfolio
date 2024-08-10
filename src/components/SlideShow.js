import { useState } from 'react';

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  }

  function prevSlide() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  }

  return (
    <div className="relative flex items-center justify-center w-full mb-0">
      {pictures.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black dark:text-white bg-transparent border-none p-2 cursor-pointer lg:text-5xl md:text-4xl sm:text-3xl text-xl" aria-label="Passez à la photo précédente"
            onClick={prevSlide}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black dark:text-white bg-transparent border-none p-2 cursor-pointer lg:text-5xl md:text-4xl sm:text-3xl text-xl" aria-label="Passez à la photo suivante"
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
        className="w-3/5 max-h-[250px] object-contain rounded-lg block md:max-h-[200px] sm:max-h-[150px]"
      />
    </div>
  );
}

export default Slideshow;
