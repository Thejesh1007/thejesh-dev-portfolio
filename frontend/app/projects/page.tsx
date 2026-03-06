import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { getAllProjects } from "@/lib/projects"

export default function ProjectsPage() {

  const projects = getAllProjects()

  return (
    <main className="section">

      <Container className="max-w-4xl space-y-12">

        <div className="space-y-4">

          <h1 className="h2">
            Projects
          </h1>

          <p className="p-muted">
            A collection of engineering projects focused on building scalable
            web systems and production-ready backend platforms.
          </p>

        </div>

        <div className="space-y-8">

          {projects.map((project) => (

            <div
              key={project.slug}
              className="border border-slate-200 rounded-xl p-8 hover:shadow-md transition bg-white"
            >

              <div className="space-y-4">

                <h2 className="h3">
                  {project.title}
                </h2>

                <p className="p-body">
                  {project.description}
                </p>

                {project.tech && (
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                )}

                <div className="flex gap-6 text-sm">

                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Case Study
                  </Link>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </Container>

    </main>
  )
}