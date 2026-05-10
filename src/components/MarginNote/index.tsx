import type { CSSProperties, ReactNode } from 'react';
import './MarginNote.css';

type Props = {
  children: ReactNode;
  /** Tilt in degrees. Defaults to a slight left lean for handwritten feel. */
  tilt?: number;
  /** Override accent color via CSS var. */
  color?: 'accent' | 'accent-2';
  style?: CSSProperties;
};

export function MarginNote({ children, tilt = -1.5, color = 'accent', style }: Props) {
  return (
    <div
      className="nb-margin-note"
      style={{
        transform: `rotate(${tilt}deg)`,
        color: `var(--nb-${color})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
