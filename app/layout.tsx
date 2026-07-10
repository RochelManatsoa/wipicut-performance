import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Sora } from "next/font/google";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Olona Sport Experts — Experts football, analyse vidéo et accompagnement joueur",
  description:
    "Olona Sport Experts connecte joueurs, parents, clubs et académies avec des experts football vérifiables : anciens pros, coachs, préparateurs, analystes vidéo, agents FIFA, avocats et experts carrière.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-ink-950 font-sans text-surface-50 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
