import Link from "next/link";
import { PageWrapper } from "@/components/layout/page-wrapper";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllResumes } from "@/lib/resume";

export default function ResumePage() {
  const resumes = getAllResumes();

  return (
    <PageWrapper>
      <div className="space-y-16">
        <div className="space-y-6">
          <h1 className="h1">Resumes</h1>
          <p className="p-muted max-w-2xl">
            Categorized resume versions tailored for different roles and career directions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {resumes.map((resume) => (
            <Card key={resume.slug}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{resume.title}</CardTitle>
                  <Badge variant="outline">{resume.category}</Badge>
                </div>

                <CardDescription>
                  {resume.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex justify-between items-center">
                <Button asChild size="sm">
                  <Link href={`/resume/${resume.slug}`}>
                    View Resume
                  </Link>
                </Button>

                <a
                  href={resume.pdf}
                  download
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Download PDF
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}