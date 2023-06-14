import React from "react";
import { GoSearch } from "react-icons/go";
import { PostItems } from "./PostItems";
import { FiArrowUpRight } from "react-icons/fi";
import { AllPostItems } from "./AllPostsItems";

const FinancialArticles = () => {
  return (
    <>
      <div className="max-w-screen mx-auto px-5 py-10 md:mx-10">
        <div className="flex flex-col items-center justify-center gap-4 mt-10">
          <p className="text-[15px] text-red-500">Our financial articles</p>
          <h1 className="text-[40px] font-bold text-center">
            The lastest writings form our website export
          </h1>
          <div className="flex max-w-[600px] justify-center">
            <p className="text-gray-400 text-center">
              Subscribe to learn about new product features, the latest in
              technology, solutions, and updates.
            </p>
          </div>
          <div className="flex flex-row gap-2 border-2 border-gray-200 rounded-lg p-1 w-[300px] items-center">
            <GoSearch size={15} color="gray" className="ml-2" />
            <p className="text-[13px] text-gray-500">Search</p>
          </div>
        </div>

        <div className='flex flex-col w-full h-full mt-20 mb-5'>
          <h1 className='text-left font-semibold text-[20px] text-gray-710'>Recent blog posts</h1>
          <div className='flex w-full h-full flex-col md:flex-row mt-5'>
            {PostItems[0] && (
              <div key={PostItems.id} className='flex md:w-1/2 items-center justify-center lg:mb-0 md:mb-0 sm:mb-5'>
                <div className='flex flex-col w-full h-full mx-auto sm:gap-2'>
                  <img src={PostItems[0].src} className='lg:w-full lg:h-full md:w-full md:h-full object-cover rounded-lg'/>
                  <p className='text-red-600 text-[13px]'>{PostItems[0].date}</p>
                  <div className='flex flex-row items-center justify-between'>
                    <h1 className='text-[20px] font-semibold'>{PostItems[0].title}</h1>
                    <div><FiArrowUpRight className='w-[25px] h-[25px] text-gray-800'/></div>
                  </div>
                  <p className='text-[13px] text-gray-500'>{PostItems[0].description}</p>
                  <div className="flex flex-row gap-2 items-center">
                    <img src={PostItems[0].publicer.src} className='w-[40px] h-[40px] rounded-full'/>
                    <div className="flex flex-col">
                    <p className='text-[13px] text-gray-800 font-semibold'>{PostItems[0].publicer.name}</p>
                    <p className='text-[12px] text-gray-500 mt-[-3px]'>{PostItems[0].publicer.date}</p>
                    </div>
                  </div>
                </div>

              </div>
            )}
            <div className='flex flex-col md:w-1/2 md:ml-6 gap-5'>
              {PostItems.slice(1, 3).map((item) => (
                <div key={item.id} className='flex flex-row lg:flex-row md:flex-row sm:flex-col gap-4'>
                  <div className='flex lg:w-[1000px] lg:h-[230px] justify- gap-4'>
                    <img src={item.src} className="lg:w-full lg:h-full md:w-[500px] md:h-[230px] sm:w-full sm:h-full object-cover rounded-lg" />
                  </div>
                  <div className="flex flex-col gap-2">
                      <p className="text-red-600 text-[13px]">{item.date} </p>
                      <div className='flex flex-row items-center justify-between'>
                        <h1 className='text-[20px] font-semibold'>{item.title}</h1>
                        <div><FiArrowUpRight className='w-[25px] h-[25px] text-gray-800'/></div>
                      </div>
                      <p className='text-[13px] text-gray-500'>{item.description}</p>
                      <div className="flex flex-row gap-2 items-center">
                        <img src={PostItems[0].publicer.src} className='w-[40px] h-[40px] rounded-full'/>
                        <div className="flex flex-col">
                          <p className='text-[13px] text-gray-800 font-semibold'>{PostItems[0].publicer.name}</p>
                          <p className='text-[12px] text-gray-500 mt-[-3px]'>{PostItems[0].publicer.date}</p>
                        </div>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>

          <h1 className='text-left font-semibold text-[20px] text-gray-710 mt-20'>All blogs posts</h1>
          <div className='flex flex-wrap w-full h-full'>
              {AllPostItems.map((post, index) => (
                <div key={index} clasName='w-full md:w1/3 p-4'>
                  <div className=''></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialArticles;
