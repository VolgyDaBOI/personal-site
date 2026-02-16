import { Hero } from "@/components/Hero";
import { SocialLinks } from "@/components/SocialLinks";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />

      <AnimatedSection delay={0.3}>
        <section className="pb-12">
          <p className="text-lg text-[var(--muted)] max-w-xl leading-relaxed">
            Developer and builder. I love creating tools and products that solve
            real problems. Currently focused on shipping fast and learning every
            day.
          </p>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <section className="pb-16">
          <SocialLinks />
        </section>
      </AnimatedSection>

      {recentPosts.length > 0 && (
        <AnimatedSection delay={0.5}>
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Posts</h2>
              <Link
                href="/blog"
                className="text-sm text-[var(--muted)] hover:text-[var(--accent-blue)] transition-colors"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="flex flex-col gap-4">
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
