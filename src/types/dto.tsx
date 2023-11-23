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

export interface CreatePortfolioDTO {
  portfolioInfo: PortfolioInfoDTO
  education: EducationDTO[]
  workExperience: WorkExperienceDTO[]
  project: ProjectDTO[]
  skill: SkillsDTO[]
  template?: TemplateDTO[]
}

export interface PortfolioInfoDTO {
  portfolioName: string
  titleName: string
  profilePicture?: File | null
}

export interface EducationDTO {
  id: string
  school: string
  degree: string
  major: string
  startDate: Date
  endDate: Date
}
export interface WorkExperienceDTO {
  id:string
  position: string
  employeeType: string
  companyName: string
  companyLocation: string
  startDate: Date
  endDate: Date
}
export interface ProjectDTO {
  id: string
  title: string
  detail: string
  // picture: string
  category: { name: string }[]
  tag: { name: string }[]
  linkProject: string
  linkGitRepo: string
}

export interface TemplateDTO {
  id: number
  name: string
  url: string
}
export interface SkillItem {
  // name: string
}

export interface SkillsDTO {
  // skills: SkillItem[]
  name: string
}