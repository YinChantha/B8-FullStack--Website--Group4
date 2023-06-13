import Link from "next/link";
import { HiOutlineKey } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";

export default function UserDetials() {
  return (
    <>
      <div className="flex md:w-3/5 m-auto mt-20 justify-center">
        <div className="flex flex-col max-w-full items-center ">
          <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300 ">
            <HiOutlineKey className="my-auto mx-auto" />
          </div>

          <div className="flex flex-col items-center justify-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Forgot password?
            </h2>
            <p className="text-gray-600">
              No worries, we'll send you reset instructions.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full mt-8">
            <p className="text-gray-600">Email</p>
            <input
              className="p-2 rounded-lg border-2 border-gray-100"
              type="text"
              id="email"
              placeholder="Enter you email"
            />
          </div>
          <div
            href="pages/account/forgotpassword/detials"
            className="flex p-2 justify-center rounded-lg bg-red-500 w-full mt-5 text-white hover:bg-red-400 cursor-pointer"
          >
            Reset
          </div>
          <div className="flex flex-row items-center gap-2 mt-8 hover:text-gray-500">
            <BiArrowBack color="gray-900" size={20} />
            <Link
              href="/account/"
              className="text-gray-900 hover:text-gray-500 cursor-pointer"
            >
              Back to log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
