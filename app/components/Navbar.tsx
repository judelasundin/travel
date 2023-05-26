"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBacgkground, setNavBackground] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    const handleNavBackground = () => {
      if (window.scrollY >= 90) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };
    window.addEventListener("scroll", handleNavBackground);
  }, []);


  return (
    <div
      className={
        shadow
          ? "fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-ctcolor-ctgray shadow-lg"
          : "fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-ctcolor-ctgray"
      }
    >
      <div className={
        navBacgkground
        ?"w-full m-auto flex justify-between items-center py-4 px-10 bg-white text-black"
        :"w-full m-auto flex justify-between items-center py-4 px-10 bg-transparent text-white"
        }>
        <h3 className="text-2xl">LOGO</h3>
        <div>
          <ul className="hidden md:flex justify-center items-center">
            <li className="ml-10 text-sm hover:text-green-500">
              <Link href="/">Tour Services</Link>
            </li>
            <li className="ml-10 text-sm hover:text-green-500">
              <Link href="/about">About Us</Link>
            </li>
            <li className="ml-10 text-sm hover:text-green-500">
              <Link href="/contact">Contact Us</Link>
            </li>
            <button className="px-6 py-2 rounded-md bg-white text-green-600 border-none ml-4 hover:bg-green-500 hover:text-white hover:scale-105 duration-300 shadow-lg">Sign In</button>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top 0 w-full sm:w-[60%] md:w-[30%] h-screen bg-ctcolor-ctgrayblue p-10 ease-in duration-500"
              : "fixed left-[-100%] h-screen top-0  p-10 ease-in duration-500 "
          }
        >
          <div className=" flex w-full items-center justify-between">
            <h1 className="text-xl">Jude Lasundin</h1>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 bg-white p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="py-4 flex flex-col items-center sm:items-start text-white">
            <ul>
              <li className="py-4 text-2xl hover:text-blue-500">
                <Link onClick={()=> setNav(false)} href="/work">Work</Link>
              </li>
              <li className="py-4 text-2xl hover:text-blue-500">
                <Link onClick={()=> setNav(false)} href="/about">About</Link>
              </li>
              <li className="py-4 text-2xl hover:text-blue-500">
                <Link onClick={()=> setNav(false)} href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;