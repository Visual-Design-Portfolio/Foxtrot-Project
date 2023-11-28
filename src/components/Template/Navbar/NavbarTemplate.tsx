import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { motion } from 'framer-motion'
import NavList from './NavList'

const NavbarTemplate = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="">
      <div className="h-24 max-w-[1280px] mx-auto flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
            Visual Portfolio
          </h1>
        </motion.h1>
        <ul className=" hidden md:flex gap-5 uppercase ">
          <li className="">Home</li>
          <li className="">Tech Stack</li>
          <li className="">Project</li>
          <li className="">About Me</li>
          <li className="">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden fixed right-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-white text-purple-500 ease-in-out duration-500 xl:hidden'
              : 'fixed left-[-100%]'
          }
        >
          <h1 className="w-full text-3xl font-bold text-purple-500 m-4">React</h1>
          <ul className="uppercase p-4">
            <NavList />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarTemplate
