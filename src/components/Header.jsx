import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom"; // Import useLocation
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import { useDarkMode } from "./DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const location = useLocation(); // Get current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const closeSignUp = () => {
    setShowSignUp(false);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Properties", path: "properties" },
    { link: "Services", path: "services" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
    { link: "Sign Up", path: "signup" },
  ];

  return (
    <>
      <nav
        className={`${
          darkMode ? `dark bg-black` : `light bg-[#F3F3F3]`
        } flex justify-between items-center 
        gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}
      >
        <div id="logo">
          <RouterLink to="/">
            <img
              src={logo}
              alt="logo"
              className="lg:w-[100px] w-[100px] dark:invert"
            />
          </RouterLink>
        </div>

        <ul className="lg:flex justify-center items-center gap-8 hidden">
          {navItems.map(({ link, path }) => (
            location.pathname === "/" ? ( // Check if we're on the homepage
              <ScrollLink
                key={path}
                className="text-black text-[15px] uppercase font-semibold 
                cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 
                hover:text-white"
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
                onClick={link === "Sign Up" ? handleSignUpClick : null}
              >
                {link}
              </ScrollLink>
            ) : (
              <RouterLink
                key={path}
                className="text-black text-[15px] uppercase font-semibold 
                cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 
                hover:text-white"
                to={`/#${path}`} // Redirect back to homepage with section link
                onClick={link === "Sign Up" ? handleSignUpClick : null}
              >
                {link}
              </RouterLink>
            )
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="flex justify-center items-center lg:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaXmark
              className="text-black dark:text-white text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              className="text-black dark:text-white text-2xl cursor-pointer"
            />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              location.pathname === "/" ? (
                <ScrollLink
                  key={path}
                  className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center"
                  to={path}
                  spy={true}
                  offset={-100}
                  smooth={true}
                  onClick={link === "Sign Up" ? handleSignUpClick : null}
                >
                  {link}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={path}
                  className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center"
                  to={`/#${path}`}
                  onClick={link === "Sign Up" ? handleSignUpClick : null}
                >
                  {link}
                </RouterLink>
              )
            ))}
          </ul>
        </div>
      </nav>

      {/* Sign-Up Pop-Up */}
      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-md">
            {/* Close Icon */}
            <FontAwesomeIcon
              icon={faTimes}
              className="absolute top-3 right-3 text-gray-500 cursor-pointer text-2xl hover:text-red-600"
              onClick={closeSignUp}
            />
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <form>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded w-full"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
