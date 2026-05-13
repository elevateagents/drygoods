import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dry Goods" },
      { name: "description", content: "Reach Dry Goods. We answer the phone. 305-769-8397 · info@drygoods.com." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [done, setDone] = useState(false);
  return (
    <Layout>
      <section className="px-5 md:px-6 lg:px-8 pt-16 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-6">
            <h1 className="font-display text-[clamp(56px,11vw,140px)] font-black uppercase leading-[0.85] tracking-tighter">
              We answer<br/>the <span className="text-heat italic font-editorial font-normal">phone.</span>
            </h1>
            <ul className="mt-10 space-y-5">
              <li>
                <p className="text-xs font-bold uppercase tracking-widest text-steel">Phone</p>
                <a href="tel:3057698397" className="font-display text-3xl font-black hover:text-heat">305-769-8397</a>
              </li>
              <li>
                <p className="text-xs font-bold uppercase tracking-widest text-steel">Email</p>
                <a href="mailto:info@drygoods.com" className="font-display text-3xl font-black hover:text-heat">info@drygoods.com</a>
              </li>
              <li>
                <p className="text-xs font-bold uppercase tracking-widest text-steel">HQ</p>
                <p className="font-display text-2xl font-black">Joyce Labs LLC<br/>Raleigh, NC 27614</p>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6">
            {done ? (
              <div className="bg-ice border-2 border-ink p-10 text-center h-full grid place-items-center">
                <div>
                  <p className="font-display text-4xl font-black uppercase">Sent.</p>
                  <p className="mt-2">We'll get back within one business day.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-4 border-2 border-ink p-7">
                <Field label="Name" name="name" />
                <Field label="Email" name="email" type="email" />
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-steel">Message</label>
                  <textarea required rows={6} className="w-full mt-2 border-2 border-ink/20 focus:border-ink p-3 min-h-[48px] bg-paper outline-none text-base" />
                </div>
                <button className="w-full bg-ink text-paper py-4 font-display font-black uppercase tracking-tight hover:bg-heat">
                  Send →
                </button>
              </form>
            )}
          </div>
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
