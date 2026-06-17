import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
