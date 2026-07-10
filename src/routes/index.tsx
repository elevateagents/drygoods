import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import AmazonReviewsSection from "@/components/site/AmazonReviewsSection";
import { useState } from "react";
import { useCart, PLAN_META, type Plan } from "@/lib/cart-store";
import {
  ShieldCheck,
  ShoppingCart, CheckCircle2,
  Plus, Sparkles, Zap, XCircle,
} from "lucide-react";
import golfer from "@/assets/hero-two-cans-golf-dusk.webp";
import golferMobile from "@/assets/hero-can-golf-dusk.webp";
import productImg from "@/assets/product-white.webp";
import productConcrete from "@/assets/product-concrete.webp";
import pickleballPaddle from "@/assets/about-pickleball-paddle.webp";
import bodyDiagramImg from "@/assets/body-diagram.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dry Goods Athletic Spray Powder — Prevent Chafing & Blisters" },
      { name: "description", content: "The fastest way to prevent chafing. Patented 360° spray-to-powder. 8–12 hrs protection. Dermatologist Approved. Made in USA." },
      { name: "keywords", content: "anti chafing spray, athletic powder, drygoods, prevent blisters, prevent chafing" },
      { property: "og:title", content: "Dry Goods™ — The fastest way to prevent chafing." },
      { property: "og:description", content: "Patented 360° spray-to-powder valve. 8–12 hours of protection. No mess." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://drygoods.lovable.app/" },
      { property: "og:image", content: productImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dry Goods™ — The fastest way to prevent chafing." },
      { name: "twitter:description", content: "Patented 360° spray-to-powder valve. 8–12 hours of protection. No mess." },
      { name: "twitter:image", content: productImg },
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
          name: "Dry Goods Athletic Spray Powder",
          description: "Patented 360° spray-to-powder. Prevents chafing and blisters for 8–12 hours. Dermatologist approved, made in USA.",
          brand: { "@type": "Brand", name: "Dry Goods" },
          image: [productImg],
          sku: "DG-ATH",
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
      <TrustBar />
      <Introducing />
      <ComparisonSection />
      <WhyItExists />
      <PerformanceCardsSection />
      <AmazonReviewsSection />
      <Buy />
      <FAQ />
      <FinalCTA />
    </Layout>
  );
}

/* --------------------------------- HERO ---------------------------------- */
function Hero() {
  const { add } = useCart();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 70]);
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-white md:min-h-screen">
      <div className="absolute inset-0">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <picture>
            <source media="(min-width: 768px)" srcSet={golfer} type="image/webp" />
            <img
              src={golferMobile}
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              decoding="async"
              sizes="100vw"
              className="h-full w-full object-cover object-[center_45%] md:max-lg:object-contain md:max-lg:scale-[1.03] md:max-lg:object-center lg:h-full lg:w-full lg:max-w-none lg:object-[center_57%] xl:object-[center_58%]"
            />
          </picture>
        </motion.div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,13,20,0.9)_0%,rgba(9,13,20,0.52)_36%,rgba(9,13,20,0.28)_62%,rgba(9,13,20,0.55)_100%)]" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] w-full flex-col justify-center px-4 py-24 sm:px-6 sm:py-28 md:min-h-[95vh] md:py-28 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mx-auto flex w-full max-w-[min(100%,74rem)] flex-col items-center text-center"
        >
          <span className="mb-5 inline-block rounded-full bg-sky px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:text-[11px] 2xl:mb-7 2xl:px-4 2xl:py-1.5 2xl:text-[13px]">
            New · Patented Formula
          </span>
          <h1 className="mx-auto max-w-[10ch] text-balance font-display text-[clamp(3rem,15vw,5.4rem)] font-black uppercase leading-[0.9] tracking-tight sm:max-w-[12ch] sm:text-[clamp(3.6rem,10vw,5.8rem)] md:max-w-[13ch] lg:text-[clamp(4.4rem,6.4vw,6.2rem)] [text-shadow:0_2px_16px_rgba(0,0,0,0.45)]">
            <span className="block text-white">One Spray.</span>
            <span className="block text-sky">Cool, Dry &amp;</span>
            <span className="block text-sky">Chafe Free.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[38rem] text-[15px] leading-relaxed text-white/95 sm:text-lg 2xl:mt-8 2xl:max-w-3xl 2xl:text-2xl [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]">
            Dry Goods™ patented spray goes on cool, dries to a powder, and keeps you
            chafe-free for 8–12 hours. No mess. No residue.
          </p>
          <div className="mt-8 flex w-full max-w-xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center 2xl:mt-10 2xl:gap-6">
            <button
              onClick={() => add("onetime", 1)}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-sky px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-sky/30 transition-colors hover:bg-sky-deep sm:w-auto sm:px-8 sm:text-base 2xl:px-10 2xl:py-5 2xl:text-lg"
            >
              Shop Now — $19.99 <ShoppingCart className="size-4 2xl:size-5" />
            </button>
            <a href="#why" className="inline-flex min-h-12 items-center justify-center text-sm font-bold uppercase tracking-[0.18em] text-white underline-offset-4 hover:text-sky hover:underline sm:w-auto 2xl:text-base [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]">
              See How It Works →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------- TRUST BAR ------------------------------- */
function TrustBar() {
  const items = [
    "647 Reviews",
    "4.5★ Rated",
    "15 Years Trusted",
    "Talc-Free",
    "Made in USA",
    "30-Day Guarantee",
  ];
  return (
    <section aria-label="Trust signals" className="bg-ink text-white border-y border-white/10">
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 2xl:py-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 2xl:gap-x-12 gap-y-2 text-[11px] sm:text-[13px] 2xl:text-[15px] font-bold uppercase tracking-[0.15em]">
          {items.map((it, i) => (
            <li key={it} className="flex items-center gap-3 sm:gap-5 2xl:gap-8">
              <span className="whitespace-nowrap">{it}</span>
              {i < items.length - 1 && <span aria-hidden className="text-sky">·</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------- INTRODUCING ------------------------------- */
function Introducing() {
  return (
    <section id="introducing" className="border-t border-ink/5 bg-white px-4 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8 xl:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-8 xl:grid-cols-2 xl:gap-24 xl:max-w-7xl 2xl:max-w-[90rem]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-square">
          <img src={productConcrete} alt="Dry Goods Athletic Spray Powder can" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        </div>
        <div className="text-center xl:text-left">
          <span className="mx-auto block max-w-[18rem] text-[10px] font-bold uppercase leading-snug tracking-[0.16em] text-sky sm:max-w-none sm:text-xs sm:tracking-[0.25em] xl:mx-0">
            Introducing <span className="sm:hidden">Dry Goods Spray Powder</span><span className="hidden sm:inline">Dry Goods Athletic Spray Powder</span>
          </span>
          <h2 className="mx-auto mt-3 max-w-[22rem] text-balance font-display text-[clamp(1.9rem,9vw,3.25rem)] font-black uppercase leading-[0.98] tracking-tight text-ink sm:max-w-[30rem] xl:mx-0 xl:max-w-none">
            A new kind of <span className="block text-sky sm:inline">anti-chafe spray.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/75 sm:text-lg">
            Dry Goods Athletic Spray Powder is a patented spray that goes on wet and instantly dries to a fine powder.
            One quick spray creates a smooth, moisture-wicking barrier that keeps your skin dry and friction-free —
            all day, no mess, no residue.
          </p>
          <ul className="mt-6 space-y-3 text-left text-ink/85">
            <li className="flex items-start gap-3">
              <Sparkles className="mt-0.5 size-5 shrink-0 text-sky" />
              <span><strong>Wet-to-powder formula</strong> — sprays on cool, dries instantly.</span>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="mt-0.5 size-5 shrink-0 text-sky" />
              <span><strong>360° patented valve</strong> — reaches anywhere, even upside down.</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-sky" />
              <span><strong>Dermatologist approved</strong> — safe on all skin types.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-sky" />
              <span><strong>Long lasting protection</strong> — Keeps you cool and dry for up to 8 hours.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="bg-gradient-to-tr from-ink via-[#111111] to-black px-4 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8 xl:px-12">
      <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem]">
        <div className="mx-auto max-w-4xl text-center xl:max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Old way vs our way</span>
          <h2 className="mt-3 text-balance font-display text-[clamp(1.9rem,7vw,4.5rem)] font-black uppercase leading-[0.98] tracking-tight text-white">
            The problem with <span className="block text-sky">traditional powders.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-white/75 sm:text-lg">
            Traditional powders cake on skin, dust the air, miss the spots that need protection most,
            and leave white residue on your gear. Dry Goods™ fixes every one of those problems.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 xl:grid-cols-2 xl:gap-10">
          <div className="rounded-[2rem] border border-white/12 bg-white/10 p-6 text-center sm:p-8 xl:text-left xl:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/50">The old way</p>
            <h3 className="mt-3 text-balance break-words font-display text-[clamp(1.8rem,5vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight text-white">
              Bottle powder
            </h3>
            <ul className="mt-6 space-y-4 text-left text-sm text-white/82 sm:text-base">
              {[
                "Cakes & clumps on sweaty skin",
                "Dust cloud — gets everywhere",
                "Can't reach the back or between toes",
                "White residue stains gear & clothes",
                "Reapply constantly",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 size-5 shrink-0 text-white/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border-2 border-sky bg-sky-soft p-6 text-center sm:p-8 xl:text-left xl:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky">Dry Goods Athletic Spray Powder</p>
            <h3 className="mt-3 text-balance break-words font-display text-[clamp(1.8rem,5vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight text-ink">
              Patented spray-to-powder
            </h3>
            <ul className="mt-6 space-y-4 text-left text-sm text-ink/85 sm:text-base">
              {[
                "Sprays on wet — dries to powder instantly",
                "Zero cloud · zero mess",
                "360° valve reaches anywhere, even upside down",
                "No white residue · won't stain",
                "One application = 8–12 hours of protection",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-sky" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItExists() {
  return (
    <section id="why" className="scroll-mt-16 bg-white px-4 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8 xl:px-12">
      <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem]">
        <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-center xl:gap-14 2xl:gap-18">
          <div className="overflow-hidden rounded-3xl border border-ink/6 bg-white p-3 shadow-sm shadow-ink/5">
            <img
              src={bodyDiagramImg}
              alt="Safe on all skin types benefits diagram"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0 self-center text-center xl:pl-2 xl:text-left 2xl:pl-6">
            <span className="block text-xs font-bold uppercase tracking-[0.25em] text-sky">Why it exists</span>
            <div className="mx-auto mt-4 max-w-full xl:mx-0">
              <h2 className="max-w-full text-balance font-display font-black uppercase leading-[0.9] tracking-[-0.045em] text-ink">
                <span className="block text-[clamp(2rem,4.7vw,4.4rem)]">From pain to</span>
                <span className="mt-1 block text-[clamp(1.9rem,4.2vw,3.85rem)] text-sky">Performance</span>
              </h2>
            </div>
            <div className="mx-auto mt-6 max-w-[38rem] space-y-4 text-base leading-relaxed text-ink/75 sm:text-lg xl:mx-0">
              <p>Athletes push their limits.</p>
              <p>
                Dry Goods™ is built to keep up. Designed to combat sweat, moisture, and friction, our advanced
                formula delivers long-lasting dryness and all-day comfort.
              </p>
              <p>
                Whether you're on the field, in the gym, or pushing through intense training, Dry Goods™ helps
                you stay cool, dry, and performing at your best. No mess, no residue — just powerful protection
                when you need it most. Try it once, and you'll never train without it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PerformanceCardsSection() {
  const cards = [
    {
      title: "Friction & Sweat",
      body: "Moisture and movement combine to create painful irritation that worsens with every stride or pedal stroke.",
    },
    {
      title: "From marathon runners to Golf players",
      body: "Chafing affects performance across every sport. No matter your level.",
    },
    {
      title: "Lost training days",
      body: "Chafing and blisters force athletes to skip workouts, compromising training cycles and competition results.",
    },
  ];

  return (
    <section className="border-t border-white/10 bg-ink px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-12">
      <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem]">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">What gets in the way</span>
          <h3 className="mt-3 text-balance font-display text-[clamp(1.6rem,6vw,2.375rem)] font-black uppercase leading-[1.02] tracking-tight text-white">
            The everyday friction that pulls athletes off pace.
          </h3>
        </div>
        <div className="mt-8 grid gap-4 xl:grid-cols-3 xl:gap-6">
          {cards.map((card) => (
            <div key={card.title} className="rounded-[1.75rem] border border-white/10 bg-white/10 px-6 py-6 text-center shadow-sm shadow-black/20 sm:p-7 xl:text-left">
              <p className="text-balance text-[11px] font-bold uppercase tracking-[0.2em] text-sky">{card.title}</p>
              <p className="mt-4 text-base leading-relaxed text-white/82">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- BUY ---------------------------------- */
function Buy() {
  const { add } = useCart();
  const [plan, setPlan] = useState<Plan>("onetime");
  const selected = PLAN_META[plan];
  const bullets = [
    "Patented 360° spray-to-powder formula",
    "8–12 hours of chafe & blister protection",
    "Instant cooling · Zero mess · Won't stain",
    "Dermatologist Approved · Made in USA",
  ];
  const planOptions: Plan[] = ["onetime", "monthly", "weekly"];
  return (
    <section id="buy" className="scroll-mt-20 overflow-hidden bg-white px-3 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8 xl:px-12">
      <div className="mx-auto min-w-0 max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem]">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky sm:text-xs sm:tracking-[0.25em]">Get Yours</span>
          <h2 className="mt-3 text-balance font-display text-[clamp(30px,10vw,52px)] font-black uppercase leading-[1] tracking-tight text-ink sm:text-[clamp(32px,5vw,56px)]">
            One spray. <span className="text-sky">All day dry.</span>
          </h2>
        </div>

        <div className="grid min-w-0 items-start gap-6 overflow-hidden rounded-3xl bg-grey p-4 shadow-xl shadow-ink/5 sm:p-8 xl:grid-cols-2 xl:items-center xl:gap-20 xl:p-16">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white p-2 sm:p-3">
            <img src={productImg} alt="Dry Goods Athletic Spray Powder can" loading="lazy" decoding="async" className="h-full w-full object-contain" />
            <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">In Stock</span>
          </div>
          <div className="min-w-0 text-center xl:text-left">
            <h3 className="font-sans text-[clamp(22px,7vw,36px)] font-bold leading-[1.08] tracking-tight text-ink sm:text-[clamp(24px,5.5vw,36px)]">
              <span className="block">Dry Goods</span>
              <span className="block">Athletic Spray Powder</span>
            </h3>
            <p className="mt-2 max-w-full break-words text-sm leading-relaxed text-ink/70 sm:text-base">
              One cool spray. All day dry.
            </p>
            <div className="mt-5 grid min-w-0 gap-1 sm:flex sm:flex-wrap sm:items-baseline sm:gap-x-3">
              <span className="font-sans text-4xl font-bold leading-none text-ink sm:text-5xl">${selected.price.toFixed(2)}</span>
            </div>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700">
              <CheckCircle2 className="size-4" /> In Stock — ships free on 3+ cans
            </p>
            <ul className="mt-6 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex min-w-0 items-start gap-2.5 text-sm leading-snug text-ink/80">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-sky" />
                  <span className="min-w-0 break-words">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-ink/60">Purchase Options</p>
              {planOptions.map((p) => {
                const m = PLAN_META[p];
                const active = plan === p;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPlan(p)}
                    className={`w-full flex items-center gap-2 rounded-2xl border-2 px-4 py-3 text-left transition-colors sm:gap-3 ${active ? "border-sky bg-sky-soft/40" : "border-ink/10 hover:border-ink/30 bg-white"}`}
                  >
                    <span className={`size-4 shrink-0 rounded-full border-2 ${active ? "border-sky bg-sky" : "border-ink/30"}`} />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold leading-tight text-ink">{m.label}</span>
                      {m.sub && <span className="mt-0.5 block text-[11px] font-semibold uppercase tracking-wide text-sky">{m.sub}</span>}
                    </span>
                    <span className="shrink-0 text-sm font-bold text-ink sm:text-base">${m.price.toFixed(2)}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 space-y-3">
              <button onClick={() => add(plan, 1)} className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full bg-sky px-3 py-4 text-[13px] font-bold uppercase leading-tight tracking-wide text-white shadow-lg shadow-sky/30 transition-colors hover:bg-sky-deep active:scale-[0.99] sm:px-4 sm:py-5 sm:text-base sm:tracking-widest">
                <ShoppingCart className="size-5 shrink-0" />
                <span className="min-w-0 break-words text-center">Add to Cart — ${selected.price.toFixed(2)}</span>
              </button>
              <p className="text-center text-[11px] font-semibold uppercase tracking-wider text-ink/60 sm:text-xs xl:text-left">
                30-Day Money-Back Guarantee · Free Returns
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ FAQ --------------------------------- */
function FAQ() {
  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: "What's in Dry Goods?",
      a: (
        <div className="space-y-4">
          <p>Every ingredient earns its place. Here's what's doing the work:</p>
          <div>
            <p className="font-bold text-ink">Arrowroot Extract</p>
            <p>A plant-derived powder that instantly pulls moisture away from the skin. Nature's most effective natural absorbent.</p>
          </div>
          <div>
            <p className="font-bold text-ink">Zinc Oxide</p>
            <p>A skin-protective mineral that soothes friction and protects skin.</p>
          </div>
          <div>
            <p className="font-bold text-ink">Talc-Free — Reformulated With Better Ingredients.</p>
            <p>We made the call to remove talc and upgrade the formula. Cleaner ingredients, same performance.</p>
          </div>
          <div>
            <p className="font-bold text-ink">No Aluminum Chlorohydrate.</p>
            <p>That's the aluminum compound in antiperspirants that blocks sweat glands. It's not in here. Dry Goods manages moisture without blocking your body's natural function.</p>
          </div>
        </div>
      ),
    },
    { q: "Is it patented?", a: "Yes. Dry Goods™ is built on a US-patented 360° spray-to-powder valve that delivers an ultra-fine mist and dries instantly on skin." },
    { q: "Where is it made?", a: "Designed, formulated, and assembled in the USA." },
    { q: "Will it stain my clothes or gear?", a: "No. Dry Goods™ dries to a fine powder on contact and won't leave white residue on skin or fabric." },
    { q: "Can I spray upside down?", a: "Yes. The patented 360° valve sprays from any angle, including upside down, so you can reach hard-to-cover spots." },
    { q: "What is the return policy?", a: "30-day satisfaction guarantee. If it's not for you, email us for a free return." },
    { q: "How long does one application last?", a: "One application provides approximately 8–12 hours of protection, depending on your activity level, sweat, and usage." },
  ];
  return (
    <section id="faq" className="scroll-mt-24 bg-paper px-4 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8 xl:px-12">
      <div className="mx-auto max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">FAQ</span>
          <h2 className="mt-3 text-balance font-display text-[clamp(1.9rem,5vw,4rem)] font-black uppercase leading-[1] tracking-tight text-ink">
            Questions, <span className="text-sky">answered.</span>
          </h2>
        </div>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-bold text-ink sm:text-lg">
                <span>{f.q}</span>
                <Plus className="mt-1 size-5 shrink-0 text-sky transition-transform group-open:rotate-45" />
              </summary>
              <div className="mt-3 leading-relaxed text-ink/70">{f.a}</div>
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
    <section className="relative overflow-hidden bg-ink px-4 py-16 text-white sm:px-6 sm:py-24 md:py-28 lg:px-8 xl:px-12">
      <div className="absolute inset-0">
        <img src={pickleballPaddle} alt="" aria-hidden loading="lazy" decoding="async" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
      </div>
      <div className="relative mx-auto max-w-3xl text-center xl:max-w-4xl 2xl:max-w-5xl">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">The last word</span>
        <h2 className="mt-3 text-balance font-display text-[clamp(1.75rem,7vw,4.25rem)] font-black uppercase leading-[1.05] tracking-tight">
          Stay cool, stay dry. <span className="text-sky">Stay unstoppable.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Don't let discomfort slow down your best performance. Experience the confidence and comfort
          to push your limits every day.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <button
            onClick={() => add("onetime", 1)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-sky/30 transition-colors hover:bg-sky-deep sm:px-8 sm:text-base"
          >
            <ShoppingCart className="size-5" /> Get Dry Goods — $19.99
          </button>
          <a href="#buy" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/40 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-ink sm:px-8">
            See Details
          </a>
        </div>
      </div>
    </section>
  );
}
