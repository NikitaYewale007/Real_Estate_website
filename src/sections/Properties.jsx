import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { useDarkMode } from "../components/DarkModeContext";
import { property } from "../components/export";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaPlus,
  FaMapMarkerAlt,
  FaCamera,
  FaHeart,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const Properties = () => {
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  const handlePropertyClick = (id) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className={`${darkMode ? "bg-black" : "bg-transparent"}`}>
      <section
        id="properties"
        className="lg:w-[90%] m-auto lg:px-20 px-6 py-10 w-full flex flex-col justify-center items-start gap-10"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            PROPERTIES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-4xl font-semibold dark:text-white"
          >
            Explore the latest properties
          </h1>
        </div>

        <div
          id="grid-box"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {property.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bg-white dark:bg-gray-800 rounded-xl w-full cursor-pointer"
                onClick={() => handlePropertyClick(index)} // On click, navigate to the details page
              >
                <div
                  id="image-box"
                  className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end"
                  style={{ backgroundImage: `url(${item.images})` }}
                >
                  <div
                    id="top"
                    className="flex justify-between items-end w-full"
                  >
                    <div>
                      <button
                        className="px-3 py-1 bg-red-600
                    hover:bg-white hover:text-black text-white rounded-full text-[13px]"
                      >
                        New
                      </button>
                    </div>
                    <div className="size-6 text-white hover:text-red-600 cursor-pointer">
                      <FaHeart />
                    </div>
    
                  </div>
                  {/* Your existing code for displaying the image */}
                </div>

                <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                  <h1 className="text-xl text-black font-semibold dark:text-white">
                    {item.name}
                  </h1>
                  <h1 className="text-2xl text-red-600 font-bold dark:text-white">
                    {item.price}
                  </h1>
                  <p className="dark:text-white">{item.about}</p>
                  {/* Add icons for bath, bed, area */}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Properties;
