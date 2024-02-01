'use client'

import {motion} from 'framer-motion'
// import img from '@/public/Porfolio.jpeg'

// type Props = {};
const project = [1];
const Projects = (/* props: Props */) => {
  return (
    <motion.div className="h-screen flex relative flex-col text-center justify-evenly mx-auto z-0 items-center overflow-hidden max-w-full">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full overflow-x-scroll flex overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {project.map(( project ) => (
          <div className="w-screen flex-shrink-0 snap-center  flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
                initial={{ y: 300, opacity: 0 }} // Start from below and transparent
                transition={{ duration: 1.2 }} // Transition duration
                whileInView={{ opacity: 1, y: 0 }} // Move to original position and become opaque
                className="w-32 h-25"   
                src={"/Porfolio.jpeg"} 
                alt="jpeg"  />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl">My Portfolio</h4>
              <p className="text-lg text-center md:text-left">I developed my Portfolio using React.js, Tailwind CSS, Framer Motion, and Heroicons.
               power of React.Js in my portfoli gives better performance giving a seamless user experience
               React.js giving dynamic and interactive user experience, in other hand tailwind css facilates rapid styling and customization.
               Framer motion add fluids animation and transition, enchance the overall looks of my portfolio.
               Heroic icon give clean SVG icons, enriching the visual of the project.
              </p><br /> 
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 feft-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;




// import React from 'react';

// const YourComponent = () => {
//   const dataArray = [
//     { image: 'image1.jpg', title: 'Title 1', desc: 'Description 1' },
//     { image: 'image2.jpg', title: 'Title 2', desc: 'Description 2' },
//     // Add more objects as needed
//   ];

//   return (
//     <div>
//       {dataArray.map((item, index) => (
//         <div key={index}>
//           <img src={item.image} alt={`Image ${index}`} />
//           <h2>{item.title}</h2>
//           <p>{item.desc}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YourComponent;