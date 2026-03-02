import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  const files = fs.readdirSync(blogDirectory);

  return files.map((file) => {
    const filePath = path.join(blogDirectory, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);

    return {
      slug: file.replace(".mdx", ""),
      ...data,
    };
  });
}