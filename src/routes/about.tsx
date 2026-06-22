import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { useCart } from "@/lib/cart-store";
import aboutPickleballCourt from "@/assets/about-pickleball-court.png.asset.json";
import aboutPickleballPaddle from "@/assets/about-pickleball-paddle.png.asset.json";
import aboutGolfDusk from "@/assets/about-golf-dusk.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DryGoods™ — Built by Athletes Who Refused 'Good Enough'" },
      { name: "description", content: "How DryGoods™ Athletic was born from real-world testing — the story behind the patented spray-to-powder formula." },
      { property: "og:title", content: "About DryGoods™" },
      { property: "og:description", content: "We didn't set out to build a brand. We set out to solve a problem." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { add, setOpen } = useCart();
  const gallery = [
    { src: aboutPickleballCourt.url, alt: "DryGoods can on pickleball court at sunrise" },
    { src: aboutPickleballPaddle.url, alt: "DryGoods can with pickleball paddle and ball" },
    { src: aboutGolfDusk.url, alt: "DryGoods can on golf course at dusk" },
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
            <h1 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(28px,4.5vw,48px)] leading-[1.05] text-ink">
              Keeps skin dry. Prevents blisters &amp; chafing during athletic activities.
            </h1>
            <p className="mt-6 font-sans text-base sm:text-lg text-ink/75 leading-relaxed">
              Athletes push their limits, and DryGoods™ Athletic is built to keep up.
              Designed to combat sweat, moisture, and friction, our advanced formula delivers long-lasting
              dryness and all-day comfort.
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

          <div className="mt-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">How it all began</span>
            <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(24px,3.5vw,36px)] leading-[1.05] text-ink">
              We didn't set out to build a brand. We set out to solve a problem.
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
              DryGoods™ was built by athletes who refused to accept "good enough." After years of
              real-world testing on athletes, we launched in 2010. What started as a cult product among
              serious competitors has grown into a trusted solution for anyone who trains, competes, and
              refuses to slow down.
            </p>
          </div>

          <div className="mt-16 max-w-3xl mx-auto rounded-3xl bg-ink text-white p-8 sm:p-10 lg:p-12 text-center shadow-xl shadow-ink/20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Ready to stay dry?</span>
            <h3 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(24px,4vw,40px)] leading-[1.05]">
              Grab a can. We'll handle the rest.
            </h3>
            <p className="mt-4 text-white/75 max-w-xl mx-auto">One 5.4 oz can — add to cart in one tap.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="text-left">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">One-time purchase</div>
                <div className="font-display font-black text-3xl">$19.99</div>
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
