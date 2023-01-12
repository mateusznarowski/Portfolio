import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from 'react';

type CollapsibleProps = {
  className?: string;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

const Collapsible = ({ className, isActive, setIsActive, children }: CollapsibleProps) => {
  const collapse = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const watchWindowResize = () => {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        if (isActive) {
          setIsActive(false);

          setTimeout(() => {
            setIsActive(true);
          }, 400);
        }
      }, 150);
    };

    window.addEventListener('resize', watchWindowResize);

    return () => window.removeEventListener('resize', watchWindowResize);
  }, []);

  return (
    <div
      className={`${className} | collapsible ${isActive ? 'collapsible--active' : ''}`}
      style={isActive ? { height: `${collapse.current?.scrollHeight}px` } : { height: '0' }}
      ref={collapse}
    >
      {children}
    </div>
  );
};

export default Collapsible;
