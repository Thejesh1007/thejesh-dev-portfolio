import fs from "fs"
import path from "path"
import matter from "gray-matter"

const projectsDirectory = path.join(process.cwd(), "content/projects")

export type Project = {
  slug: string
  title: string
  description: string
  date?: string
  role?: string
  tech?: string[]
  github?: string
  live?: string
  featured?: boolean
  content?: string
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) return []

  const files = fs.readdirSync(projectsDirectory)

  return files.map((file) => {
    const filePath = path.join(projectsDirectory, file)
    const source = fs.readFileSync(filePath, "utf-8")

    const { data } = matter(source)

    return {
      slug: file.replace(".mdx", ""),
      ...data,
    } as Project
  })
}

export function getProjectBySlug(slug: string): Project | null {

  const filePath = path.join(projectsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const source = fs.readFileSync(filePath, "utf-8")

  const { data, content } = matter(source)

  return {
    slug,
    content,
    ...data,
  } as Project
}