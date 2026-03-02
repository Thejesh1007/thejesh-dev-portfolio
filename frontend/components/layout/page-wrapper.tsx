import { Container } from "./container";

type PageWrapperProps = {
  children: React.ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <section className="py-28 md:py-32">
      <Container>{children}</Container>
    </section>
  );
}