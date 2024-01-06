import React from "react";
import { SiReact } from "react-icons/si";
import Logo from "../assets/logo.png";
import { useAuthContent } from "../Hooks/useAuthContent";
import "../index.css";

const Navbar = () => {
  const { handleLogin } = useAuthContent();

  return (
    <nav className="container pt-0 mx-auto py-3 flex justify-between align-center bg-yellow-500">
      <div className="flex gap-2 items-center">
        <img src={Logo} alt=" logo" className="w-14" />
        <h1 className="logo md:text-5xl text-3xl font-bold text-black">
          InfoSphere
        </h1>
      </div>
      <ul className="flex items-center gap-6">
        <button
          aria-label="login signup"
          className="button bg-yellow-400 text-white hover:bg-yellow-600"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="flex items-center text-white">
          <SiReact className="mr-2 text-black text-2xl" />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
