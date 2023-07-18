import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import ReactPaginate from "react-paginate";
import { MultiSelect } from "react-multi-select-component";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import {
  fetchAllBanks,
  getAlldepositsBybank,
  getAlldepositsDefualtLineChart,
  getAlldepositsdefualt,
  getAllfixeddeposithistory,
  getAllfixeddepositlist,
} from "../../api/fixeddeposits/getAlldeposits";
import ChartFilter from "../compareSavingAcc/ChartFilter";
import ChartComponent from "../compareSavingAcc/ChartBar";
import Chartfixdeposits from "./Chartfixdeposits";

const term = [
  { id: 1, name: "1" },
  { id: 2, name: "4" },
  { id: 3, name: "6" },
  { id: 4, name: "12" },
  { id: 5, name: "18" },
  { id: 6, name: "24" },
  { id: 7, name: "36" },
  { id: 8, name: "48" },
  { id: 9, name: "60" },
];
const CompareFixedDepoForm = () => {
  const [data, setData] = useState([]);
  const [datachart, setDatachart] = useState("");
  const [allBank, setAllbank] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedBank, setSelectedBank] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState([]);
  const [queryterm, setQueryterm] = useState("");
  const [currency, setCurrency] = useState("KHR");
  const [rate, setRate] = useState("Maturity");
  const [table, setTable] = useState(false);
  const [error, setError] = useState(false);

  const handleRateatChange = (event) => {
    const response = event.target.value;
    setRate(response);
  };
  const handleCurrencyChange = (event) => {
    const response = event.target.value;
    setCurrency(response);
  };
  const handleBankChange = (selectedOptions) => {
    setSelectedBank(selectedOptions);
  };
  const handleTermChange = (selectedOptions) => {
    setSelectedTerm(selectedOptions);
  };
  const GetFixedDeposits = async () => {
    if (selectedBank.length === 0 && selectedTerm.length === 0) {
      const fetchBanksdefualt = async () => {
        try {
          const res = await getAlldepositsdefualt();
          setData(res.data.bankTermRate);
          setTable(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      const fetchBanksdefualtHistory = async () => {
        try {
          const res = await getAlldepositsDefualtLineChart();
          setDatachart(res.data.bankTermRate);
          setTable(false);
          // setError(false); // Reset error state on successful data fetch
          // console.log("data is here : ", res.data.bankTermRate);
        } catch (error) {
          // console.error("Error fetching data:", error);
          console.error("Error fetching data:", error);
          // setError(true); // Set error state if there is an error
        }
      };
      fetchBanksdefualt();
      fetchBanksdefualtHistory();
    } else {
      const bankName = selectedBank.map((bank) => bank.toLowerCase());
      const term = selectedTerm.map((term) => term.name);
      try {
        const res = await getAllfixeddepositlist({
          currency: currency,
          rateAt: rate,
          bank: bankName,
          term,
        });
        setData(res.data.bankTermRate);
        setTable(false);
        console.log("data is here : ", res.data.bankTermRate);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      try {
        const res = await getAllfixeddeposithistory({
          currency: currency,
          rateAt: rate,
          bank: bankName,
          term,
        });
        setDatachart(res.data.bankTermRate);
        setTable(false);
        console.log("data is here : ", res.data.bankTermRate);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  // Determine the terms dynamically from the first data object
  const terms =
    data.length > 0
      ? Object.keys(data[0].termrate).filter(
          (key) => key !== "bank" && key !== "logo"
        )
      : [];
  // Extract and sort the "bank" values
  const sortedBanks = [...allBank.map((bankData) => bankData.bank)].sort();
  console.log("Sorted banks: ", sortedBanks);
  const filteredBank =
    query === ""
      ? sortedBanks
      : sortedBanks.filter((d) =>
          d.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  const filteredTerm =
    queryterm === ""
      ? term
      : term.filter((d) =>
          d.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(queryterm.toLowerCase().replace(/\s+/g, ""))
        );
  useEffect(() => {
    const fetchBanksdefualt = async () => {
      try {
        const res = await getAlldepositsdefualt();
        setData(res.data.bankTermRate);
        setTable(false);
        // setError(false); // Reset error state on successful data fetch
        // console.log("data is here : ", res.data.bankTermRate);
      } catch (error) {
        // console.error("Error fetching data:", error);
        console.error("Error fetching data:", error);
        // setError(true); // Set error state if there is an error
      }
    };
    const fetchBanksdefualtHistory = async () => {
      try {
        const res = await getAlldepositsDefualtLineChart();
        setDatachart(res.data.bankTermRate);
        setTable(false);
        // setError(false); // Reset error state on successful data fetch
        // console.log("data is here : ", res.data.bankTermRate);
      } catch (error) {
        // console.error("Error fetching data:", error);
        console.error("Error fetching data:", error);
        // setError(true); // Set error state if there is an error
      }
    };

    const fetchallBank = async () => {
      try {
        const res = await fetchAllBanks();
        setAllbank(res.data.bankTermRate);
        // console.log("data is here : ", res.data.bankTermRate);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBanksdefualt();
    fetchallBank();
    fetchBanksdefualtHistory();
  }, []);

  return (
    <div>
      <div className="p-10 bg-gray-200 rounded-md mt-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <label for="value" className="labelStyle">
                Select your bank
              </label>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1288_92357)">
                  <path
                    d="M9.99996 6.67078V10.0041M9.99996 13.3374H10.0083M18.3333 10.0041C18.3333 14.6065 14.6023 18.3374 9.99996 18.3374C5.39759 18.3374 1.66663 14.6065 1.66663 10.0041C1.66663 5.40174 5.39759 1.67078 9.99996 1.67078C14.6023 1.67078 18.3333 5.40174 18.3333 10.0041Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <Combobox value={selectedBank} onChange={handleBankChange} multiple>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                    displayValue={(Bank) => Bank.map((d) => d).join(", ")}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Transition
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")}
                >
                  <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredBank.length === 0 && query !== "" ? (
                      <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>
                    ) : (
                      filteredBank.map((Bank) => (
                        <Combobox.Option
                          key={Bank}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-teal-600 text-white"
                                : "text-gray-900"
                            }`
                          }
                          value={Bank}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {Bank}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-white" : "text-teal-600"
                                  }`}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <label for="value" className="labelStyle">
                Select RateAt
              </label>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1288_92357)">
                  <path
                    d="M9.99996 6.67078V10.0041M9.99996 13.3374H10.0083M18.3333 10.0041C18.3333 14.6065 14.6023 18.3374 9.99996 18.3374C5.39759 18.3374 1.66663 14.6065 1.66663 10.0041C1.66663 5.40174 5.39759 1.67078 9.99996 1.67078C14.6023 1.67078 18.3333 5.40174 18.3333 10.0041Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1288_92357">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.00415039)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <select className="selectStyle" onChange={handleRateatChange}>
              <option value="Maturity">Maturity</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between ">
              <label for="value" className="labelStyle">
                Select Terms
              </label>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1288_92362)">
                  <path
                    d="M10.0001 6.67078V10.0041M10.0001 13.3374H10.0084M18.3334 10.0041C18.3334 14.6065 14.6025 18.3374 10.0001 18.3374C5.39771 18.3374 1.66675 14.6065 1.66675 10.0041C1.66675 5.40174 5.39771 1.67078 10.0001 1.67078C14.6025 1.67078 18.3334 5.40174 18.3334 10.0041Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1288_92362">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.00415039)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <Combobox value={selectedTerm} onChange={handleTermChange} multiple>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                    displayValue={(term) => term.map((d) => d.name).join(", ")}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Transition
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQueryterm("")}
                >
                  <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredTerm.length === 0 && queryterm !== "" ? (
                      <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>
                    ) : (
                      filteredTerm.map((term) => (
                        <Combobox.Option
                          key={term.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-teal-600 text-white"
                                : "text-gray-900"
                            }`
                          }
                          value={term}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {term.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-white" : "text-teal-600"
                                  }`}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <label for="value" className="labelStyle">
                Select currency
              </label>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1288_92362)">
                  <path
                    d="M10.0001 6.67078V10.0041M10.0001 13.3374H10.0084M18.3334 10.0041C18.3334 14.6065 14.6025 18.3374 10.0001 18.3374C5.39771 18.3374 1.66675 14.6065 1.66675 10.0041C1.66675 5.40174 5.39771 1.67078 10.0001 1.67078C14.6025 1.67078 18.3334 5.40174 18.3334 10.0041Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1288_92362">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.00415039)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <select className="selectStyle" onChange={handleCurrencyChange}>
              <option value="KHR">KHR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mt-5 ">
          <button
            onClick={GetFixedDeposits}
            type="submit"
            className="redButton"
          >
            Update result
          </button>
        </div>
      </div>
      <div className="mt-20">
        <div className="text-center">
          <h1 className="text-[#101828] font-medium text-xl">
            Good news! We’ve found{" "}
            <span className="text-[#12B76A]">51 products</span> for you to take
            a look at.
          </h1>
          <p className="text-[#475467] text-lg font-normal mt-5">
            Our platform keeps you updated on the most current and exciting
            promotions from banks and financial institutions in Cambodia.
          </p>
        </div>
        <Chartfixdeposits data={datachart} />

        {/* data of the table term */}
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                {error ? (
                  <p>Error occurred while fetching data.</p>
                ) : data.length > 0 ? (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-gray-900 font-semibold text-left uppercase "
                        >
                          Bank
                        </th>
                        {terms.map((term, index) => (
                          <th
                            key={index}
                            scope="col"
                            className="px-6 py-3 text-gray-900 font-semibold text-left uppercase "
                          >
                            Term : {term}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {data.map((bankData, index) => (
                        <tr key={index}>
                          <td>
                            <div className="flex items-center gap-3">
                              <img
                                src={bankData.termrate.logo}
                                className="w-10 h-10 rounded-full"
                                alt={`${bankData.bank} Logo`}
                              />
                              <p className="text-gray-700 text-sm font-semibold ">
                                {bankData.bank}
                              </p>
                            </div>
                          </td>
                          {terms.map((term, termIndex) => (
                            <td
                              key={termIndex}
                              className="px-6 py-4 text-gray-700 text-sm font-semibold whitespace-nowrap"
                            >
                              {bankData.termrate[term] !== undefined
                                ? ` ${bankData.termrate[term]}%`
                                : ""}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No data available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareFixedDepoForm;
