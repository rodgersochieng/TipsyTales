
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Drink Generator', path: '/drink-generator' },
    { name: 'Who Pays?', path: '/who-pays' },
    { name: 'Drunk Jenga', path: '/drunk-jenga' },
    { name: 'Never Have I Ever', path: '/never-have-i-ever' },
    { name: 'Truth or Drink', path: '/truth-or-drink' },
    // { name: 'Hangover Tales', path: '/hangover-tales' },
  ];

  return (
    <nav className="bg-gradient-to-r from-red-800 to-red-900 p-4 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-white text-4xl font-extrabold tracking-wide hover:text-red-300 transition-all"
          onClick={closeMenu}
        >
          Tipsy Tales
        </NavLink>

        {/* Hamburger Menu Button */}
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-8 h-8 transition-transform duration-300 ${
              isMenuOpen ? 'rotate-90' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex lg:space-x-8 lg:items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block text-white text-lg hover:text-red-300 transition-all ${
                    isActive ? 'font-bold border-b-2 border-red-300' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Dropdown Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 right-0 bg-red-800 p-4 rounded-md shadow-lg z-50"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * navLinks.indexOf(link), duration: 0.3 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block text-white text-lg hover:text-red-300 transition-all ${
                        isActive ? 'font-bold border-b-2 border-red-300' : ''
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
