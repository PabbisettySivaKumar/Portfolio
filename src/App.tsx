function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div
        style={{
          width: '100%',
          aspectRatio: '1 / 1',
          background: `var(${value})`,
          border: '1px solid var(--nb-rule)',
          borderRadius: 'var(--radius-sm)',
        }}
      />
      <div className="font-mono" style={{ fontSize: 11, color: 'var(--nb-dim)' }}>
        {value}
      </div>
      <div style={{ fontSize: 12 }}>{name}</div>
    </div>
  );
}

function TypeRow({
  label,
  sample,
  className,
  style,
}: {
  label: string;
  sample: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '160px 1fr',
        gap: 24,
        alignItems: 'baseline',
        padding: '14px 0',
        borderBottom: '1px solid var(--nb-rule)',
      }}
    >
      <div className="font-mono" style={{ fontSize: 11, color: 'var(--nb-dim)' }}>
        {label}
      </div>
      <div className={className} style={style}>
        {sample}
      </div>
    </div>
  );
}

function App() {
  return (
    <main
      style={{
        maxWidth: 'var(--layout-max)',
        margin: '0 auto',
        padding: 'var(--space-7) var(--space-6) var(--space-9)',
      }}
    >
      <p
        className="font-mono"
        style={{
          fontSize: 'var(--fs-eyebrow)',
          letterSpacing: 'var(--ls-eyebrow)',
          textTransform: 'uppercase',
          color: 'var(--nb-dim)',
        }}
      >
        Phase 1 · Design tokens
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
        Notebook system reference
      </h1>
      <p style={{ color: 'var(--nb-dim)', maxWidth: 640, marginTop: 12 }}>
        This page is the visual contract for the rest of the build. Every color, type step, and
        spacing value used elsewhere comes from <code>tokens.css</code>.
      </p>

      {/* COLORS */}
      <section style={{ marginTop: 'var(--space-8)' }}>
        <h2
          className="font-serif"
          style={{ fontSize: 'var(--fs-h2)', fontStyle: 'italic', fontWeight: 400, margin: 0 }}
        >
          Colors
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: 'var(--space-4)',
            marginTop: 'var(--space-4)',
          }}
        >
          <Swatch name="paper" value="--nb-paper" />
          <Swatch name="ink" value="--nb-ink" />
          <Swatch name="dim" value="--nb-dim" />
          <Swatch name="rule" value="--nb-rule" />
          <Swatch name="accent" value="--nb-accent" />
          <Swatch name="accent-2" value="--nb-accent-2" />
          <Swatch name="highlight" value="--nb-highlight" />
          <Swatch name="margin-bg" value="--nb-margin-bg" />
          <Swatch name="card" value="--nb-card" />
        </div>
      </section>

      {/* TYPE */}
      <section style={{ marginTop: 'var(--space-8)' }}>
        <h2
          className="font-serif"
          style={{ fontSize: 'var(--fs-h2)', fontStyle: 'italic', fontWeight: 400, margin: 0 }}
        >
          Type scale
        </h2>
        <div style={{ marginTop: 'var(--space-4)' }}>
          <TypeRow
            label="display · serif"
            sample="The cheapest call is the one you don't make."
            className="font-serif"
            style={{
              fontSize: 'var(--fs-display)',
              lineHeight: 'var(--lh-tight)',
              letterSpacing: 'var(--ls-display)',
            }}
          />
          <TypeRow
            label="h1 · serif"
            sample="Scoring 120,000 Reddit comments a day"
            className="font-serif"
            style={{ fontSize: 'var(--fs-h1)', lineHeight: 'var(--lh-tight)' }}
          />
          <TypeRow
            label="h2 · serif italic"
            sample="Decisions worth flagging"
            className="font-serif"
            style={{ fontSize: 'var(--fs-h2)', fontStyle: 'italic' }}
          />
          <TypeRow
            label="h3 · serif italic"
            sample="Why not fine-tune?"
            className="font-serif"
            style={{ fontSize: 'var(--fs-h3)', fontStyle: 'italic' }}
          />
          <TypeRow
            label="body-lg · sans"
            sample="Brand teams wanted to know which Reddit conversations actually signaled buying intent — not just sentiment."
            style={{ fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-body)' }}
          />
          <TypeRow
            label="body · sans"
            sample="Of every 100 Reddit comments under a brand thread, ~70 are noise: jokes, off-topic replies, bots."
            style={{ fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)' }}
          />
          <TypeRow
            label="caption · sans dim"
            sample="Sanitized — internal queue / store details abstracted."
            style={{ fontSize: 'var(--fs-caption)', color: 'var(--nb-dim)' }}
          />
          <TypeRow
            label="eyebrow · mono"
            sample="COMPANY PROJECT · DOTKONNEKT"
            className="font-mono"
            style={{
              fontSize: 'var(--fs-eyebrow)',
              letterSpacing: 'var(--ls-eyebrow)',
              textTransform: 'uppercase',
              color: 'var(--nb-accent)',
            }}
          />
          <TypeRow
            label="script · caveat"
            sample="★ filters 62% of noise"
            className="font-script"
            style={{ fontSize: 22, color: 'var(--nb-accent-2)' }}
          />
        </div>
      </section>

      {/* SPACING */}
      <section style={{ marginTop: 'var(--space-8)' }}>
        <h2
          className="font-serif"
          style={{ fontSize: 'var(--fs-h2)', fontStyle: 'italic', fontWeight: 400, margin: 0 }}
        >
          Spacing
        </h2>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'var(--space-4)' }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                className="font-mono"
                style={{ width: 100, fontSize: 11, color: 'var(--nb-dim)' }}
              >
                --space-{n}
              </div>
              <div
                style={{
                  height: 10,
                  background: 'var(--nb-ink)',
                  width: `var(--space-${n})`,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section style={{ marginTop: 'var(--space-8)' }}>
        <h2
          className="font-serif"
          style={{ fontSize: 'var(--fs-h2)', fontStyle: 'italic', fontWeight: 400, margin: 0 }}
        >
          Detail treatments
        </h2>
        <p style={{ marginTop: 'var(--space-4)', maxWidth: 640 }}>
          A sentence with a{' '}
          <span
            style={{
              background: 'linear-gradient(180deg, transparent 60%, var(--nb-highlight) 60%)',
              padding: '0 2px',
            }}
          >
            highlighted phrase
          </span>{' '}
          and a{' '}
          <a
            href="#"
            style={{
              color: 'var(--nb-accent)',
              textDecorationStyle: 'dotted',
              textUnderlineOffset: 3,
            }}
          >
            dotted underline link
          </a>
          .
        </p>
      </section>
    </main>
  );
}

export default App;
