import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

const resumeDirectory = path.join(process.cwd(), "content/resume");

export async function generateStaticParams() {
  if (!fs.existsSync(resumeDirectory)) return [];

  const files = fs.readdirSync(resumeDirectory);

  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;

  const filePath = path.join(resumeDirectory, `${slug}.mdx`);

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

export default async function ResumeDetailPage({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(resumeDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return (
    <article className="max-w-4xl mx-auto py-28 px-6">
      <header className="mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {data.title}
        </h1>

        <p className="text-muted-foreground">
          {data.category} • {data.date}
        </p>

        <a
          href={data.pdf}
          download
          className="inline-block text-sm mt-4 text-primary hover:underline"
        >
          Download PDF
        </a>

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <MDXRemote source={content} />
      </div>

      <div className="mt-16">
        <iframe
          src={data.pdf}
          className="w-full h-[900px] rounded-xl border border-border"
        />
      </div>
    </article>
  );
}