import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { company } from "@/lib/data";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${company.domain}`),
  title: `${company.brand} — White-Label Technical Build Team`,
  description:
    "A dedicated technical builder, backed by QA and a full team, working white-label inside your accounts. GoHighLevel, Make, n8n, Zapier, websites, and AI agents — architected and delivered. You keep the client. We build.",
  verification: {
    google: "wFToSBKTuJHocxBW9xo5xSbKzqoq1Z8V5gF5Pm3pong",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
