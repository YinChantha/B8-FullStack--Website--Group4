import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header m-auto flex justify-center bg-slate-600 text-white w-full ">
      <div className="container flex flex-row justify-between mx-5">
        <div className="logo flex justify-center items-center">
          <Image
            src="/Proadvisor - v1-02.png"
            alt="logo"
            width="72"
            height="72"
          />
        </div>
        <div className="link hidden md:flex items-center md:flex-row flex-col ">
          <Link href="/" replace className="p-5 hover:bg-lime-900">
            Home
          </Link>
          <Link href="/pages/comparisons" className="p-5 hover:bg-lime-900">
            Comparisons
          </Link>
          <Link href="/pages/resources" className="p-5 hover:bg-lime-900">
            Resources
          </Link>
          <Link
            href="/pages/promotions"
            className="p-5 hover:bg-lime-900"
          >
            Promotions
          </Link>
          <Link
            href="/pages/aboutus"
            className="p-5 hover:bg-lime-900"
          >
            About Us
          </Link>
          <Link
            href="/pages/account"
            className="p-2 hover:bg-lime-900"
          >
            Account
          </Link>
        </div>
        <div>
          <Image
            src="/menu-bar.png"
            alt="menu"
            width={50}
            height={50}
            className="cursor-pointer md:hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
