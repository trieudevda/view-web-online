import type { Metadata } from "next";
import "./globals.css";
import "./styles/admin/all.css";
import AdminBar from "@/public/components/adminbar/page";
import React from "react";
import TopBar from "@/public/components/topbar/page";
import BreadcrumbsAdmin from "@/public/components/breadcrumbs/page";

export const metadata: Metadata = {
  title: "Web Developer",
  description: "Web Developer",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-w-full">
        <AdminBar prop="123"></AdminBar>
        <main className="w-full relative">
          <TopBar />
          <div className="content-all">
            <BreadcrumbsAdmin/>
            {children}</div>
        </main>
      </body>
    </html>
  );
}
