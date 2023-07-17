import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#D6EFED] text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className=" pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-1 gap-8 px-4">
          <div>
            <p className="text-2xl text-[#003865]">
              I am a fourth year undergraduate student of the Department of
              Computer Science and Engineering, Chitkara University, Punjab,
              India. I was born in Himachal Pradesh. I was fortunate enough to
              know from a young age that I wanted to be an engineer. The
              engineering way of thinking came naturally to me. What I didn't
              know was what type of engineer I wanted to be. When push came to
              shove, I chose Software Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
