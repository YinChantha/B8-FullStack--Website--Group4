"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineKey } from "react-icons/hi";
import "react-phone-input-2/lib/style.css";
import CountrySelect from "@/app/components/CountrySectect";
import { Country } from "country-state-city";

export default function Property() {
  const countryData = Country.getAllCountries();

  const [country, setCountry] = useState(countryData[0]);

  return (
    <>
      <div className="flex md:w-3/5 -mt-40 mx-auto justify-center">
        <div className="flex flex-col max-w-[500px] items-center justify-center">
          <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300 ">
            <HiOutlineKey className="my-auto mx-auto" />
          </div>

          <div className="flex flex-col items-center justify-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Your property
            </h2>
            <p className="text-gray-600 text-center">
              Tell us about your property and provide the
            </p>
            <p className="text-gray-600 text-center">neccessary details to get start</p>
          </div>

          <div className="flex flex-col gap-2 w-full mt-8">
            <p className="text-gray-600">Date of Birth*</p>
            <input
              className="p-2 rounded-lg border-2 border-gray-100"
              type="date"
              id="birthday"
              placeholder="Select your date of birth"
            />
          </div>
          <div className="flex flex-col gap-2 w-full mt-3">
            <p className="text-gray-600">Country*</p>
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
            <p className="text-gray-600">Address*</p>
            <input
              className="p-2 bg-white rounded-lg border-2 border-gray-100"
              placeholder="Enter your address"
            />
          </div>

          <div className="flex flex-col gap-2 w-full mt-1">
            <p className="text-gray-600">Zip/Post code*</p>
            <input
              className="p-2 bg-white rounded-lg border-2 border-gray-100"
              placeholder="Enter your zip/post code"
            />
          </div>

          <Link href="/account/signup/" className="signup-btn">
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
    </>
  );
}
