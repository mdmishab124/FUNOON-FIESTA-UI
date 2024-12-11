import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.scrollY; 
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth', 
      });
      setIsMenuOpen(false); 
    }
  };

  // Modified menus to conditionally show protected routes
  const menus = [
    { name: 'HOME', path: '/' },
    { name: 'RESULT', path: '/result' },
    { name: 'SCORE BOARD', path: '/scoretable' },
    ...(user ? [
      { name: 'ADD RESULT', path: '/addresult' },
      { name: 'CART', path: '/cart' }
    ] : [])
  ];

  const handleAuthAction = () => {
    if (user) {
      logout();
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

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
          md:pl-10  md:static fixed 
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
            <Link
              to={menu.path}
              className="text-black dark:text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              {menu.name}
            </Link>
          </li>
        ))}

        {/* Login/Logout Button for Mobile */}
        <li className="md:hidden ml-5 my-6">
          <button
            onClick={handleAuthAction}
            className="flex items-center space-x-2 text-black dark:text-white"
          >
            {user ? <LogOut className="mr-2" /> : <LogIn className="mr-2" />}
            {user ? 'Logout' : 'Login'}
          </button>
        </li>

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

      {/* Desktop Auth and Dark Mode Actions */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Login/Logout Button */}
        <button
          onClick={handleAuthAction}
          className="
            flex items-center 
            p-2 rounded-full 
            hover:bg-gray-200 dark:hover:bg-gray-700 
            transition-colors
            text-black dark:text-white
          "
        >
          {user ? <LogOut className="mr-2" /> : <LogIn className="mr-2" />}
          {user ? '' : ''}
        </button>

        {/* Dark Mode Toggle */}
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