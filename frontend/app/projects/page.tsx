import { PageWrapper } from "@/components/layout/page-wrapper";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="space-y-8">
        <h1 className="h1">Projects</h1>

        <Card>
          <CardContent className="p-6">
            Talent Hiring Platform (Full Stack)
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  );
}