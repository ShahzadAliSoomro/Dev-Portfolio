import React from "react";

const SkeletonSkills = () => {
  return (
    <div className="w-full bg-[#1E293B]">
      <div className="max-w-[1440px] mx-auto relative p-4">
        <div className="text-4xl flex flex-col justify-center items-center pt-10 gap-1">
          <h1 className="animate-pulse bg-gray-400 w-20 h-8 rounded-full"></h1>
          <div className="animate-pulse bg-gray-400 w-32 h-2 rounded-full"></div>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-center gap-5 lg:gap-16 mt-10">
          {/* Left Section: Display Your Image Skeleton */}
          <div className="w-full lg:w-[500px] lg:h-[500px] lg:ml-44 ml-0">
            <div className="animate-pulse bg-gray-400 w-[500px] h-[640px] mx-auto"></div>
          </div>
          {/* Right Section: Display Your Skills Skeleton */}
          <div className="w-full sm:w-1/2 flex pt-9 lg:pt-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* Vertical Line Separator */}
              <div className="sm:block w-1  absolute left-5 lg:left-0 h-full transform -translate-x-1/2 animate-pulse bg-gray-400"></div>
              {/* Display Each Skill Skeleton */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row justify-center items-center lg:mt-5 mt-0">
                    <div className="flex lg:pl-8 w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 lg:pl-0 pl-14">
                        <h1 className="animate-pulse bg-gray-400 w-20 h-5 m-1 rounded-full"></h1>
                        {/* Skill Proficiency Bar Skeleton */}
                        <div className="mb-4 h-4 relative w-64 lg:w-72 rounded-full overflow-hidden bg-gray-200">
                          <div className="h-full  sm:bg-green-500 absolute animate-pulse bg-gray-400"></div>
                        </div>
                      </div>
                    </div>
                    {/* Skill Proficiency Percentage Badge Skeleton */}
                    <div className="rounded-full border-white border-4 w-12 h-8 absolute left-5 lg:left-0 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center animate-pulse bg-gray-400">
                      <span className="text-white text-sm "></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonSkills;
