import EducationSection from '../Template/EducationSection'
import Experience from '../Template/Experience'
import HeroSectionExample from './HeroSectionExample'
import NavbarSectionExample from './NavbarExample/NavbarSectionExample'
import ProjectSectionExample from './ProjectSectionExample'
import TechStackSectionExample from './TechStackSectionExample'
import './TemplateExample.module.css'

const TemplateExample = () => {
  return (
    <main className="bg-[#121212] text-slate-50">
      <section id="Home">
        <NavbarSectionExample />
        <HeroSectionExample />
      </section>
      <section id="Tech Stack" className="my-12">
        <TechStackSectionExample />
      </section>
      <section id="Project" className="my-12">
        <ProjectSectionExample />
      </section>
      <section id="workExperience" className="my-12">
        <Experience />
      </section>
      <section id="Education" className="my-12">
        <EducationSection />
      </section>
    </main>
  )
}

export default TemplateExample
