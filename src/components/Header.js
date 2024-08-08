import React from 'react';
import FireflyParticles from './FireflyParticles';
import DarkModeToggle from './DarkModeToggle'; // Assurez-vous que le chemin est correct

function Header() {
  return (
    <header className="bg-border-card dark:bg-custom-gray text-white p-10 m-5 pb-40 shadow-lg flex flex-col items-center border border-border-card relative rounded-b-lg">
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
        <p className="mb-5 text-xl text-center leading-6">
          Bonjour ! Je suis Vincent Vaitilingom, <br/>développeur web débutant.
        </p>
      </div>
      <div className="flex justify-between w-full px-1 relative z-10 mt-20 sm:px-5">
        <a href="https://github.com/der411" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-icon hover:text-white" aria-label="Voir mon GitHub">
        <i className="fa-brands fa-github text-8xl cursor-pointer"></i>
        </a>
        <a href="/documents/Vincent_Vaitilingom_CV Développeur Web.pdf" download aria-label="Télécharger mon CV au format PDF" className="flex justify-center text-icon-git w-24 h-24 border border-icon-git rounded-full flex-col items-center gap-1 text-base hover:text-white">
        <i className="fa-solid fa-cloud-arrow-down text-2xl"></i>
        <span>Mon CV</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
