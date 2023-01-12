type HamburgerButtonProps = {
  className?: string;
  close?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const HamburgerButton = ({ className, close, onClick }: HamburgerButtonProps) => {
  return (
    <button className={`${className} | hamburger ${close ? 'hamburger--active' : ''}`} onClick={onClick}>
      <span className='hamburger__box'>
        <span className='hamburger__inner' />
      </span>
    </button>
  );
};

export default HamburgerButton;
