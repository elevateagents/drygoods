import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { useCart } from "@/lib/cart-store";

const clientLogoModules = import.meta.glob<string>("../assets/client-logos/*.{png,jpg,jpeg,webp,gif}", {
  eager: true,
  import: "default",
  query: "?url",
});

const hiddenClientLogoFiles = new Set([
  "Exclusive.jpg",
  "SchoolHealth.jpg",
]);

const clientLogoClassByFile: Record<string, string> = {
  "Colts.png": "scale-[0.82]",
  "Hamilton.jpg": "scale-[1.45]",
  "HS.png": "scale-[1.7]",
  "iTri.png": "scale-[1.8]",
  "JS.jpg": "scale-[1.35]",
};

const clientLogos = Object.entries(clientLogoModules)
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "Client logo";
    const name = fileName.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ");
    return {
      name,
      src,
      fileName,
      className: clientLogoClassByFile[fileName] ?? "",
    };
  })
  .filter((logo) => !hiddenClientLogoFiles.has(logo.fileName))
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
            backface-visibility: hidden;
            will-change: transform;
          }
          .client-logo-track-primary {
            animation: client-logo-marquee 140s linear infinite;
          }
          .client-logo-track-secondary {
            animation: client-logo-marquee 170s linear infinite reverse;
          }
          .client-logo-mark {
            transform-origin: center;
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
          <div className="client-logo-track client-logo-track-primary flex w-max gap-3 py-2">
            {marqueeLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="grid h-24 w-40 shrink-0 place-items-center rounded-2xl border border-ink/10 bg-white px-4 py-5 shadow-sm shadow-ink/5 sm:w-44 lg:w-48">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  decoding="async"
                  loading="lazy"
                  className={`client-logo-mark max-h-12 w-auto max-w-full object-contain sm:max-h-14 ${logo.className}`}
                />
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
          <div className="client-logo-track client-logo-track-secondary flex w-max gap-3 py-2">
            {marqueeLogos.slice().reverse().map((logo, index) => (
              <div key={`${logo.name}-reverse-${index}`} className="grid h-24 w-40 shrink-0 place-items-center rounded-2xl border border-ink/10 bg-white px-4 py-5 shadow-sm shadow-ink/5 sm:w-44 lg:w-48">
                <img
                  src={logo.src}
                  alt=""
                  decoding="async"
                  loading="lazy"
                  className={`client-logo-mark max-h-12 w-auto max-w-full object-contain sm:max-h-14 ${logo.className}`}
                />
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
