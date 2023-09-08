import React from "react";

const SkeletonProject = () => {
  const skeletonProjects = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    youtubeLink: "",
    text: "",
    githubLink: "#",
    demoLink: "#",
  }));
  return (
    <div className="w-full bg-[#1E293B] pt-10">
      <div className="max-w-[1440px] mx-auto container lg:p-10 p-4">
        <div className="text-4xl text-center pt-10 font-semibold flex flex-col gap-1 justify-center items-center">
          <h1 className="animate-pulse bg-gray-400 w-44 h-8 rounded-full"></h1>
          <div className="animate-pulse bg-gray-400 w-44 h-1 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 pt-8">
          {skeletonProjects.map((portfolio) => (
            <div key={portfolio.id} className="flex flex-col border shadow p-3">
              {/* Video Placeholder */}
              <div className="w-full bg-gray-400 h-60 animate-pulse rounded-md"></div>
              {/* Project Description Placeholder */}
              <div className="mt-3 animate-pulse bg-gray-400 h-40  rounded-md"></div>
              {/* GitHub and Demo Buttons Placeholder */}
              <div className="flex justify-center gap-5 pt-3">
                {/* GitHub Link Placeholder */}
                <button className="bg-gray-400 text-gray-600 font-semibold p-2 rounded-lg flex animate-pulse">
                  GitHub
                </button>
                {/* Demo Link Placeholder */}
                <button className="bg-gray-400 text-gray-600 font-semibold p-2 rounded-lg flex animate-pulse">
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonProject;
