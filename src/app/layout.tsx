import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import MouseGlow from "@/components/ui/MouseGlow";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pal-portfolio.vercel.app"),
  title: {
    default: "Pal Gabani — AI Full Stack Developer",
    template: "%s · Pal Gabani",
  },
  description:
    "Pal Gabani is an AI Full Stack Developer in Bengaluru building production multi-tenant SaaS and LLM-powered products — RAG chatbots, OCR pipelines, and AI automation. Currently at Seravion Technologies.",
  keywords: [
    "Pal Gabani",
    "AI Full Stack Developer",
    "GenAI Engineer",
    "Next.js",
    "React",
    "Python",
    "Django",
    "LLM",
    "Bengaluru",
  ],
  authors: [{ name: "Pal Gabani" }],
  creator: "Pal Gabani",
  openGraph: {
    title: "Pal Gabani — AI Full Stack Developer",
    description:
      "Building production multi-tenant SaaS and LLM-powered products. AI Full Stack Developer, Bengaluru.",
    type: "website",
    locale: "en_IN",
    images: ["/pal.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pal Gabani — AI Full Stack Developer",
    description:
      "Building production multi-tenant SaaS and LLM-powered products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <body className="noise antialiased">
        <MouseGlow />
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#0e0e17",
              color: "#f5f5f9",
              border: "1px solid rgba(170,160,255,0.09)",
              borderRadius: "10px",
              fontSize: "14px",
              fontFamily: "var(--font-geist-sans)",
              padding: "12px 16px",
            },
            success: {
              iconTheme: { primary: "#8b5cf6", secondary: "#07070d" },
            },
          }}
        />
      </body>
    </html>
  );
}
