import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card className="transition-colors hover:bg-accent/50 border-border/50 py-4">
        <CardHeader className="gap-1">
          <div className="flex items-baseline justify-between gap-4">
            <CardTitle className="text-sm tracking-tight group-hover:text-foreground">
              {post.title}
            </CardTitle>
            <time className="text-xs text-muted-foreground shrink-0">
              {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </time>
          </div>
          <CardDescription className="line-clamp-1">
            {post.description}
          </CardDescription>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-1.5 mt-1">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
