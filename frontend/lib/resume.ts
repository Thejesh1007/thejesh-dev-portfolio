import fs from "fs";
import path from "path";
import matter from "gray-matter";

const resumeDirectory = path.join(process.cwd(), "content/resume");

export type Resume = {
  slug: string;
  title: string;
  category: string;
  description: string;
  date: string;
  pdf: string;
};

export function getAllResumes(): Resume[] {
  if (!fs.existsSync(resumeDirectory)) return [];

  const files = fs.readdirSync(resumeDirectory);

  return files.map((file) => {
    const filePath = path.join(resumeDirectory, file);
    const source = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(source);

    return {
      slug: file.replace(".mdx", ""),
      ...data,
    } as Resume;
  });
}

export function getResumeBySlug(slug: string) {
  const filePath = path.join(resumeDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);

  return {
    content,
    data,
  };
}