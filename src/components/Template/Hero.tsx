import { motion } from 'framer-motion'
import Typed from 'react-typed'

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
    <div id="Home" className="h-[calc(100vh-96px)] ">
      <motion.div className="max-w-[1280px] h-full m-auto flex pb-36">
        {/* Hero title */}
        <motion.div
          className="text-white container mx-auto flex flex-col justify-center gap-5 py-36"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          <motion.h1 variants={textVariants} className="mb-4 md:text-4xl lg:text-6xl xl:text-8xl font-extrabold ">
            Hello, I&apos;m
          </motion.h1>
          <motion.h1
            variants={textVariants}
            // bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
            className="md:text-4xl lg:text-5xl xl:text-6xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 "
          >
            Siriyakorn Sanit
          </motion.h1>
          <motion.h2 variants={textVariants} className="md:text-4xl lg:text-6xl xl:text-7xl text-2xl font-extrabold  ">
            <Typed
              strings={['Web Developer', 'Full Stack Developer', 'Font End Developer', 'Back End Developer']}
              typeSpeed={80}
              backSpeed={80}
              loop
            />
          </motion.h2>
          <motion.p variants={textVariants} className="max-w-xl text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-2xl">
            Explore my web development portfolio showcasing various projects and skills.
          </motion.p>
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

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src="/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              style={{ width: '400px' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
