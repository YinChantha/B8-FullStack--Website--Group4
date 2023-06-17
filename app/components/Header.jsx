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

import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

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
    icon_img1: "/images/compare-loans.png",
    title1: "Compare Loans",
    content1: "Compare different loan options to make an informed decision.",
  },
  {
    icon_img1: "/images/compare-save-acc.png",
    title1: "Compare Saving Accounts",
    content1:
      "Explore a wide range of savings accounts & find the best option for you.",
  },
  {
    icon_img1: "/images/compare-fixed-dep.png",
    title1: "Compare Fixed Deposit Accounts",
    content1: "Maximize your savings with fixed deposit account comparison.",
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

  const renderItems = navListMenuItems.map(({ title, content }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {content}
        </Typography>
      </MenuItem>
    </a>
  ));
  const renderItems1 = navListMenuItems1.map(({ title1, content1 }) => (
    <a href="#" key={title1}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title1}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {content1}
        </Typography>
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
              {/* <Square3Stack3DIcon className="h-[18px] w-[18px]" /> */}
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
          className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
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
          className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems1}
          </ul>
        </MenuList>
      </Menu>

      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems1}
      </ul>
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
      <li>
        <Link href="/promotions" className="hover:bg-gray-50 p-2.5 rounded-lg">
          Promotion
        </Link>
      </li>
    </ul>
  );
}

const Header = () => {
  // const [isOpenCompare, setIsOpenCompare] = useState(false);
  // const [isOpenResources, setIsOpenResources] = useState(false);
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
        {/* <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography> */}
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
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
        {/* <ProfileMenu /> */}
        {/* <div className=" hidden -translate-x-2/4 -translate-y-2/4 lg:block   "> */}
          <div className="flex items-center  lg:ml-auto gap-1 rounded-full py-0.5 pr-2 pl-0.5">
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
        {/* </div> */}
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Header;
