import React from "react";
import Image from "next/image";
import ImageDisplay from "@/app/components/ImageDisplay";

const contentData = [
  {
    bankLogo: "/images/acleda-bank.png",
    bankName: "acleda bank",
    location: "Phnom Penh, Cambodia",
    rate: 5.0,
    term: "5 years",
    type: "Savings & MMAs",
    apr: "4.50%",
    minBalanceApy: "20,641,378.75 KHR",
  },
  {
    bankLogo: "/images/acleda-bank.png",
    bankName: "acleda bank",
    location: "Phnom Penh, Cambodia",
    rate: 5.0,
    term: "5 years",
    type: "Savings & MMAs",
    apr: "4.50%",
    minBalanceApy: "20,641,378.75 KHR",
  },
  {
    bankLogo: "/images/acleda-bank.png",
    bankName: "acleda bank",
    location: "Phnom Penh, Cambodia",
    rate: 5.0,
    term: "5 years",
    type: "Savings & MMAs",
    apr: "4.50%",
    minBalanceApy: "20,641,378.75 KHR",
  },
  {
    bankLogo: "/images/acleda-bank.png",
    bankName: "acleda bank",
    location: "Phnom Penh, Cambodia",
    rate: 5.0,
    term: "5 years",
    type: "Savings & MMAs",
    apr: "4.50%",
    minBalanceApy: "20,641,378.75 KHR",
  },
  {
    bankLogo: "/images/acleda-bank.png",
    bankName: "acleda bank",
    location: "Phnom Penh, Cambodia",
    rate: 5.0,
    term: "5 years",
    type: "Savings & MMAs",
    apr: "4.50%",
    minBalanceApy: "20,641,378.75 KHR",
  },
];
const FeatureOfferBank = () => {
  return (
    <div className="">
      {contentData.map((bank, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex sm:flex-col gap-8 sm:gap-8 md:flex md:flex-row md:gap-8 border-1 border-gray-200 rounded-lg shadow-md p-8 mt-6 justify-center items-center sm:justify-center sm:items-center md:items-start bg-green-100"
        >
          <div className="">
            <Image
              src={bank.bankLogo}
              alt={bank.bankName}
              width={184}
              height={48}
              className="w-auto h-auto"
            />
          </div>
          <div className="w-full">
            <div className="md:flex md:flex-col md:justify-center md:items-center grid grid-rows-2 grid-flow-col sm:grid sm:grid-rows-2 sm:grid-flow-col ">
              <div className="text-center bg-yellow-100 flex justify-between">
                {/* rating */}
                <div className="text-left">
                  <h1 className="companyName">{bank.bankName}</h1>
                  <p className="text-[#667085] text-sm">{bank.location}</p>
                  <div className="flex flex-row items-center gap-[11px]">
                    <p className="text-[#344054] text-base font-medium">5.0</p>
                    <ImageDisplay count={bank.rate} />
                  </div>
                </div>
                <div className="">
                  <button className="redButton ">Product details</button>
                </div>
              </div>

              {/* info */}
              <div className="text-center sm:flex sm:gap-10">
                <div>
                  <h1 className="offerDetail">{bank.term}</h1>
                  <p className="offerTitle">term</p>
                </div>
                <div>
                  <h1 className="offerDetail">{bank.type}</h1>
                  <p className="offerTitle">Type</p>
                </div>
                <div>
                  <h1 className="offerDetail">{bank.apr}</h1>
                  <p className="offerTitle">APR</p>
                </div>
                <div>
                  <h1 className="offerDetail">{bank.minBalanceApy}</h1>
                  <p className="offerTitle">Min. balance for APY</p>
                </div>
              </div>
              {/* product details button */}
              <div className="block sm:block md:hidden">
                <button className="redButton ">Product details</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureOfferBank;
