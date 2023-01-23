import { HamburgerButtonProps } from '../types/components/THamburgerButton';

const HamburgerButton = ({ className, close, onClick }: HamburgerButtonProps) => {
  return (
    <button
      className={`${className} | hamburger ${close ? 'hamburger--active' : ''}`}
      onClick={onClick}
      aria-label={`${close ? 'Close' : 'Open'} Menu`}
    >
      <span className='hamburger__box' aria-hidden>
        <span className='hamburger__inner' aria-hidden />
      </span>
    </button>
  );
};

export default HamburgerButton;
