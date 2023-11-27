// PortfolioInfoForm.js
import React from 'react'
import { PortfolioInfoDTO } from '../../types/dto'
import Typed from 'react-typed'

interface PortfolioInfoFormProps {
  portfolioInfo: PortfolioInfoDTO
  setPortfolioInfo: React.Dispatch<React.SetStateAction<PortfolioInfoDTO>>
}

const PortfolioInfoForm = ({ portfolioInfo, setPortfolioInfo }: PortfolioInfoFormProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPortfolioInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }))
  }

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="flex justify-center items-center flex-col">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-6">Hi! I am {portfolioInfo.ownerName}</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4">I am a </p>
          <Typed
            className="md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2 text-purple-500"
            strings={['Front End', 'Back End', 'Full Stack']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-purple-500">About Your Portfolio</h1>
        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="portfolioName">
          Portfolio Name:
        </label>
        <input type="text" name="name" value={portfolioInfo.name} onChange={handleInputChange} className="" />
        <label htmlFor="titleName">Title Name:</label>
        <input type="text" name="ownerName" value={portfolioInfo.ownerName} onChange={handleInputChange} />
      </div>
    </div>
  )
}

export default PortfolioInfoForm
