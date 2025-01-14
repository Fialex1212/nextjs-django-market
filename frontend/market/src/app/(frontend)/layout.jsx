"use client";

import Discount from "@/components/Layout/Discount";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header/Header";
import EmailSender from "@/components/EmailSender";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <>
      <Toaster />
      <Discount />
      <Header />
      <main>{children}</main>
      <EmailSender />
      <Footer />
    </>
  );
}
