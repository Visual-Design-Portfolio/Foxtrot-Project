import { motion, HTMLMotionProps } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

type Experience = {
  id: number
  position: string
  employeeType: string
  companyName: string
  location: string
  startDate: string
  endDate: string
}

type TextVariantProps = {
  delay?: number
}

// const textVariants = {
//   initial: {
//     x: -500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// }

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

const experiences: Experience[] = [
  {
    id: 1,
    position: 'Front End Developer',
    employeeType: 'Full Time',
    companyName: 'Cleverse',
    location: 'Thailand',
    startDate: '2019',
    endDate: '2020',
  },
  {
    id: 2,
    position: 'Back End Developer',
    employeeType: 'Part Time',
    companyName: 'Cleverse',
    location: 'Thailand',
    startDate: '2020',
    endDate: '2022',
  },
  {
    id: 3,
    position: 'Full Stack Web Developer',
    employeeType: 'Full Time',
    companyName: 'Cleverse',
    location: 'Thailand',
    startDate: '2022',
    endDate: '2023',
  },
  {
    id: 3,
    position: 'Full Stack Web Developer',
    employeeType: 'Full Time',
    companyName: 'Cleverse',
    location: 'Thailand',
    startDate: '2022',
    endDate: '2023',
  },
]

type ExperienceCardProps = {
  experience: Experience
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: 'linear-gradient(to right, rgb(243, 244, 246), rgb(209, 213, 219))',
        color: '#ffff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #fff' }}
      date={`${experience.startDate} - ${experience.endDate}`}
      iconStyle={{
        background: 'linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))',
        color: '#030303',
      }}
      icon={<div className="flex justify-center items-center w-full h-full "></div>}
    >
      <div>
        <h3 className="text-[#181818] text-[24px] font-bold">{experience.position}</h3>
        <div className="flex gap-5">
          <p className="text-purple-700 text-secondary text-[18px] font-semibold ">{experience.companyName}</p>
          <p className="text-slate-400">{experience.location}</p>
        </div>
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
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
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience
