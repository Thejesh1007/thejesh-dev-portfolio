import { notFound } from "next/navigation"
import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getProjectBySlug, getAllProjects } from "@/lib/projects"
import { MDXRemote } from "next-mdx-remote/rsc"

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
    <main className="section">

      <Container className="max-w-4xl space-y-16">

        {/* Project Header */}

        <header className="space-y-6">

          <h1 className="h1">
            {project.title}
          </h1>

          <p className="p-body max-w-2xl">
            {project.description}
          </p>

          {project.tech && (
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech}>
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex gap-4 pt-2">

            {project.github && (
              <a href={project.github} target="_blank">
                <Button>
                  View Source
                </Button>
              </a>
            )}

            <Link href="/projects">
              <Button variant="outline">
                Back to Projects
              </Button>
            </Link>

          </div>

        </header>

        {/* Case Study Content */}

        {project.content && (
          <article className="max-w-none space-y-6">

            <MDXRemote source={project.content} />

          </article>
        )}

      </Container>

    </main>
  )
}