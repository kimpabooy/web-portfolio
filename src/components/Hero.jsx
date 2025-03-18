import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NavigationCircles from "./NavigationCircles";
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
    <div
      id="home"
      className="w-full h-screen flex flex-col justify-center items-center isolate relative z-10"
    >
      <Navbar />
      <div className="flex flex-col md:items-center items-start xl:mt-50 xl:gap-y-10 gap-y-3 xl:mb-0 md:mb-20 mb-0">
        <h1 className="flex flex-col xl:space-y-8 md:space-y-4 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bolder mt-8 md:mt-0">
          {/* Letter with hover effect */}
          <span className="flex mx-auto md:mx-0">
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
          <span className="xl:text-6xl md:text-4xl text-2xl tracking-wider xl:py-4 py-2 overflow-hidden text-center">
            {" "}
            I'm
            <span
              className={`inline-block xl:w-[380px] md:w-[240px] w-[160px] lg:ml-6 ml-2 font-extrabold transform origin-left transition-transform duration-1000 ease-out ${
                isRotating ? "hidden md:rotate-[100deg]" : "rotate-0"
              }`}
            >
              {currentText}
            </span>
            Developer
          </span>
        </h1>
        {/* Read My Story knapp */}
        <button
          className="xl:w-[400px] md:w-[300px] w-[270px] bg-gray-900 dark:bg-gray-200 md:py-1 py-0 md:px-4 px-2 xl:text-2xl md:text-xl text-base text-white dark:text-gray-900 tracking-widest rounded-r-4xl flex justify-between item-center md:mr-auto md:mx-0 mx-auto transition-colors duration-500"
          onClick={() => setIsTextVisible(!isTextVisible)} //inverting false statment for text.
          onMouseEnter={() => setroadImageOpacity(0.8)}
          onMouseLeave={() => setroadImageOpacity(0.5)}
        >
          {isTextVisible ? "Hide My Story" : "Read My Story"}{" "}
          <i
            className={`bx ${isTextVisible ? "bx-book-alt" : "bx-book-open"}`}
          ></i>
        </button>
        <div className="flex md:gap-12 gap-2 mr-auto absolute md:relative left-4 md:left-auto top-20 md:top-auto flex-col md:flex-row">
          {socialsIcons.map((social, index) => (
            <a
              href={social.url}
              key={index}
              className="xl:text-3xl text-2xl text-red-500 dark:text-yellow-500 dark:hover:text-white hover:text-gray-900 transition-colors duration-300"
              target="_blank"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <div className="lg:w-[600px] md:w-[500px] w-[350px] absolute left-1/2 -translate-x-1/2 -z-10">
          <img
            src="/images/road.png"
            alt="Road Image"
            className="w-full xl:mt-5 lg:-mt-5 md:-mt-2 sm:mt-8 mt-10 xl:ml-65 lg:ml-35 md:ml-35 sm:ml-25 ml-13 transition-opacity duration-500"
            style={{ opacity: roadImageOpacity }}
          />
          {/* animated text over road */}
          <span className="xl:text-xs md:text-[10px] text-[8px] font-bold tracking-wide absolute xl:top-0 lg:-top-10 md:-top-7 sm:top-1 top-5 xl:-right-43 lg:-right-7 md:-right-15 -right-2 rotate-[3.5deg] animate-bounce">
            Looking for new challenges
          </span>
          <div
            // Ruta för "My story"
            className={`h-[250px] px-3 xl:text-lg md:text-base text-xs font-light text-gray-900 dark:text-gray-200 tracking-wide transform overflow-y-auto origin-top custom-scrollbar ${
              isTextVisible ? "scale-y-100" : "scale-y-0"
            } transition-transform duration-500 ease-in-out`}
          >
            <p className="xl:py-3 py-1 px-1 [&::first-letter]:text-[30px] [&::first-letter]:ml-5 [&::first-letter]:text-red-500 dark:[&::first-letter]:text-yellow-500">
              {aboutText}
            </p>
          </div>
        </div>
      </div>
      <NavigationCircles section="home" />
    </div>
  );
};

export default Hero;
