// Layout.js

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
