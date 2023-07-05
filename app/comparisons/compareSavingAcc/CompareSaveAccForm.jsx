"use client"
import React, {useState} from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const regularDepo = [
  { id: 1, name: "Weekly", unavailable: false },
  { id: 2, name: "Monthly", unavailable: true}, 
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
        className="flex flex-col gap-6 bg-[#F9FAFB] py-8 px-6 rounded-lg border-[1px] border-[#EAECF0]"
      >
        {/* initial deposit */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <label for="initial deposit" className="labelStyle">
              Your initial deposit
            </label>
            {mark}
          </div>

          <input
            type="number"
            name="initial deposit"
            className="inputStyle"
            placeholder="Enter your initial deposit"
          />
        </div>
        {/* regular deposit */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <label for="Your Regular Deposit" className="labelStyle">
              Your Regular Deposits
            </label>
            {mark}
          </div>

          <input
            type="number"
            name="Your Regular Deposit"
            className="inputStyle"
            placeholder="Enter your regular deposit"
          />
         
          <select id="period" name="period" className="selectStyle">
            <option value="monthly">weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        {/* value */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <label for="value" className="labelStyle">
              Value
            </label>
            {mark}
          </div>

          <select id="value" name="value" className="selectStyle ">
            <option value="monthly">After 1 year</option>
            <option value="yearly">After 2 years</option>
            <option value="yearly">After 3 years</option>
            <option value="yearly">After 4 years</option>
            <option value="yearly">After 5 years</option>
          </select>
        </div>
        {/* filter account type */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <label for="filterAcctype" className="labelStyle">
              Filter by account type
            </label>
            {mark}
          </div>

          <select
            id="filterAcctype"
            name="filterAcctype"
            className="selectStyle"
          >
            <option value="monthly">Money Market</option>
            <option value="monthly">Saving & MMAs</option>
            <option value="yearly">CDs</option>
          </select>
        </div>
        {/* update result */}
        <button type="submit" className="submitBtn">
          Update result
        </button>
      </form>
    </div>
  );
};

export default CompareSaveAccForm;
