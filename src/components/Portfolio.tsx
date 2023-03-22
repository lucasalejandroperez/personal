import React from 'react';

import { FaReact } from 'react-icons/fa';
import {
  SiSolidity,
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
  SiMaterialdesign,
  SiSass,
} from 'react-icons/si';
import Tilt from 'react-parallax-tilt';

import config from '../config/index.json';
import Divider from './Divider';

const Portfolio = () => {
  const { about, portfolio } = config;
  const { socialMedia } = about;

  return (
    <section className={`bg-background py-8`} id="portfolio">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          <span className={'text-border'}>Portfolio</span>
        </h1>
        <Divider />
        <div
          className={`flex flex-wrap mb-8 ml-8 mr-8 md:mr-0 md:ml-0 border rounded`}
        >
          <div className={`w-6/6 sm:w-1/2 p-6`}>
            <span className={`text-3xl text-primary font-bold leading-none`}>
              G
            </span>
            <span
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              ame Battle Avax Gods
            </span>
            <div>
              <p className={`text-gray-600 mb-8`}>React application</p>
              <p>
                Avax Gods is a turn-based game, hosted on the Avalanche
                blockchain.
              </p>
              <div className="flex gap-4 mt-4">
                <span className="flex items-center gap-1 text-xs hover:text-primary">
                  <FaReact /> React
                </span>
                <span className="flex items-center gap-1 text-xs hover:text-primary">
                  <SiTailwindcss /> Tailwind
                </span>
                <span className="flex items-center gap-1 text-xs hover:text-primary">
                  <SiSolidity /> Solidity
                </span>
              </div>
              <div className="flex mt-4">
                <span className="mr-6">
                  <a
                    aria-label="github"
                    href={socialMedia.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="fill-current text-gray-800 dark:text-white hover:text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </span>
                <span>
                  <a
                    href="https://avaxgods-lap.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary"
                  >
                    [Go to site]
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-6 opacity-100 hover:opacity-80`}>
            <Tilt>
              <img className="h-6/6" src={portfolio.avax_img} alt="AVAX Gods" />
            </Tilt>
          </div>
        </div>
        <div
          className={`flex flex-wrap ml-8 flex-col-reverse sm:flex-row mb-8 border rounded`}
        >
          <div className={`w-full sm:w-1/2 p-6  opacity-100 hover:opacity-80`}>
            <Tilt>
              <img
                className="h-6/6 flex"
                src={portfolio.gamercards_img}
                alt="Gamer Cards"
              />
            </Tilt>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <div className={`align-middle`}>
              <span className={`text-3xl text-primary font-bold leading-none`}>
                G
              </span>
              <span
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                amer Cards
              </span>
              <div>
                <p className={`text-gray-600 mb-8`}>React application</p>
                <p>
                  NFT Marketplace, where you can buy cards of your favorite
                  players.
                </p>
                <div className="flex gap-4 mt-4">
                  <span className="flex items-center gap-1 text-xs hover:text-primary">
                    <FaReact /> React
                  </span>
                  <span className="flex items-center gap-1 text-xs hover:text-primary">
                    <SiTypescript /> Typescript
                  </span>
                  <span className="flex items-center gap-1 text-xs hover:text-primary">
                    <SiStyledcomponents /> Styled Components
                  </span>
                  <span className="flex items-center gap-1 text-xs hover:text-primary">
                    <SiSolidity /> Solidity
                  </span>
                </div>
                <div className="flex mt-4">
                  <span>
                    <a
                      href="https://gamer-cards.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      [Go to site]
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-wrap mb-8 ml-8 mr-8 md:mr-0 md:ml-0 border rounded`}
        >
          <div className={`w-6/6 sm:w-1/2 p-6`}>
            <span className={`text-3xl text-primary font-bold leading-none`}>
              C
            </span>
            <span
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              rypto Market
            </span>
            <div>
              <p className={`text-gray-600 mb-8`}>React application</p>
              <p>
                Crypto Market is a react application where you can see how is
                the market right now.
              </p>
              <div className="flex gap-4 mt-4">
                <span className="flex items-center gap-1 text-xs hover:text-primary">
                  <FaReact /> React
                </span>
                <span className="flex items-center gap-1 text-xs hover:text-primary">
                  <SiTypescript /> Typescript
                </span>
                <span className="flex items-center gap-1 text-xs hover:text-primary">
                  <SiMaterialdesign /> Material
                </span>
              </div>
              <div className="flex mt-4">
                <span>
                  <a
                    href="https://cryptomarket-lap.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary"
                  >
                    Go to site
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-6 opacity-100 hover:opacity-80`}>
            <Tilt>
              <img
                className="h-6/6"
                src={portfolio.cryptomarket_img}
                alt="Crypto Market"
              />
            </Tilt>
          </div>
        </div>
        <div
          className={`flex flex-wrap ml-8 mr-8 flex-col-reverse sm:flex-row md:mr-0 md:ml-0 border rounded`}
        >
          <div className={`w-full sm:w-1/2 p-6 opacity-100 hover:opacity-80`}>
            <Tilt>
              <img
                className="h-6/6"
                src={portfolio.retirementplan_img}
                alt="Retirement Plan"
              />
            </Tilt>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <div className={``}>
              <span className={`text-3xl text-primary font-bold leading-none`}>
                R
              </span>
              <span
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                etirment Plan
              </span>
              <div>
                <p className={`text-gray-600 mb-8`}>React application</p>
                <p>
                  Retirement plan is a dApp on the Ethereum blockchain where you
                  can save your money until an specific date.
                </p>
                <p>Status: In progress</p>
                <div className="flex gap-4 mt-4">
                  <span className="flex items-center gap-1 text-xs hover:text-primary">
                    <FaReact /> React
                  </span>
                  <span className="flex items-center gap-1 text-xs hover:text-primary">
                    <SiTypescript /> Typescript
                  </span>
                  <span className="flex items-center gap-1 text-xs hover:text-primary">
                    <SiSass /> Sass
                  </span>
                  <span className="flex items-center gap-1 text-xs hover:text-primary">
                    <SiSolidity /> Solidity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
