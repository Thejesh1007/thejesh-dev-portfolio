import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <section className="section bg-slate-50 border-t border-slate-200">

      <Container className="space-y-10">

        <h2 className="h2">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="space-y-3">
            <h3 className="h3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>TailwindCSS</Badge>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="h3">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Node.js</Badge>
              <Badge>Express</Badge>
              <Badge>REST APIs</Badge>
              <Badge>JWT Auth</Badge>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="h3">Database & Tools</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>PostgreSQL</Badge>
              <Badge>Prisma</Badge>
              <Badge>Docker</Badge>
              <Badge>Git</Badge>
            </div>
          </div>

        </div>

      </Container>

    </section>
  );
}