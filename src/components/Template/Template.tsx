import TechStackSection from './TechStackSection'
import './Template.module.css'
// import NavbarTemplate from './Navbar/NavbarTemplate'
import Hero from './Hero'
import ProjectsSection from './ProjectsSection'
import NavbarSection from './Navbar/NavbarSection'

const Template = () => {
  return (
    <main className="bg-[#121212] text-slate-50">
      <section id="Home">
        {/* <NavbarTemplate /> */}
        <NavbarSection />
        <Hero />
      </section>
      <section id="Tech Stack" className="">
        <TechStackSection />
      </section>
      <section id="Project" className="">
        <ProjectsSection />
      </section>
    </main>
  )
}

export default Template
