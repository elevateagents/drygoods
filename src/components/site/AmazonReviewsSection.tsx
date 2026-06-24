const REVIEWS = [
  {
    name: "Leonidous",
    text: "Closest replacement I've found to the old DSC Ball Spray. Keeps everything dry, fresh, and comfortable without being overpowering or irritating. Great for long work days, gym sessions, and hot weather.",
  },
  {
    name: "Kendra",
    text: "This is the only thing my husband has found that helps with chafing on inner thighs and below the belt. He works construction, sweats all day, and has zero chafing while using this. It works.",
  },
  {
    name: "Angie",
    text: "I have used and loved this product for 20+ years. It's a great mix of cooling and drying powder in spray form, doesn't leave residue on body or clothes, and is easy to travel with.",
  },
  {
    name: "ClutchPin",
    text: "This spray has been a revelation. It sprays upside down, doesn't clog, feels just right, and has a pleasant scent that isn't overwhelming. More affordable and effective than big-name brands.",
  },
  {
    name: "Tia Charm",
    text: "Absolutely love it. This works great. I had trouble finding a body spray that was easy to use, and I'm definitely glad I found this one. Highly recommend.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#9CD1B4]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function AmazonReviewsSection() {
  return (
    <section
      id="reviews"
      className="bg-paper py-20 sm:py-24 md:py-32 px-5 sm:px-6 lg:px-8 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9CD1B4]">
            Reviews
          </span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(32px,5vw,56px)] leading-[1] text-ink">
            See what real customers are saying.
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Honest feedback from people who use DryGoods™ every day.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="bg-white border border-ink/10 rounded-2xl p-6 flex flex-col gap-4"
            >
              <Stars />
              <blockquote className="text-ink/80 leading-relaxed text-[15px]">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-auto text-sm font-bold text-ink uppercase tracking-wide">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
