"use client";

import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { detailAtom } from "../datailAtom";
import { FiCopy } from "react-icons/fi";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { RiSendPlaneLine } from "react-icons/ri";

const PromoDetails = ({ params }) => {
  const [detailData, setDetailData] = useRecoilState(detailAtom);
  const postId = params.id;
  const detailId = parseInt(postId) + 1;
  // console.log(postId, "this is my post id");
  // console.log(detailId, "this is my detail id");
  // console.log(detailData, "this is my detail data");

  useEffect(() => {
    try {
      const fetchData = async () => {
        console.log(detailId, "this is my detail id");
        const result = await fetch(
          `http://34.143.206.144:8080/promotion/{id}?id=${detailId}`
        );

        const data = await result.json();
        console.log(data, "this is my data");
        // console.log(data.data.promotion, "this is my data");
        setDetailData(data.data.promotion);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [detailId]);

  return (
    <div className="">
      <p className="text-red-500 mt-10">Detail ID: {detailId}</p>
      <div className="w-full h-auto pt-20 mb-20">
        <div className="flex flex-col py-10 mx-5 md:mx-10 lg:mx-20">
          <div className="w-full h-auto flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <div className="smallBack">Financial articles</div>
              <p className="text-[12px] text-gray-600">12 min</p>
            </div>
            <h1 className="text-[40px] font-bold">{detailData.title}</h1>
            {/* <p className="text-gray-400">{detailData.}</p> */}
            {/* <img src={post?.src} className="w-full h-full mt-5 rounded-lg" /> */}

            <div className="flex lg:flex-row md:flex-row sm:flex-col sm:gap-5 mt-5 items-center justify-between">
              <div className="flex flex-row gap-20">
                <div className="flex flex-col">
                  <p className="bankName">Writeen by</p>
                  <p className="text-gray-900 text-[18px] font-semibold">
                    {"Meng Lavy"}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="bankName">Published on</p>
                  <p className="text-gray-900 text-[18px] font-semibold">
                    {detailData.download_date}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-1 items-center border-2 border-gray-300 w-[120px] h-[40px] rounded-lg justify-center">
                  <FiCopy />
                  <p>Copy link</p>
                </div>
                <div className="flex border-2 border-gray-300 w-[40px] h-[40px] rounded-lg">
                  <BsFacebook
                    size={20}
                    color="gray"
                    className="mx-auto my-auto"
                  />
                </div>
                <div className="flex border-2 border-gray-300 w-[40px] h-[40px] rounded-lg">
                  <BsTwitter
                    size={20}
                    color="gray"
                    className="mx-auto my-auto"
                  />
                </div>
                <div className="flex border-2 border-gray-300 w-[40px] h-[40px] rounded-lg">
                  <BsInstagram
                    size={20}
                    color="gray"
                    className="mx-auto my-auto"
                  />
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row md:flex-col sm:flex-col sm:gap-5 mt-10">
              <div className="flex lg:w-2/3 md:w-2/3 sm:w-full flex-col pr-20 sm:pr-0 gap-2">
                <h1 className="promotionName">Introduction</h1>
                <p className="text-gray-600 -mt-5">{detailData.content}</p>
                <img
                  src={detailData.image}
                  className="w-full h-full mt-5 rounded-lg"
                />
                {/* <p className="text-[12px] text-gray-600">
                  {detailData.imgSource}
                </p> */}
                {/* <p className="font-semibold">{post?.slag}</p> */}
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="/images/lavy3.png"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="p-name">{"Hak Vichet"}</p>
                    <p className="p-date">{detailData.download_date}</p>
                  </div>
                </div>
                {/* <p className="text-gray-600 mt-4">{post?.secondInfo}</p> */}
                {/* <div className="flex flex-col gap-1 ">
                  <h2 className="promotionName">{post?.title2}</h2>
                  <p className="text-gray-600">{post?.description2}</p>
                </div>
                <div className="flex flex-col gap-1 -mt-2">
                  <h2 className="promotionName mt-4">{post?.title3}</h2>
                  <p className="text-gray-600">{post?.description3}</p>
                </div> */}
                {/* <img
                  src={post?.src2}
                  className="w-full h-full mt-5 rounded-lg"
                />
                <div className="w-full bg-gray-100 rounded-lg px-5 py-10">
                  <h1 className="promotionName">{post?.conclusion}</h1>
                  <p className="text-gray-600">{post?.conclusionText}</p>
                </div> */}
              </div>
              <div className="flex lg:w-1/3 md:w-2/5 sm:w-full ml-10 sm:ml-0">
                <div className="flex w-full lg:max-h-[450px] bg-gray-200 border-2 border-gray-300 rounded-lg">
                  <div className="flex flex-col mx-8 my-8">
                    <div className="flex w-[50px] h-[50px] border-2 border-gray-300 rounded-lg bg-white">
                      <RiSendPlaneLine className="mx-auto my-auto w-[25px] h-[25px] text-gray-500" />
                    </div>
                    <div className="flex flex-col w-full">
                      <h1 className="promotionName mt-8">Weekly newsletter</h1>
                      <p className="post-description">
                        No spam. Just the latest releases and tips, interesting
                        artiles, and exclusive interviews in your inbox every
                        week.
                      </p>
                      <input
                        type="text"
                        className="input-btn mt-8"
                        placeholder="Enter your email"
                      />
                      <p className="text-[15px] text-gray-500 mt-4">
                        Read about our privacy policy
                      </p>
                      <div className="flex redButton items-center justify-center mt-4">
                        Subscibe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sect6 flex flex-col gap-16 py-16">
              <div className="sect6-div1 flex flex-col sm:flex-col sm:items-start md:flex  md:flex-row md:justify-between md:items-start pt-2.5 gap-x-[400px]">
                <div className="">
                  <p className="text-red-600 text-sm sm:text-sm md:text-base font-semibold mb-2 sm:mb-2 md:mb-3">
                    Our Promotions
                  </p>
                  <p className="text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl mb-5">
                    Lasted promotions
                  </p>
                  <p className="text-gray-600 text-lg sm:text-lg md:text-xl font-normal">
                    Our platform keeps you updated on the most current and
                    exciting promotions from banks and financial institutions in
                    Cambodia.
                  </p>
                </div>
                <div className=" flex-col flex-grow-0 flex-shrink-0 items-center hidden sm:hidden md:block">
                  <div className="text-white font-semibold text-base py-3 px-5 bg-red-500 rounded-lg hover:bg-red-600">
                    View more
                  </div>
                </div>
              </div>
              {/* <div className="sect6-div2 flex flex-col sm:flex-col md:flex-row justify-around gap-8">
                {detailData.data.promotion.((data, i) => (
                  <div key={index} className="promo1 flex flex-col basis-full">
                    <Image
                      src={data.img}
                      alt="seagame-banner"
                      width={384}
                      height={240}
                      className="w-auto h-auto mb-6"
                    />
                    <div className="flex flex-col">
                      <p className="bankName">{data.bankName}</p>
                      <div className="flex flex-row items-start justify-between">
                        <p className="promotionName">{data.promoName}</p>
                        <div>
                          <Image
                            src="/images/go-icon.png"
                            alt="go icon"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <p className="promotionContent">{data.promoContent}</p>
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="flex justify-center items-center sm:block md:hidden">
                <div className="text-white font-semibold text-base py-3 px-[180px] sm:px-[180px] md:px-5 bg-red-500 rounded-lg hover:bg-red-600">
                  View more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoDetails;
