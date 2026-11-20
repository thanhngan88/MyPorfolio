import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thanh Ngan | Business Analyst Portfolio",
  description:
    "Personal portfolio of Tran Ngoc Thanh Ngan — Business Analyst with expertise in Banking, Digital Transformation & Quality Control.",
  keywords: [
    "Business Analyst",
    "Portfolio",
    "Thanh Ngan",
    "Banking",
    "Digital Transformation",
    "QC",
  ],
  openGraph: {
    title: "Thanh Ngan | Business Analyst Portfolio",
    description:
      "Business Analyst with nearly 2 years of hands-on experience in Banking, Web & Mobile development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
