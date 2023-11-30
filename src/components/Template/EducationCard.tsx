import { motion, useAnimation } from 'framer-motion'

interface EducationCardProps {
  school: string
  degree: string
  major: string
  startDate: Date
  endDate: Date
}

const EducationCard = ({ school, degree, major, startDate, endDate }: EducationCardProps) => {
  const controls = useAnimation()

  const handleHoverStart = () => {
    controls.start({ scale: 1.5 })
  }

  const handleHoverEnd = () => {
    controls.start({ scale: 1 })
  }

  const startYear = new Date(startDate)
  const endYear = new Date(endDate)

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className="flex flex-col bg-[#181818] p-5 rounded-md shadow-md"
    >
      <motion.div className="flex justify-between p-5">
        <div className="w-3/5">
          <h1 className="text-2xl text-slate-100 font-bold">{school}</h1>
          <p className="text-lg font-semibold text-gray-500">{degree}</p>
        </div>
        <div className="w-2/5 flex flex-col items-end">
          <span className="text-md font-semibold text-purple-100">
            {startYear.getFullYear()} - {endYear.getFullYear()}
          </span>
          <span className="text-lg font-semibold text-purple-400">{major}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default EducationCard
