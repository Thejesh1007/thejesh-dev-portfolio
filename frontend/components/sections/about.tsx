import { PageWrapper } from "@/components/layout/page-wrapper";
import { MotionWrapper } from "@/components/layout/motion-wrapper";

export function About() {
  return (
    <PageWrapper>
        <MotionWrapper>
      <div className="space-y-6 max-w-3xl">
        <h2 className="h2">About Me</h2>
        <p className="p-muted">
          I am a Computer Science student focused on full stack
          development and transitioning toward data engineering.
        </p>
      </div>
      </MotionWrapper>
    </PageWrapper>
  );
}