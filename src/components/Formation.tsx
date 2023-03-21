import React from 'react';

import config from '../config/index.json';

const Formation = () => {
  const { formation } = config;

  return (
    <section id="formation">
      <div className="relative max-w-xs overflow-hidden min-w-full  pt-4 pb-12 text-primary bg-cover bg-[50%] bg-no-repeat">
        <img src={formation.img} alt="background" className="min-w-full" />
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
          <h1
            className={`w-full my-2 text-5xl font-bold leading-tight text-center text-border`}
          >
            Formation
          </h1>
          <div className={`w-full mb-4`}>
            <div
              className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
            ></div>
          </div>

          <div
            className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
          >
            <div
              className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10`}
            >
              <div
                className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
              >
                <div className={`w-full p-8 text-3xl font-bold text-center`}>
                  Self-taught person
                </div>
                <div
                  className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}
                ></div>
                <ul className={`w-full text-center text-base font-bold`}>
                  <li className={`border-b py-4`}>
                    System Analyst - ORT Institute (2007 - 2011)
                  </li>
                  <li className={`border-b py-4`}>
                    <a
                      href="https://www.scrumalliance.org/community/profile/lperez5"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary"
                    >
                      Certified Scrum Master - ScrumAlliance
                    </a>
                  </li>
                  <li className={`border-b py-4`}>
                    <a
                      href="https://www.scrumalliance.org/community/profile/lperez5"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary"
                    >
                      Certified Scrum Professional - ScrumAlliance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;
