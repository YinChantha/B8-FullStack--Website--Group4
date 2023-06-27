import BankList from "@/app/components/BankList";
import Faq from "@/app/components/Faq";
import Link from "next/link";
import BankInfo from "./BankInfo";
import data from "./data";
// import * as Scroll from "react-scroll";
// import { Link as ScrollLink } from "react-scroll";
import React from "react";

const CompareSavingAcc = () => {
  const tableContent = "text-gray-500 font-semibold text-base";
  //  const Link = ScrollLink.Link;
  return (
    <div className="pt-36">
      <div className="sect1 pb-24  px-4 sm:px-4 md:px-28">
        <div className="saveSect1 flex flex-col justify-center items-center">
          <p className="text-red-600 font-semibold text-sm sm:text-sm md:text-base">
            Compare Your Saving Accounts
          </p>
          <p className="text-gray-900 font-semibold text-4xl sm:text-4xl md:text-5xl mt-3 max-w-[960px] text-center">
            Find the Perfect Savings Account for Your Financial Goals
          </p>
          <p className="text-gray-500 font-normal text-lg sm:text-lg md:text-xl mt-6 max-w-[960px] text-center">
            Take control of your financial future by comparing and choosing the
            perfect saving account for your needs with Proadvisor.
          </p>
          <div className="btn flex flex-col-reverse gap-y-3 sm:flex-col-reverse md:flex-row justify-center items-center font-semibold text-base sm:text-base md:text-lg mt-8 sm:mt-8 md:mt-12 md:gap-x-3.5">
            <button className="learn-more-btn text-gray-700 rounded-lg px-[180px] sm:px-[180px] py-3 sm:py-3 md:px-5 md:py-3 border-gray-300 border-2 hover:bg-gray-50">
              Learn more
            </button>
            <button className="get-started-btn text-white bg-red-500 rounded-lg px-[180px] sm:px-[180px] py-3 sm:py-3 md:px-5 md:py-3 hover:bg-red-600">
              Get started
            </button>
          </div>
        </div>
        <BankList />
      </div>
      <hr className="border-b-1 border-gray-100 mx-4 sm:mx-4 md:mx-28" />
      <div className="sect2 py-16 px-4 sm:px-4 md:px-28">
        <div className=" flex flex-col justify-center items-center">
          <p className="text-red-600 text-sm font-medium text-center">
            Features
          </p>
          <p className="text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl text-center pt-4">
            Cutting-edge features for comparisons
          </p>
          <p className="max-w-3xl text-gray-500 font-normal text-center pt-4 sm:pt-4 md:pt-5 text-lg sm:text-lg md:text-xl">
            We provide comprehensive and up-to-date information, empowering you
            to make informed decisions based on your unique needs and
            preferences.
          </p>
        </div>
        <div className="flex">
          {/* <div></div> 
          <div></div> */}
        </div>
        {/* table of content and best savings... */}
        <div className="flex py-16 gap-8 ">
          <div className="flex flex-col gap-8 max-w-[264px]">
            <hr className="border-b-1 border-gray-100" />
            <div className="flex flex-col gap-4">
              <h1 className="text-red-600 font-semibold text-base">
                Table of contents
              </h1>
              <div className="flex flex-col gap-3">
                <p className={`${tableContent}`}>
                  Best savings accounts and rates
                </p>
                <p className={`${tableContent}`}>
                  How to choose a savings account
                </p>
                <p className={`${tableContent}`}>
                  What to know about savings accounts
                </p>
              </div>
            </div>
            <hr className="border-b-1 border-gray-100" />
            <div className="flex gap-3">
              <Link href="/">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_381_65513)">
                    <rect
                      x="2"
                      y="1.00415"
                      width="44"
                      height="44"
                      rx="8"
                      fill="white"
                    />
                    <g clip-path="url(#clip0_381_65513)">
                      <path
                        d="M22.3333 23.8375C22.6911 24.3159 23.1477 24.7118 23.672 24.9983C24.1964 25.2847 24.7762 25.4551 25.3721 25.4978C25.9681 25.5405 26.5662 25.4545 27.126 25.2456C27.6858 25.0368 28.1942 24.7101 28.6166 24.2875L31.1166 21.7875C31.8756 21.0017 32.2956 19.9491 32.2861 18.8567C32.2766 17.7642 31.8384 16.7191 31.0658 15.9466C30.2933 15.1741 29.2482 14.7358 28.1558 14.7264C27.0633 14.7169 26.0108 15.1368 25.2249 15.8958L23.7916 17.3208M25.6666 22.1708C25.3087 21.6924 24.8521 21.2965 24.3278 21.01C23.8035 20.7236 23.2237 20.5532 22.6277 20.5106C22.0318 20.4679 21.4336 20.5539 20.8738 20.7627C20.314 20.9715 19.8057 21.2983 19.3833 21.7208L16.8833 24.2208C16.1243 25.0067 15.7043 26.0592 15.7138 27.1517C15.7233 28.2442 16.1615 29.2892 16.934 30.0617C17.7065 30.8343 18.7516 31.2725 19.8441 31.282C20.9366 31.2915 21.9891 30.8715 22.7749 30.1125L24.1999 28.6875"
                        stroke="#344054"
                        stroke-width="1.67"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <rect
                      x="2.5"
                      y="1.50415"
                      width="43"
                      height="43"
                      rx="7.5"
                      stroke="#D0D5DD"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_381_65513"
                      x="0"
                      y="0.00415039"
                      width="48"
                      height="48"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_381_65513"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_381_65513"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_381_65513">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(14 13.0042)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href="/">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_784_45401)">
                    <rect
                      x="2"
                      y="1.00415"
                      width="44"
                      height="44"
                      rx="8"
                      fill="white"
                    />
                    <path
                      d="M20.2918 31.1292C27.8371 31.1292 31.9652 24.8765 31.9652 19.4558C31.9652 19.28 31.9613 19.1003 31.9535 18.9245C32.7566 18.3438 33.4496 17.6244 34 16.8003C33.2521 17.133 32.458 17.3504 31.6449 17.4448C32.5011 16.9316 33.1421 16.1254 33.4492 15.1757C32.6438 15.653 31.763 15.9897 30.8445 16.1714C30.2257 15.5138 29.4075 15.0785 28.5164 14.9326C27.6253 14.7867 26.711 14.9384 25.9148 15.3643C25.1186 15.7902 24.4848 16.4665 24.1115 17.2886C23.7382 18.1108 23.6462 19.0331 23.8496 19.9128C22.2187 19.831 20.6233 19.4073 19.1667 18.6693C17.71 17.9313 16.4247 16.8954 15.3941 15.6288C14.8703 16.5319 14.71 17.6006 14.9459 18.6176C15.1817 19.6347 15.7959 20.5238 16.6637 21.1042C16.0122 21.0835 15.375 20.9081 14.8047 20.5925V20.6433C14.8041 21.591 15.1317 22.5097 15.7319 23.2432C16.3321 23.9767 17.1678 24.4797 18.0969 24.6667C17.4934 24.8318 16.86 24.8559 16.2457 24.737C16.5079 25.5521 17.018 26.265 17.7048 26.7762C18.3916 27.2874 19.2209 27.5714 20.077 27.5886C18.6237 28.7301 16.8285 29.3493 14.9805 29.3464C14.6527 29.3459 14.3253 29.3258 14 29.2862C15.8774 30.4907 18.0613 31.1304 20.2918 31.1292Z"
                      fill="#98A2B3"
                    />
                    <rect
                      x="2.5"
                      y="1.50415"
                      width="43"
                      height="43"
                      rx="7.5"
                      stroke="#D0D5DD"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_784_45401"
                      x="0"
                      y="0.00415039"
                      width="48"
                      height="48"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_784_45401"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_784_45401"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Link>
              <Link href="/">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_381_65515)">
                    <rect
                      x="2"
                      y="1.00415"
                      width="44"
                      height="44"
                      rx="8"
                      fill="white"
                    />
                    <g clip-path="url(#clip0_381_65515)">
                      <path
                        d="M34 23.0042C34 17.4813 29.5229 13.0042 24 13.0042C18.4771 13.0042 14 17.4813 14 23.0042C14 27.9954 17.6568 32.1325 22.4375 32.8827V25.8948H19.8984V23.0042H22.4375V20.801C22.4375 18.2948 23.9305 16.9104 26.2146 16.9104C27.3084 16.9104 28.4531 17.1057 28.4531 17.1057V19.5667H27.1922C25.95 19.5667 25.5625 20.3375 25.5625 21.1292V23.0042H28.3359L27.8926 25.8948H25.5625V32.8827C30.3432 32.1325 34 27.9954 34 23.0042Z"
                        fill="#98A2B3"
                      />
                    </g>
                    <rect
                      x="2.5"
                      y="1.50415"
                      width="43"
                      height="43"
                      rx="7.5"
                      stroke="#D0D5DD"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_381_65515"
                      x="0"
                      y="0.00415039"
                      width="48"
                      height="48"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_381_65515"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_381_65515"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_381_65515">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(14 13.0042)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href="/">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_381_65516)">
                    <rect
                      x="2"
                      y="1.00415"
                      width="44"
                      height="44"
                      rx="8"
                      fill="white"
                    />
                    <g clip-path="url(#clip0_381_65516)">
                      <path
                        d="M32.5195 13.0042H15.4766C14.6602 13.0042 14 13.6487 14 14.4456V31.5588C14 32.3557 14.6602 33.0042 15.4766 33.0042H32.5195C33.3359 33.0042 34 32.3557 34 31.5627V14.4456C34 13.6487 33.3359 13.0042 32.5195 13.0042ZM19.9336 30.0471H16.9648V20.5002H19.9336V30.0471ZM18.4492 19.1995C17.4961 19.1995 16.7266 18.4299 16.7266 17.4807C16.7266 16.5315 17.4961 15.762 18.4492 15.762C19.3984 15.762 20.168 16.5315 20.168 17.4807C20.168 18.426 19.3984 19.1995 18.4492 19.1995ZM31.043 30.0471H28.0781V25.4065C28.0781 24.301 28.0586 22.8752 26.5352 22.8752C24.9922 22.8752 24.7578 24.0823 24.7578 25.3284V30.0471H21.7969V20.5002H24.6406V21.8049H24.6797C25.0742 21.0549 26.043 20.262 27.4844 20.262C30.4883 20.262 31.043 22.2385 31.043 24.8088V30.0471Z"
                        fill="#98A2B3"
                      />
                    </g>
                    <rect
                      x="2.5"
                      y="1.50415"
                      width="43"
                      height="43"
                      rx="7.5"
                      stroke="#D0D5DD"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_381_65516"
                      x="0"
                      y="0.00415039"
                      width="48"
                      height="48"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_381_65516"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_381_65516"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_381_65516">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(14 13.0042)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
          <div>
            {/* best saving accounts info */}
            <div>
              <h1 className="text-gray-900 font-semibold text-3xl">
                Best savings accounts and rates in June 2023
              </h1>
              <p className="mt-6">
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis.
                Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                Mauris posuere vulputate arcu amet, vitae nisi, tellus
                tincidunt. At feugiat sapien varius id.
              </p>
              <p className="mt-5 mb-12">
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                volutpat mollis at volutpat lectus velit, sed auctor. Porttitor
                fames arcu quis fusce augue enim. Quis at habitant diam at.
                Suscipit tristique risus, at donec. In turpis vel et quam
                imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
              </p>
              {/* chipmong bank */}
              <div className="flex flex-col gap-6">
                <BankInfo />
                <BankInfo />
                <BankInfo />
              </div>
              {/* more text below bank info */}
              {/* use style "bodyText" in body */}
              <div className="bodyText mt-6 flex flex-col gap-6 ">
                <p className="">{data.textBelowOverview.text1}</p>
                <p className="">{data.textBelowOverview.text2}</p>
                <p className="">{data.textBelowOverview.text3}</p>
              </div>
              <div className="mt-12">
                <h1 className="titleText">Software and tools</h1>
                <p className="bodyText mt-4 ">{data.softwareTools}</p>
              </div>
              <div>
                <h1 className="titleText mt-12">Other resources</h1>
                <p>{}</p>
              </div>
            </div>

            {/* how to choose a savings account */}
            {/* <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur nemo amet quibusdam fugiat veniam illo asperiores nam!
            </div> */}
            {/* what to know about savings accounts */}
            {/* <div id="bestSaving">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              eveniet! Sed, reiciendis ad architecto odit, numquam dicta quod
            </div> */}
          </div>
        </div>
      </div>

      <Faq />
    </div>
  );
};

export default CompareSavingAcc;
