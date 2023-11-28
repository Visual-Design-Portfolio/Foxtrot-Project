import { EducationDTO, PortfolioInfoDTO, ProjectDTO, WorkExperienceDTO } from '../types/dto'
import { useAuth } from '../providers/AuthProvider'
import axios from 'axios'
import { API_HOST } from '../utils/api'

const usePortfolios = () => {
  const { token } = useAuth()

  const createPortfolio = async (
    portfolioInfo: PortfolioInfoDTO,
    selectedTechStack: string[],
    projectList: ProjectDTO[],
    educationList: EducationDTO[],
    workExperienceList: WorkExperienceDTO[],
  ) => {
    const newPortfolioData = {
      name: portfolioInfo.name,
      ownerName: portfolioInfo.ownerName,
      picture: portfolioInfo.picture ? portfolioInfo.picture : null,
      education: educationList.map((item) => ({
        school: item.school,
        degree: item.degree,
        major: item.major,
        startDate: item.startDate.toISOString(),
        endDate: item.endDate.toISOString(),
      })),
      workExperience: workExperienceList.map((item) => ({
        position: item.position,
        employeeType: item.employeeType,
        companyName: item.companyName,
        companyLocation: item.companyLocation,
        startDate: item.startDate.toISOString(),
        endDate: item.endDate.toISOString(),
      })),
      project: projectList.map((item) => ({
        title: item.title,
        detail: item.detail,
        category: item.category,
        tag: item.tag,
        linkProject: item.linkProject,
        linkGitRepo: item.linkGitRepo,
        picture: item.picture ? item.picture : null,
      })),
      skill: selectedTechStack,
    }

    try {
      console.log(newPortfolioData)
      await axios.post(`${API_HOST}/portfolio/`, newPortfolioData, {
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
