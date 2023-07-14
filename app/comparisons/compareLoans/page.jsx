"use client";
import BankList from "@/app/components/BankList";
import Faq from "@/app/components/Faq";
import Link from "next/link";
import data from "./data.json"
import React from "react";
import CompareLoansForm from "./CompareLoansForm";
import ShowContent from "./ShowContent";
import BankInfoLoans from "./BankInfoLoans";
import ChooseSavAccList from "./ChooseSavAccListLoans";
import KnowSaveAcc from "./KnowSaveAcc";
import SocialLink from "@/app/components/SocialLink";
import TableContentLoans from "./TableContentLoans";
import SavingLineChart from "./SavingLineChart";
import ExchangeRateChart from "./ExchangeRateChart";
import EstimateCompareLoans from "./EstimateCompareLoans";
// import CompareSavingAccForm from "./CompareSaveAccForm";
// import DisplayContent from "./DisplayContent";

const CompareLoan = () => {
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
        <BankList />
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
        {/* fuction compare loan */}
        <CompareLoansForm />
        {/* we found 51 products */}
        <div className="text-center mt-24">
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
        {/* Saving line chart */}
        <div className="text-center mt-16 mb-12">
          <h1 className="text-[#101828] font-semibold text-3xl ">
            Saving Line Chart
          </h1>
          <p className="text-[#667085] font-normal text-lg mt-6">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra,
            semper. Eget in volutpat mollis at volutpat lectus velit, sed
            auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant
            diam at. Suscipit tristique risus, at donec. In turpis vel et quam
            imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.{" "}
          </p>
        </div>
        <SavingLineChart />
        {/* Exchange rate */}
        <div className="text-center mt-16 mb-12">
          <h1 className="text-[#101828] font-semibold text-3xl ">
            Exchange Rate
          </h1>
          <p className="text-[#667085] font-normal text-lg mt-6">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra,
            semper. Eget in volutpat mollis at volutpat lectus velit, sed
            auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant
            diam at. Suscipit tristique risus, at donec. In turpis vel et quam
            imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.{" "}
          </p>
        </div>
        <ExchangeRateChart />
        {/* estimate your saving */}
        {/* heading */}
        <div className=" flex flex-col justify-center items-center mt-16">
          <p className="text-red-600 text-sm font-medium text-center">
            Features
          </p>
          <p className="text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl text-center pt-4">
            Cutting-edge features for comparisons
          </p>
          <p className=" text-gray-500 font-normal text-center pt-4 sm:pt-4 md:pt-5 text-lg sm:text-lg md:text-xl">
            We provide comprehensive and up-to-date information, empowering you
            to make informed decisions based on your unique needs and
            preferences.
          </p>
        </div>
        <EstimateCompareLoans />
        <TableContentLoans />
      </div>

      {/* FAQ */}
      <Faq />
    </div>
  );
};

export default CompareLoan;
