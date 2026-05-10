import { PageShell } from './components/PageShell';

function App() {
  return (
    <PageShell
      sidebar={
        <div>
          <div
            className="font-mono"
            style={{
              fontSize: 'var(--fs-eyebrow)',
              letterSpacing: 'var(--ls-eyebrow)',
              textTransform: 'uppercase',
              color: 'var(--nb-dim)',
              marginBottom: 'var(--space-2)',
            }}
          >
            Notebook
          </div>
          <div className="font-serif" style={{ fontSize: 22, lineHeight: 1.1 }}>
            Siva Kumar
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--nb-dim)', fontSize: 14 }}>
              AI Engineer
            </span>
          </div>
          <hr
            style={{
              border: 0,
              borderTop: '1px solid var(--nb-rule)',
              margin: 'var(--space-4) 0',
            }}
          />
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12.5 }}>
            {[
              ['01', 'Pitch'],
              ['02', 'Projects'],
              ['03', 'Architecture'],
              ['04', 'Stack'],
              ['05', 'Experience'],
              ['06', 'Case study'],
              ['07', 'Contact'],
            ].map(([n, t]) => (
              <a
                key={n}
                href="#"
                style={{ display: 'flex', gap: 8, textDecoration: 'none', color: 'var(--nb-dim)' }}
              >
                <span className="font-mono">{n}</span>
                <span>{t}</span>
              </a>
            ))}
          </nav>
        </div>
      }
      margin={
        <div>
          <div
            className="font-script"
            style={{
              fontSize: 17,
              color: 'var(--nb-accent)',
              transform: 'rotate(-1.5deg)',
            }}
          >
            ★ ask me anything
          </div>
          <p style={{ fontSize: 12.5, color: 'var(--nb-dim)', marginTop: 12 }}>
            Margin column. This is where notes, the chat widget, and related links will live.
          </p>
        </div>
      }
    >
      {/* MAIN */}
      <p
        className="font-mono"
        style={{
          fontSize: 'var(--fs-eyebrow)',
          letterSpacing: 'var(--ls-eyebrow)',
          textTransform: 'uppercase',
          color: 'var(--nb-dim)',
        }}
      >
        Phase 2 · Layout shell
      </p>
      <h1
        className="font-serif"
        style={{
          fontSize: 'var(--fs-display)',
          lineHeight: 'var(--lh-tight)',
          letterSpacing: 'var(--ls-display)',
          fontWeight: 400,
          margin: '8px 0 0',
        }}
      >
        Three columns, one notebook.
      </h1>
      <p style={{ maxWidth: 640, marginTop: 16, lineHeight: 'var(--lh-body)' }}>
        The ruled-paper background should be visible behind this paragraph. Resize the window — at
        narrower widths, the side columns should stack below this main column, not squeeze.
      </p>
      <p style={{ maxWidth: 640, marginTop: 16, lineHeight: 'var(--lh-body)' }}>
        {Array.from({ length: 12 })
          .map(
            () =>
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          )
          .join('')}
      </p>
    </PageShell>
  );
}

export default App;
