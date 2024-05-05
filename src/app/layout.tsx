import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/Header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JapaCommuBBS",
  description: "みんなにやさしい掲示板",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
