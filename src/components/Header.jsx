import React from 'react';

import TurkeyLogo from '../components/SVG/TurkeyLogo';
import GetInTouchIcon from "../components/SVG/GetInTouchIcon";

import { header, getInTouch, turkeyLogo } from './Header.module.scss';

const Header = () => {
  return (
    <header className={header}>
      <nav>
        <ul>
          <li className={turkeyLogo}>
            <TurkeyLogo />
          </li>
          <li className={getInTouch}>
            <a href="#contact" aria-label="Click here to scroll directly to the Contact Me section">
              <GetInTouchIcon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
