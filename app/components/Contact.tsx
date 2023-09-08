"use client";
import React, { useState } from "react";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Send the form data to your backend or handle it as needed
    console.log(formData);
  };

  return (
    <div className="w-full bg-[#1E293B]">
      <div className="max-w-[1440px] container mx-auto lg:p-10 p-0">
        <div className="py-14 px-4 md:px-0">
          <div className="w-full mx-auto border-b border-white">
            <h1 className="text-2xl pb-3 text-white">CONTACT US</h1>
          </div>
          <div className="w-full flex lg:space-x-20 flex-wrap lg:flex-nowrap">
            {/* Left Column: Contact Form */}
            <div className="w-full lg:w-6/12 flex flex-col gap-5">
              <p className="text-xl text-white pt-5">
                Fill out the contact form and shahzad will contact you directly.
              </p>
              <form
              onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 py-3 outline-none text-white border-2 placeholder:text-lg placeholder:font-semibold border-gray-200 bg-transparent"
                  />
                </div>
                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 py-3 outline-none text-white border-2 placeholder:text-lg placeholder:font-semibold border-gray-200 bg-transparent"
                  />
                </div>
                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message*"
                    value={formData.message}
                    onChange={handleChange}
                    className="no-resize appearance-none block w-full text-white border-2 placeholder:text-lg placeholder:font-semibold border-gray-200 bg-transparent py-2 px-2 mb-3 leading-tight focus:outline-none h-48 resize-none"
                  />
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 border-2 border-green-500 hover:text-white hover:bg-green-500 rounded-full text-green-500 font-bold text-lg
                hover:-translate-y-3 transition-all duration-500"
                >
                  Submit
                </button>
              </form>
              {/* Privacy Policy */}
              <p className="text-white text-sm font-semibold">
                This site is protected by CAPTCHA and the Google{" "}
                <a href="#" className="text-green-500">
                  {" "}
                  Privacy Policy{" "}
                </a>
                and{" "}
                <a href="#" className="text-green-500">
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </div>
             {/* Right Column: Contact Information */}
            <div className="w-full lg:w-6/12 flex flex-col space-y-10  ">
              <p className="text-xl font-semibold text-white pt-5 ">
                {`Better yet, see us in person!`}
              </p>
              {/* Location */}
              <div className="flex gap-1 lg:text-lg text-sm items-center">
                <IoLocationOutline className="w-8 h-8 text-white" />
                <p className="text-white w-72">
                  House No.1562 Sector E-11 DHA Phase 6, Lahore
                </p>
              </div>
              {/* Phone and WhatsApp */}
              <div className="flex gap-1 lg:text-lg text-sm items-center">
                <IoCallOutline className="w-8 h-8 text-white" />
                <div>
                  <p className="text-white">Phone: +92 000 000 000</p>
                  <p className="text-white ">Whatsaap No: 00000000000</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex gap-1 lg:text-lg text-sm items-center">
                <HiOutlineMail className="w-8 h-8 text-white" />
                <p className="text-white ">
                  Email: abc@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
