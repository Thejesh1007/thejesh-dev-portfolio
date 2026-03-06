"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function Hero() {

  const scrollToProjects = () => {
    const section = document.getElementById("projects-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section">

      <Container>

        <div className="max-w-3xl space-y-8">

          <p className="text-sm tracking-wider text-slate-500 uppercase">
            Backend-Focused Full Stack Engineer
          </p>

          <h1 className="h1">
            Building scalable APIs and production-ready web systems.
          </h1>

          <p className="p-body">
            Computer Science student focused on backend architecture,
            API design, and building reliable production systems.
            Currently expanding into data engineering and large-scale systems.
          </p>

          <div className="flex gap-4">

            <Button onClick={scrollToProjects}>
              View Projects
            </Button>

            <a href="/resumes/full-stack.pdf" download>
              <Button variant="outline">
                Download Resume
              </Button>
            </a>

          </div>

          <div className="text-sm text-slate-500">
            React • Next.js • Node.js • PostgreSQL • Prisma • Docker
          </div>

        </div>

      </Container>

    </section>
  );
}