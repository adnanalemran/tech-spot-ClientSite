import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDarkMode); // Apply 'dark' class for dark mode
    // You can also update other theme-related CSS variables here if needed.
  }, [isDarkMode]);

  return (
    <button
      className={`btn btn-ghost ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
