import React from "react";
import WorkImg from "../assests/webImage.png";
import WorkImg1 from "../assests/webImage1.png";
import WorkImg2 from "../assests/webImage2.png";
import WorkImg3 from "../assests/webImage3.png";
import WorkImg4 from "../assests/ss.png";
import WorkImg5 from "../assests/app1.jpg";
import WorkImg6 from "../assests/Web6.png";
import WorkImg7 from "../assests/Web7.png";

const Work = () => {
  return (
    <div name="work" className="w-full h-full text-black bg-[#m]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-500 text-center">
              <span className="text-2xl font-bold text-black tracking-wider">
                Bootstrap Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://day-bootstrap.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/chetan9129/Bootstrap-Website.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-500 text-center">
              <span className="text-2xl font-bold text-black tracking-wider">
                HTML, CSS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://music-player-chetan9129.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg2})` }}
            className="align-bottom shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-500 text-center">
              <span className="text-2xl font-bold text-black tracking-wider">
                Recipe App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://recipe-app-lyart-ten.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg3})` }}
            className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-500 text-center">
              <span className="text-2xl font-bold text-black tracking-wider">
                Quiz Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://quiz-app-khaki-eight.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg4})` }}
            className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-500 text-center">
              <span className="text-2xl font-bold text-black tracking-wider">
                Cryto-Web
              </span>
              <div className="pt-8 text-center">
                <a href="" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/chetan9129/crypto.git"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg5})` }}
            className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-500 text-center">
              <span className="text-2xl font-bold text-black tracking-wider ">
                Venato App
              </span>
              <div className="pt-8 text-center">
                <a href="#" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/chetan9129/Venato-Credit-Score-App"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg7})` }}
            className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center align-item-center items-center mx-auto content-div object-center"
          >
            {/* hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-500 text-center">
              <span className="text-2xl font-bold text-black tracking-wider ">
                AmplifAI
              </span>
              <div className="pt-8 text-center">
                <a href="#" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/chetan9129/AmplifAI.git"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg6})` }}
            className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center align-item-center items-center mx-auto content-div object-center"
          >
            {/* hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-500 text-center">
              <span className="text-2xl font-bold text-black tracking-wider ">
                Blogram
              </span>
              <div className="pt-8 text-center">
                <a href="#" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/chetan9129/AmplifAI.git"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
