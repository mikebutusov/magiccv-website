import "../globals.css";
import { inter } from "@/lib/fonts";

/* Studio runs full-screen, outside the marketing site chrome. */
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
