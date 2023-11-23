import {
  CreatePortfolioDTO,
  EducationDTO,
  PortfolioInfoDTO,
  ProjectDTO,
  SkillsDTO,
  WorkExperienceDTO,
} from '../types/dto'
import { useAuth } from '../providers/AuthProvider'

const usePortfolios = () => {
  const { token } = useAuth()

  const createPortfolio = async (
    portfolioInfo: PortfolioInfoDTO,
    selectedTechStack: SkillsDTO[],
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
      // await axios.post('https://api.learnhub.thanayut.in.th/content', newPortfolio, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${token}`,
      //   },
      // })
    } catch (err) {
      throw new Error('Cannot create this protfolio')
    }
  }
  return { createPortfolio }
}

export default usePortfolios
