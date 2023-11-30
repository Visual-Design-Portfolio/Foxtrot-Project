'use client'
import { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import NavMenu from './NavMenu'

const navLinks = [
  {
    title: 'Home',
    path: 'Home',
  },
  {
    title: 'Tech Stack',
    path: 'Tech Stack',
  },
  {
    title: 'Project',
    path: 'Project',
  },
  {
    title: 'Work Experience',
    path: 'workExperience',
  },
  {
    title: 'Education',
    path: 'Education',
  },
]

const NavbarSection = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="fixed  mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 h-24">
      <div className="flex max-w-7xl container xl:px-0 lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a href={'#Home'} className="text-2xl md:text-5xl text-white font-semibold uppercase">
          <img src="public/logo.svg" alt="logo" width={80} />
        </a>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <NavMenu links={navLinks} /> : null}
    </nav>
  )
}

export default NavbarSection
