import { useEffect, useRef, useState } from "react";

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
  {
    name: "K. E. Norian",
    rating: 5,
    title: "I've been searching for a product like this, and I found it!",
    date: "Reviewed in the United States on February 2, 2025",
    body: "I tried spray Gold Bond - kept plugging up after a few uses. Tinactin is OK, but I don't need/want the chems in it for fungus. This product is amzing. It works as well or better than powder after a shower, and is avoids all of the mess and dust of powder. I'm in my mid 60s and have been looking for this product for decades! Very happy user.",
  },
  {
    name: "Ellen",
    rating: 5,
    title: "Game changer for hot weather",
    date: "Reviewed in the United States on August 4, 2025",
    body: "Absolutely love the spray. It has been a lifesaver in the humid weather of Pennsylvania. It has such a pleasant scent and the spray always comes out easily. A must have for all the girlies in summer!",
  },
  {
    name: "Jackson",
    rating: 5,
    title: "No chafing, no burn — finally",
    date: "Reviewed in the United States on June 12, 2025",
    body: "This is the FIRST continuous spray powder I've ever tried that does NOT burn skin in sensitive, chafed areas. PLEASE try this if you have tried them all and have to keep going back to manual because the propellant burns—this doesn't!",
  },
];

const LOOP_REVIEWS = [...REVIEWS, ...REVIEWS, ...REVIEWS];
const LOOP_START_INDEX = REVIEWS.length;

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
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [autoPaused, setAutoPaused] = useState(false);

  const pauseAuto = () => {
    setAutoPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setAutoPaused(false), 5000);
  };

  const scrollToIndex = (index: number, behavior: ScrollBehavior = "smooth") => {
    const wrap = wrapRef.current;
    const card = cardRefs.current[index];
    if (!wrap || !card) return;
    wrap.scrollTo({ left: card.offsetLeft, behavior });
  };

  const nearestIndex = () => {
    const wrap = wrapRef.current;
    if (!wrap) return LOOP_START_INDEX;
    let index = LOOP_START_INDEX;
    let distance = Number.POSITIVE_INFINITY;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const nextDistance = Math.abs(card.offsetLeft - wrap.scrollLeft);
      if (nextDistance < distance) {
        distance = nextDistance;
        index = i;
      }
    });
    return index;
  };

  const normalizeLoopPosition = (index: number) => {
    if (index < REVIEWS.length) {
      scrollToIndex(index + REVIEWS.length, "auto");
      return index + REVIEWS.length;
    }
    if (index >= REVIEWS.length * 2) {
      scrollToIndex(index - REVIEWS.length, "auto");
      return index - REVIEWS.length;
    }
    return index;
  };

  const nudge = (dir: 1 | -1, pause = true) => {
    if (pause) pauseAuto();
    const current = normalizeLoopPosition(nearestIndex());
    scrollToIndex(current + dir);
  };

  useEffect(() => {
    scrollToIndex(LOOP_START_INDEX, "auto");
  }, []);

  useEffect(() => {
    if (autoPaused) return;
    const interval = setInterval(() => nudge(1, false), 4500);
    return () => clearInterval(interval);
  }, [autoPaused]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const handleScroll = () => {
      normalizeLoopPosition(nearestIndex());
    };

    wrap.addEventListener("scroll", handleScroll, { passive: true });
    return () => wrap.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  return (
    <section
      id="reviews"
      className="relative scroll-mt-16 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, #1FB6FF 0, transparent 45%), radial-gradient(circle at 85% 80%, #1FB6FF 0, transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          color: "#0a0a0a",
        }}
      />

      <style>{`
          .dg-review-mask {
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
            scroll-padding-left: 0;
          }
          .dg-review-mask::-webkit-scrollbar {
            display: none;
          }
          @media (min-width: 640px) {
            .dg-review-mask {
              mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
            }
          }
        `}</style>

      <div className="relative mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem]">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 text-[12px] font-bold uppercase tracking-[0.3em] text-sky sm:text-[13px]">
            Loved by Customers
          </span>
          <h2 className="pb-1 font-display text-[clamp(1.9rem,7vw,4.75rem)] font-black uppercase leading-[1.08] tracking-tight text-ink text-balance">
            Real customers.
            <br />
            <span className="text-sky">Real reviews.</span>
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 leading-normal">
            <Stars rating={4.5} size={22} />
            <span className="text-sm font-semibold leading-normal text-ink/70">4.5 out of 5 · 647 global ratings</span>
          </div>
        </div>

        <div
          ref={wrapRef}
          className="dg-review-mask relative overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory px-1"
          onPointerDown={pauseAuto}
          onWheel={pauseAuto}
        >
          <div className="flex w-max gap-4 py-2 sm:gap-5">
            {LOOP_REVIEWS.map((r, i) => (
              <article
                key={`${r.name}-${i}`}
                ref={(node) => { cardRefs.current[i] = node; }}
                className="snap-start scroll-ml-0 flex w-[88vw] max-w-[420px] shrink-0 flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-5 sm:w-[420px] sm:p-6"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold leading-normal text-ink">{r.name}</span>
                  <VerifiedBadge />
                </div>
                <Stars rating={r.rating} size={16} />
                <h3 className="pb-0.5 font-sans text-[15px] font-bold leading-[1.35] text-ink">{r.title}</h3>
                <p className="text-xs leading-normal text-ink/50">{r.date}</p>
                <p className="text-[14px] leading-relaxed text-ink/80">{r.body}</p>
                {r.helpful && (
                  <p className="mt-auto pt-2 text-xs leading-normal text-ink/50">{r.helpful}</p>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Previous review"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-white text-ink shadow-sm transition-colors hover:bg-ink hover:text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Next review"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-white text-ink shadow-sm transition-colors hover:bg-ink hover:text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.amazon.com/dp/B003YTUWJ8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-colors hover:bg-ink/90 sm:px-8"
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
