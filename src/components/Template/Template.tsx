import Main from './Main'
import './Template.module.css'
import NavbarTemplate from './Navbar/NavbarTemplate'
import Hero from './Hero'

const Template = () => {
  return (
    <div className="bg-[#0c0c1d] text-slate-50">
      <section id="Home">
        <NavbarTemplate />
        <Hero />
      </section>
      <section id="Tech Stack">
        <Main />
      </section>
    </div>
  )
}

export default Template
