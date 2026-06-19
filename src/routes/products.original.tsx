import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { useCart, PLAN_META, type Plan } from "@/lib/cart-store";
import { Minus, Plus, Check, ShieldCheck, Truck, Recycle } from "lucide-react";
import canHero from "@/assets/can-hero.png";

export const Route = createFileRoute("/products/original")({
  head: () => ({
    meta: [
      { title: "Dry+Goods Original 5.4 oz — $19.99 | Patented Dry+Goods" },
      { name: "description", content: "Patented athletic dry+goods. 5.4 oz can. Subscribe weekly (-20%) or monthly (-15%). Free shipping over $35." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Dry+Goods Original Athletic 5.4 oz",
          brand: { "@type": "Brand", name: "Dry+Goods" },
          description: "Patented spray-to-powder formula. Prevents chafing, blisters, sweat-driven friction.",
          offers: { "@type": "Offer", priceCurrency: "USD", price: "19.99", availability: "https://schema.org/InStock" },
        }),
      },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const [plan, setPlan] = useState<Plan>("monthly");
  const [qty, setQty] = useState(1);
  const { add } = useCart();
  const meta = PLAN_META[plan];

  return (
    <Layout>
      <section className="px-5 md:px-6 lg:px-8 pt-8 lg:pt-10 pb-32 md:pb-16 lg:pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
          {/* Imagery */}
          <div className="md:col-span-7 md:sticky md:top-20 md:self-start">
            <div className="bg-ice/40 aspect-[4/5] grid place-items-center relative overflow-hidden">
              <img src={canHero} alt="Dry+Goods Original 5.4 oz can" className="h-[85%] w-auto" width={800} height={1200} />
              <span className="absolute top-5 left-5 text-[10px] font-black uppercase tracking-widest bg-ink text-paper px-2 py-1">In Stock</span>
              <span className="absolute bottom-5 right-5 font-editorial italic text-ink/60">5.4 oz / 153 g</span>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
              {[1,2,3].map(i => (
                <div key={i} className="bg-paper border border-ink/10 aspect-square grid place-items-center">
                  <img src={canHero} alt="" className="h-2/3 w-auto opacity-80" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <Link to="/" className="text-[10px] uppercase tracking-widest font-bold text-steel hover:text-heat">← Back</Link>
              <h1 className="font-display text-5xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter mt-4">
                Dry+Goods<br/>Original 5.4 oz
              </h1>
              <p className="mt-4 font-editorial italic text-xl text-ink/80">
                The patented spray-to-powder armor. One can. Every sport.
              </p>
            </div>

            <div className="border-y border-ink/15 py-5 flex items-baseline justify-between">
              <span className="font-display text-5xl font-black tracking-tighter">${meta.price}</span>
              {meta.sub && <span className="text-xs font-bold uppercase tracking-widest text-cool">{meta.sub}</span>}
            </div>

            {/* Variant selector */}
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-steel">Choose Cadence</p>
              {(Object.keys(PLAN_META) as Plan[]).map((p) => {
                const m = PLAN_META[p];
                const active = plan === p;
                return (
                  <button
                    key={p}
                    onClick={() => setPlan(p)}
                    className={`w-full text-left p-4 border-2 flex justify-between items-center transition-all ${active ? "border-ink bg-ink text-paper" : "border-ink/15 hover:border-ink"}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`size-4 border-2 grid place-items-center ${active ? "border-paper" : "border-ink"}`}>
                        {active && <Check className="size-3" />}
                      </span>
                      <div>
                        <p className="font-bold uppercase tracking-widest text-xs">{m.label}</p>
                        {m.sub && <p className={`text-[10px] uppercase tracking-widest mt-0.5 ${active ? "text-ice" : "text-cool"}`}>{m.sub}</p>}
                      </div>
                    </div>
                    <span className="font-display font-black text-xl">${m.price}</span>
                  </button>
                );
              })}
            </div>

            {/* Qty + ATC */}
            <div className="flex gap-3">
              <div className="flex items-center border-2 border-ink">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-3 hover:bg-ink hover:text-paper"><Minus className="size-4"/></button>
                <span className="px-4 font-display font-black text-lg min-w-[2ch] text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3 py-3 hover:bg-ink hover:text-paper"><Plus className="size-4"/></button>
              </div>
              <button
                onClick={() => add(plan, qty)}
                className="flex-1 bg-ice text-ink font-display font-black uppercase tracking-tight text-lg py-4 border-2 border-ink hover:bg-ink hover:text-ice transition-colors"
              >
                Add to Cart — ${(meta.price * qty).toFixed(2)}
              </button>
            </div>

            {/* Trust strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <Trust icon={<ShieldCheck className="size-5" />} label="Patented" />
              <Trust icon={<Truck className="size-5" />} label="Free over $35" />
              <Trust icon={<Recycle className="size-5" />} label="Skip anytime" />
            </div>

            {/* Accordions */}
            <div className="border-t border-ink/15">
              {[
                { t: "Ingredients", b: "Aluminum starch octenylsuccinate, isobutane, dimethyl ether, fragrance. Talc-free option available." },
                { t: "How to use", b: "Shake well. Spray 6 inches from skin. Apply to chafe-prone zones pre-workout. Reapply for marathon-length sessions." },
                { t: "Shipping", b: "Ships from Raleigh, NC within 1 business day. Free shipping on orders over $35." },
                { t: "Returns", b: "30-day satisfaction guarantee. Email info@drygoods.com to start a return." },
              ].map((row) => (
                <details key={row.t} className="border-b border-ink/15 group">
                  <summary className="cursor-pointer py-4 flex justify-between items-center font-display font-black uppercase tracking-tight">
                    {row.t}
                    <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="pb-4 text-sm text-ink/75 max-w-[55ch]">{row.b}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile buy bar */}
      <div className="fixed bottom-0 inset-x-0 md:hidden z-30 bg-ink text-paper px-4 py-3 flex items-center gap-3 border-t-2 border-ice">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-steel">{meta.label}</p>
          <p className="font-display font-black text-xl">${meta.price}</p>
        </div>
        <button
          onClick={() => add(plan, qty)}
          className="flex-1 bg-ice text-ink font-display font-black uppercase tracking-tight py-3"
        >
          Add to Cart
        </button>
      </div>
    </Layout>
  );
}

function Trust({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center p-3 border border-ink/10">
      {icon}
      <span className="text-[10px] uppercase tracking-widest font-bold">{label}</span>
    </div>
  );
}
