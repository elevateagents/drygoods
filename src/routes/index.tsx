import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import AmazonReviewsSection from "@/components/site/AmazonReviewsSection";
import { useCart } from "@/lib/cart-store";
import {
  Wind, Clock, Droplets, Sparkles, ShieldCheck, Leaf, Award, Flag,
  Star, ShoppingCart, ExternalLink, RotateCcw, CheckCircle2,
  Target, Snowflake, Plus, Mail, XCircle,
} from "lucide-react";
import golfer from "@/assets/hero-golf.png.asset.json";
import productImg from "@/assets/product-white.png.asset.json";
import raceLine from "@/assets/race-line.png.asset.json";
import runnersBanner from "@/assets/runners-banner.png.asset.json";
import runnersOnly from "@/assets/runners-only.jpg.asset.json";
import skinTypes from "@/assets/skin-types.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dry+Goods™ Athletic — Stop Chafing & Blisters" },
      { name: "description", content: "The fastest way to prevent chafing. Patented 360° spray-to-powder. 8–12 hrs protection. Talc Free. Dermatologist Approved. Made in USA." },
      { name: "keywords", content: "anti chafing spray, athletic powder, dry+goods, prevent blisters, prevent chafing, dry+goods, talc free powder, athletes spray" },
      { property: "og:title", content: "Dry+Goods™ — The fastest way to prevent chafing." },
      { property: "og:description", content: "Patented dry+goods. 360° valve. 8–12 hours of protection. No mess." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://drygoods.lovable.app/" },
      { property: "og:image", content: productImg.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dry+Goods™ — The fastest way to prevent chafing." },
      { name: "twitter:description", content: "Patented dry+goods. 360° valve. 8–12 hours of protection. No mess." },
      { name: "twitter:image", content: productImg.url },
    ],
    links: [
      { rel: "canonical", href: "https://drygoods.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Dry+Goods™ Athletic",
          description: "Patented 360° spray-to-powder. Prevents chafing and blisters for 8–12 hours. Talc-free, dermatologist approved, made in USA.",
          brand: { "@type": "Brand", name: "Dry+Goods" },
          image: [productImg.url],
          sku: "DG-5.4OZ",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "200" },
          offers: {
            "@type": "Offer",
            url: "https://drygoods.lovable.app/#buy",
            priceCurrency: "USD",
            price: "19.99",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});


function HomePage() {
  return (
    <Layout>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Benefits />
      <SkinTypes />
      <Buy />
      <AmazonReviewsSection />
      <Ingredients />
      <FAQ />
      <FinalCTA />
    </Layout>
  );
}

/* --------------------------------- HERO ---------------------------------- */
function Hero() {
  const { add } = useCart();
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink text-white">
      {/* Background image — visible, no longer hidden behind text */}
      <div className="absolute inset-0">
        <img
          src={golfer.url}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[85%_30%] sm:object-[80%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/60" />
        <div className="absolute inset-0 bg-ink/45" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 min-h-[80vh] flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mx-auto max-w-3xl"
        >
          <span className="inline-block px-3 py-1 bg-sky text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-full mb-5">
            New · Patented Formula
          </span>
          <h1 className="font-display font-black uppercase tracking-tight leading-[0.95] text-[clamp(36px,7vw,76px)]">
            Meet the <span className="text-sky">fastest way</span> to prevent chafing.
          </h1>
          <p className="mt-5 text-lg sm:text-xl font-bold text-white/95">
            Never miss another workout.
          </p>
          <p className="mt-4 text-base sm:text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
            Dry+Goods™ stops chafing and blisters in seconds with one spray. No mess. No residue.
            8–12 hours of protection.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => add("onetime", 1)}
              className="inline-flex items-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white px-8 py-4 font-bold text-base uppercase tracking-widest rounded-full shadow-lg shadow-sky/30"
            >
              Shop Now <ShoppingCart className="size-4" />
            </button>
            <a href="#buy" className="text-sm font-bold uppercase tracking-widest text-white/90 hover:text-sky underline-offset-4 hover:underline">
              See Details →
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/80">
            <Stars />
            <span className="font-semibold">Trusted by athletes since day one</span>
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

/* --------------------------- PROBLEM / SOLUTION --------------------------- */
function ProblemSolution() {
  return (
    <section id="why" className="bg-paper py-20 sm:py-24 md:py-28 px-5 sm:px-6 lg:px-8 border-t border-ink/5 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Problem · Solution</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(30px,5vw,52px)] leading-[1] text-ink">
            Why dry+goods beat <span className="text-sky">the bottle.</span>
          </h2>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            Traditional powders cake on skin, dust the air, miss the spots that need protection most,
            and leave white residue on your gear. Dry+Goods™ fixes every one of those problems.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Old way */}
          <div className="rounded-2xl border border-ink/10 bg-white p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-ink/50">The old way</p>
            <h3 className="mt-2 font-display font-black uppercase tracking-tight text-2xl text-ink">Bottle powder</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink/80">
              {[
                "Cakes & clumps on sweaty skin",
                "Dust cloud — gets everywhere",
                "Can't reach the back or between toes",
                "White residue stains gear & clothes",
                "Reapply constantly",
              ].map(x => (
                <li key={x} className="flex items-start gap-2.5">
                  <XCircle className="size-5 text-ink/40 shrink-0 mt-0.5" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* New way */}
          <div className="rounded-2xl border-2 border-sky bg-sky-soft p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-deep">Dry+Goods™</p>
            <h3 className="mt-2 font-display font-black uppercase tracking-tight text-2xl text-ink">Patented dry+goods</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink/85">
              {[
                "Sprays on wet — dries to powder instantly",
                "Zero cloud · zero mess",
                "360° valve reaches anywhere, even upside down",
                "No white residue · won't stain",
                "One spray = 8–12 hours of protection",
              ].map(x => (
                <li key={x} className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-5 text-sky shrink-0 mt-0.5" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ HOW IT WORKS ------------------------------ */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Shake the can", b: "Wakes up the patented spray-to-powder formula." },
    { n: "02", t: "Spray any angle", b: "360° valve sprays right-side up, sideways, even upside down." },
    { n: "03", t: "Wet to dry in seconds", b: "Hits skin cool and wet — dries to a fine powder on contact." },
    { n: "04", t: "Move freely", b: "8–12 hours of friction-free, blister-free protection." },
  ];
  return (
    <section className="bg-ink text-white py-20 sm:py-24 md:py-28 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">How it works</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(30px,5vw,52px)] leading-[1]">
            The <span className="text-sky">360° spray</span> mechanism.
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed">
            Our patented valve releases an ultra-fine liquid that flash-dries to powder on skin.
            Spray any direction — including upside down — and reach the spots a bottle can't.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-sky hover:bg-white/10 transition-colors"
            >
              <p className="font-display font-black text-sky text-3xl tracking-tight">{s.n}</p>
              <h3 className="mt-3 font-bold text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- BENEFITS --------------------------------- */
function Benefits() {
  const items = [
    { icon: Target, t: "Targeted Application", b: "No mess. No waste." },
    { icon: RotateCcw, t: "Easy to Use", b: "360° spray valve means you can spray upside down." },
    { icon: Snowflake, t: "Cool & Dry", b: "Instant relief cooling effect." },
    { icon: Clock, t: "Durable", b: "Long-lasting protection from moisture & friction." },
    { icon: ShieldCheck, t: "Skin-Safe", b: "Non-Asbestos Talc. Safe and effective on all skin types." },
  ];
  return (
    <section className="bg-sky py-16 sm:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {items.map((it) => (
            <div key={it.t} className="text-center text-white p-6">
              <it.icon className="mx-auto size-12 mb-5" strokeWidth={1.8} />
              <h3 className="font-bold text-sm sm:text-base">{it.t}</h3>
              <p className="mt-2 text-xs sm:text-sm text-white/90 leading-snug">{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- ABOUT ---------------------------------
   Moved to its own page at /about — see src/routes/about.tsx
--------------------------------------------------------------------------- */


function SkinTypes() {
  return (
    <section className="bg-paper pb-16 sm:pb-20 md:pb-24 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Whole-body protection</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(28px,4.5vw,48px)] leading-[1] text-ink">
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
          <img src={skinTypes.url} alt="Body diagram showing all areas Dry+Goods protects" loading="lazy" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- BUY ---------------------------------- */
function Buy() {
  const { add } = useCart();
  const selected = { price: 19.99 };
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
    <section className="bg-sky-soft/40 py-20 sm:py-24 md:py-32 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Get Yours</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(32px,5vw,56px)] leading-[1] text-ink">
            One spray. <span className="text-sky">All day dry.</span>
          </h2>
        </div>

        <div id="buy" className="scroll-mt-24 grid md:grid-cols-2 gap-8 lg:gap-16 items-center bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl shadow-sky/10">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-sky-soft flex items-center justify-center p-6 sm:p-8">
            <img src={productImg.url} alt="Dry+Goods Athletic 5.4 oz can" loading="lazy" className="max-w-full max-h-full w-auto h-auto object-contain" />
            <span className="absolute top-4 left-4 bg-ink text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">In Stock</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Stars />
              <span className="text-xs font-semibold text-ink/60 uppercase tracking-widest">Athlete Approved</span>
            </div>
            <h3 className="mt-3 font-display font-black uppercase tracking-tight text-3xl sm:text-4xl leading-[1.05] text-ink">
              Dry+Goods™<br />Athletic
            </h3>
            <p className="mt-2 text-ink/70">5.4 oz · The fastest way to prevent chafing.</p>
            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-display font-black text-5xl text-ink">${selected.price.toFixed(2)}</span>
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
            <div className="mt-6 space-y-3">
              <button onClick={() => add("onetime", 1)} className="w-full inline-flex items-center justify-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white py-5 text-base font-bold uppercase tracking-widest rounded-full shadow-lg shadow-sky/30 active:scale-[0.99]">
                <ShoppingCart className="size-5" />
                Add to Cart — ${selected.price.toFixed(2)}
              </button>
              <a href="https://www.amazon.com/dp/B003YTUWJ8" target="_blank" rel="noreferrer noopener" className="w-full inline-flex items-center justify-center gap-2 border-2 border-ink/80 text-ink hover:bg-ink hover:text-white transition-colors py-4 text-sm font-bold uppercase tracking-widest rounded-full">
                Also on Amazon <ExternalLink className="size-4" />
              </a>
            </div>

          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {badges.map((b) => (
            <div key={b.label} className="inline-flex items-center gap-2 bg-white border border-ink/10 text-ink rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest">
              <b.icon className="size-3.5 text-sky" />
              {b.label}
            </div>
          ))}
        </div>

        {/* Built-for strip */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <img src={raceLine.url} alt="Dry+Goods at the starting line of a road race" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-display font-black uppercase tracking-tight text-white text-2xl">At the start line.</p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <img src={runnersOnly.url} alt="Runners in motion" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-display font-black uppercase tracking-tight text-white text-2xl">Across every mile.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


/* --------------------------------- REVIEWS -------------------------------- */
function Reviews() {
  const reviews = [
    { quote: "This spray has been a revelation — sprays upside down, won't clog. More affordable and effective than big-name brands.", name: "ClutchPin", meta: "Verified Customer" },
    { quote: "Used on my athletes with 100% success and satisfaction every time. Can't recommend it enough.", name: "Angie", meta: "20+ year customer" },
    { quote: "My husband works construction sweating all day and has ZERO chafing while using this.", name: "Kendra", meta: "Verified Customer" },
  ];
  return (
    <section id="reviews" className="bg-paper py-20 sm:py-24 md:py-32 px-5 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Reviews</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(32px,5vw,56px)] leading-[1] text-ink">
            What athletes say.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.figure key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white border border-ink/10 rounded-2xl p-7 flex flex-col hover:border-sky hover:shadow-xl hover:shadow-sky/10 transition-all">
              <Stars />
              <blockquote className="mt-4 text-ink/85 leading-relaxed flex-1">"{r.quote}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ink/10">
                <p className="font-bold text-ink">— {r.name}</p>
                <p className="text-xs uppercase tracking-widest text-ink/55 mt-1">{r.meta}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------- INGREDIENTS & PATENT ----------------------------- */
function Ingredients() {
  return (
    <section className="bg-ink text-white py-20 sm:py-24 px-5 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Product details</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(22px,4.5vw,48px)] leading-[1.05] break-words hyphens-auto">
            Patented. <span className="text-sky">Talc-free.</span> Dermatologist approved.
          </h2>

          <p className="mt-5 text-white/75 leading-relaxed">
            Dry+Goods™ is built on a US-patented spray-to-powder mechanism that delivers an ultra-fine
            mist that dries instantly on skin. Every can is formulated and assembled in the USA.
          </p>
          <dl className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <dt className="font-bold uppercase tracking-widest text-sky text-[11px]">Size</dt>
              <dd className="mt-1">5.4 oz / 153 g</dd>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <dt className="font-bold uppercase tracking-widest text-sky text-[11px]">Patent</dt>
              <dd className="mt-1">US Patented 360° valve technology</dd>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <dt className="font-bold uppercase tracking-widest text-sky text-[11px]">Key ingredients</dt>
              <dd className="mt-1">Aluminum starch octenylsuccinate, isobutane, dimethyl ether, fragrance</dd>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <dt className="font-bold uppercase tracking-widest text-sky text-[11px]">Free from</dt>
              <dd className="mt-1">Talc-free · Asbestos-free · Cruelty-free</dd>
            </div>
          </dl>
        </div>

      </div>
    </section>
  );
}

/* ------------------------------------ FAQ --------------------------------- */
function FAQ() {
  const faqs = [
    { q: "How long does one spray last?", a: "One application delivers 8–12 hours of chafe and blister protection — typically enough for a full workout, long run, or shift." },
    { q: "Will it stain my clothes or gear?", a: "No. Dry+Goods™ dries to a fine powder on contact and won't leave white residue on skin or fabric." },
    { q: "Is it safe for sensitive skin?", a: "Yes. Our formula is talc-free, asbestos-free, and dermatologist approved — safe on all skin types." },
    { q: "Can I spray upside down?", a: "Yes. The patented 360° valve sprays from any angle, including upside down, so you can reach hard-to-cover spots." },
    { q: "Where is it made?", a: "Designed, formulated, and assembled in the USA." },
    { q: "What is the return policy?", a: "30-day satisfaction guarantee. If it's not for you, email us for a free return." },
  ];
  return (
    <section className="bg-paper py-20 sm:py-24 md:py-28 px-5 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">FAQ</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(30px,5vw,52px)] leading-[1] text-ink">
            Questions, <span className="text-sky">answered.</span>
          </h2>
        </div>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer flex items-start justify-between gap-4 list-none font-bold text-ink text-lg">
                <span>{f.q}</span>
                <Plus className="size-5 shrink-0 mt-1 text-sky transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-ink/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FINAL CTA -------------------------------- */
function FinalCTA() {
  const { add } = useCart();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus("err");
      return;
    }
    // TODO: wire to Klaviyo list once API key is added
    setStatus("ok");
    setEmail("");
  }

  return (
    <section className="relative bg-sky text-white py-20 sm:py-24 md:py-28 px-5 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={runnersBanner.url} alt="" aria-hidden className="w-full h-full object-cover" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-display font-black uppercase tracking-tight text-[clamp(32px,5.5vw,60px)] leading-[1]">
          Ready to stop chafing for good?
        </h2>
        <p className="mt-5 text-lg text-white/90 max-w-xl mx-auto">
          Join the athletes who never train without Dry+Goods™. Get 10% off your first can when you join the list.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => add("onetime", 1)}
            className="inline-flex items-center gap-2 bg-white text-sky-deep hover:bg-ink hover:text-white transition-colors px-8 py-4 font-bold text-base uppercase tracking-widest rounded-full shadow-lg"
          >
            <ShoppingCart className="size-5" /> Shop Dry+Goods — $19.99
          </button>
        </div>

        <form onSubmit={onSubmit} className="mt-10 max-w-md mx-auto">
          <label className="text-xs font-bold uppercase tracking-[0.25em] text-white/90 flex items-center justify-center gap-2 mb-3">
            <Mail className="size-4" /> Get 10% off — join the list
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
              placeholder="you@email.com"
              className="flex-1 rounded-full px-5 py-3 text-ink placeholder-ink/40 bg-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="rounded-full bg-ink text-white px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors">
              Subscribe
            </button>
          </div>
          {status === "ok" && <p className="mt-3 text-sm text-white">Thanks! Check your inbox for your code.</p>}
          {status === "err" && <p className="mt-3 text-sm text-white/90">Please enter a valid email.</p>}
        </form>
      </div>
    </section>
  );
}
