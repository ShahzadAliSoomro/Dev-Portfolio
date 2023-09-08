import React from "react";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

const SkeletonContact = () => {
  return (
    <div className="w-full bg-[#1E293B]">
      <div className="max-w-[1440px] container mx-auto lg:p-10 p-0">
        <div className="py-14 px-4 md:px-0">
          <div className="w-full mx-auto border-b border-white">
            <h1 className="text-2xl pb-3 text-white animate-pulse bg-gray-400 w-52 h-8 m-1 rounded-full"></h1>
          </div>
          <div className="w-full flex lg:space-x-20 flex-wrap lg:flex-nowrap">
            {/* Left Column: Contact Form */}
            <div className="w-full lg:w-6/12 flex flex-col gap-5 m-1">
              <p className="text-xl text-white mt-3 animate-pulse bg-gray-400 h-6 rounded-full"></p>
              <form className="flex flex-col gap-4">
                {/* Name Input */}
                <div className="animate-pulse bg-gray-400 h-14 rounded-full"></div>
                {/* Email Input */}
                <div className="animate-pulse bg-gray-400 h-14 rounded-full"></div>
                {/* Message Textarea */}
                <div className="animate-pulse bg-gray-400 h-52 rounded-full"></div>
                {/* Submit Button */}
                <p className="animate-pulse bg-gray-400 h-14 rounded-full"></p>
              </form>
              {/* Privacy Policy */}
              <p className="text-white text-sm font-semibold animate-pulse bg-gray-400 h-4 rounded-full"></p>
            </div>
            {/* Right Column: Contact Information */}
            <div className="w-full lg:w-6/12 flex flex-col space-y-10 mt-3">
              <p className="w-64 animate-pulse bg-gray-400 h-6 rounded-full">
              </p>
              {/* Location */}
              <div className="flex gap-1 lg:text-lg text-sm items-center">
                <p className="w-8 text-white animate-pulse bg-gray-400 h-8 rounded-full"></p>
                <div className="flex flex-col gap-1">
                  <p className="text-white w-72 animate-pulse bg-gray-400 h-5 rounded-md"></p>

                  <p className="text-white w-40 animate-pulse bg-gray-400 h-5 rounded-md"></p>
                </div>
              </div>
              {/* Phone and WhatsApp */}
              <div className="flex gap-1 lg:text-lg text-sm items-center">
                <p className="w-8 text-white animate-pulse bg-gray-400 h-8 rounded-full"></p>
                <div className="flex flex-col gap-1">
                  <p className="text-white w-72 animate-pulse bg-gray-400 h-5 rounded-md"></p>

                  <p className="text-white w-40 animate-pulse bg-gray-400 h-5 rounded-md"></p>
                </div>
              </div>
              {/* Email */}
              <div className="flex gap-1 lg:text-lg text-sm items-center">
                <p className="w-8 h-8 text-white animate-pulse bg-gray-400 rounded-full"></p>
                <p className="text-white w-40 animate-pulse bg-gray-400 h-5 rounded-md"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonContact;
