import { MetadataRoute } from "next";
import { pageDetails } from "./navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...Object.values(pageDetails).map(
      (details): MetadataRoute.Sitemap[number] => ({
        url: new URL(details.href, process.env.NEXT_PUBLIC_URL!).toString(),
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      })
    ),
  ];
}
