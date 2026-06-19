import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Marquee } from "@/components/site/Marquee";
import { SectionNumber } from "@/components/site/SectionNumber";
import { StickerBadge } from "@/components/site/StickerBadge";
import canHero from "@/assets/can-hero.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dry+Goods — Patented in Raleigh. Refined Every Season." },
      { name: "description", content: "Joyce Labs LLC built Dry+Goods because dump-on powders, sticks, and creams all failed athletes. The patented valve was just the beginning." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="px-5 md:px-6 lg:px-8 pt-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-2 mb-8"><StickerBadge variant="since" /><StickerBadge variant="patent" /></div>
          <h1 className="font-display text-[clamp(40px,12vw,148px)] font-black uppercase leading-[0.85] tracking-tighter">
            We made it<br/>because <span className="text-heat italic font-editorial font-normal">nothing</span><br/>else worked.
          </h1>
        </div>
      </section>
      <Marquee items={["Raleigh, NC", "Joyce Labs LLC", "Patented 2014", "Refined Every Season"]} />
      <section className="px-5 md:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <div className="bg-ice aspect-[4/5] grid place-items-center md:sticky md:top-20">
              <img src={canHero} alt="" className="h-[80%]" />
            </div>
          </div>
          <div className="md:col-span-7 space-y-10">
            <SectionNumber n="01" label="Origin" />
            <p className="font-editorial italic text-3xl leading-[1.15]">
              "I dumped baby powder in my gym bag for ten years. The bag never recovered."
            </p>
            <p className="text-lg max-w-[60ch]">
              Dry+Goods started in a Raleigh garage in 2009. The founder, a CrossFit coach and ex-Marine, was tired of the trade-offs. Sticks melted. Sprays went on wet and stayed wet. Powders made a mess. He worked with chemists for five years to engineer a pressurized spray-to-powder valve that fired from any angle, dried instantly, and stayed put through the worst sets of his life.
            </p>
            <SectionNumber n="02" label="The Patent" />
            <p className="text-lg max-w-[60ch]">
              In 2014 the United States Patent Office granted U.S. Patent 8,778,406 B2 for the aerosol delivery system. We've refined the formula every season since — adding talc-free options, eliminating parabens, and listening to the runners, lifters, cyclists, and operators who put it through hell.
            </p>
            <SectionNumber n="03" label="Made Here" />
            <p className="text-lg max-w-[60ch]">
              Designed and manufactured in the USA. Bottled and shipped from Raleigh, NC. Family-owned. Athlete-tested. We answer the phone.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
