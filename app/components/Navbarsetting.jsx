import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbarsetting = () => {
  const [active, setActive] = useState(null);
  const router = useRouter();

  const handleActive = (item) => {
    setActive(item);
  };

  const MydetailPage = () => {
    router.push("/settings/home/mydetails");
  };
  const PasswordPage = () => {
    router.push("/settings/home/password");
  };
  return (
    <div>
      <ul className="hidden md:flex gap-3">
        <li
          className="relative text-gray-600 cursor-pointer group"
          onClick={() => handleActive("details")}
        >
          <span
            onClick={MydetailPage}
            className={`hover:text-red-500 ${
              active === "details" ? "text-red-500" : ""
            }`}
          >
            My details
          </span>
          <span
            className={`absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-300 ${
              active === "details" ? "w-full" : ""
            }`}
          ></span>
        </li>

        <li
          className="relative text-gray-600 cursor-pointer group"
          onClick={() => handleActive("password")}
        >
          <span
            onClick={PasswordPage}
            className={`hover:text-red-500 ${
              active === "password" ? "text-red-500" : ""
            }`}
          >
            Password
          </span>
          <span
            className={`absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-300 ${
              active === "password" ? "w-full" : ""
            }`}
          ></span>
        </li>
      </ul>
    </div>
  );
};

export default Navbarsetting;
