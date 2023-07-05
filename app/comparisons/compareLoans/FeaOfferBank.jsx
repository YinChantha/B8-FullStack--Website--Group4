import React from "react";
import Image from "next/image";
import ImageDisplay from "@/app/components/ImageDisplay";
import { BsCircleFill } from "react-icons/bs";

const contentData = [
  {
    bankLogo: "/images/acleda-bank.png",
    bankName: "acleda bank",
    location: "Phnom Penh, Cambodia",
    rate: 5.0,
    loanTerm: "Up​ to​ 10​ years",
    loanAmount: "$5,000​ –​ $200,000",
    interestRate: "8.99% - 23.43%",
    content:
      "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
    path: "/",
    generalCondition: {
      text1:
        "Request a non-binding free quote without affecting your ZEK credit history.",
      text2:
        "Residence in Switzerland or Liechtenstein required. A Swiss bank account is also required.",
      text3:
        "Interest rates vary based on the creditworthiness, loan terms and financial situations of applicants.",
      text4: "Credit rating required to obtain a loan: A+, A, B, C or D.",
      text5:
        "Important: The lowest interest rate is only available to applicants with the highest credit ratings (with collateral or home owners: A+).",
    },
    document:
      "Copy of ID card or passport. Non-citizens must provide a copy of their residence permit in addition to a copy of their passport. Salary statements (last three months) and extract from the debt collection register. Additional documents like divorce settlements, home rental agreements and other documents may be required.",
    generalInfo:
      "The interest rates used vary between loans depending on the creditworthiness and financial situation of applicants. Interest rates may also vary based on the lengths of loan terms. With insurance, the interest costs can be lower.",
  },
];

const conditionText = Object.values(contentData[0].generalCondition);
const FeaOfferBank = () => {
  const seeDetailsTitle = "text-[#344054] text-base font-semibold";
  const seeDetailsText = "text-[#667085] text-base font-normal";
  const [seeDetails, setSeeDetails] = React.useState(false);

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
              {/* bank name and button */}
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
              {/* bank elements */}
              <div className="mt-8 flex justify-between">
                <div>
                  <h1 className="offerDetail">{bank.loanTerm}</h1>
                  <p className="offerTitle">Loan Term</p>
                </div>
                <div>
                  <h1 className="offerDetail">{bank.loanAmount}</h1>
                  <p className="offerTitle">Loan amount</p>
                </div>
                <div>
                  <h1 className="offerDetail">{bank.interestRate}</h1>
                  <p className="offerTitle">Interest rate</p>
                </div>
              </div>
              {/* info */}
              <div>
                <p className="text-[#667085] text-sm font-normal mt-5">
                  {bank.content}
                </p>
              </div>
              {/* see details button */}
              <button
                onClick={() => setSeeDetails(!seeDetails)}
                className="flex justify-start items-center gap-2 mt-6 hover:bg-[#F9FAFB] hover:rounded-lg "
              >
                <p className="text-[#475467] text-sm font-semibold">
                  See details
                </p>
                {/* arrow right */}
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15.0042L12.5 10.0042L7.5 5.00415"
                    stroke="#475467"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              {/* details content */}
              {seeDetails ? null : (
                <div>
                  {/* line */}
                  <hr className="border-b-1 border-gray-100 my-8" />
                  <div className="flex flex-col gap-8">
                    {/* text section1 */}
                    <div>
                      <h1 className={`${seeDetailsTitle}`}>
                        General conditions
                      </h1>
                      {/* list */}
                      <ul className="flex flex-col mt-8 gap-3 list-disc pl-[10px]">
                        {conditionText.map((text, index) => (
                          <li
                            key={index}
                            // className="flex flex-row justify-items-start gap-2"
                          >
                            {/* <BsCircleFill size={5} color="#475467" /> */}
                            <p className="text-[#667085] text-base font-normal">
                              {text}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* text section2 */}
                    <div>
                      <h1 className={`${seeDetailsTitle}`}>Documents</h1>
                      <p className={`${seeDetailsText} mt-5`}>
                        {bank.document}
                      </p>
                    </div>
                    {/* text section3 */}
                    <div>
                      <h1 className={`${seeDetailsTitle}`}>
                        General information
                      </h1>
                      <p className={`${seeDetailsText} mt-5`}>
                        {bank.generalInfo}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaOfferBank;
