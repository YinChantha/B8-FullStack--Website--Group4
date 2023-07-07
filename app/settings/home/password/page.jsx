"use client";
import React, { useEffect, useState } from "react";
import Settings from "../../../components/Setting";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "../../../components/Header";
import Navbarsetting from "../../../components/Navbarsetting";
import { getAllfixeddeposits } from "../../../api/fixeddeposits/getAlldeposits";

const page = () => {
  // const router = useRouter();
  // const Homesettingpage = () => {
  //   router.push("/settings/home");
  // };

  return (
    <div>
      <div className="md:hidden block">
        <Header />
      </div>
      <div className="flex gap-1 md:mt-0 mt-16">
        <Settings />
        <div className="bg-white md:w-9/12 w-full p-4">
          <p className="promotionName">Settings</p>

          <Navbarsetting />

          <div className="mt-5">
            <h1 className="text-gray-900 font-bold">Password</h1>
            <p className="promotionContent mt-3">
              Please enter your current password to change your password.
            </p>
          </div>

          <div className="md:w-10/12 w-full mt-12">
            <hr className="border-b-1 flex border-gray-100 w-full my-10 " />

            <div className="grid md:grid-cols-2 grid-rows-2 mt-8">
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
            <hr className="border-b-1 flex border-gray-100 w-full my-10 " />

            <div className="grid md:grid-cols-2 grid-rows-2 mt-8">
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
            <hr className="border-b-1 flex border-gray-100 w-full my-10 " />

            <div className="grid md:grid-cols-2 grid-rows-2 mt-8">
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
            <hr className="border-b-1 flex border-gray-100 w-full my-10 " />

            <div className="flex md:flex-row flex-col justify-end gap-3 mt-8">
              <button
                // onClick={Homesettingpage}
                className="learn-more-btn  text-gray-700 rounded-lg md:w-24 w-full h-10 border-gray-300 border-2 hover:bg-gray-50"
              >
                Cabcel
              </button>
              <button className="get-started-btn  text-white bg-red-500 rounded-lg md:w-40 w-full h-10 hover:bg-red-600">
                Update password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
