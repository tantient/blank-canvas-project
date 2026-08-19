import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Project" },
      { name: "description", content: "Empty project" },
      { property: "og:title", content: "Project" },
      { property: "og:description", content: "Empty project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return <div className="min-h-screen bg-background" />;
}

