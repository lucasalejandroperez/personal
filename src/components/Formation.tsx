import React from 'react';

const Formation = () => {
  return (
    <section className={`bg-background py-8`} id="formation">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
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

        <div className="py-6 flex flex-col justify-center sm:py-12">
          <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div
                className={`flex flex-col sm:flex-row justify-center sm:my-4`}
              >
                <div
                  className={`flex flex-col w-6/6 mx-auto bg-background lg:w-3/3 lg:mx-0 rounded-lg sm:-mt-6 shadow-lg z-10`}
                >
                  <div
                    className={`flex-1 bg-background rounded-t rounded-b-none md:px-12 overflow-hidden shadow`}
                  >
                    <div
                      className={`w-full p-8 text-3xl font-bold text-center`}
                    >
                      Self-taught person
                    </div>
                    <div
                      className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}
                    ></div>
                    <ul className={`w-full text-center text-base font-bold`}>
                      <li
                        className={`border-b py-4 text-primary text-sm md:text-lg`}
                      >
                        System Analyst - ORT Institute (2007 - 2011)
                      </li>
                      <li className={`border-b py-4`}>
                        <a
                          href="https://www.scrumalliance.org/community/profile/lperez5"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary text-sm md:text-lg"
                        >
                          Certified Scrum Master - ScrumAlliance
                        </a>
                      </li>
                      <li className={`border-b py-4`}>
                        <a
                          href="https://www.scrumalliance.org/community/profile/lperez5"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary text-sm md:text-lg"
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
        </div>
      </div>
    </section>
  );
};

export default Formation;
