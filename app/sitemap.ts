import { MetadataRoute } from "next";
import { Page, pageDetails } from "./navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL(
        pageDetails[Page.Home].href,
        process.env.NEXT_PUBLIC_URL!
      ).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: new URL(
        pageDetails[Page.About].href,
        process.env.NEXT_PUBLIC_URL!
      ).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: new URL(
        pageDetails[Page.ColorPicker].href,
        process.env.NEXT_PUBLIC_URL!
      ).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL(
        pageDetails[Page.BaseConverter].href,
        process.env.NEXT_PUBLIC_URL!
      ).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL(
        pageDetails[Page.RandomNumberGenerator].href,
        process.env.NEXT_PUBLIC_URL!
      ).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL(
        pageDetails[Page.WordCounter].href,
        process.env.NEXT_PUBLIC_URL!
      ).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
