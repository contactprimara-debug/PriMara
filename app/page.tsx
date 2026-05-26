import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import MeetFounders from "@/components/MeetFounders";
import Location from "@/components/Location";
import WhyPrimara from "@/components/WhyPrimara";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Medical Marketing West Palm Beach, FL | Primara",
  description:
    "Primara helps independent medical practices in West Palm Beach grow online with honest, measurable digital marketing. No lock-in. Call (561) 291-2681.",
  alternates: {
    canonical: "https://primara.com",
  },
  openGraph: {
    title: "Medical Marketing West Palm Beach, FL | Primara",
    description:
      "Primara helps independent medical practices in West Palm Beach grow online with honest, measurable digital marketing. No lock-in. Call (561) 291-2681.",
    type: "website",
    url: "https://primara.com",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Reviews />
      <Services />
      <MeetFounders />
      <Location />
      <WhyPrimara />
      <ContactSection />
    </main>
  );
}
