import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Primara — Digital Marketing for Independent Medical Practices in Florida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A2342",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "96px",
            color: "#C5A040",
            letterSpacing: "-2px",
            lineHeight: 1,
            marginBottom: "32px",
          }}
        >
          Primara
        </div>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "28px",
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Digital Marketing for Independent Medical Practices
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            fontFamily: "system-ui, sans-serif",
            fontSize: "18px",
            color: "#C5A040",
            letterSpacing: "2px",
          }}
        >
          primara365.com · West Palm Beach, FL · (561) 291-2681
        </div>
      </div>
    ),
    { ...size }
  );
}
