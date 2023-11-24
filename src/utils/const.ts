export const initialPortInfo = {
  //อย่าลืมใส่ interface
  name: '',
  ownerName: '',
  picture: null,
}

export const initialProjectList = [
  {
    title: '',
    detail: '',
    linkProject: '',
    linkGitRepo: '',
    category: [],
    tag: [],
  },
]
export const initialEducationList = [
  {
    school: '',
    degree: '',
    major: '',
    startDate: new Date(),
    endDate: new Date(),
  },
]
export const initialWorkExperienceList = [
  {
    position: '',
    employeeType: '',
    companyName: '',
    companyLocation: '',
    startDate: new Date(),
    endDate: new Date(),
  },
]

// export default { initialPortInfo, initialProjectList, initialEducationList, initialWorkExperienceList }

// use in ProjectForm

export const categories = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Angular',
  'Vue.js',
  'Frontend Development',
  'UI/UX Design',
  'Responsive Design',
  'Web Design',
  'Bootstrap',
  'Sass',
  'Webpack',
  'TypeScript',
  'jQuery',
  'Backend Development',
  'Node.js',
  'Express.js',
  'Django',
  'Flask',
  'Ruby on Rails',
  'PHP',
  'Database Management',
  'MySQL',
  'MongoDB',
  'Firebase',
  'RESTful APIs',
  'GraphQL',
  'Server Configuration',
  'AWS',
  'Heroku',
  'Deployment',
  'Version Control',
  'Testing',
  'Debugging',
  'Performance Optimization',
]
export const tags = [
  'FullStack',
  'Frontend',
  'Backend',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'SQL',
  'RESTful APIs',
  'GraphQL',
  'Database',
  'HTML',
  'CSS',
  'Web Development',
  'Server-side Development',
  'Client-side Development',
  'UI/UX',
  'Version Control',
  'Testing',
  'Deployment',
  'DevOps',
]