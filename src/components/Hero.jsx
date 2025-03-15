import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  letters,
  professionTexts,
  aboutText,
  socialsIcons,
} from "../data/index";

const Hero = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [currentText, setCurrentText] = useState(professionTexts[0]);
  const [isRotating, setIsRotating] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [roadImageOpacity, setroadImageOpacity] = useState(0.5);
  let currentIndex = 0; // keeps track of current text index/string.

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % professionTexts.length;
        setCurrentText(professionTexts[currentIndex]);
        setIsRotating(false); // när texten uppdaterats animation = false;
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center isolate">
      <Navbar />
      <div className="flex flex-col md:items-center items-start xl:mt-50 xl:gap-y-10 gap-y-3 xl:mb-0 md:mb-20 mb-0">
        <h1 className="flex flex-col xl:space-y-8 md:space-y-4 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bolder">
          {/* Letter with hover effect */}
          <span className="flex">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="inline-block md:w-38 w-32 xl:-mr-20 -mr-24 relative"
                onMouseEnter={() => setHoveredLetter(index)}
                onMouseLeave={() => setHoveredLetter(null)}
              >
                {letter.char}
                <img
                  src={letter.img}
                  alt={`Hover image ${index + 1}`}
                  className={`h-10 absolute bottom-full -translate-x-1/2
                  ${letter.rotate}
                  ${hoveredLetter === index ? "visible" : "invisible"}`}
                />
              </span>
            ))}
          </span>
          <span className="xl:text-6xl md:text-4xl text-2xl tracking-wider xl:py-4 py-2 overflow-hidden">
            {" "}
            I'm
            <span
              className={`inline-block xl:w-[380px] md:w-[240px] w-[160px] lg:ml-6 ml-2 font-extrabold transform origin-left transition-transform duration-1000 ease-out ${
                isRotating ? "rotate-[100deg]" : "rotate-0"
              }`}
            >
              {currentText}
            </span>
            Developer
          </span>
        </h1>
        {/* Read My Story knapp */}
        <button
          className="xl:w-[400px] md:w-[300px] w-[270px] bg-gray-900 dark:bg-gray-200 md:py-1 py-0 md:px-4 px-2 xl:text-xl text-base text-white dark:text-gray-900 tracking-widest rounded-r-4xl flex justify-between item-center md:mr-auto md:mx-0 mx-auto transition-colors duration-500"
          onClick={() => setIsTextVisible(!isTextVisible)} //inverting false statment for text.
          onMouseEnter={() => setroadImageOpacity(0.8)}
          onMouseLeave={() => setroadImageOpacity(0.5)}
        >
          {isTextVisible ? "Hide My Story" : "Read My Story"}{" "}
          <i
            className={`bx ${isTextVisible ? "bx-book-alt" : "bx-book-open"}`}
          ></i>
        </button>
        <div className="flex md:gap-12 gap-2 mr-auto">
          {socialsIcons.map((social, index) => (
            <a
              href="#"
              key={index}
              className="xl:text-3xl text-2xl text-red-500 dark:text-yellow-500 dark:hover:text-white hover:text-gray-900 transition-colors duration-300"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        {/* TO-DO försök centrera bilden bättre */}
        <div className="md:w-[500px] w-[350px] absolut left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 ">
          <img
            src="/images/road.png"
            alt="Road Image"
            className="w-full mx-40 xl:-mt-50 lg:mt-3 lg:ml-65 md:ml-70 transition-opacity duration-500"
            style={{ opacity: roadImageOpacity }}
          />
          <span className="xl:text-xs md:text-[10px] text-[8px] font-bold tracking-wide absolute -top-5 xl:-right-50 xl:-top-55 lg:-right-45 lg:-top-2 md:-right-50 -right-28 rotate-[3.5deg] animate-bounce">
            Looking for new challenges
          </span>
          <div
            className={`xl:h-[150px] h-[100px] xl:translate-x-1/4 lg:translate-x-1/4 translate-x-2/5 px-3 xl:text-lg md:text-base text-xs font-light text-gray-900 dark:text-gray-200 text-justify tracking-wide overflow-y-auto transform origin-top custom-scrollbar ${
              isTextVisible ? "scale-y-100" : "scale-y-0"
            } transition-transform duration-500 ease-in-out`} //1h.07m.20s behöver kontrolleras. https://tailwindcss.com/docs/responsive-design#overview
          >
            <p className="xl:py-3 py-1 px-1 [&::first-letter]:text-[30px] [&::first-letter]:ml-5 [&::first-letter]:text-red-500 dark:[&::first-letter]:text-yellow-500">
              {aboutText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
