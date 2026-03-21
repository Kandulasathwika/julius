import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jsSerif = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-js-serif",
});

const jsSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-js-sans",
});

export const metadata: Metadata = {
  title: "Julius Silvert | Foodservice distribution",
  description: "Wholesale food distribution for chefs, restaurants, and hospitality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jsSerif.variable} ${jsSans.variable}`}
    >
      <body className="min-h-screen antialiased bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
