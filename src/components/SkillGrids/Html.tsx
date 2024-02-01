import {motion} from 'framer-motion';
type Props = {
    directionLeft?:boolean
}

function Html({directionLeft}: Props) {
  return (
    <motion.div
    initial={{x:directionLeft?-200:200 , opacity:0}}
    transition={{duration:1}}
    whileInView={{opacity:1 ,x:0}}
    className='group relative flex cursor-pointer'>
        <img
        className='rounded-full border border-gray-500 object-cover h-24 w-24 xl:h-28 xl:w-28 filter group-hover:grayscale transition duration-300 ease-in-out md:w-28 md:h-28'
        src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png' alt='Html'
        />
        <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:28 xl:w-30 xl:h-30 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl text-black opacity-100'><a href="https://www.w3schools.com/html/">90%</a></p>
            </div>
        </div>
    </motion.div>
  )
}

export default Html;