import type { Metadata } from "next";
import { Chivo, Courier_Prime } from "next/font/google";
import "./globals.css";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const courier = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "mYcutter — Offline Video Editor",
  description:
    "Fast, offline video editor for your machine. No sign-in, no cloud, no watermark. Edit videos locally.",
  icons: {
    icon: "/logo.png",
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
      className={`${chivo.variable} ${courier.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-chivo)]">
        {children}
        {/* Cloudflare Web Analytics — replace YOUR_TOKEN from dash.cloudflare.com */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "YOUR_TOKEN"}'
        />
      </body>
    </html>
  );
}
