"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import { fetchAllBankData } from "./fetchAllBankData";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedBankState } from "./atom";


const currency = [
  { value: "KHM", label: "KHM" },
  { value: "USD", label: "USD" },
];


const terms = [
  { value: "monthly", label: "Interest Rate (AER)" },
  { value: "yearly", label: "After 1 month" },
  { value: "yearly", label: "After 1 years" },
  { value: "yearly", label: "After 5 years" },
];


const CompareSaveAccForm = () => {
  // const [selectedBank, setSelectedBank] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState([]);
  const [bankData, setBankData] = useState([]);

  const [selectedBankRecoil, setSelectedBankRecoil] =
    useRecoilState(selectedBankState);

  const [selectedBank, setSelectedBank] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const data = await fetchAllBankData();
      setBankData(data);
    };
    fecthData();
  }, []);


  // sort bank name
  const sortedBanks = [...new Set(bankData.map((bank) => bank.bank))].sort();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // setShowSelectedBank(true);
    console.log(selectedBank, "selectedBank");
    setSelectedBankRecoil(selectedBank.map((bank) => bank.value));
  };

  return (
    <div>
      <form
        action="/send-data-here"
        method="post"
        className=" gap-8 bg-[#F9FAFB] py-8 px-6 rounded-lg border-[1px] border-[#EAECF0] mt-12"
      >
        <div className="flex md:flex-row flex-col sm:flex-col gap-8 ">
          <div className="flex flex-col gap-3 w-full">
            <label for="value" className="labelStyle">
              Select your bank
            </label>
            <MultiSelect
              options={sortedBanks.map((bank) => {
                return { label: bank, value: bank };
              })}
              value={selectedBank}
              onChange={setSelectedBank}
              labelledBy="Select"
            />
          </div>

          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row justify-between">
              <label for="value" className="labelStyle">
                Select your bank
              </label>
            </div>
            <Select
              defaultValue={selectedTerm}
              onChange={setSelectedTerm}
              options={terms}
            />
          </div>

          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row justify-between">
              <label for="value" className="labelStyle truncate">
                Select currency
              </label>
            </div>
            <Select
              defaultValue={selectedCurrency}
              onChange={setSelectedCurrency}
              options={currency}
            />
          </div>
        </div>

        <div className=" flex md:justify-end items-center mt-8  ">
          <button
            type="submit"
            className="redButton w-full sm:w-full md:max-w-[155px] font-semibold "
            onClick={handleFormSubmit}
          >
            Update result
          </button>
        </div>
      </form>

      {/* <SelectedBanksCompoents showSelectedBank={showSelectedBank} selectedBank={selectedBank} /> */}
    </div>
  );
};

export default CompareSaveAccForm;
