
import { motion } from "framer-motion";
// import img from "@/public/PicsArt_06-04-04.37.11.jpg"
// import img2 from '@/public/Alma1.png'
// import img3 from '@/public/Alma2.jpg'

type Props = {};

const AlmaBetter = (props: Props) => {
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
        src={"/PicsArt_06-04-04.37.11.jpg"}
      />
    <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">AlmaBetter Development Course</h4>
        <p className="font-bold text-2xl mt-1">Full-Stack Web Development</p>
        <div className="flex space-x-2 my-2">
            <img className="h-10 w-10 rounded-full overflow-visible" src={"/Alma1.png"} alt="jpeg" />
            <img className="h-10 w-10 rounded-full" src={"/Alma2.png"} alt="png" />
           
        </div>
        <p className="uppercase py-5 text-gray-300">Started-Jul/23 | End-Feb/24</p>
       <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>This is a 6-month web development course with a 2-month training/placement cell.</li>
        <li>In this, I have learned all the basic to advanced skills, as I mentioned in the skill page.</li>
        <li>There are total 5 Foundation Tracks</li>
        <li>Into Computer Programming, DAA, Front-End Development, Back-End Development, and Practical Software Engineering</li>
        <li>In this, I have learned all the basics of advanced programming knowleadge.</li>
        <li>I gained on-hand experience from all these courses.</li>
       </ul>
    </div>

    </article>
  );
};

export default AlmaBetter; 