import React from "react";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsKeyboard } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineKey } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";

export default function User() {
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
          <div className="flex flex-col max-w-[400px] justify-center items-center">
            <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300 ">
              <HiOutlineKey className="my-auto mx-auto" />
            </div>

            <div className="flex flex-col items-center justify-center mt-8">
              <h2 className="text-2xl font-semibold text-gray-800">
                Forgot password?
              </h2>
              <p className="text-gray-600">
                No worries, we'll send you reset instructions.
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full mt-8">
              <label className="text-gray-600">Email</label>
              <input
                className="p-2 rounded-lg border-2 border-gray-100"
                type="text"
                id="email"
                placeholder="Enter you email"
              />
            </div>
            <button className="p-2 rounded-lg bg-red-500 w-full mt-5 text-white hover:bg-red-400">
              Reset password
            </button>
            <button className="flex flex-row items-center gap-2 mt-8 hover:text-gray-500">
              <BiArrowBack color="gray-900" size={20} />
              <p className="text-gray-900 hover:text-gray-500">Back to log in</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
