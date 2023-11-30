import TechStackSection from './TechStackSection'
import './Template.module.css'
import Hero from './Hero'
import ProjectsSection from './ProjectsSection'
import NavbarSection from './Navbar/NavbarSection'
import Experience from './Experience'
import EducationSection from './EducationSection'
import usePortfolio from '../../hooks/usePortfolio'
import { useParams } from 'react-router-dom'

const Template = () => {
  const { id } = useParams()
  const { portfolio } = usePortfolio(id || '1')
  const ownerName = portfolio?.ownerName || 'Junior'
  const skills = portfolio?.skill || ['I am constantly developing my skillset']
  const projectsData = portfolio?.project || []
  return (
    <main className="bg-[#121212] text-slate-50">
      <section id="Home">
        <NavbarSection />
        <Hero ownerName={ownerName} />
      </section>
      <section id="Tech Stack" className="">
        <TechStackSection skills = {skills} />
      </section>
      <section id="Project" className="">
        <ProjectsSection projectsData={projectsData} />
      </section>
      <section id="workExperience">
        <Experience />
      </section>
      <section id="Education">
        <EducationSection />
      </section>
    </main>
  )
}

export default Template
