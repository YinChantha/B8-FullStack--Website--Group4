import React from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="flex w-[500px] h-[700px] items-center justify-center">
      <div className="flex flex-col m-3 items-center justify-center">
        <div className="flex flex-col items-center">
          <img src="/images/logo/logo.png" alt="logo" className="w-[50px]" />
          <h1 className="text-[24px] font-bold text-gray-800 mt-5">
            Log in to your account
          </h1>
          <p className="max-w-[400px] text-center text-[18px] justify-center text-gray-600">
            Welcome back! Log in to unlock exclusive feature tailored to your
            financial needs. Please
          </p>
          <p className="text-center text-[18px] justify-center text-gray-600">
            Please enter your details.
          </p>
        </div>
        <div className="signup-btn text-[18px] font-bold">
          <Link href="">Sign in</Link>
        </div>
        <div className="flex flex-row w-full justify-center gap-2 items-center rounded-lg p-2 border-2 border-gray-100 mt-3 hover:border-red-500 bg-white">
          <FcGoogle className="w-[25px] h-auto" />
          <p className="text-black text-[18px] font-bold">Login with Google</p>
        </div>

        <div className="flex justify-center gap-2 mt-5 text-gray-600 cursor-pointer">
          <p className="text-gray-600 text-[13px]">Don't have an account?</p>
          <Link
            href="/account/signup/usersignupdetials"
            className="text-red-600"
          >
            <p className="text-red-500 text-[15px] font-bold ">Sign up</p>
          </Link>
        </div>
        <div className="mt-20">
          <p className="text-[12px] text-center text-gray-500">
            @ Proadvisor 2023
          </p>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center">
          <Image src="/images/message.png" width={20} height={20} />
          <p className="text-[13px] text-gray-800 font-semibold">Message</p>
        </div>
      </div>
    </div>
  );
}
