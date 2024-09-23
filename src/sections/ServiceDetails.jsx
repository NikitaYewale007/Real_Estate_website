import React, { useEffect } from 'react';
import { bankDetails } from '../components/export'; // Import the bank details
import { useDarkMode } from '../components/DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiMoneyStack } from 'react-icons/gi';

const ServiceDetails = () => {
  const { darkMode } = useDarkMode();

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  return (
    <div className={`lg:w-[90%] m-auto lg:px-20 px-6 py-10 w-full ${darkMode ? 'dark' : ''}`}>
      <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">Home Loan Services</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">We partner with trusted banks to provide the best home loan options. Explore below:</p>

      <div className="grid lg:grid-cols-2 gap-8">
        {bankDetails.homeLoans.map((bank, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-semibold text-red-500 dark:text-white mb-4">{bank.name}</h2>
            <p className="text-md text-gray-600 dark:text-gray-300 mb-4">{bank.info}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2"><strong>Interest Rate:</strong> {bank.interestRate}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2"><strong>Contact:</strong> <a href={`mailto:${bank.contact}`} className="text-blue-500 hover:underline">{bank.contact}</a></p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2"><strong>Phone:</strong> <a href={`tel:${bank.phone}`} className="text-blue-500 hover:underline">{bank.phone}</a></p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4"><strong>Website:</strong> <a href={bank.website} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{bank.website}</a></p>
            <p className="text-sm text-gray-500 dark:text-gray-400"><strong>Real Estate Connection:</strong> {bank.connection}</p>
          </div>
        ))}
         {/* Animated Text and Image */}
         <div
          className="flex flex-col items-center justify-center bg-gradient-to-r from-red-400 to-pink-500 rounded-lg py-12"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <GiMoneyStack className="text-6xl text-white mb-4 animate-bounce" />
          <h2 className="text-3xl font-semibold text-white mb-4">Exciting Offers!</h2>
          <p className="text-md text-white text-center">
            Don't miss out on our limited-time home loan offers and promotions. Check out the latest deals now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;







