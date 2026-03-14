import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "LUMEN — Премиальный эко-клининг нового поколения",
  description: "Научный подход к чистоте, этичный к природе. Премиальные клининговые услуги в Москве с использованием эко-средств и умного планирования.",
  keywords: ["клининг", "Москва", "эко-уборка", "премиум клининг", "уборка квартир", "VIP клининг"],
  authors: [{ name: "LUMEN" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "LUMEN — Премиальный эко-клининг",
    description: "Научный подход к чистоте, этичный к природе",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/hero-main.jpg" fetchPriority="high" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Toaster />
        {/* Global Noise Overlay SVG Filter */}
        <svg className="fixed inset-0 w-full h-full pointer-events-none z-[9999] opacity-[0.03]">
          <defs>
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </body>
    </html>
  );
}
