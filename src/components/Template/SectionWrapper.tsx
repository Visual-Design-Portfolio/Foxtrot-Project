import { motion } from 'framer-motion'

type StaggerContainerProps = {
  staggerChildren: number
  delayChildren?: number
}

const staggerContainer = ({ staggerChildren, delayChildren }: StaggerContainerProps) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}

type StarWrapperProps = {
  Component: React.ComponentType<unknown>
  idName: string
}

const StarWrapper = ({ Component, idName }: StarWrapperProps) => {
  return (
    <motion.section
      variants={staggerContainer({ staggerChildren: 0 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>

      <Component />
    </motion.section>
  )
}

export default StarWrapper
