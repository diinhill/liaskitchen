import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

import data from "../data.json";

export default function App({ Component, pageProps }: AppProps) {
  const { seo } = data;
  return (
    <>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
