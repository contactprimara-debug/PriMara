import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Primara — Digital Marketing for Independent Medical Practices";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The shared-link card uses the official framed Didot logo (public/primara-logo.png)
// embedded directly as an ArrayBuffer — @vercel/og accepts that as an img src.
// Edge ImageResponse has no system fonts, so the supporting type is embedded too.
const logoUrl = new URL("../public/primara-logo.png", import.meta.url);
const sansFontUrl = new URL("./inter-semibold.woff", import.meta.url);

export default async function OgImage() {
  const [logoData, sansFontData] = await Promise.all([
    fetch(logoUrl).then((res) => res.arrayBuffer()),
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
          backgroundColor: "#0D0D0D",
          position: "relative",
        }}
      >
        {/* Official framed logo — its own black field blends into the card */}
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img
          // @ts-expect-error — @vercel/og accepts ArrayBuffer as src
          src={logoData}
          width={980}
          height={305}
          style={{ marginBottom: "44px" }}
        />
        <div
          style={{
            fontFamily: "Inter",
            fontSize: "23px",
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
            bottom: "44px",
            fontFamily: "Inter",
            fontSize: "17px",
            color: "#7A7A7A",
            letterSpacing: "1.5px",
          }}
        >
          primara365.com · (561) 291-2681
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
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
