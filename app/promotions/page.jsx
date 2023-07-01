"use client";
import React from "react";
import { IoLogoNpm } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import data from "./dummydata/data";
import data1 from "./dummydata/data1";
import { useRouter } from "next/navigation";

const Promotions = () => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/promotions/${id}`);
  };
  return (
    <div className="w-10/12 mx-auto mt-20">
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

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-10">
          {data.map((item, index) => (
            <div
              key={index}
              className=" max-w-sm bg-white border border-gray-100 rounded-lg cursor-pointer p-1 flex flex-col"
              onClick={() => handleClick(item.id)}
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
              <div className="mt-auto">                <a href="/landingPage" className="inline-flex items-center gap-2 bankName">
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

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-10">
          {data1.map((item, index) => (
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
    </div>
  );
};

export default Promotions;
