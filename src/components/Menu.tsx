import { useState } from 'react';

import useLockedBody from '../hooks/useLockedBody';

import ScrollTo from './ScrollTo';

import HamburgerButton from './HamburgerButton';

const Menu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const closeMenu = () => setShowMenu(false);
  const openMenu = () => setShowMenu(true);

  useLockedBody(showMenu, closeMenu);

  return (
    <>
      <HamburgerButton className='nav-open' onClick={openMenu} />

      {showMenu && <div className='nav-outside' onClick={closeMenu} aria-hidden />}

      <nav className={`nav ${showMenu ? 'nav--visible' : ''}`}>
        <HamburgerButton className='nav-close' close onClick={closeMenu} />

        <ul className='nav__list'>
          <li className='nav__list-item'>
            <ScrollTo to='about' offset={-30} className='nav__list-link' onClick={closeMenu}>
              About
            </ScrollTo>
          </li>
          <li className='nav__list-item'>
            <ScrollTo to='projects' offset={-30} className='nav__list-link' onClick={closeMenu}>
              Projects
            </ScrollTo>
          </li>
          <li className='nav__list-item'>
            <ScrollTo to='contact' className='nav__list-link' onClick={closeMenu}>
              Contact
            </ScrollTo>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
