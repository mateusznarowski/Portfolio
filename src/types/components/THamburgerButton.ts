import { MouseEventHandler } from 'react';

export type HamburgerButtonProps = {
  className?: string;
  close?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
