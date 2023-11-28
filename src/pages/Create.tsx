import { FormEvent, useState } from 'react'
import PortfolioInfoForm from '../components/FormCreate/PortfolioInfoForm'
import TechStackForm from '../components/FormCreate/TechStackForm'
import ProjectForm from '../components/FormCreate/ProjectForm'
import { EducationDTO, PortfolioInfoDTO, ProjectDTO, WorkExperienceDTO } from '../types/dto'
import EducationForm from '../components/FormCreate/EducationForm'
import WorkExperienceForm from '../components/FormCreate/WorkExperienceForm'
import usePortfolios from '../hooks/usePortfolios'
import { initialEducationList, initialPortInfo, initialProjectList, initialWorkExperienceList } from '../utils/const'
import {
  styled,
  StepConnector,
  stepConnectorClasses,
  StepIconProps,
  Button,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import Check from '@mui/icons-material/Check'
import useHandleForm from '../hooks/useHandleForm'
import { AnimatePresence, motion } from 'framer-motion'

const Create = () => {
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
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

  const ColorlibStepIconRoot = styled('div')<{
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

  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props

    const icons: { [index: string]: React.ReactElement } = {
      1: <div>1</div>,
      2: <div>2</div>,
      3: <div>3</div>,
      4: <div>4</div>,
      5: <div>5</div>,
      check: <Check />,
    }

    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {completed ? icons['check'] : icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    )
  }

  const { steps, activeStep, complete, handleBack, handleNext, isLastStep } = useHandleForm()
  const { createPortfolio } = usePortfolios()
  const [portfolioInfo, setPortfolioInfo] = useState<PortfolioInfoDTO>(initialPortInfo)
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([])
  const [projectList, setProjectList] = useState<ProjectDTO[]>(initialProjectList)
  const [educationList, setEducationList] = useState<EducationDTO[]>(initialEducationList)
  const [workExperienceList, setWorkExperienceList] = useState<WorkExperienceDTO[]>(initialWorkExperienceList)

  const PageDisplay = (step: number) => {
    switch (step) {
      case 0:
        return (
          <AnimatePresence>
            <motion.div
              key="portfolio-info"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <PortfolioInfoForm portfolioInfo={portfolioInfo} setPortfolioInfo={setPortfolioInfo} />
            </motion.div>
          </AnimatePresence>
        )

      case 1:
        return (
          <AnimatePresence>
            <motion.div
              key="techStack"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <TechStackForm selectedTechStack={selectedTechStack} setSelectedTechStack={setSelectedTechStack} />
            </motion.div>
          </AnimatePresence>
        )
      case 2:
        return (
          <AnimatePresence>
            <motion.div
              key="project"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectForm projectList={projectList} setProjectList={setProjectList} />
            </motion.div>
          </AnimatePresence>
        )

      case 3:
        return (
          <AnimatePresence>
            <motion.div
              key="workExperience"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <WorkExperienceForm
                workExperienceList={workExperienceList}
                setWorkExperienceList={setWorkExperienceList}
              />
            </motion.div>
          </AnimatePresence>
        )

      case 4:
        return (
          <AnimatePresence>
            <motion.div
              key="education"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <EducationForm educationList={educationList} setEducationList={setEducationList} />
            </motion.div>
          </AnimatePresence>
        )

      default:
        return
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.table(projectList)
    console.table(selectedTechStack)
    console.table(portfolioInfo)
    console.table(educationList)
    try {
      await createPortfolio(portfolioInfo, selectedTechStack, projectList, educationList, workExperienceList)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col justify-center w-full h-screen">
      <h1 className="m-10 font-extrabold text-4xl  mx-auto text-center flex justify-center text-black ">
        Get Started on Your Portfolio
      </h1>
      <div className="">
        <Stack>
          {/* number step */}
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* number step */}
        </Stack>
      </div>

      {/* Display Form */}
      <div className=" m-10 p-10 bg-slate-100 rounded-xl h-full">
        <Typography>{PageDisplay(activeStep)}</Typography>

        {/* Button */}
        <div className="flex justify-between pt-2">
          <motion.div
            className="animatable"
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
          </motion.div>
          <motion.div
            className="animatable"
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            {!complete && (
              <Button
                type="submit"
                onClick={(e) => (isLastStep ? handleSubmit(e) : handleNext())}
                variant={isLastStep ? 'contained' : 'outlined'}
              >
                {isLastStep ? 'Finish' : 'Next'}
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Create
