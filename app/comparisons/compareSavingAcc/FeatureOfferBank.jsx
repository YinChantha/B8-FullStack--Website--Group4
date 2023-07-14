"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { bankDataAtom } from "./atom";
import Image from "next/image";
import ImageDisplay from "@/app/components/ImageDisplay";
import { fetchAllBankData } from "./fetchAllBankData";
import { useRecoilValue } from "recoil";
import { filteredBankDataAtom } from "./atom";

const FeatureOfferBank = () => {
  const [bankData, setBankData] = useRecoilState(bankDataAtom);
  const [loading, setLoading] = useState(true);

  const filteredBankData = useRecoilValue(filteredBankDataAtom);

  useEffect(() => {
    console.log(filteredBankData, "filteredBankData");
  }, [filteredBankData]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        // const result = await fetch(process.env.NEXT_PUBLIC_GETALLSAVINGS);
        const result = await fetchAllBankData();
        // console.log(data, "result");
        setBankData(result);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderBankLogo = (bankName) => {
    console.log(bankName, "bankName");
    switch (bankName) {
      case "ACLEDA":
        return "/acleda.png";
      case "ABA bank":
        return "/aba.png";
      case "VATTANAC":
        return "/images/vattanac.png";
      default:
        return "/acleda.png";
    }
  };

  return (
    <>
      <div className="overflow-y-auto max-h-[1000px] mt-5">
        {loading ? (
          <div className="flex justify-center items-center h-full mt-32">
            <img
              className="h-16 w-16"
              src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
              alt="loading"
            />
          </div>
        ) : (
          <div className="">
            <table className="w-full gap-8 border-1 border-gray-200 bg-white shadow-md p-4 relative">
              <thead className="w-full sticky bg-white top-[-1px] left-0 border-none">
                <tr className=" mx-4 mt-5">
                  <th>Compnay</th>
                  <th className="ml-[50px]">Interest Rate</th>
                  <th className="mr-[25px]">2 months</th>
                  <th className="mr-[100px]">3 months</th>
                </tr>
              </thead>
              <tbody>
                {filteredBankData &&
                  filteredBankData.length > 0 &&
                  filteredBankData.map((bank, index) => (
                    <tr
                      key={index}
                      className="padding-4 border border-b-2 [&>td]:p-4"
                    >
                      <td className="flex flex-row gap-5 ml-5">
                        <Image
                          // src={bank.bankLogo}
                          src={renderBankLogo(bank.bank)}
                          alt={bank.bank}
                          width={184}
                          height={48}
                          className="w-[60px] h-[60px] rounded-full"
                        />
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col gap-[4px]">
                            <h1 className="companyName">{bank.bank}</h1>
                            <p className="text-[#667085] text-sm">
                              {bank.location}
                            </p>
                            <div className="flex flex-row items-center gap-[11px]">
                              <p className="flex items-center text-[#344054] text-base font-medium">
                                {bank.rate}
                              </p>
                              <ImageDisplay
                                className="flex items-center justify-center"
                                count={bank.rate}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center bg-gray-100">
                        <h1 className="offerDetail">{bank.currency}</h1>
                        <p className="offerTitle">Type</p>
                      </td>
                      <td className="text-center">
                        <h1 className="offerDetail">{"Money $"}</h1>
                        <p className="offerTitle">Value (Gorss)</p>
                      </td>
                      <td className="text-center">
                        <h1 className="offerDetail">{"money $"}</h1>
                        <p className="offerTitle">Value (Gross)</p>
                      </td>
                    </tr>
                  ))}

                {!filteredBankData &&
                  bankData.map((bank, index) => (
                    <tr
                      key={index}
                      className="padding-4 border border-b-2 [&>td]:p-4"
                    >
                      <td className="flex flex-row gap-5 ml-5">
                        <Image
                          // src={bank.bankLogo}
                          src={renderBankLogo(bank.bank)}
                          alt={bank.bank}
                          width={184}
                          height={48}
                          className="w-[60px] h-[60px] rounded-full"
                        />
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col gap-[4px]">
                            <h1 className="companyName">{bank.bank}</h1>
                            <p className="text-[#667085] text-sm">
                              {bank.location}
                            </p>
                            <div className="flex flex-row items-center gap-[11px]">
                              <p className="flex items-center text-[#344054] text-base font-medium">
                                {bank.rate}
                              </p>
                              <ImageDisplay
                                className="flex items-center justify-center"
                                count={bank.rate}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center bg-gray-100">
                        <h1 className="offerDetail">{bank.currency}</h1>
                        <p className="offerTitle">Type</p>
                      </td>
                      <td className="text-center">
                        <h1 className="offerDetail">{"Money $"}</h1>
                        <p className="offerTitle">Value (Gorss)</p>
                      </td>
                      <td className="text-center">
                        <h1 className="offerDetail">{"money $"}</h1>
                        <p className="offerTitle">Value (Gross)</p>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default FeatureOfferBank;
