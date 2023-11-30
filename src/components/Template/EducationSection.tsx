import { useRef } from 'react'
import EducationCard from './EducationCard'
import { motion, useInView } from 'framer-motion'
import { EducationDTO } from '../../types/dto'



// const educationsData: Education[] = [
//   {
//     id: 1,
//     school: 'Harvard University',
//     degree: 'Bachelor of Arts',
//     major: 'Economics',
//     startDate: '2016',
//     endDate: '2020',
//   },
//   {
//     id: 2,
//     school: 'Stanford University',
//     degree: 'Master of Science',
//     major: 'Computer Engineering',
//     startDate: '2018',
//     endDate: '2020',
//   },
//   {
//     id: 3,
//     school: 'Massachusetts Institute of Technology (MIT)',
//     degree: 'Ph.D. in Physics',
//     major: 'Quantum Mechanics',
//     startDate: '2020',
//     endDate: '2025',
//   },
// ]

interface EducationProps {
  educationData: EducationDTO[]
}

const EducationSection = ({educationData}: EducationProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const titleVariants = {
    hidden: { y: -100, scale: 0.5, opacity: 0 },
    visible: { y: 0, scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  }

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
  const staggerDelay = 0.1

  return (
    <div id="workExperience" className="max-w-[1280px] h-full m-auto pt-10">
      <div className="flex flex-col mx-auto">
        <motion.h1
          className="text-center text-6xl font-bold text-white pt-40"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          Education
        </motion.h1>
        <ul ref={ref} className="mt-20 flex flex-col gap-16 px-40">
          {educationData.map((education, index) => (
            <motion.li
              key={index}
              variants={textVariants}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ delay: index * staggerDelay }}
            >
              <EducationCard
                school={education.school}
                degree={education.degree}
                major={education.major}
                startDate={education.startDate}
                endDate={education.endDate}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default EducationSection
