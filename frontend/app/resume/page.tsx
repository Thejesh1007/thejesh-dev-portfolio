import { Container } from "@/components/layout/container";

export default function ResumePage() {

  return (
    <section className="section-spacing pt-36">

      <Container className="space-y-12">

        <div className="space-y-6 max-w-2xl">

          <h1 className="h1">
            Resume
          </h1>

          <p className="p-body">
            Full Stack Engineer specializing in backend systems,
            scalable APIs, and production-ready web platforms.
          </p>

          <a
            href="/resumes/full-stack.pdf"
            download
            className="text-blue-600 hover:underline"
          >
            Download Resume
          </a>

        </div>

        <div className="border border-gray-200 rounded-xl overflow-hidden">

          <iframe
            src="/resumes/full-stack.pdf"
            className="w-full h-[800px]"
          />

        </div>

      </Container>

    </section>
  );
}