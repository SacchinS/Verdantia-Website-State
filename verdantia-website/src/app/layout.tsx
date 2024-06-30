import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import MobileNavBar from "./components/MobileNavBar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Verdantia Careers Website",
  description: "Join us!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ overflowX: 'hidden' }}>
        { children}</body>
    </html>
  );
}
