// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Astergram — Real-time Markets",
    template: "%s • Astergram",
  },
  description:
    "Astergram — Real-time markets for BTC, ETH, SOL, BNB and more. Telegram-native trading dashboard.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  openGraph: {
    title: "Astergram",
    description:
      "Real-time markets for BTC, ETH, SOL, BNB and more. Telegram-native trading dashboard.",
    url: "https://astergram.app",
    siteName: "Astergram",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astergram",
    description:
      "Real-time markets for BTC, ETH, SOL, BNB and more. Telegram-native trading dashboard.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-dvh bg-black text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
