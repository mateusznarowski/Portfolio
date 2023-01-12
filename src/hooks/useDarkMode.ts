import { useTernaryDarkMode } from 'usehooks-ts';

import { useEffect } from 'react';

const useDarkMode = () => {
  const { isDarkMode, setTernaryDarkMode, ternaryDarkMode } = useTernaryDarkMode();

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return {
    modeState: ternaryDarkMode,
    isDarkActive: isDarkMode,
    setDark: () => setTernaryDarkMode('dark'),
    setLight: () => setTernaryDarkMode('light'),
    setSystem: () => setTernaryDarkMode('system'),
  };
};

export default useDarkMode;
