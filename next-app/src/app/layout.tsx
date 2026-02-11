import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "LINGO",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="My Portfolio" name="description" />
        <meta content="tjordy17" name="author" />
        <link
          href="/assets/lib/bootstrap/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"
          rel="stylesheet"
        />
        <link href="/assets/lib/animate.css/animate.css" rel="stylesheet" />
        <link href="/assets/lib/et-line-font/et-line-font.css" rel="stylesheet" />
        <link href="/assets/lib/flexslider/flexslider.css" rel="stylesheet" />
        <link
          href="/assets/lib/simple-text-rotator/simpletextrotator.css"
          rel="stylesheet"
        />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link
          id="color-scheme"
          href="/assets/css/colors/default.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/icon.css" />
        <link
          rel="shortcut icon"
          href="/assets/images/favicon.png"
          type="image/x-icon"
        />
      </head>
      <body data-spy="scroll" data-target=".onpage-navigation" data-offset="60">
        {children}
        <Script src="/assets/lib/jquery/dist/jquery.js" strategy="beforeInteractive" />
        <Script
          src="/assets/lib/bootstrap/dist/js/bootstrap.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/lib/wow/dist/wow.js" strategy="afterInteractive" />
        <Script
          src="/assets/lib/isotope/dist/isotope.pkgd.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/lib/imagesloaded/imagesloaded.pkgd.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/lib/flexslider/jquery.flexslider.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/lib/owl.carousel/dist/owl.carousel.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/lib/smoothscroll.js" strategy="afterInteractive" />
        <Script
          src="/assets/lib/magnific-popup/dist/jquery.magnific-popup.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/plugins.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
