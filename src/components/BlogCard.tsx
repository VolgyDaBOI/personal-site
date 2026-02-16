import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card className="transition-colors hover:border-[var(--accent-blue)]/50 hover:bg-accent/50">
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <time>{post.date}</time>
                <span>&middot;</span>
                <span>{post.readingTime}</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-[var(--accent-blue)] transition-colors">
                {post.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                {post.description}
              </p>
              {post.tags.length > 0 && (
                <div className="mt-3 flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
