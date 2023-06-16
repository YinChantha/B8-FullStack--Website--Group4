"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
// import imgLogo from "../public/images/logo.png";
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsKeyboard } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import UserDetials from "./userdetials/page";
import CheckEmail from "./checkemail/page";
import SetNewPassword from "./setnewpassword/page";
import Successfully from "./successfully/page";

export default function ForgotPassword() {
  const [open, setOpen] = useState(true);

  const pages = [
    {
      id: 1,
      name: <UserDetials />,
      // url: 'https://images.unsplash.com/photo-1680399524821-d4e6b225b0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: <CheckEmail />,
    },
  ];

  const [pageIndex, setPageIndex] = useState(0);

  const goToPage = (pageIndex) => {
    setPageIndex(pageIndex);
  };

  return (
    <>
      {/* container */}
      <div className="flex w-full h-screen ">
        {/* Left side  */}
        <div className="relative w-2/5 hidden md:block bg-gray-100 ">
          {/* logo  */}
          <div className="flex flex-row gap-2 mt-8 ml-10">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-[30px] object-contain"
            />
            <h2 className="text-2xl font-semibold">Proadvisor</h2>
          </div>

          <div className="flex flex-col gap-4 ml-10 mt-14 justify-center">
            {/* user details */}
            <div className="flex gap-3 hover:text-gray-500">
              <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300">
                <FiUser className="my-auto mx-auto" />
              </div>
              <div className="flex flex-col hover:text-gray-500">
                <h2 className="text-[15px] font-semibold text-gray-700 hover:text-gray-500">
                  Your detials
                </h2>
                <p className="text-[12px] font-normal text-gray-500 hover:text-gray-500">
                  Please provide your name and email.
                </p>
              </div>
            </div>

            {/* check email  */}
            <div className="flex gap-3 hover:text-gray-500">
              <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300">
                <HiOutlineMail className="my-auto mx-auto" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[15px] font-semibold text-gray-700 hover:text-gray-500">
                  Check your email
                </h2>
                <p className="text-[12px] font-normal text-gray-500 hover:text-gray-500">
                  Please check your email to get reset link.
                </p>
              </div>
            </div>

            {/* choose a password  */}
            <div className="flex gap-3 hover:text-gray-500">
              <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300">
                <BsKeyboard className="my-auto mx-auto" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[15px] font-semibold text-gray-700 hover:text-gray-500">
                  Choose a password
                </h2>
                <p className="text-[12px] font-normal text-gray-500 hover:text-gray-500">
                  Choose a secure password.
                </p>
              </div>
            </div>

            {/* successfully  */}
            <div className="flex gap-3 hover:text-gray-500">
              <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300">
                <IoIosCheckmarkCircleOutline className="my-auto mx-auto" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[15px] font-semibold text-gray-700 hover:text-gray-500">
                  Successfully
                </h2>
                <p className="text-[12px] font-normal text-gray-500 hover:text-gray-500">
                  Go back to log in into your account.
                </p>
              </div>
            </div>
          </div>
          {/* <div className='flex flex-row w-full justify-center'> */}
          <div className="flex justify-between flex-row items-center mx-8 mt-[380px]">
            <div className="text-gray-500 mb-0">© Proadvisor 2023</div>
            <div className="flex flex-rown gap-2">
              <HiOutlineMail size={25} color="gray" />
              <p className="text-gray-500">Help@proadvisor.com</p>
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* Right side */}
        <div className="flex md:w-3/5 m-auto mt-20 justify-center items-center">
          <UserDetials className={`${open} ? 'hidden' `} />
          {/* <CheckEmail /> */}
          {/* <SetNewPassword /> */}
          {/* <Successfully /> */}

          {/* {pages.map((page) => (
            <div key={page.id} id={page.id} name={page.name} />
          ))} */}

          {/* <div key={pageIndex} onClick={() => goToPage(pageIndex)} className='w-full h-auto'>
            {pages.map((page, pageIndex) => (
              <div className='text-2xl cursor-pointer'>
                <RxDotFilled />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}
