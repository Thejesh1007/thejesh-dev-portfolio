import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Thejesh | Full Stack Developer",
    template: "%s | Thejesh",
  },
  description:
    "Thejesh - Full Stack Developer focused on scalable backend systems and transitioning toward Data Engineering.",
  openGraph: {
    title: "Thejesh | Full Stack Developer",
    description:
      "Full Stack Developer focused on scalable backend systems and Data Engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans bg-background text-foreground antialiased`}
      >
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
      </body>
    </html>
  );
}