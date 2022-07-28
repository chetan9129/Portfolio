import React from "react";
import HTML from "../assests/html.png"
import CSS from "../assests/css.png"
import JAVASCRIPT from "../assests/javascript.png"
import GITHUB from "../assests/github.png"
import SQL from "../assests/sql.png"
import REACT from "../assests/react.png"
import CLANG from "../assests/c++.png"
import JAVA from "../assests/java.png"
// import PYTHON from "../assests/python.png"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#D6EFED] text-black'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='p-2 w-25 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='p-2 w-25 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='p-2 w-25 mx-auto' src={JAVASCRIPT} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='p-2 w-25 mx-auto' src={GITHUB} alt="HTML icon" />
                  <p className='my-4'>GitHub</p>
              </div>
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='p-2 w-25 mx-auto ' src={SQL} alt="HTML icon" />
                  <p className='my-4'>MySql</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='p-2 w-25 mx-auto ' src={REACT} alt="HTML icon" />
                  <p className='my-4'>ReactJs</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='p-2 w-25 mx-auto' src={CLANG} alt="HTML icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='p-2 w-25 mx-auto' src={JAVA} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div> */}
          </div>
      </div>
    </div>
  );
};

export default Skills;
