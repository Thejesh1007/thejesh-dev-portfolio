import { Container } from "@/components/layout/container";

export default function ContactPage() {

  return (
    <section className="section-spacing pt-36">

      <Container className="max-w-2xl space-y-10">

        <h1 className="h1">
          Contact
        </h1>

        <p className="p-body">
          If you would like to collaborate, discuss opportunities,
          or talk about engineering projects, feel free to reach out.
        </p>

        <div className="space-y-4 text-lg">

          <div>
            Email:{" "}
            <a
              href="mailto:thejesh@example.com"
              className="text-blue-600 hover:underline"
            >
              thejesh@example.com
            </a>
          </div>

          <div>
            GitHub:{" "}
            <a
              href="https://github.com/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              github.com/thejesh
            </a>
          </div>

          <div>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/thejesh
            </a>
          </div>

        </div>

      </Container>

    </section>
  );
}