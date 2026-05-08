function App() {
  return (
    <main style={{ padding: '40px', maxWidth: 720, margin: '0 auto' }}>
      <p
        className="font-mono"
        style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: '#8a8472' }}
      >
        font specimen · phase 0
      </p>

      <h1
        className="font-serif"
        style={{ fontSize: 64, fontWeight: 400, lineHeight: 1.05, margin: '12px 0 0' }}
      >
        The cheapest call is the one you don't make.
      </h1>

      <p className="font-sans" style={{ fontSize: 16, lineHeight: 1.65, marginTop: 24 }}>
        Body copy in Inter. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <p
        className="font-script"
        style={{ fontSize: 28, color: '#c1502e', marginTop: 24, transform: 'rotate(-1deg)' }}
      >
        ★ handwritten margin note in Caveat
      </p>

      <pre
        className="font-mono"
        style={{
          fontSize: 13,
          background: '#fff',
          padding: 16,
          marginTop: 24,
          border: '1px solid #29261b',
        }}
      >
        {`function score(comment) {
  return classify(comment);
}`}
      </pre>
    </main>
  );
}

export default App;
