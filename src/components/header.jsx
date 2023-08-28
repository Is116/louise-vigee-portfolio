import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
  const links = [
    { text: 'Features', url: '#' },
    { text: 'Marketplace', url: '#' },
    { text: 'Company', url: '#' },
    { text: 'Log in', url: '#' }
  ];

  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex md:hidden">
            <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
                <span className="sr-only">Open main menu</span>
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </button>

        </div>
        <div className="hidden md:flex md:gap-x-12">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="hidden md:flex lg:flex-1 md:justify-end">
          <a
            href={links[3].url}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {links[3].text} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
