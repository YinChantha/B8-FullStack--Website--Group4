"use client";

import AllPosts from "app/resources/guidesTutorials/AllPosts";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCopy } from "react-icons/fi";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { RiSendPlaneLine } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";

async function fetchPostData(postId) {
  const selectedPost = AllPosts.find((item) => item.id.toString() === postId);
  console.log("data", selectedPost);

  return selectedPost;
}

const TutorPostDetails = ({ params }) => {
  const [post, setPost] = useState(null);
  const postId = params.id;
  console.log("post id", postId);

  useEffect(() => {
    const fectData = async () => {
      if (postId) {
        const data = await fetchPostData(postId);
        setPost(data);
      }
    };
    fectData();
  }, [postId]);

  const promoData = [
    {
      img: "/images/seagame-banner.png",
      bankName: "ABA Bank",
      promoName: "Cambodia Sea Games",
      promoContent:
        "សូមអបអរសាទរអ្នកឈ្នះទាំង 50 រូប! លោកអ្នកបានឈ្នះសំបុត្រចូលរួមពិធីបើកព្រឹត្តិការណ៍ស៊ីហ្គេម និងអាស៊ានប៉ារ៉ាហ្គេម ឆ្នាំ2023 ចំនួន 2 សន្លឹក។",
    },
    {
      img: "/images/foodorder-banner.png",
      bankName: "Vattanac Bank",
      promoName: "Food Order Up to 5$",
      promoContent:
        "កាន់តែងាយស្រួល និងរហ័សជាមួយ KHQR របស់ធនាគារ វឌ្ឍនៈ!អតិថិជនអាចផ្ញើ ឬទទួលប្រាក់ពីធនាគារដែលជាសមាជិកបាគងនៅទូទាំងប្រទេសកម្ពុជា។",
    },
    {
      img: "/images/savingAcc-banner.png",
      bankName: "Wing Bank",
      promoName: "Open Saving Account",
      promoContent:
        "ប្រូម៉ូសិននៅតែបន្ត ហើយអ្នកឈ្នះបន្ទាប់អាចជារូបអ្នក ដូច្នេះសូមបន្តរក្សាសមតុល្យទឹកប្រាក់ក្នុងគណនី វីងរបស់អ្នកចាប់ពី 100 ដុល្លារឡើងទៅ ដើម្បីមានឱកាសក្លាយជាអ្នកឈ្នះនាខែបន្ទាប់។",
    },
  ];

  return (
    <>
      <div className="w-full h-auto pt-20 mb-20">
        <div className="flex flex-col mt-10 mx-5 md:mx-10 lg:mx-20">
          <div className="w-full h-auto flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <div className="smallBack">Financial articles</div>
              <p className="text-[12px] text-gray-600">12 min</p>
            </div>
            <h1 className="text-[40px] font-bold">{post?.title}</h1>
            <p className="text-gray-400">{post?.description}</p>
            <img src={post?.src} className="w-full h-full mt-5 rounded-lg" />

            <div className="flex lg:flex-row md:flex-row sm:flex-col sm:gap-5 mt-5 items-center justify-between">
              <div className="flex flex-row gap-20">
                <div className="flex flex-col">
                  <p className="bankName">Writeen by</p>
                  <p className="text-gray-900 text-[18px] font-semibold">
                    {post?.publicer.name}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="bankName">Published on</p>
                  <p className="text-gray-900 text-[18px] font-semibold">
                    {post?.publicer.date}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-1 items-center border-2 border-gray-300 w-[120px] h-[40px] rounded-lg justify-center">
                  <FiCopy />
                  <p>Copy link</p>
                </div>
                <div className="flex border-2 border-gray-300 w-[40px] h-[40px] rounded-lg">
                  <BsFacebook
                    size={20}
                    color="gray"
                    className="mx-auto my-auto"
                  />
                </div>
                <div className="flex border-2 border-gray-300 w-[40px] h-[40px] rounded-lg">
                  <BsTwitter
                    size={20}
                    color="gray"
                    className="mx-auto my-auto"
                  />
                </div>
                <div className="flex border-2 border-gray-300 w-[40px] h-[40px] rounded-lg">
                  <BsInstagram
                    size={20}
                    color="gray"
                    className="mx-auto my-auto"
                  />
                </div>
              </div>
            </div>

            <h1 className="promotionName mt-10">All Video tutorials</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                </Link>
              ))}
            </div>

            <div className="sect6 flex flex-col gap-16 py-16">
              <div className="sect6-div1 flex flex-col sm:flex-col sm:items-start md:flex  md:flex-row md:justify-between md:items-start pt-2.5 gap-x-[400px]">
                <div className="">
                  <p className="text-red-600 text-sm sm:text-sm md:text-base font-semibold mb-2 sm:mb-2 md:mb-3">
                    Our Promotions
                  </p>
                  <p className="text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl mb-5">
                    Lasted promotions
                  </p>
                  <p className="text-gray-600 text-lg sm:text-lg md:text-xl font-normal">
                    Our platform keeps you updated on the most current and
                    exciting promotions from banks and financial institutions in
                    Cambodia.
                  </p>
                </div>
                <div className=" flex-col flex-grow-0 flex-shrink-0 items-center hidden sm:hidden md:block">
                  <div className="text-white font-semibold text-base py-3 px-5 bg-red-500 rounded-lg hover:bg-red-600">
                    View more
                  </div>
                </div>
              </div>
              <div className="sect6-div2 flex flex-col sm:flex-col md:flex-row justify-around gap-8">
                {promoData.map((data, index) => (
                  <div key={index} className="promo1 flex flex-col basis-full">
                    <Image
                      src={data.img}
                      alt="seagame-banner"
                      width={384}
                      height={240}
                      className="w-auto h-auto mb-6"
                    />
                    <div className="flex flex-col">
                      <p className="bankName">{data.bankName}</p>
                      <div className="flex flex-row items-start justify-between">
                        <p className="promotionName">{data.promoName}</p>
                        <div>
                          <Image
                            src="/images/go-icon.png"
                            alt="go icon"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <p className="promotionContent">{data.promoContent}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center sm:block md:hidden">
                <div className="text-white font-semibold text-base py-3 px-[180px] sm:px-[180px] md:px-5 bg-red-500 rounded-lg hover:bg-red-600">
                  View more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorPostDetails;
