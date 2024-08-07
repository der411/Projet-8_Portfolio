import React, { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#about');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="flex justify-end items-center m-2 p-3 md:justify-end">
      <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div>
      <ul className={`list-none flex gap-5 md:flex ${isOpen ? 'flex' : 'hidden'} md:static absolute top-14 right-0 bg-gray-800 md:bg-transparent flex-col md:flex-row w-48 md:w-auto shadow-md md:shadow-none`}>
        <li className={`text-center p-2 md:p-0 ${activeLink === '#about' ? 'underline' : ''}`}>
          <a
            href="#about"
            className="text-black dark:text-white"
            onClick={() => handleSetActiveLink('#about')}
          >
            À propos
          </a>
        </li>
        <li className={`text-center p-2 md:p-0 ${activeLink === '#projects' ? 'underline' : ''}`}>
          <a
            href="#projects"
            className="text-black dark:text-white"
            onClick={() => handleSetActiveLink('#projects')}
          >
            Réalisations
          </a>
        </li>
        <li className={`text-center p-2 md:p-0 ${activeLink === '#services' ? 'underline' : ''}`}>
          <a
            href="#services"
            className="text-black dark:text-white"
            onClick={() => handleSetActiveLink('#services')}
          >
            Services
          </a>
        </li>
        <li className={`text-center p-2 md:p-0 ${activeLink === '#contact' ? 'underline' : ''}`}>
          <a
            href="#contact"
            className="text-black dark:text-white"
            onClick={() => handleSetActiveLink('#contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
