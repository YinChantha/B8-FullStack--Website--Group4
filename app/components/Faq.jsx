"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const Faq = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  return (
    <section className="sect5 flex flex-col justify-center items-center py-16 sm:py-16 md:py-24 gap-y-12 sm:gap-y-12 md:gap-y-16 px-4 sm:px-4 md:px-28">
      <div className="sect5-div1 text-center">
        <p className="mb-4 sm:mb-4 md:mb-5 text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl">
          Frequently asked questions
        </p>
        <p className="text-gray-500 text-lg sm:text-lg md:text-xl font-normal">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div className="sect5-div2 flex flex-col gap-y-8">
        <div className="question1">
          <div className="flex flex-start items-start sm:flex-start sm:items-start justify-between md:items-center mb-2 gap-x-2 sm:gap-x-2 md:gap-x-56">
            <p className="text-gray-900 font-medium text-lg ">
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

          <div className="flex justify-start items-start max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
            <div className="max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto ">
              {showAnswer1 ? (
                <p className="text-gray-500 text-base font-normal w-auto ">
                  ProAdvisor offers a range of services to support your
                  financial decisions. It provides loan comparison tools to help
                  you find the best loan options, savings management features to
                  help you save and grow your money, personalized financial
                  advice based on your unique needs, and access to educational
                  resources to enhance your financial knowledge.
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <hr className="border-b-1 border-gray-100" />
        <div className="question2">
          <div className="flex flex-start items-start sm:flex-start sm:items-start justify-between md:items-center mb-2 gap-x-2 sm:gap-x-2 md:gap-x-56">
            <p className="text-gray-900 font-medium text-lg ">
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

          <div className="flex justify-start items-start max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
            <div className="max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto ">
              {showAnswer2 ? (
                <p className="text-gray-500 text-base font-normal w-auto ">
                  ProAdvisor offers a range of services to support your
                  financial decisions. It provides loan comparison tools to help
                  you find the best loan options, savings management features to
                  help you save and grow your money, personalized financial
                  advice based on your unique needs, and access to educational
                  resources to enhance your financial knowledge.
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <hr className="border-b-1 border-gray-100" />
        <div className="question3">
          <div className="flex flex-start items-start sm:flex-start sm:items-start justify-between md:items-center mb-2 gap-x-2 sm:gap-x-2 md:gap-x-56">
            <p className="text-gray-900 font-medium text-lg ">
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

          <div className="flex justify-start items-start max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
            <div className="max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
              {showAnswer3 ? (
                <p className="text-gray-500 text-base font-normal w-auto ">
                  ProAdvisor offers a range of services to support your
                  financial decisions. It provides loan comparison tools to help
                  you find the best loan options, savings management features to
                  help you save and grow your money, personalized financial
                  advice based on your unique needs, and access to educational
                  resources to enhance your financial knowledge.
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <hr className="border-b-1 border-gray-100" />
        <div className="question4">
          <div className="flex flex-start items-start sm:flex-start sm:items-start justify-between md:items-center mb-2 gap-x-2 sm:gap-x-2 md:gap-x-56">
            <p className="text-gray-900 font-medium text-lg ">
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

          <div className="flex justify-start items-start max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
            <div className="max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
              {showAnswer4 ? (
                <p className="text-gray-500 text-base font-normal w-auto ">
                  ProAdvisor offers a range of services to support your
                  financial decisions. It provides loan comparison tools to help
                  you find the best loan options, savings management features to
                  help you save and grow your money, personalized financial
                  advice based on your unique needs, and access to educational
                  resources to enhance your financial knowledge.
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <hr className="border-b-1 border-gray-100" />
        <div className="question5">
          <div className="flex flex-start items-start sm:flex-start sm:items-start justify-between md:items-center mb-2 gap-x-2 sm:gap-x-2 md:gap-x-56">
            <p className="text-gray-900 font-medium text-lg ">
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

          <div className="flex justify-start items-start max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
            <div className="max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
              {showAnswer5 ? (
                <p className="text-gray-500 text-base font-normal w-auto ">
                  ProAdvisor offers a range of services to support your
                  financial decisions. It provides loan comparison tools to help
                  you find the best loan options, savings management features to
                  help you save and grow your money, personalized financial
                  advice based on your unique needs, and access to educational
                  resources to enhance your financial knowledge.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="sect6-div3 px-5 sm:px-5 md:px-80 py-8 flex flex-col justify-center items-center gap-y-6 sm:gap-y-6 md:gap-y-8 bg-gray-50 rounded-2xl">
        <Image
          src="/images/avatar-group.png"
          alt="avatar group"
          width={120}
          height={56}
          className="w-auto h-auto"
        />
        <div className="text-center min-w-[303px]">
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
  );
};

export default Faq;
