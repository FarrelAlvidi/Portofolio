"use client";

import React, { useRef, useState } from "react";
// import { CiMenuFries } from "react-icons/ci";
import { FiMoon } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { MdArrowOutward, MdClose } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNav = useRef(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full justify-center">
      <nav className=" w-full justify-between items-center py-3 flex z-30">
        <a className="font-bold text-4xl lg:px-10" href="">
          Farrel<span className="text-red-600">.</span>
        </a>
        <div className="absolute right-[60%] bg-yellow-200 blur-3xl opacity-70 w-20 h-20">
          saws
        </div>
        <div className="absolute right-[40%] bg-indigo-300 blur-3xl opacity-70 w-20 h-20">
          saws
        </div>
        <div className="absolute right-[30%] bg-pink-300 blur-3xl opacity-70 w-20 h-20">
          saws
        </div>
        <ul className="hidden lg:flex items-center gap-10 bg-white/80 backdrop-blur-lg rounded-full px-12 z-50 shadow-sm py-3">
          <li>
            <a className="font-ovo" href="">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="">
              About me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="">
              Project
            </a>
          </li>
          <li>
            <a className="font-ovo" href="">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" href="">
              Contact me
            </a>
          </li>
        </ul>
        <div className="md:flex items-center gap-8 relative hidden">
          <button>
            <IoMoonOutline className="w-6 h-6" />
          </button>
          <button className="hidden lg:flex bg-white text-black px-10 py-3 border-neutral-700 border rounded-full gap-3 items-center">
            Contact <MdArrowOutward className="text-lg" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden block">
        <div className="flex items-center gap-8">
          <button>
            <IoMoonOutline className="w-6 h-6" />
          </button>
          <button className="" onClick={toggleNav}>
            <RiMenu3Line className="w-6 h-6 " />
          </button>
        </div>
        </div>

        {/* Mobile Nav */}
        <div
          ref={mobileNav}
          className={`z-40 fixed top-0 right-0 w-1/2 h-full bg-white transform transition-transform duration-500 px-6 py-8 shadow ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full flex justify-end ">
            <button onClick={toggleNav}>
              <MdClose className="w-6 h-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-6 py-16">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact me</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
