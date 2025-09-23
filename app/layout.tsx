import "@/styles/globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import data from "../data.json";
import { LocaleProvider } from "../components/LocaleProvider";
import GoogleAnalytics from "../components/GoogleAnalytics";

export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
    url: data.seo.canonical,
    siteName: data.seo.openGraph.siteName,
    locale: data.seo.openGraph.locale,
    type: data.seo.openGraph.type as "website",
  },
  alternates: {
    canonical: data.seo.canonical,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&family=Architects+Daughter&family=Neucha&display=swap"
        />
      </head>
      <body>
        <LocaleProvider>
          {children}
          <GoogleAnalytics />
          <Analytics />
        </LocaleProvider>
      </body>
    </html>
  );
}
