import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { useCart } from "@/lib/cart-store";
import {
  Wind, Clock, Droplets, Sparkles, ShieldCheck, Leaf, Award, Flag,
  Star, ShoppingCart, ExternalLink, RotateCcw, CheckCircle2,
} from "lucide-react";
import golfer from "@/assets/hero-golf.png.asset.json";
import productImg from "@/assets/product-white.png.asset.json";
import raceLine from "@/assets/race-line.png.asset.json";
import runnersBanner from "@/assets/runners-banner.png.asset.json";
import skinTypes from "@/assets/skin-types.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dry Goods™ Athletic Spray Powder — Stop Chafing & Blisters" },
      { name: "description", content: "The fastest way to prevent chafing. 360° spray powder. 8–12 hrs protection. Talc Free. Dermatologist Approved. Made in USA." },
      { property: "og:title", content: "Dry Goods™ — The fastest way to prevent chafing." },
      { property: "og:description", content: "Patented spray powder. 360° valve. 8–12 hours of protection. No mess." },
      { property: "og:image", content: golfer.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: golfer.url },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Why />
      <SkinTypes />
      <Buy />
      <Reviews />
    </Layout>
  );
}

function SkinTypes() {
  return (
    <section className="bg-paper py-16 sm:py-20 md:py-24 px-5 sm:px-6 lg:px-8 border-t border-ink/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Whole-body protection</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(30px,4.5vw,52px)] leading-[1] text-ink">
            Safe on <span className="text-sky">all skin types.</span>
          </h2>
          <ul className="mt-6 space-y-3 text-ink/80">
            <li>• Avoid underarm irritation</li>
            <li>• Stop nipple &amp; bra-line chafing</li>
            <li>• Reduce moisture under gloves</li>
            <li>• Prevent inner thigh &amp; groin chafing</li>
            <li>• Foot moisture &amp; odor control</li>
            <li>• Blister prevention between toes</li>
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden bg-white">
          <img src={skinTypes.url} alt="Body diagram showing all areas Dry Goods protects" loading="lazy" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- SECTION 1: HERO ---------------------------- */
function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[88vh] md:min-h-[92vh] flex items-end overflow-hidden bg-ink">
      <img
        src={golfer.url}
        alt="Golfer silhouette at sunset"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-28 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 bg-sky text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-full mb-5">
            New · Patented Formula
          </span>
          <h1 className="font-display font-black uppercase tracking-tight leading-[0.95] text-[clamp(38px,8vw,84px)]">
            Meet the <span className="text-sky">fastest way</span> to prevent chafing.
          </h1>
          <p className="mt-5 text-xl sm:text-2xl font-bold text-white/95">
            Never miss another workout.
          </p>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Chafing and blisters sideline more athletes than injuries do. Dry Goods™ stops both — in seconds —
            with one spray. No mess. No residue. 8–12 hours of protection.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#buy"
              className="inline-flex items-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white px-8 py-4 font-bold text-base uppercase tracking-widest rounded-full shadow-lg shadow-sky/30"
            >
              Shop Now
              <ShoppingCart className="size-4" />
            </a>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Stars />
              <span className="font-semibold">Trusted by athletes since day one</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-sky text-sky" />
      ))}
    </div>
  );
}

/* ---------------------------- SECTION 2: WHY ------------------------------ */
function Why() {
  const benefits = [
    { icon: ShieldCheck, t: "Stops chafing & blisters", b: "Patented spray-to-powder armor — before they happen." },
    { icon: Clock, t: "8–12 hours of protection", b: "One spray. Full workout. No reapplying." },
    { icon: RotateCcw, t: "360° spray valve", b: "Any angle, including upside down. Reach anywhere." },
    { icon: Wind, t: "Instant cooling", b: "Goes on cool. Dries on contact. No powder cloud." },
    { icon: Droplets, t: "Zero mess", b: "Won't stain clothes. No residue. No cleanup." },
    { icon: Sparkles, t: "Clean formula", b: "Talc-Free. Dermatologist approved. Made in USA." },
  ];

  const credentials = [
    { icon: Leaf, label: "Talc Free" },
    { icon: ShieldCheck, label: "Dermatologist Approved" },
    { icon: Flag, label: "Made in USA" },
    { icon: Award, label: "US Patented" },
  ];

  return (
    <section id="why" className="bg-paper py-20 sm:py-24 md:py-32 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Why Dry Goods?</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(32px,5vw,56px)] leading-[1] text-ink">
            Not a stick. Not a cream. A <span className="text-sky">patented spray powder</span>.
          </h2>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            Goes on clean, dries instantly, 8–12 hours protection. A 360° spray valve reaches anywhere
            including upside down — no powder cloud, no mess.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-white border border-ink/10 rounded-2xl p-6 hover:border-sky hover:shadow-xl hover:shadow-sky/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="size-12 grid place-items-center rounded-xl bg-sky-soft text-sky group-hover:bg-sky group-hover:text-white transition-colors">
                <b.icon className="size-6" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 font-bold text-lg text-ink">{b.t}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{b.b}</p>
            </motion.div>
          ))}
        </div>

        {/* Credentials strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {credentials.map((c) => (
            <div key={c.label} className="flex items-center gap-2 justify-center bg-sky-soft text-sky-deep rounded-full px-4 py-3 text-xs sm:text-sm font-bold uppercase tracking-widest">
              <c.icon className="size-4 shrink-0" />
              <span>{c.label}</span>
            </div>
          ))}
        </div>

        {/* Who it's for */}
        <div className="mt-20 grid md:grid-cols-2 gap-5">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <img src={raceLine.url} alt="Dry Goods can at the starting line of a road race" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-display font-black uppercase tracking-tight text-white text-2xl">At the start line.</p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <img src={runnersBanner.url} alt="Runners in motion" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-display font-black uppercase tracking-tight text-white text-2xl">Across every mile.</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border-2 border-sky bg-sky-soft px-6 py-6 sm:py-7 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-deep mb-2">Built for</p>
          <p className="font-display text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-ink leading-tight">
            Runners. Cyclists. Golfers. Gym-goers.<br className="hidden sm:block" /> Construction workers. <span className="text-sky">Anyone who sweats.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- SECTION 3: BUY ------------------------------ */
function Buy() {
  const { add } = useCart();

  const bullets = [
    "Patented 360° spray-to-powder formula",
    "8–12 hours of chafe & blister protection",
    "Instant cooling · Zero mess · Won't stain",
    "Talc-Free · Dermatologist Approved · Made in USA",
  ];

  const badges = [
    { icon: Star, label: "★★★★★ Reviews" },
    { icon: Flag, label: "Made in USA" },
    { icon: ShieldCheck, label: "Dermatologist Approved" },
    { icon: Leaf, label: "Talc Free" },
    { icon: Award, label: "US Patented" },
    { icon: RotateCcw, label: "Free Returns" },
  ];

  return (
    <section id="buy" className="bg-sky-soft/40 py-20 sm:py-24 md:py-32 px-5 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Get Yours</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(32px,5vw,56px)] leading-[1] text-ink">
            One spray. <span className="text-sky">All day dry.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl shadow-sky/10">
          {/* Product image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-sky-soft">
            <img
              src={productImg.url}
              alt="Dry Goods Athletic Spray Powder 5.4 oz can"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-ink text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              In Stock
            </span>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-2">
              <Stars />
              <span className="text-xs font-semibold text-ink/60 uppercase tracking-widest">Athlete Approved</span>
            </div>
            <h3 className="mt-3 font-display font-black uppercase tracking-tight text-3xl sm:text-4xl leading-[1.05] text-ink">
              Dry Goods™ Athletic<br />Spray Powder
            </h3>
            <p className="mt-2 text-ink/70">5.4 oz · The fastest way to prevent chafing.</p>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-display font-black text-5xl text-ink">$19.99</span>
              <span className="text-sm text-ink/60">Free shipping over $35</span>
            </div>

            <ul className="mt-6 space-y-2.5">
              {bullets.map(b => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-ink/80">
                  <CheckCircle2 className="size-5 text-sky shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 space-y-3">
              <button
                onClick={() => add("onetime", 1)}
                className="w-full inline-flex items-center justify-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white py-5 text-base font-bold uppercase tracking-widest rounded-full shadow-lg shadow-sky/30 active:scale-[0.99]"
              >
                <ShoppingCart className="size-5" />
                Add to Cart — $19.99
              </button>
              <a
                href="https://www.amazon.com/dp/B003YTUWJ8"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full inline-flex items-center justify-center gap-2 border-2 border-ink/80 text-ink hover:bg-ink hover:text-white transition-colors py-4 text-sm font-bold uppercase tracking-widest rounded-full"
              >
                Also on Amazon
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {badges.map((b) => (
            <div key={b.label} className="inline-flex items-center gap-2 bg-white border border-ink/10 text-ink rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest">
              <b.icon className="size-3.5 text-sky" />
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- SECTION 4: REVIEWS ---------------------------- */
function Reviews() {
  const reviews = [
    {
      quote: "This spray has been a revelation — sprays upside down, won't clog. More affordable and effective than big-name brands.",
      name: "ClutchPin",
      meta: "Verified Customer",
    },
    {
      quote: "Used on my athletes with 100% success and satisfaction every time. Can't recommend it enough.",
      name: "Angie",
      meta: "20+ year customer",
    },
    {
      quote: "My husband works construction sweating all day and has ZERO chafing while using this.",
      name: "Kendra",
      meta: "Verified Customer",
    },
  ];

  return (
    <section id="reviews" className="bg-paper py-20 sm:py-24 md:py-32 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Reviews</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(32px,5vw,56px)] leading-[1] text-ink">
            What athletes say.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-ink/10 rounded-2xl p-7 flex flex-col hover:border-sky hover:shadow-xl hover:shadow-sky/10 transition-all"
            >
              <Stars />
              <blockquote className="mt-4 text-ink/85 leading-relaxed flex-1">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ink/10">
                <p className="font-bold text-ink">— {r.name}</p>
                <p className="text-xs uppercase tracking-widest text-ink/55 mt-1">{r.meta}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#buy"
            className="inline-flex items-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white px-8 py-4 font-bold text-sm uppercase tracking-widest rounded-full shadow-lg shadow-sky/30"
          >
            Get Your Can — $19.99
            <ShoppingCart className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
