import { useState } from 'react';

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
    { href: '#projects', label: 'Réalisations' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 pl-5 pr-5">
      <h1 className="sr-only">Navigation principale</h1> {/* Titre de niveau 1 caché visuellement */}
      <nav className="max-w-1440px mx-auto flex justify-end items-center bg-nav dark:bg-footer-dark m-0 p-5 md:justify-end">
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
    </div>
  );
}

export default Nav;