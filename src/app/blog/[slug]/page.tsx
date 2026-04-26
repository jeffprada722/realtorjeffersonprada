import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      images: [{ url: post.heroImage, alt: post.heroAlt, width: 1200, height: 675 }],
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const article = articleSchema(post);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);
  const faq = post.faq && post.faq.length > 0 ? faqSchema(post.faq) : null;

  return (
    <>
      <JsonLd data={article} />
      <JsonLd data={breadcrumb} />
      {faq && <JsonLd data={faq} />}
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-12 pt-32">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:underline">Home</Link>
          {" / "}
          <Link href="/blog" className="hover:underline">Blog</Link>
          {" / "}
          <span aria-current="page" className="text-gray-700">{post.title}</span>
        </nav>

        <article>
          <header className="mb-8">
            <p className="text-xs font-medium uppercase tracking-wider text-blue-700">
              {post.category}
            </p>
            <h1 className="mt-2 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{post.description}</p>
            <p className="mt-4 text-sm text-gray-500">
              By {post.author} &bull;{" "}
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              &bull; {post.readingTime}
            </p>
          </header>

          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              priority
              className="object-cover"
            />
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-a:text-blue-700"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {post.faq && post.faq.length > 0 && (
            <section className="mt-16 border-t pt-10">
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              <dl className="mt-6 space-y-6">
                {post.faq.map((item, i) => (
                  <div key={i}>
                    <dt className="font-semibold text-gray-900">{item.q}</dt>
                    <dd className="mt-2 text-gray-700">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <footer className="mt-12 flex flex-wrap gap-2 border-t pt-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
              >
                #{tag}
              </span>
            ))}
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
