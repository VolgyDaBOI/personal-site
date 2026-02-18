import { Hero } from "@/components/Hero";
import { SocialLinks } from "@/components/SocialLinks";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowRight, Home as HomeIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michael Volgin",
  url: "https://michagod.com",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Enclave",
    url: "https://enclave.ai",
  },
  sameAs: [
    "https://github.com/VolgyDaBOI",
    "https://www.linkedin.com/in/michael-volgin/",
    "https://x.com/michag0d",
  ],
};

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="flex items-center gap-1 text-xs text-muted-foreground font-mono mb-8">
        <Button variant="ghost" size="xs" className="pointer-events-none">
          <HomeIcon className="size-3" /> ~
        </Button>
        <div className="ml-auto mr-2">
          <ThemeToggle />
        </div>
      </nav>
      <Hero />
      <SocialLinks />

      <Separator className="my-10" />

      {recentPosts.length > 0 && (
        <AnimatedSection delay={0.15}>
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-mono text-muted-foreground">
                <span className="text-muted-foreground/60">$</span> cat ~/blog
              </h2>
              <Button variant="ghost" size="xs" asChild className="font-mono">
                <Link href="/blog">
                  ls ./blog <ArrowRight />
                </Link>
              </Button>
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
