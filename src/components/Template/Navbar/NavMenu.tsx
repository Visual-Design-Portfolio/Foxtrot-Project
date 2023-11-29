import NavLink from './NavLink'
interface NavMenuProps {
  links: {
    title: string
    path: string
  }[]
}

const NavMenu = ({ links }: NavMenuProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  )
}

export default NavMenu
