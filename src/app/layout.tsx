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
  title: "Ramon Rodriguez",
  description:
    "es un experimentado agente de bienes raices, coach y Branch Manager en Avanti Way, especializado en el mercado de Miami e internacionalmente.",
  openGraph: {
    title: "Ramon Rodriguez",
    description:
      "es un experimentado agente de bienes raices, coach y Branch Manager en Avanti Way, especializado en el mercado de Miami e internacionalmente.",
    images: ["/seo/og-image.png"],
    siteName: "Ramon Rodriguez",
  },
  twitter: {
    title: "Ramon Rodriguez",
    description:
      "es un experimentado agente de bienes raices, coach y Branch Manager en Avanti Way, especializado en el mercado de Miami e internacionalmente.",
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
