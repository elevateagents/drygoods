import matter from "gray-matter";
import { marked } from "marked";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  cover?: string;
  tags?: string[];
};

export type Post = PostMeta & { html: string };

// Eagerly load all markdown files in src/content/blog/ as raw strings.
const files = import.meta.glob("/src/content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function slugFromPath(path: string): string {
  const file = path.split("/").pop() ?? "";
  return file.replace(/\.md$/, "");
}

const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, content } = matter(raw);
    const html = marked.parse(content, { async: false }) as string;
    return {
      slug: slugFromPath(path),
      title: String(data.title ?? slugFromPath(path)),
      description: String(data.description ?? ""),
      date: String(data.date ?? ""),
      author: data.author ? String(data.author) : undefined,
      cover: data.cover ? String(data.cover) : undefined,
      tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
      html,
    } satisfies Post;
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(date: string): string {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
