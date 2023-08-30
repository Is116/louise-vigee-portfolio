import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Header = () => {
  const links = [
    { text: 'Home', url: '/' },
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
      <nav className="px-4 md:px-8 py-3">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center order-2 md:order-1">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Louise Vigée</span>
          </a>
          <p className='text-sm lg:text-md order-1 md:order-1'>
            open for any offers and <br /> colaberations
          </p>
          <div className="flex items-center order-3 md:order-3">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-full md:hidden ring-[#878788] hover:bg-gray-100 ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-[#878788]" />
            </button>
          </div>
          <div
              className={`
                hidden justify-between items-center w-full md:flex md:w-auto md:order-2 border-2 border-[#878788] rounded-full
                `}
              id="mobile-menu-2"
            >
            <ul className="flex flex-col font-medium text-lg md:flex-row gap-2 m-1">
              {links.map((link, index) => (
                <li key={index}>
                  <button
                    href={link.url}
                    className="block py-1 px-12 w-full text-black rounded-full bg-primary-700 md:bg-transparent md:hover:bg-[#ff6a69] focus:bg-[#ff6a69]"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } justify-between items-center w-full  sm:w-auto sm:order-1 md:hidden`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium text-lg md:flex-row gap-2 m-1">
              {links.map((link, index) => (
                <li key={index}>
                  <button
                    href={link.url}
                    className="block py-1 px-12 w-full text-black rounded-full bg-primary-700 md:bg-transparent md:hover:bg-[#ff6a69] focus:bg-[#ff6a69]"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
      </nav>
    </header>
  );
};

export default Header;



