import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

import data from "../data.json";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const { seo } = data;
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Z884MGZXBJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Z884MGZXBJ');
        `}
      </Script>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
