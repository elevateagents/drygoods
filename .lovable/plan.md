## Fix Problem section card overflow on mobile

The "Dump-on / Dry Goods" comparison cards in `src/routes/index.tsx` (Problem section) clip their headlines on phones — "DUST CLOUD" and "TARGETED SPRAY" run off the card edge.

### Root cause
- Grid is `grid-cols-2` even on mobile, so each card is ~165px wide at 384px viewport.
- Headlines use `text-3xl` (30px) `font-black uppercase tracking-tighter` — too wide to fit.
- The B card also has `mt-10` stagger, which on a narrow 2-col layout looks awkward.

### Changes (single file: `src/routes/index.tsx`, Problem section ~lines 138–148)
1. Change the inner grid from `grid-cols-2 gap-3` to `grid-cols-2 gap-3` on `sm+` and **stack to a single column on mobile** (`grid-cols-1 sm:grid-cols-2`).
2. Reduce headline size responsively: `text-2xl sm:text-3xl` so it always fits.
3. Use a wider aspect ratio on mobile (`aspect-[5/3] sm:aspect-[3/4]`) so stacked cards don't dominate the viewport.
4. Drop the `mt-10` stagger on mobile; keep it from `sm:` upward (`sm:mt-10`).
5. Add `break-words` / remove the forced `<br/>` between "DUST" and "CLOUD" / "TARGETED" and "SPRAY" so wrapping is natural at any width.

### Outcome
- No horizontal clipping at 320–414px.
- Cards stack cleanly on phones, return to side-by-side staggered layout from `sm` (≥640px) up.
- No other sections affected.