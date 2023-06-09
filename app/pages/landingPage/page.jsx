import React from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-sect1 flex flex-col justify-center items-center px-52 py-24">
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
              className="shrink-0"
            />
          </div>
        </div>
        <p className="text-center text-gray-900 font-semibold text-4xl mt-5">
          Unlock Your Financial Potential with ProAdvisor's Innovative Solutions
        </p>
        <p className="text-center text-gray-600 font-normal text-xl mt-6">
          Our platform provides a comprehensive suite of cutting-edge tools and
          expert guidance to empower you in making informed financial decisions.
        </p>
        <div className="btn flex 2lg:flex-row justify-center items-center font-semibold text-lg pt-12 gap-x-3.5 md:flex-col gap-y-3">
          <button className="learn-more text-gray-700 rounded-lg 2lg:px-5 py-3 border-gray-300 border-2 hover:bg-gray-50 md:px-32">
            Learn more
          </button>
          <button className="get-started text-white bg-red-500 rounded-lg 2lg:px-5 py-3 hover:bg-red-600 md:px-32">
            Get started
          </button>
        </div>
        <Image
          src="/images/laptop-frame.png"
          alt="laptop-frame"
          width={1000}
          height={600}
          className="pt-16"
        />
      </div>
      <div className="list-banks flex 2lg:flex-col justify-center items-center mt-24 px-28 md:mt-16 flex-col">
        <p className="font-normal text-gray-600 text-center">
          The trusted provider over 150+ companies from Cambodia, of accuracy
          rates and financial information
        </p>
        <div className="bank flex 2lg:flex-row justify-center items-center pt-8 gap-x-12 md:flex-col gap-y-8 mt-8">
          <Image
            src="/images/vattanac-bank.png"
            alt="vattanac-bank logo"
            width={200}
            height={200}
          />
          <Image
            src="/images/acleda-bank.png"
            alt="acleda-bank logo"
            width={200}
            height={200}
          />
          <Image
            src="/images/cambodia-public-bank.png"
            alt="cambodia-public-bank logo"
            width={200}
            height={200}
          />
          <Image
            src="/images/chipmong-bank.png"
            alt="chipmong-bank logo"
            width={200}
            height={200}
          />
          <Image
            src="/images/sathapana-bank.png"
            alt="sathapana-bank logo"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
