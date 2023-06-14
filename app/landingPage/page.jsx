"use client";
import React, { useState } from "react";
import Image from "next/image";

const LandingPage = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  return (
    <div className="landing-page">
      <section className="sect1 border-b-1 border-gray-100 pb-24 ">
        <div className="landing-sect1 flex flex-col justify-center items-center px-52 pt-24 border-b-1 border-gray-100">
          <div className="flex flex-row justify-center items-center bg-red-50 font-medium text-sm gap-3 py-1.5 pl-1 pr-2.5 rounded-2xl shrink-0">
            <p className="text-white bg-red-500 px-2.5 py-0.5 rounded-2xl shrink-0">
              New feature
            </p>
            <div className="flex flex-row gap-1 shrink-0">
              <p className="text-red-700 shrink-0">
                Let’s try our ChatGPT Integration
              </p>
              <Image
                src="/images/arrow-right.png"
                alt="arrow-right icon"
                width={15}
                height={15}
                className="shrink-0 w-auto h-auto"
              />
            </div>
          </div>
          <p className="text-center text-gray-900 font-semibold text-4xl mt-5">
            Unlock Your Financial Potential with ProAdvisor's Innovative
            Solutions
          </p>
          <p className="text-center text-gray-600 font-normal text-xl mt-6">
            Our platform provides a comprehensive suite of cutting-edge tools
            and expert guidance to empower you in making informed financial
            decisions.
          </p>
          <div className="btn flex flex-row justify-center items-center font-semibold text-lg pt-12 gap-x-3.5">
            <button className="learn-more text-gray-700 rounded-lg px-5 py-3 border-gray-300 border-2 hover:bg-gray-50">
              Learn more
            </button>
            <button className="get-started text-white bg-red-500 rounded-lg px-5 py-3 hover:bg-red-600">
              Get started
            </button>
          </div>
          <Image
            src="/images/laptop-frame.png"
            alt="laptop-frame"
            width={796}
            height={464}
            className="pt-16 w-auto h-auto"
          />
        </div>
        <div className="list-banks flex flex-col justify-center items-center mt-24 px-28">
          <p className="font-normal text-gray-600 text-center">
            The trusted provider over 150+ companies from Cambodia, of accuracy
            rates and financial information
          </p>
          <div className="bank flex flex-row justify-center items-center pt-8 gap-x-12">
            <Image
              src="/images/vattanac-bank.png"
              alt="vattanac-bank logo"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
            <Image
              src="/images/acleda-bank.png"
              alt="acleda-bank logo"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
            <Image
              src="/images/cambodia-public-bank.png"
              alt="cambodia-public-bank logo"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
            <Image
              src="/images/chipmong-bank.png"
              alt="chipmong-bank logo"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
            <Image
              src="/images/sathapana-bank.png"
              alt="sathapana-bank logo"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </section>
      <section className="sect2 border-b-1 border-gray-100 py-24 px-20 ">
        <div className="container-1">
          <div className="mx-64 m-auto ">
            <p className="text-red-600 text-sm font-medium text-center">
              Features
            </p>
            <p className="text-gray-900 font-semibold text-4xl text-center pt-4">
              Cutting-edge features for comparisons
            </p>
            <p className="text-gray-500 font-normal text-center pt-5">
              We provide comprehensive and up-to-date information, empowering
              you to make informed decisions based on your unique needs and
              preferences.
            </p>
          </div>
          <div className="mockup relative px-8  mt-16 l-68 t-0 ">
            <Image
              src="/images/screen-mockup.png"
              alt="screen-mockup"
              width={768}
              height={512}
              className="z-0 m-auto w-auto h-auto"
            />
            <Image
              src="/images/iphone-mockup.png"
              alt="iphone-mockup"
              width={244}
              height={497.34}
              className="z-10 absolute top-16 left-38 w-auto h-auto"
            />
          </div>
          <div className="mt-24 mx-8 flex flex-row justify-center items-center gap-x-8">
            <div className="div1 flex flex-col justify-center items-center gap-y-5 ">
              <div className="bg-red-100 rounded-4xl w-12 h-12  border-8 border-primary-25 flex justify-center items-center">
                <Image
                  src="/images/coin-swap.png"
                  alt="Primary-Icons-coins-swap-02"
                  width={24}
                  height={24}
                  className="w-auto h-auto"
                />
              </div>

              <div className="text-center">
                <p className=" text-gray-900 font-medium text-xl">
                  Compare Loans
                </p>
                <p className="mt-2 text-gray-500 text-base font-normal">
                  Compare different loan options to make an informed decision.
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <p className="text-red-600 font-semibold text-base">
                  Learn more
                </p>
                <Image
                  src="/images/red-arrow-right.png"
                  alt="red-arrow-right"
                  width={20}
                  height={20}
                  className="w-auto h-auto"
                />
              </div>
            </div>
            <div className=" div2 flex flex-col justify-center items-center gap-y-5 ">
              <div className="bg-red-100 rounded-4xl w-12 h-12  border-8 border-primary-25 flex justify-center items-center">
                <Image
                  src="/images/target.png"
                  alt="target icon"
                  width={24}
                  height={24}
                  className="w-auto h-auto"
                />
              </div>

              <div className="text-center">
                <p className=" text-gray-900 font-medium text-xl">
                  Compare Saving Accounts
                </p>
                <p className="mt-2 text-gray-500 text-base font-normal">
                  Explore a wide range of savings accounts & find the best
                  option for you.
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <p className="text-red-600 font-semibold text-base">
                  Learn more
                </p>
                <Image
                  src="/images/red-arrow-right.png"
                  alt="red-arrow-right"
                  width={20}
                  height={20}
                  className="w-auto h-auto"
                />
              </div>
            </div>
            <div className="div3 flex flex-col justify-center items-center gap-y-5 ">
              <div className="bg-red-100 rounded-4xl w-12 h-12  border-8 border-primary-25 flex justify-center items-center">
                <Image
                  src="/images/dollar.png"
                  alt="dollar icon"
                  width={24}
                  height={24}
                  className="w-auto h-auto"
                />
              </div>

              <div className="text-center">
                <p className=" text-gray-900 font-medium text-xl">
                  Compare Fixed Deposit Accounts
                </p>
                <p className="mt-2 text-gray-500 text-base font-normal">
                  Maximize your savings with fixed deposit account comparison.
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <p className="text-red-600 font-semibold text-base">
                  Learn more
                </p>
                <Image
                  src="/images/red-arrow-right.png"
                  alt="red-arrow-right"
                  width={20}
                  height={20}
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sect3 pb-24">
        <div className="container1 px-64 text-center my-16">
          <p className=" text-red-600 text-base font-semibold mb-3">Location</p>
          <p className="font-semibold text-4xl text-gray-900 mb-5">
            Compare your finance over Cambodia
          </p>
          <p className="text-lg font-normal text-gray-600">
            Our platform offers a powerful financial comparison tool that allows
            you to easily compare various financial products and services
            offered by different banks in Cambodia.
          </p>
        </div>
        <Image
          src="/images/map-dot.png"
          alt="map dot"
          width={1205}
          height={591}
          className="w-auto h-auto px-100"
        />
        {/* <Image /> */}
      </section>
      <section className="sect4 bg-gray-50 flex flex-col justify-center items-center py-24 px-28 gap-y-8">
        <Image
          src="/images/sathapana-bank.png"
          alt="sathapana-bank logo"
          width={181}
          height={48}
          className="w-auto h-auto"
        />
        <p className="text-gray-900 font-medium text-5xl text-center">
          Their powerful tools and expert insights have revolutionized the way I
          approach my finances.
        </p>
        <div className="flex flex-col justify-center items-center flex-grow-0">
          <Image
            src="/images/Avatar.png"
            alt="avatar"
            width={64}
            height={64}
            className="w-auto h-auto "
          />
          <p className="text-gray-900 text-lg font-medium mt-4">
            Soun Chansreyda
          </p>
          <p className="text-gray-600 font-normal text-base mt-1">
            Project Manager, Sathapana Bank
          </p>
        </div>
      </section>
      <section className="sect5 flex flex-col justify-center items-center py-24 px-20 gap-y-16 ">
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
                    features to help you save and grow your money, personalized
                    financial advice based on your unique needs, and access to
                    educational resources to enhance your financial knowledge.
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
                    features to help you save and grow your money, personalized
                    financial advice based on your unique needs, and access to
                    educational resources to enhance your financial knowledge.
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
                    features to help you save and grow your money, personalized
                    financial advice based on your unique needs, and access to
                    educational resources to enhance your financial knowledge.
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
                    features to help you save and grow your money, personalized
                    financial advice based on your unique needs, and access to
                    educational resources to enhance your financial knowledge.
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
                    features to help you save and grow your money, personalized
                    financial advice based on your unique needs, and access to
                    educational resources to enhance your financial knowledge.
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
      <section className="sect6 flex flex-col gap-16 py-16 px-17 border-b-1 border-gray-100 ">
        <div className="sect6-div1 flex flex-row items-start justify-between pt-2.5 px-8 gap-96">
          <div className="">
            <p className="text-red-600 text-base font-semibold mb-3">
              Our Promotions
            </p>
            <p className="text-gray-900 font-semibold text-4xl mb-5">
              Lasted promotions
            </p>
            <p className="text-gray-600 text-xl font-normal">
              Our platform keeps you updated on the most current and exciting
              promotions from banks and financial institutions in Cambodia.
            </p>
          </div>
          <div className="flex flex-col flex-grow-0 flex-shrink-0 items-center">
            <button className="text-white font-semibold text-base py-3 px-5 bg-red-500 rounded-lg ">
              View more
            </button>
          </div>
        </div>
        <div className="sect6-div2 flex flex-row justify-around gap-8 px-8 ">
          <div className="promo1 flex flex-col basis-full">
            <Image
              src="/images/seagame-banner.png"
              alt="seagame-banner"
              width={384}
              height={240}
              className="w-auto h-auto mb-6"
            />
            <div className="flex flex-col">
              <p className="bankName">ABA Bank</p>
              <div className="flex flex-row items-start justify-between">
                <p className="promotionName">Cambodia Sea Games</p>
                <button>
                  <Image
                    src="/images/go-icon.png"
                    alt="go icon"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <p className="promotionContent">
                សូមអបអរសាទរអ្នកឈ្នះទាំង 50 រូប! លោកអ្នកបានឈ្នះសំបុត្រ
                ចូលរួមពិធីបើកព្រឹត្តិការណ៍ស៊ីហ្គេម និងអាស៊ានប៉ារ៉ាហ្គេម ឆ្នាំ
                2023 ចំនួន 2 សន្លឹក។
              </p>
            </div>
          </div>
          <div className="promo2 flex flex-col basis-full">
            <Image
              src="/images/foodorder-banner.png"
              alt="foodorder-banner"
              width={384}
              height={240}
              className="w-auto h-auto mb-6"
            />
            <div className="flex flex-col">
              <p className="bankName">Vattanac Bank</p>
              <div className="flex flex-row items-start justify-between">
                <p className="promotionName">Food Order Up to 5$</p>
                <button>
                  <Image
                    src="/images/go-icon.png"
                    alt="go icon"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <p className="promotionContent">
                កាន់តែងាយស្រួល និងរហ័សជាមួយ KHQR របស់ធនាគារ វឌ្ឍនៈ!
                អតិថិជនអាចផ្ញើ ឬទទួលប្រាក់ពីធនាគារដែលជាសមាជិកបាគងនៅ
                ទូទាំងប្រទេសកម្ពុជា។
              </p>
            </div>
          </div>
          <div className="promo3 flex flex-col basis-full">
            <Image
              src="/images/savingAcc-banner.png"
              alt="savingAcc-banner"
              width={384}
              height={240}
              className="w-auto h-auto mb-6"
            />
            <div className="flex flex-col">
              <p className="bankName">Wing Bank</p>
              <div className="flex flex-row items-start justify-between">
                <p className="promotionName">Open Saving Account</p>
                <button>
                  <Image
                    src="/images/go-icon.png"
                    alt="go icon"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <p className="promotionContent">
                ប្រូម៉ូសិននៅតែបន្ត ហើយអ្នកឈ្នះបន្ទាប់អាចជារូបអ្នក ដូច្នេះសូមបន្ត
                រក្សាសមតុល្យទឹកប្រាក់ក្នុងគណនី វីងរបស់អ្នកចាប់ពី 100 ដុល្លារ
                ឡើងទៅ ដើម្បីមានឱកាសក្លាយជាអ្នកឈ្នះនាខែបន្ទាប់។
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
