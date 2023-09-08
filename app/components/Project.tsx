"use client";
import dynamic from "next/dynamic";
import React from "react";
import Link from "next/link";
import {
  TiSocialGithubCircular,
  TiSocialDribbbleCircular,
} from "react-icons/ti";

// const Link = dynamic(() => import("next/link"),
//   { ssr: false });

// Define an array of projects, each with an ID, video source, description, GitHub link, and demo link
const Projects = [
  {
    id: 1,
    youtubeLink: "https://youtu.be/2xrWWJXCwWg",
    text: "Frontend development for a brand shoes website showcasing the latest footwear collections. Utilized HTML, CSS, JavaScript, React, and Tailwind CSS to craft responsive and visually appealing web pages. Integrated interactive features to enhance user experience, ensuring seamless navigation through product listings. Created a dynamic and engaging frontend to highlight the brand's image and product offerings.",
    githubLink: "https://github.com",
    demoLink: "https://vercel.app/",
  },
  {
    id: 2,
    youtubeLink: "https://youtu.be/QxgFLkDKUxw",
    text: "🚀 Created a cutting-edge single-page application in just 2 days using React and TypeScript, showcasing my mastery of web development technologies. The app is fully responsive thanks to Tailwind CSS and includes dynamic elements powered by React Slick for slick image carousels. Leveraged a range of powerful dependencies like React Icons for eye-catching visuals, Next Progress Bar for smooth user experiences, and Classnames for efficient CSS styling. Utilized PostCSS and Autoprefixer for optimal CSS processing. The result is an engaging user experience with seamless navigation and an eye-catching design.",
    githubLink: "https://github.com",
    demoLink: "https://vercel.app/",
  },
  {
    id: 3,
    youtubeLink: "https://youtu.be/1OAseYZerIs",
    text: "Ezeefuil, a project I've built using Next.js and Tailwind CSS, aimed at revolutionizing professional networking. Ezeefuil combines the power of Next.js's server-side rendering and Tailwind CSS's utility-first approach to creating a seamless and visually appealing user experience. With optimized performance and a responsive design!",
    githubLink: "https://github.com",
    demoLink: "http://vercel.app/",
  },
  {
    id: 4,
    youtubeLink: " https://youtu.be/0xbxiXyCLTw",
    text: "Successfully developed a feature-rich e-commerce website using HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. Crafted responsive and dynamic web pages that showcase a diverse range of products. Implemented advanced frontend functionalities, such as product filtering, sorting, and cart management. Leveraged React and Next.js for scalable and performant web applications. Ensured efficient and responsive styling using Tailwind CSS. The completed e-commerce website offers a seamless shopping experience and demonstrates expertise in modern front-end development.",
    githubLink: "https://github.com",
    demoLink: "https://vercel.app/",
  },
  {
    id: 5,
    youtubeLink: "https://youtu.be/rssrCSyUhYI",
    text: "Designed and developed an engaging football-themed website using HTML and CSS. Created responsive and interactive web pages that highlight the excitement of football. Proficiently utilized HTML to structure the content and CSS to style the website elements. The project showcases expertise in front-end development by delivering an attractive and immersive user experience.",
    githubLink: "https://github.com",
    demoLink: "https://vercel.app/",
  },
  {
    id: 6,
    youtubeLink: "https://youtu.be/NfKsRF_5ZG0",
    text: "Created the front page of an Upwork-themed website using HTML and CSS. Leveraged HTML to structure the content and CSS to style the layout and elements. The project demonstrates skills in frontend development, delivering an appealing and professional user interface that mirrors the Upwork platform's aesthetic.",
    githubLink: "https://github.com",
    demoLink: "https://vercel.app/",
  },
  {
    id: 7,
    youtubeLink: "https://youtu.be/rof53c13Vz0",
    text: "Developed a comprehensive dashboard website featuring various functionalities such as Order Page, Employees Page, Customer Page, Calendar Page, Kanban Page, Editor Page, Color Picker Page, Line Chart Page, Area Chart Page, Bar Chart Page, Pie Chart Page, Financial Page, and dynamic theme changes. The project was built using HTML, CSS, and JavaScript, showcasing frontend development expertise in creating interactive and user-friendly data visualization and management tools.",
    githubLink: "https://github.com",
    demoLink: "https://vercel.app/",
  },
  {
    id: 8,
    youtubeLink: "https://youtu.be/mask3dHnTq0",
    text: "Crafted a captivating website showcasing an innovative fusion of industrial aesthetics and streetwear fashion. The front page design employs HTML for structured content and CSS for refined layout and element styling. The project aptly demonstrates prowess in frontend development, delivering a visually stunning and professional user interface that reimagines the world of fashion and design.",
    githubLink: "https://github.com",
    demoLink: "https://vercel.app/",
  },
  {
    id: 9,
    youtubeLink: "https://youtu.be/98TWnMbjqHE",
    text: "Developed an innovative fashion website using Next.js, Tailwind CSS, and various frontend technologies. The front page design seamlessly combines industrial aesthetics and streetwear fashion, achieved through structured HTML content and refined CSS styling. Leveraging the power of Next.js, the project delivers smooth navigation and dynamic rendering, while Tailwind CSS streamlines responsive design. The website showcases an extensive range of features, including an interactive order page, employee management, customer profiles, a dynamic calendar, a customizable kanban board, a powerful text editor, and data visualization with various chart types. The project's cohesive UI/UX redefines the boundaries of modern fashion and design, demonstrating mastery over the frontend development stack. GitHub repository available for further exploration.",
    githubLink: "https://github.com",
    demoLink: "https://vercel.app/",
  },
];


export default function Project() {
  return (
    <div className="w-full bg-[#1E293B] pt-10">
      <div className="max-w-[1440px] mx-auto container lg:p-10 p-4">
        <div className="text-4xl text-center pt-10 font-semibold flex flex-col gap-1 justify-center items-center">
          <h1 className="">PORTFOLIO</h1>
          <div className="border-b-2 w-52 border-green-500"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 pt-8">
          {Projects.map((portfolio) => (
            <div key={portfolio.id} className="flex flex-col border shadow p-3">
              {/* Video Component */}
              <div className="w-full">
                <iframe
                  width="100%"
                  height="350"
                  src={`https://www.youtube.com/embed/${portfolio.youtubeLink
                    .split("/")
                    .pop()}`}
                  title={`YouTube Video ${portfolio.id}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Project Description */}
              <div className="pt-3">
                <p> {portfolio.text}</p>
              </div>
              {/* GitHub and Demo Buttons */}
              <div className="flex justify-center gap-5 pt-3">
                {/* GitHub Link */}
                <Link href={portfolio.githubLink}>
                  <button className="bg-green-500 text-[#112A46] font-semibold p-2 rounded-lg flex hover:bg-green-500 hover:shadow-lg hover:scale-110 transition-all duration-500">
                    <TiSocialGithubCircular className="w-6 h-6" />
                    Github
                  </button>
                </Link>
                {/* Demo Link */}
                <Link href={portfolio.demoLink}>
                  <button className="bg-green-500 text-[#112A46] font-semibold p-2 rounded-lg flex hover:bg-green-500 hover:shadow-lg hover:scale-110 transition-all duration-500">
                    <TiSocialDribbbleCircular className="w-6 h-6" />
                    Demo
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
