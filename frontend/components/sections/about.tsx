import { Container } from "@/components/layout/container";

export function About() {
  return (
    <section className="section">

      <Container className="max-w-3xl space-y-6">

        <h2 className="h2">About</h2>

        <p className="p-body">
          I am a Computer Science student specializing in full stack development
          with a strong interest in backend systems and scalable web platforms.
        </p>

        <p className="p-muted">
          I enjoy designing APIs, building structured relational databases,
          and developing production-ready applications that solve real problems.
          My work focuses on writing clean, maintainable systems with clear architecture.
        </p>

        <p className="p-muted">
          Currently, I am expanding my skills toward data engineering and
          large-scale data systems while continuing to build full stack platforms.
        </p>

      </Container>

    </section>
  );
}