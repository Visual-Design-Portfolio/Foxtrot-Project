'use client'
import { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'
import { ProjectDTO } from '../../types/dto'

interface ProjectProps {
  projectsData: ProjectDTO[]
}

const ProjectsSection = ({ projectsData }: ProjectProps) => {
  const [tag, setTag] = useState<string>('Frontend')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const handleTagChange = (newTag: string) => {
    setTag(newTag)
  }

  const projectData = projectsData.filter((project) => project.tag.includes(tag))

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <div id="projects" className="max-w-[1280px] h-full m-auto">
      <h2 className="text-center text-6xl font-bold text-white mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === 'All'} />
        <ProjectTag onClick={handleTagChange} name="Frontend" isSelected={tag === 'Frontend'} />
        <ProjectTag onClick={handleTagChange} name="Backend" isSelected={tag === 'Backend'} />
      </div>
      <ul ref={ref} className="flex justify-center gap-10 mt-10">
        {projectData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.detail}
              projectUrl={project.linkProject}
              gitUrl={project.linkGitRepo}
              tag={project.tag}
              // previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectsSection
