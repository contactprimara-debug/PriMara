import { ImageResponse } from "next/og";

// Next.js serves this as /icon.png and injects <link rel="icon"> into every page.
// Google's crawler prefers PNG/ICO over SVG for search-result favicons.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "#050505",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ember accent bar — left edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 10,
            height: 64,
            background: "#E8611A",
            display: "flex",
          }}
        />
        {/* Gold italic P */}
        <div
          style={{
            fontSize: 46,
            fontStyle: "italic",
            fontWeight: 700,
            color: "#C9A84C",
            lineHeight: 1,
            marginLeft: 10,
            marginTop: 4,
            fontFamily: "serif",
            display: "flex",
          }}
        >
          P
        </div>
      </div>
    ),
    { ...size }
  );
}
