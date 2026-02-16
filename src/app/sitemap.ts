import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `https://michagod.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: "https://michagod.com",
      lastModified: new Date(),
    },
    {
      url: "https://michagod.com/blog",
      lastModified: new Date(),
    },
    ...posts,
  ];
}
