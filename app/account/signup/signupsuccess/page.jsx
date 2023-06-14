import React from "react";
import Link from "next/link";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";

export default function Successfully() {
  return (
    <>
      <div className="flex md:w-3/5 m-auto mt-20 justify-center">
        <div className="flex flex-col max-w-[400px] items-center justify-center">
          <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300 ">
            <IoIosCheckmarkCircleOutline className="my-auto mx-auto" />
          </div>

          <div className="flex flex-col items-center justify-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Successfully
            </h2>
            <p className="text-gray-600 text-center">
              Your password has been successfully reset.
            </p>
            <p className="text-gray-600">Click below to log in magically.</p>
          </div>
          <div className="signup-btn">Reset</div>
          <Link
            href="/account/"
            className="flex flex-row items-center gap-2 mt-8 hover:text-gray-500"
            as={`/account/`}
          >
            <BiArrowBack color="gray-900" size={20} />
            <p className="text-gray-900 hover:text-gray-500">Back to log in</p>
          </Link>
        </div>
      </div>
    </>
  );
}
