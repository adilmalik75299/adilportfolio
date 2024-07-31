import React from "react";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
const CustomNavbar = () => {
  return (
    <>
      <header className=" h-[100px] p-4  flex items-center justify-between fixed z-[60] w-screen bg-white shadow-lg">
        <Link href="/">
          <div className=" flex justify-center bg-blue-500 rounded-full h-[70px] w-[70px] overflow-hidden">
            <Image
              src="/man.png"
              height={60}
              width={60}
              alt="this is logo"
              className=""
            />
          </div>
        </Link>
        <nav>
          <ul className="flex bg-white items-center w-[50vw] justify-evenly">
            <Link href="/home">
              <li className="text-[40px] transition-transform duration-300 hover:scale-125   ">
                <IoMdHome />
              </li>
            </Link>
            <Link href="/projects">
              <li className="relative text-[25px] transition ease-in-out delay-100 hover:text-blue-500 font-light duration-500 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 after:scale-x-0 after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100 after:transition after:duration-500">
                Projects
              </li>
            </Link>

            <Link href="https://github.com/AadilMalik786" target="_blank">
              <li className="text-[40px] transition-transform duration-300 hover:scale-125 ">
                <FaGithub />
              </li>
            </Link>
            <Link
              href="https://www.linkedin.com/in/adil-malik-b8211b148/"
              target="_blank"
            >
              <li className=" text-blue-500 text-[40px] transition-transform duration-300 hover:scale-125 ">
                <FaLinkedin />
              </li>
            </Link>
            <Link
              href="https://whatsapp.com/channel/0029VajAvCS9hXF0XzbsR22I"
              target="_blank"
            >
              <li className="text-green-500 text-[40px] transition-transform duration-300 hover:scale-125 ">
                <IoLogoWhatsapp />
              </li>
            </Link>
            <Link
              href="https://www.youtube.com/@FRONTendPRO-v9z"
              target="_blank"
            >
              <li className="text-red-500 text-[40px] transition-transform duration-300 hover:scale-125 ">
                <FaYoutube />
              </li>
            </Link>
            
            <Link href="/signup">
              <li className="text-[23px] relative text-[25px] transition ease-in-out delay-100 hover:text-blue-500 font-light duration-500 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 after:scale-x-0 after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100 after:transition after:duration-500">
                Signup
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default CustomNavbar;
