"use client";

import React from "react";
import { IoLogoNpm } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import data from "./dummydata/data";
import data from "./dummydata/data";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { promoDataAtom } from "./promoData";
import Faq from "../components/Faq";
import ReactPaginate from "react-paginate";
import axios from "axios";
// import { useRecoilState } from "recoil";

const Promotions = () => {
  // const router = useRouter();
  const [promotionData, setPromotionData] = useRecoilState(promoDataAtom);
  const [loading, setLoading] = useState(true);
  // console.log(promotionData, "this is my promotionData");
  // const promo = promotionData.data.promotions;

  // const handleClick = (index) => {
  //   router.push(`/promotions/${index}`);
  // };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await fetch("http://34.143.206.144:8080/promotion");
        const data = await result.json();
        setPromotionData(data.data.promotions);
        setLoading(false);
        // console.log(data.data.promotions, "result");
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // pagination

  // const [data, setData] = useRecoilState(dataAtom);
  // const [pageLoading, setPageLoading] = useState(true);
  const itemsPerPage = 6;
  const pageRangeDisplayed = 3;
  const marginPagesDisplayed = 1;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  // const [currentItems, setCurrentItems] = useRecoilState(currentItemsAtom);

  const currentItems = promotionData?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil((promotionData?.length || 0) / itemsPerPage);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getAllfixedeposits();
  //       setData(res);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [setData]);
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    const newOffset = selectedPage * itemsPerPage;
    setItemOffset(newOffset);
  };


  return (
    <div className="w-10/12 mx-auto mt-20">
      {/* header with getting email */}
      <div className="py-16 ">
        <h1 className="bankName text-center">Promotions</h1>
        <p className="promotionName text-center">
          Unlock Your Financial Potential with ProAdvisor's <br></br>Innovative
          Solutions
        </p>
        <p className="promotionContent mb-5 text-center">
          Our platform provides a comprehensive suite of cutting-edge tools and
          expert <br></br> guidance to empower you in making informed financial
          decisions.
        </p>
        <div className="flex justify-center gap-3">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-4/12 p-2"
            placeholder="Enter your email"
          />
          <button className="redButton">Subscribe</button>
        </div>
      </div>
      {/* Our promotion */}
      <div className="py-16 ">
        <h1 className="bankName text-center">Our Promotions</h1>
        <p className="promotionName text-center">
          Cutting-edge features for comparisons
        </p>
        <p className="promotionContent mb-5 text-center">
          We provide comprehensive and up-to-date information, empowering you to
          make <br></br> informed decisions based on your unique needs and
          preferences.
        </p>
      </div>
      {/* card */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-100 rounded-lg cursor-pointer p-1 flex flex-col"
            >
              <Image
                className="rounded-t-lg mb-5"
                src={item.img}
                alt=""
                width={1000}
                height={100}
              />

              <p className="bankName">{item.name}</p>
              <p className="promotionName">{item.title}</p>
              <p className="promotionContent mb-5">{item.article}</p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center gap-2 bankName">
                  Read more
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99999 13.3334L13.3333 10.0001M13.3333 10.0001L9.99999 6.66675M13.3333 10.0001H6.66666M18.3333 10.0001C18.3333 14.6025 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6025 1.66666 10.0001C1.66666 5.39771 5.39762 1.66675 9.99999 1.66675C14.6024 1.66675 18.3333 5.39771 18.3333 10.0001Z"
                      stroke="#E40109"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* promotion */}

      <div className="py-16 ">
        <h1 className="bankName text-center">Our Promotions</h1>
        <p className="promotionName text-center">
          Cutting-edge features for comparisons
        </p>
        <p className="promotionContent mb-5 text-center">
          We provide comprehensive and up-to-date information, empowering you to
          make <br></br> informed decisions based on your unique needs and
          preferences.
        </p>
      </div>
      {/* promotion card */}
      <div className="flex justify-center">
        {loading ? (
          <div className="flex justify-center items-center h-full mt-32">
            <img
              className="h-16 w-16"
              src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
              alt="loading"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-10">
            {currentItems.map((item, index) => (
              <Link
                href={`/promotions/${index}`}
                key={index}
                className="max-w-sm bg-white border border-gray-100 rounded-lg cursor-pointer p-1 flex flex-col"
                // onClick={() => handleClick(index)}
              >
                <div className="overflow-hidden h-[250px] ">
                  <img
                    className="rounded-t-lg mb-5 object-cover"
                    src={item.image}
                    alt="bank image"
                    // width={1000}
                    // height={100}
                  />
                </div>
                <div className="flex flex-row gap-1">
                  <p className="bankName">{item.name}</p>
                  <p className="bankName"> • {item.download_date}</p>
                </div>
                <p className="promotionName">{item.title}</p>
                <p
                  className="promotionContent mb-5 truncate mx-h-sm
                "
                >
                  {item.content}
                </p>
                <div className="mt-auto">
                  {" "}
                  <a
                    href="/landingPage"
                    className="inline-flex items-center gap-2 bankName"
                  >
                    Read more
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.99999 13.3334L13.3333 10.0001M13.3333 10.0001L9.99999 6.66675M13.3333 10.0001H6.66666M18.3333 10.0001C18.3333 14.6025 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6025 1.66666 10.0001C1.66666 5.39771 5.39762 1.66675 9.99999 1.66675C14.6024 1.66675 18.3333 5.39771 18.3333 10.0001Z"
                        stroke="#E40109"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={pageRangeDisplayed}
          marginPagesDisplayed={marginPagesDisplayed}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="flex justify-center"
          pageClassName="inline-block px-2 py-1 mx-1 text-gray-700 cursor-pointer"
          activeClassName="bg-blue-500 text-white"
          previousClassName="inline-block px-2 py-1 mx-1 text-gray-700 cursor-pointer"
          nextClassName="inline-block px-2 py-1 mx-1 text-gray-700 cursor-pointer"
          breakClassName="inline-block px-2 py-1 mx-1 text-gray-700"
        />
      </div>
      <Faq />
    </div>
  );
};

export default Promotions;
