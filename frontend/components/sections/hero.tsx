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
    <section className="pt-32 pb-24">

      <Container>

        <div className="max-w-4xl space-y-8">

          <p className="text-sm tracking-wide text-slate-500">
            FULL STACK ENGINEER
          </p>

          <h1>
            I build scalable backend systems and production-ready web platforms.
          </h1>

          <p className="text-lg max-w-3xl">
            Computer Science student focused on full stack engineering,
            backend architecture, and building reliable production systems.
            Currently transitioning toward data engineering and large-scale systems.
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