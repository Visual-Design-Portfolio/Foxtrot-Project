import { FormEvent, useState } from 'react'
import PortfolioInfoForm from '../components/FormCreate/PortfolioInfoForm'
import TechStackForm from '../components/FormCreate/TechStackForm'
import ProjectForm from '../components/FormCreate/ProjectForm'
import { EducationDTO, PortfolioInfoDTO, ProjectDTO, WorkExperienceDTO } from '../types/dto'
import EducationForm from '../components/FormCreate/EducationForm'
import WorkExperienceForm from '../components/FormCreate/WorkExperienceForm'
import usePortfolios from '../hooks/usePortfolios'
import { initialEducationList, initialPortInfo, initialProjectList, initialWorkExperienceList } from '../utils/const'

const Create = () => {
  const { createPortfolio } = usePortfolios()
  const [portfolioInfo, setPortfolioInfo] = useState<PortfolioInfoDTO>(initialPortInfo)
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([])
  const [projectList, setProjectList] = useState<ProjectDTO[]>(initialProjectList)
  const [educationList, setEducationList] = useState<EducationDTO[]>(initialEducationList)
  const [workExperienceList, setWorkExperienceList] = useState<WorkExperienceDTO[]>(initialWorkExperienceList)

  const saveProjectData = () => {
    console.table(projectList)
    console.table(selectedTechStack)
    console.table(portfolioInfo)
    console.table(educationList)
  }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await createPortfolio(portfolioInfo, selectedTechStack, projectList, educationList, workExperienceList)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <PortfolioInfoForm portfolioInfo={portfolioInfo} setPortfolioInfo={setPortfolioInfo} />
          <TechStackForm selectedTechStack={selectedTechStack} setSelectedTechStack={setSelectedTechStack} />
        </div>

        <div className="flex flex-col space-y-4">
          <ProjectForm projectList={projectList} setProjectList={setProjectList} />
          <EducationForm educationList={educationList} setEducationList={setEducationList} />
          <WorkExperienceForm workExperienceList={workExperienceList} setWorkExperienceList={setWorkExperienceList} />
        </div>

        <button
          type="submit"
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
