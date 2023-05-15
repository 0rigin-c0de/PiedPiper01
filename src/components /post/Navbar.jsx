import React, { useState } from "react";

const navlinks = [
  {
    nav: "For you",
    con: "foryou",
  },
];

const Navbar = () => {
  const [choice, setChoice] = useState("foryou");
  return (
    <nav className="mt-12">
      <ul className="flex gap-12 text-xl">
        {navlinks.map((nav) => (
          <li
            key={nav.con}
            className="cursor-pointer"
            onClick={() => setChoice(nav.con)}
          >
            {nav.nav}
          </li>
        ))}
      </ul>
      <div className="border border-t-[0px] w-full mt-4 flex items-center">
        <div
          className={`border ${
            choice === "foryou" ? "border-t-black" : "border-t-white"
          } w-24 border-t-2`}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
