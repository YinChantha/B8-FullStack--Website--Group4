// account infor at Compare Saving Account page
import React, {useState} from "react";
import Image from "next/image";
import ImageDisplay from "@/app/components/ImageDisplay";


const bankData = [
  {
    bankLogo: "/images/chipmong-bank.png",
    bankName: "Chip Mong Bank",
    location: "Phnom Penh, Cambodia",
    rate: 3.0,
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

const listIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="#FE343B" />
    <path
      d="M11.3334 5.5L6.75008 10.0833L4.66675 8"
      stroke="white"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#FE343B" />
  </svg>
);


const overviewTexts = Object.values(bankData[0].overviewList);

const BankInfo = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="flex w-full border-1 border-gray-200 rounded-lg shadow-md bg-green-100">
      <div className="m-8 w-full">
        {bankData.map((bank, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row gap-8"
          >
            {/* <div className="w-1/4"> */}
            <div className="flex justify-center items-center sm:flex sm:justify-center sm:items-center md:items-start">
              <Image
                src={bank.bankLogo}
                alt={bank.bankName}
                width={184}
                height={48}
                className="w-auto h-auto"
              />
            </div>
            <div className="w-full ">
              <div className="flex justify-center items-center sm:flex sm:justify-center sm:items-center md:flex md:flex-row md:justify-between md:items-start">
                <div className="flex flex-col gap-[4px]">
                  <h1 className="companyName">{bank.bankName}</h1>
                  <p className="text-[#667085] text-sm">{bank.location}</p>
                  <div className="flex flex-row items-center gap-[11px]">
                    <p className="text-[#344054] text-base font-medium">{bank.rate}</p>
                    <ImageDisplay count={bank.rate} />
                  </div>
                </div>
                <div className="hidden sm:hidden md:block">
                  <button className="redButton ">Product details</button>
                </div>
              </div>
              {/* company overview */}
              <div className="flex flex-col gap-4 text-center sm:text-center md:text-left">
                <h1 className="companyName mt-8">Company Overview</h1>
                <p className="text-[#667085] text-base ">
                  {bank.companyOverview}
                </p>
              </div>
              {/* see more button */}
              <div className="block sm:block md:hidden text-center mt-6 mb-8">
                <button
                  className="text-[#475467] text-base font-semibold hover:bg-[#F9FAFB] hover:rounded-lg hover:px-[28px]"
                  onClick={() => setSeeMore(!seeMore)}
                >
                  See more
                </button>
              </div>
              {/* more info on overview */}
              <div className=" md:flex-col mt-8 gap-3 hidden sm:hidden md:block ">
                {overviewTexts.map((text, index) => (
                  <div key={index} className="flex flex-row items-center gap-2">
                    {listIcon}
                    <p className="text-[#667085] text-base">{text}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#667085] text-base mt-8 hidden sm:hidden md:block">
                {bank.moreAboutOverview}
              </p>
              {/* list with bullet and See more button*/}
              {seeMore ? (
                <div className="mb-8">
                  {" "}
                  <div className=" flex flex-col mt-8 gap-[16px] ">
                    {overviewTexts.map((text, index) => (
                      <div
                        key={index}
                        className="flex flex-row justify-start items-start gap-3 "
                      >
                        <div className="min-w-[15px] h-auto">{listIcon}</div>
                        <p className="text-[#667085] text-base text-start ">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#667085] text-base mt-8 text-center ">
                    {bank.moreAboutOverview}
                  </p>
                </div>
              ) : null}

              <div className="block sm:block md:hidden text-center sm:text-center">
                <button className="bg-red-500 text-white inline-block px-[90px] py-3 hover:bg-red-600 rounded-lg">
                  Product details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankInfo;
