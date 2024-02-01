
import { motion } from "framer-motion";
// import img from "@/public/PicsArt_01-08-10.44.35.jpg"
// import img2 from '@/public/Sinhgad-College-of-Engineering-logo.jpg'
// import img3 from '@/public/sknlogo.png'

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
       initial={{ y: -100, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       viewport={{ once: true }}
       transition={{
         duration: 1.2,
       }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={"/PicsArt_01-08-10.44.35.jpg"}
      />
    <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Bachelor's Of Engineering(B.E.)</h4>
        <p className="font-bold text-2xl mt-1">Computer Engineering</p>
        <div className="flex space-x-2 my-2">
            <img className="h-10 w-10 rounded-full overflow-visible" src={"/Sinhgad-College-of-Engineering-logo.jpg"} alt="jpeg" />
            <img className="h-10 w-10 rounded-full" src={"/sknlogo.png"} alt="png" />
           
        </div>
        <p className="uppercase py-5 text-gray-300">Started-2019 | End-Jul/2023</p>
       <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>I have completed my BE - UG degree from SPPU University  </li>
        <li>Collage Name-Skn Sinhgad Institute of Technology and Science, Lonavala </li>
        <li>I have completed this couse with Total CGPA-7.22(FirstClass)</li>
        <li>This is 4 Year Course.</li>
       
       </ul>
    </div>

    </article>
  );
};

export default ExperienceCard;
