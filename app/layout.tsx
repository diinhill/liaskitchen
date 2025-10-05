import "@/styles/globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import data from "../data.json";
import { LocaleProvider } from "../components/LocaleProvider";
import GoogleAnalytics from "../components/GoogleAnalytics";
import HtmlLangWrapper from "../components/HtmlLangWrapper";
import { Annie_Use_Your_Telescope, Architects_Daughter, Neucha } from 'next/font/google';

const annieFont = Annie_Use_Your_Telescope({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-annie',
  display: 'swap',
});

const architectsFont = Architects_Daughter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-architects',
  display: 'swap',
});

const neuchaFont = Neucha({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-neucha',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.liaskitchen.de'),
  title: data.seo.title,
  description: data.seo.description,
  keywords: data.seo.keywords,
  authors: [{ name: "Lia's Kitchen" }],
  creator: "Lia's Kitchen",
  publisher: "Lia's Kitchen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
    url: data.seo.canonical,
    siteName: data.seo.openGraph.siteName,
    locale: data.seo.openGraph.locale,
    type: data.seo.openGraph.type as "website",
    images: [
      {
        url: data.seo.openGraph.image,
        width: data.seo.openGraph.imageWidth,
        height: data.seo.openGraph.imageHeight,
        alt: "Lia's Kitchen - Vegan Restaurant Berlin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: data.seo.title,
    description: data.seo.description,
    images: [data.seo.openGraph.image],
  },
  alternates: {
    canonical: data.seo.canonical,
    languages: {
      'en': 'https://www.liaskitchen.de/en',
      'de': 'https://www.liaskitchen.de/de',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '', // Add your Google Search Console verification code here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${annieFont.variable} ${architectsFont.variable} ${neuchaFont.variable}`}>
      <head>
        <link rel="alternate" hrefLang="en" href="https://www.liaskitchen.de/en" />
        <link rel="alternate" hrefLang="de" href="https://www.liaskitchen.de/de" />
        <link rel="alternate" hrefLang="x-default" href="https://www.liaskitchen.de/" />
      </head>
      <body>
        <LocaleProvider>
          <HtmlLangWrapper />
          {children}
          <GoogleAnalytics />
          <Analytics />
        </LocaleProvider>
      </body>
    </html>
  );
}
