import React from "react";
import Hero from "../components /Hero";
import Navbar from "../components /Navbar";

const GetStarted = () => {
  return (
    <>
      <div className="w-full bg-yellow  py-2 h-100% px-4 mt-[-2.5rem]">
        <Navbar />
        <div className="border-black border-t-[1px]"></div>
        <div className="container mx-auto px-3">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default GetStarted;
