import { Container } from "./container";

type PageWrapperProps = {
  children: React.ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <section className="py-24">
      <Container>{children}</Container>
    </section>
  );
}