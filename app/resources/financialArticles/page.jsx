import React from "react";
import { GoSearch } from "react-icons/go";

const FinancialArticles = () => {
  return (
    <>
      <div className=" h-full md:mx-20">
        <div className="flex flex-col items-center justify-center gap-4 mt-20">
          <p className="text-[15px] text-red-500">Our financial articles</p>
          <h1 className="text-[40px] font-bold text-center">
            The lastest writings form our website export
          </h1>
          <div className="flex max-w-[600px] justify-center">
            <p className="text-gray-400 text-center">
              Subscribe to learn about new product features, the latest in
              technology, solutions, and updates.
            </p>
          </div>
          <div className="flex flex-row gap-2 border-2 border-gray-200 rounded-lg p-1 w-[300px] items-center">
            <GoSearch size={15} color="gray" className="ml-2" />
            <p className="text-[13px] text-gray-500">Search</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialArticles;
