"use client";
import { useState, useCallback, React } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import dynamic from "next/dynamic";

const CustomNavbar = dynamic(() => import("@/components/CustumNavbar"), {
  ssr: false,
});

const Signup = () => {
  const [slide, setSlide] = useState(false);
  const [loginText, setLoginText] = useState("sign in");
  const slideChange = useCallback(() => {
    setSlide(!slide);
    setLoginText(slide ? "sign in" : "sign up");
  }, [slide]);

  return (
    <>
      <CustomNavbar />
      <div className="bg-gray-900   flex flex-col  overflow-x-hidden ">
        <div className="text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center pt-[120px]">login</div>
        <div className="flex justify-evenly  h-screen w-screen   ">
          <div className="bg-white mt-[50px] w-[40vw] h-[500px] rounded-[50px] flex flex-col justify-evenly items-center">
            <div
              className={`absolute h-[500px] w-[40vw] rounded-[50px] flex flex-col justify-center items-center transition-transform duration-500 ${
                slide &&
                `transition-transform duration-500 transform translate-x-[46.7vw]`
              }`}
            >
              <Image
                src="/earth.jpg"
                // height={200}
                // width={200}
                objectFit="cover"
                layout="fill"
                className="rounded-[48px]"
                loading="eager"
              />
              {slide ? (
                <div className="z-[50] bg-pink-500 h-[60px] w-[200px] flex justify-center items-center rounded-[40px]">
                  <button
                    className="text-[30px] h-[inherit] w-[inherit]  text-white"
                    onClick={slideChange}
                  >
                    {loginText}
                  </button>
                </div>
              ) : (
                <div className="z-[50] bg-blue-500 h-[60px] w-[200px] flex justify-center items-center rounded-[40px]">
                  <button
                    onClick={slideChange}
                    className="text-[30px] h-[inherit] w-[inherit]  text-white "
                  >
                    {loginText}
                  </button>
                </div>
              )}
            </div>
            <form
              action=""
              className=" h-[300px] flex w-[30vw] flex-col justify-evenly items-center"
            >
              <div className="text-blue-500 text-center text-[33px] font-bold">
                Sign in
              </div>
              <div className="h-[50px] border-blue-500 border bg-white flex w-[25vw] rounded-[50px] justify-evenly   items-center">
                <span>
                  <FaUser />
                </span>
                <input
                  type="text"
                  className="w-[20vw] focus:outline-none"
                  placeholder="Username"
                />
              </div>
              <div className="border-blue-500 border h-[50px] bg-white flex w-[25vw] rounded-[50px] justify-evenly   items-center">
                <span>
                  <FaLock />
                </span>
                <input
                  type="text"
                  className="w-[20vw] focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <div className="border-blue-500 border text-white  text-center w-[180px] rounded-[40px] h-[50px] bg-blue-500 text-[18px] flex items-center justify-center">
                <button type="">Login</button>
              </div>
            </form>
            <div>
              <div>or sign in with special platform</div>
              <div>logo</div>
            </div>
          </div>

          <div className="bg-white mt-[50px] w-[40vw] h-[500px] rounded-[50px] flex flex-col justify-evenly items-center">
            <form
              action=""
              className=" h-[350px] flex w-[30vw] flex-col justify-evenly items-center"
            >
              <div className="text-pink-500 text-center text-[33px] font-bold">
                Sign up
              </div>
              <div className="h-[50px] border-pink-500 border bg-white flex w-[25vw] rounded-[50px] justify-evenly   items-center">
                <span>
                  <FaUser />
                </span>
                <input
                  type="text"
                  className="w-[20vw] focus:outline-none"
                  placeholder="Username"
                />
              </div>
              <div className="border-pink-500 border h-[50px] bg-white flex w-[25vw] rounded-[50px] justify-evenly   items-center">
                <span>
                  <MdEmail />
                </span>
                <input
                  type="text"
                  className="w-[20vw] focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="border-pink-500 border h-[50px] bg-white flex w-[25vw] rounded-[50px] justify-evenly   items-center">
                <span>
                  <FaLock />
                </span>
                <input
                  type="text"
                  className="w-[20vw] focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <div className="border-pink-500 border text-white  text-center w-[180px] rounded-[40px] h-[50px] bg-pink-500 text-[18px] flex items-center justify-center">
                <button type="">sign up</button>
              </div>
            </form>
            <div>
              <div>or sign in with each social platforms</div>
              <div>logo</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
