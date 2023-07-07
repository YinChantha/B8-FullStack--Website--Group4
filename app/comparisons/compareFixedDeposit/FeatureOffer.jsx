"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Imageshow from "../../components/ImageDisplay";
import ReactPaginate from "react-paginate";
import { getAllfixedeposits } from "../../api/fixeddeposits/getAlldeposits";
import { useRecoilState } from "recoil";
import { currentItemsAtom, dataAtom } from "@/app/atoms/Data";

const FeatureOffer = () => {
  const [data, setData] = useRecoilState(dataAtom);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 4;
  const pageRangeDisplayed = 3;
  const marginPagesDisplayed = 1;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  // const [currentItems, setCurrentItems] = useRecoilState(currentItemsAtom);

  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil((data?.length || 0) / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllfixedeposits();
        setData(res);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [setData]);
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    const newOffset = selectedPage * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-full mt-32">
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt="loading"
          />
        </div>
      ) : (
        <>
          {data &&
            currentItems.map((bank, index) => (
              <div
                key={index}
                className="flex gap-8 border-1 border-gray-200 rounded-lg shadow-md p-8 mt-6"
              >
                <div>
                  <img src={bank.logo} alt={bank.bank} className="w-24 h-24" />
                </div>
                <div className="w-full">
                  <div>
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-col gap-[4px]">
                        <h1 className="companyName">{bank.bank}</h1>
                        <p className="text-[#667085] text-sm">
                          {bank.location}
                        </p>
                        <div className="flex flex-row items-center gap-[11px]">
                          <p className="text-[#344054] text-base font-medium">
                            5.0
                          </p>
                          {/* <Imageshow count={bank.rate} /> */}
                        </div>
                      </div>
                      <div>
                        <button className="redButton">Product details</button>
                      </div>
                    </div>
                    <div className="mt-8 flex gap-8">
                      <div>
                        <h1 className="offerDetail">{bank.term}</h1>
                        <p className="offerTitle">term</p>
                      </div>
                      <div>
                        <h1 className="offerDetail">{bank.currency}</h1>
                        <p className="offerTitle">Type</p>
                      </div>
                      <div>
                        <h1 className="offerDetail">{bank.rate}</h1>
                        <p className="offerTitle">APR</p>
                      </div>
                      {/* <div>
                        <h1 className="offerDetail">{bank.totalReturn}</h1>
                        <p className="offerTitle">Min. balance for APY</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </>
      )}
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
    </div>
  );
};

export default FeatureOffer;
