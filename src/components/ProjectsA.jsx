'use client'
import { motion } from "framer-motion";

const projectsA = [
    {
        title: "My Portfolio",
        description: `I developed my portfolio using React.js, Tailwind CSS, Framer Motion, and Heroicons. The power of React.js in my portfolio gives better performance, providing a seamless user experience. 
        React.js offers a dynamic and interactive user experience, while Tailwind CSS facilitates rapid styling and customization. Framer Motion adds fluid animation and transition, enhancing the overall appearance of my portfolio.
         Heroicons provide clean SVG icons, enriching the visual appeal of the project.`,
        imgUrl: '/Porfolio.jpeg',
        demo : 'https://portfolio-akshay-topaz.vercel.app/'
    },
    {
        title: "Analog Clock",
        description:`The analog clock is a classic representation of time, displaying the current hour, minute, and second using traditional clock hands. This project utilizes HTML for the structure, CSS for styling, and JavaScript for the functionality.
        As, CSS gives a interactive look on page , clock is built using HTML elements to represent the clock face, hour hand, minute hand, and second hand,
        JavaScript calculates the current time by accessing the Date object's methods, such as getHours(), getMinutes(), and getSeconds(). It then converts these values into rotation angles for the clock hands.`,
        imgUrl : "/analog.png",
        demo : "https://main--stellular-sunflower-fbd7e9.netlify.app/", 
        code : "https://github.com/akshaymugale01/Analog_clock"
    },
    {
        title: "To-Do List",
        description: ` to-do list application is a task management tool created using React.js and CSS. It provides users with a simple and interactive interface to organize their tasks and keep track of their daily activities.
         easily add, remove, and edit tasks on the to-do list. This allows them to efficiently manage their tasks. application is designed to be responsive and mobile-friendly, allowing users to access and manage their tasks from any device, including desktops, tablets, and Mobiles.
         Its robust features, responsive design make it an ideal solution for individuals looking to streamline their workflow and boost productivity `,
        imgUrl: "/todo.png",
        demo : "https://to-do-list-amber-psi.vercel.app/",
        code : "https://github.com/akshaymugale01/To_Do_List"
    }
];

const ProjectsA = () =>{
    return (
        <motion.div className="h-screen flex relative flex-col text-center justify-evenly mx-auto z-0 items-center overflow-hidden max-w-full">
            <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
                Projects
            </h3>
            <div className="relative w-full overflow-x-scroll flex overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {projectsA.map((project, index) => (
                    <div key={index} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img
                            initial={{ y: 300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="w-32 h-25"
                            src={project.imgUrl}
                            alt="Project Image"
                        />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl">{project.title}</h4>
                            <p className="text-lg text-center md:text-left">{project.description}</p><br />
                            {project.code && (
                                <p>Code: <a href={project.code} className="underline">GitHub</a></p>
                            )}
                            {project.demo && (
                                <p>Demo: <a href={project.demo} className="underline">Live Demo</a></p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 feft-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
};

export default ProjectsA;