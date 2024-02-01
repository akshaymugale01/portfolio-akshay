"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

/* type Props = {}; */

const Header = (/* props: Props */) => {
  return (
    <header className="sticky flex p-5 items-start top-0 justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/akshaymugale01"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/akshay-mugale-67872324b/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://www.instagram.com/cort.810/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCfsakTF9XKTByz23wikW6nQ"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

        <a href='#contact'>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer text-gray-300"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
     
        />
        <p  className="uppercase md:inline-flex text-sm text-gray-400">
          get in touch
        </p>
      </motion.div></a>
    </header>
  );
};

export default Header;
