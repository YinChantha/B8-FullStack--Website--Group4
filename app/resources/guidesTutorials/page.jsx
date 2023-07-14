"use client";

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";
import posts from "./Posts";
import AllPosts from "./AllPosts";
import ReactPaginate from "react-paginate";
import Faq from "@/app/components/Faq";

const GuidesAndTutorials = () => {
  const itemsPerPage = 5;
  const pageRangeDisplayed = 3;
  const marginPagesDisplayed = 1;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = AllPosts?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil((AllPosts?.length || 0) / itemsPerPage);

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    const newOffset = selectedPage * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="max-w-screen mx-auto px-5 py-20 md:mx-10">
        <div className="flex flex-col items-center justify-center gap-4 mt-10">
          <p className="bankName">Our financial articles</p>
          <h1 className="text-[40px] font-bold text-center">
            The lastest writings form our website export
          </h1>
          <div className="flex max-w-[600px] justify-center">
            <p className="text-gray-400 text-center">
              Subscribe to learn about new product features, the latest in
              technology, solutions, and updates.
            </p>
          </div>
          <div className="flex flex-row gap-2 border-2 border-gray-200 rounded-lg p-1 w-[300px] items-center">
            <GoSearch size={15} color="gray" className="ml-2" />
            <p className="text-[13px] text-gray-500">Search</p>
          </div>
        </div>

        <div className="flex flex-col w-full h-full mt-20 mb-5">
          <h1 className="promotionName">Recent blog posts</h1>
          <div className="flex w-full h-full flex-col md:flex-row mt-5">
            {posts[0] && (
              <div
                key={posts.id}
                className="flex md:w-1/2 items-center justify-center lg:mb-0 md:mb-0 sm:mb-5"
              >
                <div className="flex flex-col w-full h-full mx-auto sm:gap-2">
                  <img
                    src={posts[0].src}
                    className="lg:w-full lg:h-full md:w-full md:h-full object-cover rounded-lg"
                  />
                  <p className="bankName">{posts[0].date}</p>
                  <div className="flex flex-row items-center justify-between -mt-2">
                    <h1 className="promotionName">{posts[0].title}</h1>
                    <div>
                      <FiArrowUpRight className="w-[25px] h-[25px] text-gray-800" />
                    </div>
                  </div>
                  <p className="post-description -mt-4">
                    {posts[0].description}
                  </p>
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={posts[0].publicer.src}
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="p-name">{posts[0].publicer.name}</p>
                      <p className="p-date">{posts[0].publicer.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-col md:w-1/2 md:ml-6 gap-5">
              {posts.slice(1, 3).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-row lg:flex-row md:flex-row sm:flex-col gap-4"
                >
                  <div className="flex lg:w-[1000px] lg:h-[230px] gap-4">
                    <img
                      src={item.src}
                      className="lg:w-full lg:h-full md:w-[500px] md:h-[230px] sm:w-full sm:h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="bankName">{item.date} </p>
                    <div className="flex flex-row items-center justify-between -mt-2">
                      <h1 className="promotionName">{item.title}</h1>
                      <div>
                        <FiArrowUpRight className="w-[25px] h-[25px] text-gray-800" />
                      </div>
                    </div>
                    <p className="post-description -mt-4">{item.description}</p>
                    <div className="flex flex-row gap-2 items-center">
                      <img
                        src={posts[0].publicer.src}
                        className="w-[40px] h-[40px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="p-name">{posts[0].publicer.name}</p>
                        <p className="p-date">{posts[0].publicer.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h1 className="promotionName mt-20">All blogs posts</h1>
          <div className="flex flex-col justify-center mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1 bg-gray-100 rounded-lg">
                <div className="flex flex-col mx-8 my-8">
                  <div className="flex w-[50px] h-[50px] border-2 border-gray-300 rounded-lg bg-white">
                    <RiSendPlaneLine className="mx-auto my-auto w-[25px] h-[25px] text-gray-500" />
                  </div>
                  <h1 className="promotionName mt-8">Weekly newsletter</h1>
                  <p className="post-description">
                    No spam. Just the latest releases and tips, interesting
                    artiles, and exclusive interviews in your inbox every week.
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
              {currentItems.map((post) => (
                <Link
                  href={`/resources/guidesTutorials/allpostTutor/${post.id}`}
                  key={post.id}
                  className="flex flex-col gap-0"
                >
                  <div className="flex ">
                    <img
                      src={post.src}
                      className="lg:w-full lg:h-full md:full md:h-[230px] sm:w-full sm:h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="bankName mt-3">{post.date}</p>
                  <div className="title-icon">
                    <h1 className="promotionName">{post.title}</h1>
                    <div>
                      <FiArrowUpRight className="w-[25px] h-[25px] text-gray-800" />
                    </div>
                  </div>
                  <p className="post-description -mt-2">{post.description}</p>
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={post.publicer.src}
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div className="flex flex-col mt-5">
                      <p className="p-name">{post.publicer.name}</p>
                      <p className="p-date">{post.publicer.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
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
          </div>
        </div>
        <Faq />
      </div>
    </>
  );
};

export default GuidesAndTutorials;
