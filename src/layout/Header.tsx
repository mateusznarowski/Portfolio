import { useRef, useState } from 'react';

import { Link as ScrollTo } from 'react-scroll';

import HamburgerButton from '../components/buttons/HamburgerButton';
import ScrollTop from '../components/buttons/ScrollTop';
import ChangeColorMode from '../components/ChangeColorMode';
import Menu from '../components/Menu';

const Header = () => (
  <header id='header'>
    <div className='container'>
      <div className='header'>
        <Menu />

        <ChangeColorMode className='nav-color-mode' />
        <ScrollTop className='nav-scroll-top | btn btn--squared' />
      </div>
    </div>
  </header>
);

export default Header;
