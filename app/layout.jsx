"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { usePathname } from "next/navigation";

import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const router = usePathname();
  const pathToHideNav = ["/", "promotions", "landingPage", "contact", "legal", "FAQs"];

  return (
    <html lang="en" className="box-border">
      <body className="flex flex-col min-h-screen">
        {(router === "/" ||
          router === "/promotions" ||
          router === "/landingPage" ||
          // router === "/account" ||
          router === "/contact" ||
          router === "/legal" ||
          router === "/FAQs") && <Header className="" />}
        <main className="flex-1">{children}</main>
        {(router === "/" ||
          router === "/promotions/[id]" ||
          router === "/promotions" ||
          router === "/landingPage" ||
          router === "/aboutus" ||
          router === "/contact" ||
          router === "/legal" ||
          router === "/FAQs") && <Footer className="" />}
     
      </body>
    </html>
  );
}
