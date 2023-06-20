"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";

import { ChevronDownIcon, Bars2Icon } from "@heroicons/react/24/outline";

const navListMenuItems = [
  {
    icon_img: "/images/compare-loans.png",
    title: "Compare Loans",
    content: "Compare different loan options to make an informed decision.",
  },
  {
    icon_img: "/images/compare-save-acc.png",
    title: "Compare Saving Accounts",
    content:
      "Explore a wide range of savings accounts & find the best option for you.",
  },
  {
    icon_img: "/images/compare-fixed-dep.png",
    title: "Compare Fixed Deposit Accounts",
    content: "Maximize your savings with fixed deposit account comparison.",
  },
];
const navListMenuItems1 = [
  {
    icon_img1: "/images/resources/finance-article.png",
    title1: "Financial Articles",
    content1: "Compare different loan options to make an informed decision.",
  },
  {
    icon_img1: "/images/resources/guide-tutorial.png",
    title1: "Guides and Tutorials",
    content1:
      " Explore a wide range of savings accounts & find the best option for you.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMenuOpen1, setIsMenuOpen1] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
  const triggers1 = {
    onMouseEnter: () => setIsMenuOpen1(true),
    onMouseLeave: () => setIsMenuOpen1(false),
  };

  const comparisons = navListMenuItems.map(({ title, content, icon_img }) => (
    <a href="#" key={title}>
      <MenuItem>
        <div className="flex flex-start items-start gap-4">
          <Image src={icon_img} alt="logo" width={22} height={22} />
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {content}
            </Typography>
          </div>
        </div>
      </MenuItem>
    </a>
  ));
  const resources = navListMenuItems1.map(({ title1, content1, icon_img1 }) => (
    <a href="#" key={title1}>
      <MenuItem>
        <div className="flex flex-start items-start gap-4">
          <Image src={icon_img1} alt="logo" width={22} height={22} />
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              {title1}
            </Typography>

            <Typography variant="small" color="gray" className="font-normal">
              {content1}
            </Typography>
          </div>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              Comparisons{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>

        <MenuList
          {...triggers}
          className="hidden w-[45rem] grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {comparisons}
          </ul>
          <div className="col-span-3 grid h-full w-full rounded-md p-3 gap-3">
            <Image
              src="/images/compareloans/compare-pic.png"
              alt="compare-pic"
              width={1000}
              height={400}
            />
            <div className="flex justify-start items-center gap-2">
              <svg
                className=""
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#12B76A" />
              </svg>
              <h1 className="text-gray-900 text-base font-semibold">
                {" "}
                We’ve just released an update!
              </h1>
            </div>
            <p className="font-normal text-gray-500 text-sm">
              Check out the all new features view. Pages now load faster.{" "}
            </p>
            <div className="flex gap-3 mt-2">
              <a href="/#" className="dismiss-btn pr-2">
                Dismiss
              </a>
              <a href="/#" className="changelog-btn text-red-600">
                Changelog
              </a>
            </div>
          </div>
        </MenuList>
      </Menu>
      <Menu open={isMenuOpen1} handler={setIsMenuOpen1}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem
              {...triggers1}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              {/* <Square3Stack3DIcon className="h-[18px] w-[18px]" /> */}
              Recourse{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen1 ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>

        <MenuList
          {...triggers1}
          className="hidden w-[45rem] grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-4 flex w-full flex-col gap-1">{resources}</ul>
          <div className="col-span-3 grid h-full w-full rounded-md p-3 gap-3">
            <Image
              src="/images/resources/vdo-player.png"
              alt="compare-pic"
              width={1000}
              height={400}
            />
            <div className="flex justify-start items-center gap-2">
              <h1 className="text-gray-900 text-base font-semibold">
                {" "}
                We’ve just released an update!
              </h1>
            </div>
            <p className="font-normal text-gray-500 text-sm">
              Check out the all new features view. Pages now load faster.{" "}
            </p>
            <div className="flex gap-3 mt-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_561_84561)">
                  <path
                    d="M9.99999 18.3334C14.6024 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6024 1.66675 9.99999 1.66675C5.39762 1.66675 1.66666 5.39771 1.66666 10.0001C1.66666 14.6025 5.39762 18.3334 9.99999 18.3334Z"
                    stroke="#E40109"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.33332 6.66675L13.3333 10.0001L8.33332 13.3334V6.66675Z"
                    stroke="#E40109"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_561_84561">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <a href="/#" className="changelog-btn text-red-600">
                Watch video
              </a>
            </div>
          </div>
        </MenuList>
      </Menu>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {comparisons}
      </ul>

      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">{resources}</ul>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <li>
        <Link href="/landingPage" className="hover:bg-gray-50 p-2.5 rounded-lg">
          Home
        </Link>
      </li>
      <NavListMenu />
      {/* <li>{comparisons}</li>
      <li>{resources}</li> */}
      

      <li>
        <Link href="/promotions" className="hover:bg-gray-50 p-2.5 rounded-lg">
          Promotion
        </Link>
      </li>
    </ul>
  );
}

const Header = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2  lg:pl-6">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Image
          src="/images/brand-logo.png"
          alt="logo"
          width={147}
          height={32}
        />
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <div className="absolute md:top-2/4 md:me-auto sm:left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <div className="flex items-center  lg:ml-auto gap-1 rounded-full py-0.5 pr-2 pl-0.5 ">
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
            <hr className="line w-0.5 h-5 bg-gray-200" />
            <Link
              href="/account"
              className="login-btn px-4 hover:bg-gray-50 p-2.5 rounded-lg"
            >
              Login
            </Link>
            <button className="redButton">Start Compare</button>
          </div>
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Header;
