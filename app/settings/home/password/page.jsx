"use client";
import React, { useState } from "react";
import Settings from "../../../components/Setting";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbarsetting from "../../../components/Navbarsetting";

const page = () => {
  const router = useRouter();
  const Homesettingpage = () => {
    router.push("/settings/home");
  };

  return (
    <div className="flex gap-1">
      <Settings />
      <div className="bg-white w-9/12 p-4">
        <p className="promotionName">Settings</p>

        <Navbarsetting />

        <div className="mt-5">
          <h1 className="text-gray-900 font-bold">Password</h1>
          <p className="promotionContent mt-3">
            Please enter your current password to change your password.
          </p>
        </div>

        <div className="w-10/12 mt-12">
          <div className="grid grid-cols-2 mt-8">
            <h1 className="settingfont">Current Password</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 ">
                <input
                  type="password"
                  placeholder="..............."
                  className="border w-full border-gray-500 text-gray-700 p-3 pl-3 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <h1 className="settingfont">New Password</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 ">
                <input
                  type="password"
                  placeholder="..............."
                  className="border w-full border-gray-500 text-gray-700 p-3 pl-3 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <h1 className="settingfont">Confirm new password</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 ">
                <input
                  type="password"
                  placeholder="..............."
                  className="border w-full border-gray-500 text-gray-700 p-3 pl-3 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={Homesettingpage}
              className="learn-more-btn text-gray-700 rounded-lg px-[180px] sm:px-[180px] py-3 sm:py-3 md:px-5 md:py-2 border-gray-300 border-2 hover:bg-gray-50"
            >
              Cabcel
            </button>
            <button className="get-started-btn text-white bg-red-500 rounded-lg px-[180px] sm:px-[180px] py-3 sm:py-2 md:px-5 md:py-3 hover:bg-red-600">
              Update password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
