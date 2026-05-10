import type { ReactNode, HTMLAttributes } from 'react';
import './Card.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className = '', ...rest }: Props) {
  return (
    <div className={`nb-card ${className}`} {...rest}>
      {children}
    </div>
  );
}
