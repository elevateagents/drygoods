import { createFileRoute, Outlet } from "@tanstack/react-router";

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
  component: BlogLayout,
});

function BlogLayout() {
  return <Outlet />;
}
