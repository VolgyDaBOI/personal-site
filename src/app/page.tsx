import { Hero } from "@/components/Hero";
import { SocialLinks } from "@/components/SocialLinks";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />

      <AnimatedSection delay={0.2}>
        <SocialLinks />
      </AnimatedSection>

      <Separator className="my-12" />

      {recentPosts.length > 0 && (
        <AnimatedSection delay={0.3}>
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold tracking-tight">Recent Posts</h2>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-[var(--accent-blue)] transition-colors"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        </AnimatedSection>
      )}

      <Footer />
    </>
  );
}
