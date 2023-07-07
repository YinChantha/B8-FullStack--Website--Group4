"use client";
import Image from "next/image";
import Link from "next/link";
import Settings from "../../components/Setting";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Navbarsetting from "../../components/Navbarsetting";
import Password from "../../components/Password";
import Header from "../../components/Header";

const page = () => {
  const [open, setOpen] = useState(false);
  // const [active, setActive] = useState(null);
  const [settingactive, setSettingactive] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const Homesettingpage = () => {
    router.push("/settings/home/mydetails");
  };

  const Notificationspage = () => {
    router.push("/settings/notifications");
  };

  const handleSettingActive = (item) => {
    setSettingactive(item);
  };

  // const MydetailPage = () => {
  //   router.push("/settings/home/mydetails");
  // };

  const Homepage = () => {
    router.push("/");
  };

  // const handleActive = (item) => {
  //   setActive(item);
  // };

  const handleSetting = () => {
    setOpen(!false);
  };

  return (
    <div>
      <div className="md:hidden block">
        <Header />
      </div>
      <div className="flex gap-1 md:mt-0 mt-16 ">
        <Settings />
      </div>
    </div>
  );
};

export default page;
