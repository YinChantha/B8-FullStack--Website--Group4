"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import {
  HiOutlineMail,
  HiOutlineKey,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { BsKeyboard } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CountrySelect from "@/app/components/CountrySectect";
import { Country } from "country-state-city";

export default function Property() {
  const countryData = Country.getAllCountries();
  // console.log("COuntry data", countryData)

  const [country, setCountry] = useState(countryData[0]);

  return (
    <>
      {/* Container */}
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

          <div className="flex flex-col gap-4 ml-10 mt-14">
            {/* user details */}
            <div className="flex gap-3 cursor-pointer">
              <Link
                href="/account/signup/usersignupdetials"
                className="flex gap-3"
              >
                <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300">
                  <FiUser className="my-auto mx-auto" />
                </div>
                <div className="flex flex-col hover:text-gray-500">
                  <h2 className="text-[15px] font-semibold text-gray-500 hover:text-gray-700">
                    Your detials
                  </h2>
                  <p className="text-[12px] font-normal text-gray-500 hover:text-gray-700">
                    Please provide your real name and your email.
                  </p>
                </div>
              </Link>
            </div>

            {/* check email  */}
            <div className="flex gap-3 cursor-pointer ">
              <Link
                href="/account/signup/checkinbox"
                className="flex gap-3 hover:text-gray-700"
              >
                <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300">
                  <HiOutlineMail className="my-auto mx-auto text-gray-500 hover:text-gray-700" />
                </div>
                <div className="flex flex-col hover:text-gray-500">
                  <h2 className="text-[15px] font-semibold text-gray-500 hover:text-gray-700">
                    Check your email
                  </h2>
                  <p className="text-[12px] font-normal text-gray-500 hover:text-gray-700">
                    Please check your email to get reset link.
                  </p>
                </div>
              </Link>
            </div>

            {/* property address  */}
            <div className="flex gap-3">
              <Link href="/account/signup/property" className="flex gap-3">
                <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300">
                  <HiOutlineLocationMarker className="my-auto mx-auto text-gray-700" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[15px] font-semibold text-gray-700 hover:text-gray-500">
                    Your property
                  </h2>
                  <p className="text-[12px] font-normal text-gray-700 hover:text-gray-500">
                    Please provide your current address.
                  </p>
                </div>
              </Link>
            </div>

            {/* choose a password  */}
            <div className="flex gap-3">
              <Link href="/account/signup/password" className="flex gap-3">
                <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300">
                  <BsKeyboard className="my-auto mx-auto hover:text-gray-700" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[15px] font-semibold text-gray-500 hover:text-gray-700">
                    Choose a password
                  </h2>
                  <p className="text-[12px] font-normal text-gray-500 hover:text-gray-700">
                    Choose a secure password.
                  </p>
                </div>
              </Link>
            </div>

            {/* successfully  */}
            <div className="flex gap-3">
              <Link href="/account/signup/signupsuccess" className="flex gap-3">
                <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300">
                  <IoIosCheckmarkCircleOutline className="my-auto mx-auto hover:text-gray-700" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[15px] font-semibold text-gray-500 hover:text-gray-700">
                    Successfully
                  </h2>
                  <p className="text-[12px] font-normal text-gray-500 hover:text-gray-700">
                    Go back to log in into your account.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          {/* <div className='flex flex-row w-full justify-center'> */}
          <div className="flex justify-between flex-row items-center mx-8 mt-[500px]">
            <div className="text-gray-500 mb-0">© Proadvisor 2023</div>
            <div className="flex flex-rown gap-2">
              <HiOutlineMail size={25} color="gray" />
              <p className="text-gray-500">Help@proadvisor.com</p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex md:w-3/5 -mt-40 mx-auto justify-center">
          <div className="flex flex-col max-w-[500px] items-center justify-center">
            <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300 ">
              <HiOutlineKey className="my-auto mx-auto" />
            </div>

            <div className="flex flex-col items-center justify-center mt-8">
              <h2 className="text-2xl font-semibold text-gray-800">
                Your property
              </h2>
              <p className="text-gray-600">
                Tell us about your property and provide the
              </p>
              <p className="text-gray-600">neccessary details to get start</p>
            </div>

            <div className="flex flex-col gap-2 w-full mt-8">
              <label className="text-gray-600">Date of Birth*</label>
              <input
                className="p-2 rounded-lg border-2 border-gray-100"
                type="date"
                id="birthday"
                placeholder="Select your date of birth"
              />
            </div>
            <div className="flex flex-col gap-2 w-full mt-3">
              <label className="text-gray-600">Country*</label>
              <div>
                <CountrySelect
                  className="flex w-full h-full"
                  data={countryData}
                  selected={country}
                  setSelected={setCountry}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full mt-1">
              <label className="text-gray-600">Address*</label>
              <input
                className="p-2 bg-white rounded-lg border-2 border-gray-100"
                placeholder="Enter your address"
              />
            </div>

            <div className="flex flex-col gap-2 w-full mt-1">
              <label className="text-gray-600">Zip/Post code*</label>
              <input
                className="p-2 bg-white rounded-lg border-2 border-gray-100"
                placeholder="Enter your zip/post code"
              />
            </div>

            <Link
              href="/account/signup/"
              className="flex p-2 rounded-lg items-center justify-center bg-red-500 w-full mt-5 text-white hover:bg-red-400 cursor-pointer"
            >
              Continue
            </Link>
            <div className="flex flex-row items-center gap-2 mt-8 hover:text-gray-500">
              <p className="text-gray-500">Already have an account?</p>
              <Link href="/account/" className="text-red-700 cursor-pointer">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
