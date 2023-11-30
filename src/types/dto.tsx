export interface LoginDTO {
  email: string
  password: string
}

export interface CredentialDTO {
  accessToken: string
}

export interface UserDTO {
  _id: string
  username: string
  email: string
}

export interface RegisterDTO {
  username: string
  password: string
  email: string
}

// export interface IPortfolio {
//   _id: mongoose.Types.ObjectId;
//   name: string;
//   ownerName: string;
//   picture?: string;
//   createdAt: Date;
//   updatedAt: Date;
//   education: IEducation[];
//   workExperience: IWorkExperience[];
//   project: IProject[];
//   skill: ISkill[];
//   userId: mongoose.Types.ObjectId;
// }

// export interface IEducation {
//   school: string;
//   degree: string;
//   major: string;
//   startDate: Date;
//   endDate: Date;
// }

// export interface IWorkExperience {
//   position: string;
//   employeeType: string;
//   companyName: string;
//   companyLocation: string;
//   startDate: Date;
//   endDate: Date;
// }

// export interface IProject {
//   title: string;
//   detail: string;
//   picture?: string;
//   category: string;
//   tag: string;
//   linkProject: string;
//   linkGitRepo: string;
// }

// export interface ISkill {
//   name: string[];
// }

// TODO: refactor these code since picture have nonsense type
export interface PortfolioDetailsDTO extends Omit<PortfolioInfoDTO, "picture"> {
  picture: string
  createdAt: Date
  updatedAt: Date
  portfolioInfo: PortfolioInfoDTO
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

// 

export interface PortfolioDTO {
  _id: string
  name: string
  ownerName: string
  picture: string
  createdAt: string
  updatedAt: string
  education: Education[]
  workExperience: WorkExperience[]
  project: Project[]
  skill: string[]
  userId: string[]
}

export interface Education {
  school: string
  degree: string
  major: string
  startDate: string
  endDate: string
  _id: string
}

export interface WorkExperience {
  position: string
  employeeType: string
  companyName: string
  companyLocation: string
  startDate: string
  endDate: string
  _id: string
}

export interface Project {
  title: string
  detail: string
  picture: string
  category: string[]
  tag: string[]
  linkProject: string
  linkGitRepo: string
  _id: string
}
