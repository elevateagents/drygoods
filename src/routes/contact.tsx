import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dry Goods™" },
      { name: "description", content: "Reach Dry Goods. We answer the phone. 305-769-8397 · info@drygoods.com." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [done, setDone] = useState(false);
  return (
    <Layout>
      <section className="bg-paper px-5 md:px-6 lg:px-8 pt-20 pb-24 sm:pt-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Contact</span>
            <h1 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(32px,5vw,56px)] leading-[1] text-ink">
              We answer the <span className="text-sky">phone.</span>
            </h1>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Questions, wholesale, or a custom order — reach out and we'll respond within one business day.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 lg:gap-8">
            {/* Info card */}
            <div className="md:col-span-2 rounded-3xl bg-ink text-white p-7 sm:p-9 shadow-xl shadow-ink/10">
              <h2 className="font-display font-black uppercase tracking-tight text-2xl">Get in touch</h2>
              <ul className="mt-8 space-y-7">
                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-sky/20 grid place-items-center shrink-0">
                    <Phone className="size-5 text-sky" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Phone</p>
                    <a href="tel:3057698397" className="block font-bold text-lg hover:text-sky">305-769-8397</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-sky/20 grid place-items-center shrink-0">
                    <Mail className="size-5 text-sky" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Email</p>
                    <a href="mailto:info@drygoods.com" className="block font-bold text-lg hover:text-sky break-words">info@drygoods.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-sky/20 grid place-items-center shrink-0">
                    <MapPin className="size-5 text-sky" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">HQ</p>
                    <p className="font-bold text-lg leading-snug">Joyce Labs LLC<br/>Raleigh, NC 27614</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form card */}
            <div className="md:col-span-3 rounded-3xl bg-white border border-ink/10 p-7 sm:p-9 shadow-xl shadow-sky/10">
              {done ? (
                <div className="h-full min-h-[320px] grid place-items-center text-center">
                  <div>
                    <p className="font-display font-black uppercase tracking-tight text-3xl text-ink">Thanks — sent.</p>
                    <p className="mt-3 text-ink/70">We'll get back within one business day.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-5">
                  <Field label="Name" name="name" />
                  <Field label="Email" name="email" type="email" />
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/60">Message</label>
                    <textarea required rows={6} className="w-full mt-2 rounded-xl border border-ink/15 focus:border-sky focus:ring-2 focus:ring-sky/20 p-4 bg-paper outline-none text-base text-ink resize-none" />
                  </div>
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white px-6 py-4 font-bold text-sm uppercase tracking-widest rounded-full shadow-lg shadow-sky/30">
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/60">{label}</label>
      <input required name={name} type={type} className="w-full mt-2 rounded-xl border border-ink/15 focus:border-sky focus:ring-2 focus:ring-sky/20 p-4 bg-paper outline-none text-base text-ink" />
    </div>
  );
}
