import { styled, StepConnector, stepConnectorClasses } from '@mui/material'

export const initialPortInfo = {
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
  'NodeJS',
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

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient( 95deg,rgb(131,111,255) 0%,rgb(112,71,247) 50%,rgb(77,51,214) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient( 95deg,rgb(131,111,255) 0%,rgb(112,71,247) 50%,rgb(77,51,214) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}))

export const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage: 'linear-gradient( 95deg,rgb(131,111,255) 0%,rgb(112,71,247) 50%,rgb(77,51,214) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage: 'linear-gradient( 95deg,rgb(131,111,255) 0%,rgb(112,71,247) 50%,rgb(77,51,214) 100%)',
  }),
}))
