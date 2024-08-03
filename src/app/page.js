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
      <div className="flex dm-md:flex-col items-center hm-md:w-screen">
        <div className="dm-md:p-[20px] bg-[linear-gradient(90deg,#000000,#737373)] dm-md:bg-blue-500 md:bg-[linear-gradient(90deg,#000000,#737373)] md:w-[40vw] dm-md:w-screen  md:h-screen md:relative flex  dm-md:justify-between items-end ">
          <Image
            src="/man.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/man.png"
            className={`transition-filter duration-500 ease-in-out dm-md:hidden  ${
              isLoaded ? "blur-loaded" : "blur-initial"
            }`}
            onLoadingComplete={handleImageLoad}
            priority
          />
          <div className="h-[30vw] dm-md:bg-blue-500 dm-md:overflow-hidden flex justify-center items-center w-[30vw]   rounded-full md:hidden ">
          <Image
              src="/man.png"
              height={230}
              width={230}
              alt="this is logo"
              className={`transition-filter duration-500 ease-in-out  ${
                isLoaded ? "blur-loaded" : "blur-initial"
              }`}
            />
          </div>
          <div className="text-zinc-950 dm-md:static md:absolute  dm-md:w-[50vw]  md:w-[40vw] h-[100px] flex flex-col  justify-center items-center dm-md:leading-[30px] md:leading-[34px]">
            <div className="md:text-[50px] dm-md:text-[35px]  flex dm-md:justify-end justify-center dm-md:w-[inherit] w-[40vw] font-[1100]">
              Adil Malik
            </div>
            <div className="dm-md:w-[inherit] w-[220px] dm-md:text-[20px]  flex justify-start dm-md:justify-end md:text-[20px]">
              Web Developer
            </div>
          </div>
        </div>
        <div className="relative w-[60vw] h-screen flex justify-center dm-md:w-screen items-center">
          <Image
            src="/backgroundimage.png"
            layout="fill"
            objectFit="cover"
            alt="Picture of the author"
          />
          <div className="absolute  dm-md:top-0  dm-md:h-[100vh]  text-white font-[1100] flex flex-col dm-md:p-[20px]  dm-md:overflow-scroll scrollbar-hide md:overflow-scroll md:h-[70vh] dm-md:w-screen w-[50vw]  justify-between">
            <div className="flex gap-[80px] dm-md:gap-[20px] flex-col text-[25px] dm-md:text-[5vw]  md:text-justify  md:h-[500px]">
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
                <div className="h-[50px]  w-[200px] rounded-[20px] dm-md:h-[40px] dm-md:w-[150px] dm-md:text-[20px] bg-blue-500 text-[30px]">
                <button className="h-[inherit] w-[inherit]">
                  START
                </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;