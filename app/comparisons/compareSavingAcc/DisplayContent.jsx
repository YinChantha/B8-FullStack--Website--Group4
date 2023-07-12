"use client"
import React, { useState } from "react";

const DisplayContent = () => {

  return (
    <div className="mt-24">
      {/* we found 51 products */}
      <div className="text-center ">
        <h1 className="text-[#101828] font-medium text-xl">
          Good news! We’ve found{" "}
          <span className="text-[#12B76A]">51 products</span> for you to take a
          look at.
        </h1>
        <p className="text-[#475467] text-lg font-normal mt-5">
          Our platform keeps you updated on the most current and exciting
          promotions from banks and financial institutions in Cambodia.
        </p>
      </div>
    </div>
  );
};

export default DisplayContent;
