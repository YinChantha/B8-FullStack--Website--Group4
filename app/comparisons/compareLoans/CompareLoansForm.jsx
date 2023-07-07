"use client";
import React, { useRef, useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Select, Option } from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

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

const CompareLoansForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const inputRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="relative ">
      <span className="absolute inset-y-0 right-3 flex items-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#475467"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <input
        type="text"
        placeholder="Select a date"
        className="border w-full border-gray-500 text-gray-700 p-3 pl-5 rounded-md"
        value={value}
        onClick={onClick}
        ref={ref}
        readOnly
      />
    </div>
  ));
  const [selectRegularDepo, setSelectRegularDepo] = useState(regularDepo[0]);
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  return (
    <div>
      <form
        action="/send-data-here"
        method="post"
        className="flex flex-col gap-6 bg-[#F9FAFB] py-8 px-6 rounded-lg border-[1px] border-[#EAECF0]"
      >
        {/* Date of birth */}
        <div className="flex flex-col gap-3 ">
          <div className="flex flex-row justify-between">
            <label for="dateOfBirth" className="labelStyle">
              Date of birth
            </label>
            {mark}
          </div>
          <div>
            <style>{`.react-datepicker-wrapper,.react-datepicker__input-container {width: 100% !important;}`}</style>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="cccc/d/MMM/yyyy"
              popperPlacement="bottom-start"
              popperModifiers={{
                preventOverflow: {
                  enabled: true,
                  escapeWithReference: false,
                },
              }}
              customInput={<CustomInput />}
              ref={inputRef}
            />
          </div>
        </div>
        {/* loan amount */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <label for="Your Regular Deposit" className="labelStyle">
              Loan amount
            </label>
            {mark}
          </div>

          <input
            type="number"
            name="Your Regular Deposit"
            className="inputStyle"
            placeholder="Enter your loan amount"
          />
        </div>
        {/* annual income */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <label for="value" className="labelStyle">
              Your annual income
            </label>
            {mark}
          </div>
          <div>
            <Select className="bg-white  " label="select">
              <Option>Fulltime</Option>
              <Option>Part time</Option>
              <Option>After 3 years</Option>
              <Option>After 4 years</Option>
              <Option>After 5 years</Option>
            </Select>
          </div>
          <div>
            <Select className="bg-white" label="select">
              <Option>Fulltime</Option>
              <Option>Part time</Option>
              <Option>After 3 years</Option>
              <Option>After 4 years</Option>
              <Option>After 5 years</Option>
            </Select>
          </div>
        </div>
        {/* Terms */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <label for="filterAcctype" className="labelStyle">
              Terms
            </label>
            {mark}
          </div>
          <div>
            <Select className="bg-white" label="Select your term">
              <Option>1 year</Option>
              <Option>2 years</Option>
              <Option>3 years</Option>
              <Option>4 years</Option>
              <Option>More than 5 years</Option>
            </Select>
          </div>
        </div>
        {/* update result */}
        <button type="submit" className="submitBtn">
          Update result
        </button>
      </form>
    </div>
  );
};

export default CompareLoansForm;
