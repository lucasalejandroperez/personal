import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={mainHero.img}
        alt="background hero"
      />
      <div className="absolute inset-0 object-cover flex justify-center items-center">
        <img
          className="w-[35%] h-[60%] hero-icon-effect"
          src={mainHero.iconImage}
          alt="icon background hero"
        />
      </div>
    </div>
  );
};

export default MainHeroImage;
