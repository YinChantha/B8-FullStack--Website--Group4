import React from "react";
import Link from "next/link";
import { BsKeyboard } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function Password() {
  return (
    <>
      <div className="flex md:w-3/5 m-auto mt-20 justify-center">
        <div className="flex flex-col max-w-full justify-center items-center">
          <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300 ">
            <BsKeyboard className="my-auto mx-auto" />
          </div>

          <div className="flex flex-col items-center justify-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Set new password
            </h2>
            <p className="text-gray-600 text-center">
              Pleae set a strong password for your account
            </p>
            <p className="text-gray-600">to secure your account</p>
          </div>

          <div className="flex flex-col gap-2 w-full mt-8">
            <p className="text-gray-600">Password</p>
            <input
              className="p-2 rounded-lg border-2 border-gray-100"
              type="password"
              placeholder="*********"
            />

            <p className="text-gray-600 mt-3">Confirm password</p>
            <input
              className="p-2 rounded-lg border-2 border-gray-100"
              type="password"
              placeholder="********"
            />
          </div>

          <div className="flex items-center ml-[-60px] gap-2 mt-5 text-gray-600">
            <IoIosCheckmarkCircleOutline />
            <p>Must be at least 8 characters</p>
          </div>
          <div className="flex items-center ml-[-60px] gap-2 mt-2 text-gray-600">
            <IoIosCheckmarkCircleOutline />
            <p>Must be at least 8 characters</p>
          </div>

          <div className="signup-btn">Reset password</div>
          <div className="flex flex-row items-center gap-2 mt-8 hover:text-gray-500">
            <p className="text-gray-500">Already have an account?</p>
            <Link href="/account/" className="text-red-700 cursor-pointer">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
