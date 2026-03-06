import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/layout/container";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function HomePage() {

  const projects = getAllProjects();

  return (
    <main>

      <Hero />

      <section id="projects-section" className="py-24">

        <Container className="space-y-12">

          <h2>Featured Project</h2>

          {projects.map((project) => (

            <div
              key={project.slug}
              className="border border-slate-200 rounded-xl p-8 bg-white hover:shadow-md transition"
            >

              <div className="space-y-4">

                <h3>{project.title}</h3>

                <p className="max-w-2xl">
                  {project.description}
                </p>

                <div className="flex gap-6 text-sm">

                  <Link href={`/projects/${project.slug}`}>
                    View Case Study
                  </Link>

                  {project.github && (
                    <a href={project.github} target="_blank">
                      GitHub
                    </a>
                  )}

                </div>

              </div>

            </div>

          ))}

        </Container>

      </section>

    </main>
  );
}