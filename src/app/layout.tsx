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
  metadataBase: new URL("https://realtorjeffersonprada.com"),
  title: "Jefferson Prada | Realtor Miami - Avanti Way",
  description:
    "Economist & Real Estate Sales Associate in Miami, FL. Specialist in financial analysis for real estate investments. Avanti Way Realty. Call (786) 616-6307.",
  keywords: [
    "Real Estate Miami",
    "Inversiones inmobiliarias Florida",
    "Realtor en Miami",
    "Avanti Way Realty",
    "Jefferson Prada Realtor",
    "Miami luxury homes",
    "South Florida real estate",
    "New construction Miami",
    "Investment properties Miami",
    "Analisis financiero inmobiliario",
  ],
  authors: [{ name: "Jefferson Alberto Prada Camacho" }],
  creator: "Jefferson Alberto Prada Camacho",
  publisher: "Jefferson Prada - Avanti Way Realty",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://realtorjeffersonprada.com",
    siteName: "Jefferson Prada Real Estate",
    title: "Jefferson Prada | Economist & Realtor Miami - Avanti Way",
    description:
      "Economist & Real Estate Sales Associate specializing in financial analysis for real estate investments in Miami, FL. Avanti Way Realty.",
    images: [
      {
        url: "/images/jefferson-prada-headshot.jpg",
        width: 1024,
        height: 1024,
        alt: "Jefferson Prada - Real Estate Agent Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jefferson Prada | Economist & Realtor Miami - Avanti Way",
    description:
      "Economist & Real Estate Sales Associate specializing in financial analysis for real estate investments in Miami, FL. Avanti Way Realty.",
    images: ["/images/jefferson-prada-headshot.jpg"],
    creator: "@realtorjeffersonprada",
  },
  icons: {
    icon: "/seo/favicon.png",
    shortcut: "/seo/favicon.png",
    apple: "/seo/favicon.png",
  },
  alternates: {
    canonical: "https://realtorjeffersonprada.com",
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Miami",
    "geo.position": "25.7617;-80.1918",
    ICBM: "25.7617, -80.1918",
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
      <head>
        <meta name="author" content="Jefferson Alberto Prada Camacho" />
        <link rel="canonical" href="https://realtorjeffersonprada.com" />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
