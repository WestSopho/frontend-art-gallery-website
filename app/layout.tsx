import type { Metadata } from "next";
import { Big_Shoulders_Display, Outfit } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Art gallery website",
};

// Define Font Variables for Tailwind CSS

const big_shoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${big_shoulders.variable} ${outfit.variable} text-lg`}>{children}</body>
    </html>
  );
}