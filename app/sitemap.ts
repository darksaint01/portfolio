import type { MetadataRoute } from "next";
import { site } from "@/data/portfolio";
// Required for Next.js static HTML export: this metadata route must be prerendered.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, changeFrequency: "monthly", priority: 1 }];
}
