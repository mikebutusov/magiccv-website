import { ImageResponse } from "next/og";

export const alt = "MagicCV - CV & resume management software for consulting firms";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #f6f7fb 0%, #eeebfc 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 1c1.05 7.2 3.8 9.95 11 11-7.2 1.05-9.95 3.8-11 11-1.05-7.2-3.8-9.95-11-11 7.2-1.05 9.95-3.8 11-11Z"
              fill="#5a4bd8"
            />
          </svg>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: "#1a1b2e" }}>
            magic<span style={{ color: "#5a4bd8" }}>cv</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#1a1b2e", lineHeight: 1.1 }}>
            CV & resume management software for consulting firms
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#444664" }}>
            One CV database. Tailored, on-brand CVs in minutes - in any language.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {["AI-native", "GDPR-by-design", "5+ EU languages"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "12px 28px",
                borderRadius: 999,
                background: "#5a4bd8",
                color: "white",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
