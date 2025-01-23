import type { Metadata } from "next";
import "./globals.css";
import "./styles/admin/all.css";
import AdminBar from "@/public/components/adminbar/page";
import React, { Suspense } from "react";
import loading from "./loading";
// import AdminBar from "/components/adminbar/page";

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

      <body className="bg-gray-400">
        <AdminBar prop="123"></AdminBar>
          <main>{children}</main>
      </body>

    </html>
  );
}
