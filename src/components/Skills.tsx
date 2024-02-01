// import SkillsGrid from './SkillGrids/Javascript'
import { motion } from 'framer-motion'
import Javascript from './SkillGrids/Javascript';
import Dsa from './SkillGrids/Dsa';
import Css from './SkillGrids/Css';
import Html from './SkillGrids/Html';
import Bootstrap from './SkillGrids/Bootstrap';
import Tailwind from './SkillGrids/Tailwindcss';
import ReactJs from './SkillGrids/Ractjs';
import NextJs from './SkillGrids/NextJs';
import MySql from './SkillGrids/MySql';

// type Props = {}

const Skills = (/* props: Props */) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h4 className='absolute top-20 uppercase tracking-[15px] text-gray-500 text-2xl'>Skills</h4>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>hover over skills for current profiency</h3>
      <h3 className='absolute top-28 text-gray-400'>ClickOn For More Details!</h3>
      <div className='grid grid-cols-4 gap-4'>

        <ReactJs />
        <NextJs />
        <Javascript />
        <Dsa />
        <Html />
        <Css />
        <Bootstrap />
        <Tailwind />
        <MySql />
      </div>
    </motion.div>
  )
}

export default Skills