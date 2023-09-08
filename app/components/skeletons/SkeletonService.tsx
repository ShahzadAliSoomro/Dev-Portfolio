import React from "react";

const SkeletonService = () => {
  const skeletonServices = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: "",
    text: "",
    icon: (
      <div className="animate-pulse bg-gray-400 w-12 h-12 rounded-full"></div>
    ),
  }));

  return (
    <div className="w-full bg-[#1E293B] p-4">
      <div className="max-w-[1440px] mx-auto lg:px-10 px-0">
        <div className="text-4xl flex flex-col justify-center items-center pt-10 gap-1">
          <h1 className="animate-pulse bg-gray-400 w-20 h-8 rounded-full"></h1>
          <p className="animate-pulse bg-gray-400 w-32 h-2 rounded-full"></p>
        </div>

        {/* Service Cards */}
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pt-10">
          {skeletonServices.map((service) => (
            <div
              key={service.id}
              className="border flex justify-center items-center  
              hover:scale-105 transition-all duration-500"
            >
              <div className="flex flex-col justify-center items-center p-8 gap-4">
                {/* Service Icon Skeleton */}
                <div className="animate-pulse bg-gray-400 w-14 h-14 rounded-full"></div>
                {/* Service Title Skeleton */}
                <p className="animate-pulse bg-gray-400 w-40 h-4 rounded-full"></p>
                {/* Service Text Skeleton */}
                <p className="animate-pulse bg-gray-400 w-96 h-32 rounded-full"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonService;
