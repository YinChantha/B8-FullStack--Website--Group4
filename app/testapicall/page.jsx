"use client";
import React, { useState } from "react";
import {
  getAllfixedepositlist,
  getAllfixedeposits,
  getAllfixeddepositlist,
} from "../api/fixeddeposits/getAlldeposits";

const page = () => {
  const [data, setData] = useState("");
  const [bankData, setBank] = useState("");
  const [bank1, setBank1] = useState("");
  const [bank2, setBank2] = useState("");
  const [termData, setTerm] = useState("");
  const [currency, setCurrency] = useState("");

  const [queryParams, setQueryParams] = useState({
    bank: "",
    currency: "KHR",
    rateAt: "Maturity",
  });


  const logData = async () => {
    console.log("The bank params is : ", [bank1, bank2]);
    console.log("The term params is : ", termData);
    console.log("The term params is : ", currency);
    setQueryParams({
      bank: "aba",
      currency: "KHR",
      rateAt: "Maturity",
    });
    console.log("params is : ", queryParams);
  };


  const GetFixedDeposits = async () => {
    try {
      const res = await getAllfixeddepositlist(queryParams);
      setData(res.data.bankTermRate);
      console.log("data is here : ", res.data.bankTermRate);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button
        onClick={GetFixedDeposits}
        className="get-started-btn  text-white bg-red-500 rounded-lg md:w-40 w-full h-10 hover:bg-red-600"
      >
        Test Api Call
      </button>
      <input
        type="text"
        onChange={(e) => setBank1(e.target.value)}
        placeholder="Bank1"
        className="shadow rounded-sm text-gray-800 px-2 py-2 w-full focus:outline-none my-2"
      />
      <input
        type="text"
        onChange={(e) => setBank2(e.target.value)}
        placeholder="Bank2"
        className="shadow rounded-sm text-gray-800 px-2 py-2 w-full focus:outline-none my-2"
      />
      <input
        type="text"
        onChange={(e) => setCurrency(e.target.value)}
        placeholder="luy"
        className="shadow rounded-sm text-gray-800 px-2 py-2 w-full focus:outline-none my-2"
      />
      <button onClick={logData} color="py-5 px-10">
        Testing
      </button>
    </div>
  );
};

export default page;
