import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mangomindlabs.com"),

  title: "MangoMindX Labs",

  description:
    "Thoughtfully building products that improve everyday life.",

  keywords: [
    "MangoMindX",
    "Bloomie",
    "FamFame",
    "ToneCheck",
  ],

  authors: [{ name: "MangoMindX Labs" }],
  applicationName: "MangoMindX Labs",

  icons: {
    icon: [
      {
        url: "/icon.png?v=3",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png?v=3",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
