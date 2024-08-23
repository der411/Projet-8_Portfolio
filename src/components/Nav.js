import { useState } from 'react';

function Nav() {

  // Etat pour gérer l'ouverture et la fermeture du menu hamburger
  const [isOpen, setIsOpen] = useState(false);

  // Etat pour gérer le lien actif
  const [activeLink, setActiveLink] = useState('#home');

  // Fonction pour ouvrir et fermer le menu hamburger
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fonction pour définir le lien actif
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  // Fonction pour gérer le clic sur un lien de navigation
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

  // Liens de navigation
  const navLinks = [
    { href: '#home', label: 'Accueil' },
    { href: '#projects', label: 'Travaux' },
    { href: '#competences', label: 'Compétences' },
    { href: '#formations', label: 'Formations' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 pl-5 pr-5">
      <nav className="max-w-1440px mx-auto flex justify-between items-center bg-nav dark:bg-border-card m-0 p-5">
        <div className="flex items-center">
        <img
          src="/assets/auteur.webp"
          alt="Auteur du portfolio"
          className="w-14 h-14 rounded-full object-cover"
        />
        <h1 className="w-10 text-sm md:text-lg ml-2">
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
