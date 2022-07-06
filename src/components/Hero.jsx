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
    <section className={`grid-wrapper ${hero}`}>
      <p className={`${surheading} surheading`}>Philip Turkiewicz is...</p>
      <h1>CodeTurkie</h1>
      <p className={`${subheading} subheading`}>
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
