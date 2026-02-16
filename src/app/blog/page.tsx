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
        <Link
          href="/"
          className="text-sm text-[var(--muted)] hover:text-[var(--accent-blue)] transition-colors"
        >
          &larr; Home
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Blog</h1>
        <p className="mt-4 text-[var(--muted)]">
          Thoughts on engineering, building products, and life.
        </p>
      </AnimatedSection>

      <div className="mt-12 flex flex-col gap-4">
        {posts.map((post, i) => (
          <AnimatedSection key={post.slug} delay={i * 0.1}>
            <BlogCard post={post} />
          </AnimatedSection>
        ))}
        {posts.length === 0 && (
          <p className="text-[var(--muted)]">No posts yet. Check back soon!</p>
        )}
      </div>
    </>
  );
}
