"use client";
import React from "react";
import BankList from "../../components/BankList";
import Faq from "../../components/Faq";
import CompareFixedDepoForm from "./CompareFixedDepoForm";
import RenderContent from "./RenderContent";
import EstimateSaving from "../compareSavingAcc/EstimateSaving";
import Link from "next/link";
import Bank from "./Bank";
import data from "./data.json";
import SocialLink from "../../components/SocialLink";
import TableContentFixedDepo from "./TableContentFixedDepo";

const CompareFixedDeposit = () => {
  const tableContent = "text-gray-500 font-semibold text-base";
  return (
    <div className="pt-36">
      {/* first section */}
      <div className="sect1 pb-24  px-4 sm:px-4 md:px-28">
        <div className="saveSect1 flex flex-col justify-center items-center">
          <p className="text-red-600 font-semibold text-sm sm:text-sm md:text-base">
            Compare Your Saving Accounts
          </p>
          <p className="text-gray-900 font-semibold text-4xl sm:text-4xl md:text-5xl mt-3 max-w-[960px] text-center">
            Find the Perfect Savings Account for Your Financial Goals
          </p>
          <p className="text-gray-500 font-normal text-lg sm:text-lg md:text-xl mt-6 max-w-[960px] text-center">
            Take control of your financial future by comparing and choosing the
            perfect saving account for your needs with Proadvisor.
          </p>
          <div className="btn flex flex-col-reverse gap-y-3 sm:flex-col-reverse md:flex-row justify-center items-center font-semibold text-base sm:text-base md:text-lg mt-8 sm:mt-8 md:mt-12 md:gap-x-3.5">
            <button className="learn-more-btn text-gray-700 rounded-lg px-[180px] sm:px-[180px] py-3 sm:py-3 md:px-5 md:py-3 border-gray-300 border-2 hover:bg-gray-50">
              Learn more
            </button>
            <button className="get-started-btn text-white bg-red-500 rounded-lg px-[180px] sm:px-[180px] py-3 sm:py-3 md:px-5 md:py-3 hover:bg-red-600">
              Get started
            </button>
          </div>
        </div>
        {/* <BankList /> */}
      </div>
      {/* line */}
      <hr className="border-b-1 border-gray-100 mx-4 sm:mx-4 md:mx-28" />
      {/* second section */}
      <div className="sect2 py-16 px-4 sm:px-4 md:px-28">
        {/* heading */}
        <div className=" flex flex-col justify-center items-center">
          <p className="text-red-600 text-sm font-medium text-center">
            Features
          </p>
          <p className="text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl text-center pt-4">
            Cutting-edge features for comparisons
          </p>
          <p className="max-w-3xl text-gray-500 font-normal text-center pt-4 sm:pt-4 md:pt-5 text-lg sm:text-lg md:text-xl">
            We provide comprehensive and up-to-date information, empowering you
            to make informed decisions based on your unique needs and
            preferences.
          </p>
        </div>
        {/* function compare fixed deposit */}
        <div>
          <CompareFixedDepoForm />
          <TableContentFixedDepo />
        </div>
        {/* table of content and best savings... */}
      </div>

      {/* frequently ask questions */}
      <Faq />
    </div>
  );
};

export default CompareFixedDeposit;
