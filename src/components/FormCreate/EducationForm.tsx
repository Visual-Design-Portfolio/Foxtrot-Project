import React from 'react'
import { EducationDTO } from '../../types/dto'

interface EducationFormProps {
  educationList: EducationDTO[]
  setEducationList: React.Dispatch<React.SetStateAction<EducationDTO[]>>
}

const EducationForm = ({ educationList, setEducationList }: EducationFormProps) => {
  const handleEducationChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedEducation = [...educationList]
    const key = e.target.name as keyof EducationDTO
    if (key === 'startDate' || key === 'endDate') {
      if (e.target.value === '') return
      updatedEducation[index][key] = new Date(e.target.value)
    } else {
      updatedEducation[index][key] = e.target.value
    }
    setEducationList(updatedEducation)
  }

  const handleAddEducation = () => {
    const newEducation = {
      school: '',
      degree: '',
      major: '',
      startDate: new Date(),
      endDate: new Date(),
    }
    setEducationList([...educationList, newEducation])
  }

  const handleDeleteEducation = (index: number) => {
    const updatedEducation = educationList.filter((_education, idx) => idx !== index)
    setEducationList(updatedEducation)
  }

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Add new Education</h2>
      <div className="space-y-6">
        {educationList.map((education, index) => (
          <div key={index} className="border rounded-md p-4">
            <div className="space-y-4">
              <div>
                <label htmlFor={`school_${index}`} className="block mb-1 font-medium">
                  School
                </label>
                <input
                  name="school"
                  onChange={(e) => handleEducationChange(index, e)}
                  type="text"
                  value={education.school}
                  id={`school_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`degree_${index}`} className="block mb-1 font-medium">
                  Degree
                </label>
                <input
                  type="text"
                  name="degree"
                  value={education.degree}
                  onChange={(e) => handleEducationChange(index, e)}
                  id={`degree_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`major_${index}`} className="block mb-1 font-medium">
                  Major
                </label>
                <input
                  name="major"
                  type="text"
                  value={education.major}
                  onChange={(e) => handleEducationChange(index, e)}
                  id={`major_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`startDate_${index}`} className="block mb-1 font-medium">
                  Start Date
                </label>
                <input
                  name="startDate"
                  type="date"
                  value={education.startDate.toISOString().split('T')[0]}
                  onChange={(e) => handleEducationChange(index, e)}
                  id={`startDate_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`endDate_${index}`} className="block mb-1 font-medium">
                  End Date
                </label>
                <input
                  name="endDate"
                  type="date"
                  value={education.endDate.toISOString().split('T')[0]}
                  onChange={(e) => handleEducationChange(index, e)}
                  id={`endDate_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="button"
                onClick={() => handleDeleteEducation(index)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Remove Education
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddEducation}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add New Education
        </button>
      </div>
    </div>
  )
}

export default EducationForm
