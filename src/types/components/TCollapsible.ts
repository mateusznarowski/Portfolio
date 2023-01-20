import { Dispatch, ReactNode, SetStateAction } from 'react';

export type CollapsibleProps = {
  className?: string;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};
