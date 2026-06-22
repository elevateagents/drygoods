import { useEffect } from "react";

const ELFSIGHT_SRC = "https://apps.elfsight.com/p/platform.js";

export default function AmazonReviewsSection() {
  useEffect(() => {
    if (document.querySelector(`script[src="${ELFSIGHT_SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = ELFSIGHT_SRC;
    s.defer = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section
      id="reviews"
      className="bg-paper py-20 sm:py-24 md:py-32 px-5 sm:px-6 lg:px-8 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">
            Reviews
          </span>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(32px,5vw,56px)] leading-[1] text-ink">
            See what real customers are saying.
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Honest feedback from people who use DryGoods™ every day.
          </p>
        </div>

        <div className="bg-white border border-ink/10 rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden">
          <div className="elfsight-app-ac7d1b96-f589-41c9-bc4c-d318faa011fb" data-elfsight-app-lazy />
        </div>
      </div>
    </section>
  );
}
