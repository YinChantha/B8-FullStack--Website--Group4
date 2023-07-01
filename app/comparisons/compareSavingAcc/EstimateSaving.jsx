import React from "react";

const titleInput = [{}];

const EstimateSaving = () => {
  return (
    <div className="bg-[#101828] text-white p-8 rounded-lg mt-6 border-1 border-[#101828] shadow-sm">
      <div className="p-5">
        <h1 className="text-[32px] font-bold">
          Estimate your savings in seconds
        </h1>
        {/* input */}
        <form
          action="/send-data-here"
          method="post"
          className="flex mt-7 gap-12"
        >
          <div className="flex flex-col gap-[6px]">
            <label>Initial Delabelosit</label>
            <input
              type="number"
              placeholder="$10,000"
              className="inputStyle max-w-[185px] "
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label>Monthly contribution</label>
            <input
              type="number"
              placeholder="$10,000"
              className="inputStyle max-w-[182px]"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label for="investment" className="">
              Investment period
            </label>
            <select
              id="invest-period"
              name="invest-period"
              className="selectStyle min-w-[182px]"
            >
              <option value="monthly">1 year</option>
              <option value="monthly">2 years</option>
              <option value="yearly">3 years</option>
            </select>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label>APY</label>
            <input
              type="number"
              placeholder="$10,000"
              className="inputStyle max-w-[182px]"
            />
          </div>
        </form>
        <hr className="border-b-1 border-gray-800 mt-8" />
        <div className="flex justify-between  mt-6">
          <div>
            <p>Interest earned</p>
            <p>Total contributions</p>
            <p>Initial deposit</p>
          </div>
          <div>
            <p>$12,866.23</p>
            <p>$24,000</p>
            <p>$10,000</p>
          </div>
        </div>
        <hr className="border-b-1 border-gray-800 mt-8" />
        <div className="flex justify-between  mt-6">
          <div>
            <p>Total savings</p>
          </div>
          <div>
            <p>$46,866.23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateSaving;
