import { PageWrapper } from "@/components/layout/page-wrapper";
import { MotionWrapper } from "@/components/layout/motion-wrapper";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <PageWrapper>
      <MotionWrapper>
        <div className="text-center space-y-8">
          <h1 className="h1">
            Full Stack Developer & Future Data Engineer
          </h1>

          <p className="p-muted max-w-2xl mx-auto">
            I build scalable web systems with clean architecture and
            production-grade design.
          </p>

          <div className="flex justify-center gap-4">
            <Button>View Projects</Button>
            <Button variant="outline">Download Resume</Button>
          </div>
        </div>
      </MotionWrapper>
    </PageWrapper>
  );
}