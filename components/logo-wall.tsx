import { Container } from "@/components/ui/container";

export function LogoWall({ label = "Trusted by European consulting teams" }: { label?: string }) {
  return (
    <Container className="py-10 md:py-12">
      <p className="text-center text-sm font-medium uppercase tracking-wide text-muted">{label}</p>
      <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex h-14 items-center justify-center rounded-xl border border-dashed border-border bg-surface text-xs text-muted"
          >
            {"{{LOGO}}"}
          </div>
        ))}
      </div>
    </Container>
  );
}
