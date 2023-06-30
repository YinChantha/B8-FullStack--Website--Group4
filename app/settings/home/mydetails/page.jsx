"use client";
import React, { useState, useRef } from "react";
import Settings from "../../../components/Setting";
import { Select, Option } from "@material-tailwind/react";
import TimezoneSelect from "react-timezone-select";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import Navbarsetting from "../../../components/Navbarsetting";
import ReactFlagsSelect from "react-flags-select";

const page = () => {
  const [flag, setFlag] = useState("KH");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState("true");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOptionprovince, setSelectedOptionprovince] = useState("");
  const [selectedOptionkhan, setSelectedOptionkhan] = useState("");
  const [province, setProvince] = useState(false);
  const [khan, setKhan] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const inputRef = useRef(null);
  const router = useRouter();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const Homesettingpage = () => {
    router.push("/settings/home");
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
        className="border w-full border-gray-500 text-gray-700 p-3 pl-10 rounded-md"
        value={value}
        onClick={onClick}
        ref={ref}
        readOnly
      />
    </div>
  ));

  const provinces = [
    { id: 1, label: "Battam Bang" },
    { id: 2, label: "Phnom Penh" },
    { id: 3, label: "Seam Reab" },
    { id: 4, label: "Kampang Spue" },
    { id: 5, label: "Kampang Cham" },
  ];
  const khans = [
    { id: 1, label: "Sen Sok" },
    { id: 2, label: "Russey Keo" },
    { id: 3, label: "Prampir Makara" },
    { id: 4, label: "Tuek Thla" },
    { id: 5, label: "toul kork" },
  ];

  const handleOptionsprovinces = (option) => {
    setSelectedOptionprovince(option.label);
    setProvince(false);
    console.log("Selected Option:", option);
  };

  const toggleProvince = () => {
    setProvince(!province);
  };

  const renderProvinces = () => {
    return provinces.map((option) => (
      <div
        key={option.id}
        className="cursor-pointer p-3 hover:bg-gray-100"
        onClick={() => handleOptionsprovinces(option)}
      >
        {option.label}
      </div>
    ));
  };

  const handleOptionskhans = (option) => {
    setSelectedOptionkhan(option.label);
    setKhan(false);
    console.log("Selected Option:", option);
  };

  const toggleKhan = () => {
    setKhan(!khan);
  };

  const renderKhan = () => {
    return khans.map((option) => (
      <div
        key={option.id}
        className="cursor-pointer p-3 hover:bg-gray-100"
        onClick={() => handleOptionskhans(option)}
      >
        {option.label}
      </div>
    ));
  };

  const validationPhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validationPhoneNumber(value));
  };
  return (
    <div className="flex gap-1">
      <Settings />
      <div className="bg-white w-9/12 p-4">
        <p className="promotionName">Settings</p>
        <Navbarsetting />
        <div className="mt-5">
          <h1 className="text-gray-900 font-semibold text-xl">Personal info</h1>
          <p className="promotionContent mt-3">
            Update your photo and personal details here.
          </p>
        </div>

        <div className="w-10/12">
          <div className="grid grid-cols-2 mt-12">
            <h1 className="settingfont">Name</h1>
            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="Name"
                className="border border-gray-500  text-gray-900 p-3 rounded-md"
              />
              <input
                placeholder="Name"
                className="border border-gray-500  text-gray-900 p-3 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <h1 className="settingfont">Phone Number</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 ">
                <div className="flex flex-col gap-2 w-full mt-3">
                  <PhoneInput
                    country={"kh"}
                    id="email"
                    value={phoneNumber}
                    onChange={handleChange}
                    inputProps={{ required: true }}
                  />
                  <div>
                    {!valid && (
                      <p className="text-red-500 text-[13px] -mt-2">
                        Please enter a valid phone number.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <h1 className="settingfont">Email Address</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 ">
                <div className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3333 4.99998C18.3333 4.08331 17.5833 3.33331 16.6667 3.33331H3.33332C2.41666 3.33331 1.66666 4.08331 1.66666 4.99998M18.3333 4.99998V15C18.3333 15.9166 17.5833 16.6666 16.6667 16.6666H3.33332C2.41666 16.6666 1.66666 15.9166 1.66666 15V4.99998M18.3333 4.99998L9.99999 10.8333L1.66666 4.99998"
                        stroke="#475467"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <input
                    placeholder="your email"
                    className="border w-full border-gray-500 text-gray-700 p-3 pl-10 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <h1 className="settingfont">Date of Birth</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2  ">
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
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <div>
              <h1 className="settingfont">Your photo</h1>
              <p className="promotionContent">
                This will be displayed on your profile
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 ">
                <div className="flex gap-3">
                  <div>
                    <Image src="/images/user2.png" width={80} height={80} />
                  </div>
                  <div class="flex items-center justify-center w-full">
                    <label
                      for="dropzone-file"
                      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          class="w-10 h-10 mb-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 ">
                          <span class="font-semibold text-red-500">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <h1 className="settingfont">Occupation</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 ">
                <input
                  placeholder="your occupation"
                  className="border w-full border-gray-500 text-gray-700 p-3 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <h1 className="settingfont">Country</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 ">
                <ReactFlagsSelect
                  selected={flag}
                  onSelect={setFlag}
                  countries={["fi", "JP", "HK", "IT", "NL", "SE", "US", "KH"]}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <h1 className="settingfont">Address</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 ">
                <div className="relative">
                  <input
                    type="text"
                    value={selectedOptionprovince}
                    onClick={toggleProvince}
                    placeholder="Select provinces"
                    readOnly
                    className="border w-full border-gray-500 text-gray-700 p-3 pl-10 pr-8 rounded-md cursor-pointer"
                  />
                  {province && (
                    <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1">
                      {renderProvinces()}
                    </div>
                  )}
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className={`${province ? "transform rotate-180" : ""}`}
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
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <input
                      type="text"
                      value={selectedOptionkhan}
                      onClick={toggleKhan}
                      placeholder="Select khan"
                      readOnly
                      className="border w-full border-gray-500 text-gray-700 p-3 pl-10 pr-8 rounded-md cursor-pointer"
                    />
                    {khan && (
                      <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1">
                        {renderKhan()}
                      </div>
                    )}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className={`${khan ? "transform rotate-180" : ""}`}
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
                    </div>
                  </div>
                  <input
                    placeholder="Name"
                    className="border border-gray-500 text-gray-900 p-3 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <h1 className="settingfont">Country</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 ">
                <div className="select-wrapper">
                  <TimezoneSelect
                    value={selectedTimezone}
                    onChange={setSelectedTimezone}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <div>
              <h1 className="settingfont">Bio</h1>
              <p className="promotionContent">Write a short introduction</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 ">
                <form>
                  <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                      <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                        <div className="flex items-center space-x-1 sm:pr-4">
                          <Select label="Select Version">
                            <Option>Bold</Option>
                            <Option>Italic</Option>
                            <Option>Normal</Option>
                            <Option>Sermibold</Option>
                          </Select>
                        </div>
                        <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                          <button
                            type="button"
                            className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              width="11"
                              height="14"
                              viewBox="0 0 11 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.6 6.79C9.57 6.12 10.25 5.02 10.25 4C10.25 1.74 8.5 0 6.25 0H0V14H7.04C9.13 14 10.75 12.3 10.75 10.21C10.75 8.69 9.89 7.39 8.6 6.79ZM3 2.5H6C6.83 2.5 7.5 3.17 7.5 4C7.5 4.83 6.83 5.5 6 5.5H3V2.5ZM6.5 11.5H3V8.5H6.5C7.33 8.5 8 9.17 8 10C8 10.83 7.33 11.5 6.5 11.5Z"
                                fill="#98A2B3"
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              width="12"
                              height="14"
                              viewBox="0 0 12 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 0V3H6.21L2.79 11H0V14H8V11H5.79L9.21 3H12V0H4Z"
                                fill="#98A2B3"
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              width="20"
                              height="10"
                              viewBox="0 0 20 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z"
                                fill="#98A2B3"
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              width="20"
                              height="16"
                              viewBox="0 0 20 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.25 6.5C1.42 6.5 0.75 7.17 0.75 8C0.75 8.83 1.42 9.5 2.25 9.5C3.08 9.5 3.75 8.83 3.75 8C3.75 7.17 3.08 6.5 2.25 6.5ZM2.25 0.5C1.42 0.5 0.75 1.17 0.75 2C0.75 2.83 1.42 3.5 2.25 3.5C3.08 3.5 3.75 2.83 3.75 2C3.75 1.17 3.08 0.5 2.25 0.5ZM2.25 12.5C1.42 12.5 0.75 13.18 0.75 14C0.75 14.82 1.43 15.5 2.25 15.5C3.07 15.5 3.75 14.82 3.75 14C3.75 13.18 3.08 12.5 2.25 12.5ZM5.25 15H19.25V13H5.25V15ZM5.25 9H19.25V7H5.25V9ZM5.25 1V3H19.25V1H5.25Z"
                                fill="#98A2B3"
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              width="19"
                              height="16"
                              viewBox="0 0 19 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 13H2V13.5H1V14.5H2V15H0V16H3V12H0V13ZM1 4H2V0H0V1H1V4ZM0 7H1.8L0 9.1V10H3V9H1.2L3 6.9V6H0V7ZM5 1V3H19V1H5ZM5 15H19V13H5V15ZM5 9H19V7H5V9Z"
                                fill="#98A2B3"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                      <label for="editor" class="sr-only">
                        Publish post
                      </label>
                      <textarea
                        id="editor"
                        rows="8"
                        className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Write an article..."
                        required
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button className="learn-more-btn text-gray-700 rounded-lg px-[180px] sm:px-[180px] py-3 sm:py-3 md:px-5 md:py-2 border-gray-300 border-2 hover:bg-gray-50">
              Cabcel
            </button>
            <button
              onClick={Homesettingpage}
              className="get-started-btn text-white bg-red-500 rounded-lg px-[180px] sm:px-[180px] py-3 sm:py-3 md:px-5 md:py-2 hover:bg-red-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
