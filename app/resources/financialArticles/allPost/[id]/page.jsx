"use client";

import { AllPostItems } from "../../AllPostsItems";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiCopy } from "react-icons/fi";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { RiSendPlaneLine } from "react-icons/ri";

async function fetchPostData(postId) {
  const selectedPost = AllPostItems.find(
    (item) => item.id.toString() === postId
  );
  console.log("data", selectedPost);

  return selectedPost;
}

const PostDetails = ({ params }) => {
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

  return (
    <>
      <div className="w-full h-auto mt-20 mb-20">
        <div className="flex flex-col mx-5 md:mx-10 lg:mx-20">
          <div className="w-full h-auto flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <div className="bg-blue-500 rounded-full px-2 text-white text-[12px]">
                Financial articles
              </div>
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

            <div className="flex lg:flex-row md:flex-col sm:flex-col sm:gap-5 mt-10">
              <div className="flex lg:w-2/3 md:w-2/3 sm:w-full flex-col gap-1 pr-20 sm:pr-0 gap-2">
                <h1 className="promotionName">Introduction</h1>
                <p className="text-gray-600 -mt-5">{post?.introduction}</p>
                <img
                  src={post?.src}
                  className="w-full h-full mt-5 rounded-lg"
                />
                <p className="text-[12px] text-gray-600">{post?.imgSource}</p>
                <p className="font-semibold">{post?.slag}</p>
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src={post?.publicer.src}
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="p-name">{post?.publicer.name}</p>
                    <p className="p-date">{post?.publicer.date}</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">{post?.secondInfo}</p>
                <div className="flex flex-col gap-1 ">
                  <h2 className="promotionName">{post?.title2}</h2>
                  <p className="text-gray-600">{post?.description2}</p>
                </div>
                <div className="flex flex-col gap-1 -mt-2">
                  <h2 className="promotionName mt-4">{post?.title3}</h2>
                  <p className="text-gray-600">{post?.description3}</p>
                </div>
                <img
                  src={post?.src2}
                  className="w-full h-full mt-5 rounded-lg"
                />
                <div className="w-full bg-gray-100 rounded-lg px-5 py-10">
                  <h1 className="promotionName">{post?.conclusion}</h1>
                  <p className="text-gray-600">{post?.conclusionText}</p>
                </div>
              </div>
              <div className="flex lg:w-1/3 md:w-2/5 sm:w-full ml-10 sm:ml-0">
                <div className="flex w-full lg:max-h-[450px] bg-gray-200 border-2 border-gray-300 rounded-lg">
                  <div className="flex flex-col mx-8 my-8">
                    <div className="flex w-[50px] h-[50px] border-2 border-gray-300 rounded-lg bg-white">
                      <RiSendPlaneLine className="mx-auto my-auto w-[25px] h-[25px] text-gray-500" />
                    </div>
                    <div className="flex flex-col w-full">
                      <h1 className="promotionName mt-8">Weekly newsletter</h1>
                      <p className="post-description">
                        No spam. Just the latest releases and tips, interesting
                        artiles, and exclusive interviews in your inbox every
                        week.
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
                </div>
              </div>
            </div>

            <section className="sect6 flex flex-col sm:block gap-16 py-16 px-17 border-b-1 border-gray-100 ">
              <div className="sect6-div1 flex flex-row items-start justify-between pt-2.5 px-8 gap-96">
                <div className="">
                  <p className="text-red-600 text-base font-semibold mb-3">
                    Our Promotions
                  </p>
                  <p className="text-gray-900 font-semibold text-4xl mb-5">
                    Lasted promotions
                  </p>
                  <p className="text-gray-600 text-xl font-normal">
                    Our platform keeps you updated on the most current and
                    exciting promotions from banks and financial institutions in
                    Cambodia.
                  </p>
                </div>
                <div className="flex flex-col flex-grow-0 flex-shrink-0 items-center">
                  <button className="text-white font-semibold text-base py-3 px-5 bg-red-500 rounded-lg hover:bg-red-600">
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
                      ចូលរួមពិធីបើកព្រឹត្តិការណ៍ស៊ីហ្គេម និងអាស៊ានប៉ារ៉ាហ្គេម
                      ឆ្នាំ 2023 ចំនួន 2 សន្លឹក។
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
                      ប្រូម៉ូសិននៅតែបន្ត ហើយអ្នកឈ្នះបន្ទាប់អាចជារូបអ្នក
                      ដូច្នេះសូមបន្ត រក្សាសមតុល្យទឹកប្រាក់ក្នុងគណនី
                      វីងរបស់អ្នកចាប់ពី 100 ដុល្លារ ឡើងទៅ
                      ដើម្បីមានឱកាសក្លាយជាអ្នកឈ្នះនាខែបន្ទាប់។
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
