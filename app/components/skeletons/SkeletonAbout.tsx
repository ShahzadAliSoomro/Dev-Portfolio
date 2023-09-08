import React from "react";

const SkeletonAbout = () => {
  return (
    <div className="w-full bg-[#1E293B]">
      <div className="max-w-[1340px] mx-auto container lg:p-10 p-4">
        {/* About Me Title Skeleton */}
        <div className="text-4xl flex flex-col justify-center items-center gap-1">
          <h1 className="animate-pulse bg-gray-400 w-40 h-8 rounded-full"></h1>
          <p className="animate-pulse bg-gray-400 w-44 h-1 rounded-full"></p>
        </div>
        {/* About Me Content Skeleton */}
        <div className="w-full flex flex-col lg:flex-row pt-12 lg:space-x-10">
          {/* Left Section with Image Skeleton */}
          <div className="w-full lg:w-6/12 mb-10 lg:mb-0">
            <div className="animate-pulse bg-gray-400 w-[500px] h-[500px] mx-auto"></div>
          </div>

          {/* Right Section with Text Skeleton */}
          <div className="w-full lg:w-6/12 flex flex-col gap-6">
            <h1 className="text-4xl font-semibold animate-pulse bg-gray-400 w-72 h-8 rounded-full"></h1>
            <h2 className="text-2xl text-green-500 animate-pulse bg-gray-400 w-40 h-6 rounded-full"></h2>
            {/* Description Skeleton */}
            <p className="text-lg text-gray-400 animate-pulse bg-gray-400 rounded-full w-full h-24"></p>

            {/* Personal Information Skeleton */}
            <div className="flex flex-col gap-4 text-lg text-gray-400">
              <div className="flex gap-9">
                <p className="font-semibold animate-pulse bg-gray-400 w-28 h-6 rounded-full"></p>
                <p className="animate-pulse bg-gray-400 w-36 h-6 rounded-full"></p>
              </div>
              <div className="flex gap-12">
                <p className="font-semibold animate-pulse bg-gray-400 w-20 h-6 rounded-full"></p>
                <p className="animate-pulse bg-gray-400 w-40 h-6 rounded-full"></p>
              </div>
              <div className="flex gap-14">
                <p className="font-semibold animate-pulse bg-gray-400 w-16 h-6 rounded-full"></p>
                <p className="animate-pulse bg-gray-400 w-44 h-6 rounded-full"></p>
              </div>
              <div className="flex gap-14">
                <p className="font-semibold animate-pulse bg-gray-400 w-16 h-6 rounded-full"></p>
                <p className="animate-pulse bg-gray-400 w-32 h-6 rounded-full"></p>
              </div>
              <div className="flex gap-3">
                <p className="font-semibold animate-pulse bg-gray-400 w-20 h-6 rounded-full"></p>
                <p className="animate-pulse bg-gray-400 w-36 h-6 rounded-full"></p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold animate-pulse bg-gray-400 w-28 h-6 rounded-full"></p>
                <p className="animate-pulse bg-gray-400 w-24 h-6 rounded-full"></p>
              </div>
            </div>
            
            {/* Download CV Button Skeleton */}
            <div className="mt-3">
              <button className="bg-gray-400 text-gray-400 font-semibold text-lg p-4 py-2 rounded-full animate-pulse
              w-44 h-12"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonAbout;
