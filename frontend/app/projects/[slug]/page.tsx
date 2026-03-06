import { notFound } from "next/navigation"
import { Container } from "@/components/layout/container"
import { getProjectBySlug, getAllProjects } from "@/lib/projects"

export async function generateStaticParams() {

  const projects = getAllProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="py-20">
      <Container className="max-w-3xl">

        <h1 className="text-3xl font-semibold mb-6">
          {project.title}
        </h1>

        <p className="text-slate-600 mb-8">
          {project.description}
        </p>

        {project.tech && (
          <div className="flex flex-wrap gap-3 text-sm text-slate-500 mb-8">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        )}

        {project.content && (
          <div className="prose prose-slate max-w-none">
            {project.content}
          </div>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="inline-block mt-10 text-blue-600 hover:underline"
          >
            View Source on GitHub
          </a>
        )}

      </Container>
    </main>
  )
}