import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = "A better way to fidget. Designed for adult sensory seekers, BFRB, and ADHD.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nubblshop.com"),
  title: "NubblShop",
  description,
  openGraph: {
    title: "NubblShop",
    description,
    url: "https://www.nubblshop.com",
    siteName: "NubblShop",
    type: "website",
    images: [{ url: "/logo.png", width: 1407, height: 768, alt: "The Fuzzy by NubblShop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NubblShop",
    description,
    images: ["/logo.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}{process.env.VERCEL_ENV === "production" && <><Analytics /><SpeedInsights /></>}</body>
    </html>
  );
}
