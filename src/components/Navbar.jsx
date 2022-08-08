// import { useState } from "react";
import React from "react";

import {
  FaBars,
  // FaTimes,
  FaGithub,
  FaLinkedin,
  // FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assests/logo.png";

import { Link } from "react-scroll";

const Navbar = () => {
  // const [nav, setNav] = useState(1);
  // const handleClick = () => setNav(nav);
  return (
    <div className="fixed w-full h-[75px] flex justify-between items-center px-6 bg-[#D6EFED] text-black">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "100px" }} />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex text-xl">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" s smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div  className="md:hidden z-10">
        <FaBars />
      </div>
      {/* Mobile Menu */}
      {/* <ul  className=" absolute top-0 left-0 w-full h-screen bg-[#D6EFED]  flex-col justify-center items-center">
        <li className="py-6 text-4xl ">Home</li>
        <li className="py-6 text-4xl ">About</li>
        <li className="py-6 text-4xl ">Skills</li>
        <li className="py-6 text-4xl ">Work</li>
        <li className="py-6 text-4xl ">Contact Me</li>
      </ul> */}
      {/* Social Icons */}
      <div className="hidden lg:flex fixed fle-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-85px] hover:ml-[-10px] duration-700 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/chetan9129/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-85px] hover:ml-[-10px] duration-700 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/chetan9129"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-85px] hover:ml-[-10px] duration-700 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="mailto:anku9129@gmail.com"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-85px] hover:ml-[-10px] duration-700 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
