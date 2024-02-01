import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

function ReactJs({ directionLeft }: Props) {
    return (
        <motion.div
            initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className='group relative flex cursor-pointer'>
            <img
                className='rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:h-28 xl:w-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                src='https://raw.githubusercontent.com/rexxars/react-hexagon/master/logo/react-hexagon.png' alt='React.js'
            />
            <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:28 xl:w-30 xl:h-30 rounded-full '>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl text-black opacity-100'><a href="https://react.dev/">80%</a></p>
                </div>
            </div>
        </motion.div>
    )
}

export default ReactJs;