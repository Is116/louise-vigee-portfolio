import React from 'react';
import { faBehance, faDribbble, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socialMediaLinks = [
  {
    icon: faDribbble,
    link: 'https://www.dribbble.com',
  },
  {
    icon: faBehance,
    link: 'https://www.behance.net',
  },
  {
    icon: faLinkedin,
    link: 'https://www.linkedin.com',
  },
  {
    icon: faInstagram,
    link: 'https://www.instagram.com',
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-[#ebebeb] flex flex-col gap-8 justify-center items-center pt-16 pb-12 overflow-hidden">
      <div className="uppercase font-extrabold text-7xl lg:text-9xl overflow-clip whitespace-nowrap">
        Let's Talk Let's Talk Let's Talk
      </div>
      <div className="px-8 lg:px-20 py-8 lg:py-10 flex flex-col xl:flex-row gap-8 items-center justify-between w-full">
        <p className="text-xl lg:text-md ">
          open for any offers and <br /> collaborations
        </p>
        <div className="flex flex-row gap-12">
          {socialMediaLinks.map((socialMedia, index) => (
            <a
              key={index}
              href={socialMedia.link}
              className="text-[#ebebeb] hover:text-[#yourhovercolor] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={socialMedia.icon} size="2x" />
            </a>
          ))}
        </div>
        <button className="bg-[#ebebeb] text-black py-2 px-20 lg:px-36 rounded-full font-bold text-xl lg:text-3xl">
          Send Me Email
        </button>
      </div>
      <div className="font-medium text-base">
        Made With &#129293; By Isuru Pathirathna
      </div>
    </footer>
  );
};

export default Footer;
