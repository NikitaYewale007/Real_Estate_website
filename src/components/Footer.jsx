import React from "react";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa6";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <footer
        className={`${darkMode ? `dark bg-black` : `light bg-gray-800`}
     w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10 `}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className="text-slate-200 text-justify">
            Our experts and developers would love to contribute their expertise
            and insights and help you today. Contact us to help you plan your
            next transaction, either buying or selling a home.
          </p>
          <div
            id="social-icons"
            className="flex justify-start items-center gap-4 mt-4"
          >
            <div
              className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
            cursor-pointer transform hover:scale-110 transition-transform duration-300"
            >
              <FaFacebook className="size-5" />
            </div>
            <div
              className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
            cursor-pointer transform hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram className="size-5" />
            </div>
            <div
              className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
            cursor-pointer transform hover:scale-110 transition-transform duration-300"
            >
              <FaTwitter className="size-5" />
            </div>
            <div
              className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
            cursor-pointer transform hover:scale-110 transition-transform duration-300"
            >
              <FaYoutube className="size-5" />
            </div>
          </div>
          <h1 className="text-white mt-8">
            Copyright Real Estate, All Rights Reserved
          </h1>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          <div className="flex justify-center items-center gap-3">
            <FaBuilding className=" text-white size-5" />
            <p className="text-slate-200">
              0785 Griffith Peark Dr, Las Vegas, NV 87284
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMobile className=" text-white size-5" />
            <p className="text-slate-200">+91 567 789 4673</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaFax className=" text-white size-5" />
            <p className="text-slate-200">+91 678 684 2309</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <IoMdMail className=" text-white size-5" />
            <p className="text-slate-200">office02@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">
            Latest Properties
          </h1>
          <div className="flex justify-center items-start gap-4">
            <img
              src={prop7}
              alt=""
              className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className="text-lg text-white ">Villa with amazing view</h1>
              <p className="text-slate-400">$ 789.23</p>
            </div>
          </div>
          <div className="flex justify-center items-start gap-4">
            <img
              src={prop8}
              alt=""
              className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className="text-lg text-white ">Sea View Villa</h1>
              <p className="text-slate-400">$ 278.98</p>
            </div>
          </div>
        </div>
      </footer>

      {/* slide-to-top button */}
      <div
        id="icon-box"
        className="bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='size-6 text-white'/>
        </Link>
      </div>

       {/* dark mode toggle button section */}
       <div>
         <button onClick={toggleDarkMode} className="flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6">
          {darkMode ? <FaMoon size={25} className='text-black'/> : <FaSun size={25} 
          className='text-black' />}
         </button>
       </div>
    </>
  ); 
};

export default Footer;
