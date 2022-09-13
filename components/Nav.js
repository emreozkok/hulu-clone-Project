import { useRouter } from "next/router";
import React from "react";
import requests from "../utils/requests";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex whitespace-nowrap px-10 sm:px-20 space-x-10 sm:space-x-20 text-2xl overflow-scroll scrollbar-hide ">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
          onClick={()=>router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-300 transform hover:scale-125 hover:text-white active:text-black"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#956060] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
