import { PageWrapper } from "@/components/layout/page-wrapper";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "TypeScript",
  "Docker",
];

export function Skills() {
  return (
    <PageWrapper>
      <div className="space-y-6">
        <h2 className="h2">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}