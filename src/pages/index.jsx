import React from 'react';

import About from '../components/About';
import Contact from '../components/Contact';
import Head from '../components/Head';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <>
      <Head />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
