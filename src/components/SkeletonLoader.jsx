import { useState } from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = ({ src, alt, width, aspectRatio, insertClass = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageSrc = (
    <img
      src={src}
      alt={alt}
      onLoad={() => setIsLoaded(true)}
      className={`skeleton-image ${isLoaded ? 'skeleton-image--visible' : ''} ${insertClass}`}
    />
  );

  const imageSkeleton = (
    <div className={`skeleton-container ${insertClass}`} style={{ width: width, aspectRatio: aspectRatio }}>
      <SkeletonTheme baseColor='var(--light-clr)' highlightColor='var(--light-accent-clr)'>
        <Skeleton className='skeleton-container__loader' />
      </SkeletonTheme>
    </div>
  );

  return (
    <>
      {imageSrc} {isLoaded ? null : imageSkeleton}
    </>
  );
};

export default SkeletonLoader;
