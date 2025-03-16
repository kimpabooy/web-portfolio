import React from "react";

const Loader = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 bg-white dark:bg-gray-900 z-50 grid place-items-center transition-opacity duration-1000 ease-in-out ${
        isLoading ? "opasity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img
        id="gif"
        src="images/Loading-gif.gif"
        alt="Loader"
        className="w-40"
      />
    </div>
  );
};

export default Loader;
