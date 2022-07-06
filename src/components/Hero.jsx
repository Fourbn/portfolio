import React from 'react';

import ScrollIcon from './SVG/ScrollIcon';

import {
  hero,
  subheading,
  surheading,
  developer,
  debug,
  debutante,
  skipToContent
} from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={hero}>
      <p className={`${subheading} subheading`}>Philip Turkiewicz is...</p>
      <h1>CodeTurkie</h1>
      <p className={`${surheading} surheading`}>
        <span className={developer}>Developer.</span> <span className={debug}>Debugger.</span>{' '}
        <span className={debutante}>Debutante.</span>
      </p>
      <div className={skipToContent}>
        <ScrollIcon />
      </div>
    </section>
  );
};

export default Hero;
