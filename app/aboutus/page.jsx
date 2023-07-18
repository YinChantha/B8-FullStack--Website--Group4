import React from "react";
import Image from "next/image";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const AboutUs = () => {
  const works = [
    {
      src: "/images/people.png",
      title: "Care about our team",
      description:
        "We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.",
    },
    {
      src: "/images/heart.png",
      title: "Care about our team",
      description:
        "We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.",
    },
    {
      src: "/images/trending-up.png",
      title: "Pride in what we do",
      description:
        "We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.",
    },
    {
      src: "/images/smile.png",
      title: "Pride in what we do",
      description:
        "We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.",
    },
    {
      src: "/images/flag.png",
      title: "Pride in what we do",
      description:
        "We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.",
    },
    {
      src: "/images/zap.png",
      title: "Pride in what we do",
      description:
        "We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.",
    },
  ];

  const developers = [
    {
      src: "/images/chantha.png",
      name: "Yin Chantha",
      position: "Project Leader",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      src: "/images/lavy3.png",
      name: "Meng Lavy",
      position: "Frontend Developer",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      src: "/images/navin.png",
      name: "Seab Navin",
      position: "Backend Developer",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      src: "/images/moyheang.png",
      name: "Thy Moheang",
      position: "UI/UX Designer",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
  ];

  const developers2 = [
    {
      src: "/images/vasna.png",
      name: "Pich Veasna",
      position: "UI/UX Designer",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      src: "/images/vichet.png",
      name: "Hak Vichet",
      position: "Frontend Developer",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      src: "/images/rothana.png",
      name: "Krean Rothana",
      position: "Backend Developer",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
  ];

  return (
    <>
      <div className="w-full h-auto mb-10 pt-28">
        <div className="flex flex-col lg:mx-20 mt-20 items-center">
          <div className="flex flex-row w-[400px] justify-center items-center bg-red-50 font-medium text-sm gap-3 py-1.5 pl-1 pr-2.5 rounded-2xl shrink-0">
            <p className="text-white bg-red-500 px-2.5 py-0.5 rounded-2xl shrink-0">
              New feature
            </p>
            <div className="flex flex-row gap-1 shrink-0">
              <p className="text-red-700 shrink-0">
                Unveliling the ProAdvisor Journey
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
            Our Story and Commitment to Financial Empowerment
          </p>
          <p className="text-center max-w-[900px] text-gray-600 font-normal text-xl mt-6 sm:mx-5">
            Our mission is fueled by a passion for financial literacy and the
            desire to make a positve impact. on people's lives. We are dedicated
            to providing innovative solutions and cutting-edge tools that enale
            our users to make informed financial decisions and take contril of
            their financial future.
          </p>

          <div className="list-banks flex flex-col justify-center items-center mt-24 gap-4 bg-gray-100 rounded-lg p-20">
            <p className="font-normal text-gray-600 text-center sm:mx-5">
              The trusted provider over 150+ companies from Cambodia, of
              accuracy rates and financial information
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
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

          <div className="flex flex-col w-full gap-4 mt-20">
            <div className="flex flex-col items-center">
              <p className="bankName">Our Values</p>
              <h1 className="promotionName">How we work at Proadvisor</h1>
              <p className="text-gray-600">
                Our share values keep us connected and guid us as one team.
              </p>
            </div>
            <div className="w-full h-auto">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
                {works.map((work, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white p-4 gap-4"
                  >
                    <div className="flex w-[50px] h-[50px] bg-red-200 rounded-full">
                      <Image
                        src={work.src}
                        alt="people icon"
                        width={20}
                        height={20}
                        className="mx-auto my-auto"
                      />
                    </div>
                    <h1 className="text-[15px] font-semibold">{work.title}</h1>
                    <p className="text-[13px] text-gray-600 text-center">
                      {work.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-20 mb-10 bg-gray-100 py-20">
            <div className="flex flex-col mx-10 items-center">
              <div className="flex flex-col items-center max-w-[700px] ">
                <p className="bankName">We're hiring!</p>
                <h1 className="promotionName">Meet our team</h1>
                <p className="text-gray-600 text-center sm:mx-5">
                  Our philosophy is simple hire a team of diverse, passionate
                  people and foster a culturethat empowers you to do your best
                  work.
                </p>
              </div>
              <div className="flex flex-row gap-2 mt-10">
                <div className="border-2 border-gray-300 rounded-lg px-3 py-1 text-[13px] font-normal bg-white">
                  About us
                </div>
                <div className="flex justify-center items-center text-white text-[13px] font-normal bg-red-500 rounded-lg px-3 py-1">
                  Contact us
                </div>
              </div>

              <div className="w-full h-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10 mt-12">
                  {developers.map((developer, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center bg-white rounded-lg p-4"
                    >
                      <div className="flex w-[110px] h-[110px] rounded-full">
                        <Image
                          src={developer.src}
                          width={100}
                          height={100}
                          className="mx-auto my-auto rounded-full"
                        />
                      </div>
                      <h1 className="promotionName mt-2">{developer.name}</h1>
                      <p className="bankName -mt-4">{developer.position}</p>
                      <p className="text-gray-600 text-center text-[13px]">
                        {developer.description}
                      </p>
                      <div className="flex flex-row gap-2 mt-2">
                        <AiFillFacebook color="gray" />
                        <AiFillLinkedin color="gray" />
                        <AiFillGithub color="gray" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-12">
                  {developers2.map((developer2, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center bg-white rounded-lg p-4"
                    >
                      <div className="flex w-[110px] h-[110px] rounded-full">
                        <Image
                          src={developer2.src}
                          width={100}
                          height={100}
                          className="mx-auto my-auto rounded-full"
                        />
                      </div>
                      <h1 className="promotionName mt-2">{developer2.name}</h1>
                      <p className="bankName -mt-4">{developer2.position}</p>
                      <p className="text-gray-600 text-center text-[13px]">
                        {developer2.description}
                      </p>
                      <div className="flex flex-row gap-2">
                        <AiFillFacebook color="gray" />
                        <AiFillLinkedin color="gray" />
                        <AiFillGithub color="gray" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-auto mt-20 mb-10">
            <div className="flex flex-wrap sm:gap-5">
              <div className="flex sm:w-full md:w-1/4 lg:w-1/4 sm:items-center sm:gap-5 flex-col gap-3">
                <div className="flex flex-col items-start sm:items-center">
                  <p className="text-[13px] font-semibold">Our locations</p>
                  <h1 className="text-[25px] font-bold">Visit our offices</h1>
                  <p className="text-location">Find us at the locations</p>
                </div>
              </div>
              <div className="flex sm:w-full md:w-1/4 lg:w-1/4 sm:items-center sm:gap-5 flex-col gap-5">
                <div className="flex flex-col items-start">
                  <p className="text-[16px] font-semibold">Melbourne</p>
                  <p className="text-location mt-2">100 Flinders Street</p>
                  <p className="text-location">Melbourne VIC 300 AU</p>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-[16px] font-semibold">Melbourne</p>
                  <p className="text-location mt-2">100 Flinders Street</p>
                  <p className="text-location">Melbourne VIC 300 AU</p>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-[16px] font-semibold">Melbourne</p>
                  <p className="text-location mt-2">100 Flinders Street</p>
                  <p className="text-location">Melbourne VIC 300 AU</p>
                </div>
              </div>
              <div className="flex sm:w-full md:w-1/4 lg:w-1/4 sm:items-center sm:gap-5 flex-col gap-5">
                <div className="flex flex-col items-start">
                  <p className="text-[16px] font-semibold">Melbourne</p>
                  <p className="text-location mt-2">100 Flinders Street</p>
                  <p className="text-location">Melbourne VIC 300 AU</p>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-[16px] font-semibold">Melbourne</p>
                  <p className="text-location mt-2">100 Flinders Street</p>
                  <p className="text-location">Melbourne VIC 300 AU</p>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-[16px] font-semibold">Melbourne</p>
                  <p className="text-location mt-2">100 Flinders Street</p>
                  <p className="text-location">Melbourne VIC 300 AU</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full mt-20 mb-10 bg-gray-100">
            <div className="felx flex-col mx-auto my-20">
              <div className="flex flex-col items-center">
                <p className="bankName">Contact us</p>
                <h1 className="promotionName">Get in touch</h1>
                <p className="text-gray-600">
                  We's love to hear from you. Please fill out the form.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:max-w-[600px] sm:max-w-[400px] items-center justify-center mt-10">
                <div className="flex lg:flex-row sm:flex-col sm:w-full gap-3 items-center justify-center">
                  <div className="flex flex-col w-full">
                    <p className="text-[13px] text-gray-600">First name</p>
                    <input
                      type="text"
                      placeholder="First name"
                      className="input-btn"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <p className="text-[13px] text-gray-600">Last name</p>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="input-btn"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-[13px] text-gray-600">Email</p>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="input-btn"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-[13px] text-gray-600">Phone number</p>
                  <input
                    type="phone"
                    placeholder="First name"
                    className="input-btn"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-[13px] text-gray-600">Message</p>
                  <textarea
                    type="message"
                    placeholder=""
                    className="input-btn"
                  />
                </div>
                <div className="flex flex-row gap-1">
                  <input type="checkbox" className="mr-2" />
                  <p>You agree to our friendly privacy policy</p>
                </div>
                <div className="redButton hover:bg-red-600">
                  <p>Send message</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
