import { CreatePortfolioDTO, EducationDTO, PortfolioInfoDTO, ProjectDTO, WorkExperienceDTO } from '../types/dto'
import { useAuth } from '../providers/AuthProvider'
import axios from 'axios'

const usePortfolios = () => {
  const { token } = useAuth()

  const createPortfolio = async (
    portfolioInfo: PortfolioInfoDTO,
    selectedTechStack: string[],
    projectList: ProjectDTO[],
    educationList: EducationDTO[],
    workExperienceList: WorkExperienceDTO[],
  ) => {
    const newPortfolio: CreatePortfolioDTO = {
      portfolioInfo: portfolioInfo,
      education: educationList,
      workExperience: workExperienceList,
      project: projectList,
      skill: selectedTechStack,
    }

    try {
      console.log(newPortfolio)
      await axios.post('http://localhost:8080/portfolio/', newPortfolio, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (err) {
      throw new Error('Cannot create this protfolio')
    }
  }
  return { createPortfolio }
}

export default usePortfolios
