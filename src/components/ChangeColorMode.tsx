import { useRef, useState } from 'react';

import { useOnClickOutside } from 'usehooks-ts';

import useDarkMode from '../hooks/useDarkMode';

const ChangeColorMode = ({ className }: { className?: string }) => {
  const { modeState, isDarkActive, setDark, setLight, setSystem } = useDarkMode();

  const state = { dark: modeState === 'dark', light: modeState === 'light', system: modeState === 'system' };

  const highlightDark = isDarkActive && state.dark ? 'active' : isDarkActive && state.system ? 'system' : '';
  const highlightLight = !isDarkActive && state.light ? 'active' : !isDarkActive && state.system ? 'system' : '';

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(optionsRef, () => isOpen && setIsOpen(false));

  return (
    <div className='color-mode' ref={optionsRef}>
      <button className={`${className} | color-mode__btn  btn btn--squared`} onClick={() => setIsOpen((prev) => !prev)}>
        <i className='fa-solid fa-circle-half-stroke' />
      </button>

      <div className={`color-mode__options ${isOpen ? 'visible' : ''}`}>
        <button onClick={setDark} className={`color-mode__options__btn ${highlightDark}`}>
          <i className='fa-regular fa-moon' />
        </button>
        <button onClick={setLight} className={`color-mode__options__btn ${highlightLight}`}>
          <i className='fa-regular fa-sun' />
        </button>
        <hr />
        <button onClick={setSystem} className='color-mode__options__btn'>
          <i className='fa-solid fa-arrows-rotate' />
        </button>
      </div>
    </div>
  );
};

export default ChangeColorMode;
