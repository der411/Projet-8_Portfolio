import React, { useState, useEffect } from 'react';

function DarkModeToggle() {

  // Etat pour gérer le mode sombre
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  // Effet pour activer ou désactiver le mode sombre
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  // Fonction pour activer ou désactiver le mode sombre
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center mt-5">
      <div
        className="relative w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer"
        onClick={toggleDarkMode}
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 ease-in-out transform ${
            isDarkMode ? 'translate-x-8 bg-gray-300' : 'bg-gray-800'
          }`}
        >
          <i
            className={`fa-solid ${
              isDarkMode ? 'fa-moon' : 'fa-sun'
            } text-white text-sm flex items-center justify-center h-full`}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
