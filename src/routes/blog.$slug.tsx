import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, formatPostDate } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    const url = `https://drygoods.lovable.app/blog/${params.slug}`;
    if (!post) return { meta: [{ title: "Post not found — Dry Goods™" }] };
    return {
      meta: [
        { title: `${post.title} — Dry Goods™` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(post.cover ? [{ property: "og:image", content: post.cover }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: post.author ? { "@type": "Person", name: post.author } : undefined,
            image: post.cover,
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <Layout>
      <section className="bg-paper pt-28 pb-24 px-5 sm:px-6 lg:px-8 min-h-[60vh] flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-display font-black uppercase text-4xl text-ink">Post not found</h1>
          <p className="mt-4 text-ink/70">That article doesn't exist (yet).</p>
          <Link to="/blog" className="mt-8 inline-block text-sm font-bold uppercase tracking-[0.2em] text-sky">
            ← Back to blog
          </Link>
        </div>
      </section>
    </Layout>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <Layout>
      <article className="bg-paper pt-28 pb-24 sm:pt-32 sm:pb-32 px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ink/60 hover:text-sky transition-colors"
          >
            <ArrowLeft className="size-4" />
            All articles
          </Link>

          <header className="mt-6">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              {post.author && <span>· {post.author}</span>}
            </div>
            <h1 className="mt-4 font-display font-black uppercase tracking-tight text-[clamp(32px,5vw,56px)] leading-[1.05] text-ink">
              {post.title}
            </h1>
            {post.description && (
              <p className="mt-5 text-lg text-ink/70 leading-relaxed">{post.description}</p>
            )}
          </header>

          <div
            className="prose prose-lg mt-10 max-w-none text-ink/85 prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-ink prose-a:text-sky prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>
    </Layout>
  );
}
