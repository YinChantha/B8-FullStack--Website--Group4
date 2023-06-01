import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/router";

const Header = () => {
  // const router = useRouter();
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
            href="/comparisons"
            className="hover:bg-lime-900 md:p-0 md:my-0"
          >
            Comparisons
          </Link>
          <Link href="/resources" className="hover:bg-lime-900 md:p-0 md:my-0">
            Resources
          </Link>
          <Link href="/promotions" className="hover:bg-lime-900 md:p-0 md:my-0">
            Promotions
          </Link>
          <Link href="/aboutus" className="hover:bg-lime-900 md:p-0 md:my-0">
            About Us
          </Link>
          <Link href="/account" className="hover:bg-lime-900 md:p-0 md:my-0">
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
