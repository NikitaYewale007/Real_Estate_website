import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import heroimg from '../assets/images/hero1.webp'
import AOS  from 'aos'
import 'aos/dist/aos.css';

const Hero = () => {
 
    useEffect(()=>{
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
           
        });
    }, [])

    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <>
          <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
      <section
        id="hero"
        className="w-full h-[600px] m-auto bg-cover bg-center  flex justify-top p-32 flex-col items-end lg:px-28 px-10 gap-7 z-20"
        style={{ backgroundImage: `url(${heroimg})` }}
      >   
        <h1 data-aos="zoom-in" className="text-6xl text-white font-bold lg:pl-[500px] pl-0 lg:leading-[70px] leading-[60px] text-right">
          The #1 site real estate professionals trust*
        </h1> 
        <p data-aos="zoom-in" data-aos-delay="200" className="text-white text-xl lg:pl-[500px] pl-0 text-center">
        Through our proprietary platform, We provide a complete service for the sale, purchase, or rental of real estate.
        </p>
      </section>
    </div> 
           
          {/* search for property type */}
          <div className={`${darkMode ? `dark bg-black`:`light bg-transparent`}`} >
            <div data-aos="zoom-in" id='form' className={`${darkMode ? `dark bg-gray-800` : `light bg-white`} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}>
              <div className='w-full'>
                <h1 className='text-black font-semibold dark:text-white'>LOCATION</h1>
                <input type="text" placeholder='Enter an address, state, city or pincode' className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]' />
              </div>

              <div className='w-full'>
                <h1 className='text-black font-semibold dark:text-white'>TYPE</h1>
                <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'>
                  <option value="" disabled selected>Select Property</option>
                  <option value="option1">Rentales</option>
                  <option value="option2">Sales</option>
                  <option value="option3">Commercial</option>
                </select>
              </div>

              <div className='w-full'>
                <h1 className='text-black font-semibold dark:text-white'>CATEGORY</h1>
                <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'>
                  <option value="" disabled selected>Property Category</option>
                  <option value="option1">Apartments</option>
                  <option value="option2">Houses</option>
                  <option value="option3">Duplex</option>
                  <option value="option4">Villas</option>
                  <option value="option5">Condos</option>  
                </select>
              </div>

              <div className='w-full'>
                <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>SUBMIT</button>
              </div>


            </div>
          </div>
        </>
      );
 }      


export default Hero