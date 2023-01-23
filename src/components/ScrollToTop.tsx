import { useEffect, useState } from 'react';

import ScrollTo from './ScrollTo';

import { ScrollToTopProps } from '../types/components/TScrollToTop';

const ScrollToTop = ({ className, offset = 400 }: ScrollToTopProps) => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const scroll = () => {
      setShowScrollTop(window.scrollY > offset ? true : false);
    };

    window.addEventListener('scroll', scroll);

    return () => window.removeEventListener('scroll', scroll);
  }, []);

  return (
    <ScrollTo to='root' className={`${className} | scroll-top ${showScrollTop ? 'visible' : ''}`}>
      <i className='fa-solid fa-chevron-up' />
    </ScrollTo>
  );
};

export default ScrollToTop;
