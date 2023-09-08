import React from "react";

export default function SkeletonHero() {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto container lg:p-10 p-4">
        <div className="flex justify-between pt-24 xl:pt-10 flex-wrap lg:flex-nowrap gap-5">
          <div className="w-full lg:w-6/12">
            <div className="flex flex-col gap-12 lg:pt-16 pt-0">
              {/* Placeholder for a large title */}
              <h2 className="text-4xl animate-pulse border w-[170px] h-[50px] rounded-full bg-gray-400"></h2>
              
              {/* Placeholder for a larger title */}
              <h1 className="text-6xl animate-pulse border w-[410px] h-[70px] rounded-full bg-gray-400"></h1>
              
              <div>
                {/* Placeholder for a subtitle */}
                <h1
                  className="lg:text-2xl text-xs font-bold flex gap-2 items-center
                border w-[610px] h-[40px] rounded-full bg-gray-400"
                ></h1>
                
                {/* Placeholder for a description */}
                <p className="lg:text-xl text-lg mt-2 animate-pulse border w-[170px] h-[30px] rounded-full bg-gray-400"></p>
              </div>
              
              <div
                className="md:flex md:gap-3 items-center border flex p-2 rounded-full w-full md:w-[440px] h-[70px] animate-pulse 
              bg-gray-400"
              ></div>
            </div>
          </div>

          <div className="w-full lg:w-6/12 relative mt-6">
            <div className="flex lg:justify-end justify-center">
              {/* Placeholder for an image */}
              <div
                className="skeleton-image animate-pulse w-[500px] lg:w-[400px] h-[500px] lg:h-[400px] 
                border rounded-full bg-gray-400"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
