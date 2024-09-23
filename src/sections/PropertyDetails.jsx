import React, { useEffect } from "react"; // Import useEffect from React
import { useParams } from "react-router-dom";
import { property } from "../components/export"; // Import the property data
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdSpaceDashboard } from "react-icons/md";
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

const PropertyDetails = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  const { id } = useParams(); // Get the property id from the URL
  const propertyDetails = property[id]; // Get property details using the id

  if (!propertyDetails) {
    return <div>Property not found</div>;
  }

  return (
    <div className="lg:w-[90%] m-auto lg:px-20 px-6 py-10 w-full">
      <div className="flex flex-col justify-center items-start gap-4">
        <h1
          data-aos="zoom-in"
          className="text-red-600 dark:text-white text-4xl font-semibold mt-3"
        >
          {propertyDetails.name}
        </h1>
        <div id="bottom" data-aos="zoom-in" className="flex justify-between items-end w-full">
          <div className="flex justify-center items-center gap-2">
            <FaMapMarkerAlt className="size-4 text-red-500" />
            <h1 className="text-black text-xl">{propertyDetails.address}</h1>
          </div>
        </div>
        <img
          src={propertyDetails.images}
          alt={propertyDetails.name}
          data-aos="zoom-in"
          data-aos-delay="200"
          className="w-full h-[400px] object-cover mt-6 rounded-lg"
        />
      </div>
      <h2 className="text-2xl font-semibold text-black mt-4 dark:text-white">
        {propertyDetails.price}
      </h2>
      <p className="text-md text-gray-600 dark:text-white">
        {propertyDetails.about}
      </p>
      <div id="icons" className="flex mt-4 justify-left items-start gap-4">
        <div
          data-aos="zoom-in"
          className="flex justify-center items-center gap-2"
        >
          <FaBath className="size-4 text-red-400" />
          <h1 className="dark:text-white">
            <strong>Bathroom: </strong>
            {propertyDetails.bath}
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          className="flex justify-center items-center gap-2"
        >
          <FaBed className="size-4 text-red-400" />
          <h1 className="dark:text-white">
            <strong>Bedrooms: </strong>
            {propertyDetails.area}
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          className="flex justify-center items-center gap-2"
        >
          <MdSpaceDashboard className="size-4 text-red-400" />
          <h1 className="dark:text-white">
            <strong>Area: </strong>
            {propertyDetails.area}
          </h1>
        </div>
      </div>
      <div
        id="owner-info"
        className="flex justify-between items-center w-full mt-2"
      >
        <div
          data-aos="zoom-in"
          className="flex justify-center items-center gap-2"
        >
          <FaUserCircle className="size-5 text-red-400" />
          <h1 className="dark:text-white text-lg">
            <strong>Owner: </strong>
            {propertyDetails.owner}
          </h1>
        </div>
      </div>
      {/* Property Description */}

      <div className="flex flex-col justify-center items-start gap-4">
        <h2
          data-aos="zoom-in"
          className="text-red-500 dark:text-white text-2xl font-semibold mt-3"
        >
          Description
        </h2>
        <p
          data-aos="zoom-in"
          className="text-md text-gray-600 dark:text-white mt-0"
        >
          {propertyDetails.description}
        </p>
      </div>

      {/* About This Home */}
      <div className="flex flex-col justify-center items-start gap-4">
        <h2
          data-aos="zoom-in"
          className="text-red-500 dark:text-white text-2xl font-semibold mt-4 "
        >
          Features
        </h2>
        <ul
          data-aos="zoom-in"
          data-aos-delay="200"
          className=" text-gray-800 text-md"
        >
          {propertyDetails.aboutHouse.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetails;
