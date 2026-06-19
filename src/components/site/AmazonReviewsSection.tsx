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
            Loved by Customers
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            See what real athletes are saying about this product.
          </p>
          <a
            href="https://www.amazon.com/dp/B003YTUWJ8"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center gap-2 bg-ink text-white hover:bg-sky transition-colors px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full"
          >
            ★★★★★ Read on Amazon →
          </a>
        </div>

        <div className="bg-white border border-ink/10 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-sky hover:shadow-xl hover:shadow-sky/10 transition-all overflow-hidden">
          <div className="elfsight-app-ac7d1b96-f589-41c9-bc4c-d318faa011fb" data-elfsight-app-lazy />
        </div>
      </div>
    </section>
  );
}
