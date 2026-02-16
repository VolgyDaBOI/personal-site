import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block py-4 border-b border-border last:border-0 transition-opacity hover:opacity-70"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium tracking-tight">
          {post.title}
        </h3>
        <time className="text-sm text-muted-foreground shrink-0">
          {post.date}
        </time>
      </div>
      <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
        {post.description}
      </p>
    </Link>
  );
}
