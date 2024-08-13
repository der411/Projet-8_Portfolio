import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  const handleAnchorClick = (event, href) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    const navHeight = document.querySelector('nav').offsetHeight;
    const targetPosition = targetElement.offsetTop - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });

    handleSetActiveLink(href);
  };

  const navLinks = [
    { href: '#home', label: 'Accueil' },
    { href: '#projects', label: 'Travaux' },
    { href: '#competences', label: 'Compétences' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 pl-5 pr-5">
      <nav className="max-w-1440px mx-auto flex justify-between items-center bg-nav dark:bg-footer-dark m-0 p-5">
        <div className="flex items-center">
        <img
          src="/assets/auteur.webp"
          alt="Auteur du portfolio"
          className="w-14 h-14 rounded-full object-cover"
        />
        <h1 className="text-md md:text-xl ml-2 font-bold block">
          Vincent Vaïtilingom
        </h1>
        </div>
        <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
        <ul
          className={`list-none flex gap-5 md:flex ${
            isOpen ? 'flex z-50' : 'hidden'
          } md:static absolute top-14 right-5 bg-white dark:bg-icon md:bg-transparent dark:md:bg-transparent flex-col md:flex-row w-48 md:w-auto shadow-md md:shadow-none`}
        >
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`text-center p-2 md:p-0 ${
                activeLink === link.href
                  ? 'border-b-2 border-black dark:border-white'
                  : ''
              }`}
            >
              <a
                href={link.href}
                className="text-black dark:text-white"
                onClick={(event) => handleAnchorClick(event, link.href)}
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
