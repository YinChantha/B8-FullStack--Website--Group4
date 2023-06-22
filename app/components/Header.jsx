"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const Comparisons = [
  {
    src: "/images/comparisons/compare-loans.png",
    title: "Compare Loans",
    description: "Compare different loan options to make an informed decision.",
    path: "/comparisons/compareLoans",
  },
  {
    src: "/images/comparisons/compare-save-acc.png",
    title: "Compare Saving Accounts",
    description:
      "Explore a wide range of savings accounts & find the best option for you.",
    path: "/comparisons/compareSavingAcc",
  },
  {
    src: "/images/comparisons/compare-fixed-dep.png",
    title: "Compare Fixed Deposit Accounts",
    description: "Maximize your savings with fixed deposit account comparison.",
    path: "/comparisons/compareFixedDeposit",
  },
];
const Resources = [
  {
    src: "/images/resources/finance-article.png",
    title: "Financial Articles",
    description: "Compare different loan options to make an informed decision.",
    path: "/resources/financialArticles",
  },
  {
    src: "/images/resources/guide-tutorial.png",
    title: "Guides and Tutorials",
    description:
      "Explore a wide range of savings accounts & find the best option for you.",
    path: "/resources/guidesTutorials",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMenuOpen1, setIsMenuOpen1] = React.useState(false);
  const [isMobileMenuOpen1, setIsMobileMenuOpen1] = React.useState(false);

  const renderItems = Comparisons.map(
    ({ src, title, description, path }, key) => (
      // <Link href={path} className="flex items-start "></Link>
      <Link href={path} key={key} className="">
        <MenuItem className="p-4 ">
          <div className="flex items-start">
            <Image alt="icons" src={src} width={24} height={24} />
            <div className="text-left ml-2">
              <h1 className="blockTitle">{title}</h1>
              <p className="blockContent text-left ">{description}</p>
            </div>
          </div>
        </MenuItem>
      </Link>
    )
  );
  const renderItems1 = Resources.map(
    ({ src, title, description, path }, key) => (
      <Link href={path} className="">
        <MenuItem className="p-4">
          <div className="flex items-start">
            <Image
              alt="icons"
              src={src}
              width={24}
              height={24}
              className="w-auto h-auto"
            />
            <div className="text-left ml-2">
              <h1 className="blockTitle">{title}</h1>
              <p className="blockContent text-left">{description}</p>
            </div>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <div className="flex flex-row max-md:flex-col gap-x-5">
        {/* Comparisons */}
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler className="text-gray-600">
            <Typography as="div" variant="small" className="">
              <ListItem
                className="flex items-center text-gray-500 font-semibold text-base gap-2 py-2 pr-4 hover:text-gray-600 hover:bg-gray-50"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                Comparisons
                <ChevronDownIcon
                  className={`hidden h-5 w-5 transition-transform md:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-5 w-5 transition-transform md:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden gap-3 w-[45rem] md:block p-3 drop-shadow-lg rounded-lg">
            <div className="flex">
              <div className="flex flex-start justify-start mr-2">
                <ul>{renderItems}</ul>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <Image
                    src="/images/comparisons/compare-pic.png"
                    alt="compare"
                    width={400}
                    height={50}
                    className=""
                  />
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#12B76A" />
                  </svg>
                  <h1 className="text-left text-gray-900 font-semibold text-base">
                    We've just released an update!
                  </h1>
                </div>
                <p className="text-left text-gray-500 text-sm font-normal">
                  Check out the all new features view. Pages now load faster.
                </p>
                <div className="flex gap-2">
                  <Link href="" className="text-gray-600 font-semibold text-sm">
                    Dismiss
                  </Link>
                  <Link href="" className="text-red-600 font-semibold text-sm">
                    Changing
                  </Link>
                </div>
              </div>
            </div>
          </MenuList>
        </Menu>
        {/* Promotion */}
        <Menu
          open={isMenuOpen1}
          handler={setIsMenuOpen1}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler className="text-gray-600">
            <Typography as="div" variant="small" className="">
              <ListItem
                className="flex items-center text-gray-500 font-semibold text-base gap-2 py-2 pr-4 hover:text-gray-600 hover:bg-gray-50"
                selected={isMenuOpen1 || isMobileMenuOpen1}
                onClick={() => setIsMobileMenuOpen1((cur) => !cur)}
              >
                Resources
                <ChevronDownIcon
                  className={`hidden h-5 w-5 transition-transform md:block ${
                    isMenuOpen1 ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform md:hidden ${
                    isMobileMenuOpen1 ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden gap-3 w-[45rem] md:block p-2 drop-shadow-lg rounded-lg">
            <div className="flex">
              <div className="flex flex-start justify-start">
                <ul>{renderItems1}</ul>
              </div>
              <div className="flex flex-col gap-3 p-2">
                <div>
                  <Image
                    src="/images/resources/vdo-player.png"
                    alt="compare"
                    width={400}
                    height={50}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-left text-gray-900 font-semibold text-base">
                    We've just released an update!
                  </h1>
                </div>
                <p className="text-left text-gray-500 text-sm font-normal">
                  Check out the all new features view. Pages now load faster.
                </p>
                <div className="flex gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                  </svg>
                  <Link href="" className="text-red-600 font-semibold">
                    Watch video
                  </Link>
                </div>
              </div>
            </div>
          </MenuList>
        </Menu>
      </div>
      {/* mobile responsive from Comparisions */}
      <div className="block md:hidden">
        <Collapse open={isMobileMenuOpen} className="flex flex-col gap-3">
          {renderItems}
          <Image
            src="/images/comparisons/compare-pic.png"
            alt="compare"
            width={600}
            height={40}
          />

          <div className="flex items-center gap-2">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#12B76A" />
            </svg>
            <h1 className="text-left text-gray-900 font-semibold text-base">
              We've just released an update!
            </h1>
          </div>
          <p className="text-lef text-gray-500 font-normal text-sm">
            Check out the all new features view. Pages now load faster.
          </p>
          <div className="flex gap-2">
            <Link href="" className="text-gray-600 font-semibold">
              Dismiss
            </Link>
            <Link href="" className="text-red-600 font-semibold">
              Changing
            </Link>
          </div>
        </Collapse>
      </div>
      {/* mobile responsive from Resources */}
      <div className="block md:hidden">
        <Collapse open={isMobileMenuOpen1} className="flex flex-col gap-3">
          {renderItems1}
          <Image
            src="/images/resources/vdo-player.png"
            alt="compare"
            width={600}
            height={40}
          />
          <div className="flex items-center gap-2">
            <h1 className="text-left text-gray-900 font-semibold text-lg">
              We've just released an update!
            </h1>
          </div>
          <p className="text-left text-gray-500 text-sm font-normal">
            Check out the all new features view. Pages now load faster.
          </p>
          <div className="flex gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            </svg>
            <Link href="" className="text-red-600 font-normal text-sm">
              Watch video
            </Link>
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const router = useRouter();
  const handlePromo = () => { 
    router.push("/promotions");
  }
  const handleCompare = () => { 
    router.push("/landingPage");
  }

  return (
    <div>
      <div className="flex md:flex-row flex-col gap-x-4">
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal text-gray-600"
        >
          <div
            onClick={handleCompare}
            className="flex items-center text-gray-500 font-semibold text-base gap-2 py-2 px-4 hover:text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            Home
          </div>
        </Typography>
        <div>
          <NavListMenu />
        </div>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal text-gray-600"
        >
          <div
            onClick={handlePromo}
            className="flex items-center text-gray-500 font-semibold text-base gap-2 py-2 px-4 hover:text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            Promotions
          </div>
          {/* <p>Promorion</p> */}
        </Typography>
      </div>
      <div className="flex w-full rounded-sm border border-gray-200 md:hidden gap-20 py-3 px-3">
        <div className="flex flex-col gap-3">
          <Link href="" className="text-gray-400 font-normal">
            About us
          </Link>
          <Link href="" className="text-gray-400 font-normal">
            Support
          </Link>
          <Link href="" className="text-gray-400 font-normal">
            Careers
          </Link>
          <Link href="" className="text-gray-400 font-normal">
            Legal
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="" className="text-gray-400 font-normal">
            Contact
          </Link>
          <Link href="" className="text-gray-400 font-normal">
            Sitemap
          </Link>
          <Link href="" className="text-gray-400 font-normal">
            Cookie settings
          </Link>
        </div>
      </div>
    </div>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);


  return (
    <div className="z-[999999] fixed top-0 px-4 sm:px-4 md:px-28 py-2 rounded-none bg-white border-b-1 border-gray-100">
      <div className="flex items-center justify-between gap-[150px] ">
        <div className="flex gap-x-10">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 flex justify-center items-center"
          >
            <Image
              src="/images/logo/brand-logo.png"
              alt="Logo"
              width={147}
              height={32}
            />
          </Typography>

          <div className="hidden md:block text-red-600">
            <NavList />
          </div>
        </div>
        <div className="hidden gap-4 md:flex justify-center items-center flex-1">
          <div className="inline-flex gap-2 items-center hover:bg-gray-50 p-2.5 ​ text-gray-50 rounded-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3334 9.99984C18.3334 14.6022 14.6025 18.3332 10.0001 18.3332M18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665M18.3334 9.99984H1.66675M10.0001 18.3332C5.39771 18.3332 1.66675 14.6022 1.66675 9.99984M10.0001 18.3332C12.0845 16.0512 13.269 13.0898 13.3334 9.99984C13.269 6.90987 12.0845 3.94846 10.0001 1.6665M10.0001 18.3332C7.91568 16.0512 6.73112 13.0898 6.66675 9.99984C6.73112 6.90987 7.91568 3.94846 10.0001 1.6665M1.66675 9.99984C1.66675 5.39746 5.39771 1.6665 10.0001 1.6665"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Link
              href=""
              className="text-gray-500 font-semibold text-base hover:text-gray-600"
            >
              English
            </Link>
          </div>

          <hr className="line w-0.5 h-5 bg-gray-200" />
          <Link
            href="/account"
            className="flex gap-2 items-center px-4 hover:bg-gray-50 p-2.5 rounded-lg text-gray-500 font-semibold text-base hover:text-gray-600"
          >
            Login
          </Link>
          <button className="redButton text-white text-base font-semibold bg-red-500 rounded-lg px-5 py-3 hover:bg-red-600 flex-1">
            Start Compare
          </button>
        </div>
        {/* <IconButton
          color="blue-gray"
          className="md:hidden flex items-center justify-center"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" strokeWidth={2} />
          )}
        </IconButton> */}
        <IconButton
          color="blue-gray"
          className="md:hidden flex items-center justify-center"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex flex-col w-full flex-nowrap items-center gap-2 md:hidden">
          <div className="inline-flex gap-2 items-center border border-gray-400 py-2 w-full justify-center rounded-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3333 9.99984C18.3333 14.6022 14.6024 18.3332 9.99999 18.3332M18.3333 9.99984C18.3333 5.39746 14.6024 1.6665 9.99999 1.6665M18.3333 9.99984H1.66666M9.99999 18.3332C5.39762 18.3332 1.66666 14.6022 1.66666 9.99984M9.99999 18.3332C12.0844 16.0512 13.269 13.0898 13.3333 9.99984C13.269 6.90987 12.0844 3.94846 9.99999 1.6665M9.99999 18.3332C7.91559 16.0512 6.73103 13.0898 6.66666 9.99984C6.73103 6.90987 7.91559 3.94846 9.99999 1.6665M1.66666 9.99984C1.66666 5.39746 5.39762 1.6665 9.99999 1.6665"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Link href="" className="text-gray-600">
              English
            </Link>
          </div>

          <button className="text-white bg-red-500 rounded-lg w-full px-5 py-3">
            Get started
          </button>
          <Link
            href="/account"
            className="bg-red-100 text-red-600 rounded-lg w-full px-5 py-3 font-semibold"
          >
            Log in
          </Link>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
