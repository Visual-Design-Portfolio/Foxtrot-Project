import { motion, HTMLMotionProps } from 'framer-motion'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { WorkExperienceDTO } from '../../types/dto'
import ExperienceCard from './ExperienceCard'

type TextVariantProps = {
  delay?: number
}

const textVariant = ({ delay }: TextVariantProps): HTMLMotionProps<'div'>['variants'] => {
  return {
    hidden: {
      y: -150,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay ?? 0,
      },
    },
  }
}
interface ExperienceProps {
  experienceData: WorkExperienceDTO[]
}

const Experience = ({ experienceData }: ExperienceProps) => {
  return (
    <div className="h-full pt-32">
      <motion.div variants={textVariant({})}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 className="text-white text-center font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experienceData.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience
