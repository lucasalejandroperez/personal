import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import ContactMe from '../components/ContactMe';
import Formation from '../components/Formation';
import Header from '../components/Header';
import JobExperience from '../components/JobExperience';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Portfolio from '../components/Portfolio';
import { ScrollToTopButton } from '../components/ScrollToTopButton';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Portfolio />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <JobExperience />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Formation />
      </LazyShow>
      <LazyShow>
        <ContactMe />
      </LazyShow>
      <LazyShow>
        <About />
      </LazyShow>
      <Analytics />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
