import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

function getPosts(): Post[] {
  const blogDirectory = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDirectory);

  return files.map((file) => {
    const filePath = path.join(blogDirectory, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);

    return {
      slug: file.replace(".mdx", ""),
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags,
    };
  });
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <section className="max-w-4xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-white/10 pb-6">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:text-indigo-400 transition">
                {post.title}
              </h2>
            </Link>

            <p className="text-sm text-muted-foreground mt-2">
              {post.date}
            </p>

            <p className="mt-3 text-white/70">
              {post.description}
            </p>

            <div className="flex gap-2 mt-4 flex-wrap">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}