"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
// import img from "../public/Snapchat-1550082826.jpg";

// type Props = {};

const Hero = (/* props: Props */) => {
const [text, /* count*/] = useTypewriter({
    words: [
      "Hello There!",
      "I'm Akshay Mugale",
      "Full-stack MERN Developer...",
      "React-Native Developer...",
      "Guy who love to code !",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
    
    <div className="h-screen flex flex-col justify-center  items-center text-center">
    <BackgroundCircles />
      <img
        src={"/Snapchat-1550082826.jpg"}
        className="relative rounded-full object-cover h-32 w-32 mx-auto z-40"
        alt="jpeg"
      />
     
      <div className="z-30">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Software Developer
        </h2>
        <h1 className=" text-xl lg:text-2xl font-semibold scroll-px-10 text-gray-300">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 ">
            <a href='#about'>
          <button className="heroButton">About</button>
            </a>
            <a href='#experience'>
          <button className="heroButton">Experience</button>
            </a>
            <a href='#skills'>
          <button className="heroButton">Skills</button>
            </a>
            <a href='#projects'>
          <button className="heroButton">Projects</button>
            </a>
            <a href='https://drive.google.com/file/d/1OFYQnFqVMbERcRW6DB5OeX80UvtE_0_Q/view?usp=drive_link'>
          <button className="heroButton underline">Resume</button>
            </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
