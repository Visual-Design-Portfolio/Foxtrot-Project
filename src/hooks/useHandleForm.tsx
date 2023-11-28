import { useState } from 'react'

const useHandleForm = () => {
  const steps = ['Title', 'Tech Stack', 'Project', 'Work experience', 'Education']
  const [complete, setComplete] = useState<boolean>(false)
  const [activeStep, setActiveStep] = useState(0)
  const [showCheck, setShowCheck] = useState(false)
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setComplete(true)
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      setShowCheck(true)
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
    setComplete(false)
  }

  return {
    steps,
    activeStep,
    setActiveStep,
    showCheck,
    complete,
    handleBack,
    handleNext,
    isLastStep: activeStep === steps.length - 1,
  }
}

export default useHandleForm
