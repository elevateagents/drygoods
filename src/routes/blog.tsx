import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Newspaper } from "lucide-react";
import { getAllPosts, formatPostDate } from "@/lib/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — DryGoods™" },
      { name: "description", content: "Training tips, athlete stories, and skin-care science from the DryGoods team." },
      { property: "og:title", content: "DryGoods™ Blog" },
      { property: "og:description", content: "Training tips, athlete stories, and skin-care science." },
      { property: "og:url", content: "https://drygoods.lovable.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://drygoods.lovable.app/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const posts = getAllPosts();
  return (
    <Layout>
      <section className="bg-paper pt-28 pb-24 sm:pt-32 sm:pb-32 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Blog</span>
            <h1 className="mt-3 font-display font-black uppercase tracking-tight text-[clamp(32px,5vw,56px)] leading-[1] text-ink">
              Field notes from <span className="text-sky">the team.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink/70 leading-relaxed max-w-2xl mx-auto">
              Training tips, athlete stories, and skin-care science.
            </p>
          </div>

          <div className="mt-14">
            {posts.length === 0 ? (
              <div className="rounded-3xl border border-ink/10 bg-white p-10 sm:p-14 flex flex-col items-center gap-4 text-center">
                <Newspaper className="size-12 text-sky" strokeWidth={1.6} />
                <h2 className="font-display font-black uppercase tracking-tight text-2xl sm:text-3xl text-ink">
                  No posts yet.
                </h2>
                <p className="text-ink/65 max-w-md">
                  We're working on our first articles. Check back soon.
                </p>
              </div>
            ) : (
              <ul className="grid gap-6 sm:gap-8">
                {posts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="block group rounded-3xl border border-ink/10 bg-white p-6 sm:p-8 hover:border-sky transition-colors"
                    >
                      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
                        <time dateTime={p.date}>{formatPostDate(p.date)}</time>
                        {p.author && <span>· {p.author}</span>}
                      </div>
                      <h2 className="mt-3 font-display font-black uppercase tracking-tight text-2xl sm:text-3xl text-ink group-hover:text-sky transition-colors">
                        {p.title}
                      </h2>
                      {p.description && (
                        <p className="mt-3 text-ink/70 leading-relaxed">{p.description}</p>
                      )}
                      <span className="mt-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-sky">
                        Read article →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
