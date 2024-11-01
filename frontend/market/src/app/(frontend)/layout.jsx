"use client";

import Discount from "@/components/Discount";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Header/Sidebar";
import EmailSender from "@/components/EmailSender";
import { useState } from "react";

export default function RootLayout({ children }) {

  return (
    <> 
      <Discount />
      <Header/>
      <main>{children}</main>
      <EmailSender />
      <Footer />
    </>
  );
}
