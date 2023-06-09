import React from "react";
import { HiOutlineKey, HiOutlineMail } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";

export default function CheckEmail() {
  return (
    <>
      <div className="flex flex-col max-w-[400px] justify-center items-center">
        <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300 ">
          <HiOutlineMail className="my-auto mx-auto" />
        </div>

        <div className="flex flex-col items-center justify-center mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Check your email
          </h2>
          <p className="text-gray-600">
            We sent a password reset link to your email.
          </p>
        </div>

        <button className="p-2 rounded-lg bg-red-500 w-full mt-5 text-white hover:bg-red-400">
          Open email app
        </button>
        <div className='flex gap-1 mt-8'>
          <p className="text-gray-600 text-[13px]">Don't receive the email?</p>
          <button className="text-red-600 text-[13px]">Click to resend</button>
        </div>
        <button className="flex flex-row items-center gap-2 mt-8 hover:text-gray-500">
          <BiArrowBack color="gray-900" size={20} />
          <p className="text-gray-900 hover:text-gray-500">Back to log in</p>
        </button>
      </div>
    </>
  );
}
