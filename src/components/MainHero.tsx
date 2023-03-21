import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
          <span className={`block text-primary xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        {/* <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"> */}
        <p className="text-gray-500">
          +3 years in <strong>React, Javascript, Typescript, Redux.</strong>
          <br />
          Sass, Styled Components, Material UI, Tailwind.
          <br />
          Experience in Git, GitHub, GitLab, GitFlow.
          <br />
          Jest, React testing library.
          <br />
          Knowledge of sockets with Socket.io.
          <br />
          Develop using Scrum and Kanban (Scrum Master certified).
          <br />
          +10 years experience in C#, ASP.NET, WinForms, API Rest, SQL Server,
          EF.
          <br />
          +1 year in Blockchain World, Solidity Smart Contracts, EthersJs,
          Hardhat.
        </p>
        {/* </p> */}
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              target="_blank"
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
              rel="noreferrer"
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
