"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpenCompare, setIsOpenCompare] = useState(false);
  const [isOpenResources, setIsOpenResources] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(true)


  const router = useRouter();
  const { asPath } = router;
  console.log(asPath);

  const handleToggleCompare = () => {
    setIsOpenCompare(!isOpenCompare);
  };

  const handleToggleResources = () => {
    setIsOpenResources(!isOpenResources);
  };

  const handleOpenNavbar = () => {
    setOpenNavbar(!openNavbar)
  }
  return (
    <header className="header h-45 text-gray-500 font-semibold text-base z-10 border-b-1 border-gray-100">
      <div className="nav-container flex justify-between flex-row px-28 py-5">
        <div className="nav1 flex flex-row">
          <div className="logo flex justify-center items-center mr-8">
            <Image
              src="/images/brand-logo.png"
              alt="logo"
              width={147}
              height={32}
            />
          </div>
          <div className="link flex flex-row items-center space-x-8  ">
            <Link
              href="/landingPage"
              replace
              className=" hover:bg-gray-50 p-2.5 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/"
              replace
              onClick={handleToggleCompare}
              className="hover:bg-gray-50 p-2.5 rounded-lg"
            >
              {isOpenCompare ? (
                <div className="flex flex-row">
                  <p className="pr-2">Comparisions</p>
                  <Image
                    src="/images/arrow-up.png"
                    alt="arrow up"
                    width={20}
                    height={20}
                    className="arrow-up"
                  />
                  <div className="absolute z-10 bg-white rounded-lg drop-shadow-md w-max p-9 flex flex-row mt-10">
                    <div className="flex flex-col">
                      <div className="pb-4">
                        <Link href="/" className="flex flex-row ">
                          <div className="relative px-8 w-80 ">
                            <Image
                              src="/images/compare-loans.png"
                              alt="compare loans icon"
                              width={20}
                              height={20}
                              className="absolute top-1 left-0"
                            />
                            <p className="text-gray-900 inline-block">
                              Compare Loans
                              <br />
                              <span className="text-gray-500 font-normal">
                                Compare different loan options to make an
                                informed decision.
                              </span>
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div className="pb-4">
                        <Link href="/">
                          <div className="relative px-8 w-80">
                            <Image
                              src="/images/compare-save-acc.png"
                              alt="compare saveing acc icon"
                              width={20}
                              height={20}
                              className="absolute top-1 left-0"
                            />
                            <p className="text-gray-900 inline-block">
                              Compare Saving Accounts
                              <br />
                              <span className="text-gray-500 font-normal">
                                Explore a wide range of savings accounts & find
                                the best option for you.
                              </span>
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div className="pb-4">
                        <Link href="/">
                          <div className="relative px-8 w-80">
                            <Image
                              src="/images/compare-fixed-dep.png"
                              alt="compare fixed deposit icon"
                              width={20}
                              height={20}
                              className="absolute top-1 left-0"
                            />
                            <p className="text-gray-900 inline-block">
                              Compare Fixed Deposit Accounts
                              <br />
                              <span className="text-gray-500 font-normal">
                                Maximize your savings with fixed deposit account
                                comparison.
                              </span>
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="m-auto bg-gray-100 p-3 rounded-lg">
                      <div className="compare-pic w-72 flex flex-col items-left pl-1.5 py-1 ">
                        <Image
                          src="/images/compare-pic.png"
                          alt="comparison pic"
                          width={280}
                          height={280}
                          className="pb-2"
                        />
                        <div className="compare-below-pic relative item mt-2">
                          <Image
                            src="/images/green-dot.png"
                            alt="green dot"
                            width={10}
                            height={10}
                            className="absolute top-2 left-0"
                          />
                          <p className="px-4 text-gray-900">
                            We’ve just released an update!
                          </p>
                        </div>
                        <div className="font-normal">
                          <p className="">
                            Check out the all new features view. Pages now load
                            faster.
                          </p>
                        </div>
                        <div className="mt-2">
                          <button className="dismiss-btn pr-12">Dismiss</button>
                          <button className="changelog-btn text-red-600">
                            Changelog
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row">
                  <p className="pr-2">Comparisions</p>
                  <Image
                    src="/images/arrow-down.png"
                    alt="arrow down"
                    width={20}
                    height={20}
                    className="arrow-down"
                  />
                </div>
              )}
            </Link>
            <Link
              href="/"
              onClick={handleToggleResources}
              className="hover:bg-gray-50 p-2.5 rounded-lg "
            >
              {isOpenResources ? (
                <div className="flex flex-row">
                  <p className="pr-2">Resources</p>
                  <Image
                    src="/images/arrow-up.png"
                    alt="arrow up"
                    width={20}
                    height={20}
                    className="arrow-up"
                  />
                  <div className="resource-dropdown p-9 flex flex-row mt-10 absolute z-10 bg-white rounded-lg drop-shadow-md">
                    <div className="resource-content relative w-80">
                      <div className="finan-article bg-blue-300 ">
                        <Image
                          src="/images/finance-article.png"
                          alt="finance article icon"
                          width={20}
                          height={20}
                          className="absolute top-1 left-0"
                        />
                        <p className="text-gray-900 font-semibold absolute left-8">
                          Financial Articles
                          <br />
                          <span className="font-normal text-gray-500">
                            Compare different loan options to make an informed
                            decision.
                          </span>
                        </p>
                      </div>
                      <div className="guide-tutorial relative mt-24 bg-slate-400">
                        <Image
                          src="/images/guide-tutorial.png"
                          alt=" guide tutorial icon"
                          width={20}
                          height={20}
                          className="absolute left-0"
                        />
                        <p className="text-gray-900 font-semibold absolute left-8">
                          Guides and Tutorials
                          <br />
                          <span className="font-normal text-gray-500">
                            Explore a wide range of savings accounts & find the
                            best option for you.
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="video-resource flex flex-col ml-5 bg-gray-100 w-72 p-2 rounded-lg">
                      <button className="resource-pic p-2 flex flex-row">
                        <Image
                          src="/images/vdo-player.png"
                          alt="resource-pic "
                          width={280}
                          height={280}
                        />
                      </button>
                      <p className="p-2 text-gray-900 font-semibold">
                        We’ve just released an update!
                        <br />
                        <span className="font-normal text-gray-500">
                          Check out the all new features view. Pages now load
                          faster.
                        </span>
                      </p>
                      <button className="watch-vdo-btn flex flex-row justify-start items-center p-2">
                        <Image
                          src="/images/play-icon.png"
                          alt="play button icon"
                          width={20}
                          height={20}
                          className=""
                        />
                        <p className="pl-2 font-semibold text-red-600 ">
                          Watch Video
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row">
                  <p className="pr-2">Resources</p>
                  <Image
                    src="/images/arrow-down.png"
                    alt="arrow down"
                    width={20}
                    height={20}
                    className="arrow-down"
                  />
                </div>
              )}
            </Link>
            <Link
              href="/promotions"
              className=" hover:bg-gray-50 p-2.5 rounded-lg"
            >
              Promotions
            </Link>
          </div>
        </div>
        <div className="nav2 w-fit gap-x-2 hidden lg:flex justify-around items-center ">
          <div className="language  px-4">
            <button className="flex flex-row justify-center items-center hover:bg-gray-50 p-2.5 rounded-lg">
              <Image
                src="/images/language.png"
                alt="language-logo"
                width="18"
                height="18"
                className="pr-0.5"
              />
              <p>English</p>
            </button>
          </div>

          <hr className="line w-0.5 h-5 bg-gray-200" />
          <div className="login-btn px-4 hover:bg-gray-50 p-2.5 rounded-lg">
            <Link href="/account">Login</Link>
          </div>
          <div className="compare-btn">
            <button className="redButton">
              Start Compare
            </button>
          </div>
        </div>
        <button className="z-0 lg:hidden ">
          <Image
            src="/images/nav-menu.png"
            alt="nav-menu icon"
            width={70}
            height={70}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
