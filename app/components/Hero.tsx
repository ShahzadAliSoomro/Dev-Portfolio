"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import Link from "next/link";
import "aos/dist/aos.css"; // Importing AOS styles
import dynamic from "next/dynamic";

const ParticlesAnimation = dynamic(() => import("./ParticlesAnimation"), {
  ssr: false,
  loading: () => <div>Loading</div>,
});

const texts = [
  {
    heading: "Are You Looking for",
    subheading: "NextJS Developer ?",
    emphasis: "NextJS Developer",
  },
  {
    heading: "Are You Passionate about",
    subheading: "Web Development ?",
    emphasis: "Web Development",
  },
  {
    heading: "Are You Ready to build",
    subheading: "Amazing Websites ?",
    emphasis: "Amazing Websites",
  },
];

export default function Hero() {
  // State variables
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [showIcons, setShowIcons] = useState(false);
  const [isOpening, setIsOpening] = useState(true);

  async function init() {
    const aos = (await import("aos")).default;
    if (typeof window !== "undefined") {
      aos.init({
        duration: 200, // Animation duration in milliseconds
        once: false, // Whether animations should only happen once
      });
    }
  }
  // Use useEffect to run code after the component is mounted
  useEffect(() => {
    init();
  }, []); // Empty dependency array ensures this effect runs only once

  // Effect to show icons after a delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIcons(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // Data for social media icons
  const iconData = [
    // icon data
    {
      link: "https://github.com",
      icon: <TiSocialGithubCircular className="lg:w-12 w-10 lg:h-12 h-10" />,
      text: "Github",
    },
    {
      link: "https://www.linkedin.com",
      icon: <TiSocialLinkedinCircular className="lg:w-12 w-10 lg:h-12 h-10" />,
      text: "LinkedIn",
    },
    {
      link: "https://www.facebook.com",
      icon: <TiSocialFacebookCircular className="lg:w-12 w-10 lg:h-12 h-10" />,
      text: "Facebook",
    },
    {
      link: "https://twitter.com",
      icon: <TiSocialTwitterCircular className="lg:w-12 w-10 lg:h-12 h-10" />,
      text: "Twitter",
    },
    {
      link: "https://instagram.com",
      icon: <TiSocialInstagramCircular className="lg:w-12 w-10 lg:h-12 h-10" />,
      text: "Instagram",
    },
  ];

  // Effect to animate the text
  useEffect(() => {
    const interval = setInterval(() => {
      if (isOpening) {
        setCurrentCharIndex((prevIndex) => {
          if (prevIndex === texts[currentIndex].emphasis.length - 1) {
            setIsOpening(false);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      } else {
        setCurrentCharIndex((prevIndex) => {
          if (prevIndex === 0) {
            setIsOpening(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            return 0;
          }
          return prevIndex - 1;
        });
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, currentCharIndex, isOpening]);

  const { heading, subheading, emphasis } = texts[currentIndex];
  const displayedText = emphasis.substring(0, currentCharIndex + 1);
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto container lg:p-10 p-4">
        <div className="flex justify-between pt-24 xl:pt-10 flex-wrap lg:flex-nowrap gap-5">
          <div className="w-full lg:w-6/12">
            <div className="flex flex-col gap-12 lg:pt-16 pt-0">
              <h2 className="text-4xl">Hi There!</h2>
              <h1 className="text-6xl">I'M SHAHZAD ALI</h1>
              <div>
                <h1 className="lg:text-2xl text-xs font-bold flex gap-2 items-center">
                  {heading}{" "}
                  <span className="lg:text-5xl xl:text-3xl text-xl">
                    {displayedText}
                  </span>
                </h1>
                <p className="lg:text-xl text-lg">{subheading}</p>
              </div>
              <div className="md:flex md:gap-3 items-center border flex p-2 rounded-full w-full md:w-[440px]">
                {iconData.map((icon, index) => (
                  <Link key={index} href={icon.link} className="relative group">
                    <div
                      className={`relative rounded-full text-gray-400 flex items-center ${
                        hoveredIcon === index
                          ? "border-2 border-green-500 text-white "
                          : "border-2 border-transparent"
                      } transition-border duration-300 ease-in-out`}
                      onMouseEnter={() => setHoveredIcon(index)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      {icon.icon}
                      {hoveredIcon === index && (
                        <div className="text-white py-1 px-3 lg:text-lg text-sm font-semibold">
                          {icon.text}
                        </div>
                      )}
                      {/* Accessible text for screen readers */}
                      <span className="sr-only">{icon.text}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-6/12 relative">
            <div className="flex lg:justify-end justify-center">
              <div className="">
                {/* Display an image here */}
                <Image
                  src="/vec-d.png"
                  alt="vector"
                  width={500}
                  height={500}
                  className="w-[500px] lg:w-[580px] lg:h-[580px] object-cover"
                  loading="eager"
                  priority
                />
              </div>
              {showIcons && (
                <div
                  className="absolute top-[53%] md:top-[15%] lg:top-[200px] xl:top-[15%] left-[32%] md:left-[30%] lg:left-[55%] xl:left-[7%] 2xl:top-[15%] 2xl:left-[20%]
                "
                >
                  {/* Display animated icons here */}
                  <div className="flex flex-col lg:gap-5 xl:gap-5 2xl:gap-5 gap-1">
                    <div className="flex gap-[40px] md:gap-[20%] lg:gap-[280px] xl:gap-[200px] px-[10%] md:px-[10%] lg:px-[50px] xl:px-[45px]">
                      {/* Icons */}
                      {/* Example icon */}
                      <div
                        data-aos="fade-up-left"
                        data-aos-duration="2500"
                        className=""
                      >
                        <Image
                          src="/react.png"
                          alt="react"
                          width={100}
                          height={100}
                          className="w-[30px] md:w-[15%] lg:w-[60%] h-auto rounded-full animate-fadeInFromCenter animate-spin"
                        />
                      </div>
                      <div
                        data-aos="fade-up-right"
                        data-aos-duration="2500"
                        className="mr-[0%] ml-6 md:ml-0 lg:ml-0 md:mr-[15%] lg:mr-[0%]"
                      >
                        <Image
                          src="/nodejs.png"
                          alt="node"
                          width={100}
                          height={100}
                          className="w-[30px] md:w-[12%] lg:w-[60%] h-auto rounded animate-fadeInFromCenter animate-spin"
                        />
                      </div>
                    </div>
                    <div className="flex gap-[40px] md:gap-[20%] lg:gap-[380px] xl:gap-[280px] px-[10%] md:px-[10%] lg:px-[0px] xl:px-[10px]">
                      <div
                        data-aos="fade-up-left"
                        data-aos-duration="2500"
                        className=""
                      >
                        <Image
                          src="/javascript.png"
                          alt="javaScript"
                          width={100}
                          height={100}
                          className="w-[25px] md:w-[15%] lg:w-[60%] xl:w-[65%] h-auto rounded-full animate-fadeInFromCenter animate-spin"
                        />
                      </div>
                      <div
                        data-aos="fade-up-right"
                        data-aos-duration="2500"
                        className="mr-[0%] ml-6 md:ml-0 lg:ml-0 md:mr-[15%] lg:mr-[0%]"
                      >
                        <Image
                          src="/tailwind.png"
                          alt="tailwind"
                          width={100}
                          height={100}
                          className="w-[20px] md:w-[12%] lg:w-[60%] h-auto rounded animate-fadeInFromCenter animate-spin"
                        />
                      </div>
                    </div>

                    <div className="flex gap-[40px] md:gap-[20%] lg:gap-[420px] xl:gap-[320px] px-[10%] md:px-[10%] lg:px-[0px] xl:px-[0px]">
                      <div
                        data-aos="fade-up-left"
                        data-aos-duration="2500"
                        className=""
                      >
                        <Image
                          src="/html.png"
                          alt="react"
                          width={100}
                          height={100}
                          className="w-[20px] md:w-[15%] lg:w-[60%] xl:w-[60%] h-auto rounded-full animate-fadeInFromCenter animate-spin"
                        />
                      </div>
                      <div
                        data-aos="fade-up-right"
                        data-aos-duration="2500"
                        className="mr-[0%] ml-6 md:ml-0 lg:ml-0 md:mr-[15%] lg:mr-[0%]"
                      >
                        <Image
                          src="/typescript.png"
                          alt="node"
                          width={100}
                          height={100}
                          className="w-[20px] md:w-[12%] lg:w-[60%] h-auto rounded animate-fadeInFromCenter animate-spin"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Particle animation */}
      <ParticlesAnimation />
    </div>
  );
}
