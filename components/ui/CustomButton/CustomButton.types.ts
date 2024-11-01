import { ReactNode, CSSProperties } from 'react';

export interface ICustomButtonProps {
  type?: 'main' | 'secondary';
  children: ReactNode;
  customClass?: string;
}
