// PortfolioInfoForm.js
import React from 'react'
import { PortfolioInfoDTO } from '../../types/dto'


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
    <div className="bg-white rounded-md shadow-md p-6">
      <h1 className="text-2xl font-semibold mb-4">Portfolio Info</h1>
      <div className="mb-4">
        <label htmlFor="portfolioName" className="block mb-1 font-medium">
          Portfolio Name:
        </label>
        <input
          type="text"
          name="portfolioName"
          value={portfolioInfo.portfolioName}
          onChange={handleInputChange}
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="titleName" className="block mb-1 font-medium">
          Title Name:
        </label>
        <input
          type="text"
          name="titleName"
          value={portfolioInfo.titleName}
          onChange={handleInputChange}
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="picture" className="block mb-1 font-medium">
          Upload Picture:
        </label>
        <input
          type="file"
          id="picture"
          accept="image/*"
          // onChange={handlePictureChange}
          className="mb-1"
        />
      </div>
    </div>
  )
}

export default PortfolioInfoForm
