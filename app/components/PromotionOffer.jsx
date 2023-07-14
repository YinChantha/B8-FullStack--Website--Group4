import React from "react";
import Image from "next/image";
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

const PromotionOffer = () => {
  return (
    <section className="sect6 flex flex-col gap-16 py-16">
      <div className="sect6-div1 flex flex-col sm:flex-col sm:items-start md:flex  md:flex-row md:justify-between md:items-start pt-2.5 gap-x-[400px]">
        <div className="">
          <p className="text-red-600 text-sm sm:text-sm md:text-base font-semibold mb-2 sm:mb-2 md:mb-3">
            Our Promotions
          </p>
          <p className="text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl mb-5">
            Lasted promotions
          </p>
          <p className="text-gray-600 text-lg sm:text-lg md:text-xl font-normal">
            Our platform keeps you updated on the most current and exciting
            promotions from banks and financial institutions in Cambodia.
          </p>
        </div>
        <div className=" flex-col flex-grow-0 flex-shrink-0 items-center hidden sm:hidden md:block">
          <button className="text-white font-semibold text-base py-3 px-5 bg-red-500 rounded-lg hover:bg-red-600">
            View more
          </button>
        </div>
      </div>
      <div className="sect6-div2 flex flex-col sm:flex-col md:flex-row justify-around gap-8 px-8 ">
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
                <button>
                  <Image
                    src="/images/go-icon.png"
                    alt="go icon"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <p className="promotionContent">{data.promoContent}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center sm:block md:hidden">
        <button className="text-white font-semibold text-base py-3 px-[180px] sm:px-[180px] md:px-5 bg-red-500 rounded-lg hover:bg-red-600">
          View more
        </button>
      </div>
    </section>
  );
};

export default PromotionOffer;
