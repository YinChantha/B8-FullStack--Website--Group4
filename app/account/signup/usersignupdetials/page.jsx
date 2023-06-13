"use client";

import Link from "next/link";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OccupationSelect from "@/app/components/OccupationSelect";

export default function UserSigupDetials() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState("true");
  // const [selectValue, setSelectValue] = useState(null);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validationPhoneNumber(value));
  };

  const validationPhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <>
      <div className="right-container">
        <div className="flex flex-col items-center">
          <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300">
            <FiUser className="my-auto mx-auto" />
          </div>

          <div className="flex flex-col items-center justify-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Your details
            </h2>
            <p className="text-gray-600 text-center">
              Welcome Ya! Please set your name and your email.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full mt-8">
            <label className="text-gray-600">Name*</label>
            <input
              className="p-2 rounded-lg border-2 border-gray-100"
              type="text"
              id="email"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-2 w-full mt-3">
            <label className="text-gray-600">Email*</label>
            <input
              className="p-2 rounded-lg border-2 border-gray-100"
              type="text"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2 w-full mt-3">
            <label className="text-gray-600">Phone number*</label>
            <PhoneInput
              country={"kh"}
              id="email"
              placeholder=""
              value={phoneNumber}
              onChange={handleChange}
              inputProps={{ required: true }}
            />
            <div>
              {!valid && (
                <p className="text-red-500 text-[13px] -mt-2">
                  Please enter a valid phone number.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full mt-1">
            <label className="text-gray-600">Occupation*</label>
            <div>
              <OccupationSelect className="p-2 bg-white rounded-lg border-2 border-gray-100" />
            </div>
          </div>

          <Link href="/account/signup/checkinbox" className="signup-btn">
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
