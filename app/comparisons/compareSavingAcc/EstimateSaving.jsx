import React from "react";

const whiteMark = (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1278_95221)">
      <path
        d="M10.6668 6.67078V10.0041M10.6668 13.3374H10.6752M19.0002 10.0041C19.0002 14.6065 15.2692 18.3374 10.6668 18.3374C6.06446 18.3374 2.3335 14.6065 2.3335 10.0041C2.3335 5.40174 6.06446 1.67078 10.6668 1.67078C15.2692 1.67078 19.0002 5.40174 19.0002 10.0041Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1278_95221">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0.666748 0.00415039)"
        />
      </clipPath>
    </defs>
  </svg>
);

const EstimateSaving = () => {
  return (
    <div className="bg-[#101828] text-white p-8 rounded-lg border-1 border-[#101828] shadow-sm mt-12">
      <div className="p-5">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-[30px] sm:text-[30px] font-semibold sm:font-semibold md:text-[32px] md:font-bold text-center sm:text-center md:text-left mb-8 sm:mb-8">
            Estimate your savings in seconds
          </h1>
          <p className="max-w-[738px]">
            We provide comprehensive and up-to-date information, empowering you
            to make informed decisions based on your unique needs and
            preferences.
          </p>
        </div>

        {/* input */}
        <form
          action="/send-data-here"
          method="post"
          className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row mt-7 gap-6 sm:gap-6 md:gap-8"
        >
          {/* initial depsit */}
          <div className="flex flex-col md:gap-[6px] sm:gap-3 gap-3 w-full">
            <div className="flex justify-between">
              <label>Initial Deposit</label>
              {whiteMark}
            </div>

            <input
              type="number"
              placeholder="$10,000"
              className="inputStyle w-full"
            />
          </div>
          {/* Interest Rate */}
          <div className="flex flex-col md:gap-[6px] sm:gap-3 gap-3 w-full">
            <div className="flex justify-between">
              <label for="investment" className="">
                Interest Rate
              </label>
              {whiteMark}
            </div>
            <select
              id="invest-period"
              name="invest-period"
              className="selectStyle w-full"
            >
              <option value="monthly">1 year</option>
              <option value="monthly">2 years</option>
              <option value="yearly">3 years</option>
            </select>
          </div>
          {/* term */}
          <div className="flex flex-col md:gap-[6px] sm:gap-3 gap-3 w-full">
            <div className="flex justify-between">
              <label for="investment" className="">
                Term
              </label>
              {whiteMark}
            </div>

            <select
              id="invest-period"
              name="invest-period"
              className="selectStyle w-full"
            >
              <option value="monthly">Less than a year</option>
              <option value="monthly">2 months</option>
              <option value="yearly">3 months</option>
              <option value="monthly">4 months</option>
              <option value="yearly">5 months</option>
              <option value="yearly">More than 5 months</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EstimateSaving;
