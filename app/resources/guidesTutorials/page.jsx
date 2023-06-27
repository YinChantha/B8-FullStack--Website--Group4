"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";
import posts from "./Posts";
import AllPosts from "./AllPosts";

const GuidesAndTutorials = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  return (
    <>
      <div className="max-w-screen mx-auto px-5 py-10 md:mx-10">
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
          <div className="flex justify-center mt-5">
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
              {AllPosts.map((post) => (
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
          </div>
        </div>

        <section className="sect5 flex flex-col justify-center items-center py-24 gap-y-16 ">
          <div className="sect5-div1 px-64 text-center">
            <p className="mb-5 text-gray-900 font-semibold text-4xl">
              Frequently asked questions
            </p>
            <p className="text-gray-500 text-xl font-normal">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="sect5-div2 flex flex-col gap-y-8">
            <div className="question1 m-auto w-[53rem] ">
              <div className="flex  w-[53rem] justify-between items-center mb-2">
                <p className="text-gray-900 text-center font-medium text-lg ">
                  How can ProAdvisor help me with my financial decisions?
                </p>
                <Image
                  src={
                    showAnswer1
                      ? "/images/icon-unwrap.png"
                      : "/images/icon-wrap.png"
                  }
                  alt="icon-unwrap"
                  width={24}
                  height={24}
                  className="w-auto h-auto ml-4 cursor-pointer"
                  onClick={() => setShowAnswer1(!showAnswer1)}
                />
              </div>

              <div className="flex justify-start items-start w-full">
                <div className="w-[45rem] h-auto ">
                  {showAnswer1 ? (
                    <p className="text-gray-500 text-base font-normal w-auto ">
                      ProAdvisor offers a range of services to support your
                      financial decisions. It provides loan comparison tools to
                      help you find the best loan options, savings management
                      features to help you save and grow your money,
                      personalized financial advice based on your unique needs,
                      and access to educational resources to enhance your
                      financial knowledge.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <hr className="border-b-1 border-gray-100" />
            <div className="question2 m-auto w-[53rem] ">
              <div className="flex  w-[53rem] justify-between items-center mb-2">
                <p className="text-gray-900 text-center font-medium text-lg ">
                  Is ProAdvisor only available in Cambodia?
                </p>
                <Image
                  src={
                    showAnswer2
                      ? "/images/icon-unwrap.png"
                      : "/images/icon-wrap.png"
                  }
                  alt="icon-unwrap"
                  width={24}
                  height={24}
                  className="w-auto h-auto ml-4 cursor-pointer"
                  onClick={() => setShowAnswer2(!showAnswer2)}
                />
              </div>

              <div className="flex justify-start items-start w-full">
                <div className="w-[45rem] h-auto ">
                  {showAnswer2 ? (
                    <p className="text-gray-500 text-base font-normal w-auto ">
                      ProAdvisor offers a range of services to support your
                      financial decisions. It provides loan comparison tools to
                      help you find the best loan options, savings management
                      features to help you save and grow your money,
                      personalized financial advice based on your unique needs,
                      and access to educational resources to enhance your
                      financial knowledge.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <hr className="border-b-1 border-gray-100" />
            <div className="question3 m-auto w-[53rem] ">
              <div className="flex  w-[53rem] justify-between items-center mb-2">
                <p className="text-gray-900 text-center font-medium text-lg ">
                  How secure is ProAdvisor?
                </p>
                <Image
                  src={
                    showAnswer3
                      ? "/images/icon-unwrap.png"
                      : "/images/icon-wrap.png"
                  }
                  alt="icon-unwrap"
                  width={24}
                  height={24}
                  className="w-auto h-auto ml-4 cursor-pointer"
                  onClick={() => setShowAnswer3(!showAnswer3)}
                />
              </div>

              <div className="flex justify-start items-start w-full">
                <div className="w-[45rem] h-auto ">
                  {showAnswer3 ? (
                    <p className="text-gray-500 text-base font-normal w-auto ">
                      ProAdvisor offers a range of services to support your
                      financial decisions. It provides loan comparison tools to
                      help you find the best loan options, savings management
                      features to help you save and grow your money,
                      personalized financial advice based on your unique needs,
                      and access to educational resources to enhance your
                      financial knowledge.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <hr className="border-b-1 border-gray-100" />
            <div className="question4 m-auto w-[53rem] ">
              <div className="flex  w-[53rem] justify-between items-center mb-2">
                <p className="text-gray-900 text-center font-medium text-lg ">
                  Can I trust the financial advice provided by ProAdvisor?
                </p>
                <Image
                  src={
                    showAnswer4
                      ? "/images/icon-unwrap.png"
                      : "/images/icon-wrap.png"
                  }
                  alt="icon-unwrap"
                  width={24}
                  height={24}
                  className="w-auto h-auto ml-4 cursor-pointer"
                  onClick={() => setShowAnswer4(!showAnswer4)}
                />
              </div>

              <div className="flex justify-start items-start w-full">
                <div className="w-[45rem] h-auto ">
                  {showAnswer4 ? (
                    <p className="text-gray-500 text-base font-normal w-auto ">
                      ProAdvisor offers a range of services to support your
                      financial decisions. It provides loan comparison tools to
                      help you find the best loan options, savings management
                      features to help you save and grow your money,
                      personalized financial advice based on your unique needs,
                      and access to educational resources to enhance your
                      financial knowledge.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <hr className="border-b-1 border-gray-100" />
            <div className="question5 m-auto w-[53rem] ">
              <div className="flex  w-[53rem] justify-between items-center mb-2">
                <p className="text-gray-900 text-center font-medium text-lg ">
                  How do I get started with ProAdvisor?
                </p>
                <Image
                  src={
                    showAnswer5
                      ? "/images/icon-unwrap.png"
                      : "/images/icon-wrap.png"
                  }
                  alt="icon-unwrap"
                  width={24}
                  height={24}
                  className="w-auto h-auto ml-4 cursor-pointer"
                  onClick={() => setShowAnswer5(!showAnswer5)}
                />
              </div>

              <div className="flex justify-start items-start w-full">
                <div className="w-[45rem] h-auto ">
                  {showAnswer5 ? (
                    <p className="text-gray-500 text-base font-normal w-auto ">
                      ProAdvisor offers a range of services to support your
                      financial decisions. It provides loan comparison tools to
                      help you find the best loan options, savings management
                      features to help you save and grow your money,
                      personalized financial advice based on your unique needs,
                      and access to educational resources to enhance your
                      financial knowledge.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="sect6-div3 px-80 py-8 flex flex-col justify-center items-center gap-y-8 bg-gray-50 rounded-2xl">
            <Image
              src="/images/avatar-group.png"
              alt="avatar group"
              width={120}
              height={56}
              className="w-auto h-auto"
            />
            <div className="text-center">
              <p className="text-gray-900 font-medium text-xl mb-2">
                Still have questions?
              </p>
              <p className="text-gray-500 text-lg font-normal">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
            </div>
            <button className="py-2.5 px-4.5 font-semibold text-base text-white bg-red-600 rounded-lg">
              Get in touch
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default GuidesAndTutorials;
