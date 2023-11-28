import { motion } from 'framer-motion'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror' as const,
      duration: 20,
    },
  },
}

const Hero = () => {
  return (
    <div className="h-[calc(100vh-96px)] ">
      <motion.div className="max-w-[1280px] h-full m-auto">
        {/* Hero title */}
        <motion.div
          className="text-slate-400 container mx-auto flex flex-col justify-center gap-2 pt-24"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          <motion.h1
            variants={textVariants}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Hi,👋
          </motion.h1>
          <motion.h1
            variants={textVariants}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            My Name is
          </motion.h1>
          <motion.h1
            variants={textVariants}
            // bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight"
          >
            Siriyakorn Sanit
          </motion.h1>
          <motion.h2
            variants={textVariants}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            I build things for web
          </motion.h2>
        </motion.div>

        {/* Slide Text */}
        <motion.div
          className="absolute text-[23vh] text-[#fff] text-opacity-10 bottom-[-50px] whitespace-nowrap w-[50%] font-bold"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Full Stack Web Developer
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
