import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center">
      <i
        className={`fa-solid ${isDarkMode ? 'fa-toggle-on' : 'fa-toggle-off'} text-2xl cursor-pointer`}
        onClick={toggleDarkMode}
      ></i>
    </div>
  );
};

export default DarkModeToggle;
