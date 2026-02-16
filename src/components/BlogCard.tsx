import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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
      {post.tags.length > 0 && (
        <div className="mt-2 flex gap-1.5 flex-wrap">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[11px] font-normal px-1.5 py-0"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </Link>
  );
}
