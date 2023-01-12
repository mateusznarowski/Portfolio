import { useState } from 'react';

import { Link as ScrollTo } from 'react-scroll';

import HamburgerButton from './buttons/HamburgerButton';

const Menu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const closeMenu = () => setShowMenu(false);
  const openMenu = () => setShowMenu(true);

  const scroll = { smooth: true, offset: -30, duration: 250 };

  return (
    <>
      <nav className={`nav ${showMenu ? 'nav--visible' : ''}`}>
        <HamburgerButton className='nav-close' close onClick={closeMenu} />

        <ul className='nav__list'>
          <li className='nav__list-item'>
            <ScrollTo to='about' {...scroll} className='nav__list-link' onClick={closeMenu}>
              About
            </ScrollTo>
          </li>
          <li className='nav__list-item'>
            <ScrollTo to='projects' {...scroll} className='nav__list-link' onClick={closeMenu}>
              Projects
            </ScrollTo>
          </li>
          <li className='nav__list-item'>
            <ScrollTo to='contact' {...scroll} offset={0} className='nav__list-link' onClick={closeMenu}>
              Contact
            </ScrollTo>
          </li>
        </ul>
      </nav>

      {showMenu && <div className='nav-outside' onClick={closeMenu} />}

      <HamburgerButton className='nav-open' onClick={openMenu} />
    </>
  );
};

export default Menu;
