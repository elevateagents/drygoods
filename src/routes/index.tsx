import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import AmazonReviewsSection from "@/components/site/AmazonReviewsSection";
import { useCart } from "@/lib/cart-store";
import {
  Clock, ShieldCheck, Leaf, Award, Flag,
  ShoppingCart, ExternalLink, RotateCcw, CheckCircle2,
  Target, Snowflake, Plus, XCircle, Sparkles, Zap,
} from "lucide-react";
import golfer from "@/assets/hero-golf-sunset.png.asset.json";
import productImg from "@/assets/product-white.png.asset.json";
import skinTypes from "@/assets/skin-types.png.asset.json";
import pickleballPaddle from "@/assets/about-pickleball-paddle.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DryGoods™ Athletic — Prevent Chafing & Blisters" },
      { name: "description", content: "The fastest way to prevent chafing. Patented 360° spray-to-powder. 8–12 hrs protection. Talc Free. Dermatologist Approved. Made in USA." },
      { name: "keywords", content: "anti chafing spray, athletic powder, drygoods, prevent blisters, prevent chafing, talc free powder" },
      { property: "og:title", content: "DryGoods™ — The fastest way to prevent chafing." },
      { property: "og:description", content: "Patented 360° spray-to-powder valve. 8–12 hours of protection. No mess." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://drygoods.lovable.app/" },
      { property: "og:image", content: productImg.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "DryGoods™ — The fastest way to prevent chafing." },
      { name: "twitter:description", content: "Patented 360° spray-to-powder valve. 8–12 hours of protection. No mess." },
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
          name: "DryGoods™ Athletic",
          description: "Patented 360° spray-to-powder. Prevents chafing and blisters for 8–12 hours. Talc-free, dermatologist approved, made in USA.",
          brand: { "@type": "Brand", name: "DryGoods" },
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
      <Introducing />
      <ProblemSolution />
      <HowItWorks />
      <Benefits />
      <SkinTypes />
      <Buy />
      <AmazonReviewsSection />
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
      <div className="absolute inset-0">
        <img
          src={golfer.url}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[center_30%]"
        />
        {/* Stronger top wash for nav contrast */}
        <div className="absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-ink/95 via-ink/65 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-ink/55 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 md:pt-28 lg:pt-32 pb-12 min-h-[95vh] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mx-auto max-w-3xl"
        >
          <span className="inline-block px-3 py-1 bg-sky text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-full mb-5">
            New · Patented Formula
          </span>
          <h1 className="font-display font-black uppercase tracking-tight leading-[0.95] text-[clamp(36px,7vw,76px)] [text-shadow:0_2px_16px_rgba(0,0,0,0.45)]">
            Meet the <span className="text-sky">fastest way</span> to prevent chafing.
          </h1>
          <p className="mt-5 text-lg sm:text-xl font-bold text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]">
            Never miss another workout.
          </p>
          <p className="mt-4 text-base sm:text-lg text-white max-w-xl mx-auto leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]">
            DryGoods™ prevents chafing and blisters in seconds with one spray. No mess. No residue.
            8–12 hours of protection.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => add("onetime", 1)}
              className="inline-flex items-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white px-8 py-4 font-bold text-base uppercase tracking-widest rounded-full shadow-lg shadow-sky/30"
            >
              Shop Now <ShoppingCart className="size-4" />
            </button>
            <a href="#buy" className="text-sm font-bold uppercase tracking-widest text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.6)] hover:text-sky underline-offset-4 hover:underline">
              See Details →
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]">
            <span className="font-semibold">Trusted by customers since 2010</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- INTRODUCING ------------------------------- */
function Introducing() {
  return (
    <section id="introducing" className="bg-white py-20 sm:py-24 md:py-28 px-5 sm:px-6 lg:px-8 border-t border-ink/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-sky-soft flex items-center justify-center">
          <img src={productImg.url} alt="DryGoods Athletic can" loading="lazy" className="w-[90%] h-[90%] object-contain" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Introducing DryGoods™</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(30px,5vw,52px)] leading-[1] text-ink">
            A new kind of <span className="text-sky">anti-chafe spray.</span>
          </h2>
          <p className="mt-5 text-lg text-ink/75 leading-relaxed">
            DryGoods™ Athletic is a patented spray that goes on wet and instantly dries to a fine, invisible powder.
            One quick spray creates a smooth, moisture-wicking barrier that keeps your skin dry and friction-free —
            all day, no mess, no residue.
          </p>
          <ul className="mt-6 space-y-3 text-ink/85">
            <li className="flex items-start gap-3">
              <Sparkles className="size-5 text-sky shrink-0 mt-0.5" />
              <span><strong>Wet-to-powder formula</strong> — sprays on cool, dries instantly.</span>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="size-5 text-sky shrink-0 mt-0.5" />
              <span><strong>360° patented valve</strong> — reaches anywhere, even upside down.</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="size-5 text-sky shrink-0 mt-0.5" />
              <span><strong>Talc-free & dermatologist approved</strong> — safe on all skin types.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- PROBLEM / SOLUTION --------------------------- */
function ProblemSolution() {
  return (
    <section id="why" className="bg-paper py-20 sm:py-24 md:py-28 px-5 sm:px-6 lg:px-8 border-t border-ink/5 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Why it exists</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(30px,5vw,52px)] leading-[1] text-ink">
            The problem with <span className="text-sky">old-school powder.</span>
          </h2>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            Traditional powders cake on skin, dust the air, miss the spots that need protection most,
            and leave white residue on your gear. DryGoods™ fixes every one of those problems.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
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
          <div className="rounded-2xl border-2 border-sky bg-sky-soft p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-deep">DryGoods™</p>
            <h3 className="mt-2 font-display font-black uppercase tracking-tight text-2xl text-ink">Patented spray-to-powder</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink/85">
              {[
                "Sprays on wet — dries to powder instantly",
                "Zero cloud · zero mess",
                "360° valve reaches anywhere, even upside down",
                "No white residue · won't stain",
                "One application = 8–12 hours of protection",
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
    { icon: RotateCcw, t: "Easy to Use", b: "360° spray valve — works upside down." },
    { icon: Snowflake, t: "Cool & Dry", b: "Instant cooling on contact." },
    { icon: Clock, t: "Long-Lasting", b: "8–12 hours of friction protection." },
    { icon: ShieldCheck, t: "Skin-Safe", b: "Talc-free. Safe on all skin types." },
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

/* ------------------------------ SKIN TYPES -------------------------------- */
function SkinTypes() {
  return (
    <section className="bg-paper pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 px-5 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Whole-body protection</span>
        <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(28px,4.5vw,48px)] leading-[1] text-ink">
          Safe on <span className="text-sky">all skin types.</span>
        </h2>
        <div className="mt-8 rounded-2xl overflow-hidden bg-white">
          <img src={skinTypes.url} alt="Body diagram showing all areas DryGoods protects" loading="lazy" className="w-full h-auto" />
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
    { icon: Flag, label: "Made in USA" },
    { icon: ShieldCheck, label: "Dermatologist Approved" },
    { icon: Leaf, label: "Talc Free" },
    { icon: Award, label: "US Patented" },
    { icon: RotateCcw, label: "Free Returns" },
  ];
  return (
    <section className="bg-sky-soft/40 py-16 sm:py-24 md:py-32 px-3 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto min-w-0">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Get Yours</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(32px,5vw,56px)] leading-[1] text-ink">
            One spray. <span className="text-sky">All day dry.</span>
          </h2>
        </div>

        <div id="buy" className="scroll-mt-24 grid min-w-0 md:grid-cols-2 gap-6 lg:gap-16 items-center bg-white rounded-3xl p-4 sm:p-10 lg:p-14 shadow-xl shadow-sky/10 overflow-hidden">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-sky-soft flex items-center justify-center p-2 sm:p-3">
            <img src={productImg.url} alt="DryGoods Athletic 5.4 oz can" loading="lazy" className="w-full h-full object-contain" />
            <span className="absolute top-4 left-4 bg-ink text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">In Stock</span>
          </div>
          <div className="min-w-0">
            <h3 className="font-sans font-bold tracking-tight text-[clamp(24px,5.5vw,36px)] leading-[1.1] text-ink break-words">
              DryGoods™ Athletic
            </h3>
            <p className="mt-2 max-w-full text-sm sm:text-base text-ink/70 leading-relaxed break-words">5.4 oz · The fastest way to prevent chafing.</p>
            <div className="mt-5 grid min-w-0 gap-1 sm:flex sm:flex-wrap sm:items-baseline sm:gap-x-3">
              <span className="font-sans font-bold text-4xl sm:text-5xl text-ink leading-none">${selected.price.toFixed(2)}</span>
              <span className="text-xs sm:text-sm text-ink/60 leading-snug break-words">Free shipping over $35</span>
            </div>
            <ul className="mt-6 space-y-2.5">
              {bullets.map(b => (
                <li key={b} className="flex min-w-0 items-start gap-2.5 text-sm text-ink/80 leading-snug">
                  <CheckCircle2 className="size-5 text-sky shrink-0 mt-0.5" />
                  <span className="min-w-0 break-words">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3">
              <button onClick={() => add("onetime", 1)} className="w-full min-w-0 inline-flex items-center justify-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white px-3 sm:px-4 py-4 sm:py-5 text-[13px] sm:text-base font-bold uppercase tracking-wide sm:tracking-widest rounded-full shadow-lg shadow-sky/30 active:scale-[0.99] leading-tight">
                <ShoppingCart className="size-5 shrink-0" />
                <span className="min-w-0 text-center break-words">Add to Cart — ${selected.price.toFixed(2)}</span>
              </button>
              <a href="https://www.amazon.com/dp/B003YTUWJ8" target="_blank" rel="noreferrer noopener" className="w-full min-w-0 inline-flex items-center justify-center gap-2 border-2 border-ink/80 text-ink hover:bg-ink hover:text-white transition-colors px-3 sm:px-4 py-4 text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-widest rounded-full leading-tight">
                <span className="min-w-0 text-center break-words">Also on Amazon</span> <ExternalLink className="size-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 justify-center gap-2 sm:flex sm:flex-wrap sm:gap-3">
          {badges.map((b) => (
            <div key={b.label} className="min-w-0 inline-flex items-center justify-center gap-1.5 bg-white border border-ink/10 text-ink rounded-full px-2.5 sm:px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wide sm:tracking-widest leading-tight text-center">
              <b.icon className="size-3.5 text-sky shrink-0" />
              <span className="min-w-0 break-words">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ FAQ --------------------------------- */
function FAQ() {
  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: "What's in DryGoods™? (Key Ingredients)",
      a: (
        <div className="space-y-4">
          <p>Every ingredient earns its place. Here's what's doing the work:</p>
          <div>
            <p className="font-bold text-ink">Arrowroot Extract</p>
            <p>A plant-derived powder that pulls moisture from skin on contact.</p>
          </div>
          <div>
            <p className="font-bold text-ink">Zinc Oxide</p>
            <p>A skin-protective mineral that calms irritation and creates a barrier against friction.</p>
          </div>
          <div>
            <p className="font-bold text-ink">Menthol</p>
            <p>Activates the skin's cold receptors for an immediate, lasting cooling sensation.</p>
          </div>
        </div>
      ),
    },
    { q: "Is it patented?", a: "Yes. DryGoods™ is built on a US-patented 360° spray-to-powder valve that delivers an ultra-fine mist and dries instantly on skin." },
    { q: "Where is it made?", a: "Designed, formulated, and assembled in the USA." },
    { q: "Is it talc-free?", a: "Yes. Talc-free, asbestos-free, and cruelty-free — dermatologist approved and safe for all skin types." },
    { q: "Will it stain my clothes or gear?", a: "No. DryGoods™ dries to a fine powder on contact and won't leave white residue on skin or fabric." },
    { q: "Can I spray upside down?", a: "Yes. The patented 360° valve sprays from any angle, including upside down, so you can reach hard-to-cover spots." },
    { q: "What is the return policy?", a: "30-day satisfaction guarantee. If it's not for you, email us for a free return." },
    { q: "How long does one application last?", a: "One application provides approximately 8–12 hours of protection, depending on your activity level, sweat, and usage." },
  ];
  return (
    <section id="faq" className="scroll-mt-24 bg-paper py-20 sm:py-24 md:py-28 px-5 sm:px-6 lg:px-8">
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
              <div className="mt-3 text-ink/70 leading-relaxed">{f.a}</div>
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
  return (
    <section className="relative bg-ink text-white py-20 sm:py-24 md:py-32 px-5 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img src={pickleballPaddle.url} alt="" aria-hidden className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">The last word</span>
        <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(34px,6vw,68px)] leading-[1]">
          Stay cool, stay dry. <span className="text-sky">Stay unstoppable.</span>
        </h2>
        <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Don't let discomfort slow down your best performance. Experience the confidence and comfort
          to push your limits every day.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => add("onetime", 1)}
            className="inline-flex items-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white px-8 py-4 font-bold text-base uppercase tracking-widest rounded-full shadow-lg shadow-sky/30"
          >
            <ShoppingCart className="size-5" /> Get DryGoods — $19.99
          </button>
          <a href="#buy" className="inline-flex items-center px-8 py-4 font-bold text-sm uppercase tracking-widest border-2 border-white/40 text-white rounded-full hover:bg-white hover:text-ink transition-colors">
            See Details
          </a>
        </div>
      </div>
    </section>
  );
}
