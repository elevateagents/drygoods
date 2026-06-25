// Reviews marquee — infinite CSS animation

type Review = {
  name: string;
  rating: number;
  title: string;
  date: string;
  body: string;
  helpful?: string;
};

const REVIEWS: Review[] = [
  {
    name: "Leonidous",
    rating: 5,
    title: "Balls",
    date: "Reviewed in the United States on May 22, 2026",
    body: "I've been trying to find a good replacement for the old DSC Ball Spray ever since they stopped making it, and this is honestly the closest thing I've found. Very similar feel and effectiveness. It keeps everything dry, fresh, and comfortable without being overpowering or irritating. Works great for long work days, gym sessions, or just hot weather in general. The spray goes on clean, dries quickly, and doesn't leave a weird sticky residue like some others I've tried. Definitely happy I gave this a shot.",
    helpful: "2 people found this helpful",
  },
  {
    name: "Kendra",
    rating: 5,
    title: "Best out there for chafing",
    date: "Reviewed in the United States on March 17, 2026",
    body: "This is the only thing my husband has found to help with chafing on inner thighs and \"below the belt\" he works construction and is sweating all day and has zero chafing while he uses this. It is pricey but IT WORKS. We tried less expensive versions like the aem and hammer dry spray and it just doesn't work like this. ALSO its sprays great from any angle!",
    helpful: "2 people found this helpful",
  },
  {
    name: "kai",
    rating: 4,
    title: "Well worth it!",
    date: "Reviewed in the United States on October 4, 2012",
    body: "This stuff really works, keeps me dry and free from chafing, I've tried the powders before and they always seem to leave a mess and cake up. I really like not having powder all over the bathroom floor and the ease of use. Would highly recommend.",
    helpful: "3 people found this helpful",
  },
  {
    name: "Angie",
    rating: 5,
    title: "I can't recommend it enough! I have used and loved this product for 20+ years!",
    date: "Reviewed in the United States on August 16, 2024",
    body: "I have used this product for years, before it was even available on the open market. I discovered it at a Sports Medicine conference when the owner/creator first introduced the product. I fell in love with it then and have used it ever since, 20+ years. I've used this on my athletes for a variety of issues, with a 100% success and satisfaction rate every time. The product is a nice mix of a cooling agent and a drying powder in a spray form. It doesn't leave a residue on your body or clothes.",
    helpful: "8 people found this helpful",
  },
  {
    name: "Adam",
    rating: 5,
    title: "This is a Win-Win.............",
    date: "Reviewed in the United States on July 9, 2016",
    body: "I have finally found the perfect product!!!! Living here in South Florida in a tropical environment sweat is normal and things tend to get sticky. I finally had a chance to use it today and it is AMAZING!!! It goes on super COLD, which to me is very refreshing. The smell is wonderful like a peppermint candy! It's been 8 plus hours since I have applied and it stops all stickiness down there. No more mess and it works!",
    helpful: "17 people found this helpful",
  },
  {
    name: "Jackberger",
    rating: 3,
    title: "Great but expensive",
    date: "Reviewed in the United States on June 3, 2026",
    body: "Great product! But pricey... Not sure why the 5 dollar increase since a month ago!?",
    helpful: "One person found this helpful",
  },
  {
    name: "ClutchPin",
    rating: 5,
    title: "Stay Fresh from Every Angle – Even Upside Down!",
    date: "Reviewed in the United States on January 17, 2025",
    body: "This spray has been a revelation as someone who has struggled to find the perfect dry powder body spray. It's now my go-to for those tricky areas (yes, it will spray upside down and not clog). The application is a breeze, and the feeling is just right. The scent is pleasant, not overwhelming. And the best part? It's more affordable and effective than the big-name brands.",
    helpful: "2 people found this helpful",
  },
  {
    name: "Tia Charm",
    rating: 5,
    title: "Absolutely love it",
    date: "Reviewed in the United States on July 20, 2025",
    body: "This works great. I used to buy Gold Bond, but they must have changed the sprayer or something, and it became too difficult to use. It took some digging to find this, but I am definitely glad I did. Highly recommend this.",
  },
];

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  const pct = (rating / 5) * 100;
  return (
    <div
      className="relative inline-block leading-none"
      style={{ fontSize: size }}
      aria-label={`${rating} out of 5 stars`}
    >
      <span className="text-gray-300 tracking-[1px]">★★★★★</span>
      <span
        className="absolute inset-0 overflow-hidden text-[#FFA41C] tracking-[1px]"
        style={{ width: `${pct}%` }}
        aria-hidden
      >
        ★★★★★
      </span>
    </div>
  );
}

function VerifiedBadge() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" className="text-[#1A98FF]" aria-hidden>
      <path
        fill="currentColor"
        d="M12 1l2.5 2.3 3.4-.4.9 3.3 3 1.6-1.2 3.2 1.2 3.2-3 1.6-.9 3.3-3.4-.4L12 21l-2.5-2.3-3.4.4-.9-3.3-3-1.6L3.4 11 2.2 7.8l3-1.6.9-3.3 3.4.4L12 1z"
      />
      <path
        d="M7.5 12.2l3 3 6-6"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AmazonReviewsSection() {
  const loopReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section
      id="reviews"
      className="bg-paper py-20 sm:py-24 md:py-32 px-5 sm:px-6 lg:px-8 scroll-mt-16 overflow-hidden"
    >
      <style>{`
        @keyframes dg-marquee {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }
        .dg-marquee-track {
          animation: dg-marquee 60s linear infinite;
          width: max-content;
        }
        .dg-marquee-mask:hover .dg-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .dg-marquee-track { animation: none; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Amazon-style header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-baseline gap-2">
            <span className="font-serif italic text-ink text-xl sm:text-2xl">amazon</span>
            <span className="text-ink text-xl sm:text-2xl font-medium">Reviews</span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-3xl sm:text-4xl font-bold text-ink">4.5</span>
            <Stars rating={4.5} size={24} />
            <span className="text-ink/50 text-sm">(448)</span>
          </div>
        </div>

        {/* Infinite marquee carousel */}
        <div
          className="dg-marquee-mask relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          }}
        >
          <div className="dg-marquee-track flex gap-5 py-1">
            {loopReviews.map((r, i) => (
              <article
                key={i}
                aria-hidden={i >= REVIEWS.length}
                className="shrink-0 w-[300px] sm:w-[340px] bg-white border border-ink/10 rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-ink text-sm">{r.name}</span>
                  <VerifiedBadge />
                </div>
                <Stars rating={r.rating} size={16} />
                <h3 className="font-bold text-ink text-[15px] leading-snug">{r.title}</h3>
                <p className="text-xs text-ink/50">{r.date}</p>
                <p className="text-ink/80 text-[14px] leading-relaxed line-clamp-6">{r.body}</p>
                {r.helpful && (
                  <p className="mt-auto pt-2 text-xs text-ink/50">{r.helpful}</p>
                )}
              </article>
            ))}
          </div>
        </div>


        <div className="mt-10 flex justify-center">
          <a
            href="https://www.amazon.com/dp/B003YTUWJ8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink hover:bg-ink/90 transition-colors text-white px-8 py-4 font-bold text-sm uppercase tracking-widest rounded-full shadow-lg"
          >
            See all reviews on Amazon
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
