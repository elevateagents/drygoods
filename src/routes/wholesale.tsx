import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { SectionNumber } from "@/components/site/SectionNumber";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "Wholesale — Dry Goods for Gyms, Teams & Retailers" },
      { name: "description", content: "Stock Dry Goods. Volume tiers for gyms, teams, military, and specialty retailers. Submit a wholesale inquiry." },
    ],
  }),
  component: Wholesale,
});

const TIERS = [
  { name: "Studio", min: "12 cans", note: "Box gyms, boxes, boutique studios" },
  { name: "Team", min: "48 cans", note: "Collegiate, club, and pro teams" },
  { name: "Retail", min: "144 cans", note: "Specialty sports & outdoor retail" },
];

function Wholesale() {
  const [done, setDone] = useState(false);
  return (
    <Layout>
      <section className="px-5 lg:px-8 pt-16 pb-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-[clamp(48px,10vw,128px)] font-black uppercase leading-[0.85] tracking-tighter">
            Stock the<br/>only thing<br/>that <span className="text-heat italic font-editorial font-normal">works.</span>
          </h1>
          <p className="font-editorial italic text-2xl mt-6 max-w-[40ch]">
            Volume pricing for gyms, teams, units, and retailers. Net 30 available.
          </p>
        </div>
      </section>

      <section className="px-5 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <SectionNumber n="01" label="Volume Tiers" />
          <div className="grid md:grid-cols-3 gap-3">
            {TIERS.map((t) => (
              <div key={t.name} className="border-2 border-ink p-7 bg-paper">
                <p className="text-xs font-bold uppercase tracking-widest text-steel">{t.name}</p>
                <p className="font-display text-5xl font-black tracking-tighter mt-2">{t.min}</p>
                <p className="text-sm mt-3 text-ink/75">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <SectionNumber n="02" label="Inquiry" />
          {done ? (
            <div className="bg-ice border-2 border-ink p-10 text-center">
              <p className="font-display text-3xl font-black uppercase">Got it.</p>
              <p className="mt-2">We'll be in touch within one business day.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setDone(true); }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <Field label="Business Name" name="biz" />
              <Field label="Contact" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" />
              <div className="sm:col-span-2">
                <Field label="Estimated cans / month" name="vol" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-steel">Notes</label>
                <textarea name="notes" rows={4} className="w-full mt-2 border-2 border-ink/20 focus:border-ink p-3 min-h-[48px] bg-paper outline-none text-base" />
              </div>
              <button className="sm:col-span-2 bg-ink text-paper py-4 font-display font-black uppercase tracking-tight border-2 border-ink hover:bg-heat hover:border-heat">
                Submit Inquiry →
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-widest text-steel">{label}</label>
      <input required name={name} type={type} className="w-full mt-2 border-2 border-ink/20 focus:border-ink p-3 min-h-[48px] bg-paper outline-none text-base" />
    </div>
  );
}
