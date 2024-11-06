import "./globals.css";
import cn from "classnames";
import localfont from "next/font/local";
import { siteMetadata } from "./utils/metaData";
import { PriceSortingProvider } from "@/contexts/priceContext";
import { ColorsSortingProvider } from "@/contexts/colorsContext";
import { SizesSortingProvider } from "@/contexts/sizesContext";
import { StylesSortingProvider } from "@/contexts/stylesContext";

const satoshi = localfont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--satoshi",
});

const integralCF = localfont({
  src: [
    {
      path: "../../public/fonts/IntegralCF-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--integralCF",
});

export const metadata = {
  metadataBase: new URL("https://acme.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: siteMetadata.googleVerification,
  },
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    url: siteMetadata.url,
    siteName: siteMetadata.name,
    locale: "uk_UA",
    type: "website",
    images: {
      url: siteMetadata.image.url,
      width: 500,
      height: 500,
      alt: siteMetadata.image.alt,
    },
  },
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: siteMetadata.image.url,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn(satoshi.className, integralCF.className)}>
      <PriceSortingProvider>
        <ColorsSortingProvider>
          <SizesSortingProvider>
            <StylesSortingProvider>
              <body>{children}</body>
            </StylesSortingProvider>
          </SizesSortingProvider>
        </ColorsSortingProvider>
      </PriceSortingProvider>
    </html>
  );
}
