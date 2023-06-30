import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer px-4 sm:px-4 md:px-28 ">
      <div className="foot-sect1 flex flex-col mt-12 mb-8 gap-y-8 text-gray-900 text-2xl font-semibold sm:mb-8 sm:mt-12 sm:text-gray-900 sm:text-2xl sm:font-semibold sm:flex sm:flex-col sm:gap-y-8 md:font-semibold md:text-3xl md:flex md:flex-row md:justify-between md:items-start md:mb-16">
        <p className="flex-1 sm:flex-1 mb-8 sm:mb-8 ">
          Unlock Your Financial Potential with Proadvisor!
          <br />
          <span className="text-gray-500 font-normal text-base md:text-xl">
            The trusted provider over 150+ company in Cambodia, of accurate
            rates and financial information.
          </span>
        </p>
        {/* <div className="foot-sect1-btn flex sm:flex-col sm:gap-y-3 lg:flex-row gap-x-3 w-96 justify-end text-base"></div> */}
        <div className="foot-sect1-btn flex flex-col-reverse gap-y-3 text-base font-semibold sm:flex sm:flex-col-reverse sm:text-base sm:gap-y-3 md:text-base md:flex md:flex-row md:gap-x-3">
          <button className=" text-gray-700 rounded-lg px-5 py-3 border-gray-300 border-2 hover:bg-gray-50">
            Learn more
          </button>
          <button className=" text-white rounded-lg px-5 py-3  bg-red-500 hover:bg-red-600">
            Get started
          </button>
        </div>
      </div>
      <hr className="border-b-1 border-gray-100" />
      <div className="foot-sect2 flex flex-col mt-12 gap-y-12 sm:flex sm:flex-col sm:my-12 sm:gap-y-12 md:my-16 md:flex md:flex-row md:gap-x-8 ">
        <div className="company-logo-text gap-y-6 sm:gap-y-6 md:gap-y-8 md:flex-1">
          <img
            src="/images/logo/brand-logo.png"
            alt="proadvisor logo"
            width={147}
            height={32}
          />
          <p className="font-normal text-gray-500 mt-8">
            Proadvisor is a trusted financial advisory platform designed to
            empower individuals in making informed financial decisions.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-8 md:grid-cols-5 md:gap-x-8 lg:gap-x-12">
          {/* <div className="flex flex-row gap-28 mt-0"> */}
          <div className="foot-comparisons flex flex-col ">
            <p className="text-gray-400 font-semibold text-sm pb-4">
              Comparisons
            </p>
            <div className="text-gray-500 font-semibold text-base flex flex-col ">
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Loans
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Saving Accounts
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Fixed Deposit
              </Link>
            </div>
          </div>
          <div className="foot-company flex flex-col">
            <p className="text-gray-400 font-semibold text-sm pb-4">Company</p>
            <div className="text-gray-500 font-semibold text-base flex flex-col">
              <Link href="/aboutus" className="hover:bg-gray-50 hover:text-gray-600">
                About us
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Media kit
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Contact
              </Link>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="flex flex-row gap-28 "> */}
          <div className="foot-resources flex flex-col">
            <p className="text-gray-400 font-semibold text-sm pb-4">
              Resources
            </p>
            <div className="text-gray-500 font-semibold text-base flex flex-col">
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Articles
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Guides
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Tutorials
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Help centre
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Support
              </Link>
            </div>
          </div>
          <div className="foot-social flex flex-col">
            <p className="text-gray-400 font-semibold text-sm pb-4">Social</p>
            <div className="text-gray-500 font-semibold text-base flex flex-col">
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Twitter
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                LinkedIn
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Facebook
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                GitHub
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Dribbble
              </Link>
            </div>
          </div>
          {/* </div> */}
          <div className="foot-legal flex flex-col">
            <p className="text-gray-400 font-semibold text-sm pb-4">Legal</p>
            <div className="text-gray-500 font-semibold text-base flex flex-col">
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Terms
              </Link>
              <Link href="/legal" className="hover:bg-gray-50 hover:text-gray-600">
                Privacy
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Cookies
              </Link>
              <Link href="/settings/home" className="hover:bg-gray-50 hover:text-gray-600">
                Settings
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-b-1 border-gray-100" />
      <div className="foot-sect3 mt-8 mb-12 flex flex-col-reverse sm:mb-12 sm:flex-col-reverse gap-y-6 sm:gap-y-6 sm:items-start md:flex-row md:justify-between md:items-center md:mb-12">
        <div className="all-right">
          <p className="text-gray-400 font-normal text-base">
            © 2023 Proadvisor. All rights reserved.
          </p>
        </div>
        <div className="social-icon flex gap-6 sm:flex sm:gap-6">
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