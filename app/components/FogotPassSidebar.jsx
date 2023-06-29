"use client";
import { useState } from "react";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { BsKeyboard } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function ForgotPassSidebar() {
  const [activateButtonIndex, setActivateButtonIndex] = useState(null);

  const handleClick = (index) => {
    setActivateButtonIndex(index);
  };

  const buttons = [
    {
      label: "Your details",
      icon: <FiUser />,
      description: "Please provide your real name and your email.",
      link: "/account/forgotpassword/userdetials",
    },
    {
      label: "Check your inbox",
      icon: <HiOutlineMail />,
      description: "Please check your email to get reset link.",
      link: "/account/forgotpassword/checkemail",
    },
    {
      label: "Choose a password",
      icon: <BsKeyboard />,
      description: "Please choose a secure password.",
      link: "/account/forgotpassword/setnewpassword",
    },
    {
      label: "Successfully",
      icon: <IoIosCheckmarkCircleOutline />,
      description: "Go back to log in into your account.",
      link: "/account/forgotpassword/successfully",
    },
  ];
  return (
    <>
      <div className="relative w-3/5 hidden md:block bg-gray-100 ">
        <div className="w-full h-auto">
          <div className="flex flex-row gap-2 mt-8 ml-10">
            <img
              src="/images/logo/logo.png"
              alt="logo"
              className="w-[30px] object-contain"
            />
            <h2 className="text-2xl font-semibold">Proadvisor</h2>
          </div>
          <div className="flex flex-col gap-4 ml-10 mt-14">
            {buttons.map((button, index) => (
              <Link
                href={button.link}
                className="flex gap-3 cursor-pointer"
                key={index}
                onClick={() => handleClick(index)}
              >
                <div className="box-icon">
                  <div
                    className={`mx-auto  my-auto ${
                      activateButtonIndex === index
                        ? "text-gray-700"
                        : "text-gray-500"
                    }`}
                  >
                    {button.icon}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h2
                    className={`text-[15px] font-semibold ${
                      activateButtonIndex === index
                        ? "text-gray-700"
                        : "text-gray-500"
                    }`}
                  >
                    {button.label}
                  </h2>
                  <p
                    className={`text-[12px] font-normal  ${
                      activateButtonIndex === index
                        ? "text-gray-700"
                        : "text-gray-500"
                    }`}
                  >
                    {button.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="brand-container">
          <div className="text-gray-500 truncate">© Proadvisor 2023</div>
          <div className="flex flex-rown gap-2 truncate">
            <HiOutlineMail size={25} color="gray" />
            <p className="text-gray-500">Help@proadvisor.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
