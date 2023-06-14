import { AllPostItems } from "./AllPostsItems";

export default function AllPosts() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full mt-5 gap-4">
        {AllPostItems.map((post, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <img
              src={post.src}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <p className="text-red-600 text-[13px]">{post.date}</p>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-[20px] font-semibold">{post.title}</h1>
              <div>
                <FiArrowUpRight className="w-[25px] h-[25px] text-gray-800" />
              </div>
            </div>
            <p className="text-[13px] text-gray-500">{post.description}</p>
            <div className="flex flex-row gap-2 items-center">
              <img
                src={post.publicer.src}
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="flex flex-col"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
