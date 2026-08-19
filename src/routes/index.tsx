import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/landing/LandingPage";
import heroAsset from "@/assets/zenova-hero.jpg.asset.json";

const SITE_URL = "https://id-preview--2c119f21-b14d-4bc2-8b7d-cf1e8edf1061.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zenova Cruise | Du thuyền 6 sao Hạ Long - Lan Hạ" },
      {
        name: "description",
        content:
          "Zenova Cruise - trải nghiệm du thuyền 6 sao tại vịnh Hạ Long và Lan Hạ. Đặt chỗ, nhận báo giá và khám phá kỳ quan thiên nhiên theo phong cách sang trọng.",
      },
      { property: "og:title", content: "Zenova Cruise | Du thuyền 6 sao Hạ Long - Lan Hạ" },
      {
        property: "og:description",
        content:
          "Trải nghiệm du thuyền 6 sao giữa vịnh Hạ Long và Lan Hạ. Đặt chỗ ngay.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}${heroAsset.url}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}${heroAsset.url}` },
    ],
  }),
  component: LandingPage,
});
