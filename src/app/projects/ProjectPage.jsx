"use client";
import React, { useState } from "react";
import CustomNavbar from "@/components/CustumNavbar";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, imageSrc, projectLink, onClick,alt }) => (
  <div>
    <div className="text-center text-[30px] dm-hm:text-[20px] transition-transform duration-300 hover:scale-[1.1] mt-[50px]">
      {title}
    </div>
    <div className="overflow-hidden cursor-pointer" onClick={() => onClick(imageSrc, projectLink)}>
      <Image
        src={imageSrc}
        height={300}
        width={450}
        className="transition-transform duration-300 hover:scale-[1.1]"
        alt={alt}
        priority
      />
    </div>
  </div>
);

const ProjectPage = () => {
  const [modalImage, setModalImage] = useState(null);
  const [link, setLink] = useState(null);

  const closeModal = () => setModalImage(null);
  const openModal = (src, link) => {
    setModalImage(src);
    setLink(link);
  };

  return (
    <>
      <CustomNavbar />
      <h1 className="text-[50px] dm-hm:text-[30px] text-center  pt-[120px]">My Projects</h1>
      <div className="relative min-h-screen">
        <div className="flex flex-wrap justify-evenly p-[10px]">
          <ProjectCard
            title="SPOTIFY"
            imageSrc="/spotify.png"
            projectLink="https://adil-spotify.netlify.app/"
            onClick={openModal}
            alt="spotify"
          />
          <ProjectCard
            title="Twitter"
            imageSrc="/twitter.png"
            projectLink="https://adil-twit.netlify.app/"
            onClick={openModal}
            alt="twitter"
          />
          <ProjectCard
            title="Lasles VPN"
            imageSrc="/laslesvpn.png"
            projectLink="https://adil-laslesvpn.netlify.app/"
            onClick={openModal}
            alt="lasles vpn"
          />
          <ProjectCard
            title="Clock"
            imageSrc="/clock.png"
            projectLink="https://adil-clockwebapp.netlify.app/"
            onClick={openModal}
            alt="clock"
          />
        </div>

        {modalImage && (
          <div className="fixed top-0 left-0 bg-[rgba(0,0,0,0.9)] h-full w-full  z-[100] flex items-center justify-center">
            <span className="absolute top-4 right-4 text-[40px] dm-hm:text-[25px] text-white cursor-pointer" onClick={closeModal}>
              x
            </span>
            <div className="absolute top-4 dm-hm:text-[25px] text-[40px] text-white cursor-pointer">
              Click on the image
            </div>
            <Link href={link} target="_blank">
              <div className=" dm-hm:w-[90vw] dm-hm:h-[70vw] hm-md:w-[95vw] ">
              <Image
                src={modalImage}
                // layout="fill"
                height={300}
                width={950}
                className="dm-hm:h-[inherit] "
                alt ="image"
                
              />
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectPage;
