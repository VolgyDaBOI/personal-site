import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { AnimatedSection } from "@/components/AnimatedSection";
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
    title: `${post.title} - Michael Volgin`,
    description: post.description,
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

  return (
    <AnimatedSection>
      <article className="prose max-w-none">
        <Link
          href="/blog"
          className="text-sm text-[var(--muted)] hover:text-[var(--accent-blue)] transition-colors no-underline"
        >
          &larr; Back to blog
        </Link>

        <header className="mt-8 mb-12">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
            <time>{post.date}</time>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
          {post.tags.length > 0 && (
            <div className="mt-4 flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--accent-blue)]/10 px-3 py-1 text-xs text-[var(--accent-blue)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              rehypePlugins: [rehypeHighlight, rehypeSlug],
            },
          }}
        />
      </article>
    </AnimatedSection>
  );
}
