import EducationSection from '../Template/EducationSection'
import ExperienceSectionExample from './ExperienceSectionExample'
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
      <section id="Tech Stack" className="">
        <TechStackSectionExample />
      </section>
      <section id="Project" className="my-12">
        <ProjectSectionExample />
      </section>
      <section id="workExperience" className="my-12">
        <ExperienceSectionExample />
      </section>
      <section id="Education" className="">
        <EducationSection />
      </section>
    </main>
  )
}

export default TemplateExample
