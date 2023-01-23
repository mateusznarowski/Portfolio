import { useEffect, useState } from 'react';

import { useIsomorphicLayoutEffect, useMediaQuery } from 'usehooks-ts';

const getScrollbarWidth = () => {
  const outer = document.createElement('div');
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);

  const inner = document.createElement('div');
  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  outer.remove();

  return scrollbarWidth;
};

const useLockedBody = (initialLocked = false, callback: () => void) => {
  const [locked, setLocked] = useState(initialLocked);
  const size = useMediaQuery('(width >= 48em)');

  useIsomorphicLayoutEffect(() => {
    if (!locked) return;

    const scrollBarWidth = getScrollbarWidth();

    document.body.style.overflow = 'hidden';
    if (scrollBarWidth) document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = '';
      if (scrollBarWidth) document.body.style.paddingRight = '';
    };
  }, [locked]);

  useEffect(() => {
    if (locked !== initialLocked) setLocked(initialLocked);

    if (size) callback();
  }, [initialLocked, size]);
};

export default useLockedBody;
