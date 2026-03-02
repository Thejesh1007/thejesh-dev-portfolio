import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

const blogDirectory = path.join(process.cwd(), "content/blog");

/* ================================
   Generate Static Params
================================= */
export async function generateStaticParams() {
  const files = fs.readdirSync(blogDirectory);

  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

/* ================================
   Generate SEO Metadata
================================= */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;

  const filePath = path.join(blogDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return {};
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data } = matter(source);

  const title = data.title || "Blog Post";
  const description =
    data.description ||
    "Technical article by Thejesh on software architecture and engineering.";

  return {
    title: `${title} | Thejesh`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/* ================================
   Blog Post Page
================================= */
export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(blogDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return (
    <article className="max-w-4xl mx-auto py-28 px-6">
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          {data.title}
        </h1>

        <p className="text-sm text-white/50 mb-6">
          {data.date}
        </p>

        <div className="flex gap-3 flex-wrap">
          {data.tags?.map((tag: string) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </header>

      <div
        className="
        prose prose-invert prose-lg max-w-none
        prose-headings:mt-12
        prose-headings:mb-4
        prose-p:leading-relaxed
        prose-p:text-white/80
        prose-li:text-white/80
        prose-li:my-2
        prose-strong:text-white 
        prose-code:text-indigo-400
        prose-pre:bg-white/5
        prose-pre:border
        prose-pre:border-white/10
        prose-pre:rounded-xl
        prose-pre:p-4
      "
      >
        <MDXRemote source={content} />
      </div>
    </article>
  );
}