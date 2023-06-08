import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer px-28 ">
      <div className="foot-sect1 flex flex-row justify-between items-start  py-16 ">
        <p className="font-semibold text-gray-900 text-xl flex-1">
          Unlock Your Financial Potential with Proadvisor!
          <br />
          <span className="font-normal text-gray-500 text-base">
            The trusted provider over 150+ company in Cambodia, of accurate
            rates and financial information.
          </span>
        </p>
        <div className="foot-sect1-btn flex flex-row gap-x-3 w-96 justify-end text-base">
          <button className=" text-gray-700 font-semibold rounded-lg px-5 py-3 border-gray-300 border-2">
            Learn more
          </button>
          <button className=" text-white font-semibold rounded-lg px-5 py-3  bg-red-500">
            Get started
          </button>
        </div>
      </div>
      <hr className="bg-gray-300 h-0.5" />
      <div className="foot-sect2 flex flex-row justify-between pt-8">
        <div className="company-logo-text w-80">
          <img
            src="/images/brand-logo.png"
            alt="proadvisor logo"
            width={150}
            height={50}
          />
          <p className="font-normal text-gray-500 mt-8">
            Proadvisor is a trusted financial advisory platform designed to
            empower individuals in making informed financial decisions.
          </p>
        </div>
        <div className="flex justify-around lg:gap-28">
          <div className="foot-comparisons flex flex-col ">
            <p className="text-gray-400 font-semibold text-sm pb-4">
              Comparisons
            </p>
            <div className="text-gray-500 font-semibold text-base flex flex-col">
              <Link href="/">Loans</Link>
              <Link href="/">Saving Accounts</Link>
              <Link href="/">Fixed Deposit</Link>
            </div>
          </div>
          <div className="foot-company flex flex-col">
            <p className="text-gray-400 font-semibold text-sm pb-4">Company</p>
            <div className="text-gray-500 font-semibold text-base flex flex-col">
              <Link href="/">About us</Link>
              <Link href="/">Media kit</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          <div className="foot-resources flex flex-col">
            <p className="text-gray-400 font-semibold text-sm pb-4">
              Resources
            </p>
            <div className="text-gray-500 font-semibold text-base flex flex-col">
              <Link href="/">Articles</Link>
              <Link href="/">Guides</Link>
              <Link href="/">Tutorials</Link>
              <Link href="/">Help centre</Link>
              <Link href="/">Support</Link>
            </div>
          </div>
          <div className="foot-social flex flex-col">
            <p className="text-gray-400 font-semibold text-sm pb-4">Social</p>
            <div className="text-gray-500 font-semibold text-base flex flex-col">
              <Link href="/">Twitter</Link>
              <Link href="/">LinkedIn</Link>
              <Link href="/">Facebook</Link>
              <Link href="/">GitHub</Link>
              <Link href="/">Dribbble</Link>
            </div>
          </div>
          <div className="foot-legal flex flex-col">
            <p className="text-gray-400 font-semibold text-sm pb-4">Social</p>
            <div className="text-gray-500 font-semibold text-base flex flex-col">
              <Link href="/">Terms</Link>
              <Link href="/">Privacy</Link>
              <Link href="/">Cookies</Link>
              <Link href="/">Settings</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-gray-300 h-0.5 mt-24" />
      <div className="foot-sect3 mt-4 flex flex-row justify-between items-center mb-12">
        <div className="all-right">
          <p className="text-gray-400 font-normal text-base">
            © 2023 Proadvisor. All rights reserved.
          </p>
        </div>
        <div className="social-icon flex flex-row justify-around gap-6">
          <Link href="/">
            <Image
              src="/images/twitter-icon.png"
              alt="twitter icon"
              width={20}
              height={20}
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/linkedin-icon.png"
              alt="twitter icon"
              width={20}
              height={20}
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/facebook-icon.png"
              alt="twitter icon"
              width={20}
              height={20}
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/github-icon.png"
              alt="twitter icon"
              width={20}
              height={20}
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/dribbble-icon.png"
              alt="twitter icon"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
