import { Container } from "./container";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-16">
      <Container>
        {children}
      </Container>
    </section>
  );
}