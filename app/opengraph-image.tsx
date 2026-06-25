import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Primara — Digital Marketing for Independent Medical Practices in Florida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Edge ImageResponse has no system fonts (Georgia etc. silently fall back to a
// generic sans-serif), so the italic serif wordmark must be embedded directly —
// this is the same Instrument Serif Italic used for the nav wordmark/headings.
// @vercel/og only supports ttf/otf/woff (not woff2), so both are bundled locally.
const serifFontUrl = new URL("./instrument-serif-italic.ttf", import.meta.url);
const sansFontUrl = new URL("./inter-semibold.woff", import.meta.url);

export default async function OgImage() {
  const [serifFontData, sansFontData] = await Promise.all([
    fetch(serifFontUrl).then((res) => res.arrayBuffer()),
    fetch(sansFontUrl).then((res) => res.arrayBuffer()),
  ]);

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
          backgroundColor: "#050505",
          position: "relative",
        }}
      >
        {/* Top accent line — matches the gold-rule treatment used on CTA sections sitewide */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            backgroundColor: "#C9A84C",
          }}
        />

        <div
          style={{
            fontFamily: "Instrument Serif",
            fontStyle: "italic",
            fontSize: "128px",
            color: "#C9A84C",
            letterSpacing: "-2px",
            lineHeight: 1,
            marginBottom: "28px",
          }}
        >
          Primara
        </div>
        <div
          style={{
            fontFamily: "Inter",
            fontSize: "24px",
            fontWeight: 600,
            color: "#AEAEAE",
            letterSpacing: "5px",
            textTransform: "uppercase",
          }}
        >
          Digital Marketing for Independent Medical Practices
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "56px",
            fontFamily: "Inter",
            fontSize: "17px",
            color: "#7A7A7A",
            letterSpacing: "1.5px",
          }}
        >
          primara365.com · West Palm Beach, FL · (561) 291-2681
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: serifFontData,
          style: "italic",
          weight: 400,
        },
        {
          name: "Inter",
          data: sansFontData,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
