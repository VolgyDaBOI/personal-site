import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata = {
  title: "Blog - Michael Volgin",
  description: "Thoughts on engineering, building products, and life.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <AnimatedSection>
        <div className="mb-8">
          <nav className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
            <Button variant="ghost" size="xs" asChild>
              <Link href="/">
                <Home className="size-3" /> ~
              </Link>
            </Button>
            <span>/</span>
            <span className="text-foreground">blog</span>
            <div className="ml-auto mr-2">
              <ThemeToggle />
            </div>
          </nav>
          <h1 className="mt-6 text-2xl font-semibold tracking-tight">Blog</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Thoughts on engineering, building products, and life.
          </p>
        </div>
      </AnimatedSection>

      <div className="flex flex-col gap-3">
        {posts.map((post, i) => (
          <AnimatedSection key={post.slug} delay={i * 0.05}>
            <BlogCard post={post} />
          </AnimatedSection>
        ))}
        {posts.length === 0 && (
          <p className="text-muted-foreground">No posts yet.</p>
        )}
      </div>
    </>
  );
}
