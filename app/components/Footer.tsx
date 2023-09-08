import React from "react";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-slate-800">
      <div className="w-full container mx-auto bg-transparent px-2 md:px-12">
        <div className="flex justify-between text-white p-3 flex-wrap gap-4 lg:flex-nowrap lg:gap-0">
          <div className="text-lg">
            <p>Designed and Developed by Shahzad Ali</p>
          </div>
          <div className="text-lg">
            <p>Copyright © 2023 SZ</p>
          </div>
          <div className="flex gap-5 cursor-pointer text-gray-400 ">
            <Link href="https://github.com">
              <span
                className="w-9 h-9 flex items-center justify-center rounded-full
                hover:bg-green-500 hover:text-[#112A46] 
                hover:-translate-y-2 transition-all duration-500"
              >
                <TiSocialGithubCircular aria-label="GitHub" className="w-9 h-9"/>
              </span>
            </Link>
            <Link href="https://www.linkedin.com">
              <span
                className="w-9 h-9 flex items-center justify-center rounded-full
                hover:bg-green-500 hover:text-[#112A46] 
                hover:-translate-y-2 transition-all duration-500"
              >
                <TiSocialLinkedinCircular aria-label="LinkedIn" className="w-9 h-9"/>
              </span>
            </Link>
            <Link href="https://www.facebook.com">
              <span
                className="w-9 h-9 flex items-center justify-center rounded-full
                hover:bg-green-500 hover:text-[#112A46] 
                hover:-translate-y-2 transition-all duration-500"
              >
                <TiSocialFacebookCircular aria-label="Facebook" className="w-9 h-9"/>
              </span>
            </Link>
            <Link href="https://twitter.com">
              <span
                className="w-9 h-9 flex items-center justify-center rounded-full
                hover:bg-green-500 hover:text-[#112A46] 
                hover:-translate-y-2 transition-all duration-500"
              >
                <TiSocialTwitterCircular aria-label="Twitter" className="w-9 h-9"/>
              </span>
            </Link>
            <Link href="https://instagram.com">
              <span
                className="w-9 h-9 flex items-center justify-center rounded-full
                hover:bg-green-500 hover:text-[#112A46] 
                hover:-translate-y-2 transition-all duration-500"
              >
                <TiSocialInstagramCircular aria-label="Instagram" className="w-9 h-9"/>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
