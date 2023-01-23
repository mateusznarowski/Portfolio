import ScrollTo from './ScrollTo';

import { SkipToContentProps } from '../types/components/TSkipToContent';

const SkipToContent = ({ className }: SkipToContentProps) => {
  return (
    <ScrollTo to='about' className={`${className} | skip-to-content`} offset={-30}>
      Skip to content
    </ScrollTo>
  );
};

export default SkipToContent;
