import { ReactNode } from 'react';

export type ScrollToProps = {
  to: string;
  className: string;
  children: ReactNode;
  onClick?: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
  offset?: number;
};
