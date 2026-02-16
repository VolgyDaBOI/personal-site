import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Michael Volgin"],
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
      creator: "@michag0d",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Michael Volgin",
      url: "https://michagod.com",
    },
  };

  return (
    <AnimatedSection>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article>
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Back to blog
        </Link>

        <header className="mt-8 mb-6">
          <h1 className="text-2xl font-semibold tracking-tight mb-2">{post.title}</h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <time>{post.date}</time>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <Separator className="mb-8" />

        <div className="prose max-w-none">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeHighlight, rehypeSlug],
              },
            }}
          />
        </div>
      </article>
    </AnimatedSection>
  );
}
