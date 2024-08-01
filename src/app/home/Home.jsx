"use client";
import CustomNavbar from "@/components/CustumNavbar";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
    <div className="">
      <CustomNavbar />
      </div>
      <section >
        <h1 className="text-[50px] text-center dm-hm:text-[30px]  pt-[120px] ">MY SKILLS</h1>
      </section>
      <main className="flex bg-re-500 h-[400px] mb-[150px] justify-evenly items-center">
        <section>
          <ul className="flex items-center justify-between bg-re-500 h-[350px] flex-col text-[50px]">
            <li className="transition-transform duration-300 hover:scale-125 cursor-pointer dm-hm:h-[70px] dm-hm:w-[70px] ">
              <Image
                height={90}
                width={90}
                src="/html-1.svg"
                className={`transition-filter duration-500 ease-in-out dm-hm:h-[inherit] dm-hm:[inherit] ${
                  isLoaded ? "blur-loaded" : "blur-initial"
                }`}
                onLoadingComplete={() => setIsLoaded(true)}
                alt="html"
              />
            </li>
            <li className="transition-transform duration-300 hover:scale-125 dm-hm:h-[70px] dm-hm:w-[70px ">
              <Image
                src="/css-3.svg"
                height={80}
                width={80}
                className={`transition-filter duration-500 ease-in-out dm-hm:h-[inherit] dm-hm:[inherit] ${
                  isLoaded ? "blur-loaded" : "blur-initial"
                }`}
                onLoadingComplete={() => setIsLoaded(true)}
                alt="css"
              />
            </li>
            <li className="transition-transform duration-300 hover:scale-125 cursor-pointer dm-hm:h-[70px] dm-hm:w-[70px] ">
              <Image
                src="/tailwind.svg"
                height={80}
                width={80}
                className={`transition-filter duration-500 ease-in-out dm-hm:h-[inherit] dm-hm:[inherit] ${
                  isLoaded ? "blur-loaded" : "blur-initial"
                }`}
                onLoadingComplete={() => setIsLoaded(true)}
                alt="tailwind"
              />
            </li>
          </ul>
        </section>
        <section>
          <ul className="flex flex-col text-[50px] items-center justify-between bg-ed-500 h-[350px]">
            <li className="transition-transform duration-300 hover:scale-125 cursor-pointer dm-hm:h-[70px] dm-hm:w-[70px] ">
              <Image
                height={80}
                width={80}
                src="/javascript-1.svg"
                className={`transition-filter duration-500 ease-in-out dm-hm:h-[inherit] dm-hm:[inherit] ${
                  isLoaded ? "blur-loaded" : "blur-initial"
                }`}
                onLoadingComplete={() => setIsLoaded(true)}
                alt="javascript"
              />
            </li>
            <li className="transition-transform duration-300 hover:scale-125 cursor-pointer dm-hm:h-[70px] dm-hm:w-[70px] ">
              <Image
                src="/react-2.svg"
                height={80}
                width={80}
                className={`transition-filter duration-500 ease-in-out dm-hm:h-[inherit] dm-hm:[inherit] ${
                  isLoaded ? "blur-loaded" : "blur-initial"
                }`}
                onLoadingComplete={() => setIsLoaded(true)}
                alt="react"
              />
            </li>
            <li className="transition-transform duration-300 hover:scale-125 cursor-pointer dm-hm:h-[70px] dm-hm:w-[70px] ">
              <Image
                src="/next.svg"
                height={80}
                width={80}
                className={`transition-filter duration-500 ease-in-out dm-hm:h-[inherit] dm-hm:[inherit] ${
                  isLoaded ? "blur-loaded" : "blur-initial"
                }`}
                onLoadingComplete={() => setIsLoaded(true)}
                alt="next"
              />
            </li>
          </ul>
        </section>
        <section>
          <ul className="flex flex-col items-center justify-between  text-[50px] bg-re-500 h-[350px]">
            <li className=" transition-transform duration-300 hover:scale-125 cursor-pointer dm-hm:h-[60px] dm-hm:w-[60px]   ">
              <Image
                height={90}
                width={90}
                src="/java-5.svg"
                className={`transition-filter duration-500 ease-in-out dm-hm:h-[inherit] dm-hm:[inherit] ${
                  isLoaded ? "blur-loaded" : "blur-initial"
                }`}
                onLoadingComplete={() => setIsLoaded(true)}
                alt="java"
              />
            </li>
            <li className="mix-blend-multiply transition-transform duration-300 hover:scale-125 cursor-pointer dm-hm:h-[70px] dm-hm:w-[70px]  ">
              <Image
                src="/mysql-4.svg"
                height={80}
                width={80}
                className={`transition-filter duration-500 ease-in-out dm-hm:h-[inherit] dm-hm:[inherit] ${
                  isLoaded ? "blur-loaded" : "blur-initial"
                }`}
                onLoadingComplete={() => setIsLoaded(true)}
                alt="mysql"
              />
            </li>
            <li className="transition-transform duration-300 hover:scale-125 cursor-pointer dm-hm:h-[70px] dm-hm:w-[70px]  ">
              <Image
                src="/tailwind.svg"
                height={80}
                width={80}
                className={`transition-filter duration-500 ease-in-out dm-hm:h-[inherit] dm-hm:[inherit] ${
                  isLoaded ? "blur-loaded" : "blur-initial"
                }`}
                onLoadingComplete={() => setIsLoaded(true)}
                alt="tailwind"
              />
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
export default Home;
