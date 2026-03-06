import Link from "next/link"
import { Container } from "@/components/layout/container"
import { getAllProjects } from "@/lib/projects"

export default function ProjectsPage() {

  const projects = getAllProjects()

  return (
    <main className="py-20">
      <Container className="max-w-4xl">

        <h1 className="text-3xl font-semibold mb-6">
          Projects
        </h1>

        <p className="text-slate-600 mb-12">
          A collection of engineering projects focused on building scalable
          web systems and production-ready backend platforms.
        </p>

        <div className="space-y-8">

          {projects.map((project) => (
            <div
              key={project.slug}
              className="border rounded-xl p-8 hover:shadow-sm transition"
            >
              <h2 className="text-xl font-semibold mb-3">
                {project.title}
              </h2>

              <p className="text-slate-600 mb-4">
                {project.description}
              </p>

              {project.tech && (
                <div className="flex flex-wrap gap-3 text-sm text-slate-500 mb-4">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              )}

              <Link
                href={`/projects/${project.slug}`}
                className="text-blue-600 hover:underline"
              >
                View Case Study
              </Link>

            </div>
          ))}

        </div>

      </Container>
    </main>
  )
}