import React from "react";
import {
  AiOutlineCode,
  AiOutlineMobile,
  AiOutlineLayout,
  AiOutlineDesktop,
  AiOutlineApi,
  AiOutlineFile,
} from "react-icons/ai";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Web Development",
    text: "I specialize in creating responsive and user-friendly web applications using technologies such as HTML, CSS, JavaScript, React, and more.",
    icon: <FaConnectdevelop className="w-12 h-12" />,
  },
  {
    id: 2,
    title: "Responsive Websites",
    text: "Design and develop websites optimized for various devices. Provide an optimal user experience across desktops, tablets, and mobile devices.",
    icon: <AiOutlineMobile className="w-12 h-12" />,
  },
  {
    id: 3,
    title: "Design to Web Development",
    text: "Turn Figma designs into functional web apps. Convert UI mockups and implement interactive features for a seamless design-to-development transition.",
    icon: <SiInteractiondesignfoundation className="w-12 h-12" />,
  },
  {
    id: 4,
    title: "Awesome UI & UX",
    text: "I focus on delivering exceptional user interface and user experience designs. Your users' interactions with your product will be intuitive, efficient, and delightful.",
    icon: <AiOutlineDesktop className="w-12 h-12" />,
  },
  {
    id: 5,
    title: "React Developer",
    text: "I have a strong command of React and its ecosystem, enabling me to build powerful and dynamic web applications that meet your business needs.",
    icon: <AiOutlineApi className="w-12 h-12" />,
  },
  {
    id: 6,
    title: "TypeScript",
    text: "I leverage TypeScript to bring type safety and enhanced development capabilities to my projects. It leads to more maintainable, error-free, and robust code.",
    icon: <AiOutlineFile className="w-12 h-12" />,
  },
  // ... other services
];
export default function Service() {
  return (
    <div className="w-full bg-[#1E293B] p-4">
      <div className="max-w-[1440px] mx-auto lg:px-10 px-0">
        <div className="text-4xl flex flex-col justify-center items-center pt-10 gap-1">
          <h1 className="">Service</h1>
          <p className="border-b-2 w-32 border-green-500"></p>
        </div>

        {/* Service Cards */}
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="border flex justify-center items-center hover:bg-green-500 hover:shadow-lg 
              hover:scale-105 transition-all duration-500"
            >
              <div
                className="flex flex-col justify-center items-center p-8 gap-4"
                data-aos="fade-up"
              >
                {/* Service Icon */}
                <div className="bg-green-500 p-2 rounded-full">
                  {service.icon}
                </div>
                {/* Service Title */}
                <p className="text-xl">{service.title}</p>

                {/* Service Text */}
                <p className="w-full lg:w-80 text-center text-gray-400 hover:text-white">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
