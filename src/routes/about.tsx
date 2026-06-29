import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCart, XCircle, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { useCart } from "@/lib/cart-store";
import aboutRunningTrack from "@/assets/about-running-track.jpg";
import aboutGymLifting from "@/assets/about-gym-lifting.jpg";
import aboutCourtAction from "@/assets/about-court-action.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DryGoods™ — Built by Athletes Who Refused 'Good Enough'" },
      { name: "description", content: "How DryGoods™ was born from real-world testing — the story behind the patented spray-to-powder formula." },
      { property: "og:title", content: "About DryGoods™" },
      { property: "og:description", content: "We didn't set out to build a brand. We set out to solve a problem." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { add, setOpen } = useCart();
  const gallery = [
    { src: aboutRunningTrack, alt: "Runner sprinting on track at sunrise" },
    { src: aboutGymLifting, alt: "Athlete training in the gym" },
    { src: aboutCourtAction, alt: "Basketball player driving to the rim at golden hour" },
  ];
  const handleAdd = () => {
    void add("onetime", 1);
    setOpen(true);
  };
  return (
    <Layout>
      <section className="bg-paper pt-28 pb-20 sm:pt-32 sm:pb-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">About Us</span>
            <h1 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(34px,6vw,64px)] leading-[1] text-ink">
              Stay dry. Stay <span className="text-sky">unstoppable.</span>
            </h1>
            <p className="mt-6 font-sans text-base sm:text-lg text-ink/75 leading-relaxed">
              Athletes push their limits.
            </p>
            <p className="mt-4 font-sans text-base sm:text-lg text-ink/75 leading-relaxed">
              DryGoods™ is built to keep up. Designed to combat sweat, moisture, and friction, our advanced
              formula delivers long-lasting dryness and all-day comfort.
            </p>
            <p className="mt-4 font-sans text-base sm:text-lg text-ink/75 leading-relaxed">
              Whether you're on the field, in the gym, or pushing through intense training, DryGoods™ helps
              you stay cool, dry, and performing at your best. No mess, no residue — just powerful protection
              when you need it most. Try it once, and you'll never train without it.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {gallery.map((g) => (
              <div key={g.src} className="aspect-square overflow-hidden rounded-2xl bg-white">
                <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>

          <div className="mt-16 -mx-5 sm:-mx-6 lg:-mx-8 bg-gradient-to-tr from-ink via-[#111111] to-black py-16 sm:py-20 px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">How it all began</span>
              <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(24px,4.5vw,48px)] leading-[1] text-white">
                We didn't set out to build a brand. We set out to <span className="text-sky">solve a problem.</span>
              </h2>
              <p className="mt-5 font-sans text-base text-white/75 leading-relaxed">
                Early mornings, double sessions, two a days, competitions that push you past what you
                thought possible. At that level, every detail matters — and the wrong gear can cost you.
              </p>
              <p className="mt-4 font-sans text-base text-white/75 leading-relaxed">
                Dump-on powder was one of those details that never worked. Wet, chalky, uncomfortable — it
                was a problem athletes just learned to tolerate. We didn't.
              </p>
              <p className="mt-4 font-sans text-base text-white/75 leading-relaxed">
                DryGoods™ was built by athletes who refused to accept "good enough." After years of
                real-world testing on athletes, we launched in 2010. What started as a cult product among
                serious competitors has grown into a trusted solution for anyone who trains, competes, and
                refuses to slow down.
              </p>
            </div>

            {/* Traditional powders vs DryGoods */}
            <div className="mt-20 max-w-5xl mx-auto">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Old way vs new way</span>
                <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(26px,4.5vw,44px)] leading-[1.05] text-white">
                  The problem with <span className="text-sky">traditional powders.</span>
                </h2>
                <p className="mt-5 font-sans text-base text-white/70 leading-relaxed">
                  Traditional powders cake on skin, dust the air, miss the spots that need protection most,
                  and leave white residue on your gear. DryGoods™ fixes every one of those problems.
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
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky">DryGoods™</p>
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
          </div>

          <div className="mt-16 max-w-3xl mx-auto rounded-3xl bg-ink text-white p-8 sm:p-10 lg:p-12 text-center shadow-xl shadow-ink/20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Ready to stay dry?</span>
            <h3 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(28px,5vw,48px)] leading-[1.05] text-white">
              Grab a can. We'll handle <span className="text-sky">the rest.</span>
            </h3>
            <p className="mt-4 text-white/75 max-w-xl mx-auto">One can — add to cart in one tap.</p>
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
        </div>
      </section>
    </Layout>
  );
}
