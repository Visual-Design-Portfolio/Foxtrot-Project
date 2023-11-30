import TechStackSection from './TechStackSection'
import './Template.module.css'
import Hero from './Hero'
import ProjectsSection from './ProjectsSection'
import NavbarSection from './Navbar/NavbarSection'
import Experience from './Experience'
import EducationSection from './EducationSection'

const Template = () => {
  return (
    <main className="bg-[#121212] text-slate-50">
      <section id="Home">
        <NavbarSection />
        <Hero />
      </section>
      <section id="Tech Stack" className="">
        <TechStackSection />
      </section>
      <section id="Project" className="">
        <ProjectsSection />
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
