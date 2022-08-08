import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#D6EFED]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#EF5B0C] text-2xl">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#003865]">Chetan Sharma</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#cfad3c]">
          I am a Student and Full Stack Devloper
        </h2>
        <p className="text-[#cfad3c] py-4 max-w-700 text-xl">
          I'm a full stack devloper specialising in building ocassionally
          designing exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web application.
        </p>
        <div>
          <button className="text-black group border-black border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:duration-500 hover:border-pink-600">View Work
          <span className="group-hover:rotate-90 duration-300"><HiArrowNarrowRight className="ml-3"/></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
