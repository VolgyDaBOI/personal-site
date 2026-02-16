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
      <SocialLinks />

      <Separator className="my-10" />

      {recentPosts.length > 0 && (
        <AnimatedSection delay={0.15}>
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Writing
              </h2>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                All posts &rarr;
              </Link>
            </div>
            <div>
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
