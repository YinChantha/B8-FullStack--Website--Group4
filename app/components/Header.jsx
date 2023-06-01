import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header w-full">
      <div className="container flex flex-row justify-between">
        <div className="logo ml-5 mt-3">
          <Image
            src="/Proadvisor - v1-02.png"
            alt="logo"
            width="72"
            height="72"
          />
        </div>
        <div className="link hidden md:flex items-center md:flex-row flex-col ">
          <Link href="/" replace className="hover:bg-lime-900 md:p-0 md:my-0">
            Home
          </Link>
          <Link
            href="/pages/comparisons"
            className="hover:bg-lime-900 md:p-0 md:my-0"
          >
            Comparisons
          </Link>
          <Link href="/pages/resources" className="hover:bg-lime-900 md:p-0 md:my-0">
            Resources
          </Link>
          <Link href="/pages/promotions" className="hover:bg-lime-900 md:p-0 md:my-0">
            Promotions
          </Link>
          <Link href="/pages/aboutus" className="hover:bg-lime-900 md:p-0 md:my-0">
            About Us
          </Link>
          <Link href="/pages/account" className="hover:bg-lime-900 md:p-0 md:my-0">
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
