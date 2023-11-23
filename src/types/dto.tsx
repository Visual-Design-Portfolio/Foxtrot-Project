export interface LoginDTO {
  email: string
  password: string
}

export interface CredentialDTO {
  accessToken: string
}

export interface RegisterDTO {
  username: string
  password: string
  email: string
}

export interface PortfolioDTO {
  portfolioInfo: PortfolioInfoDTO
  createdAt: Date
  updatedAt: Date
  education: EducationDTO[]
  workExperience: WorkExperienceDTO[]
}

export interface CreatePortfolioDTO {
  portfolioInfo: PortfolioInfoDTO
  education: EducationDTO[]
  workExperience: WorkExperienceDTO[]
  project: ProjectDTO[]
  skill: string[]
}

export interface PortfolioInfoDTO {
  name: string
  ownerName: string
  picture?: File | null
}

export interface EducationDTO {
  school: string
  degree: string
  major: string
  startDate: Date
  endDate: Date
}
export interface WorkExperienceDTO {
  position: string
  employeeType: string
  companyName: string
  companyLocation: string
  startDate: Date
  endDate: Date
}
export interface ProjectDTO {
  title: string
  detail: string
  picture?: string
  category: string[]
  tag: string[]
  linkProject: string
  linkGitRepo: string
}
