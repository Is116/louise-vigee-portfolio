import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Header = () => {
  const links = [
    { text: 'Arts', url: '/arts' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 md:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <a href="/home" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap">Louise Vigée</span>
          </a>
          <div className="flex items-center md:order-2">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } justify-between items-center w-full md:flex md:w-auto md:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium md:flex-row md:space-x-12 md:space-y-0  md:mt-0">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 md:bg-transparent md:hover:bg-gray-100"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;



