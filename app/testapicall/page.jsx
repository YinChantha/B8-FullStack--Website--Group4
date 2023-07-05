"use client";
import React, { useState } from "react";
import { getAllfixedeposits } from "../api/fixeddeposits/getAlldeposits";

const page = () => {
  const [data, setData] = useState("");
  const [bankData, setBank] = useState("");
  const [termData, setTerm] = useState("");

  const [queryParams, setQueryParams] = useState({
    bank: '',
    term: '',
    // Initial query parameters
  });

  const logData = async () => {
    console.log("The bank params is : ", bankData);
    console.log("The term params is : ", termData);
    setQueryParams({
      bank: bankData,
      term: termData
    });
    // console.log(queryParams);
  };

  const GetFixedDeposits = async () => {
    try {
      const res = await getAllfixedeposits(queryParams);
      setData(res);
      console.log("data is here : ", res);
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
        onChange={(e) => setBank(e.target.value)}
        placeholder="Bank"
        className="shadow rounded-sm text-gray-800 px-2 py-2 w-full focus:outline-none my-2"
      />
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Term"
        className="shadow rounded-sm text-gray-800 px-2 py-2 w-full focus:outline-none my-2"
      />
      <button onClick={logData} color="py-5 px-10">
        Testing
      </button>
    </div>
  );
};

export default page;
