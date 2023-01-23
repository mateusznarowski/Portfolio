import { Link } from 'react-scroll';

import { useMediaQuery } from 'usehooks-ts';

import { ScrollToProps } from '../types/components/TScrollTo';

const ScrollTo = ({ to, className, children, onClick, offset = 0 }: ScrollToProps) => {
  const scroll = {
    smooth: !useMediaQuery('(prefers-reduced-motion: reduce)'),
    duration: 250,
    offset,
  };

  return (
    <Link to={to} {...scroll} className={className} onClick={onClick} href={to}>
      {children}
    </Link>
  );
};

export default ScrollTo;
