import { useRef, useState } from 'react';

import { useOnClickOutside } from 'usehooks-ts';

import useDarkMode from '../hooks/useDarkMode';

import { ChangeColorModeProps } from '../types/components/TChangeColorMode';

const ChangeColorMode = ({ className }: ChangeColorModeProps) => {
  const { modeState, isDarkActive, setDark, setLight, setSystem } = useDarkMode();

  const state = { dark: modeState === 'dark', light: modeState === 'light', system: modeState === 'system' };

  const highlightDark = isDarkActive && state.dark ? 'active' : isDarkActive && state.system ? 'system' : '';
  const highlightLight = !isDarkActive && state.light ? 'active' : !isDarkActive && state.system ? 'system' : '';

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(optionsRef, () => isOpen && setIsOpen(false));

  return (
    <div className='color-mode' ref={optionsRef}>
      <button
        className={`${className} | color-mode__btn  btn btn--squared`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label='Open color mode selection window'
      >
        <i className='fa-solid fa-circle-half-stroke' />
      </button>

      <div className={`color-mode__options ${isOpen ? 'visible' : ''}`}>
        <button
          onClick={setDark}
          className={`color-mode__options__btn ${highlightDark}`}
          aria-label={`Dark Mode ${highlightDark}`}
        >
          <i className='fa-regular fa-moon' />
        </button>
        <button
          onClick={setLight}
          className={`color-mode__options__btn ${highlightLight}`}
          aria-label={`Light Mode ${highlightLight}`}
        >
          <i className='fa-regular fa-sun' />
        </button>
        <hr />
        <button onClick={setSystem} className='color-mode__options__btn' aria-label='Set default color mode'>
          <i className='fa-solid fa-arrows-rotate' />
        </button>
      </div>
    </div>
  );
};

export default ChangeColorMode;
