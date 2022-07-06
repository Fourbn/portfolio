import React from 'react';
import { FaHeart, FaPalette, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import TurkeyLogo from './SVG/TurkeyLogo';

import {
  footer,
  turkeyLogo,
  creditIcon,
  heart,
  palette,
  footerCredits,
  footerNav,
  socialLink,
  socialIcon,
  github,
  linkedin,
  twitter,
  aaron
} from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={`grid-wrapper ${footer}`}>
      <div className={turkeyLogo}>
        <TurkeyLogo />
      </div>
      <div className={footerCredits}>
        <p>
          Coded with <FaHeart className={`${creditIcon} ${heart}`} /> by Philip Turkiewicz
        </p>
        <p>
          Designed with <FaPalette className={`${creditIcon} ${palette}`} /> by{' '}
          <a href="https://aaronvince.com/" target="_blank" rel="noopener noreferrer" className={aaron}>
            Aaron Vince
          </a>
        </p>
      </div>
      <nav className={footerNav}>
        <ul>
          <li>
            <a
              href="https://github.com/Fourbn"
              target="_blank"
              rel="noopener noreferrer"
              className={`${socialLink} ${github}`}
            >
              <FaGithub className={`${socialIcon} ${github}`} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/philip-turkiewicz-12035884/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${socialLink} ${linkedin}`}
            >
              <FaLinkedinIn className={`${socialIcon} ${linkedin}`} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/fourbn_task"
              target="_blank"
              rel="noopener noreferrer"
              className={`${socialLink} ${twitter}`}
            >
              <FaTwitter className={`${socialIcon} ${twitter}`} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
