import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="min-h-screen flex flex-col gap-4 my-7 lg:my-16 px-4 lg:px-12">
        <div className="flex flex-row justify-center px-4">
          <div className="border-2 border-[#7b7b7b] py-1 px-4 rounded-md font-medium text-xl">
            Hi! I'd Like
          </div>
        </div>
        <p className="text-center text-8xl md:text-9xl xl:text-10.5rem font-extrabold uppercase">
          To Tell You <br /> About Myself
        </p>
        <div className="flex text-center justify-center sm:-m-16 sm:-z-10">
          <img
            className="rounded-2xl sm:rounded-full w-full sm:w-80 h-80 object-cover"
            src="images/profile.jpg"
            alt="Louise Vigée"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-24 mt-8 sm:mt-32">
          <p className="w-full md:w-80 text-base md:text-lg uppercase">
            Élisabeth Louise Vigée Le Brun, also known as Madame Le Brun and Louise Élisabeth Vigée Le Brun, was a French painter who specialized in portraiture.
          </p>
          <p className="w-full md:w-80 text-base md:text-lg uppercase">
            Élisabeth Louise Vigée Le Brun, also known as Madame Le Brun and Louise Élisabeth Vigée Le Brun, was a French painter who specialized in portraiture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
