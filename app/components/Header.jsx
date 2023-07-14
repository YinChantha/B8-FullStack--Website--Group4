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
import ChatGPT from "app/components/ChatGPT";

const Comparisons = [
  {
    src: "/images/compare-loans.png",
    title: "Compare Loans",
    description: "Compare different loan options to make an informed decision.",
    path: "/comparisons/compareLoans",
  },
  {
    src: "/images/compare-save-acc.png",
    title: "Compare Saving Accounts",
    description:
      "Explore a wide range of savings accounts & find the best option for you.",
    path: "/comparisons/compareSavingAcc",
  },
  {
    src: "/images/compare-fixed-dep.png",
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
      <a href={path} key={key}>
        <MenuItem className="p-4">
          <div className="flex items-start">
            <Image alt="icons" src={src} width={24} height={24} />
            <div className="text-left ml-2">
              {/* modify vea dak <a> or <Link /> based on you */}
              <h1 className="text-left text-gray-900 font-semibold text-lg">
                {title}
              </h1>
              <p className="text-left text-gray-600 text-base ">
                {description}
              </p>
            </div>
          </div>
        </MenuItem>
      </a>
    )
  );
  const renderItems1 = Resources.map(
    ({ src, title, description, path }, key) => (
      <a href={path} key={key}>
        <MenuItem className="p-4">
          <div className="flex items-start">
            <Image alt="icons" src={src} width={24} height={24} />
            <div className="text-left ml-2">
              {/* modify vea dak <a> or <Link /> based on you */}
              <h1 className="text-left text-gray-900 font-semibold text-lg">
                {title}
              </h1>
              <p className="text-left text-gray-600 text-base ">
                {description}
              </p>
            </div>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <div className="flex flex-row max-md:flex-col">
        {/* Comparisons */}
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <Typography as="div" variant="small">
              <ListItem
                className="flex items-center text-gray-500 font-semibold text-base gap-2 py-2 pr-4 hover:text-gray-600 hover:bg-gray-50"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                Comparisons
                <ChevronDownIcon
                  className={`hidden h-3 w-3 transition-transform md:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform md:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>

          <MenuList className="hidden gap-3 w-[45rem] rounded-sm md:block p-2">
            <div className="flex">
              <div className="flex flex-start justify-start">
                <ul>{renderItems}</ul>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <Image
                    src="/images/compare-pic.png"
                    alt="compare"
                    width={400}
                    height={50}
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
                  <h1 className="text-left text-gray-900 font-semibold text-lg">
                    We've just released an update!
                  </h1>
                </div>
                <p className="text-left text-gray-600 text-base">
                  Check out the all new features view. Pages now load faster.
                </p>
                <div className="flex gap-2">
                  <a href="" className="text-gray-600 font-semibold">
                    Dismiss
                  </a>
                  <a href="" className="text-red-600 font-semibold">
                    Changing
                  </a>
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
          <MenuHandler>
            <Typography as="div" variant="small">
              <ListItem
                className="flex items-center text-gray-500 font-semibold text-base gap-2 py-2 pr-4 hover:text-gray-600 hover:bg-gray-50"
                selected={isMenuOpen1 || isMobileMenuOpen1}
                onClick={() => setIsMobileMenuOpen1((cur) => !cur)}
              >
                Resources
                <ChevronDownIcon
                  className={`hidden h-3 w-3 transition-transform md:block ${
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

          <MenuList className="hidden gap-3 w-[45rem] rounded-sm md:block p-2">
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
                  <h1 className="text-left text-gray-900 font-semibold text-lg">
                    We've just released an update!
                  </h1>
                </div>
                <p className="text-left text-gray-600 text-base">
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
                  <a href="" className="text-red-600 font-semibold">
                    Watch video
                  </a>
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
          <Image src="/compare-pic.png" alt="compare" width={600} height={40} />

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
            <h1 className="text-left text-gray-900 font-semibold text-lg">
              We've just released an update!
            </h1>
          </div>
          <p className="text-left text-gray-600 text-base">
            Check out the all new features view. Pages now load faster.
          </p>
          <div className="flex gap-2">
            <a href="" className="text-gray-600 font-semibold">
              Dismiss
            </a>
            <a href="" className="text-red-600 font-semibold">
              Changing
            </a>
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
          <p className="text-left text-gray-600 text-base">
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
            <a href="" className="text-red-600 font-semibold">
              Watch video
            </a>
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const [openNav, setOpenNav] = React.useState(false);

  const router = useRouter();
  const handlePromo = () => {
    router.push("/promotions");
    setOpenNav(!openNav);
  };
  const handleCompare = () => {
    router.push("/landingPage");
    setOpenNav(!openNav);
  };
  return (
    <List>
      <div className="flex md:flex-row flex-col md:pt-0 pt-16">
        
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="flex md:justify-center items-center md:ml-0 ml-3 text-gray-500 font-semibold text-base gap-2 w-24 hover:text-gray-600 hover:bg-gray-50 rounded-lg"
          onClick={handleCompare}
        >
          Home
        </Typography>
        <NavListMenu />

        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="flex justify-center items-center text-gray-500 font-semibold text-base gap-2 w-28 hover:text-gray-600 hover:bg-gray-50 rounded-lg"
          onClick={handlePromo}
        >
          Promotions
        </Typography>
        {/* Promotions */}
        {/* </ListItem> */}
      </div>
      <div className="flex w-full rounded-sm border border-gray-200 md:hidden gap-20 py-3 px-3">
        <div className="flex flex-col gap-3">
          <a href="" className="text-gray-400 font-normal">
            About us
          </a>
          <a href="" className="text-gray-400 font-normal">
            Support
          </a>
          <a href="" className="text-gray-400 font-normal">
            Careers
          </a>
          <a href="" className="text-gray-400 font-normal">
            Legal
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <a href="" className="text-gray-400 font-normal">
            Contact
          </a>
          <a href="" className="text-gray-400 font-normal">
            Sitemap
          </a>
          <a href="" className="text-gray-400 font-normal">
            Cookie settings
          </a>
        </div>
      </div>
    </List>
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
    <div>
      <ChatGPT />
      <div className="top-0 fixed w-full z-[9999] flex bg-white items-center justify-between md:justify-around border py-2">
        <div className="flex gap-2">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="cursor-pointer flex justify-center items-center ml-2 md:ml-0"
          >
            <Image
              src="/images/logo/brand-logo.png"
              alt="Logo"
              width={120}
              height={40}
            />
          </Typography>

          <div className="hidden md:block text-red-600">
            <NavList />
          </div>
        </div>
        <div className="hidden gap-4 md:flex">
          <div className="inline-flex gap-2 items-center hover:bg-gray-50 p-2.5 text-gray-50 rounded-lg">
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
            <a
              href=""
              className="text-gray-500 font-semibold text-base hover:text-gray-600"
            >
              English
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <a
              href="/account"
              className="flex gap-2 items-center px-4 hover:bg-gray-50 p-2.5 rounded-lg text-gray-500 font-semibold text-base hover:text-gray-600"
            >
              Login
            </a>
          </div>
          <Link
            href="/account/signup/usersignupdetials"
            className="redButton font-semibold truncate"
          >
            Start Compare
          </Link>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="md:hidden flex items-center justify-center"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" strokeWidth={2} />
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
            <a href="" className="text-gray-600">
              English
            </a>
          </div>

          <button className="text-white bg-red-500 rounded-lg w-full px-5 py-3">
            Get started
          </button>
          <button className="bg-red-100 text-red-600 rounded-lg w-full px-5 py-3 font-semibold">
            Log In
          </button>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
