import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Newspaper } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — DryGoods™" },
      { name: "description", content: "Training tips, athlete stories, and skin-care science from the DryGoods team." },
      { property: "og:title", content: "DryGoods™ Blog" },
      { property: "og:description", content: "Training tips, athlete stories, and skin-care science." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <Layout>
      <section className="bg-paper pt-28 pb-24 sm:pt-32 sm:pb-32 px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Blog</span>
          <h1 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(32px,5vw,56px)] leading-[1] text-ink">
            Field notes from <span className="text-sky">the team.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-ink/70 leading-relaxed">
            Training tips, athlete stories, and skin-care science — coming soon.
          </p>
          <div className="mt-12 rounded-3xl border border-ink/10 bg-white p-10 sm:p-14 flex flex-col items-center gap-4">
            <Newspaper className="size-12 text-sky" strokeWidth={1.6} />
            <h2 className="font-display font-black uppercase tracking-tight text-2xl sm:text-3xl text-ink">
              No posts yet.
            </h2>
            <p className="text-ink/65 max-w-md">
              We're working on our first articles. Check back soon — or follow along on social for early drops.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
