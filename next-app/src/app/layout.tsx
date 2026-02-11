import type { Metadata } from "next";
import { Open_Sans, Roboto_Condensed } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "optional",
  variable: "--font-open-sans",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "optional",
  variable: "--font-roboto-condensed",
});

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
          rel="shortcut icon"
          href="/assets/images/favicon.png"
          type="image/x-icon"
        />
      </head>
      <body
        data-spy="scroll"
        data-target=".onpage-navigation"
        data-offset="60"
        className={`${openSans.variable} ${robotoCondensed.variable} antialiased`}
      >
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
