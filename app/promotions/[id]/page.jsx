"use client";
import data from "../dummydata/data";
import { useParams } from "next/navigation";
import Image from "next/image";
export default function ProductDetails() {
  const param = useParams();
  const id = param.id;
  const product = data.find((item) => item.id === Number(id));

  return (
    <div className="p-8">
      <div className="mt-20 w-10/12 mx-auto">
        <div className="flex items-center gap-2 ">
          <button className="text-gray-100 bg-gray-700 rounded-lg p-1">
            Financial articles
          </button>
          <h1 className="text-gray-700">12 min read</h1>
        </div>
        <h1 className="text-gray-900 font-semibold text-4xl mt-5">
          A conversation with Lucy Bond
        </h1>
        <p className="promotionContent mt-5">
          Lucy Bond is an interior designer who started her career in New
          Zealand, working for large <br></br>architectural firms. We chatted to
          her about design and starting her own studio.
        </p>
        <div>
          <Image
            className="mt-5 rounded-sm"
            src={product.img}
            alt=""
            width={1500}
            height={100}
          />
        </div>
        {/* Written by of bellow big image section */}
        <div className="flex justify-between items-center">
          <div className="grid grid-cols-2 md:w-5/12 w-10/12 mt-3">
            <div className="flex flex-col gap-y-3">
              <p className="text-red-600 text-sm font-semibold">Written by</p>
              <p className="text-gray-600 text-md font-semibold">
                Alec Whitten
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="text-red-600 text-sm font-semibold">Published on</p>
              <p className="text-gray-600 text-md font-semibold">17 Jan 2024</p>
            </div>
          </div>
          <div className="mt-3 flex gap-2 max-md:hidden  ">
            <button className="w-28 h-8 text-sm border border-gray-400 rounded inline-flex justify-center items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16675 12.5001H3.33341C2.89139 12.5001 2.46746 12.3245 2.1549 12.0119C1.84234 11.6994 1.66675 11.2754 1.66675 10.8334V3.33341C1.66675 2.89139 1.84234 2.46746 2.1549 2.1549C2.46746 1.84234 2.89139 1.66675 3.33341 1.66675H10.8334C11.2754 1.66675 11.6994 1.84234 12.0119 2.1549C12.3245 2.46746 12.5001 2.89139 12.5001 3.33341V4.16675M9.16675 7.50008H16.6667C17.5872 7.50008 18.3334 8.24627 18.3334 9.16675V16.6667C18.3334 17.5872 17.5872 18.3334 16.6667 18.3334H9.16675C8.24627 18.3334 7.50008 17.5872 7.50008 16.6667V9.16675C7.50008 8.24627 8.24627 7.50008 9.16675 7.50008Z"
                  stroke="#344054"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Copy link
            </button>
            <button className="w-10 h-8 border border-gray-400 rounded flex justify-center items-center ">
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                  fill="#98A2B3"
                />
              </svg>
            </button>
            <button className="w-10 h-8 border border-gray-400 rounded flex justify-center items-center ">
              <svg
                width="15"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.2918 17.1251C13.8371 17.1251 17.9652 10.8724 17.9652 5.45167C17.9652 5.27589 17.9613 5.0962 17.9535 4.92042C18.7566 4.33967 19.4496 3.62033 20 2.7962C19.2521 3.12896 18.458 3.34627 17.6449 3.44074C18.5011 2.92755 19.1421 2.12135 19.4492 1.17159C18.6438 1.64892 17.763 1.98563 16.8445 2.1673C16.2257 1.50976 15.4075 1.07439 14.5164 0.928498C13.6253 0.78261 12.711 0.934331 11.9148 1.3602C11.1186 1.78607 10.4848 2.46238 10.1115 3.28455C9.73825 4.10672 9.64619 5.02897 9.84961 5.9087C8.21874 5.82686 6.62328 5.40321 5.16665 4.6652C3.71002 3.9272 2.42474 2.89132 1.39414 1.62472C0.870333 2.52782 0.710047 3.59649 0.945859 4.61353C1.18167 5.63057 1.79589 6.51966 2.66367 7.10011C2.01219 7.07943 1.37498 6.90402 0.804688 6.58839V6.63917C0.804104 7.58691 1.13175 8.50561 1.73192 9.2391C2.3321 9.97258 3.16777 10.4756 4.09687 10.6626C3.49338 10.8277 2.85999 10.8518 2.2457 10.7329C2.50788 11.548 3.01798 12.2609 3.70481 12.7721C4.39164 13.2833 5.22093 13.5673 6.07695 13.5845C4.62369 14.726 2.82848 15.3452 0.980469 15.3423C0.652739 15.3418 0.325333 15.3217 0 15.2821C1.87738 16.4866 4.06128 17.1263 6.2918 17.1251Z"
                  fill="#98A2B3"
                />
              </svg>
            </button>
            <button className="w-10 h-8 border border-gray-400 rounded flex justify-center items-center ">
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95313C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95313C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523437C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z"
                  fill="#98A2B3"
                />
                <path
                  d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z"
                  fill="#98A2B3"
                />
                <path
                  d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z"
                  fill="#98A2B3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Indtroduction */}
      <div className="mt-10 w-10/12 mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-6/12 w-full">
          <div>
            <h1 className="text-gray-900 font-semibold text-4xl mt-5">
              Introduction
            </h1>
            <p className="mt-5 promotionContent">
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id.
            </p>
            <br></br>
            <p className="promotionContent">
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim. Quis at habitant diam at. Suscipit
              tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
              molestie aliquet sodales id est ac volutpat.
            </p>
          </div>
          <div className="mt-5">
            <Image src="/images/img.png" width={1000} height={110} />
            <p className="promotionContent mt-2">
              Image courtesy of Leon <a className="underline">via Unsplash</a>
            </p>
          </div>
          <div className="bg-gray-100 mt-5">
            <div className="p-5">
              <h1 className="text-gray-900 font-semibold text-4xl mt-5">
                Conclusion
              </h1>
              <p className="promotionContent mt-5">
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
                id scelerisque est ultricies ultricies. Duis est sit sed leo
                nisl, blandit elit sagittis. Quisque tristique consequat quam
                sed. Nisl at scelerisque amet nulla purus habitasse.
              </p>
              <br></br>
              <p className="promotionContent ">
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                condimentum mi massa. In tincidunt pharetra consectetur sed duis
                facilisis metus. Etiam egestas in nec sed et. Quis lobortis at
                sit dictum eget nibh tortor commodo cursus.
              </p>
              <br></br>
              <p className="promotionContent ">
                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
                aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
                id morbi eget ipsum. Aliquam senectus neque ut id eget
                consectetur dictum. Donec posuere pharetra odio consequat
                scelerisque et, nunc tortor. Nulla adipiscing erat a erat.
                Condimentum lorem posuere gravida enim posuere cursus diam.
              </p>
            </div>
          </div>
          {/* Avatar section */}
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mt-3">
            <div className="flex items-center gap-1">
              <Image src="/images/user2.png" width={50} height={50} />
              <div className="">
                <h1 className="text-gray-600 text-sm font-semibold">
                  Olivia Rhye
                </h1>
                <p className="promotionContent ">Product Designer, Untitled</p>
              </div>
            </div>
            <div className="mt-3 flex gap-1">
              <button className="w-28 h-8 text-sm border border-gray-400 rounded inline-flex justify-center items-center">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16675 12.5001H3.33341C2.89139 12.5001 2.46746 12.3245 2.1549 12.0119C1.84234 11.6994 1.66675 11.2754 1.66675 10.8334V3.33341C1.66675 2.89139 1.84234 2.46746 2.1549 2.1549C2.46746 1.84234 2.89139 1.66675 3.33341 1.66675H10.8334C11.2754 1.66675 11.6994 1.84234 12.0119 2.1549C12.3245 2.46746 12.5001 2.89139 12.5001 3.33341V4.16675M9.16675 7.50008H16.6667C17.5872 7.50008 18.3334 8.24627 18.3334 9.16675V16.6667C18.3334 17.5872 17.5872 18.3334 16.6667 18.3334H9.16675C8.24627 18.3334 7.50008 17.5872 7.50008 16.6667V9.16675C7.50008 8.24627 8.24627 7.50008 9.16675 7.50008Z"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Copy link
              </button>
              <button className="w-10 h-8 border border-gray-400 rounded flex justify-center items-center ">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                    fill="#98A2B3"
                  />
                </svg>
              </button>
              <button className="w-10 h-8 border border-gray-400 rounded flex justify-center items-center ">
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.2918 17.1251C13.8371 17.1251 17.9652 10.8724 17.9652 5.45167C17.9652 5.27589 17.9613 5.0962 17.9535 4.92042C18.7566 4.33967 19.4496 3.62033 20 2.7962C19.2521 3.12896 18.458 3.34627 17.6449 3.44074C18.5011 2.92755 19.1421 2.12135 19.4492 1.17159C18.6438 1.64892 17.763 1.98563 16.8445 2.1673C16.2257 1.50976 15.4075 1.07439 14.5164 0.928498C13.6253 0.78261 12.711 0.934331 11.9148 1.3602C11.1186 1.78607 10.4848 2.46238 10.1115 3.28455C9.73825 4.10672 9.64619 5.02897 9.84961 5.9087C8.21874 5.82686 6.62328 5.40321 5.16665 4.6652C3.71002 3.9272 2.42474 2.89132 1.39414 1.62472C0.870333 2.52782 0.710047 3.59649 0.945859 4.61353C1.18167 5.63057 1.79589 6.51966 2.66367 7.10011C2.01219 7.07943 1.37498 6.90402 0.804688 6.58839V6.63917C0.804104 7.58691 1.13175 8.50561 1.73192 9.2391C2.3321 9.97258 3.16777 10.4756 4.09687 10.6626C3.49338 10.8277 2.85999 10.8518 2.2457 10.7329C2.50788 11.548 3.01798 12.2609 3.70481 12.7721C4.39164 13.2833 5.22093 13.5673 6.07695 13.5845C4.62369 14.726 2.82848 15.3452 0.980469 15.3423C0.652739 15.3418 0.325333 15.3217 0 15.2821C1.87738 16.4866 4.06128 17.1263 6.2918 17.1251Z"
                    fill="#98A2B3"
                  />
                </svg>
              </button>
              <button className="w-10 h-8 border border-gray-400 rounded flex justify-center items-center ">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95313C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95313C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523437C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z"
                    fill="#98A2B3"
                  />
                  <path
                    d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z"
                    fill="#98A2B3"
                  />
                  <path
                    d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z"
                    fill="#98A2B3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Weekly section */}
        <div className="bg-gray-100 md:w-5/12 mt-3 md:mt-0 w-full h-max rounded-md">
          <div className="p-3">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_726_12378)">
                <rect x="2" y="1" width="48" height="48" rx="8" fill="white" />
                <g clip-path="url(#clip0_726_12378)">
                  <path
                    d="M18.8445 23.9537C18.3483 23.7608 18.1003 23.6643 18.0279 23.5253C17.9651 23.4048 17.965 23.2613 18.0276 23.1407C18.0999 23.0016 18.3478 22.9049 18.8437 22.7113L32.9169 17.2194C33.3645 17.0447 33.5883 16.9574 33.7314 17.0051C33.8556 17.0466 33.953 17.1441 33.9945 17.2683C34.0423 17.4113 33.955 17.6352 33.7803 18.0828L28.2883 32.1559C28.0948 32.6518 27.998 32.8998 27.859 32.972C27.7384 33.0347 27.5948 33.0346 27.4743 32.9718C27.3353 32.8994 27.2389 32.6513 27.0459 32.1552L24.8558 26.5235C24.8167 26.4228 24.7971 26.3725 24.7668 26.3301C24.74 26.2925 24.7072 26.2596 24.6696 26.2328C24.6272 26.2026 24.5768 26.183 24.4761 26.1438L18.8445 23.9537Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <rect
                  x="2.5"
                  y="1.5"
                  width="47"
                  height="47"
                  rx="7.5"
                  stroke="#D0D5DD"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_726_12378"
                  x="0"
                  y="0"
                  width="52"
                  height="52"
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
                    result="effect1_dropShadow_726_12378"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_726_12378"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_726_12378">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(16 15)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h1 className="text-gray-900 font-semibold text-4xl mt-5">
              Weekly newsletter
            </h1>
            <p className="promotionContent mt-5">
              No spam. Just the latest releases and tips, interesting articles,
              and exclusive interviews in your inbox every week.
            </p>
            <div className="flex flex-col justify-center gap-3 mt-3">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                placeholder="Enter your email"
              />
              <p className="promotionContent mt-3">
                Image courtesy of Leon <a className="underline">via Unsplash</a>
              </p>
              <button className="redButton">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(query) {
//   const { id } = query;
//   return {
//     props: {
//       product,
//     },
//   };
// }
