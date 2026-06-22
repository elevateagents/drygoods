## Scope
Apply the client's full feedback list to the DryGoods site: copy edits, structure, new sections, mobile polish, sticky mobile CTA, About/Contact redesign.

## Homepage (`src/routes/index.tsx`)

### Hero
- Replace all "Dry+Goods" / "Dry+Goods™" with "DryGoods™" (keep code identifier; just copy).
- Headline: "Meet the fastest way to **prevent** chafing." (already prevent — verify no "stops").
- Subcopy: "DryGoods™ **prevents** chafing and blisters in seconds with one spray…"
- Trust line: "Trusted by customers since 2010".
- Cleaner header: darken/solid top band so nav has stronger contrast (heavier gradient + subtle solid backdrop on Nav).
- Zoom can: not in hero (hero is golf bg). Will zoom the can in the Buy section image (`object-contain` → larger inner padding reduced) so the can fills more of the frame.

### New section order
1. Hero
2. **Introducing DryGoods** (new — replaces "Why" heading; explains what it is in plain language)
3. **Why it exists / problem it solves** (current ProblemSolution, retitled "Why it exists")
4. How it works
5. Benefits
6. SkinTypes
7. Reviews (Amazon)
8. Buy
9. FAQ
10. Final CTA

(SkinTypes stays as the "Safe on all skin types" cleaner block — already deduped.)

### Reviews
- Remove the small 5-star overlay box on imagery (in `AmazonReviewsSection`).
- Rewrite "athletes" → "customers" throughout. Headline: "See what real customers are saying."

### Buy / Shopping section
- Remove the inline Stars row + "Athlete Approved" tag.
- Use the site's body font (drop the display font on the product title; keep a clean sans).
- Tighten layout, remove redundant labels.

### FAQ
- Remove TSA/size question (already done).
- Reword last spray question to: "How long does one application last?" / "One application provides approximately 8–12 hours of protection, depending on your activity level, sweat, and usage."

### Final CTA (new richer section)
- Headline: "Stay cool, stay dry. Stay unstoppable."
- Subcopy: "Don't let discomfort slow down your best performance. Experience the confidence and comfort to push your limits every day."
- Replace current image with a stronger lifestyle image (pickleball action — reuse `about-pickleball-paddle` asset).
- Single bold CTA button.

### General
- Strip stray "+" characters from copy (brand becomes DryGoods).
- Remove redundant Athlete Approved chips.

## Sticky mobile CTA (new)
- New component `MobileBuyBar.tsx`: fixed bottom bar, `md:hidden`, "Add to Cart — $19.99". Mounted in `Layout.tsx`. Add bottom padding to layout so it doesn't cover footer content.

## About page (`src/routes/about.tsx`)
- Swap display font on body copy to body sans for readability.
- Already has 3 new images; keep the top 2 (court + paddle) in center/right, ensure no blur/dupes.

## Contact page (`src/routes/contact.tsx`)
- Redesign contact card: cleaner spacing, single column on mobile, two-column on desktop, consistent rounded card matching site, larger inputs, accessible labels.

## Mobile/tablet polish
- Audit Nav mobile menu text size + contrast.
- Confirm Buy section, Hero, ProblemSolution stack cleanly on 390px.
- Add `pb-20 md:pb-0` on Layout main to clear sticky bar.

## Out of scope (skip)
- Re-generating product photography.
- The uploaded PPTX (it's unrelated AI assistant research, not DryGoods material).

## Files touched
- `src/routes/index.tsx` (largest)
- `src/routes/about.tsx`
- `src/routes/contact.tsx`
- `src/components/site/AmazonReviewsSection.tsx`
- `src/components/site/Nav.tsx`
- `src/components/site/Layout.tsx`
- `src/components/site/MobileBuyBar.tsx` (new)
