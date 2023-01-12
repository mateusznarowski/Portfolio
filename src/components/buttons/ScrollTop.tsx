import { Link as ScrollTo } from 'react-scroll';

import { useEffect, useState } from 'react';

const ScrollTop = ({ className, offset = 400 }: { className: string; offset?: number }) => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>();

  useEffect(() => {
    const scroll = () => {
      setShowScrollTop(window.scrollY > offset ? true : false);
    };

    window.addEventListener('scroll', scroll);

    return () => window.removeEventListener('scroll', scroll);
  }, []);

  const scroll = { smooth: true, duration: 250 };

  return (
    <ScrollTo to='root' {...scroll} className={`${className} | scroll-top ${showScrollTop ? 'visible' : ''}`}>
      <i className='fa-solid fa-chevron-up' />
    </ScrollTo>
  );
};

export default ScrollTop;
