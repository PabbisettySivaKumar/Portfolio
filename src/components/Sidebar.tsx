import './Sidebar.css';

type Item = { num: string; title: string; href: string };

const ITEMS: Item[] = [
  { num: '01', title: 'Pitch', href: '/#pitch' },
  { num: '02', title: 'Projects', href: '/#projects' },
  { num: '03', title: 'Architecture', href: '/#architecture' },
  { num: '04', title: 'Stack', href: '/#stack' },
  { num: '05', title: 'Experience', href: '/#experience' },
  { num: '06', title: 'Case study', href: '/case' },
  { num: '07', title: 'Contact', href: '/contact' },
];

type Props = {
  /** Lowercased title of the active section, e.g. "case study" */
  active?: string;
};

export function Sidebar({ active }: Props) {
  return (
    <div className="nb-sidebar">
      <div className="nb-sidebar__monogram" aria-hidden="true">
        sk
      </div>
      <div className="nb-sidebar__eyebrow">Notebook</div>
      <div className="nb-sidebar__name">
        Siva Kumar
        <br />
        <span className="nb-sidebar__role">AI Engineer</span>
      </div>

      <hr className="nb-sidebar__rule" />

      <nav className="nb-sidebar__nav" aria-label="Sections">
        {ITEMS.map((item) => {
          const isActive = item.title.toLowerCase() === active;
          return (
            <a
              key={item.num}
              href={item.href}
              className={`nb-sidebar__link ${isActive ? 'is-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="nb-sidebar__num">{item.num}</span>
              <span className="nb-sidebar__title">{item.title}</span>
              {isActive && (
                <span className="nb-sidebar__dot" aria-hidden="true">
                  ●
                </span>
              )}
            </a>
          );
        })}
      </nav>

      <hr className="nb-sidebar__rule" />

      <div className="nb-sidebar__status">
        status
        <br />
        <span className="nb-sidebar__status-on">● open to roles</span>
        <br />
        <br />
        loc
        <br />
        Bengaluru, IN
        <br />
        <br />
        ref
        <br />
        vol.01
      </div>
    </div>
  );
}
