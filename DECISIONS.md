# Decisions

## 2026-05-08 — Stack: Vite + React + TypeScript

Chose Vite over Next.js because the portfolio is fully static and I want to
learn React fundamentals without routing/SSR machinery in the way. Will
revisit if I add a blog or auth later.

## 2026-05-08 — Notebook direction

Picked the notebook direction (originally d5) over the four other explorations.
Reference snapshot lives in `notebook-reference/` of the design project.

## 2026-05-08 — Type stack

Inter (sans), Instrument Serif (display), JetBrains Mono (code/eyebrow),
Caveat (handwritten margin notes). Loaded via Google Fonts.

## 2026-05-10 — Token naming

Tokens are purpose-named (--nb-ink, --fs-eyebrow), not value-named
(--gray-900, --text-md). Survives theme changes; the cost is renaming
when meaning shifts. Worth it.

## 2026-05-10 — Layout: CSS Grid + grid-template-areas

Used `grid-template-areas` for the 3-column shell so the responsive
collapse to 1 column is a single redeclaration, not a flex rewrite.
Side columns are `position: sticky` with `align-self: start` to stay
pinned without breaking the grid.
