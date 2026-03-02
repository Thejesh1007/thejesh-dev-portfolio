import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { MotionWrapper } from "@/components/layout/motion-wrapper";

export default function HomePage() {
  return (
    <PageWrapper>
      <MotionWrapper>
        <div className="space-y-8 text-center">
          <h1 className="h1">Design System Ready</h1>
          <p className="p-muted">
            Phase 2 foundation established.
          </p>

          <div className="flex justify-center gap-4">
            <Button>Primary Action</Button>
            <Badge>New</Badge>
          </div>

          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              This is a card surface using design tokens.
            </CardContent>
          </Card>
        </div>
      </MotionWrapper>
    </PageWrapper>
  );
}