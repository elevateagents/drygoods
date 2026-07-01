import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import AmazonReviewsSection from "@/components/site/AmazonReviewsSection";
import { useState } from "react";
import { useCart, PLAN_META, type Plan } from "@/lib/cart-store";
import {
  ShieldCheck,
  ShoppingCart, ExternalLink, CheckCircle2,
  Plus, Sparkles, Zap,
} from "lucide-react";
import golfer from "@/assets/hero-two-cans-golf-dusk.png.asset.json";
import golferMobile from "@/assets/hero-can-mobile-golf-dusk.png.asset.json";
import productImg from "@/assets/product-white.png.asset.json";
import productConcrete from "@/assets/product-concrete.png.asset.json";
import pickleballPaddle from "@/assets/about-pickleball-paddle.png.asset.json";
import whyItExistsImg from "@/assets/why-it-exists-climbing.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DryGoods™ Athletic Spray — Prevent Chafing & Blisters" },
      { name: "description", content: "The fastest way to prevent chafing. Patented 360° spray-to-powder. 8–12 hrs protection. Dermatologist Approved. Made in USA." },
      { name: "keywords", content: "anti chafing spray, athletic powder, drygoods, prevent blisters, prevent chafing" },
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
          name: "DryGoods™ Athletic Spray",
          description: "Patented 360° spray-to-powder. Prevents chafing and blisters for 8–12 hours. Dermatologist approved, made in USA.",
          brand: { "@type": "Brand", name: "DryGoods" },
          image: [productImg.url],
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
      <ConquerChafing />
      <WhyItExists />
      <AmazonReviewsSection />
      <Buy />
      <FAQ />
      <FinalCTA />
      <MobileStickyCTA />
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
          src={golferMobile.url}
          alt=""
          aria-hidden="true"
          className="md:hidden w-full h-full object-cover object-[center_40%]"
        />
        <img
          src={golfer.url}
          alt=""
          aria-hidden="true"
          className="hidden md:block w-full h-full object-cover object-[center_60%]"
        />

        <div className="absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-ink/95 via-ink/65 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-ink/55 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 pt-20 md:pt-28 lg:pt-32 pb-12 min-h-[95vh] flex flex-col">
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
            One Spray: <span className="text-sky">Cool<span className="inline-block w-[0.12em]" />, Dry,</span> and Chafe-Free.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white max-w-2xl mx-auto leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]">
            DryGoods™ patented spray goes on cool, dries to an invisible powder, and keeps you
            chafe-free for 8–12 hours. No mess. No residue.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => add("onetime", 1)}
              className="inline-flex items-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white px-8 py-4 font-bold text-base uppercase tracking-widest rounded-full shadow-lg shadow-sky/30"
            >
              Shop Now — $19.99 <ShoppingCart className="size-4" />
            </button>
            <a href="#how" className="text-sm font-bold uppercase tracking-widest text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.6)] hover:text-sky underline-offset-4 hover:underline">
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
    "4.4★ Rated",
    "15 Years Trusted",
    "Talc-Free",
    "Made in USA",
    "30-Day Guarantee",
  ];
  return (
    <section aria-label="Trust signals" className="bg-ink text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-2 text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.15em]">
          {items.map((it, i) => (
            <li key={it} className="flex items-center gap-3 sm:gap-5">
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
    <section id="introducing" className="bg-white py-20 sm:py-24 md:py-28 px-5 sm:px-6 lg:px-8 xl:px-12 border-t border-ink/5">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">
        <div className="relative aspect-square rounded-3xl overflow-hidden">
          <img src={productConcrete.url} alt="DryGoods Athletic Spray can" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Introducing DryGoods™</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(30px,5vw,52px)] leading-[1] text-ink">
            A new kind of <span className="text-sky">anti-chafe spray.</span>
          </h2>
          <p className="mt-5 text-lg text-ink/75 leading-relaxed">
            DryGoods™ is a patented spray that goes on wet and instantly dries to a fine, invisible powder.
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
              <span><strong>Dermatologist approved</strong> — safe on all skin types.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- CONQUER CHAFING ----------------------------- */
function ConquerChafing() {
  return (
    <section id="how" className="scroll-mt-20 bg-gradient-to-tr from-ink via-[#111111] to-black text-white py-20 sm:py-24 md:py-28 px-5 sm:px-6 lg:px-8 xl:px-12 border-t border-white/10">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] mx-auto">
        {/* Headline */}
        <div className="text-center max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <h2 className="font-display font-black uppercase tracking-tight text-[clamp(20px,5vw,72px)] leading-[1.05] text-white text-balance break-words">
            Why it <span className="text-sky">exists.</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-3xl mx-auto">
            Athletes push their limits.
          </p>
          <p className="mt-4 text-lg sm:text-xl text-white/75 leading-relaxed max-w-3xl mx-auto">
            DryGoods™ is built to keep up. Designed to combat sweat, moisture, and friction, our advanced
            formula delivers long-lasting dryness and all-day comfort.
          </p>
          <p className="mt-4 text-lg sm:text-xl text-white/75 leading-relaxed max-w-3xl mx-auto">
            Whether you&apos;re on the field, in the gym, or pushing through intense training, DryGoods™ helps
            you stay cool, dry, and performing at your best. No mess, no residue — just powerful protection
            when you need it most. Try it once, and you&apos;ll never train without it.
          </p>
        </div>

        {/* Silent Battle */}
        <div className="mt-20">
          <div className="mt-10 grid md:grid-cols-3 2xl:grid-cols-3 gap-5 lg:gap-6 xl:gap-8">
            <div className="rounded-3xl bg-white/10 border border-white/10 text-white p-7 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky">Friction & Sweat</p>
              <p className="mt-3 text-white/85 leading-relaxed">
                Moisture and movement combine to create painful irritation that worsens with every stride or pedal stroke.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 border border-white/10 text-white p-7 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky">Every sport, every athlete</p>
              <p className="mt-3 text-white/85 leading-relaxed">
                From cyclists to marathon runners, chafing affects performance across all disciplines, regardless of fitness level.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 border border-white/10 text-white p-7 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky">Lost training days</p>
              <p className="mt-3 text-white/85 leading-relaxed">
                Chafing and blisters force athletes to skip workouts, compromising training cycles and competition results.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ----------------------------- WHY IT EXISTS ----------------------------- */
function WhyItExists() {
  return (
    <section id="why" className="bg-paper py-20 sm:py-24 md:py-28 px-5 sm:px-6 lg:px-8 xl:px-12 border-t border-ink/5 scroll-mt-16">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">
        <div className="relative rounded-3xl overflow-hidden bg-ink/5">
          <img src={whyItExistsImg.url} alt="Athlete rock climbing over ocean" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="font-display font-black uppercase tracking-tight text-[clamp(22px,4.5vw,52px)] leading-[1.05] text-ink text-balance break-words">
            From pain to <br className="md:hidden" /><span className="text-sky">performance.</span>
          </h2>
          <p className="mt-5 text-lg text-ink/75 leading-relaxed">
            Chafing doesn't just hurt — it limits you. It cuts workouts short, slows your pace, and
            plants doubt in your mind at exactly the wrong moment.
          </p>
          <p className="mt-4 text-lg text-ink/75 leading-relaxed">
            DryGoods™ eliminates that doubt entirely. One spray before activity, and you're free to
            focus on what actually matters: pushing your limits.
          </p>
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
  const badges = [
    { icon: Flag, label: "Made in USA" },
    { icon: ShieldCheck, label: "Dermatologist Approved" },
    { icon: Award, label: "US Patented" },
    { icon: RotateCcw, label: "Free Returns" },
    { icon: Leaf, label: "Cruelty Free" },
  ];
  const planOptions: Plan[] = ["onetime", "monthly", "weekly"];
  return (
    <section id="buy" className="scroll-mt-20 bg-sky-soft/40 min-h-screen flex flex-col justify-center py-16 sm:py-24 md:py-32 px-3 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] mx-auto min-w-0">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Get Yours</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(32px,5vw,56px)] leading-[1] text-ink">
            One spray. <span className="text-sky">All day dry.</span>
          </h2>
        </div>

        <div className="grid min-w-0 md:grid-cols-2 gap-6 lg:gap-16 xl:gap-24 items-center bg-white rounded-3xl p-4 sm:p-10 lg:p-14 xl:p-20 shadow-xl shadow-sky/10 overflow-hidden">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-sky-soft flex items-center justify-center p-2 sm:p-3">
            <img src={productImg.url} alt="DryGoods Athletic Spray can" loading="lazy" className="w-full h-full object-contain" />
            <span className="absolute top-4 left-4 bg-ink text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">In Stock</span>
          </div>
          <div className="min-w-0">
            <h3 className="font-sans font-bold tracking-tight text-[clamp(24px,5.5vw,36px)] leading-[1.1] text-ink break-words">
              Dry Goods™ Athletic Spray
            </h3>
            <p className="mt-2 max-w-full text-sm sm:text-base text-ink/70 leading-relaxed break-words">
              One cool spray. All day dry.
            </p>
            <div className="mt-5 grid min-w-0 gap-1 sm:flex sm:flex-wrap sm:items-baseline sm:gap-x-3">
              <span className="font-sans font-bold text-4xl sm:text-5xl text-ink leading-none">${selected.price.toFixed(2)}</span>
            </div>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700">
              <CheckCircle2 className="size-4" /> In Stock — ships free on 3+ cans
            </p>
            <ul className="mt-6 space-y-2.5">
              {bullets.map(b => (
                <li key={b} className="flex min-w-0 items-start gap-2.5 text-sm text-ink/80 leading-snug">
                  <CheckCircle2 className="size-5 text-sky shrink-0 mt-0.5" />
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
                    className={`w-full flex items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left transition-colors ${active ? "border-sky bg-sky-soft/40" : "border-ink/10 hover:border-ink/30 bg-white"}`}
                  >
                    <span className={`size-4 rounded-full border-2 shrink-0 ${active ? "border-sky bg-sky" : "border-ink/30"}`} />
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-bold text-ink leading-tight">{m.label}</span>
                      {m.sub && <span className="block text-[11px] font-semibold uppercase tracking-wide text-sky mt-0.5">{m.sub}</span>}
                    </span>
                    <span className="font-bold text-ink text-base shrink-0">${m.price.toFixed(2)}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 space-y-3">
              <button onClick={() => add(plan, 1)} className="w-full min-w-0 inline-flex items-center justify-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white px-3 sm:px-4 py-4 sm:py-5 text-[13px] sm:text-base font-bold uppercase tracking-wide sm:tracking-widest rounded-full shadow-lg shadow-sky/30 active:scale-[0.99] leading-tight">
                <ShoppingCart className="size-5 shrink-0" />
                <span className="min-w-0 text-center break-words">Add to Cart — ${selected.price.toFixed(2)}</span>
              </button>
              <p className="text-center text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-ink/60">
                30-Day Money-Back Guarantee · Free Returns
              </p>
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
            <p>A plant-derived powder that instantly pulls moisture away from the skin. Nature's most effective natural absorbent.</p>
          </div>
          <div>
            <p className="font-bold text-ink">Zinc Oxide</p>
            <p>A skin-protective mineral that soothes friction and protects skin.</p>
          </div>
          <div>
            <p className="font-bold text-ink">Menthol</p>
            <p>That clean cooling sensation you feel on application. Activates cold receptors in the skin for an immediate cooling sensation that lasts.</p>
          </div>
          <div className="pt-2 border-t border-ink/10">
            <p className="font-bold text-ink">No Aluminum Chlorohydrate.</p>
            <p>That's the aluminum compound in antiperspirants that blocks sweat glands. It's not in here. DryGoods manages moisture without blocking your body's natural function.</p>
          </div>
        </div>
      ),
    },
    { q: "Is it patented?", a: "Yes. DryGoods™ is built on a US-patented 360° spray-to-powder valve that delivers an ultra-fine mist and dries instantly on skin." },
    { q: "Where is it made?", a: "Designed, formulated, and assembled in the USA." },
    { q: "Will it stain my clothes or gear?", a: "No. DryGoods™ dries to a fine powder on contact and won't leave white residue on skin or fabric." },
    { q: "Can I spray upside down?", a: "Yes. The patented 360° valve sprays from any angle, including upside down, so you can reach hard-to-cover spots." },
    { q: "What is the return policy?", a: "30-day satisfaction guarantee. If it's not for you, email us for a free return." },
    { q: "How long does one application last?", a: "One application provides approximately 8–12 hours of protection, depending on your activity level, sweat, and usage." },
  ];
  return (
    <section id="faq" className="scroll-mt-24 bg-paper py-20 sm:py-24 md:py-28 px-5 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">FAQ</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(30px,5vw,64px)] leading-[1] text-ink">
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
    <section className="relative bg-ink text-white py-20 sm:py-24 md:py-32 px-5 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
      <div className="absolute inset-0">
        <img src={pickleballPaddle.url} alt="" aria-hidden className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
      </div>
      <div className="relative max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">The last word</span>
        <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(22px,7vw,68px)] leading-[1.05] text-balance">
          Stay cool, stay dry. <span className="text-sky">Stay unstoppable.</span>
        </h2>
        <p className="mt-6 text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Don't let discomfort slow down your best performance. Experience the confidence and comfort
          to push your limits every day.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4">
          <button
            onClick={() => add("onetime", 1)}
            className="inline-flex items-center justify-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white px-6 sm:px-8 py-4 font-bold text-sm sm:text-base uppercase tracking-widest rounded-full shadow-lg shadow-sky/30"
          >
            <ShoppingCart className="size-5" /> Get DryGoods — $19.99
          </button>
          <a href="#buy" className="inline-flex items-center justify-center px-6 sm:px-8 py-4 font-bold text-sm uppercase tracking-widest border-2 border-white/40 text-white rounded-full hover:bg-white hover:text-ink transition-colors">
            See Details
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- MOBILE STICKY CTA ---------------------------- */
function MobileStickyCTA() {
  const { add } = useCart();
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-ink/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-6px_20px_rgba(0,0,0,0.08)]"
      role="region"
      aria-label="Quick add to cart"
    >
      <button
        onClick={() => add("onetime", 1)}
        className="w-full inline-flex items-center justify-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white px-4 py-3.5 text-sm font-bold uppercase tracking-widest rounded-full shadow-lg shadow-sky/30"
      >
        <ShoppingCart className="size-5" />
        Add to Cart — $19.99
      </button>
    </div>
  );
}

