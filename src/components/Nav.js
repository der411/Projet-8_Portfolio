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

  const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#projects', label: 'Réalisations' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header>
      <h1 className="sr-only">Navigation principale</h1> {/* Titre de niveau 1 caché visuellement */}
      <nav className="flex justify-end items-center m-2 p-3 md:justify-end">
        <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
        <ul className={`list-none flex gap-5 md:flex ${isOpen ? 'flex z-50' : 'hidden'} md:static absolute top-14 right-5 bg-white dark:bg-icon md:bg-transparent dark:md:bg-transparent flex-col md:flex-row w-48 md:w-auto shadow-md md:shadow-none`}>
          {navLinks.map((link) => (
            <li key={link.href} className={`text-center p-2 md:p-0 ${activeLink === link.href ? 'border-b-2 border-black dark:border-white' : ''}`}>
              <a
                href={link.href}
                className="text-black dark:text-white"
                onClick={() => handleSetActiveLink(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;