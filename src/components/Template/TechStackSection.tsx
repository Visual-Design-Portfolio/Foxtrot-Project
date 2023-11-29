'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const TechStackSection = () => {
  const techStack = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'React',
    'Tailwind',
    'MUI',
    'NodeJS',
    'ExpressJS',
    'MySQL',
    'Prisma',
    'Docker',
  ]
  const techStackImages: { [key: string]: string } = {
    HTML5: '/TeckStack/html.png',
    CSS3: '/TeckStack/css.png',
    JavaScript: '/TeckStack/js.png',
    TypeScript: '/TeckStack/ts.png',
    React: '/TeckStack/react.png',
    Tailwind: '/TeckStack/tailwind.png',
    NodeJS: '/TeckStack/node-js.png',
    MongoDB: '/TeckStack/mongodb.png',
    MUI: '/TeckStack/mui.png',
    ExpressJS: '/TeckStack/express.png',
    Firebase: '/TeckStack/Firebase.png',
    PostgreSQL: '/TeckStack/postger.png',
    MySQL: '/TeckStack/mysql.png',
    Prisma: '/TeckStack/prisma.webp',
    Docker: '/TeckStack/docker.webp',
  }

  // const fadeInAnimationsVariants = {
  //   initial: {
  //     opacity: 0,
  //     y: 100,
  //   },
  //   animate: (index: number) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       delay: 0.05 * index,
  //     },
  //   }),
  // }

  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const elementRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start start', 'end start'],
  })

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  const animationDelay = 0.3
  return (
    <div className="h-full">
      <div className=" flex flex-col justify-center items-center h-full gap-32">
        <motion.div ref={ref} style={{ scale: scaleProgess, opacity: opacityProgess }}>
          <motion.h1 className="font-bold xl:text-8xl lg:text-7xl md:text-5xl text-4xl uppercase h-full">
            My Technology Stack
          </motion.h1>
        </motion.div>
        <ul className="max-w-4xl flex gap-10 justify-center items-center flex-wrap xl:mx-0 mx-4">
          {techStack.map((stack, index) => (
            <motion.li
              key={index}
              // variants={fadeInAnimationsVariants}
              // initial="initial"
              // animate="animate"
              // whileInView="animate"
              // viewport={{
              //   once: false,
              // }}
              // custom={index}
              ref={ref}
              initial="hidden"
              variants={imageVariants}
              animate={inView ? 'visible' : 'hidden'}
              custom={index}
              transition={{ delay: index * animationDelay }}
            >
              <img src={techStackImages[stack]} style={{ width: '100px', height: '100px', margin: '5px' }} />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TechStackSection
