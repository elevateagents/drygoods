import { marked } from "marked";

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, content: raw };
  const data: Record<string, unknown> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (!kv) continue;
    let val: unknown = kv[2].trim();
    if (typeof val === "string") {
      if (/^\[.*\]$/.test(val)) {
        val = val.slice(1, -1).split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
      } else {
        val = (val as string).replace(/^["']|["']$/g, "");
      }
    }
    data[kv[1]] = val;
  }
  return { data, content: m[2] };
}

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
    const { data, content } = parseFrontmatter(raw);
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
