import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { KonamiTicker } from "@/components/KonamiTicker";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://michagod.com";

export const metadata: Metadata = {
  title: {
    default: "Michael Volgin",
    template: "%s - Michael Volgin",
  },
  description:
    "Michael Volgin — SWE at Enclave, shipping secure SaaS and sometimes words. Blog on engineering, security, and building products.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Michael Volgin",
    description:
      "SWE at Enclave, shipping secure SaaS and sometimes words.",
    url: siteUrl,
    siteName: "Michael Volgin",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Michael Volgin",
    description:
      "SWE at Enclave, shipping secure SaaS and sometimes words.",
    creator: "@michag0d",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <KonamiTicker />
        <main className="mx-auto max-w-3xl px-6 py-20">
          {children}
        </main>
      </body>
    </html>
  );
}
