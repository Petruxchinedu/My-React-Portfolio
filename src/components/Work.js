import React from "react";
import Myportfolio from "../assets/MyPortfolio.PNG";
import FoodWebsite from "../assets/Food-Website.png";
import DisneyClone from "../assets/Disney-clone.PNG";
import BeachWebsite from "../assets/Beach-travelling-Website.png";
import TouristWebsite from "../assets/Tourist-Traveling-website.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto w-full h-full flex flex-col p-4 justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* work */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <a
            href="https://peterchinedu-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: `url(${Myportfolio})`,
                height: "180px",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <span className="font-bold text-pink-600 text-3xl mt-32">
                My Portfolio
              </span>
            </div>
          </a>
          <a
            href="https://beach-travelling-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: `url(${BeachWebsite})`,
                height: "180px",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <span className="font-bold text-pink-600 text-3xl mt-32">
                Beach Website
              </span>
            </div>
          </a>
          <a
            href="https://food-menu-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: `url(${FoodWebsite})`,
                height: "180px",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <span className="font-bold text-pink-600 text-3xl mt-32">
                Food Website
              </span>
            </div>
          </a>
          <a
            href="https://disney-clone-1-tau.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: `url(${DisneyClone})`,
                height: "180px",
              }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <span className="font-bold text-pink-600 text-3xl mt-28">
                DisneyClone
              </span>
            </div>
          </a>
          <a
            href="https://tour-traveling-sites.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: `url(${TouristWebsite})`,
                height: "180px",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <span className="font-bold text-pink-600 text-3xl mt-28">
                Tourist Website
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
