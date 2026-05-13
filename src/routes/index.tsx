import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Marquee } from "@/components/site/Marquee";
import { StickerBadge } from "@/components/site/StickerBadge";
import { SectionNumber } from "@/components/site/SectionNumber";
import { useCart } from "@/lib/cart-store";
import { ChevronDown, Wind, Droplets, Clock, Sparkles, ShieldCheck } from "lucide-react";
import canHero from "@/assets/can-hero.png";
import runner from "@/assets/runner.jpg";
import lifter from "@/assets/lifter.jpg";
import cyclist from "@/assets/cyclist.jpg";
import military from "@/assets/military.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dry Goods — Patented Athletic Spray Powder" },
      { name: "description", content: "Stay dry. Destroy friction. Patented spray-to-powder for runners, lifters, cyclists, hikers, military and trades. Made in USA since 2009." },
      { property: "og:title", content: "Dry Goods — Stay Dry. Destroy Friction." },
      { property: "og:description", content: "The patented spray-to-powder armor for athletes who refuse to slow down." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Marquee items={["Patented Formula", "No Dust Clouds", "360° Spray", "All-Day Dry", "Sweat-Proof", "Since 2009"]} />
      <Problem />
      <Bento />
      <BuiltFor />
      <Subscribe />
      <Reviews />
      <Patent />
      <Marquee invert items={["As Seen On Amazon", "Walmart", "Athlete-Approved", "US Patent 8778406B2"]} />
      <FAQ />
    </Layout>
  );
}

/* ----------- HERO ----------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rot = useTransform(scrollYProgress, [0, 1], [-4, 8]);
  const { add } = useCart();

  return (
    <header ref={ref} className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-20 pb-16 sm:pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="mb-6 flex flex-wrap gap-2"
        >
          <StickerBadge variant="since" />
          <StickerBadge variant="patent" />
        </motion.div>

        <h1 className="font-display text-[clamp(36px,10vw,148px)] leading-[0.88] font-black tracking-tighter uppercase text-balance break-words">
          <motion.span initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }} className="block">
            STAY DRY.
          </motion.span>
          <motion.span initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }} className="block">
            DESTROY
          </motion.span>
          <motion.span initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }} className="block text-heat">
            FRICTION.
          </motion.span>
        </h1>

        <div className="mt-8 sm:mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="font-editorial italic text-xl sm:text-2xl lg:text-3xl leading-[1.15] mb-6 sm:mb-8 text-pretty">
              The patented spray-to-powder armor for athletes who refuse to slow down.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <button
                onClick={() => add("onetime")}
                className="bg-ice text-ink font-display font-black uppercase tracking-tight text-lg px-6 sm:px-8 py-4 sm:py-5 border-2 border-ink hover:bg-ink hover:text-ice hover:-skew-x-3 transition-all duration-200 min-h-[52px]"
              >
                Shop — $19.99
              </button>
              <Link to="/products/original" className="text-sm font-bold uppercase tracking-widest underline-offset-4 underline hover:text-heat py-2">
                Subscribe & save 20% →
              </Link>
            </div>
            <ul className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 text-[11px] uppercase tracking-widest font-bold text-steel">
              <li className="flex items-center gap-2"><span className="size-1.5 bg-heat shrink-0" /> Patented</li>
              <li className="flex items-center gap-2"><span className="size-1.5 bg-heat shrink-0" /> Made in USA</li>
              <li className="flex items-center gap-2"><span className="size-1.5 bg-heat shrink-0" /> 360° Spray</li>
              <li className="flex items-center gap-2"><span className="size-1.5 bg-heat shrink-0" /> Non-Asbestos Talc</li>
            </ul>
          </div>
          <div className="lg:col-span-7 relative h-[300px] sm:h-[460px] lg:h-[640px] order-1 lg:order-2">
            <motion.div style={{ y, rotate: rot }} className="absolute inset-0 grid place-items-center">
              <img
                src={canHero}
                alt="Dry Goods Original athletic spray powder can"
                className="h-full w-auto object-contain drop-shadow-2xl"
                width={800}
                height={1200}
              />
            </motion.div>
            <div className="absolute top-4 right-2 sm:right-10 hidden md:block">
              <StickerBadge variant="made" className="text-base px-4 py-2" />
            </div>
            <div className="absolute bottom-4 sm:bottom-10 left-0 sm:left-10 bg-paper border border-ink p-2.5 sm:p-3 rotate-[-3deg] shadow-xl max-w-[150px] sm:max-w-[180px]">
              <span className="text-[10px] font-black uppercase tracking-widest block">U.S. Patent</span>
              <span className="font-display text-base sm:text-lg font-black">8,778,406 B2</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ----------- PROBLEM ----------- */
function Problem() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionNumber n="01" label="The Friction Tax" />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-editorial italic text-[clamp(40px,6vw,84px)] leading-[1.02] text-pretty">
              Dump-on powders are a <span className="text-heat">mess.</span> Sticks <span className="text-heat">melt.</span> Creams <span className="text-heat">sweat off.</span>
            </h2>
            <p className="mt-8 font-sans text-lg max-w-[50ch] text-pretty">
              You shouldn't have to choose between a chalk cloud in your gym bag and raw skin at mile 18. Dry Goods sprays on wet, dries to a powder barrier, and stays put.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <figure className="bg-ink/90 aspect-[5/3] sm:aspect-[3/4] grid place-items-center text-center p-4 relative overflow-hidden">
              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest text-paper/60">A. Dump-on</span>
              <span className="font-display text-paper text-2xl sm:text-3xl font-black uppercase leading-none break-words">Dust Cloud</span>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-paper/30 to-transparent" />
            </figure>
            <figure className="bg-ice aspect-[5/3] sm:aspect-[3/4] grid place-items-center text-center p-4 relative sm:mt-10 overflow-hidden">
              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest text-ink/60">B. Dry Goods</span>
              <span className="font-display text-ink text-2xl sm:text-3xl font-black uppercase leading-none break-words">Targeted Spray</span>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------- BENTO ----------- */
function Bento() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-5 lg:px-8 bg-ink text-paper">
      <div className="max-w-7xl mx-auto">
        <SectionNumber n="02" label="Built Different" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-paper text-ink p-7 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[280px] sm:min-h-[360px]">
            <div className="flex justify-between items-start">
              <Wind className="size-10" strokeWidth={1.5} />
              <span className="text-[10px] font-black uppercase tracking-widest text-steel">01</span>
            </div>
            <div>
              <h3 className="font-display text-5xl lg:text-6xl font-black uppercase leading-none tracking-tighter mb-3">360° Spray Valve</h3>
              <p className="text-sm max-w-[40ch]">Patented valve fires from any angle — upside down, sideways, mid-set. No clogs. No clumps.</p>
            </div>
          </div>
          <Tile icon={<Droplets className="size-7" strokeWidth={1.5} />} title="Instant Cool" body="Wet spray flash-dries on contact." n="02" accent />
          <Tile icon={<Clock className="size-7" strokeWidth={1.5} />} title="All-Day Hold" body="Engineered to outlast your training block." n="03" />
          <Tile icon={<Sparkles className="size-7" strokeWidth={1.5} />} title="No Mess" body="Zero dust. No bag-bottom residue." n="04" />
          <Tile icon={<ShieldCheck className="size-7" strokeWidth={1.5} />} title="Skin-Safe" body="Dermatologist-tested. Talc-free options." n="05" accent />
        </div>
      </div>
    </section>
  );
}

function Tile({ icon, title, body, n, accent }: { icon: React.ReactNode; title: string; body: string; n: string; accent?: boolean }) {
  return (
    <div className={`p-6 lg:p-7 flex flex-col justify-between min-h-[200px] ${accent ? "bg-heat text-paper" : "bg-paper/5 text-paper border border-paper/10"}`}>
      <div className="flex justify-between items-start">
        {icon}
        <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{n}</span>
      </div>
      <div className="mt-6">
        <h3 className="font-display text-2xl font-black uppercase leading-none tracking-tighter mb-2">{title}</h3>
        <p className="text-sm opacity-90">{body}</p>
      </div>
    </div>
  );
}

/* ----------- BUILT FOR ----------- */
function BuiltFor() {
  const sports = [
    { img: runner, name: "Runners", line: "Mile 1 to mile 50, no chafe." },
    { img: lifter, name: "CrossFit & Lifters", line: "Grip stays dry. Bar stays clean." },
    { img: cyclist, name: "Cyclists", line: "Saddle hours without consequence." },
    { img: military, name: "Military & Trades", line: "Boots on. All day. Every day." },
  ];
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionNumber n="03" label="Built For" />
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <h2 className="font-display text-[clamp(36px,7vw,96px)] font-black uppercase leading-[0.9] tracking-tighter">
            For the rep<br/>you didn't think<br/>you had.
          </h2>
          <p className="font-editorial italic text-xl max-w-[28ch]">
            One can. Eight sports. Zero excuses.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {sports.map((s, i) => (
            <motion.figure
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden bg-ink"
            >
              <img src={s.img} alt={s.name} loading="lazy" width={1200} height={1500} className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 lg:p-5 bg-gradient-to-t from-ink/95 to-transparent">
                <p className="font-display text-paper text-xl lg:text-2xl font-black uppercase leading-none tracking-tighter">{s.name}</p>
                <p className="text-paper/80 text-xs mt-1">{s.line}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="mt-6 text-xs uppercase tracking-widest text-steel">
          Hikers · Combat sports · Trades · Endurance · Tactical
        </p>
      </div>
    </section>
  );
}

/* ----------- SUBSCRIBE ----------- */
function Subscribe() {
  const { add } = useCart();
  const plans = [
    { id: "onetime" as const, label: "One-time", price: 19.99, sub: "Single can. No commitment.", badge: null },
    { id: "monthly" as const, label: "Monthly", price: 16.99, sub: "Save 15%. Skip anytime.", badge: "Most Popular" },
    { id: "weekly" as const, label: "Weekly", price: 15.99, sub: "Save 20%. Built for high-output.", badge: "Best Value" },
  ];
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-5 lg:px-8 bg-ice">
      <div className="max-w-7xl mx-auto">
        <SectionNumber n="04" label="Never Run Out" />
        <h2 className="font-display text-[clamp(38px,8vw,108px)] font-black uppercase leading-[0.88] tracking-tighter mb-12">
          Never run out<br/>mid-<span className="italic font-editorial font-normal">season.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-3 lg:gap-4">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`relative p-7 lg:p-8 border-2 border-ink flex flex-col gap-6 ${p.id === "monthly" ? "bg-ink text-paper" : "bg-paper text-ink"}`}
            >
              {p.badge && (
                <span className={`absolute -top-3 left-6 text-[10px] font-black uppercase tracking-widest px-2 py-1 ${p.id === "monthly" ? "bg-heat text-paper" : "bg-cool text-paper"}`}>
                  {p.badge}
                </span>
              )}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-70">{p.label}</p>
                <p className="font-display text-6xl font-black tracking-tighter mt-2">${p.price}</p>
                <p className="text-sm mt-3 opacity-80">{p.sub}</p>
              </div>
              <ul className="text-xs space-y-2 uppercase tracking-widest font-semibold opacity-80">
                <li>· 5.4 oz patented can</li>
                <li>· Free shipping over $35</li>
                {p.id !== "onetime" && <li>· Skip / cancel anytime</li>}
              </ul>
              <button
                onClick={() => add(p.id)}
                className={`w-full mt-auto py-4 font-display font-black uppercase tracking-tight text-base border-2 transition-colors ${p.id === "monthly" ? "bg-ice text-ink border-ice hover:bg-paper" : "border-ink hover:bg-ink hover:text-paper"}`}
              >
                Add to Cart →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------- REVIEWS ----------- */
function Reviews() {
  const quotes = [
    { q: "I stopped thinking about chafing at mile 14. That's a first.", who: "M. Reyes — Ultra Runner" },
    { q: "Bag of chalk used to live in my truck. Now it's one can.", who: "J. Tate — CrossFit L2" },
    { q: "Spray it. Forget it. Beat it. The order matters.", who: "K. Patel — Cycling Coach" },
  ];
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionNumber n="05" label="Field Reports" />
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-12">
            {quotes.map((q, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-l-4 border-heat pl-6"
              >
                <p className="font-editorial italic text-3xl lg:text-4xl leading-[1.15] text-pretty">"{q.q}"</p>
                <cite className="block not-italic mt-4 text-xs font-bold uppercase tracking-widest text-steel">{q.who}</cite>
              </motion.blockquote>
            ))}
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 content-start">
            <img src={runner} alt="" loading="lazy" className="aspect-[3/4] object-cover w-full" />
            <img src={lifter} alt="" loading="lazy" className="aspect-[3/4] object-cover w-full sm:mt-10" />
            <img src={military} alt="" loading="lazy" className="aspect-[3/4] object-cover w-full" />
            <img src={cyclist} alt="" loading="lazy" className="aspect-[3/4] object-cover w-full sm:mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------- PATENT ----------- */
function Patent() {
  return (
    <section id="patent" className="py-16 sm:py-24 lg:py-32 px-5 lg:px-8 bg-ink text-paper">
      <div className="max-w-7xl mx-auto">
        <SectionNumber n="06" label="The Science" />
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="font-editorial italic text-paper/60 text-2xl mb-4">U.S. Patent</p>
            <h2 className="font-display text-[clamp(48px,15vw,200px)] font-black tracking-tighter leading-[0.85] uppercase break-all">
              8778406<span className="text-heat">B2</span>
            </h2>
            <p className="mt-6 max-w-[55ch] text-lg">
              A pressurized spray-to-powder delivery system. Wet on contact, dry in seconds, locked-in for hours. Patented in 2014. Refined every season since.
            </p>
            <ul className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-xs uppercase tracking-widest font-bold text-paper/70">
              <li>· Aerosol valve geometry</li>
              <li>· Anti-clog spray tip</li>
              <li>· Inverted-spray ready</li>
              <li>· Skin-bonding film</li>
              <li>· Sweat-activated grip</li>
              <li>· Talc-free option</li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-square bg-paper/5 border border-paper/15 grid place-items-center relative overflow-hidden">
              <img src={canHero} alt="Dry Goods can cross-section" className="h-[80%] w-auto rotate-12 opacity-80" />
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="20" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="0.2" className="text-heat" />
                <line x1="20" y1="55" x2="55" y2="55" stroke="currentColor" strokeWidth="0.2" className="text-ice" />
                <line x1="20" y1="80" x2="65" y2="80" stroke="currentColor" strokeWidth="0.2" className="text-paper/40" />
              </svg>
              <div className="absolute top-[28%] left-4 text-[10px] uppercase tracking-widest font-bold text-heat">Valve geometry</div>
              <div className="absolute top-[53%] left-4 text-[10px] uppercase tracking-widest font-bold text-ice">Powder formula</div>
              <div className="absolute top-[78%] left-4 text-[10px] uppercase tracking-widest font-bold text-paper/60">Pressurized base</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------- FAQ ----------- */
const FAQS = [
  { q: "How is this different from sticks, sprays, or creams?", a: "Sticks melt and roll-up greasy. Sprays go on wet but dry to a powder barrier — no residue, no mess, no transfer." },
  { q: "Is the formula safe for sensitive skin?", a: "Yes. Dermatologist-tested, talc-free option available, and free of parabens and phthalates." },
  { q: "How long does one can last?", a: "Daily users get ~30 days per 5.4 oz can. Most subscribers run weekly or monthly cadence depending on training volume." },
  { q: "Can I skip or cancel my subscription?", a: "Anytime. Manage from your account in two taps. No retention call required." },
  { q: "How fast does it ship?", a: "Orders ship from Raleigh, NC within 1 business day. Free shipping over $35." },
  { q: "Where is it made?", a: "Designed and manufactured in the USA by Joyce Labs LLC." },
  { q: "Does it stain clothing?", a: "No. Goes on wet, dries clear. Won't transfer to your gear." },
  { q: "What's your return policy?", a: "30-day satisfaction guarantee. Don't love it? We take it back." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 px-5 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionNumber n="07" label="Questions" />
        <h2 className="font-display text-[clamp(38px,8vw,108px)] font-black uppercase leading-[0.85] tracking-tighter mb-12">
          You ask.<br/>We <span className="text-heat italic font-editorial font-normal">answer.</span>
        </h2>
        <ul className="border-t border-ink/15">
          {FAQS.map((f, i) => (
            <li key={i} className="border-b border-ink/15">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 sm:gap-6 py-5 sm:py-6 text-left group min-h-[56px]"
              >
                <span className="font-display text-base sm:text-xl lg:text-2xl font-black uppercase tracking-tight">{f.q}</span>
                <ChevronDown className={`size-5 sm:size-6 shrink-0 mt-1 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="pb-6 text-base text-pretty max-w-[68ch] text-ink/80"
                >
                  {f.a}
                </motion.p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
