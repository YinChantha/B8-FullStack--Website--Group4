<<<<<<< HEAD:app/pages/account/page.jsx
import React, { useState } from "react";
=======
"use client";

import React from "react";
>>>>>>> 9df08a5d03cb97279aba673b341ea3acb8431111:app/account/page.jsx
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const Account = () => {

  const [openNav, setOpenNav] = useState(true)
  return (
    <>
      {/* login container */}
      <div className="w-full h-screen flex items-center my-5">
        {/* left side */}
        <div className="md:w-1/2 max-w-[400px] items-center justify-center m-auto">
          <div className="flex flex-col items-center">
            <img src="/images/logo.png" alt="logo" className="w-[50px]" />
            <h1 className="text-2xl font-semibold text-gray-800 mt-5">
              Log in to your account
            </h1>
            <p className="text-center justify-center text-gray-500 mt-4">
              Welcome back! Log in to unlock exclusive feature tailored to your
              financial needs. Please
            </p>
            <p className="text-gray-500">Enter your details</p>
          </div>
          {/* form */}
          <form className="flex flex-col">
            <label className="text-gray-700 mt-5">Email</label>
            <input
              className="w-full border-2 border-gray-100 rounded-lg p-2 bg-transparent mt-1"
              type="text"
              name="email"
              placeholder="Email your email"
            />
            <label className="text-gray-700 mt-5">Password</label>
            <input
              className="w-full border-2 border-gray-100 rounded-lg p-2 bg-transparent mt-1"
              type="password"
              name="password"
              placeholder="Enter your password"
            />

            <div className="flex flex-row justify-between mt-5">
              <div className="flex gap-2">
                <input type="checkbox" id="remember" />
                <label>Remember me</label>
              </div>

              <div className="text-red-600">
                <Link href='/account/forgotpassword/userdetials'>Forgot password</Link>
              </div>
            </div>

            <div className="flex justify-center bg-red-500 p-2 rounded-lg mt-5 hover:bg-red-400 text-white">
              <Link href='' >Sign up</Link>
            </div>
            <div className="flex flex-row justify-center gap-2 items-center rounded-lg p-2 border-2 border-gray-100 mt-3 hover:border-red-500">
              <FcGoogle className="w-[25px] h-auto" />
              Login with Google
            </div>

            <div className="flex justify-center gap-2 mt-5 text-gray-600 cursor-pointer">
              <p>Don't have an account?</p>
              <Link href="/account/signup/usersignupdetials" className="text-red-600">
                Sign up
              </Link>
            </div>
            {/* <p className=" text-gray-500 lg:block hidden text-center mt-28">© Proadvisor 2023</p> */}
          </form>
          {/* <p className='flex text-gray-400  ml-[-40px] '>Proadvisor 2023</p> */}
        </div>

        {/* right side */}
        <div className="relative w-1/2 h-full mr-5 hidden md:inline">
          <img
            src="/images/girl.png"
            alt="girl"
            className="object-cover w-full h-full rounded-3xl"
          />
          <div className="absolute flex flex-col bg-white/50 bottom-0">
            <div className="mx-4">
              <h1 className="text-2xl font-semibold text-white mt-5">
                "Proadvisor empowerd me to make informed financial decision, and
                unlock new possibilies."
              </h1>
              <h1 className="text-[30px] font-bold text-white mt-8">
                Tanaka Hiroshi
              </h1>
              <p className="text-[20px] font-semibold text-white mt-3 ">
                Product Manager, Phnom Penh
              </p>
              <p className="text-[15px] font-normal text-white mb-5">
                Web Design Agency
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex h-full mb-5 ml-10">
      <p className=" text-gray-500 sm:text-center">© Proadvisor 2023</p>
    </div> */}
    </>
  );
};

export default Account;
