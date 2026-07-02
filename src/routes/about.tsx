import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCart, XCircle, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { useCart } from "@/lib/cart-store";

const clientLogoModules = import.meta.glob<string>("../assets/client-logos/*.{png,jpg,jpeg,webp,gif}", {
  eager: true,
  import: "default",
  query: "?url",
});

const clientLogos = Object.entries(clientLogoModules)
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "Client logo";
    const name = fileName.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ");
    return { name, src };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dry Goods™ — Built by Athletes Who Refused 'Good Enough'" },
      { name: "description", content: "How Dry Goods™ was born from real-world testing — the story behind the patented spray-to-powder formula." },
      { property: "og:title", content: "About Dry Goods™" },
      { property: "og:description", content: "We didn't set out to build a brand. We set out to solve a problem." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { add, setOpen } = useCart();
  const handleAdd = () => {
    void add("onetime", 1);
    setOpen(true);
  };
  return (
    <Layout>
      {/* How it all began — WHITE background */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-5 sm:px-6 lg:px-8 xl:px-12 bg-white">
        <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">How it all began</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(24px,4.5vw,48px)] leading-[1] text-ink">
            We didn't set out to build a brand. We set out to <span className="text-sky">solve a problem.</span>
          </h2>
          <p className="mt-5 font-sans text-base text-ink/75 leading-relaxed">
            Early mornings, double sessions, two a days, competitions that push you past what you
            thought possible. At that level, every detail matters — and the wrong gear can cost you.
          </p>
          <p className="mt-4 font-sans text-base text-ink/75 leading-relaxed">
            Dump-on powder was one of those details that never worked. Wet, chalky, uncomfortable — it
            was a problem athletes just learned to tolerate. We didn't.
          </p>
          <p className="mt-4 font-sans text-base text-ink/75 leading-relaxed">
            Dry Goods™ was built by athletes who refused to accept "good enough." After years of
            real-world testing on athletes, we launched in 2010. What started as a cult product among
            serious competitors has grown into a trusted solution for anyone who trains, competes, and
            refuses to slow down.
          </p>
        </div>
      </section>

      {/* Old way vs new way — DARK full-bleed */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-gradient-to-tr from-ink via-[#111111] to-black py-16 sm:py-20 px-5 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Old way vs new way</span>
            <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(26px,4.5vw,44px)] leading-[1.05] text-white">
              The problem with <span className="text-sky">traditional powders.</span>
            </h2>
            <p className="mt-5 font-sans text-base text-white/70 leading-relaxed">
              Traditional powders cake on skin, dust the air, miss the spots that need protection most,
              and leave white residue on your gear. Dry Goods™ fixes every one of those problems.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-5 sm:gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 sm:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/50">The old way</p>
              <h3 className="mt-2 font-display font-black uppercase tracking-tight text-xl sm:text-2xl text-white break-words">Bottle powder</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                {[
                  "Cakes & clumps on sweaty skin",
                  "Dust cloud — gets everywhere",
                  "Can't reach the back or between toes",
                  "White residue stains gear & clothes",
                  "Reapply constantly",
                ].map(x => (
                  <li key={x} className="flex items-start gap-2.5">
                    <XCircle className="size-5 text-white/40 shrink-0 mt-0.5" />
                    <span className="min-w-0 break-words">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-sky bg-sky-soft p-5 sm:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky">Dry Goods Athletic Spray Powder</p>
              <h3 className="mt-2 font-display font-black uppercase tracking-tight text-xl sm:text-2xl text-ink break-words hyphens-auto">Patented spray-to-powder</h3>
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
                    <span className="min-w-0 break-words">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto rounded-3xl bg-ink text-white p-8 sm:p-10 lg:p-12 text-center shadow-xl shadow-ink/20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Ready to stay dry?</span>
          <h3 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(28px,5vw,48px)] leading-[1.05] text-white">
            Grab a can. We'll handle <span className="text-sky">the rest.</span>
          </h3>
          <p className="mt-4 text-white/75 max-w-xl mx-auto">Add to cart in one tap.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-left">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">One-time purchase</div>
              <div className="font-sans font-bold text-3xl">$19.99</div>
            </div>
            <button
              onClick={handleAdd}
              className="inline-flex items-center justify-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white px-6 py-3.5 font-bold text-sm uppercase tracking-widest rounded-full shadow-lg shadow-sky/30"
            >
              Add to cart <ShoppingCart className="size-4" />
            </button>
          </div>
        </div>
      </section>

      <ClientLogos />
    </Layout>
  );
}

function ClientLogos() {
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-paper px-5 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-6xl mx-auto">
        <style>{`
          @keyframes client-logo-marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .client-logo-track {
            animation: client-logo-marquee 140s linear infinite;
            backface-visibility: hidden;
            will-change: transform;
          }
          @media (prefers-reduced-motion: reduce) {
            .client-logo-track { animation: none; }
          }
        `}</style>
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Trusted by teams</span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(26px,4vw,42px)] leading-[1.08] text-ink">
            Trusted by athletes, teams, and retailers.
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Dry Goods Athletic Spray Powder has supported performance programs and specialty partners across sport, retail, and training rooms.
          </p>
        </div>
        <div
          className="client-logo-mask mt-10 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <div className="client-logo-track flex w-max gap-3 py-2">
            {marqueeLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="grid h-24 w-40 shrink-0 place-items-center rounded-2xl border border-ink/10 bg-white px-4 py-5 shadow-sm shadow-ink/5 sm:w-44 lg:w-48">
                <img src={logo.src} alt={`${logo.name} logo`} decoding="async" className="max-h-12 w-auto max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div
          className="client-logo-mask mt-3 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <div className="client-logo-track flex w-max gap-3 py-2 [animation-direction:reverse] [animation-duration:170s]">
            {marqueeLogos.slice().reverse().map((logo, index) => (
              <div key={`${logo.name}-reverse-${index}`} className="grid h-24 w-40 shrink-0 place-items-center rounded-2xl border border-ink/10 bg-white px-4 py-5 shadow-sm shadow-ink/5 sm:w-44 lg:w-48">
                <img src={logo.src} alt="" decoding="async" className="max-h-12 w-auto max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="sr-only">
          {clientLogos.map((logo) => (
            <div key={logo.name}>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
