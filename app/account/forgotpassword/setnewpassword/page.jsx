import React from "react";
import { HiOutlineKey } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";
import { BsKeyboard } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function SetNewPassword() {
  return (
    <>
    <div className="flex flex-col max-w-[400px] justify-center items-center">
        <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300 ">
          <BsKeyboard className="my-auto mx-auto" />
        </div>

        <div className="flex flex-col items-center justify-center mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Set new password
          </h2>
          <p className="text-gray-600">
            Your new password must be different to
          </p>
          <p className='text-gray-600'>previrously passwords</p>
        </div>

        <div className="flex flex-col gap-2 w-full mt-8">
          <label className="text-gray-600">Password</label>
          <input
            className="p-2 rounded-lg border-2 border-gray-100"
            type="text"
            id="email"
            placeholder=""
            value='*********'
          />

          <label className="text-gray-600 mt-3">Confirm password</label>
          <input
            className="p-2 rounded-lg border-2 border-gray-100"
            type="text"
            id="email"
            placeholder=""
            value='*********'
          />
        </div>

        <div className='flex items-center ml-[-60px] gap-2 mt-5 text-gray-600'>
            <IoIosCheckmarkCircleOutline />
            <p>Must be at least 8 characters</p>
        </div>
        <div className='flex items-center ml-[-60px] gap-2 mt-2 text-gray-600'>
            <IoIosCheckmarkCircleOutline />
            <p>Must be at least 8 characters</p>
        </div>

        <button className="p-2 rounded-lg bg-red-500 w-full mt-5 text-white hover:bg-red-400">
          Reset password
        </button>
        <button className="flex flex-row items-center gap-2 mt-8 hover:text-gray-500">
          <BiArrowBack color="gray-900" size={20} />
          <p className="text-gray-900 hover:text-gray-500">Back to log in</p>
        </button>
      </div>
    </>
  )
}
