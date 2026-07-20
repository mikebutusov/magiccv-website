/**
 * Renders inline copy that may contain {{PLACEHOLDER}} tokens (PRD §2.6),
 * visually flagging them so unresolved placeholders are impossible to miss
 * once real proof (stats, testimonials, logos) lands.
 */
export function PlaceholderText({ text }: { text: string }) {
  const parts = text.split(/(\{\{[^}]+\}\})/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("{{") && part.endsWith("}}") ? (
          <mark
            key={i}
            className="rounded bg-accent-tint px-1.5 py-0.5 font-sans text-[0.8em] font-medium tracking-tight text-accent-soft"
          >
            {part.slice(2, -2)}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
