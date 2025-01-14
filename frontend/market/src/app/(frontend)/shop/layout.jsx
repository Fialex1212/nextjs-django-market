"use client"

import Breadcrumbs from "@/components/Breadcrumbs";

export default function RootLayout({ children }) {
    return (
      <>
      <Breadcrumbs />
        {children}
      </>
    );
  }