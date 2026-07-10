import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "MangomindX Labs",
  description:
    "Thoughtfully building products that improve everyday life.",
  keywords: [
    "MangomindX",
    "Bloomie",
    "FamFame",
    "ToneCheck",
  ],
  authors: [{ name: "MangomindX Labs" }],
  applicationName: "MangomindX Labs",
  themeColor: "#F97316",
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
