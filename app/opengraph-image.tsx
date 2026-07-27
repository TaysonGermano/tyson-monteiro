import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name}, ${SITE.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dynamically generated social share image. Clean black-and-white to
// match the site. Used for Open Graph and Twitter previews.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#000000",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: "-0.5px" }}>
          {SITE.url.replace("https://", "")}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            {SITE.name}
          </div>
          <div style={{ display: "flex", fontSize: 44, color: "#555555" }}>
            {SITE.jobTitle} · {SITE.location.city}, {SITE.location.country}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#555555" }}>
          Web apps · Mobile apps · APIs · Websites · SEO
        </div>
      </div>
    ),
    { ...size },
  );
}
