import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

export const dynamic = "force-static";

type Props = {
  params: Promise<{ slug: string }>;
};

const projectsDirectory = path.join(process.cwd(), "content/projects");

export async function generateStaticParams() {
  if (!fs.existsSync(projectsDirectory)) return [];

  const files = fs.readdirSync(projectsDirectory);

  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;

  const filePath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return {};
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data } = matter(source);

  return {
    title: `${data.title} | Thejesh`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return (
    <article className="max-w-4xl mx-auto py-28 px-6">
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          {data.title}
        </h1>

        <p className="text-sm text-muted-foreground mb-6">
          {data.role} • {data.date}
        </p>

        <div className="flex gap-3 flex-wrap mb-8">
          {data.tech?.map((tech: string) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6 text-sm">
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition"
            >
              GitHub
            </a>
          )}
          {data.live && (
            <a
              href={data.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Live
            </a>
          )}
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </header>

      <div className="prose prose-invert prose-lg max-w-none prose-headings:tracking-tight prose-p:text-muted-foreground">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}