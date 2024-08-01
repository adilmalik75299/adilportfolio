"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
const CustomNavbar = () => {
  const [openSlide, setOpenSlide] = useState(false);
  
  const slide = () => {
    setOpenSlide(!openSlide);
    
  };
  return (
    <>
      <header className=" h-[100px]  dm-md: h-[70px]  p-4  flex items-center justify-between fixed z-[60] w-screen bg-white shadow-lg">
        <Link href="/">
          <div className=" flex justify-center bg-blue-500 rounded-full h-[70px] w-[70px] dm-md:h-[50px] dm-md:w-[50px] overflow-hidden">
            <Image
              src="/man.png"
              height={60}
              width={60}
              alt="this is logo"
              className="dm-md:h-[50px] dm-md:w-[50px]"
            />
          </div>
        </Link>
        <nav>
          <ul className="flex dm-hm:hidden bg-white dm-md:w-[70vw] items-center w-[50vw] justify-evenly">
            <Link href="/home">
              <li className="text-[40px] dm-md:text-[24px]  transition-transform duration-300 hover:scale-125   ">
                <IoMdHome />
              </li>
            </Link>
            <Link href="/projects">
              <li className="relative text-[25px] dm-md:text-[18px] transition ease-in-out delay-100 hover:text-blue-500 font-light duration-500 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 after:scale-x-0 after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100 after:transition after:duration-500">
                Projects
              </li>
            </Link>

            <Link href="https://github.com/AadilMalik786" target="_blank">
              <li className="text-[40px] dm-md:text-[24px] transition-transform duration-300 hover:scale-125 ">
                <FaGithub />
              </li>
            </Link>
            <Link
              href="https://www.linkedin.com/in/adil-malik-b8211b148/"
              target="_blank"
            >
              <li className=" text-blue-500 text-[40px] dm-md:text-[24px] transition-transform duration-300 hover:scale-125 ">
                <FaLinkedin />
              </li>
            </Link>
            <Link
              href="https://whatsapp.com/channel/0029VajAvCS9hXF0XzbsR22I"
              target="_blank"
            >
              <li className="text-green-500 text-[40px] dm-md:text-[24px] transition-transform duration-300 hover:scale-125 ">
                <IoLogoWhatsapp />
              </li>
            </Link>
            <Link
              href="https://www.youtube.com/@FRONTendPRO-v9z"
              target="_blank"
            >
              <li className="text-red-500 text-[40px] dm-md:text-[24px] transition-transform duration-300 hover:scale-125 ">
                <FaYoutube />
              </li>
            </Link>

            <Link href="/signup">
              <li className="text-[23px] relative text-[25px] dm-md:text-[20px] transition ease-in-out delay-100 hover:text-blue-500 font-light duration-500 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 after:scale-x-0 after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100 after:transition after:duration-500">
                Signup
              </li>
            </Link>
          </ul>
          <ul>
            <li className="dm-md:hidden md:hidden dm-hm:block text-[30px]" onClick={slide}>
              <RxHamburgerMenu />
            </li>
          </ul>
        </nav>
          <section  className={`
           top-[70px]  h-[400px] w-[100px] bg-gray-200 absolute 
          flex flex-col items-start justify-evenly items-center transition-all
          transition-transform duration-1000 
          ${openSlide ? 'transition right-[10px]':'right-[-120px]'}
          dm-md:hidden md:hidden dm-hm:flex rounded-b-[10px] shadow-[-5px_20px_25px_-5px_rgba(0,0,0,0.3)]
        `}>
            <Link href="/home">
              <div className="text-[40px] dm-md:text-[24px]  transition-transform duration-300 hover:scale-150    ">
                <IoMdHome />
              </div>
            </Link>
            <Link href="/projects">
              <div className="relative text-[25px] dm-md:text-[18px] transition transition-transform duration-300 hover:scale-150 ">
              <GrProjects />
              </div>
            </Link>

            <Link href="https://github.com/AadilMalik786" target="_blank">
              <div className="text-[40px] dm-md:text-[24px] transition-transform duration-300 hover:scale-125 ">
                <FaGithub />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/adil-malik-b8211b148/"
              target="_blank"
            >
              <div className=" text-blue-500 text-[40px] dm-md:text-[24px] transition-transform duration-300 hover:scale-125 ">
                <FaLinkedin />
              </div>
            </Link>
            <Link
              href="https://whatsapp.com/channel/0029VajAvCS9hXF0XzbsR22I"
              target="_blank"
            >
              <div className="text-green-500 text-[40px] dm-md:text-[24px] transition-transform duration-300 hover:scale-125 ">
                <IoLogoWhatsapp />
              </div>
            </Link>
            <Link
              href="https://www.youtube.com/@FRONTendPRO-v9z"
              target="_blank"
            >
              <div className="text-red-500 text-[40px] dm-md:text-[24px] transition-transform duration-300 hover:scale-125 ">
                <FaYoutube />
              </div>
            </Link>

            <Link href="/signup">
              <div className="text-[23px] relative text-[25px] dm-md:text-[20px] transition-transform duration-300 hover:scale-150">
              <FaRegUserCircle />
              </div>
            </Link>
          </section>
        
      </header>
    </>
  );
};
export default CustomNavbar;
