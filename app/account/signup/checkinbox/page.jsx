import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";

export default function CheckInbox() {
  return (
    <>
      <div className="flex md:w-3/5 mt-20 mx-auto justify-center">
        <div className="flex flex-col max-w-full items-center">
          <div className="flex w-10 h-10 border-2 rounded-lg border-gray-300 ">
            <HiOutlineMail className="my-auto mx-auto" />
          </div>

          <div className="flex flex-col items-center justify-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Check your inbox
            </h2>
            <p className="text-gray-600 text-center">
              We sent a vertification codes to you through email.
            </p>
          </div>

          <Link
            href="/account/signup/checkinbox/emailverified"
            className="signup-btn"
            as={`/account/signup/checkinbox/emailverified`}
          >
            Verify email
          </Link>
          <div className="flex flex-row items-center gap-2 mt-8 hover:text-gray-500">
            <p className="text-gray-500">Don't receive the email?</p>
            <Link href="" className="text-red-700 cursor-pointer">
              Click to resent
            </Link>
          </div>
          <Link
            href="/account/"
            className="flex flex-row items-center gap-2 mt-8 hover:text-gray-500 cursor-pointer"
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
