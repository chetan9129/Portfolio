import React from "react";
import HTML from "../assests/html.png";
import CSS from "../assests/css.png";
import JAVASCRIPT from "../assests/javascript.png";
import GITHUB from "../assests/github.png";
import SQL from "../assests/sql.png";
import REACT from "../assests/react.png";
import CLANG from "../assests/c++.png";
import JAVA from "../assests/java.png";
// import PYTHON from "../assests/python.png"

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#D6EFED] text-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>
        <div className="w-full  grid grid-cols-2 sm:grid-cols-4 gap-1 text-center py-8">
          <div className="shadow-md shadow-[#040c16] w-[175px] h-[250px] hover:scale-105 duration-500">
            <img
              className="p-2 w-25 mx-auto scale-50"
              src={HTML}
              alt="HTML icon"
            />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] w-[175px] h-[250px] hover:scale-105 duration-500">
            <img
              className="p-2 w-25 mx-auto scale-50"
              src={CSS}
              alt="HTML icon"
            />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] w-[175px] h-[250px] hover:scale-105 duration-500">
            <img
              className="p-2 w-25 mx-auto scale-50"
              src={JAVASCRIPT}
              alt="HTML icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] w-[175px] h-[250px] hover:scale-105 duration-500">
            <img
              className="p-2 w-25 mx-auto scale-50"
              src={GITHUB}
              alt="HTML icon"
            />
            <p className="my-4">GitHub</p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-1 text-center pb-8">
          <div className="shadow-md w-[175px] h-[250px] shadow-[#040c16] hover:scale-105 duration-500">
            <img
              className="p-2 w-25 h-[255px] mx-auto scale-50"
              src={CLANG}
              alt="HTML icon"
            />
            <p className="mb-4">C++</p>
          </div>
          <div className="shadow-md  w-[175px] h-[250px]  shadow-[#040c16] hover:scale-105 duration-500">
            <img
              className="p-2 w-25  h-[255px] mx-auto scale-50"
              src={SQL}
              alt="HTML icon"
            />
            <p className="mb-4">MySql</p>
          </div>
          <div className="shadow-md w-[175px] h-[250px] shadow-[#040c16] hover:scale-105 duration-500">
            <img
              className="p-2 h-[255px] w-25 mx-auto scale-50"
              src={JAVA}
              alt="HTML icon"
            />
            <p className="mb-4">Java</p>
          </div>
          <div className="shadow-md w-[175px] h-[250px] shadow-[#040c16] hover:scale-105 duration-500">
            <img
              className="p-2 w-25 mx-auto scale-50"
              src={REACT}
              alt="HTML icon"
            />
            <p className="my-4">ReactJs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
