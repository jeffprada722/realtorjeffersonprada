import type { Metadata } from "next";
import { Open_Sans, Raleway, Lora } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jefferson Prada - Real Estate Agent",
  description:
    "Jefferson Prada is a Real Estate Agent with Avanti Way, specializing in the South Florida market. Helping buyers, sellers, and investors navigate Miami real estate.",
  openGraph: {
    title: "Jefferson Prada - Real Estate Agent",
    description:
      "Jefferson Prada is a Real Estate Agent with Avanti Way, specializing in the South Florida market. Helping buyers, sellers, and investors navigate Miami real estate.",
    images: ["/seo/og-image.png"],
    siteName: "Jefferson Prada Real Estate",
  },
  twitter: {
    title: "Jefferson Prada - Real Estate Agent",
    description:
      "Jefferson Prada is a Real Estate Agent with Avanti Way, specializing in the South Florida market. Helping buyers, sellers, and investors navigate Miami real estate.",
    images: ["/seo/og-image.png"],
  },
  icons: {
    icon: "/seo/favicon.png",
    shortcut: "/seo/favicon.png",
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
      className={`${openSans.variable} ${raleway.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
