import React from 'react';

import HtmlLogo from './SVG/HtmlLogo';
import CssLogo from './SVG/CssLogo';
import JavascriptLogo from './SVG/JavascriptLogo';
import JqueryLogo from './SVG/JqueryLogo';
import ReactLogo from './SVG/ReactLogo';
import FirebaseLogo from './SVG/FirebaseLogo';

import HeadshotGif from '../../static/images/phil-gradient-photo.gif';

import {
  about,
  aboutInfo,
  visualHeading,
  headshotContainer,
  button,
  skills,
  skillsBox,
  skill,
  html,
  css,
  javascript,
  jquery,
  react,
  firebase
} from './About.module.scss';

const About = () => {
  return (
    <section className={`grid-wrapper ${about}`}>
      <div className={headshotContainer}>
        <img
          src={HeadshotGif}
          alt="Headshot of Philip. They have short curly brown hair, blue framed glasses, and they are wearing a black and purple plaid flannel. They look very sofisticated."
        />
      </div>
      <div className={aboutInfo}>
        <h2>About me</h2>
        <p className={`${visualHeading} visual-heading`}>Hey, I'm Philip!</p>
        <p>
          Oh my goodness, hello! I am a Front-End developer based in Toronto, Canada. I love long
          walks on the beach, writing clean code, and pushing my skills to the limit. My interests
          include joining an exciting team of passionate people, personal growth, and making silly
          faces.
        </p>
        <p>
          I used to coordinate public events in this city. Some people might be nervous to leave the
          exciting on-the-job learning and fulfilling teamwork dynamic behind. Personally, I'm
          excited to join the boring, simple, and rarely-evolving world of tech.
        </p>
        <p>
          Other than coding, I love complimenting my Animal Crossing villagers, baking cookies, and
          making people laugh.
        </p>
        <a
          href="philip-turkiewicz-resume-2022.pdf"
          target="_blank"
          rel="noopener"
          className={`${button} button`}
        >
          View Résumé
        </a>
      </div>
      <h3 className={`skills ${skills}`}>Skills</h3>
      <ul className={skillsBox}>
        <li className={`${skill} ${html}`}>
          <HtmlLogo />
          <p>HTML 5</p>
        </li>
        <li className={`${skill} ${css}`}>
          <CssLogo />
          <p>CSS 3</p>
        </li>
        <li className={`${skill} ${javascript}`}>
          <JavascriptLogo />
          <p>JavaScript</p>
        </li>
        <li className={`${skill} ${jquery}`}>
          <JqueryLogo />
          <p>jQuery</p>
        </li>
        <li className={`${skill} ${react}`}>
          <ReactLogo />
          <p>React</p>
        </li>
        <li className={`${skill} ${firebase}`}>
          <FirebaseLogo />
          <p>Firebase</p>
        </li>
      </ul>
    </section>
  );
};

export default About;
