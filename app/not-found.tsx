import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 1.5rem 4rem",
        background: "var(--void, #050505)",
      }}
    >
      <Image
        src="/primara-logo.png"
        alt="Primara"
        width={360}
        height={112}
        priority
        style={{ height: "auto", maxWidth: "80vw" }}
      />
      <p
        style={{
          marginTop: "2.5rem",
          fontFamily: "var(--font-display, serif)",
          fontStyle: "italic",
          fontSize: "1.6rem",
          color: "var(--chalk, #E8E4DC)",
        }}
      >
        This page doesn&apos;t exist — but your patients are still searching.
      </p>
      <p
        style={{
          marginTop: "0.75rem",
          fontSize: "0.95rem",
          color: "var(--ash, #AEAEAE)",
          letterSpacing: "0.02em",
        }}
      >
        The address may have changed, or the link was mistyped.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "2.25rem",
          display: "inline-block",
          padding: "0.8rem 2rem",
          border: "1px solid var(--gold, #C9A84C)",
          color: "var(--gold, #C9A84C)",
          borderRadius: "2px",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          textDecoration: "none",
        }}
      >
        Back to the homepage
      </Link>
    </main>
  );
}
