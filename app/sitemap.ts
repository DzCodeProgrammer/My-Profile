import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://dzcodeprogrammer.dev", priority: 1 },
    ...projects.map((project) => ({ url: `https://dzcodeprogrammer.dev/projects/${project.slug}`, priority: 0.8 }))
  ];
}
