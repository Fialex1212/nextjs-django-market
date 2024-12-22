"use client";

import Discount from "@/components/Discount";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import EmailSender from "@/components/EmailSender";
import { Toaster } from "react-hot-toast";

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
