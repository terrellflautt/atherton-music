import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LoadingScreen from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atherton Music | Leeann Atherton - Texas Gospel, Blues & Americana",
  description: "Atherton is a mother-son duo from Austin, Texas playing Texas songwriter country blues and good God gospel. Experience powerful vocals blending Americana, soul, gospel, and blues. New gospel album releasing December 15, 2025.",
  keywords: ["Leeann Atherton", "Atherton Music", "Texas Gospel", "Austin Blues", "Americana Music", "Country Gospel", "Texas Songwriter", "Mother Son Duo", "Austin Music", "Gospel Album 2025"],
  authors: [{ name: "Atherton Music" }],
  creator: "Atherton Music",
  publisher: "Atherton Music",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    url: "https://athertonmusic.com",
    siteName: "Atherton Music",
    title: "Atherton Music | Leeann Atherton - Texas Gospel, Blues & Americana",
    description: "Mother-son duo from Austin, Texas. Texas songwriter country blues and good God gospel. New gospel album December 15, 2025.",
    images: [
      {
        url: "/images/atherton-duo-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Atherton Music - Leeann Atherton Mother Son Duo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LeeannAtherton",
    creator: "@LeeannAtherton",
    title: "Atherton Music | Leeann Atherton",
    description: "Texas Gospel, Blues & Americana. New gospel album December 15, 2025.",
    images: ["/images/atherton-duo-1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "Atherton Music",
  "alternateName": "Leeann Atherton",
  "description": "Mother-son duo from Austin, Texas playing Texas songwriter country blues and good God gospel",
  "genre": ["Americana", "Blues", "Soul", "Gospel", "Country"],
  "image": "https://athertonmusic.com/images/atherton-duo-1.jpeg",
  "url": "https://athertonmusic.com",
  "sameAs": [
    "https://open.spotify.com/artist/4RHxs2rK2iKABmhgqHH2Fb",
    "https://music.apple.com/us/artist/leeann-atherton/255104334",
    "https://soundcloud.com/leeann-atherton",
    "https://x.com/LeeannAtherton",
    "https://leeannatherton.bandcamp.com",
  ],
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "addressCountry": "US"
    }
  },
  "member": [
    {
      "@type": "Person",
      "name": "Leeann Atherton",
      "role": "Lead Vocalist"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingScreen />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
