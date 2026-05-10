import type { ReactNode } from 'react';
import './PageShell.css';

type PageShellProps = {
  sidebar: ReactNode;
  margin: ReactNode;
  children: ReactNode;
};

export function PageShell({ sidebar, margin, children }: PageShellProps) {
  return (
    <div className="shell">
      <aside className="shell__sidebar">{sidebar}</aside>
      <main className="shell__main">{children}</main>
      <aside className="shell__margin">{margin}</aside>
    </div>
  );
}
