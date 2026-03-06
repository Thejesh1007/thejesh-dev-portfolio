import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { calculateReadingTime } from "@/lib/blog";

export const dynamic = "force-static";

type Props = {
  params: Promise<{ slug: string }>;
};

const blogDirectory = path.join(process.cwd(), "content/blog");

export async function generateStaticParams() {
  const files = fs.readdirSync(blogDirectory);

  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

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

  return {
    title: `${data.title} | Thejesh`,
    description: data.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(blogDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  const readingTime = `${Math.ceil(content.split(/\s+/).length / 200)} min read`;

  return (
    <article className="max-w-4xl mx-auto py-28 px-6">
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          {data.title}
        </h1>

        <p className="text-sm text-muted-foreground mb-6">
          {data.date} • {readingTime}
        </p>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </header>

      <div className="prose prose-invert prose-lg max-w-none prose-headings:tracking-tight prose-p:text-muted-foreground">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}