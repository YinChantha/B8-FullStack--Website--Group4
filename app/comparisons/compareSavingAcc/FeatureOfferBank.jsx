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
        console.log(data, " result");
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
          <p>Hello</p>
          {/* {bankData.data.savings.map((bank, index) => (
            <div
              key={index}
              className="flex gap-8 border-1 border-gray-200 rounded-lg shadow-md p-8 mt-6 "
            >
              <div className="">
                <Image
                  // src={bank.bankLogo}
                  src='/images/vichet.png'
                  alt={bank.bankName}
                  width={184}
                  height={48}
                  className="w-auto h-auto"
                />
              </div>
              <div className="w-full ">
                <div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-[4px]">
                      <h1 className="companyName">{bank.bank}</h1>
                      <p className="text-[#667085] text-sm">{bank.location}</p>
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
                    <div>
                      <button className="redButton ">Product details</button>
                    </div>
                  </div>
                  <div className="mt-8 flex gap-8">
                    <div>
                      <h1 className="offerDetail">{"Waiting"}</h1>
                      <p className="offerTitle">term</p>
                    </div>
                    <div>
                      <h1 className="offerDetail">{bank.currency}</h1>
                      <p className="offerTitle">Type</p>
                    </div>
                    <div>
                      <h1 className="offerDetail">{"Waiting"}</h1>
                      <p className="offerTitle">APR</p>
                    </div>
                    <div>
                      <h1 className="offerDetail">{"Waiting"}</h1>
                      <p className="offerTitle">Min. balance for APY</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      )}
      
    </>
  );
};

export default FeatureOfferBank;
