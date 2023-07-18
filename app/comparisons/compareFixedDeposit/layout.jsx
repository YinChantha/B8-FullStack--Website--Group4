// Layout.js
  "use client";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
import { RecoilRoot } from "recoil";

const Layout = ({ children }) => {
  return (
    <>
      <RecoilRoot>
        <Header />
        {children}
        <Footer />
      </RecoilRoot>
    </>
  );
};

export default Layout;
