import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
  title: string
  description: string
  projectUrl: string
  gitUrl: string
  tag: string[]
  // previewUrl: string
  // imgUrl: string
}

// const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }: ProjectCardProps) => {
const ProjectCard = ({ title, description, projectUrl, gitUrl, tag }: ProjectCardProps) => {
  return (
    <div>
      <div
        className="h-52 w-96 md:h-72 rounded-xl relative group p-5 drop-shadow-xl"
        style={{ background: '#181818', backgroundSize: 'cover' }}
        // style={{ background: `url(${projectUrl})`, backgroundSize: 'cover' }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            to={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            to={projectUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
        <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4"></div>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-[#ADB7BE]">{description}</p>

        <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 font-bold px-3 py-1 rounded-lg absolute bottom-10 ">
          {tag}
        </span>
      </div>
    </div>
  )
}

export default ProjectCard
