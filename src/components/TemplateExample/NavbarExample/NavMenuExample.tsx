import NavLinkExample from './NavLinkExample'
interface NavMenuProps {
  links: {
    title: string
    path: string
  }[]
}

const NavMenuExample = ({ links }: NavMenuProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLinkExample href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  )
}

export default NavMenuExample
