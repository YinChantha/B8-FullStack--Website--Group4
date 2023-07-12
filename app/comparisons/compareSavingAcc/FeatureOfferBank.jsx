"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { bankDataAtom } from "./atom";
import Image from "next/image";
import ImageDisplay from "@/app/components/ImageDisplay";

const FeatureOfferBank = () => {
  const [bankData, setBankData] = useRecoilState(bankDataAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await fetch(" http://34.143.206.144:8080/savings/all");
        const data = await result.json();
        console.log(data, "result");
        setBankData(data);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <table className="w-full mt-5 mx-5 mb-3">
        <thead>
          <tr className="flex justify-between mx-4 mt-5">
            <th>Compnay</th>
            <th className="ml-[50px]">Interest Rate</th>
            <th className="mr-[25px]">Term</th>
            <th className="mr-[100px]">Saving Value</th>
          </tr>
        </thead>
      </table>
      <div className="overflow-y-auto max-h-[1000px]">
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
            {bankData.data.savings.map((bank, index) => (
              <div
                key={index}
                className="flex gap-8 border-1 border-gray-200 bg-white shadow-md p-4 "
              >
                <div className="w-full ">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-5">
                      <Image
                        // src={bank.bankLogo}
                        src="/images/vichet.png"
                        alt={bank.bankName}
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
                        {/* <div>
                        <button className="redButton ">Product details</button>
                      </div> */}
                      </div>
                    </div>

                    {/* <div className="flex flex-col">
                      <h1 className="offerDetail">{"Waiting"}</h1>
                      <p className="offerTitle">term</p>
                    </div> */}
                    <div className="flex flex-col">
                      <h1 className="offerDetail">{bank.currency}</h1>
                      <p className="offerTitle">Type</p>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="offerDetail">{"Waiting"}</h1>
                      <p className="offerTitle">APR</p>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="offerDetail">{"Waiting"}</h1>
                      <p className="offerTitle">Min. balance for APY</p>
                    </div>
                  </div>
                  {/* <div className="block sm:block md:hidden">
                      <button className="redButton ">Product details</button>
                    </div> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FeatureOfferBank;
