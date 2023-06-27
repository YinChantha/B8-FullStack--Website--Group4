import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ResourcesLayout({ children }) {
  return (
    <body className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </body>
  );
}
