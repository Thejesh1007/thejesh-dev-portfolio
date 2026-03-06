import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function HomePage() {

  const projects = getAllProjects();
  const featured = projects[0];

  return (
    <main>

      <Hero />

      <section id="projects-section" className="section bg-white border-t border-slate-200">

        <Container className="space-y-12">

          <h2 className="h2">
            Featured Project
          </h2>

          {featured && (

            <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm hover:shadow-lg transition">

              <div className="space-y-6">

                <h3 className="h3">
                  {featured.title}
                </h3>

                <p className="p-body max-w-2xl">
                  {featured.description}
                </p>

                {featured.tech && (
                  <div className="flex flex-wrap gap-2">
                    {featured.tech.map((tech) => (
                      <Badge key={tech}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex gap-6 text-sm">

                  <Link
                    href={`/projects/${featured.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Case Study
                  </Link>

                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  )}

                </div>

              </div>

            </div>

          )}

        </Container>

      </section>

    </main>
  );
}