import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.nubblshop.com" },
    { url: "https://www.nubblshop.com/privacy" },
    { url: "https://www.nubblshop.com/terms" },
  ];
}
