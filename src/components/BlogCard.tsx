import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group relative rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 transition-all hover:border-[var(--accent-blue)] hover:bg-[#1a1a1a]">
        <div className="absolute inset-0 rounded-xl bg-[var(--accent-blue)] opacity-0 blur-2xl transition-opacity group-hover:opacity-5" />
        <div className="relative">
          <time className="text-sm text-[var(--muted)]">{post.date}</time>
          <span className="mx-2 text-[var(--muted)]">&middot;</span>
          <span className="text-sm text-[var(--muted)]">{post.readingTime}</span>
          <h3 className="mt-2 text-xl font-semibold transition-colors group-hover:text-[var(--accent-blue)]">
            {post.title}
          </h3>
          <p className="mt-2 text-[var(--muted)] line-clamp-2">
            {post.description}
          </p>
          {post.tags.length > 0 && (
            <div className="mt-4 flex gap-2 flex-wrap">
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
        </div>
      </article>
    </Link>
  );
}
