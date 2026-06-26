import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getPostSlugs } from "@/lib/posts";

const BASE_URL = "https://drygoods.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/products/original", priority: "0.9" },
          { path: "/about", priority: "0.7" },
          { path: "/blog", priority: "0.7" },
          { path: "/wholesale", priority: "0.6" },
          { path: "/contact", priority: "0.5" },
          ...getPostSlugs().map((slug) => ({ path: `/blog/${slug}`, priority: "0.6" })),
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map(e => `  <url><loc>${BASE_URL}${e.path}</loc><priority>${e.priority}</priority></url>`),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
