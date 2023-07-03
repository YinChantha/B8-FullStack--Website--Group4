// account infor at Compare Saving Account page
import React from "react";
import Image from "next/image";
import ImageDisplay from "@/app/components/RatingStar";
import { BsFillCheckCircleFill } from "react-icons/bs";

const bankData = [
  {
    bankLogo: "/images/chipmong-bank.png",
    bankName: "Chip Mong Bank",
    location: "Phnom Penh, Cambodia",
    rate: 5.0,
    companyOverview:
      "Founded in 2019, Chip Mong Commercial Bank Plc. offers an array of well-designed financial solutions with strong commitments to help customers grow financially. Chip Mong Bank provides a personalized banking experience with a comprehensive understanding of your industry, market, and business’ needs.",
    overviewList: {
      text1: "Offering one-stop service & customized solutions",
      text2: "Delivering fast and excellent services & systems",
      text3: "Partnering for mutually profitable and sustainable businesses",
      text4: "Expanding the business into the largest eco-system",
      text5: "Embracing employees’ growth and development",
      text6:
        "Adhering to long - term, compliant, and sound risk management practices",
    },
    moreAboutOverview:
      "Founded in 2019, Chip Mong Commercial Bank Plc. offers an array of well-designed financial solutions with strong commitments to help customers grow financially. Chip Mong Bank provides a personalized banking experience with a comprehensive understanding of your industry, market, and business’ needs.",
  },
];

const overviewTexts = Object.values(bankData[0].overviewList);

const BankInfoLoans = () => {
  return (
    <div className="flex w-full border-1 border-gray-200 rounded-lg shadow-md">
      <div className="m-8 w-full">
        {bankData.map((bank, index) => (
          <div key={index} className="flex gap-8">
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
              {/* company overview */}
              <div className="flex flex-col gap-4">
                <h1 className="companyName mt-8">Company Overview</h1>
                <p className="text-[#667085] text-base ">
                  {bank.companyOverview}
                </p>
              </div>
              <div className="flex flex-col mt-8 gap-3">
                {overviewTexts.map((text, index) => (
                  <div key={index} className="flex flex-row items-center gap-2">
                    <BsFillCheckCircleFill size={15} color="red" />
                    <p className="text-[#667085] text-base">{text}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#667085] text-base mt-8">
                {bank.moreAboutOverview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankInfoLoans;
