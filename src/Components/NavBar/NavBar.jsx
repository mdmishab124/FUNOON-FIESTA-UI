import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  // Handle dark mode and theme persistence
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Scroll to Section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.scrollY; // Get section position relative to viewport
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth', // Smooth scrolling
      });
      setIsMenuOpen(false); // Close menu for mobile view
    }
  };
  

  // Navigation menu items
  const menus = [
    { name: 'HOME', path: '/' },
    { name: 'SCORE BOARD', path: '/scoreboard' },
    { name: 'RESULT', path: '/search' },
    { name: 'CONTACT', id: 'contact' } // Update to use `id` for the Contact section
  ];

  return (
    <nav className="flex items-center justify-between pt-8 px-6">
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden cursor-pointer z-20"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <img src="../src/assets/icon-close.svg" alt="Close menu" />
        ) : (
          <img src="../src/assets/icon-hamburger.svg" alt="Open menu" />
        )}
      </button>
      
      {/* Logo */}
      <Link to="/" className="w-10 ml-7">
        <img 
          src={darkMode 
            ? "../src/assets/img/lightlogo.png" 
            : "../src/assets/img/darklogo.png" 
          } 
          alt="logo" 
          className="w-full" 
        />
      </Link>

      {/* Menu Items */}
      <ul
        className={`
          backdrop-blur-md 
          md:pl-10 pr-28 md:static fixed 
          duration-500 ease-linear top-0 
          md:h-auto h-screen z-10 
          ${!isMenuOpen ? "right-[-100%]" : "right-0"}
        `}
      >
        {menus.map((menu, index) => (
          <li
            key={index}
            className="
              md:inline-block md:ml-10 ml-5 
              md:my-0 my-6 
              border-b-2 border-transparent 
              hover:border-black dark:hover:border-white
              duration-300
            "
          >
            {menu.id ? (
              <span
                onClick={() => scrollToSection(menu.id)}
                className="text-black dark:text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3"
              >
                {menu.name}
              </span>
            ) : (
              <Link
                to={menu.path}
                className="text-black dark:text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {menu.name}
              </Link>
            )}
          </li>
        ))}

        {/* Dark Mode Toggle for Mobile */}
        <li className="md:hidden ml-5 my-6">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center space-x-2"
          >
            {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-800" />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </li>
      </ul>

      {/* Dark Mode Toggle for Desktop */}
      <div className="hidden md:block">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-800" />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
