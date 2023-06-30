"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { PostItems } from "./PostItems";
import { FiArrowUpRight } from "react-icons/fi";
import { AllPostItems } from "./AllPostsItems";
import { RiSendPlaneLine } from "react-icons/ri";
import { Fahkwang } from "next/font/google";
import Faq from "@/app/components/Faq";

export const getStatus = async () => {
  const res = await fetch("");
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const FinancialArticles = () => {
  return (
    <>
      <div className="max-w-screen mx-auto px-5 pt-20 md:mx-20">
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
            {PostItems[0] && (
              <Link
                href={`/resources/financialArticles/popPost/1`}
                key={PostItems.id}
                className="flex md:w-1/2 items-center justify-center lg:mb-0 md:mb-0 sm:mb-5"
                as="/resources/financialArticles/popPost/1"
              >
                <div className="flex flex-col w-full h-full mx-auto sm:gap-2">
                  <img
                    src={PostItems[0].src}
                    className="lg:w-full lg:h-full md:w-full md:h-full object-cover rounded-lg"
                    width="auto"
                    height="auto"
                  />
                  <p className="bankName">{PostItems[0].date}</p>
                  <div className="flex flex-row items-center justify-between -mt-2">
                    <h1 className="promotionName">{PostItems[0].title}</h1>
                    <div>
                      <FiArrowUpRight className="w-[25px] h-[25px] text-gray-800" />
                    </div>
                  </div>
                  <p className="post-description -mt-4">
                    {PostItems[0].description}
                  </p>
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={PostItems[0].publicer.src}
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="p-name">{PostItems[0].publicer.name}</p>
                      <p className="p-date">{PostItems[0].publicer.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            )}
            <div className="flex flex-col md:w-1/2 md:ml-6 gap-5">
              {PostItems.slice(1, 3).map((item) => (
                <Link
                  href={`/resources/financialArticles/popPost/${item.id}`}
                  key={item.id}
                  className="flex flex-row lg:flex-row md:flex-row sm:flex-col gap-4"
                  as="/resources/financialArticles/popPost/1"
                >
                  <div className="flex lg:w-[1000px] lg:h-[230px] gap-4">
                    <img
                      src={item.src}
                      className="lg:w-full lg:h-full md:w-[500px] md:h-auto sm:w-full sm:h-full object-cover rounded-lg"
                      width="auto"
                      height="auto"
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
                        src={item.publicer.src}
                        className="w-[40px] h-[40px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="p-name">{item.publicer.name}</p>
                        <p className="p-date">{item.publicer.date}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <h1 className="promotionName mt-20 ">All blogs posts</h1>
          <div className="flex justify-center mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex w-full bg-gray-200 border-2 border-gray-300 rounded-lg">
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
                    className="p-2 rounded-lg mt-8"
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
              {AllPostItems.map((post) => (
                <Link
                  href={`/resources/financialArticles/allPost/${post.id}`}
                  key={post.id}
                  className="flex flex-col gap-0"
                  as="/resources/financialArticles/allPost/1"
                >
                  <div className="flex ">
                    <img
                      src={post.src}
                      className="lg:w-full lg:h-full md:full md:h-auto sm:w-full sm:h-full object-cover rounded-lg"
                      width="auto"
                      height="auto"
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
                    <Image
                      src={post.publicer.src}
                      alt="Picture of the author"
                      className="rounded-full"
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col mt-5">
                      <p className="p-name">{post.publicer.name}</p>
                      <p className="p-date">{post.publicer.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Faq />
      </div>
    </>
  );
};

export default FinancialArticles;
