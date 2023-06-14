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
          {/* klg nis dak span tver ey k ? */}
          {/* <span className="font-normal text-gray-500 text-base"> */}
            The trusted provider over 150+ company in Cambodia, of accurate
            rates and financial information.
          {/* </span> */}
        </p>
        <div className="foot-sect1-btn flex flex-row gap-x-3 w-96 justify-end text-base">
          <button className=" text-gray-700 font-semibold rounded-lg px-5 py-3 border-gray-300 border-2 hover:bg-gray-50">
            Learn more
          </button>
          <button className=" text-white font-semibold rounded-lg px-5 py-3  bg-red-500 hover:bg-red-600">
            Get started
          </button>
        </div>
      </div>
      <hr className="border-b-1 border-gray-100" />
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
        <div className="flex flex-row justify-around gap-28 ">
          <div className="flex flex-row gap-28 mt-0">
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
              <p className="text-gray-400 font-semibold text-sm pb-4">
                Company
              </p>
              <div className="text-gray-500 font-semibold text-base flex flex-col">
                <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
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
          </div>
          <div className="flex flex-row gap-28 ">
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
          </div>
          <div className="foot-legal flex flex-col">
            <p className="text-gray-400 font-semibold text-sm pb-4">Social</p>
            <div className="text-gray-500 font-semibold text-base flex flex-col">
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Terms
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Privacy
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
                Cookies
              </Link>
              <Link href="/" className="hover:bg-gray-50 hover:text-gray-600">
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
