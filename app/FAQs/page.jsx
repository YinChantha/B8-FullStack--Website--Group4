import { GoSearch } from "react-icons/go";
import Image from "next/image";

const FAQs = () => {
  const questions = [
    {
      src: "/images/heart.png",
      title: "Is there a free trail available?",
      description:
        "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    },
    {
      src: "/images/refresh.png",
      title: "Is there a free trail available?",
      description:
        "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    },
    {
      src: "/images/slash.png",
      title: "Is there a free trail available?",
      description:
        "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    },
    {
      src: "/images/plus.png",
      title: "Is there a free trail available?",
      description:
        "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    },
    {
      src: "/images/card.png",
      title: "Is there a free trail available?",
      description:
        "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    },
    {
      src: "/images/mail.png",
      title: "Is there a free trail available?",
      description:
        "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    },
  ];
  return (
    <>
      <div className="w-full h-auto">
        <div className="flex flex-col items-center justify-center gap-4 mt-20">
          <p className="bankName">FAQs</p>
          <h1 className="text-[40px] font-bold text-center">Ask us anything</h1>
          <div className="flex max-w-[600px] justify-center">
            <p className="text-gray-600 text-center">
              Need something cleared up? Here are our most frequently asked
              questions.
            </p>
          </div>
          <div className="flex flex-row gap-2 border-2 border-gray-200 rounded-lg p-1 w-[300px] items-center">
            <GoSearch size={15} color="gray" className="ml-2" />
            <p className="text-[13px] text-gray-600">Search</p>
          </div>
        </div>

        <div className="w-full mt-20 bg-gray-100 mb-20 py-20">
          <div className="flex flex-col lg:mx-20 md:mx-10 sm:p-0">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
              {questions.map((ques, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start p-4 gap-4"
                >
                  <div className="flex w-[50px] h-[50px] bg-red-200 rounded-full">
                    <Image
                      src={ques.src}
                      alt="people icon"
                      width={20}
                      height={20}
                      className="mx-auto my-auto"
                    />
                  </div>
                  <h1 className="text-[15px] font-semibold">{ques.title}</h1>
                  <p className="text-[13px] text-gray-600 text-left">
                    {ques.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-row justify-between items-center mt-10 sm:mx-5 sm:flex-col sm:items-start sm:gap-4 bg-white rounded-lg py-5 px-10">
              <div className="flex flex-col">
                <h1 className="font-semibold">Still have questions?</h1>
                <p className="text-[13px] text-gray-600">
                  Can't fine the answer you're looking for? Please chat to our
                  friedly team.
                </p>
              </div>
              <div className="redButton">
                <p>Get in touch</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white mt-20 lg:mx-20 lg:px-4 md:px-4 md:mx-10">
          <div className="flex lg:flex-row md:flex-row md:p-0 p-4 justify-between sm:flex-col sm:gap-10">
            <div className="w-1/2 flex sm:w-full justify-center items-center">
              <div className="flex flex-col ">
                <p className="bankName">Get to know us</p>
                <h1 className="promotionName">We're just getting started</h1>
                <div className="flex flex-col gap-2 sm:w-full">
                  <p className="text-gray-600 text-[13px]">
                    Untitled is growing fast, and we are always looking for
                    passionate, dynamic, and talented individuals to join our
                    distributed team all around the world.
                  </p>
                  <p className="text-gray-600 text-[13px]">
                    Our philisophy is simple — hire a team of diverse,
                    passionate people and foster a culture that empowers you to
                    do you best work. Read more about
                  </p>
                </div>
                <div className="flex lg:flex-row gap-2 mt-10 md:flex-row sm:flex-col">
                  <div className="border-2 border-gray-300 rounded-lg px-3 py-1 text-[13px] font-normal bg-white">
                    <p className="text-center">About us</p>
                  </div>
                  <div className="flex justify-center items-center text-white text-[13px] font-normal bg-red-500 rounded-lg px-3 py-1">
                    See open roles
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-end sm:w-full">
              <Image
                src="/images/content.png"
                alt="faq"
                width={500}
                height={500}
              />
              {/* <img
                src="/images/content.png"
                className="lg:w-[600px] lg:h-[600px] md:w-[400px] md:h-[400px] sm:w-full sm:h-full"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
