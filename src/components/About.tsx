"use client";
import { motion } from "framer-motion";
// import picture from "../public/PicsArt_01-12-07.10.33.jpg";

// type Props = {};

function About( ) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col relative h-screen text-center md:text-left md:flex-row mx-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[450px] xl:h-[500px]"
        src={"/PicsArt_01-12-07.10.33.jpg"}
      />
      <div className="space-y-4 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">I'm Akshay Mugale</h4>
        <p className="text-base">
          I'm a software developer. I completed my engineering degree (B.E.)
          from 2019/June to 2023/July. Department-Computer Enginnering. I have
          pursued my degree from 'Skn Sinhgad Institute of Technology and
          Science, Lonavala', (SPPU University).
          <p>
            {" "}
            A fresher aspiring to create a successful career in the industry and
            open to learn new technologies.... Confident communicator, strategic
            thinker, and innovative creator to develop and test software to meet
            a company's organizational needs.
          </p>
        </p>
      </div>
    </motion.div>
  );
}

export default About;
