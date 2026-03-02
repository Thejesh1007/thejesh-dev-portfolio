import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="space-y-6 max-w-xl">
        <h1 className="h1">Contact</h1>

        <input
          placeholder="Your Email"
          className="w-full rounded-lg border border-border bg-muted px-4 py-3"
        />

        <textarea
          placeholder="Your Message"
          className="w-full rounded-lg border border-border bg-muted px-4 py-3"
          rows={4}
        />

        <Button>Send Message</Button>
      </div>
    </PageWrapper>
  );
}