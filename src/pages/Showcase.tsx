import { Sidebar } from '../components/Sidebar';
import { PageHeader } from '../components/PageHeader';
import { SectionHead } from '../components/SectionHead';
import { Card } from '../components/Card';
import { MarginNote } from '../components/MarginNote';
import { Highlight } from '../components/Highlight';
import { PageShell } from '../components/PageShell';

export function Showcase() {
  return (
    <PageShell
      sidebar={<Sidebar active="case study" />}
      margin={
        <>
          <MarginNote>★ this is the showcase page</MarginNote>
          <p style={{ fontSize: 12, color: 'var(--nb-dim)', marginTop: 12 }}>
            Every primitive in one place. Update this when you add a new component.
          </p>
        </>
      }
    >
      <PageHeader entryDate="10 May 2026" title="Component showcase" page="page 00" />

      <SectionHead num="01" title="PageHeader" />
      <p>
        The block above is a PageHeader. Eyebrow date, italic serif title, handwritten page number.
      </p>

      <SectionHead num="02" title="SectionHead" />
      <p>
        The numbered title with the hairline is a SectionHead. Used to break up case study content.
      </p>

      <SectionHead num="03" title="Card" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
        <Card>
          <div className="font-serif" style={{ fontSize: 18, fontStyle: 'italic' }}>
            Why not fine-tune?
          </div>
          <p style={{ fontSize: 13, color: 'var(--nb-dim)', marginTop: 6 }}>
            Rule-based filtering reaches ~92% precision on noise.
          </p>
        </Card>
        <Card>
          <div className="font-serif" style={{ fontSize: 18, fontStyle: 'italic' }}>
            Why Gemini, not GPT-4?
          </div>
          <p style={{ fontSize: 13, color: 'var(--nb-dim)', marginTop: 6 }}>
            Per-token cost at our scale, not capability.
          </p>
        </Card>
      </div>

      <SectionHead num="04" title="Highlight" />
      <p>
        A sentence with a <Highlight>highlighted phrase</Highlight> in the middle.
      </p>

      <SectionHead num="05" title="MarginNote" />
      <p>The handwritten note in the right column is a MarginNote.</p>
    </PageShell>
  );
}
