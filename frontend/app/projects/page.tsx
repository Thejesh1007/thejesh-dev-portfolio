import Link from "next/link";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <PageWrapper>
      <div className="space-y-16">
        <div className="space-y-6">
          <h1 className="h1">Projects</h1>
          <p className="p-muted max-w-2xl">
            A curated collection of production-grade systems and engineering projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{project.title}</CardTitle>
                  {project.featured && (
                    <Badge variant="outline">Featured</Badge>
                  )}
                </div>
                <CardDescription>
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-2">
                {project.tech?.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </CardContent>

              <CardFooter className="flex justify-between items-center">
                <Button asChild size="sm">
                  <Link href={`/projects/${project.slug}`}>
                    View Case Study
                  </Link>
                </Button>

                <div className="flex gap-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-sm text-muted-foreground hover:text-foreground transition"
                    >
                      GitHub
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="text-sm text-muted-foreground hover:text-foreground transition"
                    >
                      Live
                    </Link>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}