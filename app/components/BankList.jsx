import React from "react";
import Image from "next/image";
const BankList = () => {
  return (
    // <div className="list-banks flex flex-col justify-center items-center mt-24"></div>
    <div className="list-banks flex flex-col justify-center items-center mt-24">
      <p className="font-normal text-gray-600 text-center">
        The trusted provider over 150+ companies from Cambodia, of accuracy
        rates and financial information
      </p>
      {/* <div className="bank flex flex-col gap-y-8 sm:gap-y-8 sm:flex-col md:flex-row justify-center items-center pt-8 gap-x-12"></div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-12 gap-y-4 mt-5">
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
  );
};

export default BankList;
