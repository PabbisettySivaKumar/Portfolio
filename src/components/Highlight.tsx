import type { ReactNode } from 'react';
import './Highlight.css';

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="nb-highlight">{children}</span>;
}
