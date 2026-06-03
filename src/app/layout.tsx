import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  variable: "--font-calistoga",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Olivier Dupont — Expert Vidéo LinkedIn | Human Digitalis",
  description: "Transformez votre expertise en autorité visible sur LinkedIn. 2h de tournage, 20 vidéos stratégiques, 3× plus de prospects en 90 jours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${calistoga.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream">{children}</body>
    </html>
  );
}
