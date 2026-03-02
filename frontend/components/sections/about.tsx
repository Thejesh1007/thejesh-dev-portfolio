import { PageWrapper } from "@/components/layout/page-wrapper";

export function About() {
  return (
    <PageWrapper>
      <div className="space-y-6 max-w-3xl">
        <h2 className="h2">About Me</h2>
        <p className="p-muted">
          I am a Computer Science student focused on full stack
          development and transitioning toward data engineering.
        </p>
      </div>
    </PageWrapper>
  );
}