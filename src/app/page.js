"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      <div className="flex">
        <div className=" bg-[linear-gradient(90deg,#000000,#737373)] w-[40vw] h-screen relative flex items-end ">
          <Image
            src="/man.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/man.png"
            className={`transition-filter duration-500 ease-in-out ${
              isLoaded ? "blur-loaded" : "blur-initial"
            }`}
            onLoadingComplete={handleImageLoad}
            priority
          />
          <div className="text-zinc-950 absolute w-[40vw] h-[100px] flex flex-col justify-center items-center leading-[34px]">
            <div className="text-[50px] flex justify-center w-[40vw] font-[1100]">
              Adil Malik
            </div>
            <div className=" w-[220px] flex justify-start text-[20px]">
              Web Developer
            </div>
          </div>
        </div>
        <div className="relative w-[60vw] h-screen flex justify-center items-center">
          <Image
            src="/backgroundimage.png"
            layout="fill"
            objectFit="cover"
            alt="Picture of the author"
          />
          <div className="absolute text-white font-[1100] flex flex-col h-[80vh] w-[50vw] justify-between">
            <div className="flex gap-[80px] flex-col text-[25px] text-justify h-[70vh]">
              <p>
                Hello! I am Adil Malik, a passionate and enthusiastic web
                developer eager to embark on a professional journey in the world
                of web development.
              </p>
              <p>
                I am equipped with a solidfoundation in web technologies and a
                keen interest in building user-friendly, responsive, and
                visually appealing websites.
              </p>
            </div>
            <div className="flex justify-end">
              <Link href="/home">
                <button className="h-[50px] w-[200px] bg-blue-500 text-[30px]">
                  START
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
