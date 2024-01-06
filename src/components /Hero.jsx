import React from "react";
import img from "../assets/img.png";
import "../index.css";

const Hero = () => {
  return (
    <div className="mt-20 mb-10">
      {" "}
      <div className="container flex justify-center lg:flex-row flex-col lg:items-center">
        <div className="lg:w-1/2">
          <h1 className="lg:text-7xl text-3xl font-bold leading-none mb-2 text-yellow-500">
            Welcome to <span className="text-pink-600">InfoSphere</span>!
          </h1>
          <p className="text-2xl font-bold text-gray-500 mb-4">
            Explore and Discover the Amazing World
          </p>
          <div className="flex items-center text-lg text-yellow-500 mb-4"></div>
        </div>
        <div className="lg:w-1/2">
          <img
            src={img}
            alt="website"
            className="animate-fade-in-left border-4 border-gray-500 rounded-lg object-contain h-70"
          />
        </div>
      </div>
      <div className="lg:text-3xl font-bold text-center text-lg text-gray-700 mb-0 py-20 ">
        {" "}
        Made with ❤️ by
        <a
          href="https://github.com/0rigin-c0de/PiedPiper01"
          target="_blank"
          rel="noreferrer"
          className="text-pink-600 underline mx-4"
        >
          Sunil Kumar
        </a>
        using ReactJS and Firebase
      </div>
    </div>
  );
};

export default Hero;
