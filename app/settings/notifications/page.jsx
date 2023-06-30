"use client";
import React, { useState } from "react";
import Settings from "../../components/Setting";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  return (
    <div className="flex gap-1">
      <Settings />
      <div className="bg-gray-200 w-9/12 p-4">
        <p className="promotionName">Notifications</p>
        <h1 className="promotionName">MydetailPage !!!!</h1>
      </div>
    </div>
  );
};

export default page;
