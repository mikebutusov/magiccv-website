import clsx from "clsx";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={clsx("mx-auto w-full max-w-6xl px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={clsx("py-16 md:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}
