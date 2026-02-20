import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://craft-studio.com"),
  title: "Craft Studio — Web Design & Development Agency",
  description:
    "We design and build premium digital experiences for brands that want to stand out. Web design, development, and branding services.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://craft-studio.com",
    title: "Craft Studio — Web Design & Development Agency",
    description: "We design and build premium digital experiences for brands that want to stand out.",
    siteName: "Craft Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Craft Studio — Web Design & Development Agency",
    description: "We design and build premium digital experiences for brands that want to stand out.",
    creator: "@craftstudio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
