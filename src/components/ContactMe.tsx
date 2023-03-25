import React from 'react';

import config from '../config/index.json';

const ContactMe = () => {
  return (
    <section className={`bg-background pt-8`} id="contactme">
      <div className="px-2 pt-2 md:pb-4 mx-auto m-8">
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          Contact
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
      </div>
      <div className="flex justify-center px-8 md:px-0">
        <img
          src={config.company.lucas}
          alt="Lucas Perez"
          className="h-auto max-w-full  rounded-full"
        />
      </div>
      <div className="flex justify-center gap-2 mr-4 ml-4 px-8 md:px-0">
        <div>
          <div className="text-border">
            <strong>Lucas Perez</strong>
          </div>
          <div>
            <a
              href="mailto:lucas.alejandro.perez@gmail.com?subject=I would like to hire you!"
              className="text-primary"
            >
              lucas.alejandro.perez@gmail.com
            </a>
          </div>
          <div>38 years</div>
          <div className="flex items-center gap-4 mt-3 mb-3">
            <span className="flex items-center">
              <img
                className="h-8 mr-2"
                src={config.company.argentineflag}
                alt="argentine"
              />{' '}
              Argentinian
            </span>
            <span className="flex items-center ml-4">
              <img
                className="h-8 mr-2"
                src={config.company.italyflag}
                alt="italy"
              />{' '}
              Italian Citizen
            </span>
          </div>
          <p>{`I'm a proactive person passionate about software development, strong team player.`}</p>
          <p>{`I have more than 10 years experience as a software developer in different technologies. `}</p>
          <p>{`Currently immersed into web development with React. I'm also passionate of cryptocurrencies and blockchain.`}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
