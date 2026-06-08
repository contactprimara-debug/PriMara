import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#050505",
          borderRadius: 36,
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
            width: 28,
            height: 180,
            background: "#E8611A",
            borderRadius: "14px 0 0 14px",
            display: "flex",
          }}
        />
        {/* Italic P — gold, bold weight to read at small size */}
        <div
          style={{
            fontSize: 130,
            fontStyle: "italic",
            fontWeight: 700,
            color: "#C9A84C",
            lineHeight: 1,
            marginLeft: 18,
            marginTop: 8,
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
