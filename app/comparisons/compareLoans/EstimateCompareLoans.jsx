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

const EstimateCompareLoans = () => {
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
              className="selectStyle w-full"
            />
          </div>
          {/* Loan type */}
          <div className="flex flex-col md:gap-[6px] sm:gap-3 gap-3 w-full">
            <div className="flex flex-row justify-between">
              <label>Loan type</label>
              {whiteMark}
            </div>

            <select id="value" name="value" className="selectStyle ">
              <option value="auto">Auto</option>
              <option value="business">Business</option>
              <option value="car">Car</option>
              <option value="education">Education</option>
              <option value="home-improvement">Home Improvement</option>
              <option value="housing">Housing</option>
              <option value="micro">Micro</option>
              <option value="mortages">Mortgages</option>
              <option value="personal">Personal</option>
              <option value="small-medium-enterprise">Small & Medium Enterprise</option>
              <option value="secured-personal">Secured Personal</option>
              <option value="term">Term</option>
            </select>
          </div>
          {/* Interest Rate */}
          <div className="flex flex-col md:gap-[6px] sm:gap-3 gap-3 w-full">
            <div className="flex justify-between">
              <label for="investment" className="">
                Interest Rate (AER)
              </label>
              {whiteMark}
            </div>
            <select
              id="invest-period"
              name="invest-period"
              className="selectStyle w-full"
            >
              <option value="company-provider">Company provider</option>
              <option value="aer">Interest Rate (AER)</option>
              <option value="term">Term</option>
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
              <option value="a-year">Less than a year</option>
              <option value="two-months">2 months</option>
              <option value="three-months">3 months</option>
              <option value="four-months">4 months</option>
              <option value="five-months">5 months</option>
              <option value="more-five-months">More than 5 months</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EstimateCompareLoans;
