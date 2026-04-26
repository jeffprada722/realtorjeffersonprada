import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Miami Real Estate Blog: Market Insights & Investor Guides",
  description:
    "Honest, data-driven analysis of the Miami real estate market. Buyer guides, neighborhood deep dives, investment strategy, and quarterly reports from Jefferson Prada.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Miami Real Estate Blog | Jefferson Prada",
    description:
      "Data-driven Miami real estate analysis, buyer guides, and quarterly market reports.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 pt-32">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Miami Real Estate Insights
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Honest, data-driven analysis of the Miami real estate market. Quarterly reports,
            neighborhood deep dives, buyer and seller guides.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    {post.category} &bull; {post.readingTime}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold leading-snug text-gray-900 group-hover:text-blue-700">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-600">{post.description}</p>
                  <p className="mt-3 text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    &bull; {post.author}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
