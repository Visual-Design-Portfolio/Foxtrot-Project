import { useState } from 'react'
import PortfolioInfoForm from '../components/FormCreate/PortfolioInfoForm'
import TechStackForm from '../components/FormCreate/TechStackForm'
import ProjectForm from '../components/FormCreate/ProjectForm'
import { v4 as uuidv4 } from 'uuid'
import { EducationDTO, PortfolioInfoDTO, ProjectDTO, SkillsDTO, WorkExperienceDTO } from '../types/dto'
import EducationForm from '../components/FormCreate/EducationForm'
import WorkExperienceForm from '../components/FormCreate/WorkExperienceForm'

const initialPortInfo = {
  portfolioName: '',
  titleName: '',
  profilePicture: null,
}

const initialProjectList = [
  {
    title: '',
    id: uuidv4(),
    detail: '',
    linkProject: '',
    linkGitRepo: '',
    category: [
      {
        name: '',
      },
    ],
    tag: [
      {
        name: '',
      },
    ],
  },
]
const initialEducationList = [
  {
    id: uuidv4(),
    school: '',
    degree: '',
    major: '',
    startDate: new Date(),
    endDate: new Date(),
  },
]
const initialWorkExperienceList = [
  {
    id: uuidv4(),
    position: '',
    employeeType: '',
    companyName: '',
    companyLocation: '',
    startDate: new Date(),
    endDate: new Date(),
  },
]

const Create = () => {
  const [portfolioInfo, setPortfolioInfo] = useState<PortfolioInfoDTO>(initialPortInfo)

  const [selectedTechStack, setSelectedTechStack] = useState<SkillsDTO | null>(null)
  const TechStack: SkillsDTO[] = [
    { name: 'React' },
    { name: 'Vue.js' },
    { name: 'Angular' },
    { name: 'Node.js' },
    { name: 'Express.js' },
    { name: 'MongoDB' },
    { name: 'Firebase' },
    { name: 'Tailwind CSS' },
  ]

  const [projectList, setProjectList] = useState<ProjectDTO[]>(initialProjectList)
  const [educationList, setEducationList] = useState<EducationDTO[]>(initialEducationList)
  const [workExperienceList, setWorkExperienceList] = useState<WorkExperienceDTO[]>(initialWorkExperienceList)

  const saveProjectData = () => {
    console.table(projectList)
    console.table(selectedTechStack)
    console.table(portfolioInfo)
    console.table(educationList)
  }
  return (
    <div className="max-w-3xl mx-auto p-6">
      <form className="space-y-6">
        <div className="flex flex-col space-y-4">
          <PortfolioInfoForm portfolioInfo={portfolioInfo} setPortfolioInfo={setPortfolioInfo} />
          <TechStackForm
            selectedTechStack={selectedTechStack}
            setSelectedTechStack={setSelectedTechStack}
            TechStack={TechStack}
          />
        </div>

        <div className="flex flex-col space-y-4">
          <ProjectForm projectList={projectList} setProjectList={setProjectList} />
          <EducationForm educationList={educationList} setEducationList={setEducationList} />
          <WorkExperienceForm workExperienceList={workExperienceList} setWorkExperienceList={setWorkExperienceList} />
        </div>

        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={saveProjectData}
        >
          Save Project Data
        </button>
      </form>
    </div>
  )
}

export default Create
