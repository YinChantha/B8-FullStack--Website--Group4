import React from "react";

const mark = (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_373_65019)">
      <path
        d="M10.0001 6.6709V10.0042M10.0001 13.3376H10.0084M18.3334 10.0042C18.3334 14.6066 14.6025 18.3376 10.0001 18.3376C5.39771 18.3376 1.66675 14.6066 1.66675 10.0042C1.66675 5.40186 5.39771 1.6709 10.0001 1.6709C14.6025 1.6709 18.3334 5.40186 18.3334 10.0042Z"
        stroke="#667085"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_373_65019">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0 0.00415039)"
        />
      </clipPath>
    </defs>
  </svg>
);

const CompareFixedDepo = () => {
  return (
    <div>
      <form
        action="/send-data-here"
        method="post"
        className="flex flex-col gap-6 bg-[#F9FAFB] py-8 px-6 rounded-lg border-[1px] border-[#EAECF0]"
      >
        {/* investment amount */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <label for="initial deposit" className="labelStyle">
              Investment amount
            </label>
            {mark}
          </div>

          <input
            type="number"
            name="initial deposit"
            className="inputStyle"
            placeholder="Enter your initial deposit"
          />
        </div>
        {/* term */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <label for="value" className="labelStyle">
              Term
            </label>
            {mark}
          </div>

          <select id="term" name="term" className="selectStyle ">
            <option value="monthly">Less than a year</option>
            <option value="yearly">2 months</option>
            <option value="yearly">3 months</option>
            <option value="yearly">4 months</option>
            <option value="yearly">5 months</option>
            <option value="yearly">More than 5 months</option>
          </select>
        </div>
        <button type="submit" className="submitBtn">
          Update result
        </button>
      </form>
    </div>
  );
};

export default CompareFixedDepo;
