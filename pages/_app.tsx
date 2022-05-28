import React from "react";
import { AppProps } from "next/app";
import Script from "next/script";

import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-02CR5P3Z91`}
      />
      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-02CR5P3Z91', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
