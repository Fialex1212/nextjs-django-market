import "./globals.css";
import cn from "classnames";
import localfont from 'next/font/local';

const satoshi = localfont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: "--satoshi"
});

const integralCF = localfont({
  src: [
    {
      path: '../../public/fonts/IntegralCF-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: "--integralCF"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn(satoshi.className, integralCF.className)}>
      <body>{children}</body>
    </html>
  );
}
