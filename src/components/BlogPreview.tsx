import Link from "next/link";
import Image from "next/image";
import { getRecentPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = getRecentPosts(3);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-blue-700">
              Market Insights
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Latest from the Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden text-sm font-medium text-blue-700 hover:underline md:block"
          >
            View all posts &rarr;
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                  {post.category} &bull; {post.readingTime}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-gray-900 group-hover:text-blue-700">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">{post.description}</p>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog" className="text-sm font-medium text-blue-700 hover:underline">
            View all posts &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
