"use client";

import Discount from "@/components/Discount";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header/Header";
import EmailSender from "@/components/EmailSender";

export default function RootLayout({ children }) {
  return (
    <>
      <Discount />
      <Header />
      <main>{children}</main>
      <EmailSender />
      <Footer />
    </>
  );
}
