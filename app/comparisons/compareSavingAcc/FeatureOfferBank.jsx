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
          className="flex gap-8 border-1 border-gray-200 rounded-lg shadow-md p-8 mt-6 "
        >
          {/* <div className="w-1/4"> */}
          <div className="">
            <Image
              src={bank.bankLogo}
              alt={bank.bankName}
              width={184}
              height={48}
              className="w-auto h-auto"
            />
          </div>
          <div className="w-full ">
            <div>
              {/* <div className="flex flex-col gap-[4px]"> */}
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-[4px]">
                  <h1 className="companyName">{bank.bankName}</h1>
                  <p className="text-[#667085] text-sm">{bank.location}</p>
                  <div className="flex flex-row items-center gap-[11px]">
                    <p className="text-[#344054] text-base font-medium">5.0</p>
                    <ImageDisplay count={bank.rate} />
                  </div>
                </div>
                <div>
                  <button className="redButton ">Product details</button>
                </div>
              </div>
              <div className="mt-8 flex gap-8">
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureOfferBank;
