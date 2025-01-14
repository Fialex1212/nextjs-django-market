"use client"

import Breadcrumbs from "@/components/Breadcrumbs";

export default function ProfileLayout({ children }) {
    return (
      <>
      <Breadcrumbs />
        {children}
      </>
    );
  }