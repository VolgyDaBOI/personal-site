import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata = {
  title: "Blog - Michael Volgin",
  description: "Thoughts on engineering, building products, and life.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <AnimatedSection>
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-[var(--accent-blue)] transition-colors"
          >
            &larr; Home
          </Link>
          <h1 className="mt-6 text-3xl font-bold tracking-tight">Blog</h1>
          <p className="mt-2 text-muted-foreground">
            Thoughts on engineering, building products, and life.
          </p>
        </div>
      </AnimatedSection>

      <div className="flex flex-col gap-3">
        {posts.map((post, i) => (
          <AnimatedSection key={post.slug} delay={i * 0.1}>
            <BlogCard post={post} />
          </AnimatedSection>
        ))}
        {posts.length === 0 && (
          <p className="text-muted-foreground">No posts yet. Check back soon!</p>
        )}
      </div>
    </>
  );
}
