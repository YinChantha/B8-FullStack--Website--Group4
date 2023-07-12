"use client";
import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const regularDepo = [
  { id: 1, name: "Weekly", unavailable: false },
  { id: 2, name: "Monthly", unavailable: true },
  { id: 3, name: "Yearly", unavailable: false },
];

const mark = (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_373_65019)">
      <path
        d="M10.0001 6.6709V10.0042M10.0001 13.3376H10.0084M18.3334 10.0042C18.3334 14.6066 14.6025 18.3376 10.0001 18.3376C5.39771 18.3376 1.66675 14.6066 1.66675 10.0042C1.66675 5.40186 5.39771 1.6709 10.0001 1.6709C14.6025 1.6709 18.3334 5.40186 18.3334 10.0042Z"
        stroke="#667085"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_373_65019">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0 0.00415039)"
        />
      </clipPath>
    </defs>
  </svg>
);

const CompareSaveAccForm = () => {
  return (
    <div>
      <form
        action="/send-data-here"
        method="post"
        className=" gap-8 bg-[#F9FAFB] py-8 px-6 rounded-lg border-[1px] border-[#EAECF0] mt-12"
      >
        <div className="flex md:flex-row flex-col sm:flex-col gap-8 ">
          {/* select your bank */}
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row justify-between">
              <label for="value" className="labelStyle">
                Select Filter
              </label>
              {mark}
            </div>

            <select id="value" name="value" className="selectStyle ">
              <option value="monthly">ABA</option>
              <option value="yearly">After 2 years</option>
              <option value="yearly">After 3 years</option>
              <option value="yearly">After 4 years</option>
              <option value="yearly">After 5 years</option>
            </select>
          </div>
          {/* select filter */}
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row justify-between">
              <label for="value" className="labelStyle">
                Select your bank
              </label>
              {mark}
            </div>

            <select id="value" name="value" className="selectStyle ">
              <option value="monthly">Interest Rate (AER)</option>
              <option value="yearly">After 2 years</option>
              <option value="yearly">After 3 years</option>
              <option value="yearly">After 4 years</option>
              <option value="yearly">After 5 years</option>
            </select>
          </div>
          {/* Select currency */}
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row justify-between">
              <label for="value" className="labelStyle truncate">
                Select currency
              </label>
              {mark}
            </div>

            <select id="value" name="value" className="selectStyle ">
              <option value="monthly">USD</option>
              <option value="yearly">Riels</option>
            </select>
          </div>
        </div>
        {/* update result */}
        <div className=" flex md:justify-end items-center mt-8  ">
          <button
            type="submit"
            className="redButton w-full sm:w-full md:max-w-[155px] font-semibold "
          >
            Update result
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompareSaveAccForm;
