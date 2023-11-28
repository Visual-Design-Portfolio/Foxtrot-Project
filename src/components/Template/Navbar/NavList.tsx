import { motion } from 'framer-motion'

const NavList = () => {
  const items = ['Home', 'Tech Stack', 'Project', 'About Me', 'Contact']
  return (
    <div>
      <motion.div initial="hidden" animate="visible">
        {items.map((item) => (
          <motion.li className="p-4" key={item} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
            <a href={`#${item}`}>{item}</a>
          </motion.li>
        ))}
      </motion.div>
    </div>
  )
}

export default NavList
